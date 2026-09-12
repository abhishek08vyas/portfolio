export interface ExperienceMetric {
	/** Big number/stat, e.g. "45" or "~40%" */
	value: string;
	/** Short caption under the value, e.g. "E2E Tests" */
	label: string;
}

export interface PreviousRole {
	role: string;
	period: string;
}

export interface ExperienceItem {
	company: string;
	role: string;
	location: string;
	/** Display string for the timeline badge, e.g. "Sep 2025 - Present" */
	period: string;
	/** 2–4 short narrative sentences; each entry renders as its own paragraph. */
	summary: string[];
	/** 3–6 key achievements (expandable body). */
	achievements: string[];
	/** Technology tags — drive the chips/icons via SKILL_ICONS fuzzy match. */
	technologies: string[];
	/** Optional highlight-metrics row. Keep it sparse — not every role needs one. */
	metrics?: ExperienceMetric[];
	/** Prior role(s) at the same company, to show a promotion clearly. */
	previousRoles?: PreviousRole[];
	/** Accessibility capabilities surfaced as first-class chips (not just tech tags). */
	accessibility?: string[];
	/** AI-assisted / agentic engineering callout paragraph. */
	aiCallout?: string;
	/** Optional link (e.g. to a featured case study). */
	href?: string;
}

export interface EarlierRole {
	company: string;
	role: string;
	summary: string;
}

