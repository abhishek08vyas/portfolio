# Portfolio Experience Page Update

Use this document as the implementation brief for updating the portfolio **Experience** page.

The goal is to make the page useful for recruiters and hiring managers while keeping it concise, technically credible, and more readable than a resume.

---

## 1. Overall Direction

Update the Experience page so it shows a clear career progression:

**Crest Data Systems → Apexon → Ehalo → Traveltical**

The page should emphasize:

- Full-stack engineering
- Backend engineering
- Distributed systems
- Cloud and DevOps
- Accessibility
- Security
- Production reliability
- AI-assisted / agentic engineering
- Architecture and system design
- Enterprise SaaS
- Canadian experience

Do **not** make the page look like a long resume.

Each company should appear as a timeline entry or experience card with:

1. Company
2. Role
3. Dates
4. Location
5. Short 2–4 sentence summary
6. 3–5 key achievements
7. Technology tags
8. Optional expandable details

---

## 2. Page Intro

Replace the current Experience-page introduction with:

> I’m a full-stack software developer with 4+ years of professional experience building production systems across backend services, modern web applications, distributed systems, cloud infrastructure, and enterprise SaaS. My experience spans Java/Spring Boot and Kafka-based systems through modern Python/FastAPI, Next.js, Azure, security, accessibility, and AI-assisted engineering workflows.

Optional subtitle:

> Building reliable software across backend systems, product interfaces, cloud platforms, and AI-assisted engineering workflows.

---

# 3. Traveltical Inc.

## Display Information

**Company:** Traveltical Inc.  
**Role:** Full Stack Developer  
**Location:** Toronto, Ontario, Canada  
**Dates:** September 2025 – Present  
**Employment:** Full-time

Do not mention any client or product name.

## Summary

Use:

> I work across frontend and backend engineering on enterprise software for regulated financial-services environments. My role combines product engineering, backend development, accessibility, security, cloud architecture, automated quality engineering, and AI-assisted development.

> I delivered two core product surfaces—Dashboard and Control Testing—including eight modal-driven workflows for audit activity, evidence, risk signals, coverage, and control-testing operations.

## Key Achievements

Show 4–5 of the following by default:

- Delivered **2 core product surfaces** and **8 modal-driven workflows** spanning dashboard, control-testing, evidence, risk, and audit use cases.
- Built a reusable design system with **13 core primitives, 8 compound components, and a 50-icon system** using Next.js, React, TypeScript, Tailwind CSS, Storybook, and design tokens.
- Implemented backend functionality using **Python, FastAPI, PostgreSQL, SQLAlchemy, Alembic, Redis, and REST APIs** within a multi-tenant SaaS architecture.
- Implemented client-required **WCAG 2.1 AA accessibility practices**, including keyboard navigation, focus management, screen-reader semantics, contrast validation, axe testing, and Storybook accessibility validation.
- Validated **22/22 color-token combinations** against the WCAG AA 4.5:1 contrast threshold.
- Built automated quality coverage with **124 shared UI unit tests, 38 application tests, 45 Playwright E2E tests, and 216 accessibility-tested Storybook states**.
- Maintained reported application routes within a **200 KB first-load JavaScript budget**, with measured routes between 119 KB and 168 KB.
- Added bilingual **EN / FR-CA** localization with catalog parity checks and **309 translated UI string leaves**.
- Implemented security patterns using **OAuth 2.0, OIDC, Microsoft Entra ID, RBAC, object-level authorization, tenant isolation, audit logging, and PII-safe AI processing**.
- Built print-ready workpaper flows with dedicated print CSS and **6 Playwright print-emulation tests**.

## AI-Assisted Engineering

Include this as either a dedicated subsection or highlighted callout:

> I use an AI-assisted engineering workflow with **Claude Code and OpenAI Codex** for implementation acceleration, test generation, code review, architecture validation, and defect detection. I also developed coding-standard-driven review agents that evaluate major code changes against architecture rules, API contracts, security controls, accessibility requirements, and quality standards before final human review.

