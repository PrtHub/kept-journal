# Kept — landing page build specification

A complete, self-contained brief. Everything needed is in this document: final copy, design tokens, the signature background shader, the logo path, section-by-section layout, component specs, motion, accessibility and an acceptance checklist.

**Copy is final.** Paste it as written. Where a line looks oddly specific or oddly restrained, it is deliberate — see §12.

---

## 1 · What you're building

A **single-page marketing site** for Kept, an iOS journaling app. One scrolling page, no routes, no CMS.

|                |                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| Deliverable    | One HTML page + CSS + minimal JS                                                                       |
| Framework      | None required. Plain HTML/CSS/JS is preferred. React/Astro/Next acceptable if it stays a static export |
| Theme          | **Dark only.** Do not build a light mode — see §3                                                      |
| Target         | Mobile-first. Most traffic arrives on a phone from an App Store link or a therapist's recommendation   |
| Primary action | One button: App Store download. Repeat it twice — hero and close. Nowhere else                         |
| No             | Cookie banner, chat widget, newsletter signup, testimonial carousel, logo cloud, countdown timer       |

There is no email capture and no analytics. Do not add either.

---

## 2 · The product, factually

Read this so nothing on the page contradicts it.

Kept is a private journal for iPhone. You write entries. Every so often — weekly, fortnightly, monthly, or only on request — the app produces a **one-page summary** of what you wrote in that period: counted facts, your own sentences quoted exactly, and three questions.

**How it is built matters to the pitch:**

- No account, no sign-up, no sync. There is no server holding anyone's journal.
- Entries are stored in an encrypted database on the device, key held in the iOS Keychain.
- Onboarding builds a year of journal from the user's **existing photo library** in about twenty minutes — pick a photo, answer a question, it becomes a dated entry.
- When a summary is generated, that period's entries are sent to a language-model provider, written up, and not retained. **That is the only thing that ever leaves the phone**, and only when the user taps.
- Writing, reading, searching and exporting are **free forever**. The paid feature is the summary.
- Optional Face ID lock. Markdown export. One passphrase-encrypted backup file.
- Each entry gets a generated abstract mark — a small unique closed curve derived from that entry's identity. These marks are the app's visual signature and appear throughout: on the timeline, in a year grid, on the week strip.

**Prices:** $9.99 / month · $39.99 / year · $99.99 one-time, no end date. The monthly and yearly plans auto-renew; the app sends a notice three days before each renewal. The one-time option never renews.

---

## 3 · Design tokens

Copy these exactly. The palette is called **Nocturne**.

```css
:root {
  /* Ground and surfaces */
  --ground: #0a0b0d; /* page background */
  --plane: #12141a; /* raised card */
  --raise: #171a20; /* card on card, input fields */
  --hairline: #242830; /* 1px borders, dividers */

  /* Ink */
  --ink: #f4f4f1; /* headings, primary text */
  --ink-2: #9aa0a6; /* body prose */
  --ink-3: #6b7178; /* labels, captions, meta */

  /* Accent — one only. Called "Ice". 10.02:1 on --ground */
  --accent: #7ac4d1;
  --accent-dim: #8fd0da; /* interior fills at low opacity */

  /* Spacing scale — use only these */
  --s1: 4px;
  --s2: 8px;
  --s3: 12px;
  --s4: 16px;
  --s5: 24px;
  --s6: 32px;
  --s7: 48px;
  --s8: 72px;
  --s9: 112px;

  /* Radius */
  --r-inner: 14px; /* cards */
  --r-pill: 999px; /* buttons */

  /* Motion */
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --fast: 220ms;
  --base: 420ms;
  --slow: 680ms;
}
```

**Dark only, and this is a product decision rather than a shortcut.** The app itself ships dark and does not follow the system setting. A light version of this page would be a different product's page. Do not add a theme toggle, do not add `prefers-color-scheme`, and paint `background` on `body` explicitly so the page holds on any host.

**One accent, spent carefully.** Ice appears on: the primary button, the logo mark, the recommended plan's border, link underlines, and the field tint. Nowhere else. Never use it for body text, never for large filled areas, never as a gradient into another hue.

**No other colours.** No green ticks, no red warnings, no purple, no gradients between hues. If something needs to read as positive, use `--ink` at full weight.

---

## 4 · Typography

