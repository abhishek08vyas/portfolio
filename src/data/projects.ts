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
	// period: string;
	description: string;
	responsibilities: string[];
	/** Technology keys from SkillIcons for filter + icon display */
	skills: string[];
	image: string;
	featured?: boolean;
	links?: ProjectLink;
}

export const PROJECTS: Project[] = [
	{
		id: "expense-tracker",
		title: "Expense Tracker Web App",
		// period: "Jan 2025 - April 2025",
		description: "A comprehensive financial management application helping users track, categorize, and analyze financial transactions.",
		responsibilities: ["Designed and implemented backend architecture using Spring Boot and Java", "Established secure RESTful API endpoints with JWT authentication", "Containerized the application using Docker for consistent deployment", "Architected PostgreSQL database schema for financial tracking", "Collaborated with frontend team for integration using NextJS"],
		skills: ["NextJS", "Fastify", "TypeScript", "JavaScript", "Redux", "Prisma", "PostgreSQL", "Docker", "AWS", "Tailwind CSS", "Swagger API docs"],
		image: "/images/expense2.png",
		featured: false,
		links: {
			github: "https://github.com/abhishek08vyas/ExpenseTracker-Backend",
			demo: "https://expense-tracker-mun.vercel.app/",
		},
	},
	{
		id: "ios-gesture-recognition",
		title: "iOS App for Real-Time Gesture Recognition",
		// period: "May 2024 - Dec 2024",
		description: "A gesture detection model for iOS that offers real-time hand posture analysis using MediaPipe trained on 40 classes combining ASL and gestures.",
		responsibilities: ["Built preprocessing pipeline extracting hand landmarks via MediaPipe", "Developed neural network with Conv2D layers, MaxPooling, and Dense layers", "Deployed model on both server and edge devices", "Implemented secure video processing and privacy compliance"],
		skills: ["TensorFlow", "MediaPipe", "scikit-learn", "Python", "PostgreSQL", "AWS"],
		image: "/images/ios.png",
		featured: true,
		links: {
			github: "https://github.com/abhishek08vyas/gesture_recognition",
		},
	},
	{
		id: "commissh",
		title: "Commissh",
		description: "Commissh is a website that sells tickets for festivals, concerts, and sporting events. There is giveaway every month for the tickets.",
		responsibilities: ["Developed the frontend of the website using NextJS, TypeScript, JavaScript, React, Docker, AWS, Tailwind CSS"],
		skills: ["NextJS", "TypeScript", "JavaScript", "React", "Docker", "AWS", "Tailwind CSS"],
		image: "/images/commissh.png",
		featured: false,
		links: {
			demo: "https://commissh.com/",
		},
	},
	{
		id: "ehalo",
		title: "Ehalo",
		// period: "Jun 2021 - Aug 2023",
		description: "Ehalo is a free trip planner app. It allows you to create trips, events and checklists. You can also attach the checklist with your trips.",
		responsibilities: ["Led the Backend Team and Developed Rest APIs using ExpressJS, MVC architecture and MySQL.", "The features are available online and offline anywhere.", "Share your trips with family and friends to collaborate and have fun."],
		skills: ["MySQL", "MongoDB", "React", "Docker", "Git"],
		image: "/images/ehalo.jpeg",
		featured: false,
		links: {
			demo: "https://apps.apple.com/ca/app/ehalo/id1588979357",
		},
	},
];

/** All unique technology/skill values across projects for filter chips */
export function getUniqueProjectSkills(): string[] {
	const set = new Set<string>();
	PROJECTS.forEach((p) => p.skills.forEach((s) => set.add(s)));
	return Array.from(set).sort();
}
