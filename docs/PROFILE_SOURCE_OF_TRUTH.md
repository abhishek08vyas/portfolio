# Profile Source of Truth — Abhishek Vyas

> **Purpose:** This file is the single canonical source of truth for Abhishek Vyas's professional profile. The résumé, the portfolio website (`abhishek-vyas.vercel.app`), and the LinkedIn profile must all stay consistent with the facts and rules below.
>
> **For Claude Code:** When updating the website or résumé, treat this file as authoritative. If you find any value on the site/résumé that conflicts with this file, fix it to match this file (unless the user explicitly updates this file first). After making changes, flag any remaining inconsistencies you couldn't resolve. **Do not invent metrics, dates, titles, or technologies that are not in this file.** When the user adds a new project or role, update this file first, then propagate to the website and résumé.

**Last updated:** 2026-07-16 (reconstructed from conversation history; see change log)

---

## ⚠️ Consistency rules (enforce these everywhere)

These are deliberate decisions. Keep them identical across résumé, website, and LinkedIn:

1. **Experience total = "3+ years"** of professional software experience. **Never "4+".** (Internships from 2019 are not counted in the headline number. They may appear as history but must not inflate the "years of experience" claim.)
2. **Experience order on the résumé = reverse-chronological (newest first):** Wendy's → Apexon → Crest.
3. **Canonical employment timeline (no overlaps):**
   - Crest Data Systems — Jun 2020 – Aug 2021
   - Apexon — Aug 2021 – Aug 2023 (single entry; promotion noted)
   - Wendy's — Dec 2024 – Present
   - *Do not reintroduce overlapping dates or split Apexon into two separate date-conflicting entries.*
4. **Apexon is ONE role with a promotion**, shown as "Software Engineer → Software Engineer II". Do not list two Apexon entries with conflicting/overlapping months.
5. **Target positioning = mid-level**, titles: "Software Engineer", "Full Stack Developer", "Backend Developer". **Do not use** "Senior", "Staff", "Principal", or "Lead" anywhere.
6. **Location framing:** Physically in **St. John's, NL, Canada**. Public-facing location should signal openness, e.g. **"St. John's, NL · Open to relocation · Remote-ready"** (résumé) or real location + LinkedIn "Open to Work" targeting Remote/Toronto/Calgary/Edmonton. **Do not claim to live in a city he does not live in.**
7. **ML framing is honest/modest** — engineering/MLOps emphasis, not research-scientist claims.

---

## Contact & headline

- **Name:** Abhishek Vyas
- **Email:** abhishekvvyas@gmail.com
- **GitHub:** https://github.com/abhishek08vyas
- **LinkedIn:** https://www.linkedin.com/in/abhishekvvyas/
- **Portfolio:** https://abhishek-vyas.vercel.app/
- **Headline title:** Software Engineer / Full Stack Developer (mid-level, broad — confirmed choice)
- **Summary framing:** Lead with ~3 years of professional experience + Canadian MASc + backend/cloud strengths. Balance across backend (Java/Spring Boot, Node.js/TypeScript), event-driven systems (Kafka), and reliability/DevOps — do **not** over-index on Azure/SaaS as the whole identity.
- `TODO(ABHISHEK): paste the exact canonical summary paragraph from the latest resume — the verbatim wording is in the resume files from the "Career transition" chat outputs.`

---

## Experience (canonical)

### 1. Shift Supervisor — Wendy's (East to West Holdings Inc.)
- **Dates:** Dec 2024 – Present
- **Location:** St. John's, NL, Canada
- **Context:** Concurrent with graduate studies / post-graduation (survival role during transition back into tech)
- **Bullets:**
  - Supervise daily operations and a team of staff, coordinating workflows under high-pressure conditions while maintaining safety, quality, and service standards.
  - Train new team members and resolve real-time operational issues — transferable leadership, ownership, and problem-solving while transitioning back into a software engineering role.

### 2. Software Engineer → Software Engineer II — Apexon (formerly Infostretch)
- **Dates:** Aug 2021 – Aug 2023 (one role; promoted to Engineer II in 2023)
- **Location:** Ahmedabad, India
- **Bullets:**
  - Designed and optimized production REST APIs in Node.js (TypeScript) and Java, introducing asynchronous Azure Functions that increased system throughput by **10%** for high-volume data workloads.
  - Engineered an asynchronous data-synchronization pipeline using Apache Kafka and Java, improving throughput by **40%** and enabling reliable data exchange across high-traffic healthcare systems.
  - Reduced application errors by **40%** by re-architecting frontend state management with Redux, stabilizing performance across complex data flows.
  - Orchestrated zero-downtime production deployments using Blue-Green and Canary strategies on Azure DevOps, supporting **1,000+ daily active users at 99.9% uptime**; mentored junior engineers and contributed to architectural decisions that reduced recurring technical debt.

### 3. Site Reliability Engineer — Crest Data Systems
- **Dates:** Jun 2020 – Aug 2021
- **Location:** Ahmedabad, India
- **Bullets:**
  - Built end-to-end observability for production SaaS systems using Azure Monitor and ELK/Kibana dashboards with proactive alerting, reducing mean time to resolution for critical incidents.
  - Automated CI/CD pipelines and operational workflows in Python, reducing manual deployment overhead by **60%** across Azure DevOps environments.
  - Led P0/P1 incident response for mission-critical healthcare applications, sustaining **99.9%+ uptime** while applying security and compliance best practices across cloud infrastructure.

