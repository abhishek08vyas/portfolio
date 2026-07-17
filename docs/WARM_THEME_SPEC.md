# Warm Theme Port — Spec (light + dark)

> Port the `experiments/warm-portfolio.html` visual language into the real Next.js site, keeping the recruiter-first structure from the overnight revamp, and implementing REAL light/dark theming. Professional > playful: warm, not cute. No copy, fact, metric, date, or link changes anywhere — this is a pure visual/theming port. All TODO(ABHISHEK) comments stay.

## 1. Theme infrastructure (do this first)

1. **Tailwind v4 dark variant** — `tailwind.config.ts`'s `darkMode` is INERT (no `@config` directive in globals.css). Add near the top of `src/app/globals.css`, right after `@import "tailwindcss";`:
   ```css
   @custom-variant dark (&:where(.dark, .dark *));
   ```
2. **ThemeProvider** — new `src/components/ThemeProvider.tsx` (`"use client"`): re-export `next-themes` ThemeProvider with `attribute="class"`, `defaultTheme="light"`, `enableSystem`, `disableTransitionOnChange`. (`next-themes@0.4.6` already installed; generated `sonner.tsx` already calls `useTheme` and will start working.)
3. **layout.tsx** — add `suppressHydrationWarning` to `<html>`; wrap body children in `<ThemeProvider>`. Layout stays a server component (provider is the client boundary).
4. **ThemeToggle** — new `src/components/ThemeToggle.tsx`: mounted-guard (render a static placeholder until mounted to avoid hydration mismatch), `LuSun`/`LuMoon` icon, `aria-label` "Switch to dark theme" / "Switch to light theme", focus-visible ring. Mount in Navbar (desktop cluster + mobile sheet).
5. **shadcn HSL vars** — add a `.dark { ... }` block in globals.css `@layer base` mirroring the `:root` shadcn variables with dusk values (background 250 30% 12%, foreground 260 40% 96%, card/popover same family, border/input ~250 20% 26%, muted-foreground ~255 15% 70%, primary can stay blue). Keeps generated ui components legible in dark.

## 2. Design tokens (CSS custom properties in globals.css)

Define on `:root` (LIGHT = dawn) and `.dark` (DARK = dusk):

| Token | Light (dawn) | Dark (dusk) |
|---|---|---|
| `--surface-page` | `#fffaf5` | `#14122a` |
| `--surface-card` | `rgba(255,255,255,0.82)` | `rgba(32,29,64,0.80)` |
| `--surface-raised` | `#ffffff` | `#201d40` |
| `--edge` | `rgba(42,36,64,0.10)` | `rgba(205,196,249,0.14)` |
| `--text-strong` | `#2a2440` | `#f2eefc` |
| `--text-body` | `#4a4462` | `#c9c3e3` |
| `--text-dim` | `#6b6483` | `#a49fc0` |
| `--accent` | `#e04f5f` | `#ff9d8a` |
| `--accent-strong` (small text) | `#b93a49` | `#ffb3a3` |
| `--accent-soft` (bg tint) | `rgba(224,79,95,0.09)` | `rgba(255,157,138,0.12)` |
| `--glow-a` (lavender) | `#cdc4f9` | `#37306b` |
| `--glow-b` (peach) | `#ffd9c4` | `#5c3350` |
| `--shadow-soft` | `0 18px 50px -18px rgba(74,58,120,0.16)` | `0 18px 50px -18px rgba(0,0,0,0.55)` |

Set `body { background: var(--surface-page); color: var(--text-strong); }`. Keep brand navy `#142240` ONLY for the navbar wordmark and tech-color dots (getTechColor stays untouched).

**Contrast rules (AA both themes):** `--accent` only for ≥18px/semibold or decorative; small accent text uses `--accent-strong`. Body text uses `--text-body`/`--text-dim` (both pass on their surfaces). Verify focus rings visible both themes: light ring `#b93a49` or `#3D5176`; dark ring `#ff9d8a`.

## 3. Dawn/dusk backdrop

New `src/components/SkyBackdrop.tsx` (client, `aria-hidden`, `fixed inset-0 -z-10 pointer-events-none`): base linear gradient + 3 radial-gradient divs (lavender top-left, peach right, warm sun glow upper-right). **No `filter: blur()`** — use soft-edged radial gradients directly (perf). Light = dawn colors, dark = dusk (`dark:` classes). Very subtle drift animation allowed (CSS keyframes, `motion-reduce:animate-none`, transform-only). Render once in `layout.tsx` before children. Remove per-section gray gradient backgrounds that fight it (see §5).

## 4. Typography

- **Fraunces** via `next/font/google` in layout.tsx: `Fraunces({ subsets: ["latin"], variable: "--font-fraunces", style: ["normal", "italic"] })` (variable font — no weight array needed). Add to `<html>` className alongside dancingScript.variable.
- globals.css `@theme`: `--font-display: var(--font-fraunces), Georgia, serif;` → gives Tailwind `font-display` utility.
- Usage: h1 hero name, all section titles, big CTA headline, stat values → `font-display` weight 550–650, `tracking-tight`. Body/UI stays Inter. Dancing Script signature (navbar wordmark, footer sign-off) unchanged.

## 5. Component classes (globals.css @layer components + theme-utils commonStyles)

Rewrite BOTH the `.card-base/.skill-tag/.section-header/.section-divider` classes and the matching `commonStyles` recipes in `src/lib/theme-utils.ts` to token-based, dark-aware values:

