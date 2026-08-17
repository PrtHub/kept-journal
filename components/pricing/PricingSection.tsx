"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/common/SectionLabel";

export default function PricingSection() {
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
        {/* Header */}
        <div className="text-center max-w-[62ch] mx-auto mb-12">
          <SectionLabel>PRICING</SectionLabel>
          <h2 className="text-display text-[#f4f4f1]">
            Writing is free. The page is what you&apos;re paying for.
          </h2>
        </div>

        {/* Pricing Cards Grid (Year is first on mobile, middle on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 items-stretch">
          {/* Card 1: A Month */}
          <div className="order-2 lg:order-1 flex flex-col justify-between rounded-(--r-inner) border border-[#242830] bg-[#12141a] p-8">
            <div>
              <p className="text-question text-[#f4f4f1] mb-4">A real go</p>
              <p className="text-label text-[#6b7178] mb-6">A MONTH</p>
            </div>
            <div>
              <p className="text-display font-medium text-[#f4f4f1] font-mono mb-2">
                $9.99
              </p>
              <p className="text-meta text-[#6b7178]">billed monthly</p>
            </div>
          </div>

          {/* Card 2: A Year (Recommended - Accent Border & Subtle Tint) */}
          <div className="order-1 lg:order-2 flex flex-col justify-between rounded-(--r-inner) border border-[#7ac4d1] bg-[#7ac4d1]/6 p-8 relative">
            <div>
              <p className="text-question text-[#f4f4f1] mb-4">I&apos;m doing this</p>
              <p className="text-label text-[#7ac4d1] mb-6">A YEAR</p>
            </div>
            <div>
              <p className="text-display font-medium text-[#f4f4f1] font-mono mb-2">
                $39.99
              </p>
              <p className="text-meta text-[#9aa0a6]">
                67% less over twelve months
              </p>
            </div>
          </div>

          {/* Card 3: No End Date */}
          <div className="order-3 lg:order-3 flex flex-col justify-between rounded-(--r-inner) border border-[#242830] bg-[#12141a] p-8">
            <div>
              <p className="text-question text-[#f4f4f1] mb-4">It&apos;s just mine now</p>
              <p className="text-label text-[#6b7178] mb-6">NO END DATE</p>
            </div>
            <div>
              <p className="text-display font-medium text-[#f4f4f1] font-mono mb-2">
                $99.99
              </p>
              <p className="text-meta text-[#6b7178]">paid once, never renews</p>
            </div>
          </div>
        </div>

        {/* Centered Renewal Meta */}
        <p className="text-meta text-[#6b7178] text-center max-w-[62ch] mx-auto">
          The monthly and yearly plans renew until you stop them. We tell you three days before, and name the amount. Cancelling takes two taps in Settings.
        </p>
      </div>
    </section>
  );
}
