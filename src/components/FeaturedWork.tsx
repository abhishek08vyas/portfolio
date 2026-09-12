"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { HiLightningBolt } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { PROJECTS } from "@/data/projects";
import { commonStyles } from "@/lib/theme-utils";
import { SectionHeading } from "./SectionHeading";

export const FeaturedWork = () => {
	const reduce = useReducedMotion();
	const project = PROJECTS.find((p) => p.id === "osfi-rag");

	if (!project) return null;

	return (
		<section
			id="featured-work"
			className="relative py-16 md:py-20 overflow-hidden"
		>
			<div className={commonStyles.section.container}>
				{/* Section header */}
				<SectionHeading
					num="01"
					title="Featured Work"
				/>

				<motion.div
					initial={reduce ? false : { opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className={`group/card max-w-6xl mx-auto ${commonStyles.card.base} ${commonStyles.card.hover} overflow-hidden`}
				>
					<div className="grid grid-cols-1 lg:grid-cols-5">
						{/* Image column — diagram fits fully (object-contain); warm-cream frame in light, near-black in dark */}
						<div className="lg:col-span-2 relative aspect-[3/2] lg:aspect-auto lg:min-h-[320px] bg-gradient-to-br from-[#f4ede2] to-[#efe6da] dark:from-[#141416] dark:to-[#0d0d0f] overflow-hidden">
							<Image
								src={project.image}
								alt="Pipeline diagram: OSFI documents flow through hybrid retrieval into a grounded LLM answer"
								fill
								sizes="(max-width: 1024px) 100vw, 460px"
								className="object-contain p-4 md:p-5 transition-transform duration-500 group-hover/card:scale-[1.02] motion-reduce:transform-none"
							/>
						</div>

						{/* Content column */}
						<div className="lg:col-span-3 p-6 md:p-8">
							{/* Badge row */}
							<div className="flex flex-wrap items-center gap-2 mb-4">
								<span className="bg-gradient-to-r from-[#79614b] to-[#544230] inline-flex items-center gap-1 text-white text-xs font-bold px-2.5 py-1 rounded-full">
									<HiLightningBolt
										className="w-3 h-3"
										aria-hidden="true"
									/>
									Featured
								</span>
								{project.roleLabel && <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--accent-soft)] text-[var(--accent-strong)] border border-[var(--edge)]">{project.roleLabel}</span>}
								{project.period && <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full text-[var(--text-dim)] bg-[var(--surface-raised)] border border-[var(--edge)]">{project.period}</span>}
							</div>

							{/* Title */}
							<h3 className="font-display text-xl md:text-2xl font-semibold text-[var(--text-strong)] tracking-tight mb-4">{project.title}</h3>

							{/* Problem / Approach / Outcome */}
							<div className="space-y-4">
								{project.problem && (
									<div>
										<p className="text-[11px] uppercase font-bold tracking-widest text-[var(--accent-strong)] mb-1">Problem</p>
										<p className="text-sm md:text-base text-[var(--text-body)] leading-relaxed">{project.problem}</p>
									</div>
								)}
								{project.approach && (
									<div>
										<p className="text-[11px] uppercase font-bold tracking-widest text-[var(--accent-strong)] mb-1">Approach</p>
										<p className="text-sm md:text-base text-[var(--text-body)] leading-relaxed">{project.approach}</p>
									</div>
								)}
								{project.outcome && (
									<div>
										<p className="text-[11px] uppercase font-bold tracking-widest text-[var(--accent-strong)] mb-1">Outcome</p>
										<p className="text-sm md:text-base font-medium text-[var(--text-body)] leading-relaxed flex items-center gap-2">
											<span
												className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0"
												aria-hidden="true"
											></span>
											{project.outcome}
										</p>
									</div>
								)}
							</div>

							{/* Skills chips — only when the verified stack exists */}
							{project.skills.length > 0 && (
								<div className="flex flex-wrap gap-2 mt-4">
									{project.skills.map((skill) => (
										<span
											key={skill}
											className={commonStyles.skillTag + " !px-3 !py-1.5 !text-xs"}
										>
											{skill}
										</span>
									))}
								</div>
							)}

							{/* CTA */}
							<div className="mt-6">
								<Link
									href="/projects#osfi-rag"
									className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-strong)] hover:text-[var(--accent-strong)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 rounded-sm"
								>
									Read the case study
									<FaArrowRight
										className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
										aria-hidden="true"
									/>
								</Link>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
