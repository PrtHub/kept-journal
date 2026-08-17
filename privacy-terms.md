# Privacy & Terms — the source data

⚠️ **This is not a privacy policy, and it is not legal advice.** It is the factual substrate: exactly what data exists, where it goes, who touches it and for how long — read out of `src/` and `convex/` rather than from memory. A lawyer can turn facts into a compliant document; a lawyer cannot invent the facts. This page is the part only the codebase can answer.

Everything below is checked against the code. Where a fact has a caveat, the caveat is stated.

---

## 1 · The data map

The authoritative table. If a document says something not in here, the document is wrong.

| Data                                       | Where it lives                             | Leaves the device?                       | Who else can see it          |
| ------------------------------------------ | ------------------------------------------ | ---------------------------------------- | ---------------------------- |
| Entry text                                 | Encrypted SQLite on device                 | **Only when a summary is requested**     | OpenRouter → xAI, in transit |
| Entry dates, created/updated timestamps    | Same                                       | Only inside a summary request            | Same                         |
| Mood rating (1–5, optional)                | Same                                       | **Never**                                | Nobody                       |
| Entry source (`write`/`backfill`/`import`) | Same                                       | No                                       | Nobody                       |
| Photos attached to entries                 | **Unencrypted files** in the app container | No                                       | Nobody                       |
| Generated summaries                        | Encrypted SQLite on device                 | No                                       | Nobody                       |
| Onboarding answers                         | Device key-value store                     | No                                       | Nobody                       |
| Database encryption key                    | **iOS Keychain**, `AFTER_FIRST_UNLOCK`     | No                                       | Nobody                       |
| Anonymous install id                       | Device key-value store                     | Yes, to Convex only                      | Us (as a rate-limit counter) |
| Onboarding-flow events                     | Not stored locally                         | Yes, to Mixpanel — **during setup only** | Us, Mixpanel                 |
| Anything done after setup                  | Device only                                | **Never**                                | Nobody                       |
| Purchase / receipt data                    | Apple + RevenueCat                         | Yes                                      | Apple, RevenueCat, us        |
| Encrypted backup file                      | Wherever the user puts it                  | Only if they share it                    | Whoever they gave it to      |
| Markdown export                            | Wherever the user puts it                  | Only if they share it                    | Whoever they gave it to      |

**There is no account, no login, no password, no email address, and no user profile.** Nothing in the app asks who anyone is. This is the single most important fact in both documents, and it is why most of the usual privacy-policy furniture (access requests, account deletion, credential handling) genuinely does not apply.

### Local storage detail

- Database: **SQLCipher** (AES) via `expo-sqlite`. Tables: `entries`, `entries_fts` (search index), `summaries`, `embedding_queue`, `entry_vectors`.
- Key: 256-bit, generated on device, stored in the **iOS Keychain** with `AFTER_FIRST_UNLOCK`. Never transmitted, never in a backup file, never derivable from the app bundle.
- ⚠️ **Photos are not encrypted.** They are ordinary files in the app's container, protected by the device passcode — the same protection Photos gives the original, but weaker than the words beside them. Say this; do not imply otherwise.
- The database is included in the encrypted **iOS device backup** (iCloud or local). The Keychain entry rides along, which is why a restored device can still open the journal.

---

## 2 · The summary request — the only outbound journal data

This is the one flow that needs describing precisely, because it is the only time anything written leaves the phone.

**Trigger:** the user taps to generate a summary. Nothing is scheduled, nothing runs in the background, nothing happens on launch.

**Path:** device → our Convex function → OpenRouter → **xAI** (`x-ai/grok-4.6`) → back the same way.

**What the device sends to Convex:**

| Field          | Contents                                                             |
| -------------- | -------------------------------------------------------------------- |
| `deviceId`     | Anonymous per-install id (random UUID)                               |
| `period`       | e.g. `"4–17 August 2026"`                                            |
| `entryCount`   | A number                                                             |
| `facts[]`      | Sentences the device computed, e.g. `"wrote on 5 of 14 days"`        |
| `quotes[]`     | Candidate sentences taken verbatim from the user's own entries       |
| `entries[]`    | `{ date, body }` for each entry in the period — **the journal text** |
| `exclusions[]` | Subjects to leave out, e.g. `"health"`                               |
| `focus[]`      | What to emphasise, e.g. `"patterns"`                                 |

