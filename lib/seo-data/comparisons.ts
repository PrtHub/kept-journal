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
  {
    slug: "daylio",
    competitorName: "Daylio",
    competitorType: "Micro-mood icon tracker",
    metaTitle: "Kept vs Daylio — Reflective Journaling vs Icon Tracking (2026)",
    metaDescription:
      "Compare Kept and Daylio. Discover why long-form private writing and one-page summaries provide deeper therapeutic value than tapping mood icons.",
    headline: "Kept vs Daylio: In-depth reflection vs micro-mood tracking",
    lead:
      "Daylio tracks daily moods through icon buttons and activity tags. Kept is a private writing journal that lets you record real context and delivers a structured one-page summary on request.",
    overview:
      "Icon trackers are designed for five-second check-ins. While convenient, clicking icons cannot capture the nuances of work struggles, relationships, or therapy themes. Kept provides fluid text capture with on-device encryption and periodic review sheets.",
    verdict:
      "If you only want to log quick mood ratings and activity tags in five seconds, Daylio is an efficient tracker. If you want to write freely, notice recurring words, and receive a structured one-page summary before your therapy session, Kept provides the writing space.",
    differences: [
      {
        feature: "Depth of Context",
        kept: "Fluid, full-screen writing with optional mood ratings after writing and attached photos.",
        competitor: "Tapping mood icons with optional short note fields.",
        whyItMatters:
          "Meaningful reflection requires capturing the actual narrative behind your emotions.",
      },
      {
        feature: "Summary Deliverable",
        kept: "One-page summary of counted figures, exact quotes, and three reflection questions.",
        competitor: "Aggregated monthly mood graphs and activity correlation percentages.",
        whyItMatters:
          "A structured page of quotes and facts is far more actionable for therapy than abstract graph lines.",
      },
      {
        feature: "Privacy & Encryption",
        kept: "On-device SQLCipher AES-256 with keys in the iOS Keychain. Zero remote accounts.",
        competitor: "Cloud backup and account sync.",
        whyItMatters:
          "Your personal thoughts should stay locked on your device without remote profile tracking.",
      },
    ],
    tableMatrix: [
      {
        dimension: "Primary Focus",
        kept: "Reflective long-form writing",
        competitor: "Micro-mood icon logging",
      },
      {
        dimension: "Summary Deliverable",
        kept: "One-page structured sheet with quotes",
        competitor: "Statistical mood charts",
      },
      {
        dimension: "Database Encryption",
        kept: "SQLCipher (AES-256) on device",
        competitor: "Standard app storage / cloud backup",
      },
      {
        dimension: "Account Requirement",
        kept: "None (zero accounts)",
        competitor: "Optional cloud account",
      },
    ],
    faq: [
      {
        q: "Can I still track my mood in Kept?",
        a: "Yes. Kept asks for an optional mood rating after you write, never before, and displays mood-by-topic contrast in the Insights tab.",
      },
    ],
  },
  {
    slug: "reflectly",
    competitorName: "Reflectly",
    competitorType: "AI mood check-in app",
    metaTitle: "Kept vs Reflectly — Prompt-Free Writing vs AI Questionnaires (2026)",
    metaDescription:
      "Compare Kept and Reflectly. Learn the difference between quiet, local-first journaling and algorithmic sentiment questionnaires.",
    headline: "Kept vs Reflectly: Prompt-free writing vs algorithmic questionnaires",
    lead:
      "Reflectly uses algorithmic questionnaires and sentiment scores to guide your day. Kept provides a quiet, prompt-free page that stores writing locally and writes you a one-page summary on request.",
    overview:
      "Reflectly asks structured daily check-in questions and calculates algorithmic happiness scores. Kept avoids mood scoreboards and questionnaires: you open the app to write freely, your words stay encrypted locally, and you get a structured page when you ask for one.",
    verdict:
      "If you want daily guided questionnaires and automated mood graphs, Reflectly offers a structured workflow. If you want a quiet private notebook that leaves you alone while writing and delivers a factual one-page summary for sessions, Kept is built for you.",
    differences: [
      {
        feature: "Writing Flow",
        kept: "Prompt-free by default. Write what is on your mind without questionnaire gates.",
        competitor: "Multi-step check-in questionnaire asking how your day was before writing.",
        whyItMatters:
          "Writing without pre-set questions allows your own thoughts to emerge naturally.",
      },
      {
        feature: "Synthesis vs Scoring",
        kept: "Counted facts, verbatim quotes, and three reflection questions on request.",
        competitor: "Algorithmic happiness metrics and sentiment analysis graphs.",
        whyItMatters:
          "Factual evidence from your own words is more grounded than machine-generated sentiment numbers.",
      },
      {
        feature: "Data Architecture",
        kept: "Local SQLCipher encryption with keys in the iOS Keychain. Zero user accounts.",
        competitor: "Cloud account database storing user profiles.",
        whyItMatters:
          "Local storage ensures your journal is protected against server-side breaches.",
      },
    ],
    tableMatrix: [
      {
        dimension: "Interaction Style",
        kept: "Quiet writing with optional reroll prompts",
        competitor: "Guided daily check-in questions",
      },
      {
        dimension: "Feedback Model",
        kept: "Factual one-page summary on request",
        competitor: "Daily AI sentiment scores",
      },
      {
        dimension: "Storage Model",
        kept: "100% on-device SQLCipher",
        competitor: "Cloud server database",
      },
      {
        dimension: "User Account",
        kept: "None",
        competitor: "Mandatory account",
      },
    ],
    faq: [
      {
        q: "Does Kept calculate a happiness score?",
        a: "No. Kept does not score your emotions or grade your writing.",
      },
    ],
  },
  {
    slug: "finch",
    competitorName: "Finch",
    competitorType: "Gamified self-care pet app",
    metaTitle: "Kept vs Finch — Calm Adult Reflection vs Gamified Self-Care (2026)",
    metaDescription:
      "A comparison of Kept and Finch. Explore the difference between calm, unhedged journaling and gamified virtual pet routines.",
    headline: "Kept vs Finch: Calm adult reflection vs virtual pet gamification",
    lead:
      "Finch uses a virtual pet and reward coins to encourage daily self-care tasks. Kept is a calm, unhedged journal with no avatars, no points, no streaks, and a one-page summary on request.",
    overview:
      "Gamified apps use rewards and character progression to drive engagement. Kept is designed for adults who want a quiet, respectful tool: you write when something happens, the app measures your pledge without grading, and your notes stay encrypted on your phone.",
    verdict:
      "If you find virtual pet rewards and gamified task checklists motivating, Finch is a popular self-care app. If you want a private, distraction-free journal for therapy and personal review that treats you as an adult, Kept provides the quiet page.",
    differences: [
      {
        feature: "Gamification & Rewards",
        kept: "Zero gamification. No virtual pets, no coins, no scoreboards, and no avatars.",
        competitor: "Virtual pet care, daily adventure rewards, and clothing customization.",
        whyItMatters:
          "Journals should provide a calm mirror for your thoughts rather than a gamified routine.",
      },
      {
        feature: "Tone & Interface",
        kept: "Nocturne dark mode with ambient shaders and refined typography.",
        competitor: "Colorful cartoon graphics with game audio effects.",
        whyItMatters:
          "A quiet aesthetic encourages honest, serious emotional reflection.",
      },
      {
        feature: "Summary Output",
        kept: "One-page summary of counted figures, exact quotes, and reflection questions.",
        competitor: "Self-care achievement logs and item unlocks.",
        whyItMatters:
          "Synthesized text sheets give you actionable notes to bring to therapy sessions.",
      },
    ],
    tableMatrix: [
      {
        dimension: "Accountability Model",
        kept: "Measured pledge (No points or guilt)",
        competitor: "Pet energy & quest completion",
      },
      {
        dimension: "Aesthetic",
        kept: "Nocturne minimal dark palette",
        competitor: "Cartoon gamified interface",
      },
      {
        dimension: "Summary Deliverable",
        kept: "Structured one-page text summary",
        competitor: "Activity logs & achievements",
      },
      {
        dimension: "Privacy",
        kept: "Local SQLCipher encryption",
        competitor: "Cloud account sync",
      },
    ],
    faq: [
      {
        q: "Is Kept suitable for therapy preparation?",
        a: "Yes. Kept was specifically designed to help therapy clients capture notes between sessions and prepare a clean summary.",
      },
    ],
  },
  {
    slug: "obsidian",
    competitorName: "Obsidian",
    competitorType: "Markdown knowledge graph",
    metaTitle: "Kept vs Obsidian for Journaling — Dedicated App vs Graph Setup (2026)",
    metaDescription:
      "Compare Kept and Obsidian for daily journaling. See why a dedicated local iPhone journal outperforms complex markdown vault setups.",
    headline: "Kept vs Obsidian: Dedicated iPhone reflection vs markdown vault setup",
    lead:
      "Obsidian is a powerful knowledge base with graph views and infinite plugins. Kept is a dedicated private iPhone journal that requires zero configuration and writes you a one-page summary on request.",
    overview:
      "Setting up a daily journal in Obsidian requires configuring vaults, daily notes plugins, template formats, and sync tools. Kept requires zero setup: it opens instantly to today's date, protects your database with Keychain encryption, and automatically compiles periodic review pages.",
    verdict:
      "If you want an interconnected personal wiki and research vault on desktop, Obsidian is an exceptional tool. If you want a private iPhone journal for therapy and daily reflection that works immediately with zero configuration, Kept provides the focused space.",
    differences: [
      {
        feature: "Mobile Experience & Speed",
        kept: "Native iOS app with instant startup, smooth keyboard handling, and ambient shader visuals.",
        competitor: "Cross-platform mobile wrapper requiring vault loading and plugin indexing.",
        whyItMatters:
          "Lower startup friction ensures you record thoughts in the moment before they fade.",
      },
      {
        feature: "Summary Automation",
        kept: "Generates structured one-page summaries with counted facts and extracted quotes on request.",
        competitor: "Requires manual review or configuring third-party community AI plugins.",
        whyItMatters:
          "Built-in synthesis provides a clean deliverable without technical plugin maintenance.",
      },
      {
        feature: "On-Device Security",
        kept: "SQLCipher database encrypted with hardware keys in the iOS Keychain and Face ID locking.",
        competitor: "Plain text files stored in the local file system unencrypted at rest.",
        whyItMatters:
          "Database encryption prevents unauthorized access if someone inspects local device files.",
      },
    ],
    tableMatrix: [
      {
        dimension: "Setup Required",
        kept: "Zero (Ready on install)",
        competitor: "Vault, templates, and plugin configuration",
      },
      {
        dimension: "Database Encryption",
        kept: "SQLCipher AES-256 + Keychain",
        competitor: "Plain text files in filesystem",
      },
      {
        dimension: "One-Page Summaries",
        kept: "Built-in structured synthesis on request",
        competitor: "Manual note compilation",
      },
      {
        dimension: "Export Portability",
        kept: "Standard Markdown export & encrypted backup",
        competitor: "Local Markdown files",
      },
    ],
    faq: [
      {
        q: "Can I export my Kept journal into my Obsidian vault?",
        a: "Yes. Kept exports clean Markdown (.md) files that integrate seamlessly into any Obsidian vault.",
      },
    ],
  },
  {
    slug: "journey",
    competitorName: "Journey",
    competitorType: "Cross-platform cloud journal",
    metaTitle: "Kept vs Journey — Local-First Encryption vs Cloud Storage (2026)",
    metaDescription:
      "Compare Kept and Journey. Explore the difference between on-device SQLCipher encryption and third-party cloud drive synchronization.",
    headline: "Kept vs Journey: Local-first security vs cloud synchronization",
    lead:
      "Journey synchronizes entries across platforms using Google Drive and cloud servers. Kept keeps your writing strictly on your iPhone with local SQLCipher encryption and zero remote accounts.",
    overview:
      "Journey is built for multi-device sync across Android, web, Windows, and iOS. Kept is engineered for iPhone users who prioritize absolute privacy: your writing never lives on a third-party cloud drive, and you get a structured one-page summary on request.",
    verdict:
      "If you need to access your journal across Android, web, and desktop via Google Drive sync, Journey is a versatile cross-platform tool. If you want an encrypted iPhone journal with zero cloud dependencies that writes you a one-page summary, Kept provides the private space.",
    differences: [
      {
        feature: "Storage Architecture",
        kept: "SQLCipher (AES-256) on iPhone only. Keys stored in the secure iOS Keychain.",
        competitor: "Synchronized with Google Drive or Journey Cloud servers.",
        whyItMatters:
          "Keeping entries local ensures your journal is completely isolated from cloud drive vulnerabilities.",
      },
      {
        feature: "Periodic Summaries",
        kept: "Structured one-page summary with counted metrics, quotes, and reflection questions.",
        competitor: "Timeline flashbacks, calendar view, and coach programs.",
        whyItMatters:
          "Summaries synthesize weeks of notes into a clean deliverable for therapy appointments.",
      },
      {
        feature: "Day-One Onboarding",
        kept: "5-photo library backfill creates a year of context in twenty minutes.",
        competitor: "Starts as an empty feed requiring daily entries.",
        whyItMatters:
          "Photo backfill solves blank timeline fatigue immediately.",
      },
    ],
    tableMatrix: [
      {
        dimension: "Primary Storage",
        kept: "Encrypted SQLite on iPhone",
        competitor: "Google Drive / Journey Cloud",
      },
      {
        dimension: "Account Model",
        kept: "Zero accounts",
        competitor: "Mandatory Google/Apple login",
      },
      {
        dimension: "Summary Deliverable",
        kept: "Counted facts, verbatim quotes, reflection questions",
        competitor: "Timeline search and flashbacks",
      },
      {
        dimension: "Writing Access",
        kept: "Free forever (Only summary is paid)",
        competitor: "Subscription required for full features",
      },
    ],
    faq: [
      {
        q: "Can I backup my Kept journal safely without cloud sync?",
        a: "Yes. Kept includes encrypted backup export locked with a personal passphrase using scrypt and XChaCha20-Poly1305.",
      },
    ],
  },
];

export function getComparisonBySlug(slug: string): ComparisonItem | undefined {
  return COMPARISONS.find((c) => c.slug === slug);
}

