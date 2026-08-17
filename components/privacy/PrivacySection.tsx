"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/common/SectionLabel";

const PRIVACY_FACTS = [
  {
    label: "Storage",
    detail: "Encrypted database on the device, key in the iOS Keychain",
  },
  {
    label: "Account",
    detail: "None. There is nothing to sign into",
  },
  {
    label: "Face ID",
    detail: "Optional lock, checked against your hardware before it's switched on",
  },
  {
    label: "Export",
    detail: "Markdown, any time, yours to take",
  },
  {
    label: "Backup",
    detail: "One encrypted file, locked with a passphrase we never see",
  },
  {
    label: "If you stop paying",
    detail: "Everything you wrote stays, and stays readable",
  },
];

export default function PrivacySection() {
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
        {/* Main Privacy Plane Card */}
        <div
          className="rounded-(--r-inner) border border-[#242830] bg-[#12141a] p-8 sm:p-12 mb-8"
          style={{ padding: "var(--s7)" }}
        >
          <SectionLabel>PRIVACY</SectionLabel>

          <h2 className="text-display mb-6 text-[#f4f4f1]">
            Your journal is on your phone. Encrypted.
          </h2>

          <div className="prose-container space-y-4 text-prose mb-8">
            <p>
              No account. No sign-up. No sync. No analytics. There is no server with your journal on it, because there is no server.
            </p>
          </div>

          <h3 className="text-question mb-4 text-[#f4f4f1]">
            What leaves the phone, and when
          </h3>

          <div className="prose-container space-y-4 text-prose mb-10">
            <p>
              When you ask for a summary, that period&apos;s entries are sent to be written up, and then forgotten — nothing is stored, and nothing is used to train anything. That is the only thing that ever goes out, and only when you tap.
            </p>
            <p>
              Turn the summary off and nothing leaves at all.
            </p>
          </div>

          {/* Fact Table */}
          <div className="w-full border-t border-[#242830]">
            {PRIVACY_FACTS.map((row, idx) => (
              <div
                key={idx}
                className="py-4 border-b border-[#242830] grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
              >
                <div className="sm:col-span-4 font-medium text-[16px] text-[#f4f4f1] pr-0 sm:pr-6">
                  {row.label}
                </div>
                <div className="sm:col-span-8 text-[15px] sm:text-[16px] text-[#9aa0a6]">
                  {row.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead line under the card */}
        <p className="text-lead text-[#f4f4f1] max-w-270">
          Writing, reading, searching and exporting are free forever. The money buys the page Kept writes you — never access to your own life.
        </p>
      </div>
    </section>
  );
}
