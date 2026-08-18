import React from "react";
import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import { PROMPTS } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/config";

export const metadata = {
  title: "Journal Prompts & Reflection Question Bank — Kept",
  description:
    "Explore curated journal prompts for therapy preparation, CBT thought records, anxiety overthinking, weekly reviews, and evening reflection.",
  alternates: { canonical: `${SITE_URL}/prompts` },
  openGraph: {
    title: "Journal Prompts & Reflection Question Bank — Kept",
    description:
      "Explore curated journal prompts for therapy preparation, CBT thought records, anxiety overthinking, weekly reviews, and evening reflection.",
    url: `${SITE_URL}/prompts`,
  },
};

export default function PromptsIndexPage() {
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
            <SectionLabel>QUESTION BANK &amp; PROMPTS</SectionLabel>
            <h1 className="text-display mb-6 text-(--ink)">
              Curated prompts for honest reflection
            </h1>

            <p className="text-lead text-(--ink-2)">
              When you need an anchor to begin writing, explore our curated collections for therapy preparation, cognitive behavioral examination, weekly reviews, and quiet evenings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {PROMPTS.map((p) => (
              <Link
                key={p.slug}
                href={`/prompts/${p.slug}`}
                className="p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830] hover:border-[#7ac4d1]/40 transition-all duration-220 group flex flex-col justify-between"
              >
                <div>
                  <div className="text-meta text-[#7ac4d1] mb-2 font-medium">
                    {p.category.toUpperCase()}
                  </div>
                  <h2 className="text-question text-(--ink) mb-3 group-hover:text-[#7ac4d1] transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-[15px] text-(--ink-2) leading-relaxed mb-6">
                    {p.lead}
                  </p>
                </div>

                <div className="text-meta text-[#7ac4d1] inline-flex items-center gap-1">
                  View prompt collection →
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="pt-8 border-t border-[#242830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-question text-(--ink) mb-1">
                Ready to write freely?
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
