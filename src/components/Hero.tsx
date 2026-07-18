import { useState } from "react";
import { LuMail, LuDownload } from "react-icons/lu";
import { Button } from "./ui/button";
import Image from "next/image";
import { ContactModal } from "./ContactModel";
import { commonStyles, responsive, heroTypography } from "@/lib/theme-utils";
import { RESUME_PATH, GITHUB_URL, LINKEDIN_URL } from "@/constants/links";

const HERO_SKILLS = ["TypeScript / Node.js", "Java / Spring Boot", "Python", "Apache Kafka", "Azure", "RAG / LLM pipelines"];

export const Hero = () => {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);

	const openContactModal = () => {
		setIsContactModalOpen(true);
	};

	const closeContactModal = () => {
		setIsContactModalOpen(false);
	};

	return (
		<section
			id="hero"
			className="relative flex items-center pt-24 pb-12 lg:pt-16 lg:pb-0 lg:min-h-screen overflow-hidden"
		>
			{/* Main Content — the fixed SkyBackdrop shows through */}
			<div className={responsive.container + " relative z-10"}>
				<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-16 items-center lg:py-10">
					{/* Photo — compact and first on mobile, large right column on desktop */}
					<div className="flex justify-center lg:order-2">
						<div className="relative">
							<div className="w-36 sm:w-44 lg:w-[340px] aspect-[4/5] rounded-2xl lg:rounded-[30px] overflow-hidden border-2 border-[var(--accent)] rotate-2 shadow-[var(--shadow-soft)] bg-[var(--surface-raised)]">
								<Image
									src="/images/profile_photo.png"
									alt="Portrait of Abhishek Vyas"
									fill
									sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 340px"
									className="object-cover"
									priority
								/>
							</div>
							{/* Pinned availability chip — desktop only (the badge below covers mobile) */}
							<div
								className="hidden lg:flex absolute -left-5 bottom-9 card-base items-center gap-2.5 !rounded-2xl px-4 py-2.5 -rotate-1"
							>
								<span
									className="relative flex w-2 h-2 shrink-0"
									aria-hidden="true"
								>
									<span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
									<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
								</span>
								<span className="text-xs font-semibold text-[var(--text-body)] whitespace-nowrap">
									<b className="block text-[var(--text-strong)] text-[13px]">Open to work</b>
									Full-stack &amp; AI · remote Canada
								</span>
							</div>
						</div>
					</div>

					{/* Text column */}
					<div className="text-center lg:text-left lg:order-1">
						{/* Location eyebrow */}
						<p className="inline-flex items-center rounded-full bg-[var(--accent-soft)] border border-[var(--edge)] px-3.5 py-1.5 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[var(--accent-strong)] mb-4 md:mb-5">
							Based in St. John&apos;s, NL, Canada · Open to relocation
						</p>

						{/* Name — serif display; "Vyas" in italic amber gradient */}
						<h1 className={`${heroTypography.name} text-[var(--text-strong)] mb-2 md:mb-3 pb-1`}>
							Abhishek <em className="italic font-[650] bg-gradient-to-r from-[#d97706] to-[#b45309] dark:from-[#fcd34d] dark:to-[#f59e0b] bg-clip-text text-transparent">Vyas</em>
						</h1>

						{/* Title */}
						<h2 className={`${heroTypography.title} text-[var(--text-body)] mb-4 md:mb-6`}>Full-Stack Developer · AI & RAG Pipelines</h2>

						{/* OPEN TO WORK badge */}
						<div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 dark:bg-emerald-400/15 dark:border-emerald-300/30 px-3.5 py-1.5 mb-2.5">
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
						<p className="text-sm md:text-base font-medium text-[var(--text-body)] mb-5 md:mb-6">Building AI/RAG systems · Open to full-stack & AI roles, remote Canada-wide</p>

						{/* Short lede — the full story lives in Now & Recent and /experience */}
						<p className="text-[15px] md:text-lg text-[var(--text-dim)] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-5 md:mb-6">
							3+ years building <span className="font-semibold text-[var(--text-strong)]">RAG pipelines, event-driven systems, and observability</span> for high-traffic platforms. MASc Computer Engineering, Memorial University (2025) · AZ-204.
						</p>

						{/* Skill chips */}
						<div className="flex flex-wrap justify-center lg:justify-start gap-1.5 md:gap-2 mb-6 md:mb-8">
							{HERO_SKILLS.map((skill) => (
								<span
									key={skill}
									className={`${commonStyles.skillTag} inline-block !px-2.5 !py-1 !text-[11px] md:!px-3 md:!py-1.5 md:!text-xs`}
								>
									{skill}
								</span>
							))}
						</div>

						{/* Call to Action Buttons — side-by-side on mobile, row on desktop */}
						<div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-4 justify-center lg:justify-start items-stretch sm:items-center mb-5">
							<div className="grid grid-cols-2 gap-3 sm:contents">
								{/* TODO(ABHISHEK): export resume PDF to public/resume.pdf */}
								<Button
									asChild
									className={`${commonStyles.button.primary} group px-3 py-5 sm:px-8 sm:py-6 gap-2 sm:gap-3 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2`}
								>
									<a
										href={RESUME_PATH}
										download
									>
										<LuDownload
											className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-y-0.5 motion-reduce:transform-none"
											aria-hidden="true"
										/>
										<span className="text-sm sm:text-lg whitespace-nowrap">Resume</span>
									</a>
								</Button>

								<Button
									onClick={openContactModal}
									className={`${commonStyles.button.secondary} px-3 py-5 sm:px-8 sm:py-6 gap-2 sm:gap-3 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2`}
								>
									<LuMail
										className="w-5 h-5 sm:w-6 sm:h-6"
										aria-hidden="true"
									/>
									<span className="text-sm sm:text-lg">Contact</span>
								</Button>
							</div>

							<div className="flex gap-3 md:gap-4 justify-center">
								{/* GitHub Icon */}
								<a
									href={GITHUB_URL}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub Profile"
									className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 rounded-full"
								>
									<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--surface-raised)] text-[var(--text-strong)] flex items-center justify-center shadow-md border border-[var(--edge)] hover:shadow-lg transition-all">
										<svg
											viewBox="0 0 24 24"
											width="26"
											height="26"
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

								{/* LinkedIn Icon */}
								<a
									href={LINKEDIN_URL}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn Profile"
									className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 rounded-full"
								>
									<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--surface-raised)] flex items-center justify-center shadow-md border border-[var(--edge)] hover:shadow-lg transition-all">
										<svg
											viewBox="0 0 24 24"
											width="26"
											height="26"
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

						{/* Currently line */}
						<p className="text-[13px] md:text-sm font-medium text-[var(--text-dim)]">
							<span className="font-bold text-[var(--accent-strong)]">Currently:</span> <span className="font-semibold text-[var(--text-strong)]">hybrid RAG pipeline for OSFI regulatory search</span> (consulting)
						</p>
					</div>
				</div>
			</div>

			{/* Scroll Indicator — desktop only */}
			<div
				className="absolute left-1/2 transform -translate-x-1/2 animate-bounce motion-reduce:animate-none hidden lg:block"
				style={{ bottom: "1rem" }}
				aria-hidden="true"
			>
				<div className="w-8 h-12 rounded-full border-2 border-[var(--accent)] flex items-start justify-center p-2 shadow-lg shadow-[#d97706]/20">
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