Do **not** describe the work as “AI generated the code”.

Preferred phrasing:

> **Agentic engineering workflow:** implement → test → independent AI review → remediate → human validation.

## Accessibility

Make accessibility visible as a first-class capability, not just a technology tag.

Include:

- WCAG 2.1 AA
- Keyboard navigation
- Focus management
- Screen-reader semantics
- Semantic HTML
- axe
- Storybook accessibility testing
- Contrast validation
- Font-size preferences
- Responsive design
- AODA-aware development
- EN / FR-CA localization

## Technology Tags

Use:

`Next.js`  
`React`  
`TypeScript`  
`Python`  
`FastAPI`  
`PostgreSQL`  
`SQLAlchemy`  
`Redis`  
`Azure`  
`Docker`  
`OAuth 2.0`  
`OIDC`  
`Microsoft Entra ID`  
`Storybook`  
`Vitest`  
`Playwright`  
`WCAG 2.1 AA`  
`Claude Code`  
`OpenAI Codex`

---

# 4. Ehalo

## Display Information

**Company:** Ehalo  
**Role:** Full Stack Developer Intern  
**Location:** Remote, Canada  
**Dates:** May 2025 – August 2025

## Summary

Use:

> At Ehalo, I owned the development of a personalized trip-inquiry workflow spanning the customer-facing frontend, REST API, business logic, and relational persistence.

> The feature covered the full journey from collecting trip requirements through draft persistence, guest submission, validation, status tracking, and confirmation.

## Key Achievements

Use 4–5:

- Built a responsive **five-step personalized trip inquiry workflow** using Next.js, React, TypeScript, and Tailwind CSS.
- Designed and implemented REST APIs under `/api/v1/inquiries` using Node.js, Express.js, TypeScript, TypeORM, and MySQL.
- Added **draft saving and recovery**, allowing users to resume partially completed inquiries.
- Added **guest inquiry support**, duplicate detection, activity preferences, status tracking, and reference-number responses.
- Structured the inquiry feature using **Controller → Service → Repository → Entity** layers.
- Introduced TypeORM repositories and entities while preserving compatibility with an existing MySQL query-based data layer.
- Added Swagger/OpenAPI documentation and API validation.
- Added production-oriented observability using **Winston**, `cls-rtracer`, structured logging, and health checks.
- Worked within security controls including Helmet/CSP, CORS restrictions, rate limiting, Firebase authentication, request validation, and production-safe error handling.

## Technology Tags

`Next.js 14`  
`React 18`  
`TypeScript`  
`Node.js`  
`Express.js`  
`TypeORM`  
`MySQL 8`  
`Swagger / OpenAPI`  
`Firebase Admin SDK`  
`Winston`  
`Vercel`

---

# 5. Apexon

## Display Information

**Company:** Apexon (formerly Infostretch)  
**Role 1:** Engineer II  
**Dates:** January 2023 – August 2023  

**Role 2:** Engineer I  
**Dates:** August 2021 – January 2023  

**Location:** Ahmedabad, Gujarat, India

Show the promotion clearly instead of collapsing the whole period under Engineer II.

## Summary

Use:

> At Apexon, I worked on enterprise software across healthcare, loyalty, and integration-heavy environments using Java, Spring Boot, microservices, Kafka, MySQL, MongoDB, Azure, and AWS.

> My work expanded from backend implementation and integrations into production support, mentoring, code reviews, performance optimization, and architecture/design reviews with Solution Architects.

## Key Achievements

Use 5–6:

- Designed an asynchronous patient-data synchronization workflow using **Java, Spring Boot, and Apache Kafka**, improving throughput by approximately **40%**.
- Built and optimized REST APIs and Spring Boot microservices for enterprise healthcare and loyalty systems.
- Developed **Azure Functions** for asynchronous and serverless processing.
- Integrated external platforms including **Magento, Retail Unity, Loyaltics, Lifetrentz, and Akhil Systems**.
- Worked with **MySQL, MongoDB, JPA, and named queries** across relational and NoSQL persistence layers.
- Resolved **50+ L3 production incidents**, documenting fixes and troubleshooting production failures.
- Used **Dynatrace and Kibana** to monitor application health, diagnose issues, and reduce runtime problems.
- Mentored junior developers through task planning, technical guidance, and code reviews.
- Participated in architecture and design reviews with Solution Architects.

