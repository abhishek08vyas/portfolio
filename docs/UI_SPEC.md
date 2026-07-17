# UI Spec — Phase 3 (from design-ui-designer, amended by lead)

> Implementation spec for the Phase 3 build. Follow mechanically. Lead amendments at the bottom OVERRIDE the body where they conflict.

## Global rules (apply everywhere)

- **Reuse**: `commonStyles` from `src/lib/theme-utils.ts` and the `@layer components` classes in `src/app/globals.css` (`card-base`, `card-hover`, `skill-tag`, `section-header`, `section-divider`, `brand-gradient`). Where a spec says `card.base` it means `commonStyles.card.base`.
- **Section skeleton** (every homepage section): `<section id="…" className="relative py-16 md:py-20 overflow-hidden">` + `commonStyles.section.background` layer + `commonStyles.section.container`. Header = `<h2 className={commonStyles.header.title}>` centered + `commonStyles.header.divider` centered beneath (`flex justify-center mt-3`).
- **Reduced motion**: every Framer Motion entrance uses `const reduce = useReducedMotion()` and passes `initial={reduce ? false : { opacity: 0, y: 20 }}`. Every CSS `animate-*` (pulse dots, bounce, spin-slow avatar ring) gets `motion-reduce:animate-none`. Hover `transform`/`scale` effects get `motion-reduce:transform-none`.
- **Contrast (light theme)**: on navy `#142240` use `text-white`/`text-slate-50` for primary, `text-gray-300` for secondary; never darker than gray-400. On white, `#797F8C` fails AA for body text — use only ≥18px/semibold or decorative; body secondary = `text-gray-600`.
- **Focus**: every interactive element: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2` (on navy: `focus-visible:ring-white focus-visible:ring-offset-[#142240]`).
- **Resume link** (Hero, Navbar, Contact band, Footer): `<a href="/resume.pdf" download>` label "Download Resume". PDF is missing → ship the link anyway with `// TODO(ABHISHEK): export resume PDF to public/resume.pdf`.
- **Social URLs**: kill all `?? "#"` fallbacks. Hardcode GitHub `https://github.com/abhishek08vyas` and LinkedIn `https://www.linkedin.com/in/abhishekvvyas/` (SOT:33-34); define once in `src/constants/links.ts`.
- **Homepage order** (`src/app/page.tsx`): `Hero → FeaturedWork → NowAndRecent → Skills (grid) → Projects → OpenToWorkSection (contact band) → Footer`.

## 1. Hero (`src/components/Hero.tsx`)

Keep: background gradient/grid layers, avatar block (circular text + spinning ring + profile photo), intro card composition, bottom fade. Delete: the typewriter greeting hook and its `{displayText}` span. Add `motion-reduce:animate-none` to `animate-spin-slow` ring and scroll indicator; freeze circular-text rotation under `useReducedMotion()`.

Stack inside `max-w-3xl mx-auto text-center py-8`:
1. Avatar block — unchanged.
2. **Location eyebrow** (replaces greeting): `<p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-gray-600 mb-3">St. John's, NL · Open to relocation · Remote-ready</p>`
3. h1 — unchanged (brand text gradient); replace inline padding style with `px-2 pb-1`.
4. h2 — unchanged canonical string; wrapper `mb-6`.
5. **OPEN TO WORK badge**: `inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 mb-3` with ping dot (`animate-ping motion-reduce:animate-none`, `aria-hidden`) + `<span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Open to Work</span>`.
6. **Status line**: `<p className="text-sm md:text-base font-medium text-gray-700 mb-8">Building AI/RAG systems · Open to backend & AI roles, remote Canada-wide</p>`
7. Intro card — keep classes; paragraph stays. Then exactly 6 chips (`commonStyles.skillTag`): `["TypeScript / Node.js", "Java / Spring Boot", "Python", "Apache Kafka", "Azure", "RAG / LLM pipelines"]` (plain labels, no icons needed). Then credential line: graduation-cap icon (`aria-hidden`) + `MASc Computer Engineering, Memorial University (Apr 2025) · AZ-204`, classes `flex flex-wrap items-center justify-center gap-x-2 text-sm font-semibold text-[#142240] pt-4 border-t border-gray-100`.
8. **CTA row** `flex flex-wrap gap-4 justify-center items-center mb-20`: primary Download Resume (`commonStyles.button.primary`, LuDownload icon, wraps `<a href="/resume.pdf" download>`), secondary Contact (`commonStyles.button.secondary`, LuMail, opens ContactModal), then existing social circles with hardcoded URLs. Mobile: `w-full sm:w-auto` on both buttons.

## 2. Featured Work (new `src/components/FeaturedWork.tsx`, homepage slot 2)

Data: `PROJECTS.find(p => p.id === "osfi-rag")`; render nothing if undefined. Section `id="featured-work"`, header "Featured Work".
Spotlight card `max-w-6xl mx-auto ${card.base} ${card.hover} overflow-hidden`, `grid grid-cols-1 lg:grid-cols-5`:
- Image col (`lg:col-span-2`): `relative aspect-video lg:aspect-auto lg:min-h-[320px] bg-gray-50`, next/image `fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover"` + bottom navy gradient overlay, `alt=""`.
- Content col (`lg:col-span-3`, `p-6 md:p-8`):
  1. Badge row: Featured pill (`brand-gradient` text-white, lightning icon aria-hidden), roleLabel pill (`bg-[#142240]/5 text-[#142240] border border-[#142240]/15`), period pill (`text-gray-600 bg-gray-50 border-gray-200`).
  2. Title `text-xl md:text-2xl font-bold text-[#142240] tracking-tight mb-4`.
  3. Problem / Approach / Outcome stacked `space-y-4`; each: micro-label `text-[11px] uppercase font-bold tracking-widest text-[#3D5176] mb-1` + body `text-sm md:text-base text-gray-600 leading-relaxed`. Outcome prefixes an amber status dot (`w-1.5 h-1.5 rounded-full bg-amber-500`, aria-hidden), text `font-medium text-gray-700`.
  4. Skills chips ONLY if `skills.length > 0` (currently empty — nothing renders).
  5. CTA: `<Link href="/projects#osfi-rag">Read the case study</Link>` `inline-flex items-center gap-2 text-sm font-semibold text-[#142240] hover:text-[#3D5176] group` + arrow `group-hover:translate-x-1 motion-reduce:transform-none`.
Entrance: one `motion.div` whileInView fade/rise, `viewport={{ once: true }}`, reduced-motion guarded.

## 3. Now & Recent (new `src/components/NowAndRecent.tsx`, replaces RecentExperience on home)

Section `id="now-recent"`, bg-white, header "Now & Recent". Data `EXPERIENCE_ITEMS.slice(0, 3)`. Layout `max-w-3xl mx-auto flex flex-col gap-4`.
Work card: `<article className="card-base card-hover p-5 md:p-6 flex gap-4 border-l-4 border-l-[#142240]">` — icon tile `w-11 h-11 rounded-xl brand-gradient text-white` FaBriefcase; title row `flex flex-wrap items-baseline justify-between` (h3 bold navy + `commonStyles.experienceCard.period` pill); meta `{company} · {location}` `text-sm text-gray-600`; snapshot = `responsibilities[0]` one-liner. No skill chips.
Education variant (`type === "education"`): `border-l-[#3D5176]`, icon tile `bg-gradient-to-r from-[#3D5176] to-[#797F8C]` FaGraduationCap, AZ-204 pill (`bg-[#3D5176]/10 text-[#3D5176]`), snapshot "Graduated with a CGPA of 3.62/4.0."
Footer link centered `mt-8`: "Full timeline →" to /experience. Stagger `delay: i * 0.08` reduced-motion guarded. Cards non-interactive.

## 4. Skills grid (rewrite `src/components/Skills.tsx`)

Delete marquee (rAF, innerHTML cloning, ALL_SKILLS usage). Keep section shell + header "Technical Skills". Local data (icon = exact SKILL_ICONS key; no icon if no key):
- **Backend**: Java, Spring Boot, Node.js, TypeScript, Python, FastAPI(no key)
- **Data & Messaging**: PostgreSQL, MongoDB, MySQL, Redis, Apache Kafka
- **Cloud & DevOps**: Azure (AZ-204)→`Azure`, AWS, Docker, Azure DevOps(no key), CI/CD(no key), ELK/Kibana→`ELK Stack`, Azure Monitor(no key)
- **AI / ML (applied)**: TensorFlow, scikit-learn, MediaPipe, RAG pipelines(no key) `// TODO(ABHISHEK): confirm RAG-stack items (SOT:88)`
- **Frontend**: React, Next.js→`NextJS`, Redux, Tailwind CSS
Layout `max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`. Group card: `card-base card-hover p-6`, group title `text-sm font-bold uppercase tracking-widest text-[#3D5176] mb-4`, `<ul role="list" className="flex flex-wrap gap-2">`, chips `commonStyles.skillTag + " inline-flex items-center gap-1.5 !px-3 !py-1.5 !text-xs"`. Static.

## 5. Contact band (rework `src/components/OpenToWorkSection.tsx`, mount on home)

Keep shell (`commonStyles.openToWork.container` → `.content`). Delete old copy/decoration. Pulse dot `motion-reduce:animate-none`; container hover scale `motion-reduce:transform-none`. Wrapper `py-16`, `max-w-4xl mx-auto`.
Left: badge "Open to Work" (existing recipe) → h4 `commonStyles.openToWork.title` = "Building AI/RAG systems · Open to backend & AI roles, remote Canada-wide" → `<p className="text-sm text-gray-300">Also available for freelance backend and AI consulting work.</p>`
Right (`flex flex-col sm:flex-row gap-3 shrink-0`): Contact (white-on-navy `openToWork.button`, LuMail, opens ContactModal, white focus ring) + Download Resume (outline: `border border-white/40 text-white hover:bg-white/10`, LuDownload). Mobile full-width.

## 6. Experience page (`src/components/Experience.tsx`)

Keep timeline architecture. Changes:
1. Role-count badge already filtered (renders "3 Roles"); FaBriefcase `aria-hidden`.
2. Education variant: header gradient `linear-gradient(135deg, #3D5176, #797F8C)`; FaGraduationCap in meta row; "Education" + "AZ-204" pills (`bg-white/15 text-white border-white/25`); timeline dot `#3D5176`.
3. Consultant `href`: expanded body bottom → `<Link href={exp.href}>View the OSFI RAG case study →</Link>` with `stopPropagation`.
4. Metrics boxes render ONLY when `exp.metrics` exists (Apexon: 1,000+ DAU / 99.9%): `grid grid-cols-2 gap-3 max-w-sm`, box `bg-slate-50 border border-slate-200 rounded-xl p-4`, value `text-xl font-bold text-[#142240]`, label `text-[10px] uppercase tracking-widest font-bold text-slate-500`.
5. A11y: expand/collapse header becomes `<button type="button" className="w-full text-left" aria-expanded={isExpanded} aria-controls={"exp-body-"+idx}>`; body `id="exp-body-"+idx`; chevron aria-hidden; transitions get `motion-reduce:transition-none`.

## 7. Projects page

### 7a. Pinned featured case study (in `ProjectsArchive.tsx`, between header and filters)
`<section id="osfi-rag" aria-labelledby="osfi-rag-title" className="scroll-mt-28 mb-14">`, card `card-base overflow-hidden border-t-4 border-t-[#142240]`: badge row (same pills as §2) + h2 title + description; image strip `relative h-48 md:h-64 mx-6 md:mx-8 mt-6 rounded-xl overflow-hidden` next/image fill; case-study 2×2 `grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-8` — Problem/Approach/Architecture/Outcome blocks (`bg-slate-50 border border-slate-200 rounded-xl p-5`, micro-label + `text-sm text-gray-600`); Outcome gets amber dot. **Featured project is always excluded from the grid below** (skills:[] never matches filters anyway).

### 7b. ProjectCard
1. roleLabel badge over image top-left: `bg-white/85 backdrop-blur-sm text-[#142240] shadow-sm`.
2. Restore period display, guard `{project.period && …}`, `text-gray-600`.
3. Outcome line between description and chips: arrow icon + `text-sm font-medium text-[#142240]`.
4. Guard skills row `{project.skills.length > 0 && …}`. Entrance animations reduced-motion guarded.

### 7c. ProjectFilters
"All Projects" chip count bug: add `totalProjects` prop, pass `PROJECTS.length`, use it in BOTH desktop FilterChip and MobileFilterOption (currently `skills.length` = tech count at lines ~137/~230). Subtitle → "{skills.length} technologies". Add `aria-pressed={isActive}` to chip buttons. Page subtitle → "Backend systems, AI/RAG pipelines, and client work — with the problem, approach, and outcome for each."

## 8. Navbar (`src/components/Navbar/index.tsx`)

NAV_ITEMS → Experience, Projects (no Home text item, no subItems/dropdown — simple `<nav><ul>`). Desktop right cluster: links + `<a href="/resume.pdf" download>` outline Button "Download Resume" (`border-[#142240] text-[#142240] hover:bg-gray-50`) + primary "Contact" Button (opens ContactModal — Navbar gains modal state). Hamburger: `aria-label` (Open/Close menu), `aria-expanded`, `aria-controls="mobile-menu"`. Mobile sheet `id="mobile-menu"`, `motion-reduce:animate-none`, links then full-width Resume + Contact buttons.

## 9. Footer (`src/components/Footer.tsx`)

Shell unchanged. Becomes `"use client"` with ContactModal state.
- Col 1 Identity: name h2 `text-slate-50`, tagline `text-sm text-gray-300`, optional signature sign-off `font-signature text-2xl text-gray-300 mt-1` `aria-hidden`.
- Col 2 Explore: Home /, Experience, Projects, Resume (`/resume.pdf` download). Link class `text-gray-300 hover:text-white transition-colors`. ALL /coming-soon links deleted.
- Col 3 Get in touch: mailto row (`text-gray-300 hover:text-white`, LuMail aria-hidden); GitHub + LinkedIn text links with icons (hardcoded URLs, `target="_blank" rel="noopener noreferrer"`, visible labels); `<button>` "Start a conversation" (opens ContactModal, `underline underline-offset-4`); freelance line `text-sm text-gray-300 mt-3`.
- Copyright: `text-gray-400` (gray-500 fails contrast on navy).

## LEAD AMENDMENTS (override the above)

1. **Resume path is `/resume.pdf`** (public root) everywhere — not `/resume/Abhishek_Vyas_Resume.pdf`. Owner-specified. Add `// TODO(ABHISHEK): export resume PDF to public/resume.pdf` at each link site (or one shared constant in `src/constants/links.ts`).
2. **Contact API stub** (owner-mandated): create `src/app/api/contact/route.ts` — a POST handler that validates `{ name, email, subject, message }` (zod is already a dependency) and: if `process.env.CONTACT_WEBHOOK_URL` is set, forwards the payload there; otherwise returns 503 `{ error: "Contact API not configured" }`. Update `ContactModel.tsx`: try `POST /api/contact` first when `process.env.NEXT_PUBLIC_USE_CONTACT_API === "true"`, else use the existing EmailJS path; on any failure show the error state INCLUDING a visible `mailto:abhishekvvyas@gmail.com` fallback link ("Or email me directly"). Also remove the hardcoded EmailJS fallback IDs from source (env vars only; graceful error if unset).
3. **Delete `/coming-soon`**: remove `src/app/coming-soon/` and add to `next.config.ts`: `async redirects() { return [{ source: "/coming-soon", destination: "/", permanent: true }] }`.
4. **Delete `src/components/RecentExperience.tsx`** after replacing its usage (avoid dead code); keep `OpenToWorkSection.tsx` (reworked + mounted).
5. Preserve the avatar images and ALL real external links (GitHub, LinkedIn, project demos, App Store).
