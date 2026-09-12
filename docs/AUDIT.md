# Site Audit — Phase 0 (Overnight Revamp)

**Date:** 2026-07-16/17 · **Branch:** `feature/1.5` · **Auditors:** design-ux-researcher, design-persona-walkthrough (recruiter / hiring manager / startup founder), recruitment-specialist
**Canonical facts:** `docs/PROFILE_SOURCE_OF_TRUTH.md` (SOT). Pages audited: `/`, `/experience`, `/projects`, `/coming-soon` (desktop 1440px + mobile 390px on the live deploy, which matches this branch's code).

**All six known issues confirmed.** 20+ additional findings. The site currently fails 5 of the 10 SOT sync-checklist items (canonical timeline, single Apexon entry, location framing, exact metrics, skills groupings).

**Persona verdicts (before):** Recruiter — bounce at ~25s, would NOT advance. Hiring manager — "maybe, leaning no"; blocked by overlapping dates, post-2023 silence, unsupported AI claim. Founder — "maybe"; nearly converted by Commissh/Ehalo, nearly lost by "Book a call" → /coming-soon.

---

## CRITICAL — fix before anything else

### C1. Employment dates are wrong and overlap (background-check failure risk)
- `src/constants/ExperienceItems.tsx:43` — Crest shown as **"Aug 2021 - Jan 2023"**; SOT:18,62 says **Jun 2020 – Aug 2021**. Off by ~17 months on both ends; identical to the Apexon SE1 period (`:29`), so the site shows **two concurrent full-time jobs for 17 months**. Reads as moonlighting or fabrication; verification firms flag it automatically. (Likely a copy-paste error.)
- Apexon is split into two entries (`:14-17`, `:26-29`); SOT rule 4 mandates **ONE entry: "Software Engineer → Software Engineer II", Aug 2021 – Aug 2023**.
- Also: "Crest Data System" should be "Crest Data Systems" (SOT:61).

### C2. Timeline ends Aug 2023 — unexplained ~3-year gap; the explanation exists and is positive
- Homepage "Recent Role" card renders a job that ended Aug 2023 (`RecentExperience.tsx:17` → `EXPERIENCE_ITEMS[0]`).
- Zero mentions anywhere of: **MASc Computer Engineering, Memorial University, Apr 2025** (SOT:98), **AZ-204** (SOT:100), or any current work. This was every persona's #1 blocker — and SOT facts fully convert "gap" into "moved to Canada for a Master's."
- Current consulting/RAG work (2025–present) is not yet in the SOT beyond a TODO (SOT:88) — content phase must use `TODO(ABHISHEK)` for its details.

### C3. Invented metrics contradict the SOT
- `ExperienceItems.tsx:21-22` — **"<90ms API Performance"** and **"8K+ Daily Users Served"** render as homepage stat boxes. SOT's canonical figure is **"1,000+ daily active users at 99.9% uptime"** (SOT:59); allowed metric set is closed (SOT:121). 8K+ is an 8× inflation vs. the résumé — one cross-reference destroys trust in every number on the site.
- `ExperienceItems.tsx:19` — "10% reduction in technical debt": SOT has no number for this.
- Crest bullets omit the SOT-verified **60%** deployment-overhead reduction and **99.9%+ uptime** (undersell).

### C4. No resume download anywhere
Zero matches for resume/PDF in `src/`; no PDF in `public/`; not in navbar or footer. The recruiter's #1 artifact is unobtainable. (`src/data/master-resume.json` also doesn't exist yet.)

### C5. Expense Tracker contradicts itself and its own linked repo
`src/data/projects.ts:30-31` — bullet says "backend architecture using **Spring Boot and Java**"; skills say **Fastify/TypeScript/Prisma**; SOT:78 says Node.js/Fastify/Prisma/Jest/Vercel (no Java, no AWS). One click on the linked GitHub repo falsifies the description. Trivially caught by any technical screener.

---

## HIGH

### H1. Identity mismatch across metadata / hero / SOT
`src/app/layout.tsx:16-17` — title "Developer & **Freelancer**", description "**Java** Full Stack Developer with 3+ years". Hero (`Hero.tsx:242`): "Software Engineer and **AI Engineering Practitioner**". SOT:36 headline: "Software Engineer / Full Stack Developer". "Freelancer" in the tab title sends a contract signal that conflicts with full-time screening; "Java Full Stack" is the stale narrow identity. ("3+ years" itself is correct per SOT rule 1 — keep it, never "4+".)

### H2. AI positioning has zero supporting evidence
Hero claims intelligent systems/ML; the only AI artifact is one classical-CV school project. No RAG/LLM/event-driven/observability project exists in `projects.ts`. The OSFI RAG pipeline (SOT:88 TODO) must become the featured project.

### H3. No Canada signal; only geography shown is "Ahmedabad, India"
`ExperienceItems.tsx:16,28,42` badges render prominently. SOT rule 6 authorizes "St. John's, NL · Open to relocation · Remote-ready". Note: exact work-permit status is **not in SOT** → any authorization claim needs `TODO(ABHISHEK)`; the Canadian address + Canadian degree carries most of the signal anyway.

