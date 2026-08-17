import SectionLabel from "@/components/common/SectionLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import Reveal from "@/components/common/Reveal";
import TodayScreenMockup from "./TodayScreenMockup";

export default function HeroSection() {
  return (
    // svh, not vh — mobile browser chrome otherwise makes the hero taller than
    // the screen it is supposed to exactly fill.
    <section className="relative min-h-[max(620px,calc(100svh-64px))] flex items-center pt-28 pb-20 lg:pt-24 lg:pb-16">
      <div className="max-w-270 w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-center">
        {/* Left column: copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <Reveal on="load" delay={200} y={12}>
            <SectionLabel>A PRIVATE JOURNAL FOR IPHONE</SectionLabel>
          </Reveal>

          <Reveal on="load" delay={290} y={12}>
            <h1 className="text-hero max-w-[20ch] mb-6">
              The journal your therapist asked you to keep.
            </h1>
          </Reveal>

          <Reveal on="load" delay={380} y={12}>
            <p className="text-lead max-w-[42ch] mb-8">
              Write freely between sessions. Get one page back, on the day you
              chose.
            </p>
          </Reveal>

          <Reveal on="load" delay={470} y={12}>
            <div className="flex flex-col items-start gap-3">
              <PrimaryButton />

              {/* Answers "so it's a paywall" before the thought forms.
                  Load-bearing — see landing-page.md §7.2. */}
              <p className="text-meta pl-1">
                Free to write, always. The summary is the paid part.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right column: the Today screen */}
        <Reveal
          on="load"
          delay={500}
          y={0}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <TodayScreenMockup />
        </Reveal>
      </div>
    </section>
  );
}
