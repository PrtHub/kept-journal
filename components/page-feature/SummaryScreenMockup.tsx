import React from "react";

export default function SummaryScreenMockup() {
  return (
    <div
      className="w-full max-w-170 mx-auto rounded-(--r-inner) border border-[#242830] bg-[#12141a] p-6 sm:p-10 select-none"
      role="img"
      aria-label="Kept generated one-page summary showing counted facts, exact quotes, and reflection questions"
    >
      {/* Summary Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#242830] pb-6 mb-8 gap-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#7ac4d1]">
            Fortnightly Summary
          </span>
          <p className="text-[19px] font-medium text-[#f4f4f1] mt-1">
            September 16 – September 29
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[12px] text-[#6b7178] px-2.5 py-1 rounded bg-[#171a20] border border-[#242830]">
            Page 1 of 1
          </span>
        </div>
      </div>

      {/* Counted Facts Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label: "Entries", val: "14" },
          { label: "Words Written", val: "4,820" },
          { label: "Key Themes", val: "3" },
          { label: "Quiet Evenings", val: "6" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-lg bg-[#171a20]/60 border border-[#242830]/80"
          >
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#6b7178]">
              {stat.label}
            </p>
            <p className="text-[20px] font-medium text-[#f4f4f1] font-mono mt-0.5">
              {stat.val}
            </p>
          </div>
        ))}
      </div>

      {/* Exact Quoted Excerpts */}
      <div className="space-y-4 mb-8">
        <p className="font-mono text-[11px] uppercase tracking-widest text-[#6b7178]">
          Exact Excerpts
        </p>
        <div className="p-4 rounded-lg bg-[#171a20]/40 border-l-2 border-[#7ac4d1] text-[15px] leading-5.5 text-[#f4f4f1]">
          <p className="italic">
            &ldquo;The meeting ended twenty minutes before noon, and for the first time in months, I didn&apos;t reach for my keys.&rdquo;
          </p>
          <span className="font-mono text-[11px] text-[#6b7178] block mt-1.5 not-italic">
            Entry from Sep 18 · 11:42
          </span>
        </div>
        <div className="p-4 rounded-lg bg-[#171a20]/40 border-l-2 border-[#7ac4d1] text-[15px] leading-5.5 text-[#f4f4f1]">
          <p className="italic">
            &ldquo;Realised that saying nothing wasn&apos;t agreement, it was just fatigue.&rdquo;
          </p>
          <span className="font-mono text-[11px] text-[#6b7178] block mt-1.5 not-italic">
            Entry from Sep 24 · 22:15
          </span>
        </div>
      </div>

      {/* Three Questions */}
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-[#6b7178] mb-3">
          Three Questions for Reflection
        </p>
        <ol className="space-y-2.5 text-[14px] sm:text-[15px] text-[#9aa0a6] leading-relaxed list-decimal list-inside pl-1">
          <li>You noted feeling unprepared on Wednesday despite having notes. Where was the gap?</li>
          <li>The word &apos;relieved&apos; appeared after three separate cancellations. What made each feel like relief?</li>
          <li>What would a Thursday without back-to-back commitments look like?</li>
        </ol>
      </div>
    </div>
  );
}
