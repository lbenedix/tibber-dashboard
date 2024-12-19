const TIBBER_API_URL = "https://api.tibber.com/v1-beta/gql";

const query = `
  query {
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
              startsAt
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
  }
`;

export async function fetchTibberData() {
  const response = await fetch(TIBBER_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TIBBER_API_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

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