- `.card-base`: `bg-[var(--surface-card)] backdrop-blur-sm rounded-3xl shadow-[var(--shadow-soft)] border border-[var(--edge)]`
- `.skill-tag`: pill — `bg-[var(--accent-soft)] text-[var(--text-strong)] border border-[var(--edge)] rounded-full text-sm font-medium`
- `.section-header` / `commonStyles.header.title`: `font-display text-[var(--text-strong)]` (kill the navy gradient-text; serif carries the style now)
- `.section-divider` / `header.divider`: `bg-[var(--accent)]` short rule
- `commonStyles.button.primary`: coral gradient pill — `rounded-full bg-gradient-to-r from-[#f26d78] to-[#e04f5f] text-white font-semibold shadow-lg` + hover lift (`motion-reduce` safe). Dark: same gradient reads fine.
- `commonStyles.button.secondary`: `rounded-full bg-[var(--surface-raised)] text-[var(--text-strong)] border border-[var(--edge)]`
- `commonStyles.section.background`: remove gray gradients — transparent (SkyBackdrop shows through); alternate sections may use `bg-[var(--surface-page)]/60`
- experienceCard/openToWork/tab recipes: same token treatment (openToWork panel: keep dusk-purple gradient `from-[#3b3161] via-[#6b5aa8] to-[#b8779b]` — it works in BOTH themes; text stays white; check AA).

## 6. Numbered section headings (recruiter structure)

New `src/components/SectionHeading.tsx`: `{num: string; title: string; sub?: string; align?: "left"|"center"}` → small `--accent-strong` mono-ish number ("01") + `font-display` title + optional sub in `--text-dim`. Replace ad-hoc headers:

- Home: 01 Featured Work · 02 Now & Recent · 03 Skills · 04 Selected Projects (Projects.tsx home section) · contact band unnumbered.
- /experience header: keep h1 "Experience" but restyle serif + tokens (no number on page h1).
- /projects: same treatment.

## 7. Per-component restyle (order of work)

1. `globals.css` (variant, tokens, shadcn dark block, component classes, font-display)
2. `layout.tsx` (Fraunces, ThemeProvider, SkyBackdrop, suppressHydrationWarning)
3. `ThemeProvider.tsx`, `ThemeToggle.tsx`, Navbar (toggle in desktop cluster + mobile sheet; bar bg → `bg-[var(--surface-page)]/80` + `border-[var(--edge)]`; links → `text-[var(--text-dim)] hover:text-[var(--text-strong)]`; Contact button → coral primary; Resume outline → token border)
4. Hero: two-column on `lg` (text left; avatar right with its ring/circular-text preserved), stacked centered on mobile. Eyebrow pill (location) → accent-soft pill; name h1 → `font-display`, "Vyas" in italic with coral→lavender gradient text; role h2 Inter semibold `--text-body`; OPEN TO WORK badge keeps emerald (works both themes — check dark: use emerald-400/20 bg + emerald-300 text in dark); status line `--text-body`; bio card → `.card-base`; chips `.skill-tag`; credential line `--text-strong` + accent icon; CTAs → new button recipes. **Desktop-only floating fact chips** (4, absolute around avatar, gentle bob `motion-reduce` safe, `aria-hidden`): RAG pipeline · OSFI (in development) / Kafka +40% throughput / 99.9% uptime · 1,000+ DAU / MASc 2025 · AZ-204 — small `.card-base` pills with emoji dots. Hide < lg.
5. FeaturedWork: SectionHeading 01; card `rounded-3xl`; image panel gets a soft lavender gradient backdrop in light / muted plum in dark; badges → accent-soft pills; micro-labels `--accent-strong`; body `--text-body`.
6. NowAndRecent: SectionHeading 02; cards `.card-base` with accent left border (`--accent` work / lavender `#8b7fd4` education); icon tiles → soft gradient tiles.
7. Skills: SectionHeading 03; group cards `.card-base`; group titles `--accent-strong` uppercase; chips `.skill-tag` (keep SKILL_ICONS icons).
8. Projects.tsx (home): SectionHeading 04; spotlight cards token-based; CTA band → dusk-purple gradient panel (like contact band, smaller).
9. OpenToWorkSection: dusk-purple gradient panel `rounded-[34px]`, white text, coral/white CTAs (both themes).
10. Footer: dusk gradient (`#2f2a52 → #1e1b3a`) both themes, `text-[#cfc9e8]` links, signature stays; check contrast.
11. /experience page (Experience.tsx): page bg transparent (SkyBackdrop), header serif + tokens, glass period badges → `bg-[var(--surface-card)]`, card headers keep navy→ replace with dusk gradient `from-[#3b3161] to-[#6b5aa8]` (education: lighter lavender pair), expanded body surfaces → `--surface-raised`/`--edge`, metrics boxes token-based.
12. /projects components (ProjectsArchive, ProjectCard, ProjectFilters): tokens, rounded-3xl cards, badges accent-soft, filter chips token pills (active = coral gradient), mobile sheet surfaces token-based.
13. ContactModel + not-found: token surfaces/text, coral primary buttons, keep all a11y (focus trap, aria-live).

## 8. Hard constraints

- **Zero copy/fact/metric/date/link changes.** Rendering only. TODO(ABHISHEK) comments preserved.
- No new dependencies (next-themes + next/font already available). Avatar images and all external links preserved.
- All existing a11y invariants keep working: focus-visible rings (both themes), reduced-motion gating on every animation, aria attributes, skip link, one-h1-per-page, modal traps.
- AA contrast in BOTH themes (rules in §2).
- `pnpm build` green at the end (pre-existing warnings: 2 CSS @screen, @antfu ESLint error). Do not commit.
