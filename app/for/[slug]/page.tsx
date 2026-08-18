import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import { USE_CASES, UseCaseItem } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return USE_CASES.map((uc) => ({
    slug: uc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const uc = USE_CASES.find((u) => u.slug === slug);
  if (!uc) return {};

  const url = `${SITE_URL}/for/${slug}`;

  return {
    title: uc.metaTitle,
    description: uc.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: uc.metaTitle,
      description: uc.metaDescription,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: uc.metaTitle,
      description: uc.metaDescription,
    },
  };
}

export default async function UseCaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const uc = USE_CASES.find((u) => u.slug === slug);

  if (!uc) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/for/${slug}#article`,
        headline: uc.headline,
        description: uc.metaDescription,
        url: `${SITE_URL}/for/${slug}`,
        author: {
          "@type": "Organization",
          name: "Kept",
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/for/${slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Workflows",
            item: `${SITE_URL}/for`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: uc.title,
            item: `${SITE_URL}/for/${slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/for/${slug}#faq`,
        mainEntity: uc.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  const otherUseCases = USE_CASES.filter((u) => u.slug !== slug).slice(0, 3);

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#7ac4d1]/30 selection:text-(--ink)">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AmbientField />
      <Navbar />

      <main id="main-content" className="relative z-10 pt-32 pb-24 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-meta text-(--ink-3)">
              <Link href="/" className="hover:text-(--ink) transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/for" className="hover:text-(--ink) transition-colors">
                Workflows
              </Link>
              <span>/</span>
              <span className="text-(--ink)">{uc.title}</span>
            </nav>

            <SectionLabel>{uc.subtitle.toUpperCase()}</SectionLabel>
            <h1 className="text-display mb-6 text-(--ink)">
              {uc.headline}
            </h1>

            <p className="text-lead text-(--ink-2) mb-12 max-w-3xl">
              {uc.lead}
            </p>

            <div className="space-y-12 text-prose text-(--ink-2)">
              {/* Problem Analysis */}
              <section className="space-y-4">
                <h2 className="text-question text-(--ink)">The common dilemma</h2>
                <p>{uc.theProblem}</p>
              </section>

              {/* How Kept Works */}
              <section className="space-y-4">
                <h2 className="text-question text-(--ink)">How Kept structures this workflow</h2>
                <p>{uc.howKeptWorks}</p>
              </section>

              {/* Step by Step Guide */}
              <section className="space-y-6">
                <h2 className="text-question text-(--ink)">The workflow in 3 steps</h2>
                <div className="space-y-4">
                  {uc.steps.map((s) => (
                    <div
                      key={s.step}
                      className="p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830] flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#171a20] border border-[#7ac4d1]/30 flex items-center justify-center text-[#7ac4d1] font-mono text-[14px] shrink-0 mt-0.5">
                        {s.step}
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-[17px] font-medium text-(--ink) m-0">
                          {s.title}
                        </h3>
                        <p className="text-[15px] text-(--ink-2) leading-relaxed m-0">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Key Benefits */}
              <section className="space-y-4">
                <h2 className="text-question text-(--ink)">Why this matters</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {uc.keyBenefits.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-(--r-inner) bg-[#12141a] border border-[#242830] space-y-2"
                    >
                      <h3 className="text-[16px] font-medium text-(--ink)">
                        {b.title}
                      </h3>
                      <p className="text-[14px] text-(--ink-2) leading-relaxed m-0">
                        {b.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ Accordion */}
              {uc.faq.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-question text-(--ink)">Frequently asked questions</h2>
                  <div className="border-t border-[#242830]">
                    {uc.faq.map((item, idx) => (
                      <details
                        key={idx}
                        className="py-4 border-b border-[#242830] group cursor-pointer"
                      >
                        <summary className="font-medium text-(--ink) flex items-center justify-between text-[16px] list-none">
                          {item.q}
                          <span className="text-meta text-[#7ac4d1] group-open:rotate-45 transition-transform duration-220 text-lg">
                            +
                          </span>
                        </summary>
                        <p className="mt-3 text-[15px] text-(--ink-2) leading-relaxed">
                          {item.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Other Workflows */}
              <section className="pt-6 border-t border-[#242830]">
                <h3 className="text-meta text-(--ink-3) uppercase tracking-wider mb-4">
                  Explore other workflows
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {otherUseCases.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/for/${other.slug}`}
                      className="p-3.5 rounded-lg bg-[#12141a] border border-[#242830] hover:border-[#7ac4d1]/40 transition-all text-[14px] text-(--ink-2) hover:text-(--ink)"
                    >
                      {other.title} →
                    </Link>
                  ))}
                </div>
              </section>

              {/* Download CTA */}
              <div className="pt-8 border-t border-[#242830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="text-question text-(--ink) mb-1">
                    Ready to begin?
                  </p>
                  <p className="text-meta text-(--ink-3)">
                    Free to write, always. The summary is the paid part.
                  </p>
                </div>
                <PrimaryButton />
              </div>
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
