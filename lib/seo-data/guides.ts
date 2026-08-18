import { GuideItem } from "./types";

export const GUIDES: GuideItem[] = [
  {
    slug: "how-to-journal-for-therapy",
    title: "How to Journal Between Therapy Sessions",
    category: "Therapy",
    readTime: "4 min read",
    metaTitle: "How to Journal for Therapy — A Practical Guide for Clients (Kept)",
    metaDescription:
      "A practical guide on how to journal effectively between therapy sessions, overcome recency bias, and arrive with clear, honest notes.",
    headline: "How to journal between therapy sessions without blank page fatigue",
    lead: "Most therapy clients want to journal between appointments, but recency bias and blank pages get in the way. Here is a practical framework to make journaling genuinely useful for your sessions.",
    sections: [
      {
        heading: "1. The Recency Bias Trap in Therapy",
        body: "When you sit down with your therapist and hear 'How have the last two weeks been?', human memory naturally gravitates toward whatever happened in the last 24 to 48 hours. If you had a pleasant yesterday, you might report that everything is fine — even if the previous twelve days were marked by intense boundary struggles or sleeplessness. Journaling creates an objective historical anchor against this recency bias.",
      },
      {
        heading: "2. Capture Moments, Not Essays",
        body: "You do not need to write 1,000 words every evening. Writing two sentences when something triggers a strong reaction is far more useful than an essay composed hours later. Focus on observable facts: what happened, what thought ran through your mind, and what physical reaction you felt in your body.",
      },
      {
        heading: "3. Bring a Synthesized Page, Not a Stack of Notes",
        body: "Therapists rarely have time to read through dozens of messy daily journal entries during a 50-minute appointment. Bringing a single structured page — listing your counted active days, exact quoted sentences from different days, and two or three key questions — allows you to dive straight into substantive work within the first five minutes.",
      },
    ],
    keyTakeaways: [
      "Write short, dated notes as things happen rather than waiting for a long evening session.",
      "Track recurring themes rather than isolated daily moods.",
      "Use structured summaries to eliminate 15 minutes of memory recall at the start of your session.",
    ],
    faq: [
      {
        q: "How does Kept help with therapy preparation?",
        a: "Kept compiles your entries from between appointments into a one-page summary featuring counted figures, verbatim quotes, and three reflection questions.",
      },
    ],
  },
  {
    slug: "local-first-journaling-privacy",
    title: "Why Local-First Storage Matters for Personal Journaling",
    category: "Privacy & Security",
    readTime: "5 min read",
    metaTitle: "Local-First Journaling Privacy — Why Encryption Matters (Kept)",
    metaDescription:
      "Discover why local-first SQLite encryption and hardware Keychain keys provide the highest standard of privacy for digital journals.",
    headline: "The privacy case for local-first encrypted journaling",
    lead: "Your journal entries contain your most vulnerable, unvarnished thoughts. Here is why true privacy requires local-first architecture rather than cloud accounts.",
    sections: [
      {
        heading: "1. The Vulnerability of Centralized Cloud Databases",
        body: "When a journal app stores entries on cloud servers, your writing is susceptible to multiple points of failure: server misconfigurations, data breaches, rogue employee access, and corporate acquisition. Even when data is encrypted at rest on a server, the service provider usually holds the master keys.",
      },
      {
        heading: "2. The SQLCipher + Keychain Standard",
        body: "Local-first architecture keeps the database on your physical device. By pairing SQLCipher (AES-256) with cryptographic keys stored in the hardware-backed iOS Keychain under AFTER_FIRST_UNLOCK protection, the decryption key never leaves your phone and cannot be accessed remotely.",
      },
      {
        heading: "3. Ephemeral Processing vs Persistent Storage",
        body: "When machine intelligence is used to help organize or synthesize writing, it must operate on an ephemeral basis: text is transmitted in transit to generate the requested output and immediately discarded without retention for model training or logging.",
      },
    ],
    keyTakeaways: [
      "No account means there is no remote profile to compromise or track.",
      "Hardware-backed encryption ensures only physical access with device credentials can unlock entries.",
      "Standalone encrypted backups provide long-term data ownership without cloud lock-in.",
    ],
    faq: [
      {
        q: "What happens if I lose my phone with a local-first app?",
        a: "The encrypted database is preserved in your encrypted iOS device backups (via iCloud or Finder) and can be restored seamlessly.",
      },
    ],
  },
  {
    slug: "how-to-do-a-weekly-review",
    title: "The 10-Minute Weekly Review Framework",
    category: "Productivity & Reflection",
    readTime: "3 min read",
    metaTitle: "10-Minute Weekly Review Framework — Factual Reflection (Kept)",
    metaDescription:
      "A 10-minute weekly review routine to consolidate scattered thoughts, audit cognitive energy, and set clear weekly boundaries.",
    headline: "A fast, sustainable weekly review framework for Sundays",
    lead: "Weekly review habits fail when the process takes an hour of administrative overhead. Here is how to complete a high-impact review in ten minutes.",
    sections: [
      {
        heading: "1. Review What You Counted, Not What You Felt",
        body: "Subjective feelings about a week are often skewed by Sunday afternoon anxiety. Start by looking at counted facts: how many days you wrote, what recurring topics appeared, and where the majority of your energy went.",
      },
      {
        heading: "2. Read Verbatim Quotes from Mid-Week",
        body: "Reading exact sentences you wrote on Tuesday or Thursday reconnects you with how challenges actually felt in the moment, helping you identify ongoing operational friction before it becomes chronic burnout.",
      },
      {
        heading: "3. Define One Defensive Boundary for Monday",
        body: "End your review by choosing one specific boundary to protect in the coming week: a meeting to decline, an evening to keep free, or a conversation to hold.",
      },
    ],
    keyTakeaways: [
      "Keep reviews under 10 minutes to ensure consistency week after week.",
      "Rely on counted facts and dated quotes rather than Sunday memory recall.",
      "Turn observations into a single concrete boundary for Monday morning.",
    ],
    faq: [
      {
        q: "Can Kept automate the preparation of my weekly review?",
        a: "Yes. Setting your summary cadence to weekly prepares a one-page summary on Sunday morning containing your counted metrics, quotes, and reflection questions.",
      },
    ],
  },
  {
    slug: "adhd-journaling-without-burnout",
    title: "How to Journal with ADHD Without Streak Burnout",
    category: "Neurodiversity",
    readTime: "4 min read",
    metaTitle: "ADHD Journaling Without Streak Burnout & Guilt (Kept)",
    metaDescription:
      "Learn how to maintain an ADHD-friendly journaling habit using photo anchors, visual indexing, and zero-guilt consistency models.",
    headline: "An ADHD-friendly approach to journaling that eliminates streak guilt",
    lead: "Traditional journaling apps rely on streak scores and daily pressure that trigger all-or-nothing abandonment. Here is how to build a journaling habit that works with neurodivergent minds.",
    sections: [
      {
        heading: "1. The Problem with Daily Streak Gamification",
        body: "Gamified streak counters produce a sharp dopamine spike while active, but the moment a day is missed and the streak resets to zero, the brain perceives the entire effort as a failure. Removing streak counters eliminates this all-or-nothing collapse.",
      },
      {
        heading: "2. Visual Anchors Instead of Blank Text Boxes",
        body: "Staring at an empty white input box causes executive function paralysis. Starting with visual anchors — such as five photos from your recent camera roll — establishes immediate historical context without having to generate words from a cold start.",
      },
      {
        heading: "3. Self-Accountability Without Grading",
        body: "Stating consistency plainly (*'You said most days. 11 of the last 14.'*) provides objective self-accountability without negative emotional framing ('behind', 'failing') that triggers avoidance.",
      },
    ],
    keyTakeaways: [
      "Reject streak counters that make a single missed day feel like total failure.",
      "Anchor entries with photos to bypass blank page executive dysfunction.",
      "Write when something happens rather than forcing a rigid daily schedule.",
    ],
    faq: [
      {
        q: "How does Kept support ADHD journaling?",
        a: "Kept features 5-photo onboarding, an abstract year heatmap, prompt rerolling, and zero gamified streaks or guilt notifications.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): GuideItem | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
