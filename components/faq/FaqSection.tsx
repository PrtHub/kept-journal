"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/common/SectionLabel";

const FAQS = [
  {
    q: "Do you read my journal?",
    a: "No, and there is no mechanism to. There is no account and no server holding your entries. When you ask for a summary, that period's writing is sent to be written up and then forgotten — nothing is stored and nothing trains a model.",
  },
  {
    q: "What happens if I stop paying?",
    a: "Everything you wrote stays on your phone and stays readable, searchable and exportable. You lose new summaries. You never lose your journal.",
  },
  {
    q: "What if I lose my phone?",
    a: "Your journal is in your encrypted iPhone backup, so it comes back with your phone. Kept also keeps one encrypted backup file you can put anywhere — locked with a passphrase we never see and cannot recover.",
  },
  {
    q: "Is there a free trial?",
    a: "No. You can write, read, search and export for free forever. The paid part is the page Kept writes you.",
  },
  {
    q: "Does it renew?",
    a: "The monthly and yearly plans renew until you stop them. We send you a notice three days before, naming the amount. Cancelling takes two taps in Settings. The no-end-date option never renews.",
  },
  {
    q: "Do I need a therapist?",
    a: "No. Kept never asks. It asks how often you want a summary and which day it should be ready.",
  },
  {
    q: "Is my mood tracked?",
    a: "Only if you want. Mood is asked after you write, never before, and always skippable. It stays on the device with everything else.",
  },
  {
    q: "Is there an Android version?",
    a: "Not yet. iPhone first, deliberately.",
  },
];

export default function FaqSection() {
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
        <div className="prose-container">
          <SectionLabel>FAQ</SectionLabel>

          <h2 className="text-display mb-10 text-[#f4f4f1]">
            Common questions
          </h2>

          <div className="border-t border-[#242830]">
            {FAQS.map((item, idx) => (
              <details
                key={idx}
                className="faq-item group"
                open={idx === 0}
              >
                <summary className="py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7ac4d1] rounded">
                  <span className="text-question pr-4 text-[#f4f4f1]">
                    {item.q}
                  </span>
                  <span className="faq-indicator text-[22px] font-mono leading-none shrink-0">
                    +
                  </span>
                </summary>
                <div className="pt-3 pb-2 text-prose text-[#9aa0a6]">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
