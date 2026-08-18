import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import { COMPARISONS, ComparisonItem } from "@/lib/seo-data";
import { APP_STORE_URL, SITE_URL } from "@/lib/config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COMPARISONS.map((comp) => ({
    slug: comp.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comp = COMPARISONS.find((c) => c.slug === slug);
  if (!comp) return {};

  const url = `${SITE_URL}/vs/${slug}`;

  return {
    title: comp.metaTitle,
    description: comp.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: comp.metaTitle,
      description: comp.metaDescription,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: comp.metaTitle,
      description: comp.metaDescription,
    },
  };
}

export default async function ComparisonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const comp = COMPARISONS.find((c) => c.slug === slug);

  if (!comp) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${SITE_URL}/vs/${slug}#article`,
        headline: comp.headline,
        description: comp.metaDescription,
        url: `${SITE_URL}/vs/${slug}`,
        author: {
          "@type": "Organization",
          name: "Kept",
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/vs/${slug}#breadcrumb`,
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
            name: "Comparisons",
            item: `${SITE_URL}/vs`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Kept vs ${comp.competitorName}`,
            item: `${SITE_URL}/vs/${slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/vs/${slug}#faq`,
        mainEntity: comp.faq.map((item) => ({
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

  const otherComparisons = COMPARISONS.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#7ac4d1]/30 selection:text-(--ink)">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AmbientField />
      <Navbar />

      <main id="main-content" className="relative z-10 pt-32 pb-24 flex-1">
        <div className="max-w-270 mx-auto px-6">
          <div className="prose-container w-full mx-auto">
            {/* Breadcrumb navigation */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-meta text-(--ink-3)">
              <Link href="/" className="hover:text-(--ink) transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/vs" className="hover:text-(--ink) transition-colors">
                Comparisons
              </Link>
              <span>/</span>
              <span className="text-(--ink)">{comp.competitorName}</span>
            </nav>

            <SectionLabel>COMPREHENSIVE COMPARISON</SectionLabel>
            <h1 className="text-display mb-6 text-(--ink)">
              {comp.headline}
            </h1>

            <p className="text-lead text-(--ink-2) mb-12">
              {comp.lead}
            </p>

            <div className="space-y-12 text-prose text-(--ink-2)">
              {/* Overview Section */}
              <section className="space-y-4">
                <h2 className="text-question text-(--ink)">Overview</h2>
                <p>{comp.overview}</p>
              </section>

              {/* Comparison Table Matrix */}
              <section className="space-y-4">
                <h2 className="text-question text-(--ink)">Direct feature comparison</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[14px] sm:text-[15px] border-collapse border border-[#242830] rounded-(--r-inner)">
                    <thead>
                      <tr className="bg-[#171a20] text-(--ink)">
                        <th className="p-3.5 border border-[#242830] w-1/3">Dimension</th>
                        <th className="p-3.5 border border-[#242830] w-1/3 text-[#7ac4d1]">Kept</th>
                        <th className="p-3.5 border border-[#242830] w-1/3">{comp.competitorName}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comp.tableMatrix.map((row, idx) => (
                        <tr key={idx} className="border-b border-[#242830]">
                          <td className="p-3.5 border border-[#242830] font-medium text-(--ink)">
                            {row.dimension}
                          </td>
                          <td className="p-3.5 border border-[#242830] text-(--ink-2) bg-[#12141a]/40">
                            {row.kept}
                          </td>
                          <td className="p-3.5 border border-[#242830] text-(--ink-3)">
                            {row.competitor}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Detailed Differences */}
              <section className="space-y-6">
                <h2 className="text-question text-(--ink)">Key differences in practice</h2>
                <div className="space-y-4">
                  {comp.differences.map((diff, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830] space-y-3"
                    >
                      <h3 className="text-[17px] font-medium text-(--ink)">
                        {diff.feature}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
                        <div>
                          <span className="text-meta text-[#7ac4d1] block mb-1">Kept approach</span>
                          <p className="text-(--ink-2) m-0">{diff.kept}</p>
                        </div>
                        <div>
                          <span className="text-meta text-(--ink-3) block mb-1">{comp.competitorName} approach</span>
                          <p className="text-(--ink-3) m-0">{diff.competitor}</p>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-[#242830]/80 text-[13px] text-(--ink-3)">
                        <strong className="text-(--ink-2)">Why it matters:</strong> {diff.whyItMatters}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Verdict Section */}
              <section className="space-y-4 p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830]">
                <h2 className="text-question text-(--ink) m-0">The verdict</h2>
                <p className="text-[15px] leading-relaxed text-(--ink-2) m-0">
                  {comp.verdict}
                </p>
              </section>

              {/* FAQ Accordion */}
              {comp.faq.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-question text-(--ink)">Frequently asked questions</h2>
                  <div className="border-t border-[#242830]">
                    {comp.faq.map((item, idx) => (
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

              {/* Related Comparisons */}
              <section className="pt-6 border-t border-[#242830]">
                <h3 className="text-meta text-(--ink-3) uppercase tracking-wider mb-4">
                  Compare other journals
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {otherComparisons.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/vs/${other.slug}`}
                      className="p-3.5 rounded-lg bg-[#12141a] border border-[#242830] hover:border-[#7ac4d1]/40 transition-all text-[14px] text-(--ink-2) hover:text-(--ink)"
                    >
                      Kept vs {other.competitorName} →
                    </Link>
                  ))}
                </div>
              </section>

              {/* Download CTA */}
              <div className="pt-8 border-t border-[#242830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="text-question text-(--ink) mb-1">
                    Ready to start with Kept?
                  </p>
                  <p className="text-meta text-(--ink-3)">
                    Free to write, always. Encrypted on your device.
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
