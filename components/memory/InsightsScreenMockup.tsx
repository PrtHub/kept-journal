import React from "react";

export default function InsightsScreenMockup() {
  return (
    <div
      className="w-full max-w-110 rounded-(--r-inner) border border-[#242830] bg-[#12141a] p-6 select-none"
      role="img"
      aria-label="Kept Insights screen showing an observation expanded to show the entries behind it"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#242830] pb-4 mb-6">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#7ac4d1]">
            Observation
          </span>
          <p className="text-[16px] font-medium text-[#f4f4f1]">
            Linked Entries
          </p>
        </div>
        <span className="font-mono text-[12px] text-[#6b7178] px-2 py-0.5 rounded bg-[#171a20] border border-[#242830]">
          3 entries
        </span>
      </div>

      {/* Main Expanded Observation Card */}
      <div className="rounded-xl bg-[#171a20] border border-[#242830] p-4 mb-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <p className="text-[15px] font-medium text-[#f4f4f1] leading-snug">
            Words recurring together: &ldquo;evening walk&rdquo; &amp; &ldquo;quiet&rdquo;
          </p>
        </div>
        <p className="text-[13px] text-[#9aa0a6] mb-4">
          Appeared across 14 entries over 6 months, typically following high-meeting days.
        </p>

        {/* Evidence / Entries Behind Observation */}
        <div className="border-t border-[#242830] pt-3 space-y-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#6b7178]">
            Entries Behind This Observation
          </p>

          <div className="p-3 rounded-lg bg-[#12141a] border border-[#242830]/80">
            <span className="font-mono text-[11px] text-[#7ac4d1] block mb-1">
              Sep 28 · 20:45
            </span>
            <p className="text-[13px] text-[#9aa0a6] leading-relaxed">
              &ldquo;Took the longer loop past the canal. Felt the quiet settle in after 8pm.&rdquo;
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[#12141a] border border-[#242830]/80">
            <span className="font-mono text-[11px] text-[#7ac4d1] block mb-1">
              Aug 15 · 21:10
            </span>
            <p className="text-[13px] text-[#9aa0a6] leading-relaxed">
              &ldquo;Evening walk around the park. No headphones, just quiet streets.&rdquo;
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[#12141a] border border-[#242830]/80">
            <span className="font-mono text-[11px] text-[#7ac4d1] block mb-1">
              Jun 02 · 21:30
            </span>
            <p className="text-[13px] text-[#9aa0a6] leading-relaxed">
              &ldquo;Late evening walk. The temperature dropped and everything was quiet.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
