import EntryMark from "@/components/common/EntryMark";

const EARLIER = [
  {
    seed: "today:141",
    when: "Sat · Entry 141",
    text: "Cooked properly for the first time this week.",
  },
  {
    seed: "today:140",
    when: "Fri · Entry 140",
    text: "Said no to the Sunday thing and nothing bad happened.",
  },
];

const WEEK = [
  { day: "M", seed: "week:mon" },
  { day: "T", seed: "week:tue" },
  { day: "W", seed: null },
  { day: "T", seed: "week:thu" },
  { day: "F", seed: "week:fri" },
  { day: "S", seed: null },
  { day: "S", seed: "week:sun", today: true },
];

/** iOS status bar. Understated, but it is what makes this read as a phone. */
function StatusBar() {
  return (
    <div className="flex items-center justify-between text-(--ink-2) mb-7">
      <span className="font-mono text-[12px] tracking-tight numeric">21:40</span>
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
          <rect x="0" y="7.5" width="2.5" height="3.5" rx="0.6" />
          <rect x="4" y="5.5" width="2.5" height="5.5" rx="0.6" />
          <rect x="8" y="3" width="2.5" height="8" rx="0.6" />
          <rect x="12" y="0.5" width="2.5" height="10.5" rx="0.6" opacity="0.4" />
        </svg>
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" stroke="currentColor">
          <path d="M1 4.2a8.5 8.5 0 0 1 12 0" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M3.6 6.9a5 5 0 0 1 6.8 0" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="7" cy="9.4" r="1" fill="currentColor" stroke="none" />
        </svg>
        <svg width="22" height="11" viewBox="0 0 22 11">
          <rect
            x="0.5"
            y="0.5"
            width="18"
            height="10"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.5"
          />
          <rect x="2" y="2" width="13" height="7" rx="1.6" fill="currentColor" />
          <path
            d="M20.5 4v3a2 2 0 0 0 0-3z"
            fill="currentColor"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default function TodayScreenMockup() {
  return (
    <figure className="m-0 flex flex-col items-center gap-3">
      <div
        // 1290×2796 — the real capture ratio, so it reads as a screenshot
        // rather than as a card that happens to be tall.
        className="relative w-full max-w-[300px] sm:max-w-[320px] aspect-[1290/2796] rounded-[44px] border border-[#242830] overflow-hidden select-none"
        role="img"
        aria-label="The Kept Today screen: the date, one entry with its generated mark, the day's prompt with a written answer, and a strip of the week showing which days have entries."
      >
        {/* The app's own ambient field, opaque — a screenshot isn't see-through. */}
        <div
          className="absolute inset-0 bg-[#0a0b0d]"
          style={{
            backgroundImage:
              "radial-gradient(70% 45% at 30% 12%, #16323d 0%, transparent 70%), radial-gradient(60% 40% at 78% 82%, #112730 0%, transparent 75%)",
          }}
        />

        <div className="relative h-full flex flex-col justify-between px-6 pt-4 pb-7">
          <div>
            <StatusBar />

            <p className="text-label mb-6">Sunday · 14 October</p>

            <div className="flex items-center gap-3.5 mb-7">
              <EntryMark seed="today:142" size={44} weight={6} />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-(--ink-3)">
                  Entry 142
                </p>
                <p className="text-[15px] font-medium text-(--ink)">
                  21:40 · Quiet
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[13px] leading-[19px] text-[#7ac4d1] font-mono">
                What stayed with you on the walk back?
              </p>
              <p className="text-[15px] leading-[23px] text-(--ink-2)">
                Left the office while it was still raining. Thought about what
                was said last Tuesday regarding the boundary. It didn&apos;t
                feel sharp anymore, just necessary.
              </p>
            </div>

            {/* Earlier entries, so the screen reads as a timeline rather than
                as one entry floating in an empty phone. */}
            <div className="mt-7 pt-5 border-t border-[#242830] space-y-4">
              <p className="text-label">Earlier</p>
              {EARLIER.map((entry) => (
                <div key={entry.seed} className="flex items-start gap-3">
                  <EntryMark seed={entry.seed} size={26} weight={8} className="mt-0.5" />
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-(--ink-3)">
                      {entry.when}
                    </p>
                    <p className="text-[13px] leading-[19px] text-(--ink-2) truncate">
                      {entry.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Week strip — marks, not dots. They are the app's signature. */}
          <div className="pt-5 border-t border-[#242830]">
            <div className="flex justify-between items-end">
              {WEEK.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <span className="font-mono text-[10px] text-(--ink-3)">
                    {item.day}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center ${
                      item.today ? "ring-1 ring-[#7ac4d1]" : ""
                    }`}
                  >
                    {item.seed ? (
                      <EntryMark
                        seed={item.seed}
                        size={20}
                        weight={7}
                        className={item.today ? "" : "opacity-55"}
                      />
                    ) : (
                      <span className="w-1 h-1 rounded-full bg-[#242830]" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <figcaption className="text-meta">Illustration, not a real journal.</figcaption>
    </figure>
  );
}