## Technology Tags

`Java 8 / 11`  
`Spring Boot`  
`Spring MVC`  
`Microservices`  
`REST APIs`  
`Apache Kafka`  
`MySQL`  
`MongoDB`  
`JPA`  
`Azure Functions`  
`Azure`  
`AWS`  
`Dynatrace`  
`Kibana`

---

# 6. Crest Data Systems

## Display Information

**Company:** Crest Data Systems  
**Role:** Site Reliability Engineer  
**Location:** Ahmedabad, Gujarat, India  
**Dates:** July 2020 – August 2021

## Summary

Use:

> At Crest Data Systems, I worked on Splunk CloudOps automation and distributed Splunk environments, gaining experience in reliability engineering, CI/CD, production troubleshooting, deployment automation, and infrastructure operations.

## Key Achievements

Use 3–4:

- Developed **Jenkins pipelines, Python automation scripts, and Shell scripts** for development, testing, troubleshooting, and deployment workflows.
- Automated operational workflows across distributed Splunk environments, reducing manual effort by approximately **60%**.
- Troubleshot **Indexer Clustering, Search Head Clustering, on-premise clusters, and multisite deployments**.
- Supported production monitoring, incident resolution, and high-availability operations.

## Technology Tags

`Splunk`  
`Jenkins`  
`Python`  
`Shell`  
`CI/CD`  
`Distributed Systems`  
`Monitoring`  
`Production Support`

---

# 7. Earlier Experience

Do not give the earlier internships the same visual weight as the main roles.

Place them inside either:

- an expandable **Earlier Experience** section, or
- a compact timeline at the bottom.

## Infostretch — Trainee Engineer

Use:

> Worked with Java, Spring Boot, REST APIs, MongoDB, AWS, Apache Kafka, ActiveMQ, Redis, bug fixing, and unit testing during early software-engineering training and internship assignments.

## Kals Infotech — PHP Developer Intern

Use:

> Early web-development internship focused on practical application development and foundational software-engineering experience.

## CHARUSAT — Web Developer

Use:

> Contributed to development of the website for the Information Technology department’s CONNISANCE magazine.

---

# 8. Experience Page Layout

Preferred structure:

```text
Experience
│
├── Traveltical Inc.
│   ├── Role / Dates / Location
│   ├── Summary
│   ├── Highlight Metrics
│   ├── Achievements
│   ├── Technology Chips
│   └── Optional Expand Details
│
├── Ehalo
│
├── Apexon
│   ├── Engineer II
│   └── Engineer I
│
├── Crest Data Systems
│
└── Earlier Experience
```

Use a clean vertical timeline or stacked cards.

Avoid:

- giant resume-style bullet walls
- progress bars for skills
- star ratings
- percentage proficiency
- too many animations
- horizontal carousels for experience
- company logos if they visually overwhelm the content

---

# 9. Recommended Visual Hierarchy

Each experience card should visually prioritize:

### Level 1
Company + Role

### Level 2
Dates + Location

### Level 3
Short narrative summary

### Level 4
Key achievements

### Level 5
Technology tags

### Optional
Expandable engineering details

---

# 10. Add Highlight Metrics

For Traveltical, show a small metrics row:

- **2** Core Product Surfaces
- **8** Workflow Use Cases
- **45** E2E Tests
- **216** Accessibility-Tested Storybook States

Optional additional metrics:

- **22/22** WCAG Contrast Checks
- **309** Localized UI Strings
- **200 KB** Route Budget

Do not turn every job into a statistics dashboard.

---

# 11. Add Capability Tags to the Page

Above or below the timeline, optionally add:

`Full Stack Engineering`  
`Backend Development`  
`Microservices`  
`Distributed Systems`  
`Cloud`  
`Accessibility`  
`Security`  
`Observability`  
`AI-Assisted Engineering`

