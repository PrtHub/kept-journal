import React from "react";
import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";
import LogoMark from "@/components/common/LogoMark";
import PrimaryButton from "@/components/common/PrimaryButton";
import { SITE_URL } from "@/lib/config";

export const metadata = {
  title: "About — Kept",
  description:
    "A private journal for iPhone that records, organises, and summarises what you wrote. No account, no server, encrypted on device.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Kept — A Private Journal for iPhone",
    description:
      "A private journal for iPhone that records, organises, and summarises what you wrote. No account, no server, encrypted on device.",
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about#webpage`,
        url: `${SITE_URL}/about`,
        name: "About Kept",
        description:
          "Kept is a private journal for iPhone that records, organises, and summarises what you wrote. Encrypted on device with zero accounts.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/about#breadcrumb`,
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
            name: "About",
            item: `${SITE_URL}/about`,
          },
        ],
      },
    ],
  };

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
          <div className="prose-container w-full mx-auto">
            <Link
              href="/"
              className="text-meta text-[#7ac4d1] inline-flex items-center gap-1.5 mb-8 hover:underline"
            >
              ← Back to home
            </Link>

            <SectionLabel>ABOUT KEPT</SectionLabel>
            <h1 className="text-display mb-6 text-(--ink)">
              A journal designed to organise and summarise what you wrote.
            </h1>

            <p className="text-lead text-(--ink-2) mb-12">
              Kept is a private journal for iPhone built on a simple premise: your writing belongs on your device alone, and the app exists to give you a clear page back when you ask for one.
            </p>

            <div className="space-y-12 text-prose text-(--ink-2)">
              {/* Origin & Problem */}
              <section className="space-y-4">
                <h2 className="text-question text-(--ink)">
                  Why Kept exists
                </h2>
                <p>
                  Most journalling applications demand continuous effort from day one and only offer insights after months of consistent entries. You write into an empty box day after day, waiting for the software to accumulate enough text to say something relevant. Almost nobody reaches day ninety.
                </p>
                <p>
                  Kept was built to solve the empty timeline on day one. By connecting to your existing photo library, you select five photographs you already took. Each photograph becomes a dated entry with its own mark. Within twenty minutes, you arrive with a year of context already recorded.
                </p>
              </section>

              {/* Technical Architecture */}
              <section className="space-y-4">
                <h2 className="text-question text-(--ink)">
                  How it is built
                </h2>
                <p>
                  The privacy model is not a marketing promise; it is the physical architecture of the application.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-[16px]">
                  <li>
                    <strong className="text-(--ink)">On-device SQLCipher storage:</strong> All entries, dates, selected photos, and observations are stored in an AES-256 encrypted SQLite database on your iPhone.
                  </li>
                  <li>
                    <strong className="text-(--ink)">Keychain encryption:</strong> The 256-bit cryptographic key protecting your journal is held in the secure iOS Keychain under AFTER_FIRST_UNLOCK protection.
                  </li>
                  <li>
                    <strong className="text-(--ink)">No accounts or servers:</strong> There is no sign-up process, no user database, and no server synchronising your journal entries.
                  </li>
                  <li>
                    <strong className="text-(--ink)">Ephemeral summarisation:</strong> When you tap to generate a summary, only the entries from that chosen period are sent via OpenRouter to be written up. Once completed, the text is returned to your device and is not retained or used for model training.
                  </li>
                  <li>
                    <strong className="text-(--ink)">Passphrase-encrypted backups:</strong> You can export standalone backups encrypted with scrypt and XChaCha20-Poly1305, including photos, locked with your own private passphrase.
                  </li>
                </ul>
              </section>

              {/* The Visual Mark */}
              <section className="space-y-4">
                <h2 className="text-question text-(--ink)">
                  The marks
                </h2>
                <div className="flex items-center gap-4 p-4 rounded-(--r-inner) bg-[#12141a] border border-[#242830] my-4">
                  <LogoMark size={44} />
                  <p className="text-[15px] text-(--ink-2) m-0">
                    Each entry receives a generated abstract mark — a closed mathematical curve derived from that entry&apos;s identity.
                  </p>
                </div>
                <p>
                  These marks appear throughout the interface: on the timeline, within the year grid, and across the weekly strip. They serve as a visual index of your entries without exposing your text to anyone glancing at your screen.
                </p>
              </section>

              {/* Business Model */}
              <section className="space-y-4">
                <h2 className="text-question text-(--ink)">
                  The business model
                </h2>
                <p>
                  Writing, reading, searching, and exporting your entries are free forever. You will never be locked out of your own thoughts or asked to pay to read what you wrote.
                </p>
                <p>
                  The paid feature is the generated one-page summary. It produces counted figures from your entries, extracts exact quoted sentences, and frames three questions for reflection before your next session.
                </p>
                <div className="p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830] space-y-3">
                  <p className="text-[15px] font-medium text-(--ink)">Three stakes:</p>
                  <ul className="space-y-2 text-[14px] text-(--ink-2)">
                    <li><strong className="text-(--ink)">A Month:</strong> $9.99 / month</li>
                    <li><strong className="text-(--ink)">A Year:</strong> $39.99 / year</li>
                    <li><strong className="text-(--ink)">No End Date:</strong> $99.99 paid once, never renews</li>
                  </ul>
                  <p className="text-meta text-(--ink-3) pt-2">
                    Subscriptions renew until cancelled in your Apple ID Settings. You receive a reminder notice three days before any renewal.
                  </p>
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
