// components/Experience.tsx
import React, { useState, useEffect, useRef } from "react";
import { FaBuilding, FaCalendarAlt, FaLaptopCode } from "react-icons/fa";
import { colors, responsive } from "../lib/theme-utils";
import { BiNetworkChart } from "react-icons/bi";
import { SiSpringboot, SiDocker, SiPostgresql, SiJenkins, SiGit, SiRedis, SiMongodb, SiMysql, SiApachekafka, SiPython, SiElasticsearch, SiNextdotjs, SiTailwindcss, SiTensorflow, SiScikitlearn, SiMediapipe } from "react-icons/si";
import { HiCode, HiCloud } from "react-icons/hi";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FaAws, FaJava, FaServer, FaDatabase } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { OpenToWorkSection } from "./OpenToWorkSection";

interface ExperienceItem {
	title: string;
	company: string;
	location: string;
	period: string;
	skills: string;
	responsibilities: string[];
}

const experiences: ExperienceItem[] = [
	{
		title: "Software Engineer 2",
		company: "Apexon",
		location: "Ahmedabad, Gujarat",
		period: "Jan 2023 - August 2023",
		skills: "Java11, MongoDB, Spring Boot, Azure, Microservices, Elastic Search, Apache Kafka, Redis",
		responsibilities: ["Ensured client relationships by engaging with them for production issues", "Led a team of 8 members in a demanding module", "Developed asynchronous architecture for patient sync data using Apache Kafka", "Integrated multiple vendors including Magento, Retail Unity, Loyaltics"],
	},
	{
		title: "Software Engineer 1",
		company: "Apexon",
		location: "Ahmedabad, Gujarat",
		period: "August 2021 - Jan 2023",
		skills: "Java8, MySQL, Spring Boot, Microservices, AWS, Azure, Redis, Apache Kafka",
		responsibilities: ["Worked on Loyalty based project developing REST APIs", "Developed Azure Functions for serverless architecture", "Participated in all stages of deployment", "Implemented MVC architecture with MySQL and MongoDB"],
	},
	{
		title: "Devops Engineer",
		company: "Crest Data System",
		location: "Ahmedabad, Gujarat",
		period: "August 2021 - Jan 2023",
		skills: "Splunk, DevOps, Python, AWS, Linux, Jenkins, Shell Scripting",
		responsibilities: ["Automated development and testing of Splunk apps", "Troubleshot Splunk environment issues", "Developed Jenkins pipelines", "Created automation scripts in Python and Shell"],
	},
];

const specificSkillIcons = {
	Java: (
		<FaJava
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.java }}
		/>
	),
	JavaScript: (
		<TbBrandJavascript
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.javascript }}
		/>
	),
	TypeScript: (
		<TbBrandTypescript
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.typescript }}
		/>
	),
	Python: (
		<SiPython
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.python }}
		/>
	),
	"Shell Scripting": <HiCode className="w-4 h-4 mr-1 text-gray-800" />,
	"Spring Boot": (
		<SiSpringboot
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.spring }}
		/>
	),
	"Spring MVC": (
		<SiSpringboot
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.spring }}
		/>
	),
	JPA: <FaDatabase className="w-4 h-4 mr-1 text-gray-800" />,
	NextJS: (
		<SiNextdotjs
			className="w-4 h-4 mr-1"
			style={{ color: "#000000" }}
		/>
	),
	"Tailwind CSS": (
		<SiTailwindcss
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.tailwind }}
		/>
	),
	"Apache Kafka": (
		<SiApachekafka
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.kafka }}
		/>
	),
	MySQL: (
		<SiMysql
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.mysql }}
		/>
	),
	MongoDB: (
		<SiMongodb
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.mongodb }}
		/>
	),
	PostgreSQL: (
		<SiPostgresql
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.postgresql }}
		/>
	),
	Redis: (
		<SiRedis
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.redis }}
		/>
	),
	Azure: (
		<HiCloud
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.azure }}
		/>
	),
	AWS: (
		<FaAws
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.aws }}
		/>
	),
	Jenkins: (
		<SiJenkins
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.jenkins }}
		/>
	),
	Git: (
		<SiGit
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.git }}
		/>
	),
	Docker: (
		<SiDocker
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.docker }}
		/>
	),
	"Elastic Search": (
		<SiElasticsearch
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.elasticsearch }}
		/>
	),
	Microservices: <BiNetworkChart className="w-4 h-4 mr-1 text-gray-800" />,
	Serverless: <FaServer className="w-4 h-4 mr-1 text-gray-800" />,
	Asynchronous: <BiNetworkChart className="w-4 h-4 mr-1 text-gray-800" />,
	React: (
		<GrReactjs
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.react }}
		/>
	),
	Linux: (
		<FaServer
			className="w-4 h-4 mr-1"
			style={{ color: "#FCC624" }}
		/>
	),
	Splunk: (
		<FaDatabase
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.splunk }}
		/>
	),
	DevOps: <VscTools className="w-4 h-4 mr-1 text-gray-800" />,
	TensorFlow: (
		<SiTensorflow
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.tensorflow }}
		/>
	),
	"scikit-learn": (
		<SiScikitlearn
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.scikitlearn }}
		/>
	),
	MediaPipe: (
		<SiMediapipe
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.mediapipe }}
		/>
	),
};

