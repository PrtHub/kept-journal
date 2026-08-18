# Feature tracker

What exists in `src/`, checked against the code rather than against intent.

**Why** a thing is built the way it is lives in the doc comment on the file itself. This page is the inventory, not the argument — where a decision cost a rewrite and must not be relitigated, it is folded into a ▸ disclosure beside the thing it explains.

Spec: [app.md](app.md) · Flow: [onboarding.md](onboarding.md) · Positioning: [idea.md](idea.md) · Listing: [aso.md](aso.md)

---

## Status

|                 |                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Build**       | `1.0.0 (4)` — submitted 18 Aug 2026, _Waiting for Review_ with all five store items                                                                    |
| **App**         | Feature-complete. Five screens, 35 onboarding steps, reminders, a lock, export, encrypted backup                                                       |
| **Payments**    | RevenueCat integrated, all three products resolving. **A real sandbox purchase has never been run**                                                    |
| **The summary** | Built, and cannot run — `app.json` has no `extra.convexUrl`. Degrades to computed facts rather than breaking ([convex/README.md](../convex/README.md)) |

---

# 1 · Shipped

### Foundations

- Encrypted SQLite (SQLCipher), key in Keychain — survives an iCloud restore
- Migrations, FTS5 external-content index + triggers
- Entry CRUD, date ranges, `created_at` vs `entry_date` split
- Reactive queries via `addDatabaseChangeListener`, debounced
- Recurring terms from document frequency — no AI, no network

### Design system

- Nocturne tokens — dark + light palettes, spacing, radius, motion
- Accent from hue, contrast-clamped **per ground**
- Full type scale, custom faces
- Ambient field — SkSL fBm + domain warp + grain, on the UI thread
- Field pauses when its tab is unfocused, freezes in the editor
- Entry glyphs, deterministic from immutable identity
- The accumulating onboarding mark, with a one-time replay
- Glass layer with mandatory solid fallback
- Custom tab bar, press physics, Skia icons

### Accessibility

- Reduce Transparency → solid planes
- Light mode as a first-class theme
- Reduce Motion — field freezes, screen transitions cut
- VoiceOver labels wherever a glyph carries information
- Line height scales with Dynamic Type
- Accent contrast measured and fixed on both grounds

### Onboarding

- All 32 steps across seven acts
- Weighted progress, resume-in-place, answers persisted per change
- Backfill — photo picker, EXIF dates, required date control, per-entry marks
- Commitment ceremony — pledge, why-a-price, ladder, promises, purchase, record

### Capture

- One tap to write — no title, no required fields
- Autosave on pause
- Mood after writing, never before — optional
- Daily prompt from recurring terms, with a curated fallback bank
- Photo attachment — pick, replace, remove

### The five screens

| Screen       | What's on it                                                                                                                                                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Today**    | Ambient field, date, today's glyph, no header bar · the specific question with **"Another"** to reroll · tap-to-write glass box · week strip of glyphs · **Echo** — a year ago today, ±3 days, tappable                                                          |
| **Editor**   | Full screen, field frozen, no toolbar · word count in mono after a delay, fading on idle · mood row after Done, skippable · the glyph draws stroke-by-stroke, haptic as it closes                                                                                |
| **Timeline** | Month-grouped rows: glyph · date · first line · keyword search over FTS5 with escaping · **year heatmap** of glyphs, months named, today ringed, every mark tappable · photo thumbnails                                                                          |
| **Insights** | Gated empty state until seven entries · **four computed observations** — topic × mood, what persists, what went quiet, two entries paired · **every claim opens** to the entries behind it · recurring terms with sparklines · mood over time, gaps left as gaps |
| **You**      | Lifetime stats, first entry date · reminder switch and hour on onboarding's arc · commitment record · Markdown export · **encrypted backup and restore** · Face ID switch, proven against hardware first · about, version, Terms and Privacy                     |

### The summary — the paid feature

- **Convex gateway** holding the OpenRouter key — stateless, rate-limited, forgets
- **OpenRouter**, structured output, one page per period — model set in `convex/summary.ts`
- Computed facts and generated prose, **split so fabrication is structurally impossible**
- `summaries` table — both halves stored, so a read document never changes underneath
- Document screen with history, quotes tappable through to their entries
- Share-sheet export as Markdown
- Cadence-aware: knows when one is due, from the last one **actually produced**

