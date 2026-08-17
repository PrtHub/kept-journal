import SectionLabel from "@/components/common/SectionLabel";
import Reveal from "@/components/common/Reveal";
import SummaryScreenMockup from "./SummaryScreenMockup";

const FACTS = [
  {
    title: "Your words, not a paraphrase",
    body: "Quoted lines are selected from your own sentences by position, so a reworded quote cannot occur.",
  },
  {
    title: "Numbers that were counted",
    body: "Every figure on the page is rendered from your entries. The model is never asked for one.",
  },
  {
    title: "You choose what it can’t see",
    body: "Name a subject to leave out and it is left out — a rule, not a preference.",
  },
];

export default function PageFeatureSection() {
  return (
    <section className="section-spacing">
      <div className="max-w-270 mx-auto px-6">
        <Reveal className="max-w-[62ch] mx-auto mb-14">
          <div className="text-center">
            <SectionLabel>THE PAID PART</SectionLabel>
            <h2 className="text-display mb-4">One page, on the day you chose.</h2>
          </div>

          {/* Heading centred, lead not: a paragraph past one line is never
              centred — ragged on both edges is harder to read. §4. */}
          <p className="text-lead">
            Every fortnight — or weekly, or monthly, or only when you ask — Kept
            writes up what you wrote. Your own sentences, quoted exactly. Counts
            that were counted, not estimated. Three questions at the end you
            might want to bring up.
          </p>
        </Reveal>

        <Reveal delay={90} className="mb-16">
          <SummaryScreenMockup />
        </Reveal>

        {/* Three facts. Precise descriptions of how the feature is built —
            not embellishable. See landing-page.md §7.5. */}
        <Reveal delay={140}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pt-4">
            {FACTS.map((fact) => (
              <div key={fact.title}>
                <h3 className="text-question mb-2">{fact.title}</h3>
                <p className="text-prose">{fact.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
