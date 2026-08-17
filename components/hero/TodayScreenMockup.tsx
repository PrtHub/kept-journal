import React from "react";

export default function TodayScreenMockup() {
  return (
    <div
      className="relative w-full max-w-85 sm:max-w-95 aspect-9/18.5 rounded-[44px] border border-[#242830] bg-[#12141a]/90 backdrop-blur-md p-6 flex flex-col justify-between overflow-hidden shadow-none select-none"
      style={{
        boxShadow: "0 0 0 1px rgba(36, 40, 48, 0.4)",
      }}
      role="img"
      aria-label="Kept Today screen showing current entry, prompt, and week strip"
    >
      {/* Top Status & Date */}
      <div>
        <div className="flex items-center justify-between text-meta text-[#6b7178] mb-8">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#6b7178]">
            Monday · Oct 14
          </span>
          <span className="w-2 h-2 rounded-full bg-[#7ac4d1]/60"></span>
        </div>

        {/* Generated Entry Mark for Today */}
        <div className="flex items-center gap-4 mb-6">
          <svg viewBox="0 0 100 100" width="48" height="48" className="shrink-0">
            <path
              d="M 30 40 Q 40 25 55 30 Q 70 35 75 50 Q 80 65 65 75 Q 50 85 35 75 Q 20 65 25 50 Z"
              fill="#8fd0da"
              fillOpacity="0.15"
            />
            <path
              d="M 30 40 Q 40 25 55 30 Q 70 35 75 50 Q 80 65 65 75 Q 50 85 35 75 Q 20 65 25 50 Z"
              fill="none"
              stroke="#7ac4d1"
              strokeWidth="4.5"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <p className="text-[13px] font-mono text-[#6b7178] uppercase tracking-wider">Entry 142</p>
            <p className="text-[15px] font-medium text-[#f4f4f1]">21:40 · Quiet</p>
          </div>
        </div>

        {/* Daily Prompt & Journal Text */}
        <div className="space-y-3">
          <p className="text-[13px] text-[#7ac4d1] font-mono tracking-wide">
            What stayed with you on the walk back?
          </p>
          <p className="text-[15px] leading-5.5 text-[#9aa0a6] font-normal">
            Left the office while it was still raining. Thought about what was said last Tuesday regarding the boundary. It didn&apos;t feel sharp anymore, just necessary.
          </p>
        </div>
      </div>

      {/* Week Strip at Bottom */}
      <div className="pt-6 border-t border-[#242830]">
        <div className="flex justify-between items-center text-center">
          {[
            { day: "M", filled: true, active: true },
            { day: "T", filled: true, active: false },
            { day: "W", filled: false, active: false },
            { day: "T", filled: true, active: false },
            { day: "F", filled: true, active: false },
            { day: "S", filled: false, active: false },
            { day: "S", filled: true, active: false },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5">
              <span className="font-mono text-[11px] text-[#6b7178]">{item.day}</span>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                  item.active
                    ? "border-[#7ac4d1] bg-[#7ac4d1]/20"
                    : item.filled
                    ? "border-[#242830] bg-[#171a20]"
                    : "border-transparent bg-transparent"
                }`}
              >
                {item.filled && (
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.active ? "bg-[#7ac4d1]" : "bg-[#9aa0a6]"
                    }`}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
