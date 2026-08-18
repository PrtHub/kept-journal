import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import { PROMPTS, getPromptCollectionBySlug } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROMPTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = getPromptCollectionBySlug(slug);
  if (!p) return {};

  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/prompts/${slug}`,
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url: `${SITE_URL}/prompts/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: p.metaTitle,
      description: p.metaDescription,
    },
  };
}

export default async function PromptDetailPage({ params }: Props) {
  const { slug } = await params;
  const p = getPromptCollectionBySlug(slug);

  if (!p) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/prompts/${slug}#article`,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: "Kept",
          url: SITE_URL,
        },
        headline: p.headline,
        description: p.metaDescription,
        mainEntityOfPage: `${SITE_URL}/prompts/${slug}`,
        inLanguage: "en-GB",
        publisher: {
          "@type": "Organization",
          name: "Kept",
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/prompts/${slug}#breadcrumb`,
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
            name: "Prompts",
            item: `${SITE_URL}/prompts`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: p.title,
            item: `${SITE_URL}/prompts/${slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/prompts/${slug}#faq`,
        mainEntity: p.faq.map((item) => ({
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

  const otherPrompts = PROMPTS.filter((item) => item.slug !== slug).slice(0, 3);

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
              <Link href="/prompts" className="hover:text-(--ink) transition-colors">
                Prompts
              </Link>
              <span>/</span>
              <span className="text-(--ink)">{p.title}</span>
            </nav>

            <SectionLabel>{p.category.toUpperCase()} PROMPTS</SectionLabel>
            <h1 className="text-display mb-6 text-(--ink)">
              {p.headline}
            </h1>

            <p className="text-lead text-(--ink-2) mb-12 max-w-3xl">
              {p.lead}
            </p>

            <div className="space-y-12 text-prose text-(--ink-2)">
              {/* Context */}
              <section className="space-y-4">
                <h2 className="text-question text-(--ink)">
                  Why these prompts work
                </h2>
                <p>{p.description}</p>
              </section>

              {/* Prompt List */}
              <section className="space-y-6">
                <h2 className="text-question text-(--ink)">
                  The Prompts
                </h2>

                <div className="space-y-4">
                  {p.prompts.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830] space-y-2"
                    >
                      <div className="text-meta text-[#7ac4d1] font-medium">
                        PROMPT {index + 1}
                      </div>
                      <p className="text-[17px] font-medium text-(--ink) m-0 leading-snug">
                        &ldquo;{item.question}&rdquo;
                      </p>
                      <p className="text-[14px] text-(--ink-3) m-0 pt-1">
                        {item.context}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How to use in Kept */}
              <section className="space-y-4 p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830]">
                <h3 className="text-[17px] font-medium text-(--ink) m-0">
                  How Kept uses reflection questions
                </h3>
                <p className="text-[15px] text-(--ink-2) m-0">
                  {p.howToUseInKept}
                </p>
              </section>

              {/* FAQ Section */}
              {p.faq.length > 0 && (
                <section className="space-y-6 pt-6">
                  <h2 className="text-question text-(--ink)">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {p.faq.map((item, index) => (
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

              {/* Related Collections */}
              {otherPrompts.length > 0 && (
                <section className="pt-8 border-t border-[#242830] space-y-4">
                  <h2 className="text-question text-(--ink)">
                    Other prompt collections
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {otherPrompts.map((op) => (
                      <Link
                        key={op.slug}
                        href={`/prompts/${op.slug}`}
                        className="p-4 rounded-(--r-inner) bg-[#12141a] border border-[#242830] hover:border-[#7ac4d1]/40 transition-colors block group"
                      >
                        <div className="text-meta text-[#7ac4d1] mb-1 font-medium">
                          {op.category}
                        </div>
                        <div className="text-[14px] text-(--ink) font-medium group-hover:text-[#7ac4d1] transition-colors">
                          {op.title}
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
                    Ready to begin journaling?
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