**Geist** and **Geist Mono**, both on Google Fonts.

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500&family=Geist+Mono:wght@400&display=swap"
  rel="stylesheet"
/>
```

Fallback stack: `'Geist', system-ui, -apple-system, 'Segoe UI', sans-serif` and `'Geist Mono', ui-monospace, 'SF Mono', monospace`.

| Role     | Size / line-height | Weight | Notes                                                                      |
| -------- | ------------------ | ------ | -------------------------------------------------------------------------- |
| Hero     | 56 / 60            | 500    | `letter-spacing: -0.03em`. Drops to 38/42 on mobile                        |
| Display  | 40 / 46            | 500    | `-0.02em`. Section openers                                                 |
| Question | 26 / 32            | 500    | `-0.01em`. Sub-headings                                                    |
| Lead     | 21 / 32            | 400    | `--ink-2`. The line under a heading                                        |
| Prose    | 17 / 26            | 400    | `--ink-2`. Body                                                            |
| Meta     | 12 / 18            | 400    | **Geist Mono**. Captions, prices, small facts                              |
| Label    | 11 / 14            | 400    | **Geist Mono**, `uppercase`, `letter-spacing: 0.14em`, `--ink-3`. Eyebrows |

**Rules:**

- Body copy measure: **max 66 characters**. Use `max-width: 62ch` on prose containers.
- `text-wrap: balance` on every heading.
- `font-variant-numeric: tabular-nums` on all prices and figures.
- Never centre a paragraph longer than one line. Headings may be centred only in the hero and close.
- Only two weights exist. Do not use 600, 700, or bold-by-synthesis.

---

## 5 · The signature background — the ambient field

**This is the single most important visual element.** It is a slow, dark, luminous noise field: near-black with a faint drifting cyan bloom and constant fine grain. It must move slowly enough to be almost subliminal, and the grain is what stops it reading as a CSS gradient.

Use it as a **fixed, full-viewport layer behind everything** at `z-index: 0`, with content above it. It does not restart per section.

### Preferred implementation — WebGL fragment shader

This is the app's actual shader, ported to GLSL. Use it verbatim.

```glsl
precision highp float;

uniform vec2  u_resolution;
uniform float u_time;
uniform float u_hue;      // 189.0
uniform float u_density;  // 3.4
uniform float u_speed;    // 0.55
uniform float u_grain;    // 1.0

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    sum += amp * valueNoise(p);
    p = p * 2.02;
    amp = amp * 0.5;
  }
  return sum;
}

