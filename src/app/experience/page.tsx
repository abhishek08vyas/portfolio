import Experience from "@/components/Experience";
import { Footer } from "@/components/Footer";

export const metadata = {
	title: "Experience | Abhishek Vyas",
	description: "Work experience and career history",
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
