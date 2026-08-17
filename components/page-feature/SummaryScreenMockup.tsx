import EntryMark from "@/components/common/EntryMark";

const COUNTS = [
  { label: "Entries", value: "14" },
  { label: "Words written", value: "4,820" },
  { label: "Days written on", value: "11" },
  { label: "Longest gap", value: "3 days" },
];

const QUOTES = [
  {
    seed: "sum:sep18",
    text: "The meeting ended twenty minutes before noon, and for the first time in months, I didn’t reach for my keys.",
    when: "Sep 18 · 11:42",
  },
  {
    seed: "sum:sep24",
    text: "Realised that saying nothing wasn’t agreement, it was just fatigue.",
    when: "Sep 24 · 22:15",
  },
];

const QUESTIONS = [
  "You noted feeling unprepared on Wednesday despite having notes. Where was the gap?",
  "The word ‘relieved’ appeared after three separate cancellations. What made each feel like relief?",
  "What would a Thursday without back-to-back commitments look like?",
];

export default function SummaryScreenMockup() {
  return (
    <figure className="m-0 flex flex-col items-center gap-3">
      <div
        className="w-full max-w-170 mx-auto rounded-(--r-inner) border border-[#242830] bg-[#12141a] p-6 sm:p-10 select-none"
        role="img"
        aria-label="A generated fortnightly page: counted figures across the period, two sentences quoted exactly from the entries they came from, and three questions to bring up."
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between border-b border-[#242830] pb-6 mb-8 gap-4">
          <div>
            <span className="text-label text-[#7ac4d1]">Fortnightly page</span>
            <p className="text-[19px] font-medium text-(--ink) mt-1 numeric">
              16 – 29 September
            </p>
          </div>
          <span className="font-mono text-[12px] text-(--ink-3) shrink-0">
            Ready Sunday, as you chose
          </span>
        </div>

        {/* Counted, never estimated — so every figure here is a plain count. */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-9">
          {COUNTS.map((stat) => (
            <div
              key={stat.label}
              className="p-3.5 rounded-lg bg-[#171a20]/60 border border-[#242830]/80"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-(--ink-3)">
                {stat.label}
              </p>
              <p className="text-[22px] font-medium text-(--ink) mt-1 numeric">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-3 mb-9">
          <p className="text-label">In your own words</p>
          {QUOTES.map((quote) => (
            <div
              key={quote.seed}
              className="flex gap-3.5 p-4 rounded-lg bg-[#171a20]/40 border-l-2 border-[#7ac4d1]"
            >
              <EntryMark seed={quote.seed} size={26} weight={8} className="mt-0.5" />
              <div>
                <p className="text-[15px] leading-[23px] text-(--ink)">
                  “{quote.text}”
                </p>
                <span className="font-mono text-[11px] text-(--ink-3) block mt-1.5">
                  {quote.when}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-label mb-3">Three questions</p>
          <ol className="space-y-2.5 text-[14px] sm:text-[15px] leading-[23px] text-(--ink-2) list-decimal list-outside pl-5 marker:text-(--ink-3) marker:font-mono marker:text-[12px]">
            {QUESTIONS.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </div>
      </div>

      <figcaption className="text-meta">
        Illustration. Every page is written from one person&apos;s own entries.
      </figcaption>
    </figure>
  );
}
