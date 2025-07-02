// components/Skills.tsx
import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { HiCode, HiCloud } from "react-icons/hi";
import { FaDatabase, FaLaptopCode, FaJava, FaAws } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import { SiSpringboot, SiDocker, SiPostgresql, SiJenkins, SiGit, SiRedis, SiMongodb, SiMysql, SiApachekafka, SiPython, SiElasticsearch, SiNextdotjs, SiTailwindcss, SiTensorflow, SiScikitlearn, SiMediapipe } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { BiNetworkChart } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";
import { colors } from "../lib/theme-utils";

// Constants
const SCROLL_SPEED = 0.5;
const SKILL_ITEM_MARGIN = 16; // mx-2 equivalent

// Skill categories with their respective icons
const skillCategoryIcons = {
	"Programming Languages": <HiCode className="w-5 h-5 text-gray-800" />,
	"Frameworks & Libraries": <SiSpringboot className="w-5 h-5 text-gray-800" />,
	Databases: <FaDatabase className="w-5 h-5 text-gray-800" />,
	"Cloud Platforms": <HiCloud className="w-5 h-5 text-gray-800" />,
	"DevOps & Tools": <VscTools className="w-5 h-5 text-gray-800" />,
	"Applied Machine Learning": <SiTensorflow className="w-5 h-5 text-gray-800" />,
} as const;

// Specific skill icons with their original brand colors
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
	Serverless: <FaLaptopCode className="w-4 h-4 mr-1 text-gray-800" />,
	Asynchronous: <BiNetworkChart className="w-4 h-4 mr-1 text-gray-800" />,
	React: (
		<GrReactjs
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.react }}
		/>
	),
	Linux: (
		<FaLaptopCode
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
} as const;

// Consolidated skill list for the marquee
const allSkills = ["Java", "JavaScript", "TypeScript", "Python", "Shell Scripting", "Spring Boot", "Spring MVC", "NextJS", "React", "Tailwind CSS", "JPA", "Apache Kafka", "MySQL", "MongoDB", "PostgreSQL", "Redis", "Azure", "AWS", "Jenkins", "Git", "Docker", "Elastic Search", "TensorFlow", "scikit-learn", "MediaPipe"] as const;

interface SkillsProps {
	commonStyles: any;
}

export const Skills: React.FC<SkillsProps> = ({ commonStyles }) => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const innerContentRef = useRef<HTMLDivElement>(null);
	const animationFrameRef = useRef<number | null>(null);
	const isPausedRef = useRef(false);

	// Memoized skill icon getter
	const getSkillIcon = useCallback((skillName: string) => {
		// Direct lookup first
		if (skillName in specificSkillIcons) {
			return specificSkillIcons[skillName as keyof typeof specificSkillIcons];
		}

		// Fallback for partial matches
		for (const [key, icon] of Object.entries(specificSkillIcons)) {
			if (skillName.includes(key) || key.includes(skillName)) {
				return icon;
			}
		}
		return <HiCode className="w-4 h-4 mr-1 text-gray-800" />;
	}, []);

	// Memoized skill items to prevent unnecessary re-renders
	const skillItems = useMemo(
		() =>
			allSkills.map((skill, index) => (
				<span
					key={`${skill}-${index}`}
					className="px-4 py-2 rounded-lg text-sm font-medium border shadow-sm flex items-center flex-shrink-0 mx-2 transition-transform duration-200 ease-in-out hover:scale-105"
					style={{
						backgroundColor: "#ffffff",
						color: "#1e293b",
						borderColor: "#e2e8f0",
						boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
					}}
				>
					{getSkillIcon(skill)}
					{skill}
				</span>
			)),
		[getSkillIcon],
	);

	// Memoized gradient styles
	const titleGradientStyle = useMemo(
		() => ({
			background: `linear-gradient(to right, ${colors.brand.dark}, ${colors.brand.light})`,
			WebkitBackgroundClip: "text" as const,
			WebkitTextFillColor: "transparent" as const,
			backgroundClip: "text" as const,
		}),
		[],
	);

	// Memoized mask styles
	const maskStyle = useMemo(
		() => ({
			WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
			maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
		}),
		[],
	);

	// Optimized scroll function
	const scroll = useCallback(() => {
		const scrollContainer = scrollContainerRef.current;
		if (!scrollContainer || isPausedRef.current) return;

		scrollContainer.scrollLeft += SCROLL_SPEED;

		// Reset scroll position for seamless loop
		const actualContentWidth = scrollContainer.scrollWidth / 2; // Since we duplicate content
		if (scrollContainer.scrollLeft >= actualContentWidth) {
			scrollContainer.scrollLeft -= actualContentWidth;
		}

		animationFrameRef.current = requestAnimationFrame(scroll);
	}, []);

	// Event handlers
	const handleMouseEnter = useCallback(() => {
		isPausedRef.current = true;
	}, []);

	const handleMouseLeave = useCallback(() => {
		isPausedRef.current = false;
		// Always restart the animation when mouse leaves
		animationFrameRef.current = requestAnimationFrame(scroll);
	}, [scroll]);

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;
		const innerContent = innerContentRef.current;

		if (!scrollContainer || !innerContent) return;

		// Clone content for seamless scrolling
		const originalContent = innerContent.innerHTML;
		innerContent.innerHTML = originalContent + originalContent;

		// Start animation
		animationFrameRef.current = requestAnimationFrame(scroll);

		// Add event listeners
		scrollContainer.addEventListener("mouseenter", handleMouseEnter);
		scrollContainer.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
			scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
			scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, [scroll, handleMouseEnter, handleMouseLeave]);

	return (
		<div className={`${commonStyles.card.base} ${commonStyles.card.hover} p-8`}>
			<h3
				className="text-2xl font-bold text-center mb-6"
				style={titleGradientStyle}
			>
				Technical Skills
			</h3>

			<div
				ref={scrollContainerRef}
				className="flex flex-nowrap overflow-hidden py-4"
				style={maskStyle}
			>
				<div
					ref={innerContentRef}
					className="flex flex-shrink-0"
				>
					{skillItems}
				</div>
			</div>
		</div>
	);
};