<details>
<summary><b>▸ Why the model is never asked for a number or a quotation</b></summary>

§2.4 splits the page into computed facts and generated prose; the split is enforced in `summary/generate.ts` rather than requested in the prompt. The model returns connective language, a _selection_ among quote candidates the device sliced from the user's own sentences, and questions. Three guards close the two failures §2.4 calls unforgivable:

1. **Quotes are indices, not text** — a paraphrase inside quotation marks cannot occur, because the model never writes a quotation.
2. **A reflection containing any digit is discarded** — every figure on the page is rendered from counted data, so a number in the prose is one nobody verified. The whole reflection is dropped rather than edited: a sentence with its number stripped is a sentence whose meaning changed.
3. **Excluded subjects switch off quoting entirely** — the computed layer cannot read a sentence for whether it mentions health, so it does not risk it.

**Failure degrades, never breaks.** No deployment, no key, spent quota, model error — all produce a real page from computed facts, which is exactly what the onboarding reveal has always shown. A missing backend must never look like a missing journal.

**Generated on open, not in the background.** iOS gives no guarantee a background task runs at a chosen hour, and a summary silently absent on the morning it was promised is worse than one that takes a few seconds when you look. The schedule decides when a page is _due_; the notification makes the timing feel kept.

</details>

### Notifications

- Permission asked once, after value, with denial handled
- **Actually scheduled**, on grant and on every edit
- **The pledge is the schedule** — weekly triggers, not a daily nag
- No sound, no badge; the copy is a question
- Preview and real notification are one string

### Safety

- iCloud Backup path — correct Keychain class
- Unopenable-database recovery message on launch
- **Biometric gate at launch**, with app-switcher snapshot cover
- Encrypted backup — scrypt + XChaCha20-Poly1305, photos included
- Restore merges rather than replaces; safe to run twice

### Subscription

- Commitment ladder — **three** stakes, live store prices, term maths
- **The pledge, measured** — `lib/pledge.ts`, shown on You
- RevenueCat — offerings, purchase, restore, entitlement, manage/cancel
- Renewal warning three days ahead — `lib/renewal.ts`
- Purchase UI — amount, restore, legal links, cancel handling
- `PurchaseGateway` port, so the integration is one file
- Commitment start date recorded, so the end date is real

<details>
<summary><b>▸ Why the <code>term</code> screen was removed, and two others with it</b></summary>

It asked _"how long are you committing for?"_ one screen before the ladder priced those exact durations. The durations on offer were **exactly Apple's billing intervals** — nobody decides to commit for precisely one calendar year — so a user reading carefully could see the commitment question had been reverse-engineered from the payment system. Asking twice is where the seam showed.

The resolution is that **the money is the stake**. The commitment is the _rhythm_ (`pledge`, free, measured); the amount is what stands behind it. A bigger amount is a bigger stake is a bigger commitment — which makes steering toward the year honest rather than a compromise, because it is the larger stake and not merely the better deal.

**Three screens went, not one.** `still-sure` and `commitment` followed `term` out. Both existed to confirm a duration, and both described the promise as _pledge × billing period_ — "about 260 entries, from today until 27 August" — so the size of someone's promise moved when they picked a different price, and a **renewal** date was presented as the end of a commitment. Correcting that arithmetic left a rate derived from the tap on `pledge`, restated a screen later under a new heading, which §3's _Restated_ test exists to catch.

Act VI's commitment beat is now `pledge` alone — it already ends on a real consequence (entries behind each summary, derived from the pledge **and** the cadence chosen two acts earlier), and `lib/pledge.ts` measures it afterwards. The act runs **pledge → why-a-price → ladder → what-we-owe → purchase**.

**Persuasion, and where the line sits.** Used: position (the year in the middle), posture labels (_a real go · I'm doing this · it's just mine now_), and the per-month rate. Refused: a "most popular" badge and any savings maths. The distinction is that a rate is a **fact** and a discount is a **pitch** — and a pitch here undoes four screens arguing this is not a shop. §6's no-preselection rule is now partially broken by `DEFAULT_TERM`, deliberately: merging the screens removed the user's own prior answer, so something must be selected, and a default is the mildest opinion available.

</details>

<details>
<summary><b>▸ Why the commitment is measured rather than forfeited</b></summary>

