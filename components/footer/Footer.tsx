import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#242830] pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Comprehensive 6-Column Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 pb-12 mb-8 border-b border-[#242830]/60 text-[14px]">
          {/* Column 1: Comparisons */}
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
                <Link href="/vs/stoic" className="hover:text-(--ink-2) transition-colors">
                  vs Stoic
                </Link>
              </li>
              <li>
                <Link href="/vs/pen-and-paper" className="hover:text-(--ink-2) transition-colors">
                  vs Pen &amp; Paper
                </Link>
              </li>
              <li>
                <Link href="/vs" className="text-[#7ac4d1] hover:underline pt-1 inline-block">
                  All comparisons →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Alternatives */}
          <div>
            <span className="text-meta text-(--ink) block mb-3 font-medium">Alternatives</span>
            <ul className="space-y-2 text-(--ink-3)">
              <li>
                <Link href="/alternatives/day-one" className="hover:text-(--ink-2) transition-colors">
                  Day One Alt
                </Link>
              </li>
              <li>
                <Link href="/alternatives/apple-journal" className="hover:text-(--ink-2) transition-colors">
                  Apple Journal Alt
                </Link>
              </li>
              <li>
                <Link href="/alternatives/notion" className="hover:text-(--ink-2) transition-colors">
                  Notion Alt
                </Link>
              </li>
              <li>
                <Link href="/alternatives/daylio" className="hover:text-(--ink-2) transition-colors">
                  Daylio Alt
                </Link>
              </li>
              <li>
                <Link href="/alternatives/rosebud" className="hover:text-(--ink-2) transition-colors">
                  Rosebud Alt
                </Link>
              </li>
              <li>
                <Link href="/alternatives" className="text-[#7ac4d1] hover:underline pt-1 inline-block">
                  All alternatives →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Workflows */}
          <div>
            <span className="text-meta text-(--ink) block mb-3 font-medium">Workflows</span>
            <ul className="space-y-2 text-(--ink-3)">
              <li>
                <Link href="/for/therapy-clients" className="hover:text-(--ink-2) transition-colors">
                  For Therapy
                </Link>
              </li>
              <li>
                <Link href="/for/cbt-and-session-prep" className="hover:text-(--ink-2) transition-colors">
                  CBT &amp; Session Prep
                </Link>
              </li>
              <li>
                <Link href="/for/anxiety-and-overthinking" className="hover:text-(--ink-2) transition-colors">
                  Anxiety &amp; Loops
                </Link>
              </li>
              <li>
                <Link href="/for/adhd-journaling" className="hover:text-(--ink-2) transition-colors">
                  ADHD Journaling
                </Link>
              </li>
              <li>
                <Link href="/for/weekly-reviews" className="hover:text-(--ink-2) transition-colors">
                  Weekly Reviews
                </Link>
              </li>
              <li>
                <Link href="/for" className="text-[#7ac4d1] hover:underline pt-1 inline-block">
                  All workflows →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Prompts */}
          <div>
            <span className="text-meta text-(--ink) block mb-3 font-medium">Prompts</span>
            <ul className="space-y-2 text-(--ink-3)">
              <li>
                <Link href="/prompts/therapy-session-prep" className="hover:text-(--ink-2) transition-colors">
                  Therapy Prompts
                </Link>
              </li>
              <li>
                <Link href="/prompts/anxiety-and-overthinking" className="hover:text-(--ink-2) transition-colors">
                  Anxiety Prompts
                </Link>
              </li>
              <li>
                <Link href="/prompts/cbt-thought-examination" className="hover:text-(--ink-2) transition-colors">
                  CBT Thought Prompts
                </Link>
              </li>
              <li>
                <Link href="/prompts/weekly-review-questions" className="hover:text-(--ink-2) transition-colors">
                  Weekly Questions
                </Link>
              </li>
              <li>
                <Link href="/prompts/evening-reflection" className="hover:text-(--ink-2) transition-colors">
                  Evening Prompts
                </Link>
              </li>
              <li>
                <Link href="/prompts" className="text-[#7ac4d1] hover:underline pt-1 inline-block">
                  All prompts →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Guides */}
          <div>
            <span className="text-meta text-(--ink) block mb-3 font-medium">Guides</span>
            <ul className="space-y-2 text-(--ink-3)">
              <li>
                <Link href="/guides/how-to-journal-for-therapy" className="hover:text-(--ink-2) transition-colors">
                  Journal for Therapy
                </Link>
              </li>
              <li>
                <Link href="/guides/local-first-journaling-privacy" className="hover:text-(--ink-2) transition-colors">
                  Local-First Privacy
                </Link>
              </li>
              <li>
                <Link href="/guides/how-to-do-a-weekly-review" className="hover:text-(--ink-2) transition-colors">
                  10-Min Weekly Review
                </Link>
              </li>
              <li>
                <Link href="/guides/adhd-journaling-without-burnout" className="hover:text-(--ink-2) transition-colors">
                  ADHD Without Burnout
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-[#7ac4d1] hover:underline pt-1 inline-block">
                  All guides →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 6: Architecture & Legal */}
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
                <Link href="/features/local-fts5-search" className="hover:text-(--ink-2) transition-colors">
                  Local FTS5 Search
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-(--ink-2) transition-colors">
                  All Architecture
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
            <span>© Kept · Encrypted on iOS · No cloud account</span>
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
