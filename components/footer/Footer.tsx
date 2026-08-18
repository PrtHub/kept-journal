import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#242830] pt-12 pb-8">
      <div className="max-w-270 mx-auto px-6">
        {/* Directory links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-10 mb-8 border-b border-[#242830]/60 text-[14px]">
          <div>
            <span className="text-meta text-(--ink) block mb-3 font-medium">Comparisons</span>
            <ul className="space-y-2 text-(--ink-3)">
              <li>
                <Link href="/vs/apple-journal" className="hover:text-(--ink-2) transition-colors">
                  vs Apple Journal
                </Link>
              </li>
              <li>
                <Link href="/vs/day-one" className="hover:text-(--ink-2) transition-colors">
                  vs Day One
                </Link>
              </li>
              <li>
                <Link href="/vs/notion" className="hover:text-(--ink-2) transition-colors">
                  vs Notion
                </Link>
              </li>
              <li>
                <Link href="/vs" className="text-[#7ac4d1] hover:underline">
                  All comparisons →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-meta text-(--ink) block mb-3 font-medium">Workflows</span>
            <ul className="space-y-2 text-(--ink-3)">
              <li>
                <Link href="/for/therapy-clients" className="hover:text-(--ink-2) transition-colors">
                  For Therapy Clients
                </Link>
              </li>
              <li>
                <Link href="/for/cbt-and-session-prep" className="hover:text-(--ink-2) transition-colors">
                  CBT &amp; Session Prep
                </Link>
              </li>
              <li>
                <Link href="/for/weekly-reviews" className="hover:text-(--ink-2) transition-colors">
                  Weekly Reviews
                </Link>
              </li>
              <li>
                <Link href="/for" className="text-[#7ac4d1] hover:underline">
                  All workflows →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-meta text-(--ink) block mb-3 font-medium">Architecture</span>
            <ul className="space-y-2 text-(--ink-3)">
              <li>
                <Link href="/features/encrypted-offline-storage" className="hover:text-(--ink-2) transition-colors">
                  Encrypted Storage
                </Link>
              </li>
              <li>
                <Link href="/features/one-page-summaries" className="hover:text-(--ink-2) transition-colors">
                  One-Page Summaries
                </Link>
              </li>
              <li>
                <Link href="/features/photo-backfill" className="hover:text-(--ink-2) transition-colors">
                  Photo Backfill
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-[#7ac4d1] hover:underline">
                  All architecture →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-meta text-(--ink) block mb-3 font-medium">Product</span>
            <ul className="space-y-2 text-(--ink-3)">
              <li>
                <Link href="/about" className="hover:text-(--ink-2) transition-colors">
                  About Kept
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-(--ink-2) transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-(--ink-2) transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-(--ink-2) transition-colors">
                  Support &amp; FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-meta text-(--ink-3)">
          <div>
            <span>© Kept · Encrypted on iOS</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="hover:text-(--ink-2) transition-colors duration-220"
            >
              About
            </Link>
            <span>·</span>
            <Link
              href="/privacy"
              className="hover:text-(--ink-2) transition-colors duration-220"
            >
              Privacy
            </Link>
            <span>·</span>
            <Link
              href="/terms"
              className="hover:text-(--ink-2) transition-colors duration-220"
            >
              Terms
            </Link>
            <span>·</span>
            <Link
              href="/support"
              className="hover:text-(--ink-2) transition-colors duration-220"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
