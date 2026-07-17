"use client";

import React, { useState } from "react";
import { FaBuilding, FaMapMarkerAlt, FaChevronDown, FaCircle, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Link from "next/link";
import { commonStyles } from "../lib/theme-utils";
import { HiCode } from "react-icons/hi";
import { EXPERIENCE_ITEMS } from "@/constants/ExperienceItems";
import { SKILL_ICONS } from "@/constants/SkillIcons";

const ExperiencePage: React.FC = () => {
	const [expanded, setExpanded] = useState<number>(-1); // -1 means all closed by default
	const [hoveredDot, setHoveredDot] = useState<number>(-1);

	const getSkillIcon = (skillName: string) => {
		// Sort by key length descending so "JavaScript" matches before "Java", etc.
		const entries = Object.entries(SKILL_ICONS).sort(([a], [b]) => b.length - a.length);
		const normalized = skillName.trim();
		for (const [key, icon] of entries) {
			if (normalized.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(normalized.toLowerCase())) return icon;
		}
		return <HiCode className="opacity-50" style={{ width: 16, height: 16 }} />;
	};

	const renderSkillBadge = (skill: string, isHeader: boolean) => (
		<span
			key={skill}
			className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] md:text-[11px] font-semibold border transition-all duration-500 ${isHeader ? "bg-white/10 border-white/20 text-white" : "bg-[var(--surface-card)] border-[var(--edge)] text-[var(--text-body)] shadow-sm"}`}
		>
			{/* Explicit SVG sizing fixes intermittent icon invisibility in flex containers (Firefox/Chrome) */}
			<span aria-hidden="true" className="w-4 h-4 min-w-4 min-h-4 flex items-center justify-center flex-shrink-0 [&>svg]:!w-4 [&>svg]:!h-4">{getSkillIcon(skill)}</span>
			{skill}
		</span>
	);

	return (
		<div
			id="experience"
			className="min-h-screen relative overflow-hidden"
		>
			<div className={`${commonStyles.section.container} relative z-10`}>
				{/* Enhanced Header Section */}
				<header className="pt-16 md:pt-20 pb-12 text-center animate-fade-in-down">
					{/* Experience Count Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--surface-card)] backdrop-blur-sm rounded-full border border-[var(--edge)] mb-6 shadow-sm">
						<FaBriefcase
							className="w-5 h-5 text-[var(--accent-strong)]"
							aria-hidden="true"
						/>
						<span className="text-sm font-semibold text-[var(--text-strong)]">
							{EXPERIENCE_ITEMS.filter((e) => e.type !== "education").length} Roles · {EXPERIENCE_ITEMS.filter((e) => e.type === "education").length} Degree
						</span>
					</div>

					{/* Title — serif display */}
					<h1 className={commonStyles.header.title + " text-4xl md:text-6xl mb-4 pb-0.5 overflow-visible leading-normal"}>Experience</h1>

					{/* Subtitle */}
					<p className="mt-4 text-[var(--text-body)] text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">3+ years shipping production systems, from SRE on-call to event-driven pipelines — now applied to AI-enabled systems.</p>

					{/* Divider */}
					<div className="flex justify-center mt-6">
						<div className={commonStyles.header.divider} />
					</div>
				</header>

				{/* Experience Timeline */}
				<section className="pb-24">
					<div className="max-w-4xl mx-auto space-y-6">
						{EXPERIENCE_ITEMS.map((exp, idx) => {
							const isExpanded = expanded === idx;
							const isHovered = hoveredDot === idx;
							const isEducation = exp.type === "education";
							const dotColor = isEducation ? "#5674ad" : "#d97706";
							const skillsArray = exp.skills.split(", ").map((s) => s.trim());
							const isLast = idx === EXPERIENCE_ITEMS.length - 1;

							return (
								<div
									key={idx}
									className="relative flex gap-4 animate-fade-in-up"
									style={{ animationDelay: `${idx * 100}ms` }}
									onMouseEnter={() => setHoveredDot(idx)}
									onMouseLeave={() => setHoveredDot(-1)}
								>
									{/* --- VERTICAL TIMELINE SIDEBAR --- */}
									<div className="w-auto flex-shrink-0 relative flex flex-col items-center">
										{/* Glassmorphism Period Badge */}
										<div className="mb-3 relative group/period">
											{/* Outer glow ring */}
											<div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#c7d4ee]/40 to-[#f7dfb4]/40 blur-md transition-all duration-300 ${isHovered ? "scale-110 opacity-80" : "scale-100 opacity-40"}`} />

											{/* Main glass badge */}
											<div className="relative bg-[var(--surface-card)] backdrop-blur-xl px-4 py-2 rounded-full border border-[var(--edge)] shadow-xl shadow-[var(--edge)]">
												{/* Text */}
												<span className="relative text-[11px] md:text-[12px] font-extrabold text-[var(--accent-strong)] uppercase tracking-wider whitespace-nowrap">{exp.period}</span>
											</div>
										</div>

										{/* Timeline Dot */}
										<div className="relative z-10">
											{/* Subtle pulse ring on hover */}
											<div
												className={`absolute inset-0 rounded-full transition-all duration-300 motion-reduce:transition-none ${isHovered ? "scale-[1.8] opacity-10" : "scale-100 opacity-0"}`}
												style={{ backgroundColor: dotColor }}
											/>

											{/* Main dot */}
											<div
												className={`w-3 h-3 rounded-full border-2 transition-all duration-300 motion-reduce:transition-none ${isExpanded ? "shadow-md scale-110" : isHovered ? "shadow-md scale-105" : "bg-[var(--surface-raised)] border-[var(--edge)] shadow-sm backdrop-blur-sm"} motion-reduce:transform-none`}
												style={isExpanded || isHovered ? { backgroundColor: dotColor, borderColor: dotColor, boxShadow: `0 4px 6px -1px ${dotColor}4D` } : undefined}
											>
												{/* Inner glow effect */}
												<div className={`absolute inset-0 rounded-full transition-all duration-300 ${isExpanded ? "bg-white/15" : isHovered ? "bg-white/20" : "bg-gradient-to-br from-white/30 to-transparent"}`} />

												{/* Center highlight */}
												{(isExpanded || isHovered) && <div className="absolute top-[1px] left-[1px] w-1 h-1 rounded-full bg-white/50 blur-[0.5px]" />}
											</div>
										</div>

										{/* Vertical Connecting Line */}
										{!isLast && (
											<div className="relative w-[2px] flex-1 min-h-[80px] mt-2">
												{/* Glow effect on hover */}
												<div className={`absolute inset-0 bg-gradient-to-b from-[#c7d4ee]/50 to-transparent blur-sm transition-opacity duration-300 ${isHovered ? "opacity-60" : "opacity-0"}`} />
												{/* Main line */}
												<div className="absolute inset-0 bg-gradient-to-b from-[var(--edge)] via-[var(--edge)] to-transparent" />
											</div>
										)}
									</div>

									{/* --- COMPACT MORPHING CARD --- */}
									<div className="flex-1 group">
										<div className={`rounded-3xl overflow-hidden border border-[var(--edge)] bg-[var(--surface-card)] backdrop-blur-sm transition-all duration-500 motion-reduce:transition-none ${isExpanded ? "shadow-[var(--shadow-hover)] translate-y-[-2px]" : "shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)]"}`}>
											{/* HEADER SECTION (Gradient, expand/collapse trigger) */}
											<button
												type="button"
												className="w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
												aria-expanded={isExpanded}
												aria-controls={"exp-body-" + idx}
												onClick={() => setExpanded(isExpanded ? -1 : idx)}
											>
												<div
													className="p-5 md:p-6 text-white relative transition-all duration-500 motion-reduce:transition-none overflow-hidden"
													style={{
														background: isEducation ? "linear-gradient(135deg, #3D5176, #5674ad)" : "linear-gradient(135deg, #142240, #3D5176)",
													}}
												>
													{/* Decorative Gradient Circles in Header */}
													<div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
													<div className="absolute -right-4 top-12 w-24 h-24 rounded-full bg-white/10 blur-xl" />
													<div className="absolute -left-6 -bottom-6 w-28 h-28 rounded-full bg-[#fbbf24]/20 blur-2xl" />

													<div className="flex justify-between items-start relative z-10">
														<div className="space-y-0.5">
															<h2 className="font-display text-lg md:text-xl font-semibold tracking-tight">{exp.title}</h2>
															<div className="flex flex-wrap items-center gap-3 text-[11px] font-medium text-white/80">
																<span className="flex items-center gap-1">
																	{isEducation ? (
																		<FaGraduationCap
																			className="text-[#fbbf24] w-3 h-3"
																			aria-hidden="true"
																		/>
																	) : (
																		<FaBuilding
																			className="text-[#fbbf24] w-3 h-3"
																			aria-hidden="true"
																		/>
																	)}
																	{exp.company}
																</span>
																<span className="flex items-center gap-1">
																	<FaMapMarkerAlt
																		className="w-3 h-3"
																		aria-hidden="true"
																	/>
																	{exp.location}
																</span>
																{isEducation && (
																	<>
																		<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/15 text-white border border-white/25">Education</span>
																		<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/15 text-white border border-white/25">AZ-204</span>
																	</>
																)}
															</div>
														</div>
														<div className={`p-1.5 rounded-xl bg-white/10 backdrop-blur-md transition-all duration-500 motion-reduce:transition-none ${isExpanded ? "rotate-180 bg-white/20" : ""}`}>
															<FaChevronDown
																className="w-4 h-4"
																aria-hidden="true"
															/>
														</div>
													</div>

													{/* Header Tech Stack (Visible only when COLLAPSED) */}
													<div className={`flex flex-wrap gap-1.5 transition-all duration-500 motion-reduce:transition-none origin-top overflow-hidden ${isExpanded ? "opacity-0 -translate-y-2 mt-0 max-h-0" : "opacity-100 translate-y-0 mt-4 max-h-20"}`}>
														{skillsArray.slice(0, 4).map((s) => renderSkillBadge(s, true))}
														{skillsArray.length > 4 && <span className="text-[10px] font-bold text-white/80 self-center">+{skillsArray.length - 4}</span>}
													</div>
												</div>
											</button>

											{/* EXPANDABLE BODY SECTION */}
											<div
												id={"exp-body-" + idx}
												className={`transition-all duration-500 motion-reduce:transition-none ease-in-out overflow-hidden ${isExpanded ? "max-h-[1200px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}
											>
												<div className="p-6 md:p-8 space-y-6 bg-[var(--surface-raised)]">
													{/* Morphing Landing Spot for Skills */}
													<div className={`space-y-3 transition-all duration-700 delay-100 motion-reduce:transition-none ${isExpanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
														<div className="flex items-center gap-2 mb-2">
															<div className="h-px w-4 bg-[var(--edge)]" />
															<span className="text-[10px] uppercase font-black tracking-widest text-[var(--text-dim)]">Full Tech Stack</span>
														</div>
														<div className="flex flex-wrap gap-2">{skillsArray.map((s) => renderSkillBadge(s, false))}</div>
													</div>

													{/* Achievement Points */}
													<div className={`space-y-4 transition-all duration-700 delay-200 motion-reduce:transition-none ${isExpanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
														<div className="flex items-center gap-2 mb-2">
															<div className="h-px w-4 bg-[var(--edge)]" />
															<span className="text-[10px] uppercase font-black tracking-widest text-[var(--text-dim)]">Responsibilities</span>
														</div>
														<div className="space-y-3.5">
															{exp.responsibilities.map((resp, i) => (
																<div
																	key={i}
																	className="flex gap-3 items-start group/item"
																>
																	<FaCircle
																		className="w-1.5 h-1.5 text-[var(--accent)] mt-2 flex-shrink-0 opacity-40 group-hover/item:opacity-100 group-hover/item:scale-150 transition-all motion-reduce:transition-none motion-reduce:transform-none"
																		aria-hidden="true"
																	/>
																	<p className="text-[var(--text-body)] text-[13px] md:text-sm leading-relaxed">{resp}</p>
																</div>
															))}
														</div>
													</div>

													{/* Metrics (only when present) */}
													{exp.metrics && (
														<div className="grid grid-cols-2 gap-3 max-w-sm">
															{Object.entries(exp.metrics).map(([label, value]) => (
																<div
																	key={label}
																	className="bg-[var(--surface-card)] border border-[var(--edge)] rounded-xl p-4"
																>
																	<div className="font-display text-xl font-semibold text-[var(--text-strong)]">{value}</div>
																	<div className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-dim)]">{label}</div>
																</div>
															))}
														</div>
													)}

													{/* Case-study link (only when present) */}
													{exp.href && (
														<Link
															href={exp.href}
															onClick={(e) => e.stopPropagation()}
															className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--text-strong)] hover:text-[var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 rounded-sm"
														>
															View the OSFI RAG case study →
														</Link>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</div>
		</div>
	);
};

export default ExperiencePage;