vec3 hsl2rgb(vec3 c) {
  vec3 k = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return c.z + c.y * (k - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 p = vec2(uv.x * aspect, uv.y);

  float t = u_time * u_speed;
  float n = fbm(p * u_density + vec2(t * 0.06, t * -0.04));

  // Domain warp — this is what makes it read as cloud rather than as noise.
  n = fbm(p * u_density + vec2(n, n * 0.5) + vec2(t * 0.03, 0.0));

  vec3 ground = vec3(0.039, 0.043, 0.051);          // #0A0B0D
  vec3 tint   = hsl2rgb(vec3(u_hue / 360.0, 0.46, 0.52));

  float amount   = smoothstep(0.30, 0.90, n) * 0.30;
  float vignette = 1.0 - 0.35 * length(uv - 0.5);
  vec3 col = ground + tint * amount * vignette;

  col += (hash21(gl_FragCoord.xy + t * 60.0) - 0.5) * 0.022 * u_grain;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
```

Vertex shader is a full-screen quad. Render at `devicePixelRatio` capped at 2. Target 30fps — this is ambience, not animation, and a lower rate is indistinguishable and cheaper.

**Required behaviours:**

- Pause the render loop when the tab is hidden (`document.visibilitychange`).
- Pause when the canvas is scrolled out of view (`IntersectionObserver`).
- If `prefers-reduced-motion: reduce`, render **one frame** at `u_time = 0` and stop.
- If WebGL is unavailable, fall back to the CSS version below. Never leave a blank or flat black page.

### Fallback — CSS + SVG grain

```css
.field {
  position: fixed;
  inset: 0;
  z-index: 0;
  background: var(--ground);
}
.field::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(60% 50% at 38% 28%, #15303a 0%, transparent 70%),
    radial-gradient(50% 40% at 72% 68%, #122a33 0%, transparent 75%),
    radial-gradient(80% 70% at 50% 50%, #0d1519 0%, var(--ground) 100%);
  filter: blur(40px);
}
.field::after {
  /* grain */
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.05;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
```

---

## 6 · The logo mark

One abstract closed curve — a soft leaning triangle. It is generated output from the app's own drawing routine, not a hand-drawn logo. **Use this path exactly. Do not redraw, simplify, or "clean up" the curve.**

```html
<svg viewBox="0 0 100 100" width="40" height="40" role="img" aria-label="Kept">
  <path
    d="M 23.70 44.62 Q 28.40 37.81 34.58 28.65 Q 40.76 19.49 49.34 26.48
           Q 57.92 33.47 64.12 38.67 Q 70.33 43.88 75.66 52.77 Q 81.00 61.66 72.44 67.71
           Q 63.88 73.76 56.78 76.02 Q 49.67 78.27 41.61 79.39 Q 33.56 80.51 29.78 73.31
           Q 26.00 66.10 22.50 58.76 Q 19.00 51.43 23.70 44.62 Z"
    fill="#8FD0DA"
    fill-opacity="0.2"
  />
  <path
    d="M 23.70 44.62 Q 28.40 37.81 34.58 28.65 Q 40.76 19.49 49.34 26.48
           Q 57.92 33.47 64.12 38.67 Q 70.33 43.88 75.66 52.77 Q 81.00 61.66 72.44 67.71
           Q 63.88 73.76 56.78 76.02 Q 49.67 78.27 41.61 79.39 Q 33.56 80.51 29.78 73.31
           Q 26.00 66.10 22.50 58.76 Q 19.00 51.43 23.70 44.62 Z"
    fill="none"
    stroke="#7AC4D1"
    stroke-width="6.05"
    stroke-linejoin="round"
  />
</svg>
```

Two paths: a 20%-opacity interior wash, then the stroke. The wash is what makes it read as _holding something_ rather than as an outline — keep both.

Wordmark: **Kept**, Geist 500, letter-spacing `-0.02em`. Mark on the left, 8px gap, optically centred to the cap height.

---

## 7 · Page structure

Nine sections. Each answers the next question a sceptical visitor has, in the order they ask it. Do not reorder. Do not add sections.

Global layout: content column `max-width: 1080px`, centred, `padding-inline: 24px`. Prose blocks inside it constrained to `62ch`. Vertical rhythm between sections: `--s9` (112px), reducing to `--s8` (72px) below 768px.

---

### 7.1 · Nav

Minimal, sticky, transparent until scrolled.

- Left: mark + "Kept"
- Right: a single text link "Download" → App Store
- On scroll past 80px: add `background: rgba(10,11,13,0.72)`, `backdrop-filter: blur(20px)`, and a 1px `--hairline` bottom border. Transition over `--fast`.
- Height 64px. No hamburger, no menu — there is nothing to navigate to.

---

### 7.2 · Hero

**Layout:** full viewport height minus nav, minimum 620px. Content vertically centred, left-aligned on desktop at `max-width: 20ch` for the headline. On mobile, still left-aligned — do not centre.

**Copy — exact:**

> `LABEL:` A PRIVATE JOURNAL FOR IPHONE
>
> `HERO:` The journal your therapist asked you to keep.
>
> `LEAD:` Write freely between sessions. Get one page back, on the day you chose.
>
> `BUTTON:` Download on the App Store
>
> `META, under the button:` Free to write, always. The summary is the paid part.

**Visual:** the field is already behind everything. Add, to the right on desktop (below the copy on mobile), a single iPhone screenshot of the app's Today screen — no device frame, no shadow, no perspective tilt. Just the screenshot with `border-radius: 44px` and a 1px `--hairline` border. Let the field show through around it.

**Motion:** headline, lead, button and meta fade up 12px in sequence, 90ms apart, starting 200ms after load, `--slow` duration, `--ease`. The screenshot fades in only, no movement, at 500ms.

The line under the button is load-bearing — it answers "so it's a paywall" before the thought forms. Do not remove it or move it.

---

### 7.3 · The problem

**Layout:** single prose column, `62ch`. No image. This section is deliberately plain — it is the one place the page just talks.

**Copy — exact:**

> `LABEL:` WHY THIS IS DIFFERENT
>
> `DISPLAY:` Most journal apps ask for effort on day one and pay you back on day ninety.
>
> `PROSE:` You write an entry and get a saved entry. You write another and still get nothing. The insights — the reason you downloaded it — need weeks of material before they can say anything that isn't generic. Meanwhile the app keeps asking you to type into an empty box.
>
> `PROSE:` Almost nobody reaches day ninety. So Kept is built to pay for itself on day one.

This is the most persuasive block on the page because it describes the visitor's own history with these apps. Do not shorten it, do not turn it into bullets, do not add an illustration.

---

### 7.4 · Day one — the backfill

**Layout:** two columns on desktop, copy left, visual right. Stack on mobile with the visual second.

**Copy — exact:**

> `LABEL:` DAY ONE
>
> `DISPLAY:` You arrive with a year already written.
>
> `PROSE:` Kept opens your photo library and asks about five pictures you already took. Each one becomes a dated entry with a mark of its own. Twenty minutes, and the timeline that was empty has a year in it.
>
> `META:` The photos never leave the device, and Kept only sees the ones you pick.

**Visual:** the year-grid screenshot — a grid of small generated marks, filled where entries exist. If a static image is used, it should be the "filled" state. If animated: marks fade in one at a time, 40ms apart, on scroll into view, once only.

---

### 7.5 · The page — the paid feature

**Layout:** centred heading, then the summary screenshot large and central, then a three-item fact row beneath it.

**Copy — exact:**

> `LABEL:` THE PAID PART
>
> `DISPLAY:` One page, on the day you chose.
>
> `LEAD:` Every fortnight — or weekly, or monthly, or only when you ask — Kept writes up what you wrote. Your own sentences, quoted exactly. Counts that were counted, not estimated. Three questions at the end you might want to bring up.

Then three facts, in a row on desktop, stacked on mobile. Each is a `QUESTION`-size line and a `PROSE` line:

|                                  |                                                                                                  |
| -------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Your words, not a paraphrase** | Quoted lines are selected from your own sentences by position, so a reworded quote cannot occur. |
| **Numbers that were counted**    | Every figure on the page is rendered from your entries. The model is never asked for one.        |
| **You choose what it can't see** | Name a subject to leave out and it is left out — a rule, not a preference.                       |

⚠️ **Do not embellish these three.** They are precise descriptions of how the feature is built. Do not write "AI-powered", "smart", "understands you", or "learns about you".

---

### 7.6 · Privacy

**Layout:** the heaviest section visually. A single `--plane` card, `--r-inner`, 1px `--hairline`, padded `--s7`. Copy inside, then a fact table.

**Copy — exact:**

> `LABEL:` PRIVACY
>
> `DISPLAY:` Your journal is on your phone. Encrypted.
>
> `PROSE:` No account. No sign-up. No sync. No analytics. There is no server with your journal on it, because there is no server.
>
> `QUESTION:` What leaves the phone, and when
>
> `PROSE:` When you ask for a summary, that period's entries are sent to be written up, and then forgotten — nothing is stored, and nothing is used to train anything. That is the only thing that ever goes out, and only when you tap.
>
> `PROSE:` Turn the summary off and nothing leaves at all.

Then a two-column fact table. Left column `--ink`, right column `--ink-2`, 1px `--hairline` between rows, no outer border:

|                    |                                                                      |
| ------------------ | -------------------------------------------------------------------- |
| Storage            | Encrypted database on the device, key in the iOS Keychain            |
| Account            | None. There is nothing to sign into                                  |
| Face ID            | Optional lock, checked against your hardware before it's switched on |
| Export             | Markdown, any time, yours to take                                    |
| Backup             | One encrypted file, locked with a passphrase we never see            |
| If you stop paying | Everything you wrote stays, and stays readable                       |

Beneath the card, one line at `LEAD` size, full-width, `--ink`:

> Writing, reading, searching and exporting are free forever. The money buys the page Kept writes you — never access to your own life.

---

### 7.7 · Memory

**Layout:** two columns, visual left this time (alternate from §7.4), copy right.

**Copy — exact:**

> `LABEL:` THE LONG GAME
>
> `DISPLAY:` It remembers what you don't.
>
> `PROSE:` A year ago today, you wrote something. Kept shows you. It notices which words keep coming back, which went quiet, and which two entries belong together — and every observation opens to the exact entries behind it, so you can check.

**Visual:** the Insights screenshot with one observation expanded to show the entries behind it. That "opens to the evidence" behaviour is the point of the section — the screenshot must show it.

⚠️ **Never invent an example observation.** If you want a quoted example on the page, it must come from a real seeded device or be clearly marked as an illustration.

---

### 7.8 · Pricing

**Layout:** heading, then three plan cards in a row on desktop, stacked on mobile with the year **first** when stacked.

**Copy — exact:**

> `LABEL:` PRICING
>
> `DISPLAY:` Writing is free. The page is what you're paying for.

Three cards. Each: posture line (`QUESTION`, `--ink`), plan name (`LABEL`), price (`DISPLAY`, tabular-nums), rate line (`META`).

| Posture            | Name        | Price  | Rate line                   |
| ------------------ | ----------- | ------ | --------------------------- |
| A real go          | A MONTH     | $9.99  | billed monthly              |
| I'm doing this     | A YEAR      | $39.99 | 67% less over twelve months |
| It's just mine now | NO END DATE | $99.99 | paid once, never renews     |

**The year card is the recommended one:** 1px `--accent` border instead of `--hairline`, and `background: rgba(122,196,209,0.06)`. Position it in the **middle** on desktop, **first** on mobile.

- No "Most popular" badge. No "Best value". No ribbon.
- Never write "save 67%" — write "67% less". A saving is a pitch; a rate is a fact.
- Do not make the one-time option visually louder than the year. It is there as a reference point and for people who refuse subscriptions, not as the upsell.

Below the cards, `META`, centred:

> The monthly and yearly plans renew until you stop them. We tell you three days before, and name the amount. Cancelling takes two taps in Settings.

⚠️ **There is no free trial. Never imply one.** No "try free", no "7 days free", no "cancel anytime" (which reads as trial language).

---

### 7.9 · FAQ

**Layout:** single column, `62ch`. Native `<details>`/`<summary>` accordions — no JS. First item open by default.

Summary line: `QUESTION` size, `--ink`. Body: `PROSE`, `--ink-2`. 1px `--hairline` between items. A `+`/`−` or chevron indicator, rotating over `--fast`.

**Copy — exact, in this order:**

**Do you read my journal?**
No, and there is no mechanism to. There is no account and no server holding your entries. When you ask for a summary, that period's writing is sent to be written up and then forgotten — nothing is stored and nothing trains a model.

**What happens if I stop paying?**
Everything you wrote stays on your phone and stays readable, searchable and exportable. You lose new summaries. You never lose your journal.

**What if I lose my phone?**
Your journal is in your encrypted iPhone backup, so it comes back with your phone. Kept also keeps one encrypted backup file you can put anywhere — locked with a passphrase we never see and cannot recover.

**Is there a free trial?**
No. You can write, read, search and export for free forever. The paid part is the page Kept writes you.

**Does it renew?**
The monthly and yearly plans renew until you stop them. We send you a notice three days before, naming the amount. Cancelling takes two taps in Settings. The no-end-date option never renews.

**Do I need a therapist?**
No. Kept never asks. It asks how often you want a summary and which day it should be ready.

**Is my mood tracked?**
Only if you want. Mood is asked after you write, never before, and always skippable. It stays on the device with everything else.

**Is there an Android version?**
Not yet. iPhone first, deliberately.

---

### 7.10 · Close

**Layout:** centred, generous vertical padding (`--s9` top and bottom), the mark above the heading at 56px.

**Copy — exact:**

> `MARK`
>
> `DISPLAY:` It's a journal. It's on your phone. It writes you a page.
>
> `BUTTON:` Download on the App Store
>
> `META:` Free to write, always.

---

### 7.11 · Footer

One row, `META` size, `--ink-3`, 1px `--hairline` top border.

Left: `© Kept`
Right: `Privacy` · `Terms` · `Support`

No social icons unless real accounts exist. No sitemap. No "built with".

---

## 8 · Component specs

### Primary button

```
background: var(--accent)
color: #0A0B0D            /* dark text on the accent — 10:1, do not use white */
font: Geist 500, 17px
padding: 16px 28px
border-radius: var(--r-pill)
```

- Hover: `filter: brightness(1.08)`, `transform: translateY(-1px)`, over `--fast`.
- Active: `transform: scale(0.98)`.
- Focus-visible: `outline: 2px solid var(--accent); outline-offset: 3px`.
- Minimum target 44×44 including padding.
- Include the Apple logo glyph before the label if you have the official asset. If not, text only — **do not draw an approximation of it.**

### Secondary / text link

`--accent`, no underline by default, `border-bottom: 1px solid rgba(122,196,209,0.35)` becoming solid `--accent` on hover.

### Card

`background: var(--plane)`, `border: 1px solid var(--hairline)`, `border-radius: var(--r-inner)`, `padding: var(--s6)`. **No shadows anywhere on this page.** Depth comes from the field behind and from 1px borders, never from blur.

### Fact table

Two columns, `border-bottom: 1px solid var(--hairline)` per row, none on the last. Left cell `--ink` with `padding-right: var(--s5)`. Right cell `--ink-2`. Stacks to two lines per row below 560px.

### Screenshots

`border-radius: 44px` for full-device shots, `var(--r-inner)` for cropped ones. `border: 1px solid var(--hairline)`. No drop shadow, no glow, no reflection, no floating angle. Serve `@2x` with `srcset`, lazy-load everything below the hero, and always set explicit `width`/`height` to prevent layout shift.

---

## 9 · Responsive

| Breakpoint   | Behaviour                                                                                |
| ------------ | ---------------------------------------------------------------------------------------- |
| `≥ 1080px`   | Full two-column sections, three-across pricing                                           |
| `768–1079px` | Content column shrinks; two-column sections keep their split but tighten gaps            |
| `< 768px`    | Everything single column. Section rhythm drops to `--s8`. Hero headline 38/42            |
| `< 560px`    | Fact tables stack to two lines. Pricing cards full width, **year first**. Padding `--s4` |

Nothing may scroll horizontally. Any wide element (a table, a code block) gets `overflow-x: auto` on its own container, never on `body`.

---

## 10 · Motion

Restrained and mostly on entry. The field is the only thing that moves continuously.

| Where                      | What                                                 |
| -------------------------- | ---------------------------------------------------- |
| Hero                       | Staggered fade-up on load, 12px travel, 90ms apart   |
| Section headings           | Fade-up 16px when 20% into view, once only, `--slow` |
| Year grid                  | Marks fade in sequentially, 40ms apart, once         |
| Buttons, links, accordions | `--fast` transitions on hover/open                   |
| Field                      | Continuous, ~30fps, paused when hidden               |

**Every one of these must be switched off under `prefers-reduced-motion: reduce`** — content appears at its final position immediately, and the field renders a single frame.

No parallax. No scroll-jacking. No counters that tick up. No text that types itself.

---

## 11 · Accessibility

Non-negotiable, and the palette was designed to make it easy.

- One `<h1>` — the hero headline. Headings descend in order with no levels skipped.
- All text meets 4.5:1 on its own background. `--ink-2` on `--ground` is 7.4:1; `--ink-3` is 4.6:1 — do not go dimmer than `--ink-3`, and never use it for body copy.
- The field canvas is `aria-hidden="true"` and `pointer-events: none`.
- Every screenshot needs a real `alt` describing what the screen shows, not "app screenshot".
- Visible focus on every interactive element. Never `outline: none` without a replacement.
- FAQ uses native `<details>` so it works with no JS and is keyboard-operable for free.
- Full keyboard path through the page: skip link → nav → both buttons → FAQ items → footer links.
- Respect `prefers-reduced-motion` everywhere, and `prefers-reduced-transparency` by making the nav's blurred background opaque.

---

## 12 · Copy rules

The copy above is final because these constraints are legal and strategic, not stylistic. If you write new copy, it must obey them.

### The governing rule

> **Never claim the app treats, improves, cures, or helps anything. It records, organises, and summarises what the user wrote.**

This exists because health-benefit claims attract App Store rejection, edge toward medical-device regulation in several jurisdictions, and — most importantly — would destroy the app's distribution channel. Therapists recommend Kept to clients. No therapist recommends something that positions itself as their replacement.

### Banned phrases, with what to write instead

| ⛔ Never                                                         | ✅ Instead                                                       |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Feel better · less anxious · calmer · happier                    | See what you actually wrote                                      |
| Understand yourself · discover your patterns                     | Read your own words back                                         |
| Build a healthier habit · never miss a day                       | Write as often as you said you would                             |
| Heal · cope · manage your mental health · therapy in your pocket | Arrive at your session with something honest to say              |
| Nothing ever leaves your phone                                   | Only what you ask us to summarise leaves it                      |
| Nothing renews · cancel anytime, no strings                      | It renews until you stop it — we warn you first                  |
| Save 67% · 67% off · was $119.88                                 | 67% less over twelve months                                      |
| 100% secure · military-grade · bank-level                        | Encrypted on the device; the backup passphrase is yours alone    |
| AI-powered · smart · intelligent · learns about you              | Writes up what you wrote                                         |
| Join thousands · loved by · trusted by                           | _(nothing — there are no users yet; do not invent social proof)_ |

### Tone

- **No guilt and no praise.** The app will never tell someone they're behind, and never congratulate them for journalling. A page promising "never miss a day again" contradicts the product being installed.
- **No exclamation marks.** Anywhere.
- **No emoji.** Anywhere.
- **Specific over enthusiastic.** "Three days before it renews" beats "we'll always keep you informed".
- **Second person, present tense.** "You write" not "users can write".
- **British-leaning spelling is used in the app** (_summarise_, _organise_). Stay consistent with the copy above.
- **Do not lead with AI.** The model writes connecting sentences between counted facts. Leading with it promises a machine's opinion and invites "so it reads my diary" as the visitor's first thought.

---

## 13 · Head, meta, SEO

```html
<title>Kept — a private journal that writes you a page</title>
<meta
  name="description"
  content="The journal your therapist asked you to keep. Write freely between sessions, get one page back on the day you chose. Encrypted on your phone, no account, no server."
/>
<meta name="theme-color" content="#0A0B0D" />
<link rel="canonical" href="https://kept.app/" />
```

Open Graph and Twitter cards: same title and description, plus a 1200×630 image — the mark on the Nocturne ground with the wordmark, nothing else. `twitter:card` = `summary_large_image`.

Add `SoftwareApplication` JSON-LD with `name`, `applicationCategory: "LifestyleApplication"`, `operatingSystem: "iOS"`, and `offers` listing all three prices in USD. **Do not add `aggregateRating`** — there are no ratings, and inventing them is both fraud and a manual penalty.

Target phrases: _private journal app · encrypted journal · therapy journal · session notes · offline journal · journal for therapy clients_. Work them into real sentences or leave them out; no keyword list in the footer.

---

## 14 · Assets needed

| Asset                  | Spec         | Notes                                                       |
| ---------------------- | ------------ | ----------------------------------------------------------- |
| App icon               | 512×512 PNG  | The mark on the Nocturne ground, squircle-masked            |
| Screenshot — Today     | 1290×2796    | The field, date, prompt, week strip                         |
| Screenshot — Summary   | 1290×2796    | One full page: facts, prose, quotes, questions              |
| Screenshot — Year grid | 1290×2796    | A filled year of marks                                      |
| Screenshot — Insights  | 1290×2796    | **One observation expanded**, showing the entries behind it |
| OG image               | 1200×630     | Mark + wordmark on `#0A0B0D`                                |
| Favicon                | 48×48 + SVG  | The mark                                                    |
| Apple badge            | Official SVG | From Apple's marketing resources. Do not recreate it        |

**Every screenshot must come from a device with a real, seeded journal.** Empty states and placeholder entries are recognisable instantly and cost more trust than a missing screenshot. Scrub anything genuinely personal first.

---

## 15 · Acceptance checklist

- [ ] Renders correctly with JavaScript disabled — all copy present, FAQ still opens
- [ ] No horizontal scroll at 320px, 375px, 768px, 1440px
- [ ] Field falls back to CSS when WebGL is blocked; page is never flat black
- [ ] `prefers-reduced-motion` stops every animation, field included
- [ ] All text ≥ 4.5:1 on its background
- [ ] Every interactive element has a visible focus state
- [ ] One `<h1>`; heading order unbroken
- [ ] Lighthouse ≥ 95 on performance and accessibility
- [ ] Fonts preconnected; no layout shift on load (CLS < 0.05)
- [ ] Every screenshot has explicit dimensions and a descriptive `alt`
- [ ] Zero occurrences of any phrase in the §12 banned list
- [ ] No free-trial language anywhere
- [ ] No invented testimonials, user counts, or ratings
- [ ] Privacy and Terms links resolve to real pages
- [ ] Prices match the App Store exactly
