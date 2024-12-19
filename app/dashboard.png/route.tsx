import path from "path";
import { promises as fs } from "fs";

import { ImageResponse } from "@vercel/og";
import { fetchTibberData } from "@/src/tibber";
import { PriceIcon } from "@/src/icons";
import { ValueDisplay } from "@/src/ValueDisplay";

// Remove edge runtime directive

async function loadFonts() {
  const fontBold = await fs.readFile(
    path.join(process.cwd(), "fonts/Inter_18pt-Bold.ttf")
  );
  const fontExtraLight = await fs.readFile(
    path.join(process.cwd(), "fonts/Inter_18pt-ExtraLight.ttf")
  );
  return { fontBold, fontExtraLight };
}

export async function GET() {
  const [tibberData, fonts] = await Promise.all([
    fetchTibberData(),
    loadFonts(),
  ]);

  const currentPower = tibberData.consumption.at(-1)?.y;
  const currentPrice = Math.round(tibberData.currentPrice * 100);

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
            icon={<PriceIcon level={tibberData.currentLevel} />}
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
          data: fonts.fontBold,
          weight: 700,
        },
        {
          name: "Inter",
          data: fonts.fontExtraLight,
          weight: 200,
        },
      ],
    }
  );
}
