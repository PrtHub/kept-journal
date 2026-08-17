"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/common/SectionLabel";

export default function ProblemSection() {
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
        className={`max-w-270 mx-auto px-6 transition-all duration-680 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="prose-container">
          <SectionLabel>WHY THIS IS DIFFERENT</SectionLabel>

          <h2 className="text-display mb-8">
            Most journal apps ask for effort on day one and pay you back on day ninety.
          </h2>

          <div className="space-y-6 text-prose">
            <p>
              You write an entry and get a saved entry. You write another and still get nothing. The insights — the reason you downloaded it — need weeks of material before they can say anything that isn&apos;t generic. Meanwhile the app keeps asking you to type into an empty box.
            </p>
            <p>
              Almost nobody reaches day ninety. So Kept is built to pay for itself on day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
