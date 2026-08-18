import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import { GUIDES, getGuideBySlug } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/config";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GUIDES.map((g) => ({
    slug: g.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const g = getGuideBySlug(slug);
  if (!g) return {};

  return {
    title: g.metaTitle,
    description: g.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/guides/${slug}`,
    },
    openGraph: {
      title: g.metaTitle,
      description: g.metaDescription,
      url: `${SITE_URL}/guides/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: g.metaTitle,
      description: g.metaDescription,
    },
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const g = getGuideBySlug(slug);

  if (!g) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/guides/${slug}#article`,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: "Kept",
          url: SITE_URL,
        },
        headline: g.headline,
        description: g.metaDescription,
        mainEntityOfPage: `${SITE_URL}/guides/${slug}`,
        inLanguage: "en-GB",
        publisher: {
          "@type": "Organization",
          name: "Kept",
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/guides/${slug}#breadcrumb`,
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
            name: "Guides",
            item: `${SITE_URL}/guides`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: g.title,
            item: `${SITE_URL}/guides/${slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/guides/${slug}#faq`,
        mainEntity: g.faq.map((item) => ({
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

  const otherGuides = GUIDES.filter((item) => item.slug !== slug);

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
              <Link href="/guides" className="hover:text-(--ink) transition-colors">
                Guides
              </Link>
              <span>/</span>
              <span className="text-(--ink)">{g.title}</span>
            </nav>

            <div className="flex items-center gap-3 mb-2">
              <SectionLabel>{g.category.toUpperCase()}</SectionLabel>
              <span className="text-meta text-(--ink-3)">· {g.readTime}</span>
            </div>

            <h1 className="text-display mb-6 text-(--ink)">
              {g.headline}
            </h1>

            <p className="text-lead text-(--ink-2) mb-12 max-w-3xl">
              {g.lead}
            </p>

            <div className="space-y-12 text-prose text-(--ink-2)">
              {/* Sections */}
              {g.sections.map((sec, index) => (
                <section key={index} className="space-y-4">
                  <h2 className="text-question text-(--ink)">
                    {sec.heading}
                  </h2>
                  <p className="leading-relaxed">{sec.body}</p>
                </section>
              ))}

              {/* Key Takeaways */}
              <section className="p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830] space-y-3">
                <h3 className="text-[17px] font-medium text-(--ink) m-0">
                  Key Takeaways
                </h3>
                <ul className="list-disc list-inside space-y-2 text-[15px] text-(--ink-2) m-0">
                  {g.keyTakeaways.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* FAQ Section */}
              {g.faq.length > 0 && (
                <section className="space-y-6 pt-6">
                  <h2 className="text-question text-(--ink)">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {g.faq.map((item, index) => (
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

              {/* Other Guides */}
              {otherGuides.length > 0 && (
                <section className="pt-8 border-t border-[#242830] space-y-4">
                  <h2 className="text-question text-(--ink)">
                    Other practical guides
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {otherGuides.map((og) => (
                      <Link
                        key={og.slug}
                        href={`/guides/${og.slug}`}
                        className="p-4 rounded-(--r-inner) bg-[#12141a] border border-[#242830] hover:border-[#7ac4d1]/40 transition-colors block group"
                      >
                        <div className="text-meta text-[#7ac4d1] mb-1 font-medium">
                          {og.category}
                        </div>
                        <div className="text-[14px] text-(--ink) font-medium group-hover:text-[#7ac4d1] transition-colors">
                          {og.title}
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
                    Ready to practice quiet journaling?
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
