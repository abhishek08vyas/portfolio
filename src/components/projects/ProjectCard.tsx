"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { HiCode, HiCalendar } from "react-icons/hi";
import { SKILL_ICONS } from "@/constants/SkillIcons";
import { colors } from "@/lib/theme-utils";
import type { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface ProjectCardProps {
	project: Project;
}

function getSkillIcon(skill: string) {
	const Icon = skill in SKILL_ICONS ? SKILL_ICONS[skill] : null;
	return Icon ? (Icon as React.ReactNode) : <HiCode className="w-3.5 h-3.5" />;
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
			className="group relative bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col h-full"
		>
			{/* Image Section */}
			<div className="relative aspect-video w-full overflow-hidden bg-gray-100">
				<Image
					src={project.image}
					alt={project.title}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover transition-transform duration-700 group-hover:scale-110"
				/>

				{/* Gradient Overlay */}
				<div
					className="absolute inset-0"
					style={{
						background: `linear-gradient(to top, ${colors.brand.dark}90, transparent 50%)`,
					}}
				/>

				{/* Title Overlay */}
				<div className="absolute bottom-0 left-0 right-0 p-5">
					<h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
				</div>
			</div>

			{/* Content Section */}
			<div className="p-5 md:p-6 flex flex-col flex-1">
				{/* Period Badge */}
				<div className="flex items-center gap-2 mb-4">
					<HiCalendar className="w-4 h-4 text-[#797F8C]" />
					<span className="text-sm font-medium text-[#797F8C]">{project.period}</span>
				</div>

				{/* Description */}
				<p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 line-clamp-3 flex-1">{project.description}</p>

				{/* Skills Tags */}
				<div className="flex flex-wrap gap-2 mb-5">
					{project.skills.map((skill) => (
						<span
							key={skill}
							className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors"
							style={{
								backgroundColor: `${colors.brand.primary}08`,
								borderColor: `${colors.brand.primary}20`,
								color: colors.brand.dark,
							}}
						>
							{getSkillIcon(skill)}
							{skill}
						</span>
					))}
				</div>

				{/* Action Buttons */}
				<div className="flex items-center gap-3 mt-auto pt-5 border-t border-gray-100">
					{project.links?.github && (
						<a
							href={project.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white text-[#142240] hover:border-[#142240] hover:bg-gray-50 transition-all font-semibold text-sm"
							aria-label="View GitHub Repository"
						>
							<FaGithub className="w-4 h-4" />
							<span>Code</span>
						</a>
					)}
					{project.links?.demo && (
						<a
							href={project.links.demo}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md hover:shadow-lg"
							style={{
								background: `linear-gradient(135deg, ${colors.brand.primary} 0%, ${colors.brand.medium} 100%)`,
								color: "white",
							}}
							aria-label="View Live Demo"
						>
							<FiExternalLink className="w-4 h-4" />
							<span>Demo</span>
						</a>
					)}
				</div>
			</div>
		</motion.article>
	);
}
