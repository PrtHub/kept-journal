import React from "react";
import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import { COMPARISONS } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/config";

export const metadata = {
  title: "Journal App Comparisons — Kept vs Day One, Apple Journal & More",
  description:
    "Factual comparisons between Kept and other journaling applications. Explore local SQLite encryption, one-page summaries, and pricing differences.",
  alternates: { canonical: `${SITE_URL}/vs` },
  openGraph: {
    title: "Journal App Comparisons — Kept vs Day One, Apple Journal & More",
    description:
      "Factual comparisons between Kept and other journaling applications. Explore local SQLite encryption, one-page summaries, and pricing differences.",
    url: `${SITE_URL}/vs`,
  },
};

export default function ComparisonsIndexPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#7ac4d1]/30 selection:text-(--ink)">
      <AmbientField />
      <Navbar />

      <main id="main-content" className="relative z-10 pt-32 pb-24 flex-1">
        <div className="max-w-270 mx-auto px-6">
          <div className="prose-container w-full mx-auto">
            <Link
              href="/"
              className="text-meta text-[#7ac4d1] inline-flex items-center gap-1.5 mb-8 hover:underline"
            >
              ← Back to home
            </Link>

            <SectionLabel>APP COMPARISONS</SectionLabel>
            <h1 className="text-display mb-6 text-(--ink)">
              How Kept compares to other journals
            </h1>

            <p className="text-lead text-(--ink-2) mb-12">
              Kept is built on a different architectural premise: your database lives encrypted on your iPhone with no remote account, and the app writes you a one-page summary on request. Explore factual comparisons against existing alternatives below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {COMPARISONS.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/vs/${comp.slug}`}
                  className="p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830] hover:border-[#7ac4d1]/40 transition-all duration-220 group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-meta text-(--ink-3) mb-2">
                      {comp.competitorType}
                    </div>
                    <h2 className="text-question text-(--ink) mb-3 group-hover:text-[#7ac4d1] transition-colors">
                      Kept vs {comp.competitorName}
                    </h2>
                    <p className="text-[15px] text-(--ink-2) leading-relaxed mb-6">
                      {comp.lead}
                    </p>
                  </div>

                  <div className="text-meta text-[#7ac4d1] inline-flex items-center gap-1">
                    Read architectural comparison →
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
                  Free to write, always. The summary is the paid part.
                </p>
              </div>
              <PrimaryButton />
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
