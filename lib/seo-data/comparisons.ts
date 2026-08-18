import { ComparisonItem } from "./types";

export const COMPARISONS: ComparisonItem[] = [
  {
    slug: "apple-journal",
    competitorName: "Apple Journal",
    competitorType: "First-party iOS journal",
    metaTitle: "Kept vs Apple Journal — Architectural Comparison (2026)",
    metaDescription:
      "A factual comparison between Kept and Apple Journal. Explore local encryption, on-request one-page summaries, and long-term reflection.",
    headline: "Kept vs Apple Journal: What happens to your writing over time",
    lead:
      "Both applications run on iOS and store entries on your device. The difference lies in what you receive back: a scrolling timeline of prompts, or a structured one-page summary on the day you choose.",
    overview:
      "Apple Journal is integrated into iOS with automatic suggestion prompts from workouts, music, and locations. Kept is a quiet, prompt-free journal designed to give you a single structured page back whenever you ask for one.",
    verdict:
      "If you want system-level suggestions based on your daily iPhone activity, Apple Journal is built for you. If you want prompt-free reflection, instant photo onboarding, and a one-page summary of counted facts and verbatim quotes for therapy or personal review, Kept provides the structured page.",
    differences: [
      {
        feature: "Summary Generation",
        kept: "Generates a structured one-page summary on request with counted figures, quotes, and three reflection questions.",
        competitor: "No summary generation. Entries remain a continuous chronological list.",
        whyItMatters:
          "Summaries allow you to review a fortnight or month of thoughts in two minutes before a session.",
      },
      {
        feature: "Timeline Interface",
        kept: "Multi-year grid with generated abstract visual marks for every entry.",
        competitor: "Vertical scrolling card feed.",
        whyItMatters:
          "A visual grid lets you see a full year of consistency without exposing private text to nearby observers.",
      },
      {
        feature: "Prompts & Suggestions",
        kept: "Prompt-free. You write what is on your mind without algorithmic suggestions.",
        competitor: "Prompts derived from workouts, photos, podcast listening, and places visited.",
        whyItMatters:
          "Algorithmic prompts can dictate what you write instead of letting you record what matters to you.",
      },
      {
        feature: "Data Export",
        kept: "Instant Markdown export and encrypted backup files locked with your own passphrase.",
        competitor: "Limited export options through standard system share sheets.",
        whyItMatters:
          "Your writing should always remain accessible in plain, open formats outside any proprietary ecosystem.",
      },
    ],
    tableMatrix: [
      {
        dimension: "Database Encryption",
        kept: "SQLCipher (AES-256) with key in iOS Keychain",
        competitor: "Encrypted with device passcode / iCloud backup",
      },
      {
        dimension: "One-Page Summaries",
        kept: "Yes, generated on request with counted facts and quotes",
        competitor: "No",
      },
      {
        dimension: "Account Requirement",
        kept: "None (zero accounts, no sign-up)",
        competitor: "Apple ID",
      },
      {
        dimension: "Day-One Context",
        kept: "5-photo library backfill creates a year of entries in 20 minutes",
        competitor: "Starts as an empty feed",
      },
      {
        dimension: "Data Portability",
        kept: "Plain Markdown export & encrypted backup",
        competitor: "System share sheet",
      },
      {
        dimension: "Pricing",
        kept: "Free to write; optional summary subscriptions ($9.99/mo, $39.99/yr, $99.99 once)",
        competitor: "Included free with iOS",
      },
    ],
    faq: [
      {
        q: "Can I use both Kept and Apple Journal together?",
        a: "Yes. Many people use Apple Journal for quick location-based logs and Kept for focused reflection and session summaries.",
      },
      {
        q: "Does Kept read my Apple Journal entries?",
        a: "No. Kept operates in complete isolation in its own sandboxed container.",
      },
    ],
  },
  {
    slug: "day-one",
    competitorName: "Day One",
    competitorType: "Subscription cloud journal",
    metaTitle: "Kept vs Day One — Architecture, Privacy & Summaries (2026)",
    metaDescription:
      "Compare Kept and Day One. Learn the differences between local-only SQLite encryption and cloud synchronization systems.",
    headline: "Kept vs Day One: Local-first simplicity vs cloud ecosystem",
    lead:
      "Day One is a mature cloud journal with sync across devices. Kept is a focused iPhone journal where writing is free forever, storage is local-first, and you get a one-page summary on request.",
    overview:
      "Day One relies on user accounts and proprietary cloud sync to replicate data across Mac, iPad, and iPhone. Kept removes the cloud layer entirely: your database stays encrypted on your iPhone with zero account creation.",
    verdict:
      "If you require real-time synchronization between Mac, Android, and web with multiple journals, Day One is an established tool. If you want a private iPhone journal where writing is free forever, no account is required, and you receive structured one-page summaries, Kept is built for that workflow.",
    differences: [
      {
        feature: "Account Model",
        kept: "Zero accounts. There is no email, no password, and no server holding your profile.",
        competitor: "Account registration required for sync and subscription state.",
        whyItMatters:
          "No account means there is no remote database to breach or profile to track.",
      },
      {
        feature: "Free vs Paid Boundaries",
        kept: "Writing, reading, searching, and exporting are free forever. Only the summary is paid.",
        competitor: "Basic writing is free; media limits, audio, and sync require a recurring subscription.",
        whyItMatters:
          "You should never be locked out of reading or exporting your own entries if you stop paying.",
      },
      {
        feature: "Summary Deliverable",
        kept: "One-page periodic summary featuring counted figures, verbatim quotes, and three reflection questions.",
        competitor: "Search filters and 'On This Day' flashbacks without synthesized period pages.",
        whyItMatters:
          "Summaries condense weeks of thoughts into a single page you can bring to a session or weekly review.",
      },
      {
        feature: "Onboarding Friction",
        kept: "Select five photos from your library to establish a year of context immediately.",
        competitor: "Starts with an empty timeline and prompts to write today's entry.",
        whyItMatters:
          "Photo backfill solves the empty timeline dilemma on day one without months of waiting.",
      },
    ],
    tableMatrix: [
      {
        dimension: "Primary Storage",
        kept: "Encrypted SQLite on iPhone only",
        competitor: "Day One Cloud / AWS servers",
      },
      {
        dimension: "User Account",
        kept: "None",
        competitor: "Mandatory email registration",
      },
      {
        dimension: "Periodic Summaries",
        kept: "Structured one-page summary with counted facts and quotes",
        competitor: "On This Day flashbacks",
      },
      {
        dimension: "Lifetime Option",
        kept: "Yes ($99.99 one-time)",
        competitor: "Annual subscription only",
      },
      {
        dimension: "Free Tier Limits",
        kept: "Unlimited entries, photos, search, and Markdown export",
        competitor: "Single photo per entry, limited journals without Premium",
      },
    ],
    faq: [
      {
        q: "Can I import my Day One journal into Kept?",
        a: "Kept supports importing entries from plain Markdown and text archives.",
      },
      {
        q: "What happens if I cancel my Kept summary subscription?",
        a: "All your entries remain on your iPhone, completely readable, searchable, and exportable forever.",
      },
    ],
  },
  {
    slug: "notion",
    competitorName: "Notion",
    competitorType: "General workspace database",
    metaTitle: "Kept vs Notion for Journaling — Focused Review vs Workspace (2026)",
    metaDescription:
      "Compare Kept and Notion for daily journaling. See why a dedicated local journal outperforms complex database setups.",
    headline: "Kept vs Notion: Dedicated reflection vs workspace configuration",
    lead:
      "Notion gives you infinite blocks, properties, and templates. Kept gives you a private iPhone journal that opens instantly and writes you a one-page summary on the day you chose.",
    overview:
      "Building a journal in Notion requires setting up database schemas, relations, and views. Kept eliminates template maintenance: it opens to today's date, protects your writing with Keychain encryption, and automatically compiles periodic summaries.",
    verdict:
      "If you want an interconnected knowledge base that links project tasks to wiki pages on your desktop, Notion is a flexible workspace. If you want a private personal journal on iPhone that is fast, local-first, and delivers structured one-page summaries, Kept provides the dedicated environment.",
    differences: [
      {
        feature: "Focus & Friction",
        kept: "Opens immediately to today's page with zero database management or property tagging.",
        competitor: "Requires setting up templates, dropdown properties, relations, and page structures.",
        whyItMatters:
          "Lower friction ensures you write regularly instead of spending time tweaking layouts.",
      },
      {
        feature: "Privacy & Cloud Storage",
        kept: "Encrypted locally on device with SQLCipher; keys in iOS Keychain. No server database.",
        competitor: "Cloud-hosted database unencrypted at rest from workspace administrators.",
        whyItMatters:
          "Personal therapy and intimate thoughts should not reside on collaborative corporate cloud servers.",
      },
      {
        feature: "Summary Automation",
        kept: "Generates one-page summaries with deterministic statistics and verbatim extracted quotes.",
        competitor: "Manual database rollups or AI blocks requiring prompt engineering.",
        whyItMatters:
          "Automated summaries give you a clean deliverable without configuring formulas or prompts.",
      },
    ],
    tableMatrix: [
      {
        dimension: "Security Architecture",
        kept: "On-device SQLCipher AES-256 + Keychain",
        competitor: "Cloud workspace (hosted on AWS)",
      },
      {
        dimension: "Mobile Optimization",
        kept: "Native iOS app with fast startup",
        competitor: "Web view container app",
      },
      {
        dimension: "Summary Deliverable",
        kept: "Counted facts, verbatim quotes, reflection questions",
        competitor: "Manual rollups or custom prompts",
      },
      {
        dimension: "Offline Capability",
        kept: "100% offline-first",
        competitor: "Limited offline cache; cloud sync primary",
      },
    ],
    faq: [
      {
        q: "Can I export my Kept entries into Notion?",
        a: "Yes. Kept exports clean Markdown files that can be dragged directly into Notion pages or databases.",
      },
    ],
  },
  {
    slug: "rosebud",
    competitorName: "Rosebud",
    competitorType: "Interactive conversational journal",
    metaTitle: "Kept vs Rosebud — Prompt-Free Writing vs Conversational AI (2026)",
    metaDescription:
      "A comparison of Kept and Rosebud. Discover the difference between quiet prompt-free journaling and continuous conversational chatbots.",
    headline: "Kept vs Rosebud: Uninterrupted writing vs conversational chatbots",
    lead:
      "Rosebud uses interactive chatbots to reply to every entry you write. Kept provides a quiet, prompt-free page and delivers a one-page summary with counted facts only when you tap to request one.",
    overview:
      "Conversational journaling apps act as interactive interlocutors while you write. Kept takes the opposite approach: you write your thoughts without machine commentary, and the software summarizes the period later with counted statistics and your own verbatim quotes.",
    verdict:
      "If you want an interactive conversational assistant asking follow-up questions in real time, Rosebud offers a guided chatbot experience. If you want an uninterrupted private journal that leaves you alone while writing and provides a factual one-page summary for sessions, Kept is built for you.",
    differences: [
      {
        feature: "Writing Experience",
        kept: "Quiet, uninterrupted, prompt-free writing. No automated machine replies while journaling.",
        competitor: "Conversational chatbot prompts and replies after each paragraph.",
        whyItMatters:
          "Writing without interruptions allows your own thoughts to emerge naturally without machine steer.",
      },
      {
        feature: "Data Architecture",
        kept: "Encrypted SQLite on iPhone. Text is sent ephemerally only when a summary is requested.",
        competitor: "Cloud backend storing interactive conversation logs.",
        whyItMatters:
          "Keeping your daily entries on device ensures your personal journal is not stored in a remote chat log.",
      },
      {
        feature: "Summary Philosophy",
        kept: "Factual one-page summary with counted figures, verbatim quotes, and three reflection questions.",
        competitor: "AI coaching feedback and emotional sentiment scores.",
        whyItMatters:
          "Factual summaries provide objective evidence of what you wrote rather than subjective AI commentary.",
      },
    ],
    tableMatrix: [
      {
        dimension: "Interaction Model",
        kept: "Prompt-free writing; summary on request",
        competitor: "Real-time conversational chat",
      },
      {
        dimension: "Storage Location",
        kept: "Encrypted local SQLite",
        competitor: "Cloud servers",
      },
      {
        dimension: "Feedback Style",
        kept: "Counted facts & verbatim quotes",
        competitor: "Conversational coaching & advice",
      },
      {
        dimension: "Account Requirement",
        kept: "None",
        competitor: "Account registration required",
      },
    ],
    faq: [
      {
        q: "Does Kept give advice or diagnose mental health?",
        a: "No. Kept records, organises, and summarises what you wrote. It is not therapy and offers no advice or diagnoses.",
      },
    ],
  },
  {
    slug: "stoic",
    competitorName: "Stoic",
    competitorType: "Gamified routine & mood tracker",
    metaTitle: "Kept vs Stoic — Calm Reflection vs Habit Trackers (2026)",
    metaDescription:
      "Compare Kept and Stoic. Explore the difference between calm, unhedged reflection and streak-based gamified habit trackers.",
    headline: "Kept vs Stoic: Calm reflection vs gamified routines",
    lead:
      "Stoic combines morning routines, streak counters, and mood scoreboards. Kept is a quiet journal with no streaks, no guilt, no praise, and a one-page summary on the day you choose.",
    overview:
      "Habit trackers use streaks and notifications to maintain daily usage. Kept intentionally omits streak counters: you write as often as you said you would, and a single missed day never resets a score.",
    verdict:
      "If you thrive on morning checklists, breathing exercises, and gamified streak counters, Stoic provides a structured daily routine. If you want a calm, unpressured journal that organises your writing and delivers one-page session notes, Kept provides that space.",
    differences: [
      {
        feature: "Gamification & Streaks",
        kept: "No streak counters, no daily scoreboards, no praise, and no guilt.",
        competitor: "Daily streak badges, routine completion scores, and habit notifications.",
        whyItMatters:
          "Streak counters make missing a day feel like failure. Journaling should support your life, not pressure it.",
      },
      {
        feature: "Mood Tracking",
        kept: "Optional mood rating asked only after you write, never before, and stays on your device.",
        competitor: "Mandatory morning and evening mood questionnaires.",
        whyItMatters:
          "Keeping mood optional ensures you write when you have something to record without questionnaire gates.",
      },
      {
        feature: "Summary Deliverable",
        kept: "A complete one-page summary with counted figures and quotes.",
        competitor: "Weekly trend charts and aggregated mood graphs.",
        whyItMatters:
          "A structured page of prose is more useful for therapy reflection than abstract graph lines.",
      },
    ],
    tableMatrix: [
      {
        dimension: "Streak Counters",
        kept: "None (zero gamification)",
        competitor: "Yes (daily streaks)",
      },
      {
        dimension: "Data Encryption",
        kept: "SQLCipher (AES-256) on device",
        competitor: "Cloud account sync",
      },
      {
        dimension: "Summary Output",
        kept: "One-page summary with counted facts and quotes",
        competitor: "Statistical mood charts",
      },
      {
        dimension: "Free Writing",
        kept: "Free forever with no trials",
        competitor: "Subscription required for full features",
      },
    ],
    faq: [
      {
        q: "Will Kept send me push reminders if I miss a day?",
        a: "Kept only sends notifications at the time you configured in your settings. It never sends guilt-inducing reminder copy.",
      },
    ],
  },
  {
    slug: "pen-and-paper",
    competitorName: "Pen & Paper",
    competitorType: "Physical notebook",
    metaTitle: "Kept vs Pen & Paper — Modern Privacy & Searchability (2026)",
    metaDescription:
      "Comparing Kept with physical paper notebooks. Discover how on-device encryption combines physical privacy with full-text search and summaries.",
    headline: "Kept vs Pen & Paper: The privacy of paper with the utility of software",
    lead:
      "A notebook offers physical tactile privacy. Kept brings that same privacy to your iPhone through Keychain encryption, while adding instant search, encrypted backups, and one-page summaries.",
    overview:
      "Physical paper cannot be hacked remotely, but it can be misplaced, damaged, or read by anyone in the room. Kept combines local-first encryption and Face ID protection with the ability to search a year of entries and generate one-page review sheets.",
    verdict:
      "Paper is irreplaceable for tactile handwriting. When you need instant full-text search across thousands of entries, Face ID locking, and a one-page summary ready for your therapy session, Kept gives you software utility with physical-grade privacy.",
    differences: [
      {
        feature: "Searchability",
        kept: "Instant full-text SQLite search across every entry, date, and keyword.",
        competitor: "Manual page flipping without search indexing.",
        whyItMatters:
          "Finding what you wrote six months ago takes two seconds instead of an hour of leafing through pages.",
      },
      {
        feature: "Physical Security",
        kept: "Encrypted SQLite database protected by Face ID and iOS Keychain.",
        competitor: "Unprotected physical pages readable by anyone who opens the book.",
        whyItMatters:
          "Face ID ensures your personal entries cannot be read if your notebook or phone is left on a desk.",
      },
      {
        feature: "Synthesis & Review",
        kept: "Generates a structured one-page summary of counted facts and quotes on request.",
        competitor: "Requires manual note aggregation and transcription.",
        whyItMatters:
          "Automated synthesis saves hours when preparing reflections for therapy sessions.",
      },
    ],
    tableMatrix: [
      {
        dimension: "Remote Server Risk",
        kept: "Zero (no accounts or cloud storage)",
        competitor: "Zero",
      },
      {
        dimension: "Search Across Entries",
        kept: "Instant full-text index",
        competitor: "Manual review",
      },
      {
        dimension: "Passcode / Face ID Lock",
        kept: "Yes",
        competitor: "No (unless locked in a safe)",
      },
      {
        dimension: "Backup Recovery",
        kept: "Encrypted backup file with personal passphrase",
        competitor: "No backup (single physical copy)",
      },
    ],
    faq: [
      {
        q: "Can I type entries quickly on my iPhone?",
        a: "Yes. Kept is built for rapid typing with smooth keyboard transitions and clean typography.",
      },
    ],
  },
];

export function getComparisonBySlug(slug: string): ComparisonItem | undefined {
  return COMPARISONS.find((c) => c.slug === slug);
}
