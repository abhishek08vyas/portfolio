// components/Skills.tsx
import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { HiCode } from "react-icons/hi";
import { SKILL_ICONS, ALL_SKILLS } from "@/constants/SkillIcons";
import { colors, responsive } from "@/lib/theme-utils";

// Constants
const SCROLL_SPEED = 0.5;

export const Skills: React.FC = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const innerContentRef = useRef<HTMLDivElement>(null);
	const animationFrameRef = useRef<number | null>(null);
	const isPausedRef = useRef(false);

	// Memoized skill icon getter – uses SKILL_ICONS from constants
	const getSkillIcon = useCallback((skillName: string) => {
		// Direct lookup first
		if (skillName in SKILL_ICONS) {
			return SKILL_ICONS[skillName];
		}

		// Fallback for partial matches
		for (const [key, icon] of Object.entries(SKILL_ICONS)) {
			if (skillName.includes(key) || key.includes(skillName)) {
				return icon;
			}
		}
		return <HiCode className="w-4 h-4 mr-1 text-gray-800" />;
	}, []);

	// Memoized skill items to prevent unnecessary re-renders
	const skillItems = useMemo(
		() =>
			ALL_SKILLS.map((skill, index) => (
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
		<section
			id="skills"
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
				</div>
			</div>
		</section>
	);
};
