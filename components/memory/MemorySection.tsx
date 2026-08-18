import SectionLabel from "@/components/common/SectionLabel";
import Reveal from "@/components/common/Reveal";
import InsightsScreenMockup from "./InsightsScreenMockup";

export default function MemorySection() {
  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Visual left this time, alternating against Day One. */}
        <Reveal className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
          <InsightsScreenMockup />
        </Reveal>

        <Reveal
          delay={90}
          className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2"
        >
          <SectionLabel>THE LONG GAME</SectionLabel>

          <h2 className="text-display mb-6">It remembers what you don&apos;t.</h2>

          <div className="prose-container text-prose">
            <p>
              A year ago today, you wrote something. Kept shows you. It notices
              which words keep coming back, which went quiet, and which two
              entries belong together — and every observation opens to the exact
              entries behind it, so you can check.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
