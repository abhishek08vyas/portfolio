# Content Plan — Phase 1 (Overnight Revamp)

**Branch:** `feature/1.5` · **Inputs:** docs/AUDIT.md, docs/PROFILE_SOURCE_OF_TRUTH.md (SOT)
**Authors:** design-ux-architect (IA), design-visual-storyteller (narrative), design-brand-guardian (voice) · merged by lead

**Positioning:** Backend & full-stack software engineer building AI-enabled systems — RAG pipelines, event-driven architecture, observability. 3+ years · MASc Computer Engineering (Memorial University, Apr 2025) · AZ-204 · St. John's, NL · remote-Canada roles primary, freelance secondary.

## Lead decisions (conflict resolutions)

- **Wendy's does NOT appear on the site** (résumé only, per SOT:16/69). Owner's phase instructions define the site timeline as Consultant → MASc → Apexon → Crest. The timeline is gapless without it.
- **OSFI RAG ships as the featured project now**, using only owner-provided facts (hybrid RAG pipeline for regulatory document search, OSFI, consulting engagement 2025–present) + `TODO(ABHISHEK)` for architecture details and outcomes. No invented metrics — Outcome slot reads "In active development for a consulting client" until facts arrive.
- **/coming-soon is deleted** with a permanent redirect to `/` in next.config.ts.
- **Work-authorization wording**: not in SOT → the site shows location + Canadian degree only; any explicit permit claim is `TODO(ABHISHEK)`.

---

## 1. The narrative arc (the one story every page tells)

3+ years in India building the backbone of AI-era systems — Kafka event pipelines moving healthcare data at 40% higher throughput, observability and P0 incident response holding 99.9%+ uptime — then a deliberate bet: moved to Canada for a MASc in Computer Engineering (Memorial, Apr 2025) to formalize that systems foundation. Now based in St. John's, NL, working as an independent software consultant building AI-enabled systems — most recently a hybrid RAG pipeline for regulatory document search (OSFI). The "gap" isn't a gap; it's the plot: production engineer → graduate systems training → AI-systems consultant.

## 2. Canonical identity strings (use verbatim; only these adaptations permitted)

| Surface | Exact string |
|---|---|
| Meta title | `Abhishek Vyas \| Software Engineer — AI-Enabled Systems` |
| Meta description | `Backend & full-stack engineer, 3+ years. AI-enabled systems: RAG pipelines, event-driven architecture, observability. MASc (Memorial, 2025) · St. John's, NL.` |
| Hero h2 | `Software Engineer · Backend & AI-Enabled Systems` |
| OG description | `Backend & full-stack software engineer with 3+ years' experience building AI-enabled systems — RAG pipelines, event-driven architecture, observability. MASc, Memorial University (Apr 2025) · AZ-204 · St. John's, NL · Remote-ready.` |
| Footer tagline | `Backend & full-stack software engineer building AI-enabled systems. St. John's, NL · Open to relocation · Remote-ready.` |
| Status line (mandated, near OPEN TO WORK badge) | `Building AI/RAG systems · Open to backend & AI roles, remote Canada-wide` |
| Location eyebrow | `St. John's, NL · Open to relocation · Remote-ready` |

The specialization triple is always "RAG pipelines, event-driven architecture, observability" in that order.

## 3. Sitemap & routes

