import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";
import PrimaryButton from "@/components/common/PrimaryButton";
import { FEATURES, FeatureItem } from "@/lib/seo-data";
import { SITE_URL } from "@/lib/config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FEATURES.map((feat) => ({
    slug: feat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const feat = FEATURES.find((f) => f.slug === slug);
  if (!feat) return {};

  const url = `${SITE_URL}/features/${slug}`;

  return {
    title: feat.metaTitle,
    description: feat.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: feat.metaTitle,
      description: feat.metaDescription,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: feat.metaTitle,
      description: feat.metaDescription,
    },
  };
}

export default async function FeatureDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const feat = FEATURES.find((f) => f.slug === slug);

  if (!feat) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${SITE_URL}/features/${slug}#article`,
        headline: feat.headline,
        description: feat.metaDescription,
        url: `${SITE_URL}/features/${slug}`,
        author: {
          "@type": "Organization",
          name: "Kept",
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/features/${slug}#breadcrumb`,
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
            name: "Features",
            item: `${SITE_URL}/features`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: feat.title,
            item: `${SITE_URL}/features/${slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/features/${slug}#faq`,
        mainEntity: feat.faq.map((item) => ({
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

  const otherFeatures = FEATURES.filter((f) => f.slug !== slug);

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
              <Link href="/features" className="hover:text-(--ink) transition-colors">
                Features
              </Link>
              <span>/</span>
              <span className="text-(--ink)">{feat.title}</span>
            </nav>

            <SectionLabel>{feat.label}</SectionLabel>
            <h1 className="text-display mb-6 text-(--ink)">
              {feat.headline}
            </h1>

            <p className="text-lead text-(--ink-2) mb-12 max-w-3xl">
              {feat.lead}
            </p>

            <div className="space-y-12 text-prose text-(--ink-2)">
              {/* Architectural Overview */}
              <section className="space-y-4">
                <h2 className="text-question text-(--ink)">How it works</h2>
                <p>{feat.description}</p>
              </section>

              {/* Architecture Details */}
              <section className="space-y-6">
                <h2 className="text-question text-(--ink)">Technical implementation</h2>
                <div className="space-y-4">
                  {feat.architectureDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830] space-y-2"
                    >
                      <h3 className="text-[17px] font-medium text-(--ink) m-0">
                        {detail.title}
                      </h3>
                      <p className="text-[15px] text-(--ink-2) leading-relaxed m-0">
                        {detail.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Specifications Table */}
              <section className="space-y-4">
                <h2 className="text-question text-(--ink)">Technical specifications</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[14px] sm:text-[15px] border-collapse border border-[#242830] rounded-(--r-inner)">
                    <thead>
                      <tr className="bg-[#171a20] text-(--ink)">
                        <th className="p-3.5 border border-[#242830] w-1/2">Attribute</th>
                        <th className="p-3.5 border border-[#242830] w-1/2">Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feat.specifications.map((spec, idx) => (
                        <tr key={idx} className="border-b border-[#242830]">
                          <td className="p-3.5 border border-[#242830] font-medium text-(--ink)">
                            {spec.label}
                          </td>
                          <td className="p-3.5 border border-[#242830] text-(--ink-2)">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* FAQ Accordion */}
              {feat.faq.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-question text-(--ink)">Frequently asked questions</h2>
                  <div className="border-t border-[#242830]">
                    {feat.faq.map((item, idx) => (
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

              {/* Other Features */}
              <section className="pt-6 border-t border-[#242830]">
                <h3 className="text-meta text-(--ink-3) uppercase tracking-wider mb-4">
                  Explore other architecture deep dives
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {otherFeatures.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/features/${other.slug}`}
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
