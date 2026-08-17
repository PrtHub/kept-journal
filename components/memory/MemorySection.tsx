"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/common/SectionLabel";
import InsightsScreenMockup from "./InsightsScreenMockup";

export default function MemorySection() {
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-spacing">
      <div
        ref={ref}
        className={`max-w-270 mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center transition-all duration-680 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Left Column: Visual (Alternates from Day One section) */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
          <InsightsScreenMockup />
        </div>

        {/* Right Column: Copy */}
        <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
          <SectionLabel>THE LONG GAME</SectionLabel>

          <h2 className="text-display mb-6">
            It remembers what you don&apos;t.
          </h2>

          <div className="prose-container space-y-6 text-prose">
            <p>
              A year ago today, you wrote something. Kept shows you. It notices which words keep coming back, which went quiet, and which two entries belong together — and every observation opens to the exact entries behind it, so you can check.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
