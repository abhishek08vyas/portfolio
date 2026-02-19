"use client";

import React, { useState } from "react";
import { FaBuilding, FaMapMarkerAlt, FaChevronDown, FaCircle, FaBriefcase } from "react-icons/fa";
import { colors, commonStyles } from "../lib/theme-utils";
import { HiCode } from "react-icons/hi";
import { EXPERIENCE_ITEMS } from "@/constants/ExperienceItems";
import { SKILL_ICONS } from "@/constants/SkillIcons";
import { motion } from "framer-motion";

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
			className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] md:text-[11px] font-semibold border transition-all duration-500 ${isHeader ? "bg-white/10 border-white/20 text-white" : "bg-slate-50 border-slate-200 text-slate-600 shadow-sm"}`}
		>
			{/* Explicit SVG sizing fixes intermittent icon invisibility in flex containers (Firefox/Chrome) */}
			<span className="w-4 h-4 min-w-4 min-h-4 flex items-center justify-center flex-shrink-0 [&>svg]:!w-4 [&>svg]:!h-4">{getSkillIcon(skill)}</span>
			{skill}
		</span>
	);

	return (
		<div
			id="experience"
			className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
		>
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
				{/* Enhanced Header Section */}
				<motion.header
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="pt-16 md:pt-20 pb-12 text-center"
				>
					{/* Experience Count Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-6 shadow-sm">
						<FaBriefcase
							className="w-5 h-5"
							style={{ color: colors.brand.primary }}
						/>
						<span
							className="text-sm font-semibold"
							style={{ color: colors.brand.dark }}
						>
							{EXPERIENCE_ITEMS.length} Roles
						</span>
					</div>

					{/* Title with Gradient */}
					<h1 className={commonStyles.header.title + " text-4xl md:text-6xl mb-4 pb-0.5 overflow-visible leading-normal"}>Experience</h1>

					{/* Subtitle */}
					<p className="mt-4 text-[#797F8C] text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">A journey through innovative teams and challenging projects that shaped my technical expertise and leadership approach.</p>

					{/* Divider */}
					<div className="flex justify-center mt-6">
						<div className={commonStyles.header.divider} />
					</div>
				</motion.header>

				{/* Experience Timeline */}
				<section className="pb-24">
					<div className="max-w-4xl mx-auto space-y-6">
						{EXPERIENCE_ITEMS.map((exp, idx) => {
							const isExpanded = expanded === idx;
							const isHovered = hoveredDot === idx;
							const skillsArray = exp.skills.split(", ").map((s) => s.trim());
							const isLast = idx === EXPERIENCE_ITEMS.length - 1;

							return (
								<motion.div
									key={idx}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: idx * 0.1 }}
									className="relative flex gap-4"
									onMouseEnter={() => setHoveredDot(idx)}
									onMouseLeave={() => setHoveredDot(-1)}
								>
									{/* --- VERTICAL TIMELINE SIDEBAR --- */}
									<div className="w-auto flex-shrink-0 relative flex flex-col items-center">
										{/* Glassmorphism Period Badge */}
										<div className="mb-3 relative group/period">
											{/* Outer glow ring */}
											<div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#142240]/10 to-[#3D5176]/10 blur-md transition-all duration-300 ${isHovered ? "scale-110 opacity-80" : "scale-100 opacity-40"}`} />

											{/* Main glass badge */}
											<div className="relative bg-white/70 backdrop-blur-xl px-4 py-2 rounded-full border border-white/40 shadow-xl shadow-slate-200/50">
												{/* Gradient overlay */}
												<div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/60 via-transparent to-[#142240]/5" />

												{/* Text with gradient */}
												<span className="relative text-[11px] md:text-[12px] font-extrabold text-transparent bg-gradient-to-r from-[#142240] to-[#3D5176] bg-clip-text uppercase tracking-wider whitespace-nowrap">{exp.period}</span>

												{/* Bottom shine line */}
												<div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
											</div>
										</div>

										{/* Timeline Dot */}
										<div className="relative z-10">
											{/* Subtle pulse ring on hover */}
											<div className={`absolute inset-0 rounded-full bg-[#142240] transition-all duration-300 ${isHovered ? "scale-[1.8] opacity-10" : "scale-100 opacity-0"}`} />

											{/* Main dot */}
											<div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${isExpanded ? "bg-[#142240] border-[#142240] shadow-md shadow-[#142240]/30 scale-110" : isHovered ? "bg-gradient-to-br from-[#142240] to-[#3D5176] border-[#3D5176] shadow-md shadow-[#142240]/30 scale-105" : "bg-white/80 border-slate-300 shadow-sm backdrop-blur-sm"}`}>
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
												<div className={`absolute inset-0 bg-gradient-to-b from-[#142240]/20 to-transparent blur-sm transition-opacity duration-300 ${isHovered ? "opacity-60" : "opacity-0"}`} />
												{/* Main line */}
												<div className="absolute inset-0 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100" />
											</div>
										)}
									</div>

									{/* --- COMPACT MORPHING CARD --- */}
									<div
										className="flex-1 group cursor-pointer"
										onClick={() => setExpanded(isExpanded ? -1 : idx)}
									>
										<div className={`rounded-3xl overflow-hidden border border-white bg-white transition-all duration-500 ${isExpanded ? "shadow-2xl shadow-[#142240]/10 translate-y-[-2px]" : "shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50"}`}>
											{/* HEADER SECTION (Gradient) */}
											<div
												className="p-5 md:p-6 text-white relative transition-all duration-500 overflow-hidden"
												style={{
													background: `linear-gradient(135deg, ${colors.brand.dark}, ${colors.brand.medium})`,
													paddingBottom: isExpanded ? "1.5rem" : "1.5rem",
												}}
											>
												{/* Decorative Gradient Circles in Header */}
												<div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
												<div className="absolute -right-4 top-12 w-24 h-24 rounded-full bg-white/10 blur-xl" />
												<div className="absolute -left-6 -bottom-6 w-28 h-28 rounded-full bg-[#3D5176]/30 blur-2xl" />

												<div className="flex justify-between items-start relative z-10">
													<div className="space-y-0.5">
														<h3 className="text-lg md:text-xl font-bold tracking-tight">{exp.title}</h3>
														<div className="flex flex-wrap items-center gap-3 text-[11px] font-medium text-blue-100/80">
															<span className="flex items-center gap-1">
																<FaBuilding className="text-blue-300 w-3 h-3" />
																{exp.company}
															</span>
															<span className="flex items-center gap-1">
																<FaMapMarkerAlt className="w-3 h-3" />
																{exp.location}
															</span>
														</div>
													</div>
													<div className={`p-1.5 rounded-xl bg-white/10 backdrop-blur-md transition-all duration-500 ${isExpanded ? "rotate-180 bg-white/20" : ""}`}>
														<FaChevronDown className="w-4 h-4" />
													</div>
												</div>

												{/* Header Tech Stack (Visible only when COLLAPSED) */}
												<div className={`flex flex-wrap gap-1.5 transition-all duration-500 origin-top overflow-hidden ${isExpanded ? "opacity-0 -translate-y-2 mt-0 max-h-0" : "opacity-100 translate-y-0 mt-4 max-h-20"}`}>
													{skillsArray.slice(0, 4).map((s) => renderSkillBadge(s, true))}
													{skillsArray.length > 4 && <span className="text-[10px] font-bold text-blue-200/60 self-center">+{skillsArray.length - 4}</span>}
												</div>
											</div>

											{/* EXPANDABLE BODY SECTION */}
											<div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
												<div className="p-6 md:p-8 space-y-6 bg-white/50 backdrop-blur-xl">
													{/* Morphing Landing Spot for Skills */}
													<div className={`space-y-3 transition-all duration-700 delay-100 ${isExpanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
														<div className="flex items-center gap-2 mb-2">
															<div className="h-px w-4 bg-slate-200" />
															<span className="text-[10px] uppercase font-black tracking-widest text-slate-400">Full Tech Stack</span>
														</div>
														<div className="flex flex-wrap gap-2">{skillsArray.map((s) => renderSkillBadge(s, false))}</div>
													</div>

													{/* Achievement Points */}
													<div className={`space-y-4 transition-all duration-700 delay-200 ${isExpanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
														<div className="flex items-center gap-2 mb-2">
															<div className="h-px w-4 bg-slate-200" />
															<span className="text-[10px] uppercase font-black tracking-widest text-slate-400">Responsibilities</span>
														</div>
														<div className="space-y-3.5">
															{exp.responsibilities.map((resp, i) => (
																<div
																	key={i}
																	className="flex gap-3 items-start group/item"
																>
																	<FaCircle className="w-1.5 h-1.5 text-blue-900 mt-2 flex-shrink-0 opacity-30 group-hover/item:opacity-100 group-hover/item:scale-150 transition-all" />
																	<p className="text-slate-600 text-[13px] md:text-sm leading-relaxed">{resp}</p>
																</div>
															))}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</section>
			</main>
		</div>
	);
};

export default ExperiencePage;
