import React from "react";

interface LogoMarkProps {
  size?: number;
  className?: string;
}

export default function LogoMark({ size = 40, className = "" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label="Kept logo mark"
      className={`shrink-0 ${className}`}
    >
      <path
        d="M 23.70 44.62 Q 28.40 37.81 34.58 28.65 Q 40.76 19.49 49.34 26.48 Q 57.92 33.47 64.12 38.67 Q 70.33 43.88 75.66 52.77 Q 81.00 61.66 72.44 67.71 Q 63.88 73.76 56.78 76.02 Q 49.67 78.27 41.61 79.39 Q 33.56 80.51 29.78 73.31 Q 26.00 66.10 22.50 58.76 Q 19.00 51.43 23.70 44.62 Z"
        fill="#8FD0DA"
        fillOpacity="0.2"
      />
      <path
        d="M 23.70 44.62 Q 28.40 37.81 34.58 28.65 Q 40.76 19.49 49.34 26.48 Q 57.92 33.47 64.12 38.67 Q 70.33 43.88 75.66 52.77 Q 81.00 61.66 72.44 67.71 Q 63.88 73.76 56.78 76.02 Q 49.67 78.27 41.61 79.39 Q 33.56 80.51 29.78 73.31 Q 26.00 66.10 22.50 58.76 Q 19.00 51.43 23.70 44.62 Z"
        fill="none"
        stroke="#7AC4D1"
        strokeWidth="6.05"
        strokeLinejoin="round"
      />
    </svg>
  );
}