**What Convex stores:** one row — `deviceId`, `day` (`YYYY-MM-DD`), `count`. That is the rate limiter (4 per device per day). **No entry text, no summary text, no name, no email.** The function receives the journal, forwards it, returns the result, and keeps none of it.

**What OpenRouter and xAI receive:** the system prompt, the user prompt containing the entries, the model name, and two attribution headers (`HTTP-Referer: https://kept.app`, `X-Title: Kept`).

> ✅ **No user identifier is sent to the model provider.** The request carries no `user` field, no device id, no IP-linked account. OpenRouter and xAI receive journal text attached to nothing.

**Not sent, ever:** mood ratings, photos, onboarding answers, the install id, or anything outside the requested period.

### ⚠️ The one thing you must go and check

Whether this counts as "collection" at all — under Apple's rules and arguably under GDPR — turns on **retention by OpenRouter and xAI**, which is a setting on your OpenRouter account, not something in this codebase.

Apple's definition: _collection_ means transmitting data off device in a way that allows you or your partners to access it **for longer than necessary to service the request in real time.**

So:

- **If OpenRouter logging is off and the provider honours zero-retention**, the entries are processed transiently and you may be able to declare no collection of user content.
- **If logging is on** (the default on some plans), you are transmitting journal content to a third party that stores it, and both documents and the nutrition label must say so plainly.

Go to your OpenRouter account privacy settings, decide deliberately, and record the answer. This single setting changes what both documents have to claim. **Do not guess it.**

---

## 3 · Sub-processors

The complete list. Every one of these needs naming in the privacy policy.

| Who                            | What they get                                               | Why                                            | Retention                                          |
| ------------------------------ | ----------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------- |
| **Convex** (Convex, Inc., US)  | Journal text in transit; stores only the rate-limit counter | Holds the API key so it cannot ship in the app | Counter rows only — set a retention rule           |
| **OpenRouter** (US)            | Journal text for the requested period                       | Routes to the model                            | ⚠️ **Depends on your account setting — check §2**  |
| **xAI** (US) — `x-ai/grok-4.6` | The same text                                               | Writes the prose                               | ⚠️ Per xAI's API policy — verify                   |
| **Mixpanel** (US)              | Anonymous usage events, no identifiers                      | Product analytics                              | ⚠️ Set a data-retention window in project settings |
| **RevenueCat** (US)            | Anonymous app user id, purchase and receipt data            | Subscription state                             | Per their terms                                    |
| **Apple**                      | Purchases, receipts, device backup, notification delivery   | Platform                                       | Per Apple's policy                                 |

**Changing the model changes a sub-processor.** `MODEL` in `convex/summary.ts` names the provider. Swapping it means updating this list and the policy — not just a code change.

---

## 4 · What Mixpanel receives

> ✅ **Only the onboarding flow is measured. Once someone is in the app, nothing is sent, ever.**

That is the whole scope, and it is enforced by where the code lives: nothing outside `src/onboarding/` imports the analytics module. No screen views, no app opens, no entries, no reads, no searches, no summaries, no settings changes. The single question it answers is _where do people drop out of setup_ — which cannot be answered another way, and which stops being answerable the moment they finish.

**Identity:** a Mixpanel-generated anonymous per-install id. **`identify()` is never called**, so no user id exists to attach to anything. IP-based geolocation is switched off.

**Events — the complete list.** All 28 carry only enums, counts and booleans. There is no code path that can send free text.

| Group                   | What is sent                                                                                                                                              |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Progress                | Flow started; every step reached (its key from the source and its position); the step it was abandoned on; completion with elapsed seconds and steps seen |
| Answers                 | Reason for coming; how long they had been meaning to start; prior journalling experience; summary cadence; reminder hour                                  |
| Answers, **count only** | How many subjects are on their mind; how many focus areas; how many exclusions                                                                            |
| Backfill                | Picker opened; picker cancelled; how many photos picked; each photo added, by position; finished or skipped, with the total                               |
| Commitment              | Rhythm chosen; plans shown and whether prices were live; plan chosen; purchase started / completed / cancelled / failed / restored                        |
| Permissions             | Reminder and Face ID outcomes                                                                                                                             |
| Opt-out                 | One event recording that tracking was switched off                                                                                                        |