### H4. Hero copy is generic buzzword filler
`Hero.tsx:242` — "solution-driven… impactful technology… Let's create something innovative together!" No years, domain, degree, metric, or location. The rotating multilingual greeting ("Konnichiwa!"…) adds geographic noise at the exact moment a recruiter asks "where is this person?" Also "3+ years" appears nowhere on-page (meta only).

### H5. Skills = 53-item auto-scrolling marquee with duplicates
`SkillIcons.tsx:304` (`ALL_SKILLS = Object.keys(SKILL_ICONS)`) → `Skills.tsx:107-108` doubles it via innerHTML (106 tags, duplicated for screen readers too). Dupes/variants: Java/Java 8/Java 21, Spring Boot/Spring MVC/Spring Boot 3.2, AWS/AWS Lambda/EC2/S3, Elastic Search/ELK Stack, SQL/MySQL/PostgreSQL, concept tags ("Asynchronous", "Serverless"). Unscannable, reads junior, ignores `prefers-reduced-motion`. Hero separately renders 20 more tags (`Hero.tsx:246`) with inconsistent membership — two unranked lists back-to-back. Interview-risk items displayed without SOT backing: Kubernetes, Saga, Firebase, Flutter, Heroku, Swift, Flask.

### H6. Footer dead-ends: Blog / Bucket List / "Book a call" → /coming-soon
`Footer.tsx:69-93`. "Book a call" is the founder persona's exact conversion action; breaking it was her exit moment. Three fake links + an "under construction" page on a site whose timeline ends 2023 = "abandoned site."

---

## MEDIUM

- **M1. Projects have no outcomes** (`projects.ts`): single-sentence descriptions; gesture project omits its verified **78% accuracy / 40 classes** (SOT:84); Ehalo bullets contain marketing copy ("…collaborate and have fun"); Commissh description visibly truncates mid-sentence on the card; project dates exist but are commented out (`projects.ts:28,42`) — restoring them helps close the timeline. Commissh/Ehalo are the strongest founder-facing assets and aren't labeled as shipped/client work.
- **M2. "Led the Backend Team"** (`projects.ts:69`) violates SOT rule 5 (no lead/senior claims); soften to "Built backend REST APIs…".
- **M3. AWS Lambda claims at Apexon** (`ExperienceItems.tsx:33-34`) unsupported by SOT's Azure-centric bullets → verify or `TODO(ABHISHEK)`.
- **M4. Footer tagline** (`Footer.tsx:16`) "Help you create experiences where aesthetics & functionality seamlessly come together" — broken English + UI-designer positioning; contradicts backend/AI identity on every page.
- **M5. OpenToWorkSection is dead code** — component exists with status badge + CTA but is imported nowhere; availability signal is only the decorative spinning hero text (`pointer-events-none`).
- **M6. Contact friction** — no Contact/Resume in navbar (`Navbar/index.tsx:13-24`); GitHub/LinkedIn fall back to `"#"` if env vars unset (`Hero.tsx:272,294`) — hardcode SOT URLs; contact modal sets no expectations.
- **M7. Weak metadata** — no OpenGraph/Twitter cards (LinkedIn shares render bare), `/projects` inherits stale description, no per-page metadata strategy, no sitemap/robots.
- **M8. "4 Projects" badge vs "All Projects 19" filter chip** (19 = tech count) on /projects — reads as sloppiness.

## LOW

- **L1.** `bg-[##6D71DE]` double-hash invalid CSS (`coming-soon/page.tsx:20`).
- **L2.** No `prefers-reduced-motion` guards site-wide (hero rotation, moving grids, marquee rAF, avatar ring) — CLAUDE.md requirement.
- **L3.** Experience page subtitle leans on "leadership approach" (`Experience.tsx:79`) — mismatch with deliberate mid-level positioning.
- **L4.** SE1 card chips ("Java8, MySQL") contradict its own bullet ("MongoDB, Java 11").
- **L5.** Mobile hamburger button has no accessible name; navbar typing animation truncates name on narrow widths.
- **L6.** `src/data/master-resume.json` missing (CLAUDE.md pipeline); SOT itself has 3 open TODOs (summary paragraph, four newer projects incl. OSFI RAG, skill groupings) — content phase must TODO around them.

---

## Priority order for Phases 1–4

1. Fix facts (C1, C3, C5, M2, M3, L4) — dates, metrics, stacks per SOT. Zero-fabrication gate applies.
2. Close the timeline (C2): Education entry (MASc Apr 2025, AZ-204) + Independent Software Consultant 2025–present (details `TODO(ABHISHEK)` where not in SOT) + restore project dates.
3. Canada + availability signal (H3, M5): hero/footer location line, mounted open-to-work status.
4. Identity unification (H1, H4, M4): one positioning everywhere — backend/full-stack engineer specializing in AI-enabled systems, mid-level, 3+ years.
5. Resume download (C4).
6. Skills → 4-5 curated groups, max 7 items (H5); kill the marquee.
7. Projects → case-study format with SOT metrics; OSFI RAG featured (H2, M1).
8. Footer links + tagline (H6, M4); contact CTA hardening (M6).
9. Metadata/OG/sitemap (M7), a11y/reduced-motion (L2, L5), misc (M8, L1, L3).
