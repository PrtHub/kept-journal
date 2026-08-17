import React from "react";
import Link from "next/link";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import AmbientField from "@/components/background/AmbientField";
import SectionLabel from "@/components/common/SectionLabel";

export const metadata = {
  title: "Privacy — Kept",
  description: "Kept privacy policy. Your journal is on your phone. Encrypted.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#7ac4d1]/30 selection:text-[#f4f4f1]">
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

            <SectionLabel>LEGAL &amp; PRIVACY</SectionLabel>
            <h1 className="text-display mb-8 text-[#f4f4f1]">Privacy Policy</h1>

            <div className="space-y-6 text-prose text-[#9aa0a6]">
              <p>
                Kept is designed around a single principle: your journal is yours, and there is no server holding it.
              </p>

              <h2 className="text-question text-[#f4f4f1] pt-4">Data Storage</h2>
              <p>
                All journal entries, photos you select, and mood records are stored exclusively in an encrypted SQLite database on your device. The encryption key is stored securely in the iOS Keychain.
              </p>

              <h2 className="text-question text-[#f4f4f1] pt-4">Network Transmission</h2>
              <p>
                The only data that ever leaves your device is when you explicitly request a periodic summary. During summary generation, that period&apos;s entries are transmitted to our inference provider to create your one-page summary. Once generated, the text is delivered back to your device and is not retained or used for model training.
              </p>

              <h2 className="text-question text-[#f4f4f1] pt-4">Analytics &amp; Tracking</h2>
              <p>
                Kept does not include third-party analytics SDKs, advertising trackers, or telemetry tools. We do not track your activity, session lengths, or usage habits.
              </p>

              <h2 className="text-question text-[#f4f4f1] pt-4">Backups &amp; Export</h2>
              <p>
                You can export your journal as Markdown files at any time. Encrypted backups are locked with a passphrase chosen by you, which is never transmitted to us and cannot be recovered if lost.
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