**Never sent:** entry text, prompts, search queries, mood values, which subjects are on someone's mind, which subjects they excluded, word counts, photo filenames or dates, summary text, screen names, or anything at all after onboarding ends.

> **Deleted rather than kept.** Word counts per entry, editor screen views, mood answered-or-skipped, reminder and lock toggles, backup and export actions, and a per-launch heartbeat were all built and then removed. The cost is accepted and worth stating in the policy if asked: there is **no retention data, no daily-active count, and no measurement of whether the paid feature is used.**

> ⚠️ **Analytics is currently on by default with an opt-out switch, and that is probably not sufficient for the EU.** Opt-out is not consent. Under GDPR and ePrivacy, non-essential analytics generally needs opt-**in**, and this app is marketed to therapy clients — the audience where a regulator would look hardest. Two options: make it opt-in (a one-line default change in `lib/preferences.ts`), or geo-gate the default. **Decide before shipping in the EU.** The switch and the disclosure already exist on the You screen; only the default is in question.

---

## 5 · Privacy policy — content by section

Write in plain language. The register that works here is the app's own: specific, unhedged, no "we may".

**1. Who we are.** Legal entity, address, contact email. _(You must supply — see §8.)_

**2. The short version.** Your journal is stored encrypted on your phone. There is no account and no server holding it. The only time anything you wrote leaves your phone is when you ask for a summary.

**3. What is stored on your device.** Entries, dates, optional mood, photos you attach, generated summaries, your settings. Encrypted with a key held in the iOS Keychain. Photos are stored as ordinary files protected by your device passcode. Included in your encrypted iPhone backup.

**4. What leaves your device, and when.** The summary flow from §2 — trigger, path, exact fields, what is not sent, the 4-per-day limit, and the retention answer you established. State that mood, photos and settings never leave.

**5. Setup analytics.** The §4 list. Name Mixpanel. **Lead with the scope — only the setup flow is measured, and nothing is recorded once someone is using the app.** Then: no account or identifier attached, location not collected, switchable off in Settings, and what switching it off does (stops sending, clears the local queue and the anonymous id).

**6. Purchases.** Apple processes payment; we never see card details. RevenueCat manages subscription state against an anonymous id. Renewal notices are generated on the device.

**7. Notifications.** Local only, scheduled on the device. There is no push server and no notification data leaves the phone.

**8. Sub-processors.** The §3 table, with links to each policy.

**9. Your rights.** Note honestly that with no account there is nothing to look up: export is in the app (Markdown and encrypted backup), deletion is deleting the app or the entry, and there is no profile to correct. For the data we do hold — the rate-limit counter and usage events — give the contact route and the retention windows.

**10. Children.** Not directed at children under 13. No age gate exists; if you want one, that is a product change.

**11. International transfers.** Every sub-processor is US-based. If you serve the EU/UK you need a transfer mechanism (SCCs / UK IDTA) and should say which.

**12. Legal bases** _(EU/UK)_. Summaries: performance of the contract. **Journal content is free text that may contain health information, so the Article 9 basis is explicit consent** — which the summary tap can constitute if the screen says so. Analytics: see the §4 warning. Purchases: contract.

**13. Changes.** How you notify. Date it.

---

## 6 · Terms — content by section

**1. What Kept is.** An iPhone app that stores journal entries on your device and, on request, generates a one-page summary of them.

**2. No account.** There is nothing to register, so there is nothing to suspend. Access is tied to the app on the device and to the Apple ID that bought it.

**3. Free and paid.** Writing, reading, searching and exporting are **free forever**. The paid feature is the generated summary. ⚠️ Do not describe the free part as a trial — there is no trial.

**4. Subscriptions.** Monthly ($9.99) and yearly ($39.99) auto-renew until cancelled through Apple. One-time ($99.99) never renews. Renewal is charged by Apple 24 hours before the period ends; cancel at least 24 hours before in Settings. **State that the app sends a notice three days before renewal** — you promise it in-app, so promise it here. Include Apple's required EULA language or link Apple's standard EULA.

**5. Refunds.** Handled by Apple; you cannot issue them. Link Apple's process.

**6. Your content is yours.** The user owns everything they write. **You claim no licence to it** beyond the transient processing needed to produce a summary they asked for. Say this explicitly — it is a differentiator and its absence would be noticed.

