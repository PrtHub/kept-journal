import React from "react";
import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import { FEATURES } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/config";

export const metadata = {
  title: "Architecture & Features — Kept Technical Deep Dives",
  description:
    "Explore how Kept is built: SQLCipher on-device encryption, ephemeral one-page summaries, photo backfill onboarding, and visual marks.",
  alternates: { canonical: `${SITE_URL}/features` },
  openGraph: {
    title: "Architecture & Features — Kept Technical Deep Dives",
    description:
      "Explore how Kept is built: SQLCipher on-device encryption, ephemeral one-page summaries, photo backfill onboarding, and visual marks.",
    url: `${SITE_URL}/features`,
  },
};

export default function FeaturesIndexPage() {
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
            <SectionLabel>PRODUCT ARCHITECTURE</SectionLabel>
            <h1 className="text-display mb-6 text-(--ink)">
              How Kept is engineered
            </h1>

            <p className="text-lead text-(--ink-2)">
              Kept&apos;s privacy and design principles are implemented directly in the software architecture: hardware-backed encryption keys, ephemeral synthesis pipelines, and prompt-free interfaces. Explore our technical deep dives below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {FEATURES.map((feat) => (
              <Link
                key={feat.slug}
                href={`/features/${feat.slug}`}
                className="p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830] hover:border-[#7ac4d1]/40 transition-all duration-220 group flex flex-col justify-between"
              >
                <div>
                  <div className="text-meta text-[#7ac4d1] mb-2 font-medium">
                    {feat.label}
                  </div>
                  <h2 className="text-question text-(--ink) mb-3 group-hover:text-[#7ac4d1] transition-colors">
                    {feat.title}
                  </h2>
                  <p className="text-[15px] text-(--ink-2) leading-relaxed mb-6">
                    {feat.lead}
                  </p>
                </div>

                <div className="text-meta text-[#7ac4d1] inline-flex items-center gap-1">
                  Read technical deep dive →
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="pt-8 border-t border-[#242830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-question text-(--ink) mb-1">
                Ready to install Kept?
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