> **Earlier history (optional on site, NOT counted in "3+ years"):** Infostretch trainee/intern roles (2019), short internships (2018, 2020). Include on LinkedIn history if desired, but do not let them change the headline experience number or create date overlaps.

---

## Projects (canonical)

> Website may show more projects than the résumé. The résumé features the two strongest for the target roles. Keep tech stacks accurate.

### Expense Tracker — Full-Stack SaaS Application (2025)
- **Stack:** Node.js, Fastify, Next.js, PostgreSQL, Prisma, Docker, Jest, Vercel
- **Résumé bullet:** Built a secure full-stack application (Node.js, Fastify, Next.js, PostgreSQL, Prisma, Docker) with JWT/SSO authentication, modular components, and comprehensive Jest coverage; optimized API response times by **20%** for real-time financial insights.
- **Links:** Code https://github.com/abhishek08vyas/ExpenseTracker-Backend · Demo https://expense-tracker-mun.vercel.app/

### Real-Time Gesture Recognition — iOS / ML (2024)
- **Stack:** Python, TensorFlow, OpenCV, MediaPipe, scikit-learn, FastAPI, Docker
- **Résumé bullet:** Developed a real-time hand-gesture recognition model (Python, TensorFlow, OpenCV, MediaPipe) at **78% accuracy across 40 classes** and deployed it to edge devices, owning the full ML lifecycle from preprocessing to low-latency inference.
- **Links:** Code https://github.com/abhishek08vyas/gesture_recognition

### Newer projects (added 2026-07-16 during NetBenefit/FocusFS tailoring)
- `TODO(ABHISHEK): four newer private projects (including the two LLM-heavy ones, e.g. the hybrid RAG pipeline for OSFI regulatory document search) were added to the latest version of this file today. Copy their exact entries from the PROFILE_SOURCE_OF_TRUTH.md downloadable in the "Career transition to tech with shift supervisor schedule" chat, or re-add them here with verified stacks and no invented metrics.`

### Other website projects (display-only; verify before featuring on résumé)
- **Commissh** — ticketing site (Next.js, TypeScript, React, Docker, AWS, Tailwind). Demo: https://commissh.com/
- **Ehalo** — trip planner app (MySQL, MongoDB, React, Docker). Demo: App Store listing.

---

## Education & Certifications

- **Master of Applied Science, Computer Engineering** — Memorial University of Newfoundland, St. John's, NL, Canada — **Apr 2025** (program Sep 2023 – Apr 2025) — CGPA 3.62/4.0. Relevant coursework: System Design, SOLID Principles, Software Design & Specification.
- **Bachelor's, Information Technology** — Charotar University of Science and Technology (CHARUSAT), India — 2016 – 2020.
- **Certification:** Microsoft Certified: Azure Developer Associate (AZ-204).

---

## Skills (canonical groupings)

- `TODO(ABHISHEK): the exact skill groupings section couldn't be recovered verbatim. Until replaced with the original, use these conservative groups drawn only from verified facts above — Backend: Java, Spring Boot, Node.js, TypeScript, Python, FastAPI; Frontend: React, Next.js, Redux, Tailwind CSS; Data & Messaging: PostgreSQL, MongoDB, MySQL, Redis, Apache Kafka; Cloud & DevOps: Azure (AZ-204), AWS, Docker, Azure DevOps, CI/CD, ELK/Kibana, Azure Monitor; ML (modest framing): TensorFlow, scikit-learn, MediaPipe.`

---

## Sync checklist (run when updating site or résumé)

When Claude Code edits the website or résumé, verify all of the following match this file:

- [ ] Years of experience reads **3+** (never 4+) everywhere.
- [ ] Résumé experience order is **newest-first** (Wendy's → Apexon → Crest).
- [ ] Employment dates match the canonical timeline; **no overlaps**.
- [ ] Apexon is **one** entry (SWE → SWE II), not two conflicting entries.
- [ ] No "Senior/Staff/Principal/Lead" titles anywhere.
- [ ] Location framing signals openness; no false city claim.
- [ ] ML claims stay modest (engineering/MLOps emphasis, not research-scientist).
- [ ] All metrics match exactly (10%, 40%, 40%, 60%, 99.9%, 1,000+ users, 20%, 78%/40 classes). No new invented numbers.
- [ ] Contact info, GitHub/LinkedIn/portfolio URLs match.
- [ ] Skills groupings consistent with this file.

## Change log

- 2026-06-01 — Initial source of truth created. Fixed date overlaps (Crest/Apexon), standardized to 3+ years, set newest-first résumé order, mid-level positioning, relocation/remote location framing.
- 2026-07-16 — Reconstructed in a new chat from conversation history after the local copy was unavailable. Two sections marked TODO (summary paragraph verbatim; four newer projects added earlier today; skill groupings verbatim) — replace with the originals from the latest downloadable copy before the overnight run if possible.