**The commitment was asserted once and never mentioned again**, which is the difference between a real commitment device and commitment-_flavoured_ pricing. In a deposit contract the money is at risk; here nothing is, so paying does not make anyone write.

The fix is not forfeiture — "lose your money" is a hostile note in a product this gentle, and App Store refund mechanics make it painful. It is **self-accountability**, a weaker but real commitment device: the promise stated back, measured, using data already on the device. _"You said most days. 11 of the last 14."_

**It states and never grades.** No "behind", no praise, no colour that means bad — §7 forbids guilt mechanics and praise for journalling, and both point the same way. The number is the accountability; a judgement on top turns a mirror into a scold. `when-needed` returns nothing at all, because it is not a rate and measuring it would invent a target the user explicitly declined to set.

</details>

<details>
<summary><b>⛔ "Nothing renews" was false and is gone</b></summary>

The purchase act promised it in eight user-facing places, twice at the point of sale. App Store Connect offers no non-renewing subscription product — auto-renewing was the only option — so the promise lost to the mechanism. Guideline 3.1.2 requires renewal terms _at_ the point of sale; stating the reverse is a straightforward rejection, and shipping it would be a refund-and-chargeback engine aimed at the audience §5 says we can least afford to lose.

**The replacement is stronger, not weaker.** _"We warn you before it renews"_ is unusual — most apps hope you forget — and unlike the old line it survives contact with how the App Store works. `lib/renewal.ts` performs it: a dated notice three days ahead, naming the amount, scheduled at purchase rather than at some later launch.

It also improved the story by accident. The renewal date and the day `kept-until.tsx` promises to hand back what you wrote are **the same day** — so money moves at the moment of maximum demonstrated value, which is the alignment §5 always wanted and non-renewal only gestured at.

`forever` is a non-consumable and genuinely never renews. Every claim the other two rungs gave up is still true of that one.

</details>

<details>
<summary><b>▸ Three RevenueCat failures worth remembering — each cost a round trip</b></summary>

`setLogLevel` is **async** — with the native module unlinked it rejected rather than threw, so a synchronous `try/catch` never saw it and it crashed launch as an unhandled rejection. Any SDK call in a guarded block needs checking for this.

`isLive` was a constant `true`, which suppressed the "payments aren't connected" notice in exactly the case it existed for — a key present with no native module. It is now a getter on `configured`.

**Subscriptions and non-consumables are different sections of App Store Connect.** Completing the subscription group did nothing for the lifetime product, which sits under _In-App Purchases_ with its own metadata and its own required review screenshot. Two of three resolving is a real state, and the ladder now renders only what the store will sell rather than showing an authored price on a rung that cannot be bought.

**And they are separate submission items.** For a first release the group, _both_ subscriptions and the non-consumable must all be added to the same submission as the build — the group will not carry its tiers in, and a group submitted alone is rejected by App Store Connect before a reviewer ever sees it.

</details>

---

# 2 · Open

### Needs a deployment, not code

The summary is built and cannot run until someone creates a Convex deployment and sets the key:
`npx convex dev` → `npx convex env set OPENROUTER_API_KEY …` → paste the URL into `app.json`'s `extra.convexUrl`, which is **currently unset**. See [convex/README.md](../convex/README.md).

| Item                              | Note                                                                    |
| --------------------------------- | ----------------------------------------------------------------------- |
| Summary export as **PDF**         | Markdown ships; PDF needs `expo-print` (native dep, rebuild)            |
| Notification carrying the summary | **Not blocked** — §2.6's example is the echo, already computed on Today |

### Payments — integrated, unproven

All three products resolve with live storefront prices. `ENTITLEMENT_ID` is verified as `'kept Pro'` — identifier and display name genuinely match, space included.

| Item                                     | Note                                                                                                                              |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **A real sandbox purchase**              | Never run. The entitlement grant is the thing to confirm                                                                          |
| `restore()` discards the term            | Returns `boolean`, so the plan shown after a restore is whatever the ladder had selected. Fix is `Term \| null` across five files |
| Gating the summary behind an active term | `purchases.isActive()` exists; nothing calls it                                                                                   |
| Re-commitment flow at term end           | Now a renewal, so a retention surface rather than a sales one                                                                     |
| Paywall blur on Insights                 | Not started                                                                                                                       |
| Therapist codes (App Store Offer Codes)  | Not started                                                                                                                       |

### Blocked on a decision

