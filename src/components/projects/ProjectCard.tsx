"use client";

import Image from "next/image";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { HiCode, HiCalendar } from "react-icons/hi";
import { SKILL_ICONS } from "@/constants/SkillIcons";
import type { Project } from "@/data/projects";
import { motion, useReducedMotion } from "framer-motion";

interface ProjectCardProps {
	project: Project;
}

function getSkillIcon(skill: string) {
	const Icon = skill in SKILL_ICONS ? SKILL_ICONS[skill] : null;
	return Icon ? (Icon as React.ReactNode) : <HiCode className="w-3.5 h-3.5" />;
}

export function ProjectCard({ project }: ProjectCardProps) {
	const reduce = useReducedMotion();

	return (
		<motion.article
			initial={reduce ? false : { opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
			className="group relative bg-[var(--surface-card)] backdrop-blur-sm rounded-3xl overflow-hidden border border-[var(--edge)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 flex flex-col h-full"
		>
			{/* Image Section — soft lavender backdrop (muted plum in dark) */}
			<div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#e6ddff] to-[#cdc4f9] dark:from-[#37306b] dark:to-[#2a2450]">
				<Image
					src={project.image}
					alt=""
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
					className="object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:transform-none"
				/>

				{/* Gradient Overlay */}
				<div
					className="absolute inset-0"
					style={{
						background: "linear-gradient(to top, rgba(42, 36, 64, 0.85), transparent 50%)",
					}}
				/>

				{/* Role Label Badge */}
				{project.roleLabel && <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/85 backdrop-blur-sm text-[#2a2440] shadow-sm">{project.roleLabel}</span>}

				{/* Title Overlay */}
				<div className="absolute bottom-0 left-0 right-0 p-5">
					<h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
				</div>
			</div>

			{/* Content Section */}
			<div className="p-5 md:p-6 flex flex-col flex-1">
				{/* Period Badge */}
				{project.period && (
					<div className="flex items-center gap-2 mb-4">
						<HiCalendar
							className="w-4 h-4 text-[var(--text-dim)]"
							aria-hidden="true"
						/>
						<span className="text-sm font-medium text-[var(--text-dim)]">{project.period}</span>
					</div>
				)}

				{/* Description */}
				<p className="text-[var(--text-body)] text-sm md:text-base leading-relaxed mb-5 line-clamp-3 flex-1">{project.description}</p>

				{/* Outcome */}
				{project.outcome && (
					<p className="flex items-start gap-2 text-sm font-medium text-[var(--text-strong)] mb-5">
						<FaArrowRight
							className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--accent-strong)]"
							aria-hidden="true"
						/>
						{project.outcome}
					</p>
				)}

				{/* Skills Tags */}
				{project.skills.length > 0 && (
					<div className="flex flex-wrap gap-2 mb-5">
						{project.skills.map((skill) => (
							<span
								key={skill}
								className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors bg-[var(--accent-soft)] border-[var(--edge)] text-[var(--text-strong)]"
							>
								<span aria-hidden="true">{getSkillIcon(skill)}</span>
								{skill}
							</span>
						))}
					</div>
				)}

				{/* Action Buttons */}
				<div className="flex items-center gap-3 mt-auto pt-5 border-t border-[var(--edge)]">
					{project.links?.github && (
						<a
							href={project.links.github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[var(--edge)] bg-[var(--surface-raised)] text-[var(--text-strong)] hover:bg-[var(--accent-soft)] transition-all font-semibold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2"
							aria-label={`Code — ${project.title} GitHub repository (opens in new tab)`}
						>
							<FaGithub
								className="w-4 h-4"
								aria-hidden="true"
							/>
							<span>Code</span>
						</a>
					)}
					{project.links?.demo && (
						<a
							href={project.links.demo}
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#f26d78] to-[#e04f5f] transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2"
							aria-label={`Demo — ${project.title} live demo (opens in new tab)`}
						>
							<FiExternalLink
								className="w-4 h-4"
								aria-hidden="true"
							/>
							<span>Demo</span>
						</a>
					)}
				</div>
			</div>
		</motion.article>
	);
}
