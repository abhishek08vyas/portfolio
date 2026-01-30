import { Footer } from "@/components/Footer";
import { ProjectsArchive } from "@/components/projects/ProjectsArchive";

export default function ProjectsPage() {
	return (
		<div className="min-h-screen bg-white">
			<main>
				<ProjectsArchive />
			</main>
			<Footer />
		</div>
	);
}
