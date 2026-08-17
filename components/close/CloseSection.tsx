"use client";

import { useEffect, useRef, useState } from "react";
import LogoMark from "@/components/common/LogoMark";
import PrimaryButton from "@/components/common/PrimaryButton";

export default function CloseSection() {
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
    <section className="section-spacing text-center">
      <div
        ref={ref}
        className={`max-w-270 mx-auto px-6 flex flex-col items-center justify-center transition-all duration-680 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Mark at 56px */}
        <div className="mb-6">
          <LogoMark size={56} />
        </div>

        {/* Display Heading */}
        <h2 className="text-display max-w-[24ch] mx-auto mb-8 text-[#f4f4f1]">
          It&apos;s a journal. It&apos;s on your phone. It writes you a page.
        </h2>

        {/* Download Button */}
        <div className="flex flex-col items-center gap-3">
          <PrimaryButton>Download on the App Store</PrimaryButton>
          <p className="text-meta text-[#6b7178]">Free to write, always.</p>
        </div>
      </div>
    </section>
  );
}
