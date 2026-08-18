import React from "react";
import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";

export const metadata = {
  title: "Privacy Policy — Kept",
  description:
    "Privacy policy for Kept. Your journal is stored encrypted on your phone. No account, no server.",
};

const SUB_PROCESSORS = [
  {
    name: "Convex (Convex, Inc., US)",
    data: "Journal text in transit; stores only anonymous rate-limit counter (deviceId, day, count)",
    purpose: "Backend infrastructure & API key isolation",
    retention: "Ephemeral for text; rate-limit counters retained for daily quota",
  },
  {
    name: "OpenRouter (US)",
    data: "Journal text for the requested summary period",
    purpose: "Inference routing & summary prose generation",
    retention: "Transient processing during request execution; zero retention for training",
  },
  {
    name: "Mixpanel (US)",
    data: "Onboarding-flow setup events only (enums, counts, booleans; no identifiers or free text)",
    purpose: "Setup analytics during initial onboarding",
    retention: "Configured project retention window; opt-out clears local ID",
  },
  {
    name: "RevenueCat (US)",
    data: "Anonymous app user ID, purchase state, receipt validation",
    purpose: "Subscription state management",
    retention: "Per RevenueCat service terms",
  },
  {
    name: "Apple Inc. (US)",
    data: "In-App Purchases, receipts, encrypted device backups, local notifications",
    purpose: "Operating system platform & distribution",
    retention: "Per Apple Privacy Policy",
  },
];

