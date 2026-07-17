import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LuMail, LuDownload, LuGraduationCap } from "react-icons/lu";
import { Button } from "./ui/button";
import Image from "next/image";
import { ContactModal } from "./ContactModel";
import { commonStyles, responsive, heroTypography } from "@/lib/theme-utils";
import { RESUME_PATH, GITHUB_URL, LINKEDIN_URL } from "@/constants/links";

const HERO_SKILLS = ["TypeScript / Node.js", "Java / Spring Boot", "Python", "Apache Kafka", "Azure", "RAG / LLM pipelines"];

/** Desktop-only decorative fact chips floating around the avatar (aria-hidden; facts match site copy exactly) */
const HERO_FACT_CHIPS: { emoji: string; text: string; position: string; delay: string; dotBg: string }[] = [
	{ emoji: "📚", text: "RAG pipeline · OSFI (in development)", position: "top-[4%] left-0", delay: "0s", dotBg: "bg-[#efe9ff] dark:bg-[#37306b]" },
	{ emoji: "⚡", text: "Kafka +40% throughput", position: "top-[30%] right-0", delay: "-1.6s", dotBg: "bg-[#ffe8d9] dark:bg-[#5c3350]" },
	{ emoji: "🛰️", text: "99.9% uptime · 1,000+ DAU", position: "bottom-[24%] left-[2%]", delay: "-3.2s", dotBg: "bg-[#e2f3e8] dark:bg-[#1f3d33]" },
	{ emoji: "🎓", text: "MASc 2025 · AZ-204", position: "bottom-[2%] right-[10%]", delay: "-4.4s", dotBg: "bg-[#fde7ef] dark:bg-[#4a2b44]" },
];

