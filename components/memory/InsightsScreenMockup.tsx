import EntryMark from "@/components/common/EntryMark";

const EVIDENCE = [
  {
    seed: "ins:sep28",
    when: "Sep 28 · 20:45",
    text: "Took the longer loop past the canal. Felt the quiet settle in after 8pm.",
  },
  {
    seed: "ins:aug15",
    when: "Aug 15 · 21:10",
    text: "Evening walk around the park. No headphones, just quiet streets.",
  },
  {
    seed: "ins:jun02",
    when: "Jun 02 · 21:30",
    text: "Late evening walk. The temperature dropped and everything was quiet.",
  },
];

export default function InsightsScreenMockup() {
  return (
    <figure className="m-0 w-full max-w-110 flex flex-col gap-3">
      <div
        className="rounded-(--r-inner) border border-[#242830] bg-[#12141a] p-6 select-none"
        role="img"
        aria-label="An observation on the Insights screen, opened to show the three entries it was drawn from, each with its date and the sentence it matched."
      >
        <div className="flex items-center justify-between border-b border-[#242830] pb-4 mb-6">
          <div>
            <span className="text-label text-[#7ac4d1]">Observation</span>
            <p className="text-[16px] font-medium text-(--ink)">
              Opened to its entries
            </p>
          </div>
          <span className="font-mono text-[12px] text-(--ink-3) numeric">
            3 of 14
          </span>
        </div>

        <div className="rounded-xl bg-[#171a20] border border-[#242830] p-4">
          <p className="text-[15px] font-medium text-(--ink) leading-snug mb-2">
            “evening walk” and “quiet” keep arriving together
          </p>
          <p className="text-[13px] leading-5 text-(--ink-2) mb-4">
            14 entries over six months, most of them after a day with more than
            four meetings.
          </p>

          {/* The evidence is the point of the section: every observation
              opens to the exact entries behind it. */}
          <div className="border-t border-[#242830] pt-3.5 space-y-2.5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-(--ink-3)">
              The entries behind it
            </p>

            {EVIDENCE.map((entry) => (
              <div
                key={entry.seed}
                className="flex gap-3 p-3 rounded-lg bg-[#12141a] border border-[#242830]/80"
              >
                <EntryMark seed={entry.seed} size={22} weight={8} className="mt-0.5" />
                <div>
                  <span className="font-mono text-[11px] text-[#7ac4d1] block mb-1 numeric">
                    {entry.when}
                  </span>
                  <p className="text-[13px] leading-5 text-(--ink-2)">
                    “{entry.text}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <figcaption className="text-meta text-center">
        Illustration, not a real journal.
      </figcaption>
    </figure>
  );
}
