# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Personal portfolio website for Abhishek Vyas. Goals: excellent UX/UI that impresses recruiters and hiring managers, fast performance, strong accessibility, and a resume pipeline (one master resume → site content + job-tailored resumes).

## Commands

Package manager is **pnpm** (see `packageManager` in package.json — do not use npm/yarn).

```
pnpm dev      # dev server (Next.js)
pnpm build    # production build — run before pushing to verify
pnpm lint     # ESLint (next lint)
```

There are no automated tests; verify changes with `pnpm build` and by viewing the app in the browser (Chrome DevTools MCP tools are available for screenshots and Lighthouse audits).

## Stack

- **Next.js 15** (App Router, `src/app/`) + **React 19** + **TypeScript** (strict; path alias `@/*` → `src/*`)
- **Tailwind CSS v4** (`@tailwindcss/postcss`) + **shadcn/ui** (Radix primitives in `src/components/ui/` — generated code, avoid hand-editing; re-generate via shadcn CLI instead)
- Animations: **Framer Motion** and **GSAP**
- Fonts: **Inter** (body, via `next/font`) + **Fraunces** (display serif, `--font-fraunces` → Tailwind `font-display` — headings/section titles) + **Dancing Script** (exposed as `--font-signature` / Tailwind `font-signature` — used for the signature/name flourish)
- Contact form: **EmailJS** (`@emailjs/browser`, sent client-side from `ContactModel.tsx`)
- Analytics: `@vercel/analytics`; deployed on **Vercel** (`vercel.json` sets `pnpm build`)
- `@tanstack/react-query`, `react-hook-form`, `zod`, `sonner` are available; `react-router-dom` is a leftover dependency — always use `next/link` / `next/navigation`, never react-router

## Environment variables (`.env.local`, never commit)

All are `NEXT_PUBLIC_*` (read client-side):
`NEXT_PUBLIC_EMAILJS_USER_ID`, `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` (ContactModel), `NEXT_PUBLIC_GITHUB_LINK`, `NEXT_PUBLIC_LINKEDIN_LINK` (Hero, Footer).

## Structure

- `src/app/` — routes: home, `/experience`, `/projects`, `/coming-soon`, `not-found`
  - `layout.tsx` renders `<Navbar />` and offsets content with `pt-16`; site metadata (title/description) lives here
  - `page.tsx` (home) is a **client component** wrapping sections in `QueryClientProvider` + `TooltipProvider` + both toasters; section order: Hero → Skills → RecentExperience → Projects → Footer
- `src/components/` — page sections (Hero, Skills, Experience, RecentExperience, Projects, OpenToWorkSection, ContactModel, Footer, Navbar/)
- `src/components/projects/` — projects archive: ProjectCard, ProjectFilters, ProjectsArchive
- `src/components/ui/` — shadcn/ui primitives (generated)
- `src/constants/` — **content lives here**: `ExperienceItems.tsx`, `SkillIcons.tsx`
- `src/data/projects.ts` — project entries
- `src/hooks/`, `src/lib/` — utilities (`cn()` in `src/lib/utils.ts`)

## Content data shapes

- `src/data/projects.ts` — `PROJECTS: Project[]` (`id`, `title`, `description`, `responsibilities[]`, `skills[]`, `image` under `public/images/`, `featured?`, `links?.github/demo`). **`skills` values must match keys of `SKILL_ICONS`** in `src/constants/SkillIcons.tsx` (which exports `SKILL_ICONS` and `ALL_SKILLS`) — they drive filter chips and icons.
- `src/constants/ExperienceItems.tsx` — `EXPERIENCE_ITEMS: ExperienceItem[]` (`title`, `company`, `location`, `period`, `skills` as one comma-separated string, `responsibilities[]`, optional `metrics` record like `{ "API Performance": "<90ms" }`).

## Theming & styling — gotchas

- **Theme system (warm dawn/dusk, light + dark)**: design tokens are CSS custom properties in `src/app/globals.css` on `:root` (light/dawn: cream `#fffaf5`, ink `#2a2440`, coral accent `#e04f5f`) and `.dark` (dusk: plum `#14122a`, peach accent `#ff9d8a`) — `--surface-page/card/raised`, `--edge`, `--text-strong/body/dim`, `--accent(-strong/-soft)`, `--glow-a/b`, `--shadow-soft/hover`, `--focus-ring`. Style components with these vars (`text-[var(--text-body)]` etc.), NOT hardcoded hexes.
- **Dark mode is implemented** via `next-themes` (class strategy): `ThemeProvider.tsx` wraps the app in `layout.tsx` (`suppressHydrationWarning` on `<html>` is required), `ThemeToggle.tsx` lives in the Navbar (mounted-guard against hydration mismatch). Tailwind v4 needs the `@custom-variant dark (&:where(.dark, .dark *));` line in `globals.css` for `dark:` variants — the `darkMode` key in `tailwind.config.ts` is INERT (no `@config` directive). **Check every visual change in BOTH themes** (AA contrast: `--accent` only ≥18px/semibold; small accent text uses `--accent-strong`).
- Legacy brand navy `#142240`/`#3D5176`/`#797F8C` survives in `tailwind.config.ts`, `src/lib/theme.ts`, `getTechColor()`, and the navbar wordmark — don't propagate it into new component styling; use the tokens.
- The fixed `SkyBackdrop.tsx` (dawn/dusk gradients, `-z-10`) shows through pages — sections should keep transparent backgrounds. `SectionHeading.tsx` renders the numbered ("01") serif section headers.
- `src/lib/theme-utils.ts` exports `commonStyles` (token-based card/button/section/header/experienceCard/openToWork class strings) and `getTechColor()` for per-technology brand colors — reuse these instead of re-inventing class combos.
- `components.json` quirks: `rsc: false`, and its `tailwind.css` path (`src/index.css`) is stale — the real global CSS is `src/app/globals.css`. Fix the path if the shadcn CLI misbehaves.

## Conventions

- Content changes (new job, project, skill) go in `src/constants/` or `src/data/` — not hardcoded in components.
- Use existing shadcn/ui components and the `cn()` helper; follow the surrounding Tailwind idiom rather than inline styles.
- Keep the site fully responsive (mobile-first; `use-mobile` hook exists in `src/hooks/`) and verify any visual change in **both light and dark themes** (toggle in the navbar).
- Accessibility is a requirement, not a nice-to-have: semantic HTML, keyboard navigation, reduced-motion respect for Framer Motion/GSAP animations.
- Git workflow: work on `feature/*` (or `release/*`) branches and PR into `main` — don't commit to `main` directly.

## Resume pipeline

The master resume is the single source of truth at `src/data/master-resume.json` (**does not exist yet — create it on first resume task**, seeding from `EXPERIENCE_ITEMS` and `PROJECTS`; JSON Resume format). It should contain *everything* — all roles, projects, skills, metrics. Site sections render from it (or stay consistent with it), and the `resume-tailor` agent trims/rewrites it against specific job descriptions. Never fabricate experience when tailoring.

## Agents

Project subagents live in `.claude/agents/` — see `AGENTS.md` for the roster and the recommended design → build → audit workflow. Use them proactively for design, UX review, accessibility/performance audits, and resume work.
