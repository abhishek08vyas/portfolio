import type { Metadata } from "next";
import Experience from "@/components/Experience";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
	title: "Experience — Abhishek Vyas",
	description: "3+ years shipping production systems, from SRE on-call to event-driven pipelines — now applied to AI-enabled systems.",
	alternates: {
		canonical: "/experience",
	},
	openGraph: {
		title: "Experience — Abhishek Vyas",
		description: "3+ years shipping production systems, from SRE on-call to event-driven pipelines — now applied to AI-enabled systems.",
		url: "/experience",
		siteName: "Abhishek Vyas — Portfolio",
		locale: "en_CA",
		type: "website",
	},
};

export default function ExperiencePage() {
	return (
		<div className="min-h-screen bg-white">
			<main>
				<Experience />
			</main>
			<Footer />
		</div>
	);
}
