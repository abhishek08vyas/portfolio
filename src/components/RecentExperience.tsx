//RecentExperience.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { colors, responsive, commonStyles } from "../lib/theme-utils";
import { Button } from "./ui/button";
import { EXPERIENCE_ITEMS, type ExperienceItem } from "@/constants/ExperienceItems";
import { SKILL_ICONS } from "@/constants/SkillIcons";

export interface RecentExperienceProps {
	experience?: ExperienceItem;
	sectionTitle?: string;
	experienceHref?: string;
}

export const RecentExperience: React.FC<RecentExperienceProps> = ({ experience = EXPERIENCE_ITEMS[0], sectionTitle = "Recent Role", experienceHref = "/experience" }) => {
	const skillsList = experience.skills
		.split(",")
		.map((s: string) => s.trim())
		.filter(Boolean);
	const skillsDisplayed = skillsList.slice(0, 12);

	const getSkillIcon = (skill: string) => {
		for (const [key, icon] of Object.entries(SKILL_ICONS)) {
			if (skill.toLowerCase().includes(key.toLowerCase())) return icon;
		}
		return null;
	};

	return (
		<section
			id="recent-experience"
			className="py-12 md:py-24 bg-white" // Restored white background
		>
			<div className={`${responsive.container} px-4`}>
				{/* Section Header */}
				<div className="mb-16 text-center">
					<h2 className={commonStyles.header.title}>{sectionTitle}</h2>
					<div className="flex items-center justify-center mt-4">
						<div className={commonStyles.header.divider}></div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden"
				>
					<div className="flex flex-col lg:flex-row">
						{/* LEFT COLUMN: Light Side (White Background) */}
						<div className="p-8 md:p-12 lg:w-3/5">
							<div className="mb-8">
								<div className="flex flex-wrap items-center gap-4 mb-3">
									<h4 className="text-3xl font-black text-[#142240] tracking-tight">{experience.title}</h4>
									<span
										className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest shadow-sm"
										style={{
											backgroundColor: `#F1F5F9`,
											color: colors.brand.medium,
											borderColor: `#E2E8F0`,
										}}
									>
										<FaMapMarkerAlt className="w-3 h-3" />
										{experience.location}
									</span>
								</div>

								<div className="flex flex-wrap gap-5 text-sm font-semibold text-gray-500">
									<span className="flex items-center gap-2">
										<FaBuilding className="text-[#142240]" /> {experience.company}
									</span>
									<span className="flex items-center gap-2">
										<FaCalendarAlt className="text-[#142240]" /> {experience.period}
									</span>
								</div>
							</div>

							<div className="space-y-5">
								{experience.responsibilities.slice(0, 4).map((text: string, i: number) => (
									<div
										key={i}
										className="flex items-start gap-4 group"
									>
										<div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover:scale-150 transition-transform" />
										<p className="text-base text-gray-600 leading-relaxed font-medium">{text}</p>
									</div>
								))}
							</div>
						</div>

						{/* RIGHT COLUMN: Dark Side (Navy Background) */}
						<div className="p-8 md:p-12 lg:w-2/5 bg-[#142240] flex flex-col justify-between text-white">
							<div>
								<h5 className="text-[11px] uppercase tracking-[0.2em] font-bold text-blue-300/60 mb-6">{skillsList.length > 12 ? "Top 12 Tech Stack" : "Core Tech Stack"}</h5>
								<div className="flex flex-wrap gap-2.5 mb-10">
									{skillsDisplayed.map((skill: string, i: number) => (
										<div
											key={i}
											className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 rounded-xl border border-white/10 text-xs font-bold transition-all cursor-default"
										>
											{getSkillIcon(skill)} {skill}
										</div>
									))}
								</div>
							</div>

							<div className="space-y-6">
								{experience.metrics && Object.keys(experience.metrics).length > 0 && (
									<div className="grid grid-cols-2 gap-4">
										{Object.entries(experience.metrics).map(([label, value]) => (
											<StatBox
												key={label}
												label={label}
												value={value}
											/>
										))}
									</div>
								)}

								<Button
									asChild
									className="w-full h-14 bg-white text-[#142240] hover:bg-gray-100 font-bold rounded-xl shadow-xl transition-all group"
								>
									<Link
										href={experienceHref}
										className="flex items-center justify-center gap-3"
									>
										<span>Full Experience</span>
										<FaArrowRight className="group-hover:translate-x-1 transition-transform" />
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

const StatBox = ({ label, value }: { label: string; value: string }) => (
	<div className="bg-white/5 p-4 rounded-2xl border border-white/10">
		<div className="text-xl font-black text-white">{value}</div>
		<div className="text-[10px] uppercase text-blue-300/50 font-bold tracking-tighter">{label}</div>
	</div>
);
