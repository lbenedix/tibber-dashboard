import path from "path";
import { promises as fs } from "fs";
import satori from "satori";
import sharp from "sharp";
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

  const svg = await satori(
    <div
      style={{
        width: "500px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fff",
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
          label=""
          value={currentPrice}
          unit="Cent"
          icon={<PriceIcon level={tibberData.currentLevel} />}
          data={tibberData.prices}
          showCurrentTime={true}
          scale={100}
          chartUnit="ct"
          color="black"
        />
        {/*<ValueDisplay*/}
        {/*  label="Verbrauch"*/}
        {/*  value={Math.round(currentPower * 1000)}*/}
        {/*  unit="Watt"*/}
        {/*  data={tibberData.consumption}*/}
        {/*  chartUnit="kWh"*/}
        {/*/>*/}
      </div>
    </div>,
    {
      width: 500,
      height: 500,
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

  const pngBuffer = await sharp(Buffer.from(svg))
    // .rotate(-90)
    .removeAlpha()
    // .toColourspace("b-w")
    .toFormat("png", { bitdepth: 8 })
    .toBuffer();

  // Return the PNG with appropriate headers
  return new Response(pngBuffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "no-store, must-revalidate",
    },
  });
}
