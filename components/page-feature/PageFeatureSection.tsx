"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/common/SectionLabel";
import SummaryScreenMockup from "./SummaryScreenMockup";

export default function PageFeatureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-spacing">
      <div
        ref={ref}
        className={`max-w-270 mx-auto px-6 transition-all duration-680 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Centered Heading */}
        <div className="text-center max-w-[62ch] mx-auto mb-12">
          <SectionLabel>THE PAID PART</SectionLabel>

          <h2 className="text-display mb-4">
            One page, on the day you chose.
          </h2>

          <p className="text-lead">
            Every fortnight — or weekly, or monthly, or only when you ask — Kept writes up what you wrote. Your own sentences, quoted exactly. Counts that were counted, not estimated. Three questions at the end you might want to bring up.
          </p>
        </div>

        {/* Large Central Summary Mockup */}
        <div className="mb-16">
          <SummaryScreenMockup />
        </div>

        {/* Three-Item Fact Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 pt-4">
          <div>
            <h3 className="text-question mb-2 text-[#f4f4f1]">
              Your words, not a paraphrase
            </h3>
            <p className="text-prose text-[#9aa0a6]">
              Quoted lines are selected from your own sentences by position, so a reworded quote cannot occur.
            </p>
          </div>

          <div>
            <h3 className="text-question mb-2 text-[#f4f4f1]">
              Numbers that were counted
            </h3>
            <p className="text-prose text-[#9aa0a6]">
              Every figure on the page is rendered from your entries. The model is never asked for one.
            </p>
          </div>

          <div>
            <h3 className="text-question mb-2 text-[#f4f4f1]">
              You choose what it can&apos;t see
            </h3>
            <p className="text-prose text-[#9aa0a6]">
              Name a subject to leave out and it is left out — a rule, not a preference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
