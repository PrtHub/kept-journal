import React from "react";
import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import { ALTERNATIVES } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/config";

export const metadata = {
  title: "Best Journal App Alternatives for iPhone — Kept",
  description:
    "Discover private, local-first alternatives to Day One, Apple Journal, Notion, Stoic, Rosebud, and Daylio.",
  alternates: { canonical: `${SITE_URL}/alternatives` },
  openGraph: {
    title: "Best Journal App Alternatives for iPhone — Kept",
    description:
      "Discover private, local-first alternatives to Day One, Apple Journal, Notion, Stoic, Rosebud, and Daylio.",
    url: `${SITE_URL}/alternatives`,
  },
};

export default function AlternativesIndexPage() {
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
            <SectionLabel>APP ALTERNATIVES</SectionLabel>
            <h1 className="text-display mb-6 text-(--ink)">
              Find a better journaling alternative
            </h1>

            <p className="text-lead text-(--ink-2)">
              Looking for a journal without cloud vulnerabilities, recurring subscription locks on basic writing, streak guilt, or conversational chatbot interruptions? Explore why people switch to Kept.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ALTERNATIVES.map((alt) => (
              <Link
                key={alt.slug}
                href={`/alternatives/${alt.slug}`}
                className="p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830] hover:border-[#7ac4d1]/40 transition-all duration-220 group flex flex-col justify-between"
              >
                <div>
                  <div className="text-meta text-(--ink-3) mb-2 font-medium">
                    {alt.targetType.toUpperCase()}
                  </div>
                  <h2 className="text-question text-(--ink) mb-3 group-hover:text-[#7ac4d1] transition-colors">
                    Best {alt.targetApp} Alternative
                  </h2>
                  <p className="text-[15px] text-(--ink-2) leading-relaxed mb-6">
                    {alt.lead}
                  </p>
                </div>

                <div className="text-meta text-[#7ac4d1] inline-flex items-center gap-1">
                  Read why people switch →
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="pt-8 border-t border-[#242830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-question text-(--ink) mb-1">
                Ready to try Kept?
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
