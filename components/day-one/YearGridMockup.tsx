"use client";

import React, { useEffect, useRef, useState } from "react";
import { markPath } from "@/lib/mark";

const MONTHS = [
  { name: "Jan", count: 5 },
  { name: "Feb", count: 4 },
  { name: "Mar", count: 5 },
  { name: "Apr", count: 4 },
  { name: "May", count: 5 },
  { name: "Jun", count: 4 },
  { name: "Jul", count: 5 },
  { name: "Aug", count: 4 },
  { name: "Sep", count: 4 },
  { name: "Oct", count: 5 },
  { name: "Nov", count: 4 },
  { name: "Dec", count: 4 },
];

const TOTAL = MONTHS.reduce((n, m) => n + m.count, 0);

export default function YearGridMockup() {
  const ref = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  let markIndex = 0;

  return (
    <figure ref={ref} className="m-0 w-full max-w-115 flex flex-col gap-3">
      <div
        className="rounded-(--r-inner) border border-[#242830] bg-[#12141a] p-6 select-none"
        role="img"
        aria-label={`A year grid of ${TOTAL} entries, one generated mark each, grouped by month.`}
      >
        <div className="flex items-center justify-between border-b border-[#242830] pb-4 mb-5">
          <div>
            <span className="text-label">Timeline</span>
            <p className="text-[15px] font-medium text-(--ink)">
              Past 12 months
            </p>
          </div>
          <span className="font-mono text-[12px] text-(--ink-2) numeric">
            {TOTAL} entries
          </span>
        </div>

        {/* Three months across, not four — at four the marks shrink past the
            size where they read as distinct shapes, which is the whole point. */}
        <div className="grid grid-cols-3 gap-x-3 gap-y-4">
          {MONTHS.map((month) => (
            <div key={month.name} className="flex flex-col gap-1.5">
              <span className="font-mono text-[11px] text-(--ink-3)">
                {month.name}
              </span>
              <div className="grid grid-cols-3 gap-1 p-1.5 rounded-lg bg-[#171a20]/60 border border-[#242830]/60 min-h-19 content-center">
                {Array.from({ length: month.count }, (_, i) => {
                  // Every mark on the grid is generated from its own seed, so
                  // no two repeat — which is the claim the section is making.
                  const seed = `${month.name}:${i}`;
                  const d = markPath(seed);
                  const delay = markIndex++ * 40;

                  return (
                    <div
                      key={i}
                      // Same `.reveal` machinery as the sections: hidden state
                      // is scoped to html.js, so no JS means no blank grid.
                      className={`reveal flex items-center justify-center${
                        animated ? " is-in" : ""
                      }`}
                      style={
                        {
                          "--reveal-delay": `${delay}ms`,
                          "--reveal-duration": "500ms",
                          "--reveal-y": "0px",
                          "--reveal-scale": "0.6",
                        } as React.CSSProperties
                      }
                    >
                      <svg viewBox="0 0 100 100" width="26" height="26" aria-hidden="true">
                        <path d={d} fill="#8fd0da" fillOpacity="0.22" />
                        <path
                          d={d}
                          fill="none"
                          stroke="#7ac4d1"
                          strokeWidth="7"
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

      <figcaption className="text-meta text-center">
        Every entry draws its own mark.
      </figcaption>
    </figure>
  );
}
