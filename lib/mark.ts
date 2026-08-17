/**
 * Entry marks.
 *
 * Every entry in Kept gets a small abstract closed curve derived from that
 * entry's identity. The marks are the app's visual signature, so the site
 * generates them the same way the app does: deterministically, from a seed
 * string, with no randomness at call time.
 *
 * Determinism matters twice over — the same entry must always draw the same
 * mark, and the server and client must agree during hydration.
 */

/** FNV-1a. Stable across runtimes, unlike anything derived from string hashing built-ins. */
function seedFrom(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** mulberry32 — small, fast, good enough for shape jitter. */
function rng(seed: number): () => number {
  let a = seed || 1;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const round = (n: number) => Math.round(n * 100) / 100;

type Pt = { x: number; y: number };

/**
 * A closed curve built from quadratic segments around a jittered, squashed,
 * leaning ring — the same construction as the logo mark.
 *
 * Two details do most of the work. Each control point's distance is measured
 * against its own two endpoints rather than a shared radius, so a segment
 * between two short vertices stays tucked in instead of ballooning back out
 * to a circle. And the whole ring is squashed on one axis and rotated, which
 * is what gives each mark a lean rather than a pebble's symmetry.
 *
 * Returns an SVG path `d` fitted to a 100×100 viewBox.
 */
export function markPath(seed: string, { inset = 16 }: { inset?: number } = {}): string {
  const rand = rng(seedFrom(seed));

  const lobes = 4 + Math.floor(rand() * 3); // 4–6
  const phase = rand() * Math.PI * 2;
  const squash = 0.66 + rand() * 0.3; // flatten one axis
  const lean = rand() * Math.PI; // ...then rotate the flattening
  const cosL = Math.cos(lean);
  const sinL = Math.sin(lean);

  // Squash on the y axis of an unrotated frame, then rotate into place.
  const place = (a: number, r: number): Pt => {
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r * squash;
    return { x: x * cosL - y * sinL, y: x * sinL + y * cosL };
  };

  const angles: number[] = [];
  const radii: number[] = [];
  for (let i = 0; i < lobes; i++) {
    angles.push(phase + (i / lobes) * Math.PI * 2 + (rand() - 0.5) * 0.5);
    radii.push(0.6 + rand() * 0.62); // 0.60–1.22, unitless until the fit below
  }

  const verts = angles.map((a, i) => place(a, radii[i]));

  // Control points sit outward on the angular midpoint, at a distance scaled
  // from the two vertices they bridge.
  const ctls: Pt[] = [];
  for (let i = 0; i < lobes; i++) {
    const j = (i + 1) % lobes;
    let mid = (angles[i] + angles[j]) / 2;
    // Unwrap across the seam so the closing segment bulges outward too.
    if (Math.abs(angles[j] - angles[i]) > Math.PI) mid += Math.PI;

    // Fewer lobes span wider arcs, which need a longer control reach to stay
    // convex rather than caving toward the centre.
    const reach = 1 / Math.cos(Math.PI / lobes);
    const r = ((radii[i] + radii[j]) / 2) * reach * (1.0 + rand() * 0.34);
    ctls.push(place(mid, r));
  }

  // Fit to the viewBox so every mark reads at the same optical weight,
  // whatever its aspect. Uniform scale — squash is the shape, not the frame.
  const all = [...verts, ...ctls];
  const minX = Math.min(...all.map((p) => p.x));
  const maxX = Math.max(...all.map((p) => p.x));
  const minY = Math.min(...all.map((p) => p.y));
  const maxY = Math.max(...all.map((p) => p.y));
  const span = 100 - inset * 2;
  const scale = span / Math.max(maxX - minX, maxY - minY);
  const offX = inset + (span - (maxX - minX) * scale) / 2 - minX * scale;
  const offY = inset + (span - (maxY - minY) * scale) / 2 - minY * scale;
  const fit = (p: Pt) => `${round(p.x * scale + offX)} ${round(p.y * scale + offY)}`;

  let d = `M ${fit(verts[0])}`;
  for (let i = 0; i < lobes; i++) {
    d += ` Q ${fit(ctls[i])} ${fit(verts[(i + 1) % lobes])}`;
  }
  return `${d} Z`;
}

/** A batch of distinct marks — index folded into the seed so none repeat. */
export function markPaths(
  namespace: string,
  count: number,
  opts?: { inset?: number }
): string[] {
  return Array.from({ length: count }, (_, i) => markPath(`${namespace}:${i}`, opts));
}
