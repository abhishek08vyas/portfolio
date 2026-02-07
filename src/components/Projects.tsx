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

/** Top 2 projects from centralized data; featured flag only shown when at least one has featured: true */
const topTwoProjects = PROJECTS.slice(0, 2);
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
							{/* Top right - GitHub & demo links */}
							<div className="absolute top-4 right-4 z-10 flex space-x-2">
								{project.links?.github && (
									<a
										href={project.links.github}
										target="_blank"
										rel="noopener noreferrer"
										className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm hover:bg-gray-800 hover:text-white flex items-center justify-center text-gray-700 transition-colors shadow-sm"
										aria-label="GitHub"
									>
										<FaGithub className="w-5 h-5" />
									</a>
								)}
								{project.links?.demo && (
									<a
										href={project.links.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm hover:bg-gray-800 hover:text-white flex items-center justify-center text-gray-700 transition-colors shadow-sm"
										aria-label="Live Demo"
									>
										<FiExternalLink className="w-5 h-5" />
									</a>
								)}
							</div>

							{/* Image */}
							<div className="relative h-48 overflow-hidden">
								<div className="relative w-full h-full">
									<Image
										src={project.image}
										alt={project.title}
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										className="object-cover transition-transform duration-500 hover:scale-105"
										style={{ objectFit: "cover" }}
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
										<HiLightningBolt className="w-3 h-3 mr-1" />
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
											{getTechIcon(tech)}
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
												className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white flex items-center justify-center text-gray-700 transition-colors"
												aria-label="GitHub"
											>
												<FaGithub className="w-4.5 h-4.5" />
											</a>
										)}
										{project.links?.demo && (
											<a
												href={project.links.demo}
												target="_blank"
												rel="noopener noreferrer"
												className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white flex items-center justify-center text-gray-700 transition-colors"
												aria-label="Live Demo"
											>
												<FiExternalLink className="w-4.5 h-4.5" />
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
					<a href="/projects">
						<Button
							variant="outline"
							className="font-medium px-5 py-2 rounded-md transition-all text-sm hover:bg-gray-50"
							style={{
								borderColor: colors.brand.dark,
								color: colors.brand.dark,
							}}
						>
							Browse All Projects
							<FaArrowRight className="w-3.5 h-3.5 ml-1.5" />
						</Button>
					</a>
				</div>

				{/* Simplified Call to Action */}
				<div className="mt-20 max-w-3xl mx-auto">
					<div
						className="rounded-lg p-6 shadow-md text-center"
						style={{ backgroundColor: colors.brand.dark }}
					>
						<h3 className="text-xl font-bold text-white mb-3">Ready to bring your vision to life?</h3>

						<p className="text-gray-300 mb-4 max-w-lg mx-auto text-sm">I specialize in building scalable, high-performance applications with cutting-edge technologies. Let&apos;s collaborate on your next project.</p>

						<button
							onClick={openContactModal}
							className="group inline-flex items-center justify-center bg-white font-medium px-5 py-2 rounded-md text-sm transition-all hover:bg-gray-50"
							style={{ color: colors.brand.dark }}
						>
							Start a Conversation
							<FaArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
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