| Item              | Note                                                                                                                                                                                                                                         |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Voice entries** | Expo has no first-party speech-to-text. Recommended: a **local Expo module** over `SFSpeechRecognizer` rather than a third-party dep. A hosted API is ruled out — it would put the journal on the wire. Needs a mic permission and a rebuild |

### Needs a physical device

- `/db-check` — eight assertions against real SQLCipher
- `/spike` — field framerate gate (numbers are stale)
- The lock against real Face ID — cancel path, 60s grace, switcher cover
- A scheduled reminder actually arriving at its hour
- Dynamic Type at the largest setting — the bug is fixed, the layouts are unseen
- ~10 hand-tuned durations across the flow

### Polish — none of it blocking

| Item                                     | Note                                                                            |
| ---------------------------------------- | ------------------------------------------------------------------------------- |
| 30fps cap on the field                   | An attempt was reverted — see §3                                                |
| Static field during scroll               | Needs a scroll handler per screen                                               |
| Low Power Mode still frame               | Needs `expo-battery`, not installed                                             |
| Scroll-linked parallax                   | §6.7                                                                            |
| `GlassContainer` so adjacent cards merge | §6.5                                                                            |
| Day-30 prompt for a first backup         |                                                                                 |
| Prepared statements on hot paths         | `db.prepareAsync` unused                                                        |
| Reminder timing learned from behaviour   | Fixed at the onboarding hour; §2.6 wants it to move to when they actually write |

### Deferred by choice

| Item                                | Note                                                                         |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| `embedding_queue` drain             | **Blocked upstream** — `sqlite-vec` is not shipped for iOS in expo-sqlite 57 |
| Import from Day One / Apple Journal | Onboarding identifies candidates; nothing acts on it                         |
| v2                                  | Echoes/Themes on local TF-IDF, Year in Review, Ask your journal, Android     |

---

# 3 · Do not re-attempt without reading this

Four things were built to spec and reverted. Full reasoning is in the file named beside each.

|     | What                                                               | Why it lost                                                                                                                                                                                                  |
| --- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ⛔  | **Field derived from entries** (§6.4) — `hooks/use-theme.ts`       | A derived range spans its whole width; a preset is one tuned point. Hashing into a hue wheel lands in banned violet ~20% of the time. And the thing being personalised was already the best thing in the app |
| ⛔  | **Mood as drawn arcs** (§6.2) — `lib/icons.ts`                     | Curvature is not self-evidently a mood scale. _Rough · Low · Okay · Good · Great_ is instantly legible; the arcs had to be decoded                                                                           |
| ⛔  | **30fps cap by clock quantising** — `components/ambient-field.tsx` | Not a cap. Uniforms rebuilt every tick regardless, so Skia repainted at full rate — the only effect was stepping the motion                                                                                  |
| ➡️  | **`@expo/ui` List/Section on You** (§6.13)                         | Would be a hybrid, and the seam shows. The OS feel users notice is the _control_ — `Switch` already **is** the UIKit switch. Reverse if the rows ever become plain                                           |

**Three corrections to the spec, found by measurement:**

- **§6.14's contrast claim was false.** One L-clamp cannot serve both grounds — they are ~90 luminance points apart. Light mode shipped at **1.79:1**. Now per-ground; both clear 4.5:1 at every hue.
- **Reduce Motion needed almost nothing.** Reanimated defaults to `ReduceMotion.System`, so every `FadeInDown` already honoured it. Only the Skia field and native screen transitions needed code.
- **Insights was a stats dashboard.** Counting moved to You; the tab now does retrieval and juxtaposition, which is the only thing a journal can do that its owner cannot.

---

# 4 · Known weak points

- **Photos are not encrypted.** Plain JPEGs in the app container, protected by the device passcode. Same protection Photos gives the original, but weaker than the words beside them.
- **Backup cost parameters are read from the file**, not from today's constants — raising scrypt's `N` later must not orphan existing backups.
- **Offline is true only by accident.** Nothing calls the network yet. It stays true once summaries exist _only if_ the request queues and drains.
- **`restore()` returns a bare boolean**, so a lifetime owner restoring can be shown "Renews annually until you cancel" with an invented date. Listed in §2; repeated here because it is a false statement about money.

---

# 5 · Store & compliance

### Settled

