export interface ExperienceItem {
	title: string;
	company: string;
	location: string;
	period: string;
	skills: string;
	responsibilities: string[];
	/** Key = label text, value = display value. e.g. { "Daily Active Users": "1,000+" } */
	metrics?: Record<string, string>;
	/** Timeline entry type; defaults to "work" when omitted */
	type?: "work" | "education";
	/** Optional link (e.g. to a featured case study) */
	href?: string;
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
	{
		title: "Independent Software Consultant",
		company: "Self-employed / Freelance",
		location: "St. John's, NL, Canada (Remote)",
		// TODO(ABHISHEK): exact start month
		period: "2025 - Present",
		type: "work",
		href: "/projects#osfi-rag",
		skills: "AWS, RAG Pipelines",
		// TODO(ABHISHEK): engagement details/outcomes per SOT:88
		responsibilities: ["Conducted an AWS migration audit for a client, reviewing existing infrastructure and application architecture to scope the migration.", "Delivering application rebuild work for a client under a statement-of-work (SOW) engagement.", "Building a hybrid RAG pipeline for regulatory document search across OSFI publications for a consulting client."],
	},
	{
		title: "MASc, Computer Engineering",
		company: "Memorial University of Newfoundland",
		location: "St. John's, NL, Canada",
		period: "Sep 2023 - Apr 2025",
		type: "education",
		skills: "System Design, SOLID Principles, Software Design & Specification",
		// TODO(ABHISHEK): research focus/thesis topic
		// TODO(ABHISHEK): AZ-204 issue date
		responsibilities: ["Graduated with a CGPA of 3.62/4.0.", "Relevant coursework: System Design, SOLID Principles, Software Design & Specification.", "Earned Microsoft Certified: Azure Developer Associate (AZ-204)."],
	},
	{
		title: "Software Engineer → Software Engineer II",
		company: "Apexon (formerly Infostretch)",
		location: "Ahmedabad, India",
		period: "Aug 2021 - Aug 2023",
		type: "work",
		skills: "Apache Kafka, Java, Node.js, TypeScript, Azure, Azure DevOps, Redux",
		responsibilities: ["Engineered an asynchronous data-synchronization pipeline using Apache Kafka and Java, improving throughput by 40% and enabling reliable data exchange across high-traffic healthcare systems.", "Designed and optimized production REST APIs in Node.js (TypeScript) and Java, introducing asynchronous Azure Functions that increased system throughput by 10% for high-volume data workloads.", "Orchestrated zero-downtime production deployments using Blue-Green and Canary strategies on Azure DevOps, supporting 1,000+ daily active users at 99.9% uptime; mentored junior engineers and contributed to architectural decisions that reduced recurring technical debt.", "Reduced application errors by 40% by re-architecting frontend state management with Redux, stabilizing performance across complex data flows."],
		metrics: {
			"Daily Active Users": "1,000+",
			Uptime: "99.9%",
		},
	},
	{
		title: "Site Reliability Engineer",
		company: "Crest Data Systems",
		location: "Ahmedabad, India",
		period: "Jun 2020 - Aug 2021",
		type: "work",
		skills: "Python, Azure Monitor, ELK Stack, Azure DevOps, CI/CD",
		responsibilities: ["Built end-to-end observability for production SaaS systems using Azure Monitor and ELK/Kibana dashboards with proactive alerting, reducing mean time to resolution for critical incidents.", "Automated CI/CD pipelines and operational workflows in Python, reducing manual deployment overhead by 60% across Azure DevOps environments.", "Ran P0/P1 incident response for mission-critical healthcare applications, sustaining 99.9%+ uptime while applying security and compliance best practices across cloud infrastructure."],
	},
];
