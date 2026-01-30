import Experience from "@/components/Experience";

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
		</div>
	);
}
