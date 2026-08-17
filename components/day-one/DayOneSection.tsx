"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/common/SectionLabel";
import YearGridMockup from "./YearGridMockup";

export default function DayOneSection() {
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
        {/* Left Column: Copy */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <SectionLabel>DAY ONE</SectionLabel>

          <h2 className="text-display mb-6">
            You arrive with a year already written.
          </h2>

          <div className="prose-container space-y-6 text-prose mb-6">
            <p>
              Kept opens your photo library and asks about five pictures you already took. Each one becomes a dated entry with a mark of its own. Twenty minutes, and the timeline that was empty has a year in it.
            </p>
          </div>

          <p className="text-meta text-[#6b7178]">
            The photos never leave the device, and Kept only sees the ones you pick.
          </p>
        </div>

        {/* Right Column: Visual */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <YearGridMockup />
        </div>
      </div>
    </section>
  );
}
