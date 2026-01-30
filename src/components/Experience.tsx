// pages/experience.tsx - Dedicated Experience Page
import React from "react";
import { FaBuilding, FaCalendarAlt, FaLaptopCode, FaMapMarkerAlt } from "react-icons/fa";
import { colors } from "../lib/theme-utils";
import { BiNetworkChart } from "react-icons/bi";
import { SiSpringboot, SiDocker, SiPostgresql, SiJenkins, SiGit, SiRedis, SiMongodb, SiMysql, SiApachekafka, SiPython, SiElasticsearch, SiNextdotjs, SiTailwindcss, SiTensorflow, SiScikitlearn, SiMediapipe } from "react-icons/si";
import { HiCode, HiCloud } from "react-icons/hi";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaAws, FaJava, FaServer, FaDatabase } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { EXPERIENCE_ITEMS } from "@/constants/ExperienceItems";

interface ExperienceItem {
	title: string;
	company: string;
	location: string;
	period: string;
	skills: string;
	responsibilities: string[];
}

const specificSkillIcons = {
	Java: (
		<FaJava
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.java }}
		/>
	),
	JavaScript: (
		<TbBrandJavascript
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.javascript }}
		/>
	),
	TypeScript: (
		<TbBrandTypescript
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.typescript }}
		/>
	),
	Python: (
		<SiPython
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.python }}
		/>
	),
	"Shell Scripting": <HiCode className="w-3.5 h-3.5 text-gray-700" />,
	"Spring Boot": (
		<SiSpringboot
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.spring }}
		/>
	),
	"Spring MVC": (
		<SiSpringboot
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.spring }}
		/>
	),
	JPA: <FaDatabase className="w-3.5 h-3.5 text-gray-700" />,
	NextJS: (
		<SiNextdotjs
			className="w-3.5 h-3.5"
			style={{ color: "#000000" }}
		/>
	),
	"Tailwind CSS": (
		<SiTailwindcss
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.tailwind }}
		/>
	),
	"Apache Kafka": (
		<SiApachekafka
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.kafka }}
		/>
	),
	MySQL: (
		<SiMysql
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.mysql }}
		/>
	),
	MongoDB: (
		<SiMongodb
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.mongodb }}
		/>
	),
	PostgreSQL: (
		<SiPostgresql
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.postgresql }}
		/>
	),
	Redis: (
		<SiRedis
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.redis }}
		/>
	),
	Azure: (
		<HiCloud
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.azure }}
		/>
	),
	AWS: (
		<FaAws
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.aws }}
		/>
	),
	Jenkins: (
		<SiJenkins
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.jenkins }}
		/>
	),
	Git: (
		<SiGit
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.git }}
		/>
	),
	Docker: (
		<SiDocker
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.docker }}
		/>
	),
	"Elastic Search": (
		<SiElasticsearch
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.elasticsearch }}
		/>
	),
	Microservices: <BiNetworkChart className="w-3.5 h-3.5 text-gray-700" />,
	Serverless: <FaServer className="w-3.5 h-3.5 text-gray-700" />,
	React: (
		<GrReactjs
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.react }}
		/>
	),
	Linux: (
		<FaServer
			className="w-3.5 h-3.5"
			style={{ color: "#FCC624" }}
		/>
	),
	Splunk: (
		<FaDatabase
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.splunk }}
		/>
	),
	DevOps: <VscTools className="w-3.5 h-3.5 text-gray-700" />,
	TensorFlow: (
		<SiTensorflow
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.tensorflow }}
		/>
	),
	"scikit-learn": (
		<SiScikitlearn
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.scikitlearn }}
		/>
	),
	MediaPipe: (
		<SiMediapipe
			className="w-3.5 h-3.5"
			style={{ color: colors.tech.mediapipe }}
		/>
	),
};

