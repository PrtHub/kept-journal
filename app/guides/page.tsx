import React from "react";
import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import { GUIDES } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/config";

export const metadata = {
  title: "Journaling Guides & Reflection Frameworks — Kept",
  description:
    "Long-form practical guides on journaling for therapy, local-first storage privacy, 10-minute weekly reviews, and ADHD journaling without burnout.",
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    title: "Journaling Guides & Reflection Frameworks — Kept",
    description:
      "Long-form practical guides on journaling for therapy, local-first storage privacy, 10-minute weekly reviews, and ADHD journaling without burnout.",
    url: `${SITE_URL}/guides`,
  },
};

export default function GuidesIndexPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#7ac4d1]/30 selection:text-(--ink)">
      <AmbientField />
      <Navbar />

      <main id="main-content" className="relative z-10 pt-32 pb-24 flex-1">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/"
            className="text-meta text-[#7ac4d1] inline-flex items-center gap-1.5 mb-8 hover:underline"
          >
            ← Back to home
          </Link>

          <div className="max-w-3xl mb-12">
            <SectionLabel>ESSAYS &amp; GUIDES</SectionLabel>
            <h1 className="text-display mb-6 text-(--ink)">
              Practical guides on honest journaling
            </h1>

            <p className="text-lead text-(--ink-2)">
              In-depth frameworks and essays on preparing for therapy sessions, protecting personal data with local-first encryption, conducting weekly reviews, and journaling without streak burnout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {GUIDES.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830] hover:border-[#7ac4d1]/40 transition-all duration-220 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-meta text-[#7ac4d1] font-medium">
                      {g.category.toUpperCase()}
                    </span>
                    <span className="text-meta text-(--ink-3)">
                      {g.readTime}
                    </span>
                  </div>
                  <h2 className="text-question text-(--ink) mb-3 group-hover:text-[#7ac4d1] transition-colors">
                    {g.title}
                  </h2>
                  <p className="text-[15px] text-(--ink-2) leading-relaxed mb-6">
                    {g.lead}
                  </p>
                </div>

                <div className="text-meta text-[#7ac4d1] inline-flex items-center gap-1">
                  Read guide →
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="pt-8 border-t border-[#242830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-question text-(--ink) mb-1">
                Ready to put these guides into practice?
              </p>
              <p className="text-meta text-(--ink-3)">
                Free to write, always. Encrypted on your phone.
              </p>
            </div>
            <PrimaryButton />
          </div>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
