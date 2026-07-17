/**
 * Centralized projects data for the portfolio.
 * Use skill names from @/constants/SkillIcons (SKILL_ICONS / ALL_SKILLS) for consistency and icons.
 */

export interface ProjectLink {
	github?: string;
	demo?: string;
}

export interface Project {
	id: string;
	title: string;
	period?: string;
	/** e.g. "Consulting engagement", "Personal project", "Client work · Shipped" */
	roleLabel?: string;
	description: string;
	responsibilities: string[];
	/** Technology keys from SkillIcons for filter + icon display */
	skills: string[];
	image: string;
	featured?: boolean;
	links?: ProjectLink;
	/** Case-study fields: Problem → Approach → Architecture → Outcome */
	problem?: string;
	approach?: string;
	architecture?: string;
	outcome?: string;
}

export const PROJECTS: Project[] = [
	{
		id: "osfi-rag",
		title: "Hybrid RAG Pipeline for Regulatory Document Search",
		roleLabel: "Consulting engagement",
		period: "2025 - Present",
		description: "A hybrid retrieval-augmented generation (RAG) pipeline that answers questions over dense OSFI regulatory documents, built for a consulting client.",
		responsibilities: ["Building a hybrid RAG pipeline for regulatory document search across OSFI publications.", "Combining document retrieval with LLM generation so answers stay grounded in the source text."],
		// TODO(ABHISHEK): real stack per SOT:88 (embedding model, vector store, LLM, orchestration, hosting).
		// Skills intentionally empty until the verified stack is provided — do not guess (zero-fabrication gate).
		skills: [],
		image: "/images/osfi-rag.svg",
		featured: true,
		problem: "Regulatory teams need precise answers from dense OSFI documents, and keyword search fails on regulatory language.",
		approach: "Hybrid retrieval surfaces relevant passages from OSFI publications and feeds them to an LLM, so answers stay grounded in the source documents instead of keyword matches alone.",
		// TODO(ABHISHEK): retrieval strategy, chunking, eval method, full stack, verifiable results per SOT:88
		architecture: "Architecture details will be published once the engagement can be shared.",
		outcome: "In active development for a consulting client.",
	},
	{
		id: "expense-tracker",
		title: "Expense Tracker Web App",
		roleLabel: "Personal project",
		period: "2025",
		description: "A full-stack expense tracking application for recording, categorizing, and analyzing financial transactions, built with Node.js, Fastify, Next.js, and PostgreSQL.",
		responsibilities: ["Built the backend REST API with Node.js and Fastify, exposing endpoints for transactions, categories, and reporting.", "Implemented JWT and SSO authentication to secure user accounts and API access.", "Modeled the PostgreSQL schema with Prisma and containerized the stack with Docker for consistent deployment.", "Wrote Jest test coverage across API modules and deployed the Next.js frontend on Vercel."],
		// Jest and Vercel are part of the stack (SOT:78) but have no SKILL_ICONS keys yet
		skills: ["Node.js", "Fastify", "NextJS", "PostgreSQL", "Prisma", "Docker"],
		image: "/images/expense2.png",
		featured: false,
		links: {
			github: "https://github.com/abhishek08vyas/ExpenseTracker-Backend",
			demo: "https://expense-tracker-mun.vercel.app/",
		},
		problem: "Tracking expenses manually is tedious and gives no real-time view of spending patterns.",
		approach: "A Node.js/Fastify REST API with a Next.js frontend, secured with JWT/SSO authentication and covered by Jest tests.",
		architecture: "Fastify REST API backed by PostgreSQL through Prisma; Next.js frontend deployed on Vercel; Docker containers for consistent environments.",
		outcome: "Optimized API response times by 20% for real-time financial insights.",
	},
	{
		id: "ios-gesture-recognition",
		title: "iOS App for Real-Time Gesture Recognition",
		roleLabel: "MASc-era project",
		period: "2024",
		description: "A gesture detection model for iOS that offers real-time hand posture analysis using MediaPipe, reaching 78% accuracy across 40 classes combining ASL and gestures.",
		responsibilities: ["Built preprocessing pipeline extracting hand landmarks via MediaPipe", "Developed neural network with Conv2D layers, MaxPooling, and Dense layers", "Deployed model on both server and edge devices", "Implemented secure video processing and privacy compliance"],
		// FastAPI and OpenCV are part of the stack (SOT:83) but have no SKILL_ICONS keys yet
		skills: ["TensorFlow", "MediaPipe", "scikit-learn", "Python", "Docker"],
		image: "/images/ios.png",
		featured: false,
		links: {
			github: "https://github.com/abhishek08vyas/gesture_recognition",
		},
		problem: "Real-time hand-gesture recognition needs accurate classification and low-latency inference; server-only inference adds too much delay for live video.",
		approach: "Extracted hand landmarks with MediaPipe, trained a convolutional neural network in TensorFlow, and owned the full ML lifecycle from preprocessing to low-latency inference.",
		architecture: "MediaPipe landmark preprocessing feeding a Conv2D/MaxPooling/Dense network, served with FastAPI in Docker and deployed to both server and edge devices.",
		outcome: "Reached 78% accuracy across 40 classes and deployed the model to edge devices for low-latency inference.",
	},
	{
		id: "commissh",
		title: "Commissh",
		roleLabel: "Client work · Shipped",
		// TODO(ABHISHEK): year, team size
		description: "Commissh is a ticketing website for festivals, concerts, and sporting events, with a monthly ticket giveaway for users.",
		responsibilities: ["Built the frontend with Next.js, TypeScript, React, and Tailwind CSS, and containerized it with Docker for deployment on AWS."],
		skills: ["NextJS", "TypeScript", "JavaScript", "React", "Docker", "AWS", "Tailwind CSS"],
		image: "/images/commissh.png",
		featured: false,
		links: {
			demo: "https://commissh.com/",
		},
		outcome: "Live at commissh.com.",
	},
	{
		id: "ehalo",
		title: "Ehalo",
		roleLabel: "Client/team project · Live on App Store",
		// TODO(ABHISHEK): year, exact contribution
		description: "Ehalo is a trip planner app for creating trips, events, and checklists, with checklists attachable to trips and features available online and offline.",
		responsibilities: ["Built backend REST APIs with Express.js (MVC architecture) and MySQL, supporting trips, events, checklists, and trip sharing with online and offline availability."],
		skills: ["MySQL", "MongoDB", "React", "Docker", "Git"],
		image: "/images/ehalo.jpeg",
		featured: false,
		links: {
			demo: "https://apps.apple.com/ca/app/ehalo/id1588979357",
		},
		outcome: "Live on the App Store.",
	},
];

/** All unique technology/skill values across projects for filter chips */
export function getUniqueProjectSkills(): string[] {
	const set = new Set<string>();
	PROJECTS.forEach((p) => p.skills.forEach((s) => set.add(s)));
	return Array.from(set).sort();
}
