import { AlternativeItem } from "./types";

export const ALTERNATIVES: AlternativeItem[] = [
  {
    slug: "day-one",
    targetApp: "Day One",
    targetType: "Cloud Sync Journal",
    metaTitle: "Best Day One Alternative for iPhone — Private & Local-First (Kept)",
    metaDescription:
      "Looking for a Day One alternative? Kept offers local SQLite encryption, zero accounts, free forever writing, and structured one-page summaries.",
    headline: "The private, local-first alternative to Day One",
    lead: "If you are looking for a focused iPhone journal without monthly sync fees, mandatory accounts, or cloud vulnerabilities, Kept was built for you.",
    whyPeopleSwitch:
      "Users look for Day One alternatives when they want to avoid recurring subscription locks on basic features like photo attachments, eliminate remote cloud storage risks, or simplify a cluttered interface down to pure daily reflection.",
    keyDifferences: [
      {
        title: "Zero Accounts vs Mandatory Sign-Up",
        keptApproach: "Open the app and write immediately. There is no email, password, or profile stored on any server.",
        targetApproach: "Requires account creation to sync entries across devices.",
      },
      {
        title: "Free-Forever Writing vs Feature Gates",
        keptApproach: "Writing, reading, photos, FTS5 search, and Markdown export are completely free forever. Only periodic summaries are paid.",
        targetApproach: "Multiple photos, audio, and sync are locked behind recurring Premium subscriptions.",
      },
      {
        title: "On-Demand Summaries vs Flashbacks",
        keptApproach: "Generates a structured one-page summary of counted facts, extracted quotes, and reflection questions for therapy or review.",
        targetApproach: "Offers basic 'On This Day' flashbacks and search filters without synthesized period reviews.",
      },
    ],
    comparisonSummary:
      "Kept provides the physical-grade privacy of paper combined with the analytical power of software: local SQLCipher encryption, Keychain keys, and one-page summaries ready on the morning of your session.",
    faq: [
      {
        q: "Can I import my Day One entries into Kept?",
        a: "Kept supports importing from standard Markdown and text files.",
      },
      {
        q: "Does Kept have a lifetime purchase option?",
        a: "Yes. Kept offers a one-time 'No End Date' purchase for $99.99 that never renews.",
      },
    ],
  },
  {
    slug: "apple-journal",
    targetApp: "Apple Journal",
    targetType: "Native iOS Journal",
    metaTitle: "Best Apple Journal Alternative for Private Reflection (Kept)",
    metaDescription:
      "Looking for an Apple Journal alternative? Kept offers prompt-free writing, photo backfill onboarding, and structured one-page periodic summaries.",
    headline: "The structured, prompt-free alternative to Apple Journal",
    lead: "Apple Journal captures system activity prompts. Kept provides a quiet, focused page for honest reflection that writes you a one-page summary on request.",
    whyPeopleSwitch:
      "While Apple Journal is conveniently built into iOS, many writers find automatic suggestions (workouts, podcasts, locations) distracting and miss having structured periodic synthesis or cross-year visual indexing.",
    keyDifferences: [
      {
        title: "One-Page Summaries vs Infinite Scroll",
        keptApproach: "Compiles your chosen period into a single structured page with counted figures, quotes, and reflection questions.",
        targetApproach: "Entries remain in an endless chronological vertical feed.",
      },
      {
        title: "Prompt-Free Reflection vs Activity Suggestions",
        keptApproach: "Prompt-free by default. Write what is on your mind without algorithmic prompts suggesting topics.",
        targetApproach: "Suggests topics based on places visited, music played, and workouts completed.",
      },
      {
        title: "Multi-Year Grid vs Card Feed",
        keptApproach: "View an entire year of entries on a single screen represented by abstract visual marks that protect privacy from onlookers.",
        targetApproach: "Vertical card feed showing text snippets and location thumbnails.",
      },
    ],
    comparisonSummary:
      "If you want system-level workout logging, Apple Journal is great. If you want a dedicated journal for therapy preparation, weekly reviews, and structured summaries, Kept provides the focused page.",
    faq: [
      {
        q: "Is Kept also local to my iPhone like Apple Journal?",
        a: "Yes. Kept stores your entries in an encrypted SQLite database on your device with keys in the iOS Keychain.",
      },
    ],
  },
  {
    slug: "notion",
    targetApp: "Notion",
    targetType: "Workspace Database",
    metaTitle: "Best Notion Alternative for Journaling — Fast & Encrypted (Kept)",
    metaDescription:
      "Looking for a simpler, private Notion alternative for daily journaling? Kept opens instantly to today's date with on-device encryption.",
    headline: "A dedicated private journal without database maintenance",
    lead: "Stop spending hours formatting templates and property relations. Kept opens instantly to today's date and keeps your writing encrypted on your iPhone.",
    whyPeopleSwitch:
      "Setting up a journal in Notion requires managing databases, templates, and relations. Over time, workspace clutter creates friction, and cloud-hosted data lacks the physical privacy required for intimate personal reflections.",
    keyDifferences: [
      {
        title: "Instant Capture vs Template Setup",
        keptApproach: "Opens immediately to today's date in full-screen dark mode with zero database configuration.",
        targetApproach: "Requires navigating workspaces, creating database entries, and filling out properties.",
      },
      {
        title: "Local SQLCipher vs Cloud Workspace",
        keptApproach: "Encrypted on your iPhone hardware with keys in the iOS Keychain. No remote database exists.",
        targetApproach: "Stored on cloud servers unencrypted at rest from workspace administrators.",
      },
      {
        title: "Automated One-Page Summaries vs Manual Rollups",
        keptApproach: "Generates a structured review sheet with counted metrics and exact quoted sentences on request.",
        targetApproach: "Requires building custom rollup formulas or configuring manual AI prompt blocks.",
      },
    ],
    comparisonSummary:
      "Notion is a powerful project wiki. When you want a quiet, secure space for therapy notes and daily reflection that takes zero seconds to open, Kept provides the dedicated environment.",
    faq: [
      {
        q: "Can I export my Kept entries into Markdown for Notion?",
        a: "Yes. Kept exports standard Markdown (.md) files that can be dragged into Notion anytime.",
      },
    ],
  },
  {
    slug: "stoic",
    targetApp: "Stoic",
    targetType: "Gamified Habit Tracker",
    metaTitle: "Best Stoic Alternative — Calm Reflection Without Streaks (Kept)",
    metaDescription:
      "Looking for a Stoic alternative without streak pressure or mood scoreboards? Kept offers calm, unhedged reflection and one-page summaries.",
    headline: "Calm daily reflection without streaks, praise, or guilt",
    lead: "Habit scoreboards and broken streaks make missing a day feel like failure. Kept offers calm self-accountability without gamification.",
    whyPeopleSwitch:
      "Writers turn to Kept when they grow tired of daily streak anxiety, aggressive notification reminders, and mandatory morning/evening mood questionnaires that interrupt natural writing.",
    keyDifferences: [
      {
        title: "The Measured Pledge vs Streak Counters",
        keptApproach: "Measures your stated consistency (*'You said most days. 11 of the last 14.'*) without grading, points, or guilt.",
        targetApproach: "Daily streak counters and routine completion scores that reset to zero on a missed day.",
      },
      {
        title: "Post-Write Mood vs Mandatory Questionnaires",
        keptApproach: "Optional mood rating asked only after you finish writing, never before, and stored locally.",
        targetApproach: "Mandatory questionnaires gating your morning and evening entry.",
      },
      {
        title: "Structured Text Page vs Aggregated Trend Charts",
        keptApproach: "A clean one-page summary of counted facts and quotes you can bring directly to therapy.",
        targetApproach: "Abstract emotional trend graphs and mood scorecards.",
      },
    ],
    comparisonSummary:
      "Kept treats you like an adult. You write when you need to, the software reflects your consistency accurately without judgment, and you get a structured page whenever you ask for one.",
    faq: [
      {
        q: "Will Kept nag me if I stop writing for a week?",
        a: "No. Kept only sends quiet local notifications at the hour you set, phrased as a calm question rather than an urgent alert.",
      },
    ],
  },
  {
    slug: "rosebud",
    targetApp: "Rosebud",
    targetType: "Conversational AI Journal",
    metaTitle: "Best Rosebud Alternative — Prompt-Free Writing (Kept)",
    metaDescription:
      "Looking for a Rosebud alternative without chatbot interruptions? Kept offers prompt-free journaling and on-demand one-page summaries.",
    headline: "Uninterrupted personal writing without chatbot interruptions",
    lead: "Conversational journaling apps reply to every paragraph with machine commentary. Kept leaves you alone while writing and summarizes the period later.",
    whyPeopleSwitch:
      "Many journalers find continuous chatbot questions disruptive to deep thinking, steer thoughts in unintended directions, and raise privacy concerns regarding cloud chat logs.",
    keyDifferences: [
      {
        title: "Uninterrupted Writing vs Interactive Chatbots",
        keptApproach: "Full-screen, quiet writing space with zero machine replies or conversational commentary while you write.",
        targetApproach: "Interactive AI chatbot asking follow-up questions after every paragraph.",
      },
      {
        title: "On-Device Storage vs Cloud Chat Logs",
        keptApproach: "Entries stay encrypted locally on your iPhone. Text is sent ephemerally only when you tap to generate a summary.",
        targetApproach: "Continuous cloud logging of interactive conversations.",
      },
      {
        title: "Counted Facts vs Subjective AI Coaching",
        keptApproach: "Summaries deliver counted statistics, verbatim quotes, and three reflection questions grounded in your words.",
        targetApproach: "AI psychological coaching, emotional scores, and automated advice.",
      },
    ],
    comparisonSummary:
      "Kept is not a chatbot. It is a quiet private notebook that helps you organize and synthesize your own thoughts on your own schedule.",
    faq: [
      {
        q: "Does Kept give psychological advice?",
        a: "No. Kept records and summarizes what you wrote. It does not provide psychological advice or clinical diagnoses.",
      },
    ],
  },
  {
    slug: "daylio",
    targetApp: "Daylio",
    targetType: "Micro-Mood Tracker",
    metaTitle: "Best Daylio Alternative for In-Depth Reflection (Kept)",
    metaDescription:
      "Looking for a Daylio alternative that supports real writing? Kept offers full-text reflection, local encryption, and one-page summaries.",
    headline: "Move beyond icon clicking to meaningful reflection",
    lead: "Icon-based mood trackers capture high-level emotions but miss the detailed context. Kept makes writing fast, frictionless, and deeply useful.",
    whyPeopleSwitch:
      "Users outgrow micro-trackers when they realize clicking mood icons does not capture the nuances of relationships, work challenges, or therapy themes.",
    keyDifferences: [
      {
        title: "Full-Text Expression vs Icon Tapping",
        keptApproach: "Fluid, full-screen writing with optional mood ratings and attached photos.",
        targetApproach: "Clicking pre-defined mood icons and activity tags with minimal text.",
      },
      {
        title: "One-Page Summary Sheets vs Generic Graphs",
        keptApproach: "Synthesizes weeks of writing into a readable one-page sheet with counted figures and exact quotes.",
        targetApproach: "Aggregated mood charts that show numbers without narrative context.",
      },
      {
        title: "Instant 5-Photo Onboarding vs Empty Start",
        keptApproach: "Pick five photos from your library to establish a full year of context in twenty minutes.",
        targetApproach: "Starts with an empty calendar requiring months of daily clicks before trends emerge.",
      },
    ],
    comparisonSummary:
      "If you want a 5-second mood check, Daylio is a popular icon tracker. When you want to capture the actual stories behind your days and bring clear notes to therapy, Kept provides the writing environment.",
    faq: [
      {
        q: "Is mood tracking still available in Kept?",
        a: "Yes. Kept includes an optional mood rating after you finish writing, and the Insights view analyzes topic-by-mood contrast over time.",
      },
    ],
  },
];

export function getAlternativeBySlug(slug: string): AlternativeItem | undefined {
  return ALTERNATIVES.find((a) => a.slug === slug);
}
