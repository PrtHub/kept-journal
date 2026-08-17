import React from "react";
import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";

export const metadata = {
  title: "Support — Kept",
  description: "Get support for Kept on iOS.",
};

export default function SupportPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#7ac4d1]/30 selection:text-(--ink)">
      <AmbientField />
      <Navbar />

      <main id="main-content" className="relative z-10 pt-32 pb-24 flex-1">
        <div className="max-w-270 mx-auto px-6">
          <div className="prose-container w-full mx-auto">
            <Link
              href="/"
              className="text-meta text-[#7ac4d1] inline-flex items-center gap-1.5 mb-8 hover:underline"
            >
              ← Back to home
            </Link>

            <SectionLabel>HELP &amp; GUIDANCE</SectionLabel>
            <h1 className="text-display mb-8 text-(--ink)">Support</h1>

            <div className="space-y-6 text-prose text-(--ink-2)">
              <p>
                Need help with Kept? Here are answers to common questions and how to contact us.
              </p>

              <h2 className="text-question text-(--ink) pt-4">Restoring Purchases</h2>
              <p>
                If you reinstalled Kept or switched to a new iPhone, open Kept Settings and tap &ldquo;Restore Purchases&rdquo;. Your Apple ID will automatically recognize your subscription or one-time license.
              </p>

              <h2 className="text-question text-(--ink) pt-4">Managing Subscriptions</h2>
              <p>
                To change or cancel your subscription, open your iPhone&apos;s Settings &gt; [Your Apple ID] &gt; Subscriptions &gt; Kept.
              </p>

              <h2 className="text-question text-(--ink) pt-4">Encrypted Backups</h2>
              <p>
                You can create a standalone encrypted backup file at any time from Settings &gt; Export &gt; Encrypted Backup. Remember to store your passphrase safely; because we do not have a server, lost passphrases cannot be recovered.
              </p>

              <h2 className="text-question text-(--ink) pt-4">Contact</h2>
              <p>
                For bug reports, technical inquiries, or assistance, reach us at{" "}
                <a
                  href="mailto:pritamfinds@gmail.com"
                  className="secondary-link text-[#7ac4d1]"
                >
                  pritamfinds@gmail.com
                </a>
                .
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
