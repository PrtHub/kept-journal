import SectionLabel from "@/components/common/SectionLabel";
import Reveal from "@/components/common/Reveal";

export default function ProblemSection() {
  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="prose-container">
          <SectionLabel>WHY THIS IS DIFFERENT</SectionLabel>

          <h2 className="text-display mb-8">
            Most journal apps ask for effort on day one and pay you back on day
            ninety.
          </h2>

          <div className="space-y-6 text-prose">
            <p>
              You write an entry and get a saved entry. You write another and
              still get nothing. The insights — the reason you downloaded it —
              need weeks of material before they can say anything that
              isn&apos;t generic. Meanwhile the app keeps asking you to type
              into an empty box.
            </p>
            <p>
              Almost nobody reaches day ninety. So Kept is built to pay for
              itself on day one.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
