import { ImageResponse } from "@vercel/og";
import { fetchTibberData } from "@/src/tibber";
import { PriceIcon } from "@/src/icons";
import { ValueDisplay } from "@/src/ValueDisplay";

export const runtime = "edge";

const fontBold = fetch(
  new URL("/public/Inter_18pt-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const fontExtraLight = fetch(
  new URL("/public/Inter_18pt-ExtraLight.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const tibberData = await fetchTibberData();
  const currentPower = tibberData.consumption.at(-1)?.y;
  const currentPrice = Math.round(tibberData.currentPrice * 100);
  const priceLevel = tibberData.currentLevel;

  return new ImageResponse(
    (
      <div
        style={{
          width: "800px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "white",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <ValueDisplay
            label="Strompreis"
            value={currentPrice}
            unit="Cent"
            icon={<PriceIcon level={priceLevel} />}
            data={tibberData.prices}
            showCurrentTime={true}
            scale={100}
            chartUnit="ct"
          />
          <ValueDisplay
            label="Verbrauch"
            value={Math.round(currentPower * 1000)}
            unit="Watt"
            data={tibberData.consumption}
            chartUnit="kWh"
          />
        </div>
      </div>
    ),
    {
      width: 800,
      height: 600,
      fonts: [
        {
          name: "Inter",
          data: await fontBold,
          weight: 700,
        },
        {
          name: "Inter",
          data: await fontExtraLight,
          weight: 200,
        },
      ],
    }
  );
}