|                      |                                                                                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Prices               | $9.99 month · $39.99 year · $99.99 no-end-date. The week rung was cut because it could end before the first summary was due. Reasoning in `commitment-plan.ts` |
| The month→year gap   | The price is not asked to carry the philosophy. The pledge display does that; the ladder prices normally                                                       |
| Product IDs          | `kept_monthly_pro` · `kept_yearly_pro` · `kept_lifetime_pro` — verified against App Store Connect                                                              |
| Terms & Privacy URLs | `keptjournal.pro/terms` and `/privacy` — both published and live                                                                                               |

### Still to verify

⚠️ **`ITSAppUsesNonExemptEncryption: false` in `app.json` needs re-checking, and it is a legal attestation rather than a config value.** It was set when the only crypto in the app was the iOS Keychain, which is squarely exempt. The app now also ships **SQLCipher** (AES, via the expo-sqlite plugin) and **`@noble/ciphers` + `@noble/hashes`** (XChaCha20-Poly1305 and scrypt, for encrypted backups) — bundled third-party implementations whose purpose is confidentiality of user data. That is not one of the exempt purposes (authentication, digital signature, copy protection) and it is not encryption "provided by the operating system", which are the two grounds a `false` normally rests on.

Getting it wrong is an export-compliance problem, not a rejected build. Verify against Apple's current export-compliance questionnaire; the likely outcome is `true` plus either a self-classification report to BIS or a filed exemption.

⚠️ **The privacy nutrition label is no longer "no data collected".** That was true until the summary shipped. Generating one sends the period's entries to OpenRouter and on to the model provider — Convex forwards and forgets, but the provider's retention is not ours to promise. Mood ratings are also plausibly Health data under Apple's taxonomy.

Declare it accurately. This is the worst app in the world to get this wrong on: the brand is _"we show you exactly what's sent"_, and a label reading "no data collected" beside a feature that posts journal entries to a third party is the one contradiction that would actually stick.

### Listing

| Field                                      | Value                | Why                                                                                                                |
| ------------------------------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Primary category                           | **Lifestyle**        | Kept is text-first — you write, and mood is asked afterwards and skippable. That is Day One's shape, not Daylio's  |
| Secondary category                         | **Health & Fitness** | Keeps us in wellbeing browse and in range of Apple's mental-health editorial, without the primary-category baggage |
| **Not** Medical                            | —                    | Guideline 1.4.1, heaviest review, can require documentation we do not have (`aso.md` line 59)                      |
| Age rating — Medical/Treatment Information | **No**               | The app provides none, and §7 forbids it                                                                           |

<details>
<summary><b>▸ Why Lifestyle and not Health &amp; Fitness</b></summary>

**Category does not gate keyword search.** Search matches on title, subtitle and the keyword field whatever category you are in, so `aso.md`'s therapy/mood/anxiety set works identically from Lifestyle. Category drives browse, charts, editorial and how the product page reads — nothing else. An earlier version of this table argued Health & Fitness _from_ the keyword set; that reasoning was wrong.

The market splits by **product shape**, not by the word "journal". Mood-first tools (Daylio, Reflectly, Finch, Stoic) belong in Health & Fitness. Text-first journals (Day One, Journey) belong in Lifestyle. We are the second.

Two costs to a Health & Fitness primary, both avoidable: extra scrutiny on health-data handling and the nutrition label, and a category whose browsers are looking for an **outcome** — track it, improve it, measure it — which §7 forbids us from promising. We would be the listing on that shelf making the fewest claims. In Lifestyle, _"a private journal that writes you a page"_ is complete on its own.

</details>

### Permissions, checked against what the app actually does

| Capability                            | Declared              | Note                                                                                       |
| ------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------ |
| Photo library                         | ✅ `photosPermission` | Rewritten — the old string described backfill only, and the editor now attaches photos too |
| Face ID                               | ✅ `faceIDPermission` | Accurate                                                                                   |
| Notifications                         | —                     | Local only; no Info.plist string needed, permission requested at runtime                   |
| Document picker, sharing, file system | —                     | None required on iOS                                                                       |
| Microphone / speech                   | —                     | Correctly absent — voice entries are not built                                             |
| `android.permission.RECORD_AUDIO`     | ➡️ removed            | Declared for voice entries that do not exist. Re-add with the feature                      |
| `withSQLiteVecExtension: true`        | 🟡                    | Enabled and unused — `sqlite-vec` does not ship for iOS in expo-sqlite 57                  |
