# AGENTS.md

Agent guide for this portfolio. For project setup, commands, stack, and conventions, see [CLAUDE.md](./CLAUDE.md) — that file is the source of truth for how to work in this repo.

## Subagent roster (`.claude/agents/`)

### Design & UX

| Agent | Use for |
|---|---|
| `design-ux-architect` | Information architecture, page flows, how a visitor moves through the site |
| `design-ui-designer` | Visual design, layout, spacing, typography, component styling |
| `design-ux-researcher` | Understanding what recruiters/hiring managers look for in a portfolio |
| `design-persona-walkthrough` | Simulated walkthroughs of the site as recruiter / hiring manager / fellow developer; flags friction |
| `design-whimsy-injector` | Micro-interactions, hover states, delightful details |
| `design-brand-guardian` | Consistent personal brand: colors, tone, typography across pages |
| `design-visual-storyteller` | Presenting projects and career as a narrative |

### Build & quality

| Agent | Use for |
|---|---|
| `engineering-frontend-developer` | Implementing UI in Next.js / React / Tailwind / shadcn |
| `testing-accessibility-auditor` | WCAG checks, keyboard nav, contrast, reduced motion |
| `testing-performance-benchmarker` | Load performance, Core Web Vitals, Lighthouse |
| `marketing-seo-specialist` | Metadata, Open Graph, structured data, discoverability |

### Career & resume

| Agent | Use for |
|---|---|
| `resume-tailor` | Tailoring the master resume (`src/data/master-resume.json` — doesn't exist yet; seed it from `src/constants/ExperienceItems.tsx` + `src/data/projects.ts` on first use) to a specific job description: ATS keyword alignment, bullet rewrites — never fabricating experience |
| `recruitment-specialist` | Recruiter-side perspective: how the resume and portfolio read to a recruiter, screening criteria, role-fit signals |

## Recommended workflows

**Website improvement:**
1. `design-ux-architect` — plan the structure/flow change
2. `design-ui-designer` — design the visuals
3. `engineering-frontend-developer` — implement
4. `design-persona-walkthrough` — walk through as a recruiter; iterate on friction
5. `testing-accessibility-auditor` + `testing-performance-benchmarker` — audit before shipping

**Job application:**
1. `resume-tailor` — tailor master resume against the job description
2. `recruitment-specialist` — review the result as a recruiter would; iterate

## Repo facts every agent should know

- **Owner/subject:** Abhishek Vyas — Full-Stack Developer with AI/RAG focus, 3+ years (Apexon SWE→SWE II, Crest Data Systems SRE, MASc Memorial 2025, now independent consultant). Site identity: "Full-Stack Developer · AI & RAG Pipelines" (owner decision 2026-07-18 — don't advertise as "backend engineer").
- **Content sources (edit these, not components):**
  - Experience → `src/constants/ExperienceItems.tsx` (`EXPERIENCE_ITEMS`, optional per-role `metrics`)
  - Projects → `src/data/projects.ts` (`PROJECTS`; `skills` values must be keys of `SKILL_ICONS` in `src/constants/SkillIcons.tsx`)
  - Skill icons/names → `src/constants/SkillIcons.tsx` (`SKILL_ICONS`, `ALL_SKILLS`)
- **Design system:** brand navy palette `#142240` / `#3D5176` / `#797F8C`; Inter body font + Dancing Script (`font-signature`) accent; reusable class recipes in `src/lib/theme-utils.ts` (`commonStyles`, `getTechColor()`); Tailwind v4 tokens in `src/app/globals.css` `@theme`. Palette is duplicated across `globals.css`, `tailwind.config.ts`, `src/lib/theme.ts`, `src/lib/theme-utils.ts` — change all four together.
- **Theme reality:** navy + amber themes (light: warm ivory + brand navy + amber; dark: deep navy + amber), fully implemented via `next-themes` + CSS tokens in `globals.css` (`:root` / `.dark`); toggle in the navbar. Design and audit against BOTH themes; style with `var(--*)` tokens, never hardcoded hexes. Fraunces serif (`font-display`) for headings; numbered `SectionHeading` component for section headers.
- **Pages:** `/` (Hero → Skills → RecentExperience → Projects → Footer), `/experience`, `/projects` (archive with filters), `/coming-soon`, custom `not-found`. Navbar is global in `src/app/layout.tsx` (content offset `pt-16`).
- **Contact & links:** EmailJS form in `src/components/ContactModel.tsx`; social/config via `NEXT_PUBLIC_*` env vars (`EMAILJS_USER_ID/SERVICE_ID/TEMPLATE_ID`, `GITHUB_LINK`, `LINKEDIN_LINK`) in `.env.local`.
- **Verification:** no automated tests — `pnpm build` + browser check (Chrome DevTools MCP tools available for screenshots and Lighthouse). Package manager is pnpm only.

## Ground rules for all agents

- Content edits belong in `src/constants/` and `src/data/`, not hardcoded in components.
- Verify with `pnpm build` and check the site in the browser at mobile and desktop widths.
- Don't hand-edit `src/components/ui/` (generated shadcn code); note that `components.json` has a stale CSS path (`src/index.css` — real file is `src/app/globals.css`).
- Use `next/link` / `next/navigation` for routing — `react-router-dom` in package.json is a leftover, never import it.
- Resume work draws only from real experience in the master resume.
- Branch off `feature/*` and PR into `main`; never commit to `main` directly.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
