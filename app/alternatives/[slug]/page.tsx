import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import { ALTERNATIVES, getAlternativeBySlug } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALTERNATIVES.map((alt) => ({
    slug: alt.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const alt = getAlternativeBySlug(slug);
  if (!alt) return {};

  return {
    title: alt.metaTitle,
    description: alt.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/alternatives/${slug}`,
    },
    openGraph: {
      title: alt.metaTitle,
      description: alt.metaDescription,
      url: `${SITE_URL}/alternatives/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: alt.metaTitle,
      description: alt.metaDescription,
    },
  };
}

export default async function AlternativeDetailPage({ params }: Props) {
  const { slug } = await params;
  const alt = getAlternativeBySlug(slug);

  if (!alt) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/alternatives/${slug}#article`,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: "Kept",
          url: SITE_URL,
        },
        headline: alt.headline,
        description: alt.metaDescription,
        mainEntityOfPage: `${SITE_URL}/alternatives/${slug}`,
        inLanguage: "en-GB",
        publisher: {
          "@type": "Organization",
          name: "Kept",
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/alternatives/${slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Alternatives",
            item: `${SITE_URL}/alternatives`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `vs ${alt.targetApp}`,
            item: `${SITE_URL}/alternatives/${slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/alternatives/${slug}#faq`,
        mainEntity: alt.faq.map((item) => ({
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

  const otherAlternatives = ALTERNATIVES.filter((item) => item.slug !== slug).slice(0, 3);

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
              <Link href="/alternatives" className="hover:text-(--ink) transition-colors">
                Alternatives
              </Link>
              <span>/</span>
              <span className="text-(--ink)">{alt.targetApp}</span>
            </nav>

            <SectionLabel>{alt.targetApp.toUpperCase()} ALTERNATIVE</SectionLabel>
            <h1 className="text-display mb-6 text-(--ink)">
              {alt.headline}
            </h1>

            <p className="text-lead text-(--ink-2) mb-12 max-w-3xl">
              {alt.lead}
            </p>

            <div className="space-y-12 text-prose text-(--ink-2)">
              {/* Why People Switch */}
              <section className="space-y-4">
                <h2 className="text-question text-(--ink)">
                  Why people look for a {alt.targetApp} alternative
                </h2>
                <p>{alt.whyPeopleSwitch}</p>
              </section>

              {/* Key Architectural Differences */}
              <section className="space-y-6">
                <h2 className="text-question text-(--ink)">
                  Key differences in approach
                </h2>

                <div className="space-y-6">
                  {alt.keyDifferences.map((diff, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830] space-y-4"
                    >
                      <h3 className="text-[17px] font-medium text-(--ink) m-0">
                        {diff.title}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
                        <div className="p-4 rounded bg-[#0A0B0D] border border-[#242830]">
                          <div className="text-meta text-[#7ac4d1] mb-1 font-medium">KEPT</div>
                          <p className="text-(--ink-2) m-0">{diff.keptApproach}</p>
                        </div>
                        <div className="p-4 rounded bg-[#0A0B0D] border border-[#242830]">
                          <div className="text-meta text-(--ink-3) mb-1 font-medium">{alt.targetApp.toUpperCase()}</div>
                          <p className="text-(--ink-2) m-0">{diff.targetApproach}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Summary Conclusion */}
              <section className="p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830] space-y-2">
                <h3 className="text-[17px] font-medium text-(--ink) m-0">
                  The Verdict
                </h3>
                <p className="text-[15px] text-(--ink-2) m-0">
                  {alt.comparisonSummary}
                </p>
              </section>

              {/* FAQ Section */}
              {alt.faq.length > 0 && (
                <section className="space-y-6 pt-6">
                  <h2 className="text-question text-(--ink)">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {alt.faq.map((item, index) => (
                      <div
                        key={index}
                        className="p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830] space-y-2"
                      >
                        <h3 className="text-[16px] font-medium text-(--ink) m-0">
                          {item.q}
                        </h3>
                        <p className="text-[15px] text-(--ink-2) m-0">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Other Alternatives */}
              {otherAlternatives.length > 0 && (
                <section className="pt-8 border-t border-[#242830] space-y-4">
                  <h2 className="text-question text-(--ink)">
                    Explore other alternatives
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {otherAlternatives.map((oa) => (
                      <Link
                        key={oa.slug}
                        href={`/alternatives/${oa.slug}`}
                        className="p-4 rounded-(--r-inner) bg-[#12141a] border border-[#242830] hover:border-[#7ac4d1]/40 transition-colors block group"
                      >
                        <div className="text-meta text-(--ink-3) mb-1 font-medium">
                          {oa.targetType}
                        </div>
                        <div className="text-[14px] text-(--ink) font-medium group-hover:text-[#7ac4d1] transition-colors">
                          vs {oa.targetApp}
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Download CTA */}
              <div className="pt-8 border-t border-[#242830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="text-question text-(--ink) mb-1">
                    Ready to switch to Kept?
                  </p>
                  <p className="text-meta text-(--ink-3)">
                    Free to write, always. Encrypted on your phone.
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
