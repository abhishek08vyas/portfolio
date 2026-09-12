"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { PROJECTS, getUniqueProjectSkills } from "@/data/projects";
import { commonStyles } from "@/lib/theme-utils";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilters } from "./ProjectFilters";
import { motion, useReducedMotion } from "motion/react";
import { HiCollection, HiEmojiSad, HiLightningBolt } from "react-icons/hi";

export function ProjectsArchive() {
	const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState("");
	const reduce = useReducedMotion();

	const uniqueSkills = useMemo(() => getUniqueProjectSkills(), []);

	const featuredProject = useMemo(() => PROJECTS.find((p) => p.featured), []);

	// Featured project is pinned above and always excluded from the grid below
	const gridProjects = useMemo(() => PROJECTS.filter((p) => !p.featured), []);

	const filteredProjects = useMemo(() => {
		return gridProjects.filter((project) => {
			const matchesSkill = selectedSkill ? project.skills.includes(selectedSkill) : true;
			const searchLower = searchQuery.toLowerCase();
			const matchesSearch = project.title.toLowerCase().includes(searchLower) || project.skills.some((skill) => skill.toLowerCase().includes(searchLower)) || project.description.toLowerCase().includes(searchLower);
			return matchesSkill && matchesSearch;
		});
	}, [gridProjects, selectedSkill, searchQuery]);

	const handleResetFilters = () => {
		setSelectedSkill(null);
		setSearchQuery("");
	};

	return (
		<div className="min-h-screen relative overflow-hidden">
			<div className={`${commonStyles.section.container} relative z-10`}>
				{/* Header Section */}
				<header className="pt-16 md:pt-20 pb-12 text-center animate-fade-in-down">
					{/* Project Count Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--surface-card)] backdrop-blur-sm rounded-full border border-[var(--edge)] mb-6 shadow-sm">
						<HiCollection
							className="w-4 h-4 text-[var(--accent-strong)]"
							aria-hidden="true"
						/>
						<span className="text-sm font-semibold text-[var(--text-strong)]">{PROJECTS.length} Projects</span>
					</div>

					{/* Title — serif display */}
					<h1 className={commonStyles.header.title + " text-4xl md:text-6xl mb-4 pb-0.5 overflow-visible leading-normal"}>Projects</h1>

					{/* Subtitle */}
					<p className="mt-4 text-[var(--text-body)] text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">Full-stack builds, AI/RAG pipelines, and client work, with the problem, approach, and outcome for each.</p>

					{/* Divider */}
					<div className="flex justify-center mt-6">
						<div className={commonStyles.header.divider} />
					</div>
				</header>

				{/* Pinned Featured Case Study */}
				{featuredProject && (
					<section
						id="osfi-rag"
						aria-labelledby="osfi-rag-title"
						className="scroll-mt-28 mb-14"
					>
						<div className="card-base overflow-hidden border-t-4 border-t-[var(--accent)]">
							{/* Badge row + title + description */}
							<div className="px-6 md:px-8 pt-6 md:pt-8">
								<div className="flex flex-wrap items-center gap-2 mb-4">
									<span className="bg-gradient-to-r from-[#79614b] to-[#544230] inline-flex items-center gap-1 text-white text-xs font-bold px-2.5 py-1 rounded-full">
										<HiLightningBolt
											className="w-3 h-3"
											aria-hidden="true"
										/>
										Featured
									</span>
									{featuredProject.roleLabel && <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent-strong)] border border-[var(--edge)]">{featuredProject.roleLabel}</span>}
									{featuredProject.period && <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full text-[var(--text-dim)] bg-[var(--surface-raised)] border border-[var(--edge)]">{featuredProject.period}</span>}
								</div>
								<h2
									id="osfi-rag-title"
									className="font-display text-xl md:text-2xl font-semibold text-[var(--text-strong)] tracking-tight mb-3"
								>
									{featuredProject.title}
								</h2>
								<p className="text-sm md:text-base text-[var(--text-body)] leading-relaxed">{featuredProject.description}</p>
							</div>

							{/* Image strip */}
							<div className="relative h-48 md:h-64 mx-6 md:mx-8 mt-6 rounded-xl overflow-hidden">
								<Image
									src={featuredProject.image}
									alt="Pipeline diagram: OSFI documents flow through hybrid retrieval into a grounded LLM answer"
									fill
									sizes="(max-width: 1024px) 100vw, 92vw"
									className="object-cover"
									priority
								/>
							</div>

							{/* Case-study 2×2 */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-8">
								{featuredProject.problem && (
									<div className="bg-[var(--surface-raised)] border border-[var(--edge)] rounded-xl p-5">
										<p className="text-[11px] uppercase font-bold tracking-widest text-[var(--accent-strong)] mb-1">Problem</p>
										<p className="text-sm text-[var(--text-body)] leading-relaxed">{featuredProject.problem}</p>
									</div>
								)}
								{featuredProject.approach && (
									<div className="bg-[var(--surface-raised)] border border-[var(--edge)] rounded-xl p-5">
										<p className="text-[11px] uppercase font-bold tracking-widest text-[var(--accent-strong)] mb-1">Approach</p>
										<p className="text-sm text-[var(--text-body)] leading-relaxed">{featuredProject.approach}</p>
									</div>
								)}
								{featuredProject.architecture && (
									<div className="bg-[var(--surface-raised)] border border-[var(--edge)] rounded-xl p-5">
										<p className="text-[11px] uppercase font-bold tracking-widest text-[var(--accent-strong)] mb-1">Architecture</p>
										<p className="text-sm text-[var(--text-body)] leading-relaxed">{featuredProject.architecture}</p>
									</div>
								)}
								{featuredProject.outcome && (
									<div className="bg-[var(--surface-raised)] border border-[var(--edge)] rounded-xl p-5">
										<p className="text-[11px] uppercase font-bold tracking-widest text-[var(--accent-strong)] mb-1">Outcome</p>
										<p className="text-sm font-medium text-[var(--text-body)] leading-relaxed flex items-center gap-2">
											<span
												className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0"
												aria-hidden="true"
											></span>
											{featuredProject.outcome}
										</p>
									</div>
								)}
							</div>
						</div>
					</section>
				)}

				{/* Filters Section */}
				<section className="mb-12">
					<ProjectFilters
						skills={uniqueSkills}
						totalProjects={PROJECTS.length}
						selectedSkill={selectedSkill}
						onSelectSkill={setSelectedSkill}
						searchQuery={searchQuery}
						onSearchChange={setSearchQuery}
					/>
				</section>

				{/* Screen-reader announcement of filter results (always mounted so updates are announced) */}
				<p
					role="status"
					aria-live="polite"
					className="sr-only"
				>
					{selectedSkill || searchQuery ? `Showing ${filteredProjects.length} of ${gridProjects.length} projects` : ""}
				</p>

				{/* Results Counter */}
				{(selectedSkill || searchQuery) && (
					<motion.div
						initial={reduce ? false : { opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						className="mb-6 text-center"
					>
						<p className="text-sm text-[var(--text-body)]">
							Showing <span className="font-bold text-[var(--text-strong)]">{filteredProjects.length}</span> of <span className="font-bold text-[var(--text-strong)]">{gridProjects.length}</span> projects
						</p>
					</motion.div>
				)}

				{/* Projects Grid */}
				<section className="pb-24">
					{filteredProjects.length > 0 ? (
						<motion.div
							initial={reduce ? false : "hidden"}
							animate="visible"
							variants={{
								hidden: { opacity: 0 },
								visible: {
									opacity: 1,
									transition: {
										staggerChildren: 0.1,
									},
								},
							}}
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
						>
							{filteredProjects.map((project) => (
								<ProjectCard
									key={project.id}
									project={project}
								/>
							))}
						</motion.div>
					) : (
						<motion.div
							initial={reduce ? false : { opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							className="text-center py-20 md:py-32 card-base"
						>
							<div className="flex flex-col items-center gap-4">
								{/* Icon */}
								<div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg bg-[var(--accent-soft)]">
									<HiEmojiSad
										className="w-10 h-10 text-[var(--accent-strong)]"
										aria-hidden="true"
									/>
								</div>

								{/* Text */}
								<div>
									<h3 className="font-display text-2xl font-semibold text-[var(--text-strong)] mb-2">No Projects Found</h3>
									<p className="text-[var(--text-body)] mb-6 max-w-md mx-auto">No matches found for your current filters. Try adjusting your search criteria.</p>
								</div>

								{/* Reset Button */}
								<button
									onClick={handleResetFilters}
									className={`${commonStyles.button.primary} px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2`}
								>
									Reset All Filters
								</button>
							</div>
						</motion.div>
					)}
				</section>
			</div>
		</div>
	);
}