**7. What the app is not.** ⚠️ **The most important clause in the document.** Kept is not therapy, not medical advice, not a medical device, and not a crisis service. It records, organises and summarises what the user wrote. Nothing it produces is a diagnosis or a treatment recommendation. If someone is in crisis they should contact local emergency services. _(This clause protects the therapist channel, the App Store review outcome, and the regulatory position. It is not boilerplate.)_

**8. Generated summaries.** Produced by a third-party language model from the user's own entries. Every figure is computed on the device; quoted lines are the user's own sentences. It can still be wrong or unhelpful, and it is not reviewed by a human.

**9. Backups are the user's responsibility.** The encrypted backup passphrase is chosen by the user, is never transmitted, and **cannot be recovered by anyone including you**. A lost passphrase means a permanently unreadable file. Losing the device without a backup means losing the journal.

**10. Acceptable use, availability, liability, indemnity, governing law, changes.** Standard — your lawyer's territory. Note the summary depends on third-party services and is not guaranteed available.

---

## 7 · App Store privacy nutrition label

The exact answers, given the code as it stands.

**Data used to track you:** **None.** No IDFA, no ad SDK, no data brokers, no cross-app or cross-site tracking. Mixpanel is first-party analytics only.

**Data linked to you:** **None.** There is no account and `identify()` is never called, so nothing can be linked to an identity.

**Data not linked to you:**

| Category     | Type                    | Purpose           | Notes                                                                                 |
| ------------ | ----------------------- | ----------------- | ------------------------------------------------------------------------------------- |
| User Content | **Other User Content**  | App Functionality | Journal entries sent for a summary. ⚠️ Declare only if OpenRouter/xAI retain — see §2 |
| Usage Data   | **Product Interaction** | Analytics         | Onboarding-flow events only. No screen views — that SDK call was removed              |
| Purchases    | **Purchase History**    | App Functionality | Via RevenueCat, anonymous id                                                          |
| Identifiers  | **Device ID**           | App Functionality | The anonymous install id used for rate limiting                                       |

**Deliberately absent, with reasons:**

- **Health** — mood is the only health-adjacent field and it **never leaves the device**, so it is not collected. Journal free text _could_ contain health information, which is why the Article 9 consent basis matters in the policy; but the app performs no health inference. If your lawyer disagrees, the safe move is declaring Sensitive Info, not arguing.
- **Location** — geolocation is off in Mixpanel and nothing else requests it.
- **Contact Info** — none is ever asked for.
- **Photos** — the picker runs out of process and photos never leave the device.
- **Diagnostics / Crash Data** — no crash reporter is installed.

> ⚠️ **"No data collected" is no longer available to you.** It was true before summaries and Mixpanel. A label claiming it beside a bundled analytics SDK is caught by static scan, and — worse for this product — the brand is _"we show you exactly what's sent"_. A label that contradicts the app is the one inconsistency that would actually stick.

---

## 8 · What only you can supply

|     |                                                                                             |
| --- | ------------------------------------------------------------------------------------------- |
| ⛔  | Legal entity name, registered address, contact email                                        |
| ⛔  | Governing law and jurisdiction                                                              |
| ⛔  | **The OpenRouter/xAI retention answer from §2** — it changes both documents and the label   |
| ⛔  | Real URLs replacing `https://kept.app/terms` and `/privacy` in `you.tsx` and `purchase.tsx` |
| ⚠️  | Mixpanel data-retention window (project settings)                                           |
| ⚠️  | Convex retention rule for the `quota` table                                                 |
| ⚠️  | EU analytics decision — opt-in or geo-gated default (§4)                                    |
| ⚠️  | EU/UK transfer mechanism if you serve those markets                                         |
| 🟡  | Whether an EU representative or DPO is required for your volume                             |
| 🟡  | Effective date and change-notification method                                               |

---

## 9 · The three claims to get right

Copy that is true today, replacing copy that was not:

| ⛔ Do not write                | ✅ Write                                                    |
| ------------------------------ | ----------------------------------------------------------- |
| Nothing ever leaves your phone | Only what you ask us to summarise leaves your phone         |
| No analytics                   | No ads. Setup is measured; nothing you do in the app is     |
| We collect no usage data       | Nothing is recorded once you are in the app                 |
| Nothing renews                 | It renews until you stop it — we tell you three days before |

The in-app strings were corrected to match. **If the policy and the app disagree, the app is the evidence.**
