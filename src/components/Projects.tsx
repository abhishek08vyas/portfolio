import { useState } from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { HiLightningBolt, HiCode } from "react-icons/hi";
import { Button } from "./ui/button";
import { ContactModal } from "./ContactModel";
import Image from "next/image";
import { colors, commonStyles } from "../lib/theme-utils";
import { SKILL_ICONS } from "@/constants/SkillIcons";
import { PROJECTS } from "@/data/projects";

/** Top 2 non-featured projects; the featured project already has its own FeaturedWork section above */
const topTwoProjects = PROJECTS.filter((p) => !p.featured).slice(0, 2);
const hasAnyFeatured = topTwoProjects.some((p) => p.featured === true);

// Helper function to get icon for a technology (uses shared SKILL_ICONS)
const getTechIcon = (tech: string) => {
	if (SKILL_ICONS[tech]) {
		return SKILL_ICONS[tech];
	}
	return (
		<HiCode
			className="w-4 h-4 mr-1"
			style={{ color: "#6b7280" }}
		/>
	);
};

export const Projects = () => {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);

	const openContactModal = () => {
		setIsContactModalOpen(true);
	};

	const closeContactModal = () => {
		setIsContactModalOpen(false);
	};

	return (
		<section
			id="projects"
			className="relative py-12 overflow-hidden"
		>
			{/* Subtle background with light gradients */}
			<div className={`absolute inset-0 ${commonStyles.section.background}`}>
				<div className="absolute inset-0 opacity-5">
					<div
						className={`absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl`}
						style={{ backgroundColor: `${colors.brand.dark}10` }}
					></div>
					<div
						className={`absolute bottom-10 right-10 w-64 h-64 rounded-full blur-3xl`}
						style={{ backgroundColor: `${colors.brand.light}10` }}
					></div>
				</div>
			</div>

			<div className={commonStyles.section.container}>
				{/* Minimalist section header */}
				<div className="mb-12 text-center">
					<h2 className={commonStyles.header.title}>Project Spotlight</h2>
					<div className="flex items-center justify-center">
						<div className={commonStyles.header.divider}></div>
					</div>
				</div>

				{/* Top 2 projects side by side (left & right) */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
					{topTwoProjects.map((project) => (
						<div
							key={project.id}
							className={`relative ${commonStyles.card.base} ${commonStyles.card.hover}`}
						>
							{/* Image */}
							<div className="relative h-48 overflow-hidden">
								<div className="relative w-full h-full">
									<Image
										src={project.image}
										alt=""
										fill
										sizes="(max-width: 768px) 100vw, 560px"
										className="object-cover transition-transform duration-500 hover:scale-105 motion-reduce:transform-none"
									/>
								</div>
								<div
									className="absolute inset-0"
									style={{ background: `linear-gradient(to top, ${colors.brand.dark}80, transparent)` }}
								/>
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<h3 className="text-lg font-bold text-white">{project.title}</h3>
								</div>
								{hasAnyFeatured && project.featured && (
									<span
										className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full flex items-center shadow-sm"
										style={{ color: colors.brand.dark }}
									>
										<HiLightningBolt className="w-3 h-3 mr-1" aria-hidden="true" />
										Featured
									</span>
								)}
							</div>

							{/* Content */}
							<div className="p-4">
								<p className="text-gray-600 mb-3 text-sm">{project.description}</p>

								<div className="flex flex-wrap gap-1.5 mb-3">
									{project.skills.slice(0, 5).map((tech, idx) => (
										<div
											key={`${project.id}-${idx}`}
											className="px-2 py-0.5 bg-gray-50 rounded-md text-xs font-medium border border-gray-100 flex items-center"
										>
											<span aria-hidden="true">{getTechIcon(tech)}</span>
											{tech}
										</div>
									))}
								</div>

								<div className="flex justify-between items-center mt-2">
									{project.skills.length > 5 && (
										<span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
											And {project.skills.length - 5} More {project.skills.length - 5 === 1 ? "Technology" : "Technologies"}
										</span>
									)}
									<div className="flex space-x-2 ml-auto">
										{project.links?.github && (
											<a
												href={project.links.github}
												target="_blank"
												rel="noopener noreferrer"
												className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white flex items-center justify-center text-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
												aria-label={`${project.title} — GitHub repository (opens in new tab)`}
											>
												<FaGithub className="w-4.5 h-4.5" aria-hidden="true" />
											</a>
										)}
										{project.links?.demo && (
											<a
												href={project.links.demo}
												target="_blank"
												rel="noopener noreferrer"
												className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white flex items-center justify-center text-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
												aria-label={`${project.title} — live demo (opens in new tab)`}
											>
												<FiExternalLink className="w-4.5 h-4.5" aria-hidden="true" />
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* View All Projects / Browse All - Minimalist design */}
				<div className="flex flex-wrap justify-center gap-3 mt-10">
					<Button
						asChild
						variant="outline"
						className="cursor-pointer font-medium px-5 py-2 rounded-md transition-all text-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
						style={{
							borderColor: colors.brand.dark,
							color: colors.brand.dark,
						}}
					>
						<a href="/projects">
							Browse All Projects
							<FaArrowRight className="w-3.5 h-3.5 ml-1.5" aria-hidden="true" />
						</a>
					</Button>
				</div>

				{/* Simplified Call to Action */}
				<div className="mt-20 max-w-3xl mx-auto">
					<div
						className="rounded-lg p-6 shadow-md text-center"
						style={{ backgroundColor: colors.brand.dark }}
					>
						<h3 className="text-xl font-bold text-white mb-3">Have a backend or AI project in mind?</h3>

						<p className="text-gray-300 mb-4 max-w-lg mx-auto text-sm">I build backend systems, event-driven pipelines, and RAG applications. Open to full-time roles and freelance work.</p>

						<button
							onClick={openContactModal}
							className="cursor-pointer group inline-flex items-center justify-center bg-white font-medium px-5 py-2 rounded-md text-sm transition-all hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#142240]"
							style={{ color: colors.brand.dark }}
						>
							Start a Conversation
							<FaArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform motion-reduce:transform-none" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>

			{/* Contact Modal */}
			<ContactModal
				isOpen={isContactModalOpen}
				onClose={closeContactModal}
			/>
		</section>
	);
};
