"use client";

import { useEffect, useRef, useState } from "react";

// Generate distinct closed mark paths for the year grid
const MARK_PATHS = [
  "M 25 35 Q 35 20 50 25 Q 65 30 70 45 Q 75 60 60 70 Q 45 80 30 70 Q 15 60 25 35 Z",
  "M 20 40 Q 30 25 45 20 Q 60 25 75 35 Q 85 50 75 65 Q 60 80 40 75 Q 20 70 15 55 Z",
  "M 30 30 Q 50 15 70 30 Q 85 50 70 70 Q 50 85 30 70 Q 15 50 30 30 Z",
  "M 22 45 Q 28 30 42 22 Q 58 20 72 32 Q 80 48 72 65 Q 60 78 42 75 Q 25 72 22 45 Z",
  "M 28 32 Q 44 18 64 26 Q 78 40 74 60 Q 66 76 46 76 Q 28 72 22 54 Z",
];

export default function YearGridMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 12 months with representative entries
  const months = [
    { name: "Jan", entries: [3, 8, 14, 21, 28] },
    { name: "Feb", entries: [4, 11, 18, 25] },
    { name: "Mar", entries: [2, 9, 15, 23, 30] },
    { name: "Apr", entries: [6, 12, 20, 27] },
    { name: "May", entries: [1, 8, 15, 22, 29] },
    { name: "Jun", entries: [5, 12, 19, 26] },
    { name: "Jul", entries: [3, 10, 17, 24, 31] },
    { name: "Aug", entries: [7, 14, 21, 28] },
    { name: "Sep", entries: [4, 11, 18, 25] },
    { name: "Oct", entries: [2, 9, 16, 23, 30] },
    { name: "Nov", entries: [6, 13, 20, 27] },
    { name: "Dec", entries: [4, 11, 18, 25] },
  ];

  let totalEntryIndex = 0;

  return (
    <div
      ref={ref}
      className="w-full max-w-120 rounded-(--r-inner) border border-[#242830] bg-[#12141a] p-6 select-none"
      role="img"
      aria-label="Kept year grid showing a filled year of generated marks"
    >
      <div className="flex items-center justify-between border-b border-[#242830] pb-4 mb-5">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#6b7178]">
            Timeline
          </span>
          <p className="text-[15px] font-medium text-[#f4f4f1]">Past 12 Months</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#7ac4d1]" />
          <span className="font-mono text-[12px] text-[#9aa0a6]">58 entries</span>
        </div>
      </div>

      {/* Grid of Months & Marks */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {months.map((m, mIdx) => (
          <div key={mIdx} className="flex flex-col gap-2">
            <span className="font-mono text-[11px] text-[#6b7178]">{m.name}</span>
            <div className="grid grid-cols-3 gap-1.5 p-2 rounded-lg bg-[#171a20]/60 border border-[#242830]/60 min-h-14.5 items-center">
              {m.entries.map((day, dIdx) => {
                const currentIdx = totalEntryIndex++;
                const pathIdx = (mIdx + dIdx) % MARK_PATHS.length;
                const delayMs = currentIdx * 40;

                return (
                  <div
                    key={dIdx}
                    title={`${m.name} ${day}`}
                    className="flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      opacity: animated ? 1 : 0,
                      transform: animated ? "scale(1)" : "scale(0.6)",
                      transitionDelay: `${delayMs}ms`,
                    }}
                  >
                    <svg
                      viewBox="0 0 100 100"
                      width="18"
                      height="18"
                      className="shrink-0"
                    >
                      <path
                        d={MARK_PATHS[pathIdx]}
                        fill="#8fd0da"
                        fillOpacity="0.25"
                      />
                      <path
                        d={MARK_PATHS[pathIdx]}
                        fill="none"
                        stroke="#7ac4d1"
                        strokeWidth="5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
