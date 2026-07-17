"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { PROJECTS, getUniqueProjectSkills } from "@/data/projects";
import { commonStyles, colors } from "@/lib/theme-utils";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilters } from "./ProjectFilters";
import { motion, useReducedMotion } from "framer-motion";
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
		<div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
			{/* Subtle Background Pattern */}
			<div className="absolute inset-0 -z-10 opacity-10">
				<div
					className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[100px]"
					style={{ backgroundColor: colors.brand.primary }}
				/>
				<div
					className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[100px]"
					style={{ backgroundColor: colors.brand.medium }}
				/>
			</div>

			<main className={`${commonStyles.section.container} relative z-10`}>
				{/* Header Section */}
				<motion.header
					initial={reduce ? false : { opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="pt-16 md:pt-20 pb-12 text-center"
				>
					{/* Project Count Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-6 shadow-sm">
						<HiCollection
							className="w-4 h-4"
							style={{ color: colors.brand.primary }}
							aria-hidden="true"
						/>
						<span
							className="text-sm font-semibold"
							style={{ color: colors.brand.dark }}
						>
							{PROJECTS.length} Projects
						</span>
					</div>

					{/* Title with Gradient */}
					<h1 className={commonStyles.header.title + " text-4xl md:text-6xl mb-4 pb-0.5 overflow-visible leading-normal"}>Library</h1>

					{/* Subtitle */}
					<p className="mt-4 text-gray-600 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">Backend systems, AI/RAG pipelines, and client work — with the problem, approach, and outcome for each.</p>

					{/* Divider */}
					<div className="flex justify-center mt-6">
						<div className={commonStyles.header.divider} />
					</div>
				</motion.header>

				{/* Pinned Featured Case Study */}
				{featuredProject && (
					<section
						id="osfi-rag"
						aria-labelledby="osfi-rag-title"
						className="scroll-mt-28 mb-14"
					>
						<div className="card-base overflow-hidden border-t-4 border-t-[#142240]">
							{/* Badge row + title + description */}
							<div className="px-6 md:px-8 pt-6 md:pt-8">
								<div className="flex flex-wrap items-center gap-2 mb-4">
									<span className="brand-gradient inline-flex items-center gap-1 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
										<HiLightningBolt
											className="w-3 h-3"
											aria-hidden="true"
										/>
										Featured
									</span>
									{featuredProject.roleLabel && <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-[#142240]/5 text-[#142240] border border-[#142240]/15">{featuredProject.roleLabel}</span>}
									{featuredProject.period && <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full text-gray-600 bg-gray-50 border border-gray-200">{featuredProject.period}</span>}
								</div>
								<h2
									id="osfi-rag-title"
									className="text-xl md:text-2xl font-bold text-[#142240] tracking-tight mb-3"
								>
									{featuredProject.title}
								</h2>
								<p className="text-sm md:text-base text-gray-600 leading-relaxed">{featuredProject.description}</p>
							</div>

							{/* Image strip */}
							<div className="relative h-48 md:h-64 mx-6 md:mx-8 mt-6 rounded-xl overflow-hidden">
								<Image
									src={featuredProject.image}
									alt=""
									fill
									sizes="(max-width: 1024px) 100vw, 960px"
									className="object-cover"
								/>
							</div>

							{/* Case-study 2×2 */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-8">
								{featuredProject.problem && (
									<div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
										<p className="text-[11px] uppercase font-bold tracking-widest text-[#3D5176] mb-1">Problem</p>
										<p className="text-sm text-gray-600 leading-relaxed">{featuredProject.problem}</p>
									</div>
								)}
								{featuredProject.approach && (
									<div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
										<p className="text-[11px] uppercase font-bold tracking-widest text-[#3D5176] mb-1">Approach</p>
										<p className="text-sm text-gray-600 leading-relaxed">{featuredProject.approach}</p>
									</div>
								)}
								{featuredProject.architecture && (
									<div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
										<p className="text-[11px] uppercase font-bold tracking-widest text-[#3D5176] mb-1">Architecture</p>
										<p className="text-sm text-gray-600 leading-relaxed">{featuredProject.architecture}</p>
									</div>
								)}
								{featuredProject.outcome && (
									<div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
										<p className="text-[11px] uppercase font-bold tracking-widest text-[#3D5176] mb-1">Outcome</p>
										<p className="text-sm font-medium text-gray-700 leading-relaxed flex items-center gap-2">
											<span
												className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"
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

				{/* Results Counter */}
				{(selectedSkill || searchQuery) && (
					<motion.div
						initial={reduce ? false : { opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						className="mb-6 text-center"
					>
						<p className="text-sm text-gray-600">
							Showing <span className="font-bold text-[#142240]">{filteredProjects.length}</span> of <span className="font-bold text-[#142240]">{gridProjects.length}</span> projects
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
							className="text-center py-20 md:py-32 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-100 shadow-lg"
						>
							<div className="flex flex-col items-center gap-4">
								{/* Icon */}
								<div
									className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
									style={{ backgroundColor: `${colors.brand.primary}10` }}
								>
									<HiEmojiSad
										className="w-10 h-10"
										style={{ color: colors.brand.medium }}
										aria-hidden="true"
									/>
								</div>

								{/* Text */}
								<div>
									<h3 className="text-2xl font-bold text-[#142240] mb-2">No Projects Found</h3>
									<p className="text-gray-600 mb-6 max-w-md mx-auto">No matches found for your current filters. Try adjusting your search criteria.</p>
								</div>

								{/* Reset Button */}
								<button
									onClick={handleResetFilters}
									className="px-6 py-3 font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
									style={{
										background: `linear-gradient(135deg, ${colors.brand.primary} 0%, ${colors.brand.medium} 100%)`,
									}}
								>
									Reset All Filters
								</button>
							</div>
						</motion.div>
					)}
				</section>
			</main>
		</div>
	);
}