export const Experience: React.FC = () => {
	const [activeExp, setActiveExp] = useState(0);
	const sliderRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveExp((prev) => (prev + 1) % experiences.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const getSkillIcon = (skillName: string) => {
		for (const [key, icon] of Object.entries(specificSkillIcons)) {
			if (skillName.includes(key) || key.includes(skillName)) {
				return icon;
			}
		}
		return <HiCode className="w-4 h-4 mr-1 text-gray-800" />;
	};

	const renderSkillsWithIcons = (skillsString: string) => {
		const skillsArray = skillsString.split(", ").map((skill) => skill.trim());

		return (
			<div className="flex flex-wrap gap-2">
				{skillsArray.map((skill, idx) => (
					<span
						key={idx}
						className="px-2 py-1 bg-white rounded-md text-xs font-medium border shadow-sm flex items-center hover:shadow-md transition-shadow"
						style={{
							color: "#1e293b",
							borderColor: "#e2e8f0",
							boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
						}}
					>
						{getSkillIcon(skill)}
						{skill}
					</span>
				))}
			</div>
		);
	};

	return (
		<>
			<section
				id="experience"
				className="relative py-16 overflow-hidden"
				style={{ background: "#f8fafc" }}
			>
				{/* Background with gradient */}
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
					<div
						className="absolute inset-0"
						style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
					></div>
				</div>

				<div className={responsive.container + " relative z-10"}>
					<div className="max-w-5xl mx-auto">
						<div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
							<h3
								className="text-2xl font-bold text-center mb-6"
								style={{
									background: `linear-gradient(to right, ${colors.brand.dark}, ${colors.brand.light})`,
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
								}}
							>
								Work Experience
							</h3>
							{/* Slider controls */}
							<div className="flex justify-center mb-6 gap-3">
								{experiences.map((exp, index) => (
									<button
										key={index}
										onClick={() => setActiveExp(index)}
										className={`w-4 h-4 rounded-full transition-all duration-300 ${activeExp === index ? "scale-125" : "hover:bg-gray-400"}`}
										style={{
											backgroundColor: activeExp === index ? colors.brand.dark : "#cbd5e0",
										}}
										aria-label={`View experience ${index + 1}`}
									/>
								))}
							</div>
							{/* Slider container */}
							<div
								ref={sliderRef}
								className="transition-all duration-500 ease-in-out overflow-hidden"
							>
								<div
									className="flex"
									style={{ transform: `translateX(-${activeExp * 100}%)` }}
								>
									{experiences.map((exp, index) => (
										<div
											key={index}
											className="min-w-full px-2"
										>
											<div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
												<div className="flex flex-col justify-between h-full">
													<div>
														<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
															<h3 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">{exp.title}</h3>
															<div className="flex items-center text-sm text-gray-600">
																<FaCalendarAlt
																	className="w-4 h-4 mr-2"
																	style={{ color: "#64748b" }}
																/>
																{exp.period}
															</div>
														</div>
														<div className="flex items-center text-sm text-gray-600 mb-4">
															<FaBuilding
																className="w-4 h-4 mr-2"
																style={{ color: "#64748b" }}
															/>
															<span
																className="font-medium"
																style={{ color: "#1e293b" }}
															>
																{exp.company}
															</span>
															, {exp.location}
														</div>
														<div className="mb-4">
															<h4
																className="text-sm font-semibold mb-2 flex items-center"
																style={{ color: "#1e293b" }}
															>
																<FaLaptopCode className="w-4 h-4 mr-2" />
																Skills:
															</h4>
															{renderSkillsWithIcons(exp.skills)}
														</div>
													</div>
													<div className="mt-4">
														<h4
															className="text-sm font-semibold mb-2"
															style={{ color: "#1e293b" }}
														>
															Key Responsibilities:
														</h4>
														<ul className="space-y-2">
															{exp.responsibilities.map((resp, idx) => (
																<li
																	key={idx}
																	className="flex items-start"
																>
																	<span
																		className="mr-2 mt-1"
																		style={{ color: "#64748b" }}
																	>
																		•
																	</span>
																	<span style={{ color: "#1e293b" }}>{resp}</span>
																</li>
															))}
														</ul>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Open to Work & Hire Me Section */}
						<OpenToWorkSection className="mt-8" />
					</div>
				</div>
			</section>
		</>
	);
};
