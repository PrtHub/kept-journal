/**
 * Shared by the FAQ section and the FAQPage JSON-LD, so the structured data
 * can never drift from what the page actually says.
 */
export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "Do you read my journal?",
    a: "No, and there is no mechanism to. There is no account and no server holding your entries. When you ask for a summary, that period's writing is sent to be written up and then forgotten — nothing is stored and nothing trains a model.",
  },
  {
    q: "What happens if I stop paying?",
    a: "Everything you wrote stays on your phone and stays readable, searchable and exportable. You lose new summaries. You never lose your journal.",
  },
  {
    q: "What if I lose my phone?",
    a: "Your journal is in your encrypted iPhone backup, so it comes back with your phone. Kept also keeps one encrypted backup file you can put anywhere — locked with a passphrase we never see and cannot recover.",
  },
  {
    q: "Is there a free trial?",
    a: "No. You can write, read, search and export for free forever. The paid part is the page Kept writes you.",
  },
  {
    q: "Does it renew?",
    a: "The monthly and yearly plans renew until you stop them. We send you a notice three days before, naming the amount. Cancelling takes two taps in Settings. The no-end-date option never renews.",
  },
  {
    q: "Do I need a therapist?",
    a: "No. Kept never asks. It asks how often you want a summary and which day it should be ready.",
  },
  {
    q: "Is my mood tracked?",
    a: "Only if you want. Mood is asked after you write, never before, and always skippable. It stays on the device with everything else.",
  },
  {
    q: "Is there an Android version?",
    a: "Not yet. iPhone first, deliberately.",
  },
];
