import { UseCaseItem } from "./types";

export const USE_CASES: UseCaseItem[] = [
  {
    slug: "therapy-clients",
    title: "Therapy Clients",
    subtitle: "The journal your therapist asked you to keep",
    metaTitle: "Journal for Therapy Clients — Session Preparation & Summaries",
    metaDescription:
      "A private iPhone journal for therapy clients. Record entries between sessions and get a one-page summary on the day of your appointment.",
    headline: "Arrive at your therapy session with something honest to say",
    lead:
      "When your therapist asks what happened over the last two weeks, you no longer have to rely on vague memory. Kept records your entries between appointments and delivers a one-page summary with counted facts and your own quoted sentences.",
    theProblem:
      "Most therapy clients intend to journal between sessions, but blank page fatigue sets in by day three. When session day arrives, recency bias takes over: you talk about whatever happened yesterday rather than the patterns that occurred across the full fortnight.",
    howKeptWorks:
      "You write entries whenever something happens during the week. On the morning of your session, Kept delivers a one-page summary listing your counted writing days, verbatim sentences you wrote, and three reflection questions to ground your conversation.",
    steps: [
      {
        step: "1",
        title: "Choose your session cadence",
        description:
          "Select how often you meet your therapist (weekly, bi-weekly, or monthly) and which day your summary should be ready.",
      },
      {
        step: "2",
        title: "Write freely between appointments",
        description:
          "Record short or long entries. Your words stay encrypted on your device with no accounts or sync servers.",
      },
      {
        step: "3",
        title: "Read your one-page summary",
        description:
          "Review counted figures, verbatim quotes, and three reflection questions before walking into your session.",
      },
    ],
    keyBenefits: [
      {
        title: "Eliminate Recency Bias",
        detail:
          "Reviewing exact quotes from ten days ago ensures you discuss what actually happened rather than yesterday's mood.",
      },
      {
        title: "Absolute Privacy",
        detail:
          "Therapy notes contain your most personal thoughts. Kept stores everything in an encrypted SQLite database on your device.",
      },
      {
        title: "Zero Pressure",
        detail:
          "No streak badges or daily scoreboards. If you write twice in a fortnight, Kept summarizes those two entries accurately.",
      },
    ],
    faq: [
      {
        q: "Does Kept replace my therapist?",
        a: "No. Kept is a personal writing and organisation tool. It records and summarises what you wrote so you can bring clear notes to your human therapist.",
      },
      {
        q: "Can I show the summary to my therapist?",
        a: "Yes. The summary is formatted as a single clean page designed to be read in under two minutes or printed out.",
      },
    ],
  },
  {
    slug: "cbt-and-session-prep",
    title: "CBT & Thought Records",
    subtitle: "Notice recurring words and cognitive patterns",
    metaTitle: "CBT Journaling App — Thought Records & Pattern Observation",
    metaDescription:
      "Record thoughts between cognitive behavioral therapy sessions. Notice recurring words and review verbatim evidence in Kept.",
    headline: "Record thoughts as they occur and review the evidence",
    lead:
      "Cognitive Behavioral Therapy relies on examining thoughts against real evidence. Kept lets you record moments quickly and inspect which words and themes keep coming back over time.",
    theProblem:
      "Traditional CBT thought worksheets on paper are difficult to carry and easily forgotten. Generic digital notes apps lack structure, making it hard to see patterns over weeks and months.",
    howKeptWorks:
      "Kept stores your entries in a structured local timeline. The Memory view notices which words keep recurring, which topics went quiet, and links every observation directly to the exact dated entries behind it.",
    steps: [
      {
        step: "1",
        title: "Log the situation and thought",
        description:
          "Open Kept to today's date and record what happened in plain language with optional mood ratings.",
      },
      {
        step: "2",
        title: "Inspect recurring observations",
        description:
          "Open the Insights screen to see which words appear frequently and tap any observation to review the source entries.",
      },
      {
        step: "3",
        title: "Generate session summaries",
        description:
          "Produce a one-page summary that compiles counted facts and extracts exact sentences for your review.",
      },
    ],
    keyBenefits: [
      {
        title: "Opens to the Evidence",
        detail:
          "Every observation in Kept is backed by your own dated entries. Tap an observation to inspect the exact words you wrote.",
      },
      {
        title: "Encrypted on Device",
        detail:
          "Thought records remain locked inside SQLCipher AES-256 encryption with keys in the iOS Keychain.",
      },
    ],
    faq: [
      {
        q: "Does Kept analyze my thoughts automatically?",
        a: "Observations are computed locally on your device. Only when you explicitly tap to generate a summary are entries sent for writing.",
      },
    ],
  },
  {
    slug: "adhd-journaling",
    title: "ADHD Journaling",
    subtitle: "Overcome blank page paralysis from day one",
    metaTitle: "ADHD Journaling App — No Blank Page Paralysis (Kept)",
    metaDescription:
      "An ADHD-friendly journal for iPhone. Overcome the blank page with 5-photo library onboarding, visual marks, and zero streak guilt.",
    headline: "A journal designed to bypass day-one blank page fatigue",
    lead:
      "Starting an empty journal is daunting. Kept connects to your photo library so you can pick five photos you already took, establishing a year of context in twenty minutes.",
    theProblem:
      "Most journalling apps fail people with ADHD because of empty text boxes, daily streak pressure, and guilt-inducing notification spam. When a streak breaks, the habit is abandoned.",
    howKeptWorks:
      "Kept eliminates the blank start. Photos become dated entries with abstract visual marks. There are no streak counters, no daily scoreboards, and no guilt. You write when you need to.",
    steps: [
      {
        step: "1",
        title: "Seed with five photos",
        description:
          "Select five photos from your camera roll during setup. Kept turns them into dated entries with visual marks.",
      },
      {
        step: "2",
        title: "Browse the multi-year grid",
        description:
          "See your year visualized as abstract geometric marks without exposing private text to anyone looking over your shoulder.",
      },
      {
        step: "3",
        title: "Get your summary on demand",
        description:
          "Whenever you want an overview of what happened, tap to generate a one-page summary.",
      },
    ],
    keyBenefits: [
      {
        title: "Zero Streak Guilt",
        detail:
          "No streaks, no points, and no shame. Write three times in a month or daily; Kept handles both without judgment.",
      },
      {
        title: "Instant Visual Anchor",
        detail:
          "Photos provide instant emotional context, removing the friction of figuring out what to write about.",
      },
    ],
    faq: [
      {
        q: "Are my photos uploaded to a cloud server?",
        a: "No. Photos remain on your iPhone in the app's sandboxed container, protected by your device passcode.",
      },
    ],
  },
  {
    slug: "burnout-and-work-fatigue",
    title: "Burnout & Work Reflection",
    subtitle: "Track workload patterns without extra effort",
    metaTitle: "Burnout Tracking & Work Reflection Journal — Kept",
    metaDescription:
      "Track work exhaustion and workload trends privately. Generate weekly summaries of what happened between work cycles.",
    headline: "Understand workload reality with counted facts and quotes",
    lead:
      "When burnout sets in, days blur together. Kept lets you record short daily work reflections and compiles them into a one-page digest of what actually happened.",
    theProblem:
      "In high-stress jobs, people forget how long unsustainable workloads have persisted. When meeting with managers or mentors, it is difficult to articulate specific facts from weeks ago.",
    howKeptWorks:
      "Log brief notes throughout your workweek. Kept tallies your writing frequency, highlights key quotes, and compiles a clean one-page review for your weekend reflection.",
    steps: [
      {
        step: "1",
        title: "Log end-of-day notes",
        description:
          "Type two sentences at the end of your workday about what went well or what felt unsustainable.",
      },
      {
        step: "2",
        title: "Review your weekly digest",
        description:
          "Read a structured one-page summary on Sunday evening highlighting your exact quotes and counted days.",
      },
      {
        step: "3",
        title: "Take informed action",
        description:
          "Use factual review sheets to discuss workload adjustments or career decisions based on real evidence.",
      },
    ],
    keyBenefits: [
      {
        title: "Objective Record",
        detail:
          "Replace subjective feelings with dated entries and exact quoted sentences from your week.",
      },
      {
        title: "Offline & Secure",
        detail:
          "Work notes stay strictly on your personal iPhone, isolated from workplace networks and cloud logging.",
      },
    ],
    faq: [
      {
        q: "Can my employer see what I write in Kept?",
        a: "No. Kept has no cloud servers and does not connect to employer monitoring tools. Everything stays on your personal device.",
      },
    ],
  },
  {
    slug: "private-offline-journaling",
    title: "Private Offline Journaling",
    subtitle: "No cloud, no accounts, zero tracking",
    metaTitle: "Private Offline Journal for iPhone — No Cloud, Local Encryption",
    metaDescription:
      "The local-first private journal for iPhone. SQLCipher encryption, iOS Keychain security, and zero remote accounts.",
    headline: "A private journal that works 100% offline",
    lead:
      "Your most intimate writing should not live on someone else's server. Kept is built local-first: no accounts, no sign-ups, and complete functionality without an internet connection.",
    theProblem:
      "Most modern journal apps require an email address, sync entries to cloud servers, and track user behavior across devices. A single data breach exposes years of intimate thoughts.",
    howKeptWorks:
      "Kept stores all entries in an encrypted SQLite database on your iPhone. The 256-bit encryption key is stored in the iOS Keychain. Nothing leaves your phone unless you tap to request a summary.",
    steps: [
      {
        step: "1",
        title: "Install and write immediately",
        description:
          "Open Kept and begin writing. There is no onboarding account registration or email requirement.",
      },
      {
        step: "2",
        title: "Lock with Face ID",
        description:
          "Enable biometric protection to require Face ID whenever the app opens.",
      },
      {
        step: "3",
        title: "Export whenever you wish",
        description:
          "Export your full archive to Markdown files or an encrypted backup file at any time.",
      },
    ],
    keyBenefits: [
      {
        title: "Hardware-Backed Key",
        detail:
          "The encryption key lives in the secure iOS Keychain with AFTER_FIRST_UNLOCK protection.",
      },
      {
        title: "No Data Broker Sharing",
        detail:
          "Zero advertising SDKs, zero cross-app tracking, and no identity-linked data collection.",
      },
    ],
    faq: [
      {
        q: "Does Kept work on airplane mode?",
        a: "Yes. Writing, reading, searching, and exporting work completely offline with no network connection required.",
      },
    ],
  },
  {
    slug: "weekly-reviews",
    title: "Weekly Reviews",
    subtitle: "A Sunday reflection page ready when you wake up",
    metaTitle: "Weekly Review Journal — Factual Reflection Digest (Kept)",
    metaDescription:
      "Automate your weekly review routine. Kept compiles your daily entries into a one-page Sunday summary with counted figures and quotes.",
    headline: "Turn a week of notes into a one-page Sunday reflection",
    lead:
      "Conducting a weekly review usually means reading through messy pages of notes. Kept compiles your week into a single page of counted facts, extracted quotes, and three reflection questions.",
    theProblem:
      "Weekly review rituals frequently break down because organizing and summarizing scattered daily entries takes too much time and cognitive energy on weekends.",
    howKeptWorks:
      "Set your cadence to weekly on Sunday. When you wake up, Kept presents a one-page summary highlighting how many days you wrote, what words stood out, and exact quotes from your week.",
    steps: [
      {
        step: "1",
        title: "Set Sunday as your summary day",
        description:
          "Configure Kept to prepare your one-page summary every seven days.",
      },
      {
        step: "2",
        title: "Jot down daily observations",
        description:
          "Write whenever something occurs during the week without worrying about structure.",
      },
      {
        step: "3",
        title: "Read your Sunday digest",
        description:
          "Spend five minutes reviewing your week's counted figures, quotes, and reflection prompts.",
      },
    ],
    keyBenefits: [
      {
        title: "5-Minute Review",
        detail:
          "Read a single, coherent page instead of scrolling through dozens of disconnected notes.",
      },
      {
        title: "Verbatim Quotations",
        detail:
          "Review exact sentences you wrote on Tuesday or Thursday to remember your state of mind.",
      },
    ],
    faq: [
      {
        q: "Can I customize what is excluded from my summary?",
        a: "Yes. You can specify focus topics and exclusions in your summary settings.",
      },
    ],
  },
  {
    slug: "anxiety-and-overthinking",
    title: "Anxiety & Overthinking",
    subtitle: "Unload racing thoughts and inspect recurring words",
    metaTitle: "Journal for Anxiety & Overthinking — Evidence-Based (Kept)",
    metaDescription:
      "A private iPhone journal for anxiety and overthinking. Unload racing thoughts without algorithmic interruptions and inspect recurring themes.",
    headline: "Unload racing thoughts and examine the evidence",
    lead: "When anxiety turns minor possibilities into certain catastrophes, writing forces thoughts onto a tangible plane where evidence can be evaluated privately.",
    theProblem:
      "Overthinking loops gain momentum late at night. Digital apps that ping with notifications, require questionnaire steps, or offer conversational AI chatbot commentary often heighten cognitive stimulation instead of easing it.",
    howKeptWorks:
      "Kept opens directly into a quiet full-screen editor with soothing Nocturne dark styling. Monospace word counts fade on idle so you can write without judgment. The Insights tab tracks recurring words across entries so you can inspect thought loops objectively over time.",
    steps: [
      {
        step: "1",
        title: "Dump racing thoughts immediately",
        description:
          "Open Kept to today's date and write whatever is in your head without formatting or self-editing.",
      },
      {
        step: "2",
        title: "Inspect recurring terms",
        description:
          "Open Insights to see which words appear frequently and tap any observation to review the source entries.",
      },
      {
        step: "3",
        title: "Get your summary on demand",
        description:
          "Generate a one-page summary that compiles counted facts and extracts exact sentences for your review.",
      },
    ],
    keyBenefits: [
      {
        title: "Zero Machine Interruptions",
        detail:
          "Prompt-free capture with no chatbot commentary or push notifications interrupting your flow.",
      },
      {
        title: "Objective Historical Anchor",
        detail:
          "Evaluate anxious predictions against dated historical entries and verifiable evidence.",
      },
    ],
    faq: [
      {
        q: "Does Kept offer medical or psychological advice?",
        a: "No. Kept provides an encrypted writing space to record and organise what you wrote.",
      },
    ],
  },
  {
    slug: "grief-and-life-transitions",
    title: "Grief & Life Transitions",
    subtitle: "Quiet reflection that never grades consistency",
    metaTitle: "Journal for Grief & Life Transitions — Quiet & Private (Kept)",
    metaDescription:
      "A private journal for navigating grief and major life transitions. 5-photo onboarding, local encryption, and zero streak pressure.",
    headline: "A private space for navigating life transitions",
    lead: "During grief or major life changes, daily routine requirements feel overwhelming. Kept offers a quiet, unpressured space that holds memories without demanding daily streaks.",
    theProblem:
      "Most journaling apps assume a cheerful, linear habit and penalize missed days with broken streaks or 'you are falling behind' notifications, creating guilt during emotionally exhausting seasons.",
    howKeptWorks:
      "Kept has no streak counters, no daily scoreboards, and no guilt. You can seed a year of memories using five photos from your library, write when you feel able, and generate structured summaries only when you want to reflect.",
    steps: [
      {
        step: "1",
        title: "Anchor with photographs",
        description:
          "Select five meaningful photos from your camera roll to establish dated entries across your timeline.",
      },
      {
        step: "2",
        title: "Write whenever you are ready",
        description:
          "Record short memories or long reflections without any obligation to write on consecutive days.",
      },
      {
        step: "3",
        title: "Review through Echo",
        description:
          "Quietly revisit what you wrote a year ago today through the Echo card on the Today view.",
      },
    ],
    keyBenefits: [
      {
        title: "Zero Streak Guilt",
        detail:
          "Write once a month or several times a week without penalties, score resets, or patronizing copy.",
      },
      {
        title: "Absolute Confidentiality",
        detail:
          "Your memories and photographs remain encrypted in local storage on your iPhone.",
      },
    ],
    faq: [
      {
        q: "Can I keep photos attached to my entries permanently?",
        a: "Yes. Photos remain in your app's sandboxed container and are included in your passphrase-encrypted backups.",
      },
    ],
  },
  {
    slug: "executive-and-founder-reflection",
    title: "Executive & Founder Reflection",
    subtitle: "Turn weekly operational chaos into strategic clarity",
    metaTitle: "Executive & Founder Journal — Weekly Strategy & Reflection (Kept)",
    metaDescription:
      "A private journal for founders and executives. Record confidential work reflections and compile them into a weekly one-page strategic digest.",
    headline: "Turn scattered weekly notes into a one-page strategic review",
    lead: "Leading teams requires maintaining strategic perspective amid daily operational fires. Kept turns your end-of-day notes into a concise one-page Sunday reflection.",
    theProblem:
      "Executives record scattered thoughts across notes apps, Slack drafts, and paper notebooks, but rarely have time to consolidate them before weekly planning sessions.",
    howKeptWorks:
      "Jot down two sentences at the end of each workday. On Sunday, Kept prepares a one-page summary highlighting your counted active days, recurring discussion topics, and verbatim quotes.",
    steps: [
      {
        step: "1",
        title: "Log rapid end-of-day notes",
        description:
          "Type brief observations about key decisions, team dynamics, or operational bottlenecks.",
      },
      {
        step: "2",
        title: "Review your Sunday strategic digest",
        description:
          "Read a single page synthesizing your week's counted metrics and exact quoted sentences.",
      },
      {
        step: "3",
        title: "Set focused weekly priorities",
        description:
          "Start Monday morning aligned on the core priorities identified from your review.",
      },
    ],
    keyBenefits: [
      {
        title: "Corporate Network Isolation",
        detail:
          "Kept operates 100% offline with on-device SQLCipher encryption, isolated from employer IT networks and cloud logs.",
      },
      {
        title: "5-Minute Sunday Synthesis",
        detail:
          "Review a single clean page instead of sifting through messy disjointed notes.",
      },
    ],
    faq: [
      {
        q: "Can I export my weekly review as Markdown?",
        a: "Yes. You can export summaries and entries as plain Markdown via the iOS share sheet.",
      },
    ],
  },
  {
    slug: "relationship-and-couples-check-ins",
    title: "Relationship & Couples Check-Ins",
    subtitle: "Prepare honest reflections before relationship conversations",
    metaTitle: "Journal for Relationship Reflection & Couples Check-Ins (Kept)",
    metaDescription:
      "A private iPhone journal for relationship reflection. Ground monthly check-ins and couples therapy in dated observations and exact quotes.",
    headline: "Ground relationship conversations in honest, private reflection",
    lead: "Important relationship check-ins go better when grounded in thoughtful reflection rather than heat-of-the-moment reactions. Kept gives you a private space to clarify your thoughts.",
    theProblem:
      "When discussing recurring relationship challenges, partners often generalize ('you always', 'we never') because specific moments from two weeks ago are difficult to recall accurately.",
    howKeptWorks:
      "Record moments of gratitude, boundary questions, and emotional reactions as they happen. Before a check-in or couples counseling session, review your exact words to speak with specificity and care.",
    steps: [
      {
        step: "1",
        title: "Record private observations",
        description:
          "Write freely about relationship dynamics in a secure journal protected by Face ID.",
      },
      {
        step: "2",
        title: "Synthesize recurring themes",
        description:
          "Generate a periodic summary to see what topics have come up frequently over the past month.",
      },
      {
        step: "3",
        title: "Communicate with clarity",
        description:
          "Bring grounded, specific reflections to your partner conversation without defensive generalizations.",
      },
    ],
    keyBenefits: [
      {
        title: "Biometric Face ID Privacy",
        detail:
          "Face ID locking ensures your intimate personal reflections remain strictly private on your personal device.",
      },
      {
        title: "Replaces Generalizations with Facts",
        detail:
          "Dated entries help identify real patterns rather than exaggerated emotional reactions.",
      },
    ],
    faq: [
      {
        q: "Is Kept a shared journal for couples?",
        a: "No. Kept is strictly an individual, private journal designed for personal self-reflection before conversations.",
      },
    ],
  },
  {
    slug: "creative-free-writing",
    title: "Creative Free-Writing & Flow",
    subtitle: "Distraction-free capture with monospace metrics",
    metaTitle: "Creative Free-Writing Journal for iPhone — No Distractions (Kept)",
    metaDescription:
      "A distraction-free writing journal for creative writers and thinkers. Full-screen dark mode, monospace word count, and zero algorithmic suggestions.",
    headline: "A quiet digital page for uninterrupted creative flow",
    lead: "Modern writing apps clutter the screen with toolbars, AI suggestions, and menus. Kept strips away the chrome so you can focus entirely on the sentence in front of you.",
    theProblem:
      "Writing apps filled with formatting ribbons, floating buttons, and auto-complete suggestions interrupt the delicate state of creative flow and encourage premature editing.",
    howKeptWorks:
      "Kept provides an edge-to-edge full-screen editor in Nocturne dark mode. The ambient shader freezes during typing to conserve focus, monospace word counts fade on idle, and the entry glyph draws stroke-by-stroke upon completion.",
    steps: [
      {
        step: "1",
        title: "Tap to write instantly",
        description:
          "Open the app and begin typing immediately with zero folder navigation or template selection.",
      },
      {
        step: "2",
        title: "Write in pure full-screen mode",
        description:
          "Enjoy a clean visual environment where distractions, toolbars, and prompts are completely absent.",
      },
      {
        step: "3",
        title: "Export plain Markdown",
        description:
          "Export your prose into standard Markdown files for your creative manuscript or archive.",
      },
    ],
    keyBenefits: [
      {
        title: "Zero Visual Clutter",
        detail:
          "No toolbars, ribbons, or AI auto-complete suggestions while you are writing.",
      },
      {
        title: "Tactile Glyph Feedback",
        detail:
          "Each completed entry renders a unique vector glyph with haptic feedback as the curve closes.",
      },
    ],
    faq: [
      {
        q: "Can I write long-form entries in Kept?",
        a: "Yes. There are no word limits. You can write short two-line observations or multi-thousand-word essays.",
      },
    ],
  },
];

export function getUseCaseBySlug(slug: string): UseCaseItem | undefined {
  return USE_CASES.find((u) => u.slug === slug);
}