export const Hero = () => {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const reduce = useReducedMotion();

	const openContactModal = () => {
		setIsContactModalOpen(true);
	};

	const closeContactModal = () => {
		setIsContactModalOpen(false);
	};

	// Memoized Circular text component to prevent unnecessary re-renders
	const CircularText = useMemo(() => {
		const text = "• OPEN TO WORK • HIRE ME ";
		const chars = text.split("");
		const radius = 75; // Radius from center of image

		return (
			<div className="absolute inset-0 pointer-events-none flex items-center justify-center" aria-hidden="true">
				<motion.div
					className="relative"
					animate={
						reduce
							? undefined
							: {
									rotate: 360,
								}
					}
					transition={{
						duration: isHovered ? 5 : 15,
						ease: "linear",
						repeat: Infinity,
					}}
					// Add will-change for better performance
					style={{ willChange: "transform" }}
				>
					{chars.map((char, index) => {
						const angle = (index / chars.length) * 360;
						const radian = (angle * Math.PI) / 180;
						const x = Math.cos(radian) * radius;
						const y = Math.sin(radian) * radius;

						return (
							<motion.span
								key={`${char}-${index}`} // More stable key
								className="absolute text-sm font-bold text-[var(--text-strong)] select-none"
								style={{
									left: x,
									top: y,
									transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
									willChange: "opacity", // Optimize for opacity changes
								}}
								initial={reduce ? false : { opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									delay: index * 0.05,
									duration: 0.3, // Shorter duration for smoother animation
								}}
							>
								{char}
							</motion.span>
						);
					})}
				</motion.div>
			</div>
		);
	}, [isHovered, reduce]); // Only re-create when isHovered or reduced-motion changes

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center pt-16 overflow-hidden"
		>
			{/* Main Content — the fixed SkyBackdrop (dawn/dusk) shows through */}
			<div className={responsive.container + " relative z-10"}>
				<div className="max-w-6xl mx-auto py-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-center">
					{/* Text column */}
					<div className="text-center lg:text-left order-2 lg:order-1">
						{/* Location eyebrow */}
						<p className="inline-flex items-center rounded-full bg-[var(--accent-soft)] border border-[var(--edge)] px-4 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)] mb-4">
							St. John&apos;s, NL · Open to relocation · Remote-ready
						</p>

						{/* Name — serif display; "Vyas" in italic coral→lavender gradient */}
						<h1 className={`${heroTypography.name} text-[var(--text-strong)] mb-3 pb-1`}>
							Abhishek <em className="italic font-[650] bg-gradient-to-r from-[#f26d78] to-[#b48be0] bg-clip-text text-transparent">Vyas</em>
						</h1>

						{/* Title */}
						<h2 className={`${heroTypography.title} text-[var(--text-body)] mb-6`}>Software Engineer · Backend & AI-Enabled Systems</h2>

						{/* OPEN TO WORK badge */}
						<div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 dark:bg-emerald-400/15 dark:border-emerald-300/30 px-3.5 py-1.5 mb-3">
							<span
								className="relative flex w-2 h-2"
								aria-hidden="true"
							>
								<span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
							</span>
							<span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">Open to Work</span>
						</div>

						{/* Status line */}
						<p className="text-sm md:text-base font-medium text-[var(--text-body)] mb-8">Building AI/RAG systems · Open to backend & AI roles, remote Canada-wide</p>

						<div className={`${commonStyles.card.base} ${commonStyles.card.hover} p-6 mb-10`}>
							<p className="text-[var(--text-body)] leading-relaxed mb-6 text-justify">
								I&apos;m a <span className="font-semibold text-[var(--text-strong)]">backend and full-stack software engineer</span> with 3+ years of experience building AI-enabled systems — RAG pipelines, event-driven architecture, and observability. At Apexon, I engineered an Apache Kafka data-synchronization pipeline that improved throughput by 40% across high-traffic healthcare systems; before that, I ran P0/P1 incident response as a Site Reliability Engineer. I completed my MASc in Computer Engineering at Memorial University in Apr 2025, hold the Microsoft AZ-204 (Azure Developer Associate) certification, and now work as an independent software consultant — most recently building a hybrid RAG pipeline for regulatory document search (OSFI). St. John&apos;s, NL · Open to relocation · Remote-ready.
							</p>

							<div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
								{HERO_SKILLS.map((skill) => (
									<span
										key={skill}
										className={`${commonStyles.skillTag} inline-block`}
									>
										{skill}
									</span>
								))}
							</div>

							{/* Credential line */}
							<p className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 text-sm font-semibold text-[var(--text-strong)] pt-4 border-t border-[var(--edge)]">
								<LuGraduationCap
									className="w-4 h-4 text-[var(--accent-strong)]"
									aria-hidden="true"
								/>
								<span>MASc Computer Engineering, Memorial University (Apr 2025) · AZ-204</span>
							</p>
						</div>

						{/* Call to Action Buttons */}
						<div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center mb-16 lg:mb-0">
							{/* TODO(ABHISHEK): export resume PDF to public/resume.pdf */}
							<Button
								asChild
								className={`${commonStyles.button.primary} group w-full sm:w-auto px-8 py-6 gap-3 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2`}
							>
								<a
									href={RESUME_PATH}
									download
								>
									<LuDownload
										className="w-6 h-6 transition-transform group-hover:translate-y-0.5 motion-reduce:transform-none"
										aria-hidden="true"
									/>
									<span className="text-lg">Download Resume</span>
								</a>
							</Button>

							<Button
								onClick={openContactModal}
								className={`${commonStyles.button.secondary} w-full sm:w-auto px-8 py-6 gap-3 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2`}
							>
								<LuMail
									className="w-6 h-6"
									aria-hidden="true"
								/>
								<span className="text-lg">Contact</span>
							</Button>

							<div className="flex gap-4">
								{/* GitHub Icon - Enhanced */}
								<a
									href={GITHUB_URL}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub Profile"
									className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 rounded-full"
								>
									<div className="w-14 h-14 rounded-full bg-[var(--surface-raised)] text-[var(--text-strong)] flex items-center justify-center shadow-md border border-[var(--edge)] hover:shadow-lg transition-all">
										<svg
											viewBox="0 0 24 24"
											width="28"
											height="28"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
										>
											<path
												d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
												fill="currentColor"
												className="opacity-80 hover:opacity-100 transition-opacity"
											/>
										</svg>
									</div>
								</a>

								{/* LinkedIn Icon - Enhanced */}
								<a
									href={LINKEDIN_URL}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn Profile"
									className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 rounded-full"
								>
									<div className="w-14 h-14 rounded-full bg-[var(--surface-raised)] flex items-center justify-center shadow-md border border-[var(--edge)] hover:shadow-lg transition-all">
										<svg
											viewBox="0 0 24 24"
											width="28"
											height="28"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
										>
											<path
												d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
												fill="#0077B5"
											/>
										</svg>
									</div>
								</a>
							</div>
						</div>
					</div>

					{/* Avatar column */}
					<div className="order-1 lg:order-2 relative flex items-center justify-center py-6 lg:py-0 lg:min-h-[480px]">
						{/* Profile Image with Animated Border and Circular Text */}
						<div
							className="relative w-40 h-40"
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							{/* Circular Text - Now memoized */}
							{CircularText}

							{/* Profile Image Container */}
							<div className="absolute inset-4">
								<div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f26d78] via-[#b48be0] to-[#ffd9c4] animate-spin-slow motion-reduce:animate-none"></div>
								<div className="absolute inset-1 rounded-full bg-[var(--surface-raised)]"></div>
								<div className="absolute inset-2 rounded-full overflow-hidden">
									<Image
										src="/images/profile_photo.png"
										alt="Portrait of Abhishek Vyas"
										width={144}
										height={144}
										className="w-full h-full object-cover"
										priority
									/>
								</div>
							</div>
						</div>

						{/* Floating fact chips — desktop only, decorative (facts repeat visible site copy) */}
						<div
							className="hidden lg:block absolute inset-0 pointer-events-none"
							aria-hidden="true"
						>
							{HERO_FACT_CHIPS.map((chip) => (
								<div
									key={chip.text}
									className={`card-base absolute flex items-center gap-2.5 px-3.5 py-2 !rounded-2xl animate-chip-bob ${chip.position}`}
									style={{ animationDelay: chip.delay }}
								>
									<span className={`w-8 h-8 rounded-xl flex items-center justify-center text-base shrink-0 ${chip.dotBg}`}>{chip.emoji}</span>
									<span className="text-xs font-semibold text-[var(--text-strong)] whitespace-nowrap">{chip.text}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div
				className="absolute left-1/2 transform -translate-x-1/2 animate-bounce motion-reduce:animate-none"
				style={{ bottom: "1rem" }}
				aria-hidden="true"
			>
				<div className="w-8 h-12 rounded-full border-2 border-[var(--accent)] flex items-start justify-center p-2 shadow-lg shadow-[#e04f5f]/20">
					<div className="w-1 h-3 bg-[var(--accent)] rounded-full animate-ping motion-reduce:animate-none"></div>
				</div>
			</div>

			{/* Contact Modal */}
			<ContactModal
				isOpen={isContactModalOpen}
				onClose={closeContactModal}
			/>
		</section>
	);
};
