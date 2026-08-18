import { PromptCollectionItem } from "./types";

export const PROMPTS: PromptCollectionItem[] = [
  {
    slug: "therapy-session-prep",
    title: "Therapy Session Preparation Prompts",
    subtitle: "Grounding questions for therapy clients",
    category: "Therapy",
    metaTitle: "Journal Prompts for Therapy Preparation & Reflection (Kept)",
    metaDescription:
      "A curated collection of therapy journal prompts to prepare for sessions and examine recurring themes between appointments.",
    headline: "Journal prompts to ground your next therapy session",
    lead: "Arrive at your appointment with specific evidence rather than recency bias. These prompts help you capture what actually happened across the past fortnight.",
    description:
      "When your therapist asks what has been happening, it is easy to default to whatever happened yesterday. Journaling specific observations throughout the week gives you concrete, dated evidence to review before walking in.",
    prompts: [
      {
        question: "What was the single most demanding moment this week, and how did your body react?",
        context: "Identifies somatic responses and triggers before cognitive justifications obscure them.",
      },
      {
        question: "Which thought repeated itself more than three times without producing an action?",
        context: "Surfaces loops and rumination patterns to bring to your therapist's attention.",
      },
      {
        question: "What is one thing you hesitated to tell someone, and what was the fear behind it?",
        context: "Examines boundary setting, avoidance, and interpersonal friction.",
      },
      {
        question: "When did you feel most grounded or at ease, and what conditions allowed that?",
        context: "Records protective factors and positive baselines rather than focusing solely on distress.",
      },
      {
        question: "What topic did you actively avoid thinking about until tonight?",
        context: "Pinpoints emotional resistance to explore safely in your next session.",
      },
    ],
    howToUseInKept:
      "Write your answers in Kept freely without formatting. When your summary day arrives, the app extracts your exact quoted sentences and counted writing metrics into a single page you can read before your appointment.",
    faq: [
      {
        q: "Should I read my entire journal to my therapist?",
        a: "No. Bringing a one-page summary with key quotes and counted active days is far more effective than reading raw entries aloud.",
      },
      {
        q: "Can I customize the prompts in Kept?",
        a: "Kept provides a daily question from your recurring terms and lets you tap 'Another' to reroll whenever you want a different question.",
      },
    ],
  },
  {
    slug: "anxiety-and-overthinking",
    title: "Anxiety & Overthinking Prompts",
    subtitle: "Distinguish between immediate facts and mental projections",
    category: "Mental Clarity",
    metaTitle: "Journal Prompts for Anxiety & Overthinking — Evidence-Based (Kept)",
    metaDescription:
      "Evidence-based journal prompts to examine catastrophic thinking, separate facts from assumptions, and unload racing thoughts privately.",
    headline: "Examine catastrophic loops with concrete evidence",
    lead: "When anxiety turns minor possibilities into certain catastrophes, writing forces thoughts onto a tangible plane where evidence can be evaluated.",
    description:
      "Intrusive thoughts gain momentum when kept inside a circular internal monologue. Writing them down creates distance between the observer and the thought.",
    prompts: [
      {
        question: "What is the specific worst-case scenario you are anticipating, in two clear sentences?",
        context: "Forces vague dread into concrete, testable claims.",
      },
      {
        question: "What direct evidence do you currently possess that supports this outcome?",
        context: "Separates verifiable facts from emotional projections.",
      },
      {
        question: "What is an alternative explanation that requires fewer unproven assumptions?",
        context: "Applies cognitive reframing without forced positivity.",
      },
      {
        question: "If this situation remains unresolved for 48 hours, what is the actual tangible consequence?",
        context: "Calibrates urgency against real-world timelines.",
      },
      {
        question: "What is one immediate physical action within your control in the next fifteen minutes?",
        context: "Shifts energy from rumination to bounded agency.",
      },
    ],
    howToUseInKept:
      "Open the editor and write without self-editing. Kept's Insights view tracks which terms recur across anxious entries, helping you spot loops over months of writing.",
    faq: [
      {
        q: "Does Kept give anxiety advice?",
        a: "No. Kept provides a secure, private writing space to record and organize what you wrote.",
      },
    ],
  },
  {
    slug: "cbt-thought-examination",
    title: "CBT Thought Record Prompts",
    subtitle: "Inspect cognitive distortions and source evidence",
    category: "CBT",
    metaTitle: "CBT Journal Prompts — Thought Examination & Cognitive Records",
    metaDescription:
      "Cognitive behavioral journal prompts to inspect automatic thoughts, test assumptions, and examine dated source evidence.",
    headline: "Test automatic thoughts against dated reality",
    lead: "Cognitive Behavioral Therapy is grounded in testing automatic thoughts against real evidence. Use these structured prompts to record situations objectively.",
    description:
      "When a distressing situation occurs, automatic cognitive filters often distort our interpretation. These prompts follow the traditional CBT thought record framework.",
    prompts: [
      {
        question: "Situation: What happened, where were you, and who was involved (strictly observable facts)?",
        context: "Establishes an objective baseline free from emotional interpretation.",
      },
      {
        question: "Automatic Thought: What was the immediate narrative that ran through your mind?",
        context: "Captures the unvarnished belief before cognitive filtering.",
      },
      {
        question: "Emotion & Intensity: What did you feel, and how intense was it on a 1-10 scale?",
        context: "Measures the emotional charge associated with the thought.",
      },
      {
        question: "Evidence For: What verifiable facts support this thought?",
        context: "Tests the factual basis of the belief.",
      },
      {
        question: "Evidence Against: What verifiable facts contradict this thought?",
        context: "Uncovers overlooked counter-evidence from recent experience.",
      },
    ],
    howToUseInKept:
      "Log your thought records as standard entries. The Insights tab notices which words keep recurring across challenging entries and opens directly to the source records.",
    faq: [
      {
        q: "Can I record optional mood ratings in Kept?",
        a: "Yes. Kept asks for an optional mood rating after you finish writing, never before, and stores it strictly on your device.",
      },
    ],
  },
  {
    slug: "weekly-review-questions",
    title: "Weekly Review Reflection Questions",
    subtitle: "Sunday prompts to consolidate seven days of living",
    category: "Weekly Review",
    metaTitle: "Weekly Review Journal Prompts — Sunday Reflection (Kept)",
    metaDescription:
      "Curated weekly review questions to consolidate seven days of notes, assess energy expenditure, and set priorities for the week ahead.",
    headline: "Turn seven days of notes into a clear Sunday review",
    lead: "A weekly review prevents weeks from blurring together into an undifferentiated blur. Use these questions to evaluate where your energy went.",
    description:
      "Without regular reflection, unsustainable patterns persist unnoticed for quarters at a time. Taking ten minutes every Sunday anchors your priorities in real facts.",
    prompts: [
      {
        question: "What consumed the majority of your cognitive energy this week, and was it planned?",
        context: "Audits the gap between stated intentions and actual energy expenditure.",
      },
      {
        question: "What was the most significant progress you made on a priority that truly matters to you?",
        context: "Acknowledges concrete momentum outside daily reactive fires.",
      },
      {
        question: "Which obligation felt disproportionately draining relative to its actual importance?",
        context: "Identifies candidates for delegation, renegotiation, or elimination.",
      },
      {
        question: "What recurring theme appeared in your writing more than once this week?",
        context: "Connects daily notes to broader macro patterns.",
      },
      {
        question: "What single boundary must you defend vigorously starting Monday morning?",
        context: "Sets a proactive operational stance for the coming week.",
      },
    ],
    howToUseInKept:
      "Configure your summary cadence to weekly on Sunday. Kept will generate a one-page summary of your counted days, words, and verbatim quotes ready when you wake up.",
    faq: [
      {
        q: "Can I change my summary day to another day of the week?",
        a: "Yes. You can configure your summary cadence and target day in the app settings at any time.",
      },
    ],
  },
  {
    slug: "burnout-and-work-fatigue",
    title: "Burnout & Work Reflection Prompts",
    subtitle: "Track workload sustainability and emotional exhaustion",
    category: "Workplace",
    metaTitle: "Burnout Journal Prompts — Track Work Exhaustion & Capacity",
    metaDescription:
      "Practical journal prompts to monitor burnout symptoms, track workload sustainability, and document work reality privately.",
    headline: "Document workload reality before exhaustion decides for you",
    lead: "Burnout sneaks up when unsustainable weeks become the default normal. These prompts help you document workload reality with counted facts.",
    description:
      "When exhaustion sets in, articulately communicating workload challenges becomes difficult. Keeping dated records of demands and feelings provides clarity when deciding on necessary changes.",
    prompts: [
      {
        question: "How many hours this week were spent on reactive emergencies versus planned work?",
        context: "Measures operational stability and systemic fire-fighting.",
      },
      {
        question: "What physical signs of fatigue or tension did you notice during your workday?",
        context: "Monitors physical markers before severe burnout manifests.",
      },
      {
        question: "When was the last time you completely disconnected from work communications for 24 hours?",
        context: "Tracks true recovery intervals.",
      },
      {
        question: "What expectation or deadline felt unreasonable, and did you express that boundary?",
        context: "Evaluates communication around unrealistic workloads.",
      },
      {
        question: "What is one concrete workload adjustment that would immediately restore breathing room?",
        context: "Focuses on practical, actionable remedies rather than passive despair.",
      },
    ],
    howToUseInKept:
      "Record quick two-sentence end-of-day notes on your phone. Because Kept is 100% offline and encrypted with SQLCipher, your work notes remain strictly private and isolated from corporate IT networks.",
    faq: [
      {
        q: "Is it safe to write about work difficulties in Kept?",
        a: "Yes. Kept has no cloud servers, requires no email, and encrypts everything locally on your hardware.",
      },
    ],
  },
  {
    slug: "evening-reflection",
    title: "Quiet Evening Reflection Prompts",
    subtitle: "Unwind the day without pressure or checklists",
    category: "Evening",
    metaTitle: "Evening Journal Prompts — Calm Nightly Reflection (Kept)",
    metaDescription:
      "Quiet evening journal prompts to close the day peacefully. No streak pressure, no daily scoreboards, and no forced checklists.",
    headline: "Close the day with quiet, unpressured reflection",
    lead: "Evening journaling should not feel like an exam. These calm questions help you unpack the day and leave thoughts on the page before sleep.",
    description:
      "At night, unresolved tasks and unspoken conversations can keep the mind racing. Writing down what happened closes the loop and prepares you for rest.",
    prompts: [
      {
        question: "What is one conversation from today that is still playing in your head?",
        context: "Releases conversational replay loops before trying to sleep.",
      },
      {
        question: "What was the most genuine moment of connection or satisfaction you experienced today?",
        context: "Grounds the evening in authentic gratitude without forced cheerfulness.",
      },
      {
        question: "What task is unfinished today that you can consciously give yourself permission to leave until tomorrow?",
        context: "Establishes a firm boundary between today's work and tonight's rest.",
      },
      {
        question: "How did you show up for yourself when things did not go according to plan?",
        context: "Nurtures self-respect and emotional resilience.",
      },
    ],
    howToUseInKept:
      "Open Kept to today's date in full-screen dark mode. The ambient field softly calms the interface while monospace word counts fade on idle so you can write without distraction.",
    faq: [
      {
        q: "What if I only want to write one sentence?",
        a: "Kept has no minimum length requirements. A single honest sentence is an entry in your timeline.",
      },
    ],
  },
];

export function getPromptCollectionBySlug(slug: string): PromptCollectionItem | undefined {
  return PROMPTS.find((p) => p.slug === slug);
}
