import React from "react";
import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";

export const metadata = {
  title: "Terms — Kept",
  description: "Kept terms of service and subscription terms.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#7ac4d1]/30 selection:text-(--ink)">
      <AmbientField />
      <Navbar />

      <main id="main-content" className="relative z-10 pt-32 pb-24 flex-1">
        <div className="max-w-270 mx-auto px-6">
          <div className="prose-container">
            <Link
              href="/"
              className="text-meta text-[#7ac4d1] inline-flex items-center gap-1.5 mb-8 hover:underline"
            >
              ← Back to home
            </Link>

            <SectionLabel>LEGAL &amp; TERMS</SectionLabel>
            <h1 className="text-display mb-8 text-(--ink)">Terms of Service</h1>

            <div className="space-y-6 text-prose text-(--ink-2)">
              <p>
                By using Kept, you agree to these terms. Writing, reading, searching, and exporting your entries are free forever.
              </p>

              <h2 className="text-question text-(--ink) pt-4">Subscriptions &amp; Purchases</h2>
              <p>
                Kept offers optional paid summary features via Apple In-App Purchase:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Monthly subscription: $9.99 / month</li>
                <li>Yearly subscription: $39.99 / year</li>
                <li>One-time purchase: $99.99 (no expiration date, never renews)</li>
              </ul>

              <h2 className="text-question text-(--ink) pt-4">Auto-Renewal &amp; Cancellation</h2>
              <p>
                Monthly and yearly subscriptions automatically renew unless cancelled through your Apple ID Settings at least 24 hours prior to the renewal date. Kept notifies you three days prior to renewal with the exact renewal amount.
              </p>

              <h2 className="text-question text-(--ink) pt-4">Data Retention Upon Expiry</h2>
              <p>
                If you cancel a subscription, your journal remains on your device. You retain full access to read, search, write, and export your journal entries forever.
              </p>
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