export default function PrivacyPage() {
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

            <SectionLabel>LEGAL &amp; PRIVACY</SectionLabel>
            <h1 className="text-display mb-4 text-(--ink)">Privacy Policy</h1>
            <p className="text-meta text-(--ink-3) mb-12">
              Effective Date: August 17, 2026 · Version 1.1
            </p>

            <div className="space-y-10 text-prose text-(--ink-2)">
              {/* 1. Who We Are */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">1. Who we are</h2>
                <p>
                  Kept is developed and operated by Kept (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). For privacy inquiries, data protection questions, or requests regarding this policy, contact us at{" "}
                  <a href="mailto:pritamfinds@gmail.com" className="secondary-link">
                    pritamfinds@gmail.com
                  </a>
                  .
                </p>
              </section>

              {/* 2. The Short Version */}
              <section className="space-y-3 p-6 rounded-(--r-inner) bg-[#12141a] border border-[#242830]">
                <h2 className="text-question text-(--ink) m-0">
                  2. The short version
                </h2>
                <p className="m-0 text-[15px] leading-relaxed">
                  Your journal is stored encrypted on your iPhone. There is no account, no sign-up, no login, and no server holding your journal entries. The only time anything you wrote leaves your phone is when you explicitly tap to generate a summary.
                </p>
              </section>

              {/* 3. What is Stored on Your Device */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">
                  3. What is stored on your device
                </h2>
                <p>
                  All your personal writing remains locally on your device:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-[15px]">
                  <li>
                    <strong className="text-(--ink)">Database:</strong> Journal entries, entry timestamps, entry source tags, optional mood ratings (1–5), generated summaries, and search indexes are stored in an encrypted SQLite database (SQLCipher / AES-256).
                  </li>
                  <li>
                    <strong className="text-(--ink)">Encryption Key:</strong> The 256-bit database key is generated on your device and held securely in the <strong className="text-(--ink)">iOS Keychain</strong> with <code className="text-[13px] font-mono text-[#7ac4d1]">AFTER_FIRST_UNLOCK</code> protection. It is never transmitted off your device.
                  </li>
                  <li>
                    <strong className="text-(--ink)">Photos:</strong> Photos attached to entries are stored as ordinary files within the app&apos;s sandboxed container, protected by your iOS device passcode.
                  </li>
                  <li>
                    <strong className="text-(--ink)">Device Backups:</strong> The encrypted database and Keychain item are included in your standard encrypted iOS backups (iCloud or local iTunes/Finder backups).
                  </li>
                </ul>
              </section>

              {/* 4. What Leaves Your Device */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">
                  4. What leaves your device, and when
                </h2>
                <p>
                  Nothing is transmitted automatically in the background. The only outbound journal transmission occurs when you manually tap to generate a periodic summary.
                </p>
                <div className="p-4 rounded-lg bg-[#171a20] border border-[#242830] space-y-2 text-[14px]">
                  <p className="font-medium text-(--ink)">Summary Data Transmission Flow:</p>
                  <p>
                    <strong>Path:</strong> Your Device → Convex Backend Function → OpenRouter → Your Device.
                  </p>
                  <p>
                    <strong>Transmitted Payload:</strong> Anonymous install ID (<code className="font-mono">deviceId</code>), requested period label, entry count, device-computed facts, candidate quotes, and the raw entry text for that specific period only.
                  </p>
                  <p>
                    <strong>What Convex Stores:</strong> Only an anonymous daily counter row (<code className="font-mono">deviceId</code>, <code className="font-mono">day</code>, <code className="font-mono">count</code>) enforcing our 4-per-day rate limit. Convex never stores journal text or summaries.
                  </p>
                  <p>
                    <strong>No User Identity Sent to AI:</strong> The request to OpenRouter carries no user name, email, IP identifier, or account profile. Entries are processed ephemerally and are not retained or used for model training.
                  </p>
                  <p className="text-(--ink)">
                    <strong>Never Transmitted:</strong> Mood ratings, photos, onboarding answers, or entries outside the selected period never leave your device.
                  </p>
                </div>
              </section>

              {/* 5. Setup Analytics */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">
                  5. Setup analytics
                </h2>
                <p>
                  <strong className="text-(--ink)">Only the onboarding setup flow is measured. Once you are in the app, nothing is recorded, ever.</strong>
                </p>
                <p>
                  This scope is strictly enforced in code: nothing outside the setup module imports analytics. There are no screen views, no app opens, no entry tracking, no search tracking, no reading telemetry, and no settings changes recorded once setup finishes. We measure only where users encounter difficulty or drop off during initial setup.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-[15px]">
                  <li>
                    <strong>No Identifiers:</strong> We never call <code className="font-mono text-[13px] text-[#7ac4d1]">identify()</code>. Mixpanel receives only an anonymous per-install ID. IP-based geolocation is disabled.
                  </li>
                  <li>
                    <strong>Events Collected During Setup:</strong> Onboarding steps reached and completed, duration to complete, reason category chosen, summary cadence selected, number of selected focus areas and exclusions (count only), backfill photo count picked, and purchase outcome.
                  </li>
                  <li>
                    <strong>Never Sent:</strong> Entry text, prompt text, search queries, mood values, which specific subjects are on your mind, which subjects you excluded, word counts, photo filenames or dates, summary text, screen names, or anything done after onboarding ends.
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> You can turn analytics off in App Settings. Turning it off immediately stops all transmission, clears the local queue, and removes the anonymous ID.
                  </li>
                </ul>
              </section>

              {/* 6. Purchases */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">6. Purchases</h2>
                <p>
                  All subscription and one-time purchases are processed directly by Apple through In-App Purchases. We never receive or store your credit card or billing details. RevenueCat validates receipt state against an anonymous app ID. Renewal reminder notices are generated locally on your device three days before each renewal.
                </p>
              </section>

              {/* 7. Notifications */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">7. Notifications</h2>
                <p>
                  All reminders and renewal notices are scheduled locally on your device. Kept does not operate a remote push server, and no notification payload leaves your device.
                </p>
              </section>

              {/* 8. Sub-processors */}
              <section className="space-y-4">
                <h2 className="text-question text-(--ink)">8. Sub-processors</h2>
                <p>
                  We engage the following third-party service providers to support app functionality:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[14px] border-collapse border border-[#242830]">
                    <thead>
                      <tr className="bg-[#171a20] text-(--ink)">
                        <th className="p-3 border border-[#242830]">Partner</th>
                        <th className="p-3 border border-[#242830]">Data Handled</th>
                        <th className="p-3 border border-[#242830]">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SUB_PROCESSORS.map((sp, idx) => (
                        <tr key={idx} className="border-b border-[#242830] text-(--ink-2)">
                          <td className="p-3 border border-[#242830] font-medium text-(--ink)">
                            {sp.name}
                          </td>
                          <td className="p-3 border border-[#242830]">{sp.data}</td>
                          <td className="p-3 border border-[#242830]">{sp.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 9. Your Rights */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">9. Your rights</h2>
                <p>
                  Because Kept holds no user accounts, email addresses, or cloud-stored journals, traditional data retrieval requests do not apply:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-[15px]">
                  <li>
                    <strong className="text-(--ink)">Data Export:</strong> You can export your full journal as Markdown files or as an encrypted backup file from the app at any time.
                  </li>
                  <li>
                    <strong className="text-(--ink)">Data Deletion:</strong> Deleting an entry or deleting the Kept app from your device permanently removes your local database and Keychain encryption key.
                  </li>
                </ul>
              </section>

              {/* 10. Children's Privacy */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">
                  10. Children&apos;s privacy
                </h2>
                <p>
                  Kept is not directed at children under the age of 13. We do not knowingly collect personal data from children.
                </p>
              </section>

              {/* 11. International Transfers */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">
                  11. International transfers
                </h2>
                <p>
                  Sub-processors utilised for inference and setup analytics operate in the United States. Transfers from the EU/EEA and UK are governed by standard contractual clauses (SCCs) to ensure equivalent data protection safeguards.
                </p>
              </section>

              {/* 12. Legal Bases (GDPR / UK Data Protection) */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">
                  12. Legal bases (EU &amp; UK)
                </h2>
                <p>
                  Under the GDPR and UK Data Protection Act, our legal bases for processing data include:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2 text-[15px]">
                  <li>
                    <strong>Contract Performance:</strong> Generating requested summaries and processing subscription entitlements.
                  </li>
                  <li>
                    <strong>Explicit Consent (Article 9):</strong> Free-form journal entries may inadvertently contain special category health information. By tapping to generate a summary, you explicitly consent to the ephemeral transmission required to produce your one-page summary.
                  </li>
                  <li>
                    <strong>Legitimate Interest:</strong> Anonymous setup flow analytics during onboarding, which you can opt out of at any time.
                  </li>
                </ul>
              </section>

              {/* 13. Changes */}
              <section className="space-y-3">
                <h2 className="text-question text-(--ink)">
                  13. Changes to this policy
                </h2>
                <p>
                  If we update our privacy practices or sub-processors, changes will be posted directly to this page with an updated effective date.
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
