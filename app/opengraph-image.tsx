import { ImageResponse } from "next/og";
import { logoDataUri } from "@/lib/logo";

export const alt = "Kept — a private journal that writes you a page";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Geist, straight from Google Fonts. Satori cannot read `next/font`'s output,
 * and it cannot parse woff2 — the old User-Agent is what makes Google serve
 * a TrueType file instead. Falls back to the bundled default if the build has
 * no network, so this can never break a deploy over a font.
 */
async function geist(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Geist:wght@${weight}`,
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1; rv:6.0)" } }
    ).then((res) => res.text());

    const url = css.match(/src:\s*url\((.+?)\)/)?.[1];
    if (!url) return null;

    return await fetch(url).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const medium = await geist(500);

  return new ImageResponse(
    (
      // The mark and the wordmark on the Nocturne ground. Nothing else.
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          // Flat ground. Satori's rasteriser bands wide radial gradients into
          // visible rings, and the field is not part of this image anyway.
          background: "#0A0B0D",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoDataUri({ size: 176 })} width={176} height={176} alt="" />
        <div
          style={{
            fontSize: 148,
            fontWeight: 500,
            letterSpacing: "-0.03em",
            color: "#F4F4F1",
            fontFamily: medium ? "Geist" : undefined,
          }}
        >
          Kept
        </div>
      </div>
    ),
    {
      ...size,
      fonts: medium
        ? [{ name: "Geist", data: medium, weight: 500, style: "normal" }]
        : undefined,
    }
  );
}
