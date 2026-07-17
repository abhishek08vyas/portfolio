"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaArrowRight } from "react-icons/fa";
import { EXPERIENCE_ITEMS, type ExperienceItem } from "@/constants/ExperienceItems";
import { commonStyles } from "@/lib/theme-utils";
import { SectionHeading } from "./SectionHeading";

const SnapshotCard = ({ item }: { item: ExperienceItem }) => {
	const isEducation = item.type === "education";

	return (
		<article className={`card-base card-hover p-5 md:p-6 flex gap-4 border-l-4 transition-[box-shadow,border-color] duration-300 ${isEducation ? "border-l-[#5674ad]" : "border-l-[var(--accent)]"}`}>
			{/* Icon tile — amber for work, navy-blue for education */}
			<div
				className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${isEducation ? "bg-gradient-to-br from-[#5674ad] to-[#3D5176] text-white" : "bg-gradient-to-br from-[#fbbf24] to-[#d97706] text-[#142240]"}`}
				aria-hidden="true"
			>
				{isEducation ? <FaGraduationCap className="w-5 h-5" /> : <FaBriefcase className="w-5 h-5" />}
			</div>

			<div className="flex-1 min-w-0">
				{/* Title row */}
				<div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
					<h3 className="font-bold text-[var(--text-strong)]">{item.title}</h3>
					<span className="flex items-center gap-2">
						{isEducation && <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-[#5674ad]/15 text-[#31517e] dark:text-[#a9c3e8]">AZ-204</span>}
						<span className={commonStyles.experienceCard.period}>{item.period}</span>
					</span>
				</div>

				{/* Meta */}
				<p className="text-sm text-[var(--text-dim)] mb-2">
					{item.company} · {item.location}
				</p>

				{/* Snapshot one-liner */}
				<p className="text-sm text-[var(--text-body)] leading-relaxed">{item.responsibilities[0]}</p>
			</div>
		</article>
	);
};

export const NowAndRecent = () => {
	const reduce = useReducedMotion();
	const items = EXPERIENCE_ITEMS.slice(0, 3);

	return (
		<section
			id="now-recent"
			className="relative py-16 md:py-20 overflow-hidden"
		>
			<div className={commonStyles.section.container}>
				{/* Section header */}
				<SectionHeading
					num="02"
					title="Now & Recent"
				/>

				<div className="max-w-3xl mx-auto flex flex-col gap-4">
					{items.map((item, i) => (
						<motion.div
							key={`${item.company}-${item.period}`}
							initial={reduce ? false : { opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: reduce ? 0 : i * 0.08 }}
						>
							<SnapshotCard item={item} />
						</motion.div>
					))}
				</div>

				{/* Footer link */}
				<div className="text-center mt-8">
					<Link
						href="/experience"
						className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-strong)] hover:text-[var(--accent-strong)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 rounded-sm"
					>
						Full timeline
						<FaArrowRight
							className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
							aria-hidden="true"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};