| Route | Verdict |
|---|---|
| `/` | Keep; restructure: Hero → Featured Work (OSFI RAG) → Now & Recent (3-entry snapshot) → Skills (grouped) → Selected Projects → Contact band → Footer |
| `/experience` | Keep; rebuild timeline data + de-leadership the subtitle |
| `/projects` | Keep; featured case study pinned (`id="osfi-rag"`) + case-study cards; fix "19" filter-chip bug |
| `/coming-soon` | DELETE; permanent redirect → `/` (kills L1's invalid CSS too) |
| Resume | Static `public/resume/Abhishek_Vyas_Resume.pdf` — `TODO(ABHISHEK): export PDF`. Placeholder + TODO if missing. No new route. |
| Contact | ContactModal + mailto (no new page); Vercel serverless handler stubbed behind env var (Phase 3) |

**Navbar:** Logo/Name · Experience · Projects · [Download Resume] (outline) · [Contact] (primary → modal). Drop "Home" text item. Hamburger gets `aria-label`.
**Footer 3 columns:** Identity (tagline + location) · Explore (Home/Experience/Projects/Resume) · Get in touch (email, GitHub, LinkedIn hardcoded from SOT:33-34, "Start a conversation" → modal, freelance availability line). Blog/Bucket List/Book a call deleted.

## 4. Homepage above-the-fold contract (hero answers all six, both viewports)

| Question | Slot |
|---|---|
| Who/what | h1 name + canonical h2 |
| Level | "3+ years" in intro copy (never 4+) |
| Where | Location eyebrow line (static — replaces rotating multilingual greeting) |
| Available? | Mounted OPEN TO WORK badge + mandated status line |
| Proof | "MASc Computer Engineering, Memorial University (Apr 2025) · AZ-204" + one attributed metric |
| Action | [Download Resume] + [Contact] + GitHub/LinkedIn (hardcoded URLs, kill `"#"` fallbacks) |

Hero keeps ONE 6-chip skill line (TypeScript/Node.js, Java/Spring Boot, Python, Kafka, Azure, RAG/LLM pipelines). Avatar image preserved.

## 5. Experience timeline spec (`src/constants/ExperienceItems.tsx` rewrite)

Order (newest first, SOT rules 2-4; continuous Jun 2020 → Present):

1. **Independent Software Consultant** — 2025 – Present · St. John's, NL (Remote). Beats: AWS migration audit; rebuild SOW work; hybrid RAG pipeline for OSFI regulatory document search (links to featured case study). NO metrics (none in SOT). `TODO(ABHISHEK): exact start month; engagement details; client nameability.`
2. **MASc Computer Engineering, Memorial University** — Sep 2023 – Apr 2025 · St. John's, NL. Education-styled card IN the timeline (its job is to visually plug the gap). CGPA 3.62/4.0; coursework System Design, SOLID, Software Design & Specification; AZ-204 badge on this card (no issue date in SOT). `TODO(ABHISHEK): research focus/thesis topic; AZ-204 issue date.`
3. **Software Engineer → Software Engineer II — Apexon** — Aug 2021 – Aug 2023 · Ahmedabad, India. ONE entry. Bullets from SOT:56-59 verbatim, ordered: Kafka +40% throughput → async Azure Functions +10% → Blue-Green/Canary, 1,000+ DAU at 99.9% uptime, mentored juniors → Redux −40% errors. DELETE: "<90ms", "8K+ Daily", "10% tech debt", AWS Lambda claims. Reconcile skill chips with bullets.
4. **Site Reliability Engineer — Crest Data Systems** — Jun 2020 – Aug 2021 (CORRECTED dates + plural name). Bullets from SOT:65-67: observability/MTTR → Python CI/CD −60% deployment overhead → P0/P1 incident response, 99.9%+ uptime ("Ran/Handled", not "Led").

2019 internships omitted. Wendy's omitted (lead decision above).

## 6. Project case-study template + beat sheets

Template per project: **Problem → Approach → Architecture → Outcome** + role label + year + links. Outcome = SOT metric or shipped/live status; never an invented number.

- **OSFI RAG Pipeline** (FEATURED · Consulting · 2025–present): Problem: regulatory teams need answers from dense OSFI documents; keyword search fails on regulatory language. Approach: hybrid retrieval. Architecture/Outcome: `TODO(ABHISHEK): retrieval strategy, chunking, eval method, stack (embedding model, vector store, LLM, orchestration, hosting), verifiable results.` Status line: "In active development for a consulting client."
- **Expense Tracker** (Personal · 2025, SOT:77-80): Node.js/Fastify/Next.js/PostgreSQL/Prisma/Docker/Jest/Vercel; JWT/SSO; **20% API response-time optimization**. Spring Boot/Java/AWS claims deleted.
- **Gesture Recognition** (MASc-era · 2024, SOT:83-85): Python/TensorFlow/OpenCV/MediaPipe/scikit-learn/FastAPI/Docker; **78% accuracy across 40 classes**; edge deployment; "owned the full ML lifecycle" framing (engineering, not research). Remove PostgreSQL/AWS from skills.
- **Commissh** (Client work · Shipped, SOT:91): "Built frontend..." role-scoped; live at commissh.com is the outcome; fix truncated description. `TODO(ABHISHEK): year, exact scope.`
- **Ehalo** (Client/team work · Live on App Store, SOT:92): "Built backend REST APIs with Express.js (MVC) and MySQL…" — NO "Led the Backend Team". Strip marketing copy. `TODO(ABHISHEK): year, exact contribution.`

## 7. Skills replacement (kills the 53-item marquee)

Static grid, 5 groups (SOT:106 conservative set — itself a SOT TODO, so keep conservative), max 7 items each, ordered to match positioning:

1. **Backend** — Java, Spring Boot, Node.js, TypeScript, Python, FastAPI
2. **Data & Messaging** — PostgreSQL, MongoDB, MySQL, Redis, Apache Kafka
3. **Cloud & DevOps** — Azure (AZ-204), AWS, Docker, Azure DevOps, CI/CD, ELK/Kibana, Azure Monitor
4. **AI / ML (applied)** — TensorFlow, scikit-learn, MediaPipe, RAG pipelines `TODO(ABHISHEK): confirm RAG-stack items to list once SOT:88 is filled`
5. **Frontend** — React, Next.js, Redux, Tailwind CSS

Dropped (no SOT backing / interview risk): Kubernetes, Saga, Firebase, Flutter, Heroku, Swift, Flask, Splunk-as-skill, concept tags ("Asynchronous", "Serverless", "Microservices").

## 8. Proof inventory (closed metric set — each metric gets ONE headline placement + its home bullet)

| Proof | Headline surface | Bullet home |
|---|---|---|
| 40% throughput (Kafka, healthcare) | Home proof band | Apexon b1 |
| 1,000+ DAU · 99.9% uptime | Home proof band (paired) | Apexon b3 / Crest b3 |
| 60% deployment-overhead ↓ | — | Crest b2 |
| 10% throughput (Azure Functions) | — | Apexon b2 |
| 40% error ↓ (Redux) | — | Apexon b4 |
| 20% API response ↓ | Expense Tracker Outcome | — |
| 78% / 40 classes | Gesture Outcome | — |
| MASc Apr 2025, CGPA 3.62 | Hero credential line | Timeline entry 2 |
| AZ-204 | MASc card badge | Skills group 3 |

Home proof band = exactly three attributed stats: "1,000+ DAU · 99.9% uptime · 40% throughput gain (Kafka) — at Apexon".

## 9. Voice rules (normative — verification gate greps against these)

**Principles:** (P1) Evidence over adjectives — delete any adjective the sentence survives without. (P2) One identity everywhere. (P3) Plain grammatical English, ≤20 words in taglines/CTAs. (P4) Name the system, mechanism, and outcome. (P5) Mid-level, honest ML (build/deploy/inference verbs; no research claims).

**Hard bans (grep list):** `solution-driven|results-driven|passionate|dedicated to|thrive|innovative|cutting-edge|impactful|powerful|comprehensive|robust|seamless|practitioner|Freelancer|Senior|Staff|Principal|rockstar|ninja|guru|10x` · exclamation marks in all rendered copy · "4+ years" · invented numbers · "Led the/Lead" in projects · rotating greetings ("Konnichiwa!" dies) · design-studio language.
**Soft bans** (need evidence in-sentence): scalable, production-ready, high-performance, reliable.

**Metric format:** `[verb] + [system/mechanism] + [metric]`. Numbers never stand alone; "1,000+" with comma; the two 40% figures always name their distinct mechanisms.

**Tone per surface:** Hero: confident, concrete, first person. Experience bullets: action → mechanism → measured outcome, ≤30 words, 3-4 per role. Projects: problem-first. CTAs: verb-first ≤4 words ("Download resume", "Email me"). Errors: what happened + one exit, no jokes.

**Dancing Script signature:** KEEP — navbar wordmark (write-on animation gated by `prefers-reduced-motion`) + optional footer sign-off ("— Abhishek"). Never in headings, body, buttons, metrics, or anything a recruiter reads for information. Navy palette unchanged.

**Multilingual greeting:** REMOVED. Replaced by the static location eyebrow. (Optional single static "Hi, I'm" in h1; period, not "!".)

## 10. Verification checklist (Phase 2 gate — run per page)

1. Canonical identity string present; no alternate persona anywhere.
2. "3+ years" on-page in hero; never "4+".
3. Zero hard-ban terms; zero `!` in rendered copy.
4. Every number ∈ closed set {10%, 40%×2, 60%, 99.9%, 1,000+, 20%, 78%/40}, exactly formatted, system-attributed in-sentence.
5. Titles/dates match SOT canonical timeline; Apexon ONE entry; no overlaps; Crest = Jun 2020 – Aug 1 2021, plural "Systems".
6. Location renders as the canonical string; "Ahmedabad, India" only inside past-role entries.
7. MASc + AZ-204 appear at least once on the home page.
8. Project stacks match SOT (Expense Tracker = Fastify, no Spring Boot/Java/AWS; Gesture = no PostgreSQL/AWS).
9. No led/leadership claims in projects/subtitles.
10. Every CTA/link resolves (no /coming-soon, no `href="#"`); all external links preserved (GitHub, LinkedIn, demos, App Store).
11. No rotating greeting; signature font only in navbar/footer sign-off; animations respect reduced-motion.
12. Content gaps are `TODO(ABHISHEK)` comments, never improvised prose.
13. Avatar image (`/images/av2.png` + hero avatar) preserved.

## 11. Consolidated TODO(ABHISHEK) backlog (for morning review)

1. OSFI RAG details: problem statement nameability, retrieval strategy, chunking, eval, full stack, any verifiable outcome (SOT:88).
2. Consultant role: exact start month, engagement details (AWS migration audit / SOW rebuild specifics), client references.
3. Work-permit wording (if any explicit claim is wanted).
4. Resume PDF export → `public/resume/Abhishek_Vyas_Resume.pdf`.
5. MASc research focus / thesis topic; AZ-204 issue date.
6. Verbatim canonical summary paragraph (SOT:38) + verbatim skill groupings (SOT:106).
7. Commissh/Ehalo: years, team size, exact role scope.
8. Availability wording: full-time start date vs freelance capacity.
