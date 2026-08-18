import React from "react";
import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";

export const metadata = {
  title: "Terms of Service — Kept",
  description:
    "Terms of service and subscription terms for Kept. Free to write, always.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#7ac4d1]/30 selection:text-(--ink)">
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

            <SectionLabel>LEGAL &amp; TERMS</SectionLabel>
            <h1 className="text-display mb-4 text-(--ink)">Terms of Service</h1>
            <p className="text-meta text-(--ink-3) mb-12">
              Effective Date: August 17, 2026 · Version 1.0
            </p>

            <div className="space-y-10 text-prose text-(--ink-2)">
              {/* 1. What Kept Is */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">1. What Kept is</h2>
                <p>
                  Kept is an iOS application that stores journal entries locally and securely on your iPhone and, upon your explicit request, generates a one-page summary of what you wrote during a designated period.
                </p>
              </section>

              {/* 2. No Account */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">2. No account</h2>
                <p>
                  There is no account registration, username, password, or profile. Access to Kept is tied directly to the application installation on your device and to the Apple ID associated with your purchase.
                </p>
              </section>

              {/* 3. Free and Paid Features */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">
                  3. Free and paid features
                </h2>
                <p>
                  Writing, reading, searching, and exporting your journal entries are <strong className="text-(--ink)">free forever</strong>. You will never be locked out of your journal or required to pay to access your personal writing. The paid feature is the generated one-page summary.
                </p>
              </section>

              {/* 4. Subscriptions & Purchases */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">
                  4. Subscriptions &amp; purchases
                </h2>
                <p>
                  Kept offers optional paid tiers through Apple In-App Purchases:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-[15px]">
                  <li>
                    <strong className="text-(--ink)">A Month ($9.99):</strong> Renews monthly until cancelled.
                  </li>
                  <li>
                    <strong className="text-(--ink)">A Year ($39.99):</strong> Renews annually (67% less over twelve months) until cancelled.
                  </li>
                  <li>
                    <strong className="text-(--ink)">No End Date ($99.99):</strong> Paid once, grants lifetime access to summaries on your Apple ID, and never renews.
                  </li>
                </ul>
                <div className="p-4 rounded-lg bg-[#171a20] border border-[#242830] space-y-2 text-[14px]">
                  <p>
                    <strong>Renewal &amp; Notice:</strong> Subscriptions renew automatically unless cancelled at least 24 hours prior to the end of the current billing period. Kept delivers a local reminder notification to your device three days before renewal, naming the amount.
                  </p>
                  <p>
                    <strong>Managing Subscriptions:</strong> You can manage or cancel your subscription at any time via your iPhone&apos;s Settings &gt; [Apple ID] &gt; Subscriptions.
                  </p>
                </div>
              </section>

              {/* 5. Refunds */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">5. Refunds</h2>
                <p>
                  All purchases are processed and billed by Apple Inc. Refund requests must be submitted directly to Apple through{" "}
                  <a
                    href="https://reportaproblem.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-link"
                  >
                    reportaproblem.apple.com
                  </a>{" "}
                  in accordance with Apple&apos;s refund policies.
                </p>
              </section>

              {/* 6. Your Content is Yours */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">
                  6. Your content is yours
                </h2>
                <p>
                  You retain complete and exclusive ownership of everything you write, record, or attach in Kept. We claim no intellectual property rights, copyright, or licence to your journal content beyond the transient processing strictly necessary to generate the summaries you request.
                </p>
              </section>

              {/* 7. Medical & Health Disclaimer (Critical Clause) */}
              <section className="space-y-3 p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830]">
                <h2 className="text-question text-(--ink) m-0">
                  7. Medical &amp; therapy disclaimer
                </h2>
                <p className="text-[15px] leading-relaxed m-0 text-(--ink-2)">
                  <strong className="text-(--ink)">Kept is not therapy, not medical advice, not a medical device, and not a crisis intervention service.</strong> Kept is a personal writing and organisation tool. It records, organises, and summarises what you wrote. Nothing generated by the app constitutes psychological counselling, diagnostic assessment, clinical evaluation, or treatment recommendations.
                </p>
                <p className="text-[14px] leading-relaxed text-[#7ac4d1] m-0 pt-2">
                  If you are experiencing a mental health emergency or crisis, please contact your local emergency services or a crisis helpline immediately.
                </p>
              </section>

              {/* 8. Generated Summaries */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">
                  8. Generated summaries
                </h2>
                <p>
                  Summaries are generated by an external language model via OpenRouter based solely on your own entries for the selected period. While counted statistics are computed deterministically on your device and quotes are extracted verbatim from your sentences, generated text is not reviewed by humans and may occasionally contain inaccuracies or unhelpful interpretations.
                </p>
              </section>

              {/* 9. Backups & Passphrase Responsibility */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">
                  9. Backups &amp; encryption passphrases
                </h2>
                <p>
                  When you export an encrypted backup file, the passphrase you select encrypts the file locally. This passphrase is never sent to us and cannot be recovered or reset by anyone, including the Kept team. If you lose your passphrase, the backup file is permanently unrecoverable.
                </p>
              </section>

              {/* 10. Limitation of Liability & Governing Law */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">
                  10. Limitation of liability &amp; general terms
                </h2>
                <p>
                  Kept is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind. To the maximum extent permitted by applicable law, Kept shall not be liable for indirect, incidental, or consequential damages resulting from data loss, device corruption, or temporary unavailability of third-party inference services.
                </p>
                <p>
                  Your use of Kept is also subject to Apple&apos;s standard Licensed Application End User License Agreement (EULA).
                </p>
              </section>
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
