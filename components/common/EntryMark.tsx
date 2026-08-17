import { markPath } from "@/lib/mark";

type EntryMarkProps = {
  /** Anything stable and unique to the entry. Same seed, same mark, always. */
  seed: string;
  size?: number;
  /** Stroke weight in viewBox units, not px — scales with `size`. */
  weight?: number;
  className?: string;
  title?: string;
};

/**
 * One generated entry mark: a 20%-opacity interior wash under a stroke.
 * The wash is what makes it read as holding something rather than as an
 * outline, so both paths are always drawn.
 */
export default function EntryMark({
  seed,
  size = 24,
  weight = 6,
  className = "",
  title,
}: EntryMarkProps) {
  const d = markPath(seed);

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={`shrink-0${className ? ` ${className}` : ""}`}
    >
      {title ? <title>{title}</title> : null}
      <path d={d} fill="#8FD0DA" fillOpacity="0.2" />
      <path
        d={d}
        fill="none"
        stroke="#7AC4D1"
        strokeWidth={weight}
        strokeLinejoin="round"
      />
    </svg>
  );
}
