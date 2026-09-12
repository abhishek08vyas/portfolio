import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ProjectsArchive } from "@/components/projects/ProjectsArchive";

export const metadata: Metadata = {
	title: "Projects | Abhishek Vyas",
	description: "Full-stack builds, AI/RAG pipelines, and client work, with the problem, approach, and outcome for each.",
	alternates: {
		canonical: "/projects",
	},
	openGraph: {
		title: "Projects | Abhishek Vyas",
		description: "Full-stack builds, AI/RAG pipelines, and client work, with the problem, approach, and outcome for each.",
		url: "/projects",
		siteName: "Abhishek Vyas Portfolio",
		locale: "en_CA",
		type: "website",
	},
};

export default function ProjectsPage() {
	return (
		<div className="min-h-screen">
			<main>
				<ProjectsArchive />
			</main>
			<Footer />
		</div>
	);
}
