/**
 * The Kept mark. Generated output from the app's own drawing routine, not a
 * hand-drawn logo — so the path is used verbatim everywhere, never redrawn,
 * simplified or "cleaned up".
 */
export const LOGO_PATH =
  "M 23.70 44.62 Q 28.40 37.81 34.58 28.65 Q 40.76 19.49 49.34 26.48 " +
  "Q 57.92 33.47 64.12 38.67 Q 70.33 43.88 75.66 52.77 Q 81.00 61.66 72.44 67.71 " +
  "Q 63.88 73.76 56.78 76.02 Q 49.67 78.27 41.61 79.39 Q 33.56 80.51 29.78 73.31 " +
  "Q 26.00 66.10 22.50 58.76 Q 19.00 51.43 23.70 44.62 Z";

/**
 * Standalone SVG of the mark, for contexts that can only take an image —
 * `ImageResponse` renders through Satori, which handles `<img>` far more
 * predictably than inline SVG elements.
 */
export function logoSvg({
  size = 100,
  ground,
  inset = 0,
}: { size?: number; ground?: string; inset?: number } = {}): string {
  const span = 100 + inset * 2;
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${-inset} ${-inset} ${span} ${span}">`,
    ground ? `<rect x="${-inset}" y="${-inset}" width="${span}" height="${span}" fill="${ground}"/>` : "",
    `<path d="${LOGO_PATH}" fill="#8FD0DA" fill-opacity="0.2"/>`,
    `<path d="${LOGO_PATH}" fill="none" stroke="#7AC4D1" stroke-width="6.05" stroke-linejoin="round"/>`,
    `</svg>`,
  ].join("");
}

/** Base64 data URI — Satori will not fetch a relative or remote asset. */
export function logoDataUri(opts?: Parameters<typeof logoSvg>[0]): string {
  const svg = logoSvg(opts);
  const base64 =
    typeof Buffer !== "undefined"
      ? Buffer.from(svg).toString("base64")
      : btoa(svg);
  return `data:image/svg+xml;base64,${base64}`;
}
