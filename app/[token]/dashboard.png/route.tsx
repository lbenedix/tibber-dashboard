import path from "path";
import { promises as fs } from "fs";
import { ImageResponse } from "@vercel/og";
import { fetchTibberData } from "@/src/tibber";
import { PriceIcon } from "@/src/PriceIcon";
import { ValueDisplay } from "@/src/ValueDisplay";

async function loadFonts() {
  const fontBold = await fs.readFile(
    path.join(process.cwd(), "fonts/Inter_18pt-Bold.ttf")
  );
  const fontExtraLight = await fs.readFile(
    path.join(process.cwd(), "fonts/Inter_18pt-ExtraLight.ttf")
  );
  return { fontBold, fontExtraLight };
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const [tibberData, fonts] = await Promise.all([
    fetchTibberData(token),
    loadFonts(),
  ]);

  const currentPower = tibberData.consumption.at(-1)?.y;
  const currentPrice = Math.round(tibberData.currentPrice * 100);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "600px",
          height: "800px",
          backgroundColor: "lime",
        }}
      >
        <div
          style={{
            width: "800px",
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "white",
            fontFamily: "Inter",
            transform: "translate(-100px, 100px) rotate(-90deg)",
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
      </div>
    ),
    {
      width: 600,
      height: 800,
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