These should act as descriptive tags, not proficiency ratings.

---

# 12. Mobile Responsiveness

The Experience page must work well at:

- 375px mobile
- 768px tablet
- 1024px tablet
- standard desktop widths

On mobile:

- stack date/location below role
- allow technology tags to wrap
- avoid fixed-width timeline gutters
- avoid horizontally scrolling cards
- keep achievement bullets readable

---

# 13. Accessibility Requirements for the Portfolio Itself

Apply the same accessibility standards represented in the experience content:

- semantic heading hierarchy
- keyboard-accessible controls
- visible focus states
- sufficient color contrast
- no information conveyed by color alone
- proper `aria-expanded` for expandable sections
- meaningful button labels
- reduced-motion respect where applicable
- responsive text scaling
- accessible links
- no hidden focus traps

---

# 14. SEO / Metadata

Update page metadata around terms such as:

- Full Stack Developer
- Backend Developer
- Python Developer
- Java Developer
- React Developer
- FastAPI
- Spring Boot
- Microservices
- Distributed Systems
- Toronto Software Developer
- Canada Software Developer
- Accessibility
- Cloud Engineering
- AI-Assisted Software Development

Do not keyword-stuff visible text.

---

# 15. Content Rules

Follow these rules when updating the page:

1. Do not invent metrics.
2. Do not invent client names.
3. Do not expose confidential product details.
4. Do not claim formal certification of WCAG/AODA compliance.
5. Say **WCAG 2.1 AA practices**, **WCAG-aligned**, or **client-required accessibility work**.
6. Do not describe Claude or Codex as replacing engineering judgment.
7. Human review remains the final validation step.
8. Do not claim ownership of Vercel deployment at Ehalo.
9. Show the Apexon promotion clearly.
10. Keep wording technically specific but recruiter-readable.

---

# 16. Codex / Claude Implementation Instructions

Use this workflow:

1. Inspect the current Experience page and component structure.
2. Preserve the existing visual language of the portfolio where possible.
3. Refactor only where required for readability, responsiveness, or accessibility.
4. Convert experience data into a reusable structured object or array.
5. Render each role from data rather than hardcoding repeated JSX.
6. Use reusable `ExperienceCard`, `Metric`, and `TechTag` components if appropriate.
7. Keep the page server-rendered unless interactivity requires a client component.
8. Use expandable sections only if the page becomes too long.
9. Run lint, type-check, tests, and production build.
10. Review the final output for mobile responsiveness and accessibility.

Suggested data shape:

```ts
type Experience = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string[];
  achievements: string[];
  technologies: string[];
  metrics?: {
    value: string;
    label: string;
  }[];
  previousRoles?: {
    role: string;
    startDate: string;
    endDate: string;
  }[];
};
```

---

# 17. Acceptance Criteria

The update is complete when:

- Traveltical, Ehalo, Apexon, and Crest are visible in chronological order.
- Apexon clearly shows Engineer I → Engineer II progression.
- Traveltical includes accessibility and AI-assisted engineering work.
- Both **Claude Code** and **OpenAI Codex** are represented appropriately.
- The page remains readable in under 2–3 minutes.
- Technology tags are concise and not duplicated excessively.
- The page works on mobile, tablet, and desktop.
- The page is keyboard accessible.
- No confidential client/product names appear.
- No unsupported metrics are added.
- No skill-rating bars or arbitrary proficiency percentages are introduced.
- Lint, type-check, and production build pass.

---

# 18. Final Review Prompt for Codex / Claude

After implementation, run a separate review pass using this prompt:

> Review the Experience page as a senior software engineer and technical recruiter. Check for factual consistency, excessive claims, duplicated wording, ATS/recruiter keyword coverage, accessibility, responsive behavior, React/Next.js best practices, component reuse, and visual hierarchy. Flag anything that sounds inflated, vague, or AI-generated. Do not alter factual metrics without explicit approval.

Then manually review the suggested changes before merging.
