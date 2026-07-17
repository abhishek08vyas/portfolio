// components/Skills.tsx
import React from "react";
import { SKILL_ICONS } from "@/constants/SkillIcons";
import { commonStyles } from "@/lib/theme-utils";

interface SkillEntry {
	label: string;
	/** Exact SKILL_ICONS key; omit when no icon exists for this skill */
	iconKey?: string;
}

interface SkillGroup {
	title: string;
	skills: SkillEntry[];
}

const SKILL_GROUPS: SkillGroup[] = [
	{
		title: "Backend",
		skills: [{ label: "Java", iconKey: "Java" }, { label: "Spring Boot", iconKey: "Spring Boot" }, { label: "Node.js", iconKey: "Node.js" }, { label: "TypeScript", iconKey: "TypeScript" }, { label: "Python", iconKey: "Python" }, { label: "FastAPI" }],
	},
	{
		title: "Data & Messaging",
		skills: [
			{ label: "PostgreSQL", iconKey: "PostgreSQL" },
			{ label: "MongoDB", iconKey: "MongoDB" },
			{ label: "MySQL", iconKey: "MySQL" },
			{ label: "Redis", iconKey: "Redis" },
			{ label: "Apache Kafka", iconKey: "Apache Kafka" },
		],
	},
	{
		title: "Cloud & DevOps",
		skills: [{ label: "Azure (AZ-204)", iconKey: "Azure" }, { label: "AWS", iconKey: "AWS" }, { label: "Docker", iconKey: "Docker" }, { label: "Azure DevOps" }, { label: "CI/CD" }, { label: "ELK/Kibana", iconKey: "ELK Stack" }, { label: "Azure Monitor" }],
	},
	{
		title: "AI / ML (applied)",
		// TODO(ABHISHEK): confirm RAG-stack items (SOT:88)
		skills: [{ label: "TensorFlow", iconKey: "TensorFlow" }, { label: "scikit-learn", iconKey: "scikit-learn" }, { label: "MediaPipe", iconKey: "MediaPipe" }, { label: "RAG pipelines" }],
	},
	{
		title: "Frontend",
		skills: [
			{ label: "React", iconKey: "React" },
			{ label: "Next.js", iconKey: "NextJS" },
			{ label: "Redux", iconKey: "Redux" },
			{ label: "Tailwind CSS", iconKey: "Tailwind CSS" },
		],
	},
];

export const Skills: React.FC = () => {
	return (
		<section
			id="skills"
			className="relative py-16 md:py-20 overflow-hidden"
		>
			{/* Background layer */}
			<div className={`absolute inset-0 ${commonStyles.section.background}`} />

			<div className={commonStyles.section.container}>
				{/* Section header */}
				<div className="mb-12 text-center">
					<h2 className={commonStyles.header.title}>Technical Skills</h2>
					<div className="flex justify-center mt-3">
						<div className={commonStyles.header.divider}></div>
					</div>
				</div>

				<div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{SKILL_GROUPS.map((group) => (
						<div
							key={group.title}
							className="card-base card-hover p-6"
						>
							<h3 className="text-sm font-bold uppercase tracking-widest text-[#3D5176] mb-4">{group.title}</h3>
							<ul
								role="list"
								className="flex flex-wrap gap-2"
							>
								{group.skills.map((skill) => (
									<li key={skill.label}>
										<span className={commonStyles.skillTag + " inline-flex items-center gap-1.5 !px-3 !py-1.5 !text-xs"}>
											{skill.iconKey && <span aria-hidden="true">{SKILL_ICONS[skill.iconKey]}</span>}
											{skill.label}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
