import SectionLabel from "@/components/common/SectionLabel";
import Reveal from "@/components/common/Reveal";
import YearGridMockup from "./YearGridMockup";

export default function DayOneSection() {
  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left column: copy */}
        <Reveal className="lg:col-span-6">
          <div className="flex flex-col items-start text-left">
            <SectionLabel>DAY ONE</SectionLabel>

            <h2 className="text-display mb-6">
              You arrive with a year already written.
            </h2>

            <div className="prose-container text-prose mb-6">
              <p>
                Kept opens your photo library and asks about five pictures you
                already took. Each one becomes a dated entry with a mark of its
                own. Twenty minutes, and the timeline that was empty has a year
                in it.
              </p>
            </div>

            <p className="text-meta">
              The photos never leave the device, and Kept only sees the ones you
              pick.
            </p>
          </div>
        </Reveal>

        {/* Right column: the year grid */}
        <Reveal delay={90} className="lg:col-span-6 flex justify-center lg:justify-end">
          <YearGridMockup />
        </Reveal>
      </div>
    </section>
  );
}
