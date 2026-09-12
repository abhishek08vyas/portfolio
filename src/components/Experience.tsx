"use client";

import React, { useState } from "react";
import { FaBuilding, FaMapMarkerAlt, FaChevronDown, FaCircle, FaBriefcase, FaRobot, FaUniversalAccess } from "react-icons/fa";
import Link from "next/link";
import { commonStyles } from "../lib/theme-utils";
import { HiCode } from "react-icons/hi";
import { EXPERIENCE_ITEMS, EARLIER_EXPERIENCE, CAPABILITY_TAGS } from "@/constants/ExperienceItems";
import { SKILL_ICONS } from "@/constants/SkillIcons";

const ACCENT = "#79614b";

const ExperiencePage: React.FC = () => {
	const [expanded, setExpanded] = useState<number>(-1); // -1 means all collapsed by default
	const [hoveredDot, setHoveredDot] = useState<number>(-1);
	const [showEarlier, setShowEarlier] = useState<boolean>(false);

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
						<span className="text-sm font-semibold text-[var(--text-strong)]">{EXPERIENCE_ITEMS.length} Roles</span>
					</div>

					{/* Title — serif display */}
					<h1 className={commonStyles.header.title + " text-4xl md:text-6xl mb-4 pb-0.5 overflow-visible leading-normal"}>Experience</h1>

					{/* One-line subtitle */}
					<p className="mt-4 text-[var(--text-body)] text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">3+ years shipping production systems, from SRE on-call to event-driven pipelines, now applied to AI-enabled systems.</p>

					{/* Divider */}
					<div className="flex justify-center mt-6">
						<div className={commonStyles.header.divider} />
					</div>

					{/* Capability tags */}
					<ul className="flex flex-wrap justify-center gap-2 mt-8 max-w-2xl mx-auto" aria-label="Core capabilities">
						{CAPABILITY_TAGS.map((tag) => (
							<li
								key={tag}
								className="px-3 py-1 rounded-full text-[11px] md:text-xs font-semibold bg-[var(--surface-card)] border border-[var(--edge)] text-[var(--text-body)] shadow-sm"
							>
								{tag}
							</li>
						))}
					</ul>
				</header>

				{/* Experience Timeline */}
				<section className="pb-16" aria-label="Career timeline">
					<div className="max-w-4xl mx-auto space-y-6">
						{EXPERIENCE_ITEMS.map((exp, idx) => {
							const isExpanded = expanded === idx;
							const isHovered = hoveredDot === idx;
							const dotColor = ACCENT;
							const isLast = idx === EXPERIENCE_ITEMS.length - 1;

							return (
								<div
									key={exp.company}
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
											<div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#efe6da]/40 to-[#f0e9df]/40 blur-md transition-all duration-300 ${isHovered ? "scale-110 opacity-80" : "scale-100 opacity-40"}`} />

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
												<div className={`absolute inset-0 bg-gradient-to-b from-[#efe6da]/50 to-transparent blur-sm transition-opacity duration-300 ${isHovered ? "opacity-60" : "opacity-0"}`} />
												{/* Main line */}
												<div className="absolute inset-0 bg-gradient-to-b from-[var(--edge)] via-[var(--edge)] to-transparent" />
											</div>
										)}
									</div>

									{/* --- MORPHING CARD --- */}
									<div className="flex-1 group">
										<div className={`rounded-3xl overflow-hidden border border-[var(--edge)] bg-[var(--surface-card)] backdrop-blur-sm transition-all duration-500 motion-reduce:transition-none ${isExpanded ? "shadow-[var(--shadow-hover)] translate-y-[-2px]" : "shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)]"}`}>
											{/* HEADER SECTION (Gradient, expand/collapse trigger) — collapsed shows role, company, location + top tech */}
											<button
												type="button"
												className="w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
												aria-expanded={isExpanded}
												aria-controls={"exp-body-" + idx}
												onClick={() => setExpanded(isExpanded ? -1 : idx)}
											>
												<div
													className="p-5 md:p-6 text-white relative transition-all duration-500 motion-reduce:transition-none overflow-hidden bg-gradient-to-br from-[#382a1b] to-[#63503a] dark:from-[#18181b] dark:to-[#26262a]"
												>
													{/* Decorative Gradient Circles in Header */}
													<div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
													<div className="absolute -right-4 top-12 w-24 h-24 rounded-full bg-white/10 blur-xl" />
													<div className="absolute -left-6 -bottom-6 w-28 h-28 rounded-full bg-[#c9a585]/20 blur-2xl" />

													<div className="flex justify-between items-start gap-3 relative z-10">
														<div className="space-y-1">
															<h2 className="font-display text-lg md:text-xl font-semibold tracking-tight">{exp.role}</h2>
															<div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-white/80">
																<span className="flex items-center gap-1">
																	<FaBuilding
																		className="text-[#d8bd9f] w-3 h-3"
																		aria-hidden="true"
																	/>
																	{exp.company}
																</span>
																<span className="flex items-center gap-1">
																	<FaMapMarkerAlt
																		className="w-3 h-3"
																		aria-hidden="true"
																	/>
																	{exp.location}
																</span>
															</div>
														</div>
														<div className={`p-1.5 rounded-xl bg-white/10 backdrop-blur-md transition-all duration-500 motion-reduce:transition-none ${isExpanded ? "rotate-180 bg-white/20" : ""}`}>
															<FaChevronDown
																className="w-4 h-4"
																aria-hidden="true"
															/>
														</div>
													</div>

													{/* Header Tech Stack (Visible only when COLLAPSED) — top 4 + remaining count */}
													<div className={`flex flex-wrap gap-1.5 transition-all duration-500 motion-reduce:transition-none origin-top overflow-hidden ${isExpanded ? "opacity-0 -translate-y-2 mt-0 max-h-0" : "opacity-100 translate-y-0 mt-4 max-h-20"}`}>
														{exp.technologies.slice(0, 4).map((s) => renderSkillBadge(s, true))}
														{exp.technologies.length > 4 && <span className="text-[10px] font-bold text-white/80 self-center">+{exp.technologies.length - 4}</span>}
													</div>
												</div>
											</button>

											{/* EXPANDABLE BODY — full tech stack, then responsibilities, then supporting detail */}
											<div
												id={"exp-body-" + idx}
												className={`transition-all duration-500 motion-reduce:transition-none ease-in-out overflow-hidden ${isExpanded ? "max-h-[3200px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}
											>
												<div className="p-6 md:p-8 space-y-6 bg-[var(--surface-raised)]">
													{/* Promotion / progression */}
													{exp.previousRoles && exp.previousRoles.length > 0 && (
														<div className="flex flex-wrap items-center gap-2">
															<span className="text-[10px] uppercase font-black tracking-widest text-[var(--text-dim)]">Progression</span>
															{exp.previousRoles.map((r) => (
																<span
																	key={r.role}
																	className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[var(--surface-card)] border border-[var(--edge)] text-[var(--text-body)]"
																>
																	{r.role}
																	<span className="text-[var(--text-dim)] font-medium">· {r.period}</span>
																</span>
															))}
														</div>
													)}

													{/* Full tech stack — morphs in from the collapsed header chips */}
													<div className={`space-y-3 transition-all duration-700 delay-100 motion-reduce:transition-none ${isExpanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
														<div className="flex items-center gap-2">
															<div className="h-px w-4 bg-[var(--edge)]" />
															<span className="text-[10px] uppercase font-black tracking-widest text-[var(--text-dim)]">Full Tech Stack</span>
														</div>
														<div className="flex flex-wrap gap-2">{exp.technologies.map((s) => renderSkillBadge(s, false))}</div>
													</div>

													{/* Responsibilities */}
													<div className={`space-y-4 transition-all duration-700 delay-200 motion-reduce:transition-none ${isExpanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
														<div className="flex items-center gap-2">
															<div className="h-px w-4 bg-[var(--edge)]" />
															<span className="text-[10px] uppercase font-black tracking-widest text-[var(--text-dim)]">Responsibilities</span>
														</div>
														<div className="space-y-3.5">
															{exp.achievements.map((resp, i) => (
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

													{/* Highlight metrics (only when present) */}
													{exp.metrics && exp.metrics.length > 0 && (
														<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
															{exp.metrics.map((m) => (
																<div
																	key={m.label}
																	className="bg-[var(--surface-card)] border border-[var(--edge)] rounded-xl p-4 text-center"
																>
																	<div className="font-display text-2xl font-semibold text-[var(--accent-strong)]">{m.value}</div>
																	<div className="mt-1 text-[10px] uppercase tracking-widest font-bold text-[var(--text-dim)] leading-tight">{m.label}</div>
																</div>
															))}
														</div>
													)}

													{/* Accessibility (only when present) */}
													{exp.accessibility && exp.accessibility.length > 0 && (
														<div className="space-y-3">
															<div className="flex items-center gap-2">
																<FaUniversalAccess className="w-3.5 h-3.5 text-[var(--accent-strong)]" aria-hidden="true" />
																<span className="text-[10px] uppercase font-black tracking-widest text-[var(--text-dim)]">Accessibility</span>
															</div>
															<div className="flex flex-wrap gap-2">
																{exp.accessibility.map((a) => (
																	<span
																		key={a}
																		className="px-2 py-1 rounded-md text-[10px] md:text-[11px] font-semibold bg-[var(--surface-card)] border border-[var(--edge)] text-[var(--text-body)]"
																	>
																		{a}
																	</span>
																))}
															</div>
														</div>
													)}

													{/* AI-assisted engineering callout (only when present) */}
													{exp.aiCallout && (
														<div className="rounded-2xl border border-[var(--edge)] bg-[var(--surface-card)] p-4 md:p-5">
															<div className="flex items-center gap-2 mb-2">
																<FaRobot className="w-3.5 h-3.5 text-[var(--accent-strong)]" aria-hidden="true" />
																<span className="text-[10px] uppercase font-black tracking-widest text-[var(--text-dim)]">AI-Assisted Engineering</span>
															</div>
															<p className="text-[var(--text-body)] text-[13px] md:text-sm leading-relaxed">{exp.aiCallout}</p>
														</div>
													)}

													{/* Case-study link (only when present) */}
													{exp.href && (
														<Link
															href={exp.href}
															onClick={(e) => e.stopPropagation()}
															className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--text-strong)] hover:text-[var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 rounded-sm"
														>
															View the case study →
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

				{/* Earlier Experience */}
				<section className="pb-24" aria-label="Earlier experience">
					<div className="max-w-4xl mx-auto">
						<button
							type="button"
							className="flex items-center gap-2 mx-auto px-4 py-2 rounded-full text-sm font-semibold text-[var(--text-strong)] bg-[var(--surface-card)] border border-[var(--edge)] shadow-sm hover:shadow-[var(--shadow-hover)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2"
							aria-expanded={showEarlier}
							aria-controls="earlier-experience"
							onClick={() => setShowEarlier((v) => !v)}
						>
							Earlier experience
							<FaChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 motion-reduce:transition-none ${showEarlier ? "rotate-180" : ""}`} aria-hidden="true" />
						</button>

						<div
							id="earlier-experience"
							className={`transition-all duration-500 motion-reduce:transition-none ease-in-out overflow-hidden ${showEarlier ? "max-h-[900px] opacity-100 visible mt-6" : "max-h-0 opacity-0 invisible mt-0"}`}
						>
							<ul className="grid gap-3 sm:grid-cols-3">
								{EARLIER_EXPERIENCE.map((r) => (
									<li
										key={r.company}
										className="rounded-2xl border border-[var(--edge)] bg-[var(--surface-card)] p-4 shadow-sm"
									>
										<h3 className="font-display text-base font-semibold text-[var(--text-strong)]">{r.role}</h3>
										<p className="text-[12px] font-semibold text-[var(--accent-strong)] mb-2">{r.company}</p>
										<p className="text-[13px] leading-relaxed text-[var(--text-body)]">{r.summary}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default ExperiencePage;
