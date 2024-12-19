const TIBBER_API_URL = "https://api.tibber.com/v1-beta/gql";

const query = `{
  viewer {
    homes {
      consumption(resolution: HOURLY, last: 24) {
        nodes {
          to
          consumption
        }
      }
      currentSubscription {
        priceInfo {
          current {
            total
            level
          }
          today {
            total
            startsAt
          }
        }
      }
    }
  }
}`;

export async function fetchTibberData(token: string) {
  const response = await fetch(TIBBER_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  const home = data.data.viewer.homes[0];
  const prices = home.currentSubscription.priceInfo.today.map((price) => ({
    x: price.startsAt,
    y: price.total,
  }));

  const consumption =
    home.consumption?.nodes?.map((node) => ({
      x: node.to,
      y: node.consumption,
    })) || [];

  return {
    consumption,
    prices,
    currentPrice: home.currentSubscription.priceInfo.current.total,
    currentLevel: home.currentSubscription.priceInfo.current.level,
  };
}