/** Descriptive capability tags for the page (not proficiency ratings). */
export const CAPABILITY_TAGS: string[] = ["Full-Stack Engineering", "Backend Development", "Microservices", "Distributed Systems", "Cloud", "Accessibility", "Security", "Observability", "AI-Assisted Engineering"];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
	{
		company: "Traveltical Inc.",
		role: "Full Stack Developer",
		location: "Toronto, Ontario, Canada",
		period: "Sep 2025 - Present",
		summary: ["I work across frontend and backend engineering on enterprise software for regulated financial-services environments. My role combines product engineering, backend development, accessibility, security, cloud architecture, automated quality engineering, and AI-assisted development.", "I delivered two core product surfaces (Dashboard and Control Testing), including eight modal-driven workflows for audit activity, evidence, risk signals, coverage, and control-testing operations."],
		achievements: ["Delivered 2 core product surfaces and 8 modal-driven workflows spanning dashboard, control-testing, evidence, risk, and audit use cases.", "Built a reusable design system with 13 core primitives, 8 compound components, and a 50-icon system using Next.js, React, TypeScript, Tailwind CSS, Storybook, and design tokens.", "Implemented backend functionality using Python, FastAPI, PostgreSQL, SQLAlchemy, Alembic, Redis, and REST APIs within a multi-tenant SaaS architecture.", "Built automated quality coverage with 124 shared UI unit tests, 38 application tests, 45 Playwright E2E tests, and 216 accessibility-tested Storybook states.", "Implemented security patterns using OAuth 2.0, OIDC, Microsoft Entra ID, RBAC, object-level authorization, tenant isolation, audit logging, and PII-safe AI processing.", "Added bilingual EN / FR-CA localization with catalog parity checks across 309 translated UI string leaves, and maintained application routes within a 200 KB first-load JavaScript budget (measured 119-168 KB)."],
		metrics: [
			{ value: "2", label: "Core Product Surfaces" },
			{ value: "8", label: "Workflow Use Cases" },
			{ value: "45", label: "Playwright E2E Tests" },
			{ value: "216", label: "A11y Storybook States" },
		],
		accessibility: ["WCAG 2.1 AA", "Keyboard navigation", "Focus management", "Screen-reader semantics", "Semantic HTML", "axe", "Storybook a11y testing", "Contrast validation", "Font-size preferences", "Responsive design", "AODA-aware", "EN / FR-CA localization"],
		aiCallout: "Agentic engineering workflow: implement → test → independent AI review → remediate → human validation. I use Claude Code and OpenAI Codex for implementation acceleration, test generation, code review, architecture validation, and defect detection, and I developed coding-standard-driven review agents that evaluate major code changes against architecture rules, API contracts, security controls, accessibility requirements, and quality standards before final human review.",
		technologies: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Redis", "Azure", "Docker", "OAuth 2.0", "OIDC", "Microsoft Entra ID", "Storybook", "Vitest", "Playwright", "WCAG 2.1 AA", "Claude Code", "OpenAI Codex"],
	},
	{
		company: "Ehalo",
		role: "Full Stack Developer Intern",
		location: "Remote, Canada",
		period: "May 2025 - Aug 2025",
		summary: ["At Ehalo, I owned the development of a personalized trip-inquiry workflow spanning the customer-facing frontend, REST API, business logic, and relational persistence.", "The feature covered the full journey from collecting trip requirements through draft persistence, guest submission, validation, status tracking, and confirmation."],
		achievements: ["Built a responsive five-step personalized trip-inquiry workflow using Next.js, React, TypeScript, and Tailwind CSS.", "Designed and implemented REST APIs under /api/v1/inquiries using Node.js, Express.js, TypeScript, TypeORM, and MySQL, structured across Controller → Service → Repository → Entity layers.", "Added draft saving and recovery so users could resume partially completed inquiries, plus guest inquiry support, duplicate detection, activity preferences, status tracking, and reference-number responses.", "Introduced TypeORM repositories and entities while preserving compatibility with an existing MySQL query-based data layer, and added Swagger/OpenAPI documentation with request validation.", "Added production-oriented observability using Winston, cls-rtracer, structured logging, and health checks.", "Worked within security controls including Helmet/CSP, CORS restrictions, rate limiting, Firebase authentication, request validation, and production-safe error handling."],
		technologies: ["Next.js 14", "React 18", "TypeScript", "Node.js", "Express.js", "TypeORM", "MySQL 8", "Swagger / OpenAPI", "Firebase Admin SDK", "Winston", "Vercel"],
	},
	{
		company: "Apexon (formerly Infostretch)",
		role: "Engineer I → Engineer II",
		location: "Ahmedabad, Gujarat, India",
		period: "Aug 2021 - Aug 2023",
		previousRoles: [
			{ role: "Engineer II", period: "Jan 2023 - Aug 2023" },
			{ role: "Engineer I", period: "Aug 2021 - Jan 2023" },
		],
		summary: ["At Apexon, I worked on enterprise software across healthcare, loyalty, and integration-heavy environments using Java, Spring Boot, microservices, Kafka, MySQL, MongoDB, Azure, and AWS.", "My work expanded from backend implementation and integrations into production support, mentoring, code reviews, performance optimization, and architecture/design reviews with Solution Architects."],
		achievements: ["Designed an asynchronous patient-data synchronization workflow using Java, Spring Boot, and Apache Kafka, improving throughput by approximately 40%.", "Built and optimized REST APIs and Spring Boot microservices for enterprise healthcare and loyalty systems, and developed Azure Functions for asynchronous and serverless processing.", "Integrated external platforms including Magento, Retail Unity, Loyaltics, Lifetrentz, and Akhil Systems across relational (MySQL, JPA, named queries) and NoSQL (MongoDB) persistence layers.", "Resolved 50+ L3 production incidents, documenting fixes and troubleshooting production failures.", "Used Dynatrace and Kibana to monitor application health, diagnose issues, and reduce runtime problems.", "Mentored junior developers through task planning, technical guidance, and code reviews, and participated in architecture and design reviews with Solution Architects."],
		metrics: [
			{ value: "~40%", label: "Throughput Gain" },
			{ value: "50+", label: "L3 Incidents Resolved" },
		],
		technologies: ["Java 8 / 11", "Spring Boot", "Spring MVC", "Microservices", "REST APIs", "Apache Kafka", "MySQL", "MongoDB", "JPA", "Azure Functions", "Azure", "AWS", "Dynatrace", "Kibana"],
	},
	{
		company: "Crest Data Systems",
		role: "Site Reliability Engineer",
		location: "Ahmedabad, Gujarat, India",
		period: "Jul 2020 - Aug 2021",
		summary: ["At Crest Data Systems, I worked on Splunk CloudOps automation and distributed Splunk environments, gaining experience in reliability engineering, CI/CD, production troubleshooting, deployment automation, and infrastructure operations."],
		achievements: ["Developed Jenkins pipelines, Python automation scripts, and Shell scripts for development, testing, troubleshooting, and deployment workflows.", "Automated operational workflows across distributed Splunk environments, reducing manual effort by approximately 60%.", "Troubleshot Indexer Clustering, Search Head Clustering, on-premise clusters, and multisite deployments.", "Supported production monitoring, incident resolution, and high-availability operations."],
		technologies: ["Splunk", "Jenkins", "Python", "Shell", "CI/CD", "Distributed Systems", "Monitoring", "Production Support"],
	},
];

/** Early internships / training — shown compactly, de-emphasized vs. the main roles. */
export const EARLIER_EXPERIENCE: EarlierRole[] = [
	{
		company: "Infostretch",
		role: "Trainee Engineer",
		summary: "Worked with Java, Spring Boot, REST APIs, MongoDB, AWS, Apache Kafka, ActiveMQ, Redis, bug fixing, and unit testing during early software-engineering training and internship assignments.",
	},
	{
		company: "Kals Infotech",
		role: "PHP Developer Intern",
		summary: "Early web-development internship focused on practical application development and foundational software-engineering experience.",
	},
	{
		company: "CHARUSAT",
		role: "Web Developer",
		summary: "Contributed to development of the website for the Information Technology department’s CONNISANCE magazine.",
	},
];
