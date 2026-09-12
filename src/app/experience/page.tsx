import type { Metadata } from "next";
import Experience from "@/components/Experience";
import { Footer } from "@/components/Footer";

const description = "Full-stack software developer with 4+ years building production systems: backend services, distributed systems, cloud, and enterprise SaaS. Java/Spring Boot and Kafka through Python/FastAPI, Next.js, Azure, security, accessibility, and AI-assisted engineering.";

export const metadata: Metadata = {
	title: "Experience | Abhishek Vyas, Full-Stack Developer",
	description,
	keywords: ["Full Stack Developer", "Backend Developer", "Python Developer", "Java Developer", "React Developer", "FastAPI", "Spring Boot", "Microservices", "Distributed Systems", "Toronto Software Developer", "Canada Software Developer", "Accessibility", "Cloud Engineering", "AI-Assisted Software Development"],
	alternates: {
		canonical: "/experience",
	},
	openGraph: {
		title: "Experience | Abhishek Vyas, Full-Stack Developer",
		description,
		url: "/experience",
		siteName: "Abhishek Vyas Portfolio",
		locale: "en_CA",
		type: "website",
	},
};

export default function ExperiencePage() {
	return (
		<div className="min-h-screen">
			<main>
				<Experience />
			</main>
			<Footer />
		</div>
	);
}
