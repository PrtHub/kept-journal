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
    lead:
      "Kept was engineered from the ground up without an account database or cloud sync server. All writing is encrypted with SQLCipher on your device, with keys held in the iOS Keychain.",
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
        title: "Encrypted Passphrase Backups",
        description:
          "You can export a standalone encrypted backup file locked with a personal passphrase. Kept never sees this passphrase, ensuring complete data ownership.",
      },
    ],
    specifications: [
      { label: "Database Engine", value: "SQLCipher (SQLite)" },
      { label: "Encryption Standard", value: "AES-256" },
      { label: "Key Storage", value: "iOS Keychain (AFTER_FIRST_UNLOCK)" },
      { label: "Biometric Protection", value: "Face ID / Touch ID" },
      { label: "Cloud Sync Database", value: "None (Zero accounts)" },
      { label: "Export Formats", value: "Plain Markdown (.md) & Encrypted Backup" },
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
    lead:
      "Kept transforms weeks of scattered entries into a single structured page. Every number is counted on device, quotes are extracted verbatim from your sentences, and three questions guide your reflection.",
    description:
      "Instead of forcing you to re-read dozens of entries before a therapy appointment or weekly review, Kept compiles a one-page summary on the cadence you choose. It provides counted evidence of your habits and highlights recurring themes.",
    architectureDetails: [
      {
        title: "Deterministic Fact Computation",
        description:
          "Your iPhone calculates concrete metrics locally: writing frequency, active days, word counts, and candidate sentences before any summary request.",
      },
      {
        title: "Ephemeral Model Pipeline",
        description:
          "When you tap to generate a summary, only the entries from that period are transmitted via OpenRouter to write connecting prose. Text is not retained or used for training.",
      },
      {
        title: "Verbatim Quotation Extraction",
        description:
          "Quoted sentences in the summary are extracted verbatim from your writing, grounding every observation in your real words.",
      },
      {
        title: "Three Reflection Questions",
        description:
          "Every summary concludes with three specific questions framed around what you wrote, providing an anchor for your next session.",
      },
    ],
    specifications: [
      { label: "Deliverable Format", value: "One-page structured sheet" },
      { label: "Figures Computed", value: "On-device deterministically" },
      { label: "Quotes Included", value: "Verbatim from user entries" },
      { label: "Inference Provider", value: "OpenRouter (Ephemeral)" },
      { label: "Data Retention", value: "Zero retention for training" },
      { label: "Rate Limit", value: "4 summaries per device per day" },
    ],
    faq: [
      {
        q: "Are summaries generated automatically in the background?",
        a: "No. Summaries are generated only when you explicitly tap to request one.",
      },
      {
        q: "Can I turn off summaries completely?",
        a: "Yes. If you choose not to generate summaries, nothing leaves your device at all.",
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
    lead:
      "Starting an empty journal often leads to abandonment by day ninety. Kept lets you select five photos from your library to establish a year of dated entries and visual marks in twenty minutes.",
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
    lead:
      "Every entry in Kept receives a unique abstract mark — a closed mathematical curve generated from that entry's identity. Browse a year of entries on your screen without exposing your words to nearby observers.",
    description:
      "Traditional journal lists display snippet text on screen, making them vulnerable to shoulder surfing in public spaces. Kept's year grid displays a sequence of generated marks. You see your consistency and rhythm; passersby see abstract geometric curves.",
    architectureDetails: [
      {
        title: "Mathematical Curve Generation",
        description:
          "Marks are computed algorithmically as closed Bezier curves derived deterministically from the entry's timestamp and identity.",
      },
      {
        title: "Multi-Year Grid View",
        description:
          "View a full 365-day grid of entries on a single screen. Marks light up to indicate days written without displaying text snippets.",
      },
      {
        title: "Weekly Timeline Strip",
        description:
          "The Today view features a seven-day horizontal strip of marks, showing your recent rhythm at a glance.",
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
];

export function getFeatureBySlug(slug: string): FeatureItem | undefined {
  return FEATURES.find((f) => f.slug === slug);
}
