"use client";

import { useMemo, useState } from "react";
import { PROJECTS, getUniqueProjectSkills } from "@/data/projects";
import { commonStyles, colors } from "@/lib/theme-utils";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilters } from "./ProjectFilters";
import { motion } from "framer-motion";
import { HiCollection, HiEmojiSad } from "react-icons/hi";

export function ProjectsArchive() {
	const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState("");

	const uniqueSkills = useMemo(() => getUniqueProjectSkills(), []);

	const filteredProjects = useMemo(() => {
		return PROJECTS.filter((project) => {
			const matchesSkill = selectedSkill ? project.skills.includes(selectedSkill) : true;
			const searchLower = searchQuery.toLowerCase();
			const matchesSearch = project.title.toLowerCase().includes(searchLower) || project.skills.some((skill) => skill.toLowerCase().includes(searchLower)) || project.description.toLowerCase().includes(searchLower);
			return matchesSkill && matchesSearch;
		});
	}, [selectedSkill, searchQuery]);

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
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="pt-16 md:pt-20 pb-12 text-center"
				>
					{/* Project Count Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-6 shadow-sm">
						<HiCollection
							className="w-4 h-4"
							style={{ color: colors.brand.primary }}
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
					<p className="mt-4 text-[#797F8C] text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">A curated collection of systems, applications, and experiments showcasing modern development practices.</p>

					{/* Divider */}
					<div className="flex justify-center mt-6">
						<div className={commonStyles.header.divider} />
					</div>
				</motion.header>

				{/* Filters Section */}
				<section className="mb-12">
					<ProjectFilters
						skills={uniqueSkills}
						selectedSkill={selectedSkill}
						onSelectSkill={setSelectedSkill}
						searchQuery={searchQuery}
						onSearchChange={setSearchQuery}
					/>
				</section>

				{/* Results Counter */}
				{(selectedSkill || searchQuery) && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						className="mb-6 text-center"
					>
						<p className="text-sm text-[#797F8C]">
							Showing <span className="font-bold text-[#142240]">{filteredProjects.length}</span> of <span className="font-bold text-[#142240]">{PROJECTS.length}</span> projects
						</p>
					</motion.div>
				)}

				{/* Projects Grid */}
				<section className="pb-24">
					{filteredProjects.length > 0 ? (
						<motion.div
							initial="hidden"
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
							initial={{ opacity: 0, scale: 0.95 }}
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
									/>
								</div>

								{/* Text */}
								<div>
									<h3 className="text-2xl font-bold text-[#142240] mb-2">No Projects Found</h3>
									<p className="text-[#797F8C] mb-6 max-w-md mx-auto">No matches found for your current filters. Try adjusting your search criteria.</p>
								</div>

								{/* Reset Button */}
								<button
									onClick={handleResetFilters}
									className="px-6 py-3 font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl text-white"
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
