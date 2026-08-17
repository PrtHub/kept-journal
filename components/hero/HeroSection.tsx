"use client";

import { useEffect, useState } from "react";
import SectionLabel from "@/components/common/SectionLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import TodayScreenMockup from "./TodayScreenMockup";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[max(620px,calc(100vh-64px))] flex items-center pt-24 pb-16">
      <div className="max-w-270 w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Label */}
          <div
            className={`transition-all duration-680 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <SectionLabel>A PRIVATE JOURNAL FOR IPHONE</SectionLabel>
          </div>

          {/* H1 Headline - max-width: 20ch on desktop */}
          <h1
            className={`text-hero max-w-[20ch] mb-6 transition-all duration-680 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "290ms" }}
          >
            The journal your therapist asked you to keep.
          </h1>

          {/* Lead */}
          <p
            className={`text-lead max-w-[42ch] mb-8 transition-all duration-680 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "380ms" }}
          >
            Write freely between sessions. Get one page back, on the day you chose.
          </p>

          {/* Primary CTA Button */}
          <div
            id="download"
            className={`flex flex-col items-start gap-3 transition-all duration-680 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "470ms" }}
          >
            <PrimaryButton>Download on the App Store</PrimaryButton>

            {/* Meta under the button */}
            <p className="text-meta text-[#6b7178] pl-1">
              Free to write, always. The summary is the paid part.
            </p>
          </div>
        </div>

        {/* Right Column: Screenshot Visual */}
        <div
          className={`lg:col-span-5 flex justify-center lg:justify-end transition-opacity duration-680 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <TodayScreenMockup />
        </div>
      </div>
    </section>
  );
}