const ExperiencePage: React.FC = () => {
	const getSkillIcon = (skillName: string) => {
		for (const [key, icon] of Object.entries(specificSkillIcons)) {
			if (skillName.includes(key) || key.includes(skillName)) {
				return icon;
			}
		}
		return <HiCode className="w-3.5 h-3.5 text-gray-700" />;
	};

	const renderSkillsWithIcons = (skillsString: string) => {
		const skillsArray = skillsString.split(", ").map((skill) => skill.trim());
		return (
			<div className="flex flex-wrap gap-1.5">
				{skillsArray.map((skill, idx) => (
					<span
						key={idx}
						className="px-2.5 py-1 bg-gray-50 rounded-md text-xs font-medium flex items-center gap-1 border border-gray-200 hover:border-gray-300 hover:bg-white transition-all"
						style={{ color: "#334155" }}
					>
						{getSkillIcon(skill)}
						<span>{skill}</span>
					</span>
				))}
			</div>
		);
	};

	return (
		<div
			id="experience"
			className="min-h-screen"
			style={{ background: "#f8fafc" }}
		>
			{/* Background */}
			<div className="relative">
				<div
					className="absolute inset-0"
					style={{ background: `linear-gradient(to bottom right, #f1f5f9, #ffffff, #f8fafc)` }}
				>
					<div className="absolute inset-0 opacity-10">
						<div
							className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl"
							style={{ backgroundColor: colors.brand.dark }}
						></div>
						<div
							className="absolute bottom-10 right-10 w-64 h-64 rounded-full blur-3xl"
							style={{ backgroundColor: colors.brand.light }}
						></div>
					</div>
				</div>

				{/* Content */}
				<div className="relative z-10 max-w-5xl mx-auto px-4 py-8 md:py-12">
					<h1
						className="text-2xl md:text-3xl font-bold mb-8 md:mb-10"
						style={{
							background: `linear-gradient(to right, ${colors.brand.dark}, ${colors.brand.light})`,
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							backgroundClip: "text",
						}}
					>
						Work Experience
					</h1>
					<div className="space-y-6">
						{EXPERIENCE_ITEMS.map((exp, index) => (
							<div
								key={index}
								className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
							>
								{/* Header Section */}
								<div className="p-5 md:p-6 bg-gradient-to-br from-white to-gray-50">
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
										<div className="flex-1">
											<h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{exp.title}</h4>
											<div className="space-y-1.5">
												<div className="flex items-center gap-2 text-sm text-gray-600">
													<FaBuilding
														className="w-3.5 h-3.5 flex-shrink-0"
														style={{ color: colors.brand.dark }}
													/>
													<span className="font-semibold text-gray-900">{exp.company}</span>
												</div>
												<div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
													<div className="flex items-center gap-1.5">
														<FaMapMarkerAlt
															className="w-3 h-3"
															style={{ color: colors.brand.light }}
														/>
														<span>{exp.location}</span>
													</div>
													<span className="hidden sm:inline text-gray-300">|</span>
													<div className="flex items-center gap-1.5">
														<FaCalendarAlt
															className="w-3 h-3"
															style={{ color: colors.brand.light }}
														/>
														<span>{exp.period}</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Technologies Section */}
								<div className="px-5 md:px-6 py-4 bg-gray-50 border-t border-gray-100">
									<div className="flex items-center gap-2 mb-3">
										<FaLaptopCode
											className="w-4 h-4"
											style={{ color: colors.brand.dark }}
										/>
										<span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Tech Stack</span>
									</div>
									{renderSkillsWithIcons(exp.skills)}
								</div>

								{/* Responsibilities Section */}
								<div className="px-5 md:px-6 py-5 space-y-3">
									{exp.responsibilities.map((resp, idx) => (
										<div
											key={idx}
											className="flex items-start gap-3 group"
										>
											<div
												className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5 shadow-sm"
												style={{
													background: `linear-gradient(135deg, ${colors.brand.dark}, ${colors.brand.light})`,
												}}
											>
												{idx + 1}
											</div>
											<p className="text-sm text-gray-700 leading-relaxed flex-1">{resp}</p>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperiencePage;
