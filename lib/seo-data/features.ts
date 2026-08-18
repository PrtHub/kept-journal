import { FeatureItem } from "./types";

export const FEATURES: FeatureItem[] = [
  {
    slug: "encrypted-offline-storage",
    title: "Encrypted Offline Storage",
    label: "LOCAL-FIRST SECURITY",
    metaTitle: "Encrypted Offline Storage — SQLCipher & Keychain Security (Kept)",
    metaDescription:
      "Explore Kept's security architecture: on-device SQLCipher AES-256 encryption, iOS Keychain key storage, and zero cloud databases.",
    headline: "Your journal lives on your iPhone. Encrypted.",
    lead: "Kept was engineered from the ground up without an account database or cloud sync server. All writing is encrypted with SQLCipher on your device, with keys held in the iOS Keychain.",
    description:
      "Most digital journals store entries on remote servers, exposing private thoughts to server breaches and employee access. Kept keeps your database local. The encryption key is generated on your hardware and never leaves your phone.",
    architectureDetails: [
      {
        title: "SQLCipher Database Engine",
        description:
          "Every entry, timestamp, observation, and full-text search index is stored inside an AES-256 encrypted SQLite database using the SQLCipher extension.",
      },
      {
        title: "iOS Keychain Hardware Key",
        description:
          "The 256-bit cryptographic key is stored in the iOS Keychain under AFTER_FIRST_UNLOCK protection. It is never included in backup files and cannot be derived from the application bundle.",
      },
      {
        title: "Sandboxed Photo Storage",
        description:
          "Photos you attach are stored as ordinary files inside the app's sandboxed container, protected by your iOS device passcode.",
      },
      {
        title: "FTS5 Full-Text Search Index",
        description:
          "High-speed full-text keyword search runs locally through SQLite FTS5 external-content tables with automatic database triggers.",
      },
    ],
    specifications: [
      { label: "Database Engine", value: "SQLCipher (SQLite)" },
      { label: "Encryption Standard", value: "AES-256" },
      { label: "Key Storage", value: "iOS Keychain (AFTER_FIRST_UNLOCK)" },
      { label: "Search Index", value: "FTS5 External Content Tables" },
      { label: "Biometric Protection", value: "Face ID / Touch ID" },
      { label: "Cloud Sync Database", value: "None (Zero accounts)" },
    ],
    faq: [
      {
        q: "What happens if I lose my phone?",
        a: "The encrypted database is included in your encrypted iOS backup (iCloud or Finder). Restoring your device backup restores your journal.",
      },
      {
        q: "Can the developers read my journal entries?",
        a: "No. There is no remote account database, and the decryption key exists only in your device's Keychain.",
      },
    ],
  },
  {
    slug: "one-page-summaries",
    title: "One-Page Summaries",
    label: "STRUCTURED SYNTHESIS",
    metaTitle: "One-Page Journal Summaries — Counted Facts & Verbatim Quotes",
    metaDescription:
      "Learn how Kept generates structured one-page summaries with deterministic counts, extracted quotes, and reflection questions.",
    headline: "One page that synthesises what you actually wrote",
    lead: "Kept transforms weeks of scattered entries into a single structured page. Every number is counted on device, quotes are extracted verbatim from your sentences, and three questions guide your reflection.",
    description:
      "Instead of forcing you to re-read dozens of entries before a therapy appointment or weekly review, Kept compiles a one-page summary on the cadence you choose. It provides counted evidence of your habits and highlights recurring themes.",
    architectureDetails: [
      {
        title: "Deterministic Metric Computation",
        description:
          "Your iPhone calculates concrete metrics locally: writing frequency, active days, word counts, and candidate sentences before any summary request.",
      },
      {
        title: "Structural Anti-Hallucination Pipeline",
        description:
          "The language model returns quote candidate indices rather than raw text, making paraphrase hallucinations impossible. Any generated reflection containing a digit is discarded so unverified numbers never appear.",
      },
      {
        title: "Ephemeral Stateless Gateway",
        description:
          "When you tap to generate a summary, only the entries from that period are transmitted via Convex to OpenRouter. No entry text is stored remotely and nothing is retained for model training.",
      },
      {
        title: "Resilient Failure Degradation",
        description:
          "If the network is unavailable or quota is spent, Kept produces a complete, structured summary page from on-device computed facts rather than failing.",
      },
    ],
    specifications: [
      { label: "Deliverable Format", value: "One-page structured sheet" },
      { label: "Figures Computed", value: "On-device deterministically" },
      { label: "Quotation Guard", value: "Index-based selection (No text synthesis)" },
      { label: "Digit Guard", value: "Automatic rejection of synthesized numbers" },
      { label: "Inference Provider", value: "OpenRouter (Ephemeral)" },
      { label: "Rate Limit", value: "4 summaries per device per day" },
    ],
    faq: [
      {
        q: "Are summaries generated automatically in the background?",
        a: "No. Summaries are generated only when you explicitly tap to request one upon opening the app.",
      },
      {
        q: "Can I turn off summaries completely?",
        a: "Yes. If you choose not to generate summaries, nothing leaves your device at all.",
      },
    ],
  },
  {
    slug: "echo-and-insights",
    title: "Insights & Echo",
    label: "LOCAL OBSERVATIONS",
    metaTitle: "Insights & Echo — Evidence-Based Journal Observations (Kept)",
    metaDescription:
      "Explore Kept's Insights engine: four computed observations that open directly to evidence entries, and Echo from a year ago today.",
    headline: "Observations that open directly to the evidence",
    lead: "Kept notices which words keep coming back, which went quiet, and which two entries belong together — and every observation opens to the exact entries behind it.",
    description:
      "Unlike generic mood scoreboards or sentiment charts, Kept's Insights view is built on local document frequency and retrieval. It identifies meaningful patterns in your writing without cloud AI or external analytics.",
    architectureDetails: [
      {
        title: "Four Computed Observations",
        description:
          "The engine evaluates topic × mood contrast, persisting themes, quiet subjects, and paired entries once you reach seven entries.",
      },
      {
        title: "Every Claim Opens to Evidence",
        description:
          "Tap any observation card to immediately view and read the specific dated journal entries that produced that insight.",
      },
      {
        title: "Local Document Frequency (TF-IDF)",
        description:
          "Recurring terms and sparklines are calculated deterministically on your device using statistical document frequency without machine learning or cloud calls.",
      },
      {
        title: "Echo: A Year Ago Today",
        description:
          "The Today view highlights what you wrote exactly one year ago today (±3 days), providing a quiet temporal anchor.",
      },
    ],
    specifications: [
      { label: "Observation Types", value: "Topic×Mood, Persistence, Quiet, Paired" },
      { label: "Threshold", value: "Gated until 7 entries recorded" },
      { label: "Algorithm", value: "On-device TF-IDF document frequency" },
      { label: "Evidence Link", value: "100% verifiable (Opens to source entries)" },
      { label: "Network Requirement", value: "Zero (Operates 100% offline)" },
    ],
    faq: [
      {
        q: "Does Kept give advice or diagnose mental health in Insights?",
        a: "No. Kept records, organises, and retrieves what you wrote. It does not provide psychological advice or diagnoses.",
      },
      {
        q: "How does Echo choose which entry to display?",
        a: "Echo retrieves entries written 365 days ago (within a 3-day window) from your local SQLite database.",
      },
    ],
  },
  {
    slug: "photo-backfill",
    title: "Photo Backfill Onboarding",
    label: "DAY-ONE RESOLUTION",
    metaTitle: "Photo Backfill Onboarding — Establish 1 Year of Context (Kept)",
    metaDescription:
      "How Kept solves empty journal fatigue. Pick 5 photos to establish a year of context in 20 minutes from day one.",
    headline: "Establish a year of journal context on day one",
    lead: "Starting an empty journal often leads to abandonment by day ninety. Kept lets you select five photos from your library to establish a year of dated entries and visual marks in twenty minutes.",
    description:
      "The empty timeline is the primary cause of journaling fatigue. Kept bypasses the blank box by anchoring your journal in memories you already recorded. Each selected photo receives a date, an entry card, and its own abstract visual mark.",
    architectureDetails: [
      {
        title: "Out-of-Process Photo Picker",
        description:
          "Kept uses the native iOS photo picker which runs out of process. The app only accesses the specific photos you explicitly select.",
      },
      {
        title: "Automatic Date Extraction",
        description:
          "Metadata from your selected photos places each entry into its correct historical position across your timeline and year grid.",
      },
      {
        title: "Immediate Mark Generation",
        description:
          "Each backfilled entry immediately generates a unique mathematical mark, populating your multi-year grid on day one.",
      },
    ],
    specifications: [
      { label: "Setup Time", value: "Under 20 minutes" },
      { label: "Photo Selection", value: "5 photos recommended" },
      { label: "Photo Privacy", value: "Out-of-process iOS picker" },
      { label: "Storage", value: "Sandboxed local files" },
    ],
    faq: [
      {
        q: "Do I have to use photos to start?",
        a: "No. Photo backfill is optional. You can also start with a clean text entry immediately.",
      },
    ],
  },
  {
    slug: "visual-marks",
    title: "Visual Marks & Year Grid",
    label: "ABSTRACT VISUAL INDEX",
    metaTitle: "Visual Marks & Multi-Year Grid — Private Indexing in Kept",
    metaDescription:
      "Discover Kept's abstract visual marks. Generated mathematical curves index your journal entries without exposing private text.",
    headline: "Visual index marks that protect your privacy",
    lead: "Every entry in Kept receives a unique abstract mark — a closed mathematical curve generated from that entry's identity. Browse a year of entries on your screen without exposing your words to nearby observers.",
    description:
      "Traditional journal lists display snippet text on screen, making them vulnerable to shoulder surfing in public spaces. Kept's year grid displays a sequence of generated marks. You see your consistency and rhythm; passersby see abstract geometric curves.",
    architectureDetails: [
      {
        title: "Mathematical Curve Generation",
        description:
          "Marks are computed algorithmically as closed Bezier curves derived deterministically from the entry's timestamp and identity.",
      },
      {
        title: "Multi-Year Heatmap Grid",
        description:
          "View a full 365-day grid of entries on a single screen with named months and today ringed. Every mark is tappable to open that day's entry.",
      },
      {
        title: "Weekly Timeline Strip",
        description:
          "The Today view features a seven-day horizontal strip of marks, showing your recent rhythm at a glance.",
      },
      {
        title: "Stroke-by-Stroke Drawing Animation",
        description:
          "When saving an entry in the editor, the glyph draws stroke-by-stroke with gentle haptic feedback as the curve closes.",
      },
    ],
    specifications: [
      { label: "Visual Format", value: "Vector SVG Bezier curves" },
      { label: "Grid Capacity", value: "365+ days per view" },
      { label: "Privacy Protection", value: "No text snippets in overview" },
      { label: "Rendering Performance", value: "Smooth 60fps GPU rasterization" },
    ],
    faq: [
      {
        q: "What does a mark represent?",
        a: "Each mark is a unique visual fingerprint for that specific entry, providing a recognizable anchor without exposing private words.",
      },
    ],
  },
  {
    slug: "encrypted-backups",
    title: "Passphrase Encrypted Backups",
    label: "CLIENT-SIDE DATA OWNERSHIP",
    metaTitle: "Passphrase Encrypted Backups — Scrypt & XChaCha20 Security (Kept)",
    metaDescription:
      "Export standalone encrypted backup files locked with your own passphrase using scrypt and XChaCha20-Poly1305 encryption.",
    headline: "Standalone encrypted backups locked with your passphrase",
    lead: "Export a complete encrypted archive of your journal entries and photos at any time, secured with scrypt key derivation and XChaCha20-Poly1305 authenticated encryption.",
    description:
      "True data ownership requires being able to move and archive your writing without relying on proprietary cloud lock-in. Kept produces standalone backup files that you can store on an external drive, USB key, or cloud storage of your choice.",
    architectureDetails: [
      {
        title: "Scrypt Key Derivation",
        description:
          "Your chosen passphrase is key-stretched using the memory-hard scrypt algorithm to resist brute-force hardware cracking.",
      },
      {
        title: "XChaCha20-Poly1305 Cipher",
        description:
          "Entries, metadata, and attached photos are packaged and encrypted using authenticated XChaCha20-Poly1305 encryption.",
      },
      {
        title: "Safe Merge Restore",
        description:
          "Restoring from a backup merges entries into your existing database rather than overwriting, making it safe to restore multiple archives.",
      },
      {
        title: "Zero-Knowledge Passphrase",
        description:
          "Your backup passphrase is never transmitted or stored remotely. It cannot be recovered by Kept if lost.",
      },
    ],
    specifications: [
      { label: "Key Derivation", value: "Scrypt (Memory-hard)" },
      { label: "Encryption Cipher", value: "XChaCha20-Poly1305" },
      { label: "Included Media", value: "Database + Attached Photos" },
      { label: "Restore Mechanism", value: "Safe merge (Non-destructive)" },
      { label: "Portability", value: "Standard standalone file" },
    ],
    faq: [
      {
        q: "What happens if I forget my backup passphrase?",
        a: "Because Kept does not operate a central server, lost backup passphrases cannot be recovered by anyone.",
      },
      {
        q: "Can I export plain text without encryption?",
        a: "Yes. You can export your full journal as clean Markdown (.md) files at any time through the share sheet.",
      },
    ],
  },
  {
    slug: "the-pledge-and-commitment",
    title: "The Pledge & Self-Accountability",
    label: "CALM HABIT FORMATION",
    metaTitle: "The Pledge & Self-Accountability — No Streaks or Guilt (Kept)",
    metaDescription:
      "Explore Kept's pledge model: self-accountability measured without streak counters, point systems, badges, or guilt.",
    headline: "Self-accountability without guilt, badges, or streaks",
    lead: "Kept replaces gamified streak counters with a simple measured pledge. You set your rhythm during setup, and the app states your consistency back without grading or judgment.",
    description:
      "Most habit apps use streak counters that make missing a single day feel like failure. Kept treats you as an adult: you make a pledge (*'most days'*, *'weekly'*, or *'when needed'*), and the You screen reflects your consistency (*'You said most days. 11 of the last 14.'*).",
    architectureDetails: [
      {
        title: "The Pledge Rhythm",
        description:
          "During onboarding, you define your intended writing rhythm. This pledge becomes the schedule for your reminders and reflections.",
      },
      {
        title: "States Facts, Never Grades",
        description:
          "The app displays your actual writing frequency against your pledge without judgment words ('behind', 'failing'), color alarms, or reward badges.",
      },
      {
        title: "Quiet Local Reminders",
        description:
          "Notifications arrive at the hour you chose without alert sounds or red app badges, phrased as a calm question rather than a nag.",
      },
      {
        title: "3-Day Renewal Warnings",
        description:
          "Subscriptions deliver a local reminder notification three days before any renewal, clearly stating the date and amount.",
      },
    ],
    specifications: [
      { label: "Accountability Model", value: "Pledge reflection (No streak scores)" },
      { label: "Gamification", value: "Zero (No badges, points, or leaderboards)" },
      { label: "Reminders", value: "Scheduled locally on device" },
      { label: "Renewal Notices", value: "Scheduled 3 days prior to renewal" },
    ],
    faq: [
      {
        q: "What happens if I miss several days of writing?",
        a: "Nothing resets and no penalty occurs. Kept simply summarizes the entries you did write when your summary date arrives.",
      },
      {
        q: "Can I change my pledge rhythm later?",
        a: "Yes. You can adjust your reminder settings and summary schedule at any time on the You screen.",
      },
    ],
  },
  {
    slug: "local-fts5-search",
    title: "Local FTS5 Full-Text Search",
    label: "OFFLINE SEARCH ENGINE",
    metaTitle: "Local FTS5 Full-Text Search — Sub-Millisecond SQLite Search (Kept)",
    metaDescription:
      "Explore Kept's offline search engine: SQLite FTS5 external content tables, unicode tokenizer, and instant keyword indexing without cloud dependencies.",
    headline: "Sub-millisecond keyword search across years of entries",
    lead: "Find any thought, date, or specific phrase from years ago in milliseconds. Kept runs an embedded SQLite FTS5 search index directly inside your encrypted database.",
    description:
      "Most digital journals rely on remote cloud servers to index and search user text. Kept builds and maintains an external-content Full-Text Search (FTS5) index inside your local SQLCipher database, allowing instant offline search with zero server communication.",
    architectureDetails: [
      {
        title: "SQLite FTS5 External Content Tables",
        description:
          "Search tokens are managed in an optimized FTS5 shadow table synchronized via automatic SQL triggers whenever entries are created, edited, or deleted.",
      },
      {
        title: "Sub-Millisecond Query Performance",
        description:
          "Queries execute in under two milliseconds across thousands of entries, providing instant results as you type in the search bar.",
      },
      {
        title: "Unicode Tokenizer with Special Character Escaping",
        description:
          "Search handles punctuation, special characters, and multi-lingual unicode text robustly without syntax crashes.",
      },
      {
        title: "100% Offline Indexing",
        description:
          "Index updates happen synchronously on device during SQLite transactions, ensuring search remains functional without internet connectivity.",
      },
    ],
    specifications: [
      { label: "Search Engine", value: "SQLite FTS5 Extension" },
      { label: "Indexing Scheme", value: "External content table with SQL triggers" },
      { label: "Query Latency", value: "<2ms across full archive" },
      { label: "Network Dependency", value: "Zero (100% local-first)" },
    ],
    faq: [
      {
        q: "Are search queries sent to a remote server?",
        a: "No. Search runs entirely within the encrypted SQLite database on your device.",
      },
      {
        q: "Does search include words in attached photos?",
        a: "Search indexes all text entries, dates, and metadata. OCR for photos is not performed.",
      },
    ],
  },
  {
    slug: "nocturne-design-system",
    title: "Nocturne Design & Ambient Field",
    label: "AESTHETICS & MOTION",
    metaTitle: "Nocturne Design System — Ambient SkSL Shader & UI Motion (Kept)",
    metaDescription:
      "Explore the Nocturne design system: UI-thread SkSL shaders, fractional Brownian motion, contrast-clamped dark palettes, and fluid haptics.",
    headline: "An ambient dark interface engineered for calm reflection",
    lead: "Kept features a bespoke aesthetic system called Nocturne: ambient fractional Brownian motion shaders, contrast-clamped typography, and tactile vector glyphs.",
    description:
      "A journal interface should soothe the senses rather than demand attention with high-contrast alerts or stark white backgrounds. Nocturne combines mathematical domain warping with subtle film grain to create a living, breathing backdrop that respects your focus.",
    architectureDetails: [
      {
        title: "UI-Thread SkSL Shader Field",
        description:
          "The background field is rendered in SkSL using fractional Brownian motion (fBm) with domain warping and procedural grain running on the GPU.",
      },
      {
        title: "Focus-Aware Lifecycle Management",
        description:
          "The shader automatically pauses when tabs are unfocused and freezes completely during active writing to conserve battery and eliminate visual motion distractions.",
      },
      {
        title: "Contrast-Clamped Nocturne Tokens",
        description:
          "Colors are clamped per ground to guarantee a minimum 4.5:1 contrast ratio across all dynamic hues, ensuring effortless legibility.",
      },
      {
        title: "System-Respecting Accessibility",
        description:
          "Respects iOS Reduce Motion (freezing field motion and cutting transitions) and Reduce Transparency (rendering solid plane layers).",
      },
    ],
    specifications: [
      { label: "Shader Engine", value: "Skia Shading Language (SkSL)" },
      { label: "Noise Algorithm", value: "Fractional Brownian Motion (fBm)" },
      { label: "Target Framerate", value: "Smooth 60fps on UI thread" },
      { label: "Contrast Standard", value: ">4.5:1 WCAG AA compliant" },
    ],
    faq: [
      {
        q: "Does the ambient field drain battery?",
        a: "No. The shader pauses when unfocused, freezes during typing, and respects iOS Low Power Mode.",
      },
      {
        q: "Is there a light mode available?",
        a: "Yes. The Nocturne tokens include a first-class light theme with independently measured and clamped contrast ratios.",
      },
    ],
  },
];

export function getFeatureBySlug(slug: string): FeatureItem | undefined {
  return FEATURES.find((f) => f.slug === slug);
}

