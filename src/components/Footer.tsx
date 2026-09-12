// Footer.tsx
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import Link from "next/link";
import { ContactModal } from "./ContactModel";
import { RESUME_PATH, GITHUB_URL, LINKEDIN_URL, EMAIL } from "@/constants/links";

const footerLinkClass = "text-[#c8c6d1] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#131218] rounded-sm";

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);
	const reduce = useReducedMotion();

	return (
		<footer className="bg-gradient-to-b from-[#22212e] to-[#131218] text-white pt-12 pb-4">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Column 1 — Identity */}
					<div className="flex flex-col space-y-3">
						<h2 className="text-xl font-bold text-white">Abhishek Vyas</h2>
						<p className="text-sm text-[#c8c6d1]">Full-stack developer building AI-enabled systems: RAG pipelines, event-driven architecture, and observability. Based in Toronto, ON, Canada · Open to relocation · Remote-ready.</p>
						<motion.p
							className="font-signature text-2xl text-[#c8c6d1] mt-1"
							aria-hidden="true"
							initial={reduce ? false : { opacity: 0, y: 8 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							Abhishek
						</motion.p>
					</div>

					{/* Column 2 — Explore */}
					<div>
						<h3 className="font-medium mb-4 text-white">Explore</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className={footerLinkClass}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/experience"
									className={footerLinkClass}
								>
									Experience
								</Link>
							</li>
							<li>
								<Link
									href="/projects"
									className={footerLinkClass}
								>
									Projects
								</Link>
							</li>
							<li>
								{/* TODO(ABHISHEK): export resume PDF to public/resume.pdf */}
								<a
									href={RESUME_PATH}
									download
									className={footerLinkClass}
								>
									Resume
								</a>
							</li>
						</ul>
					</div>

					{/* Column 3 — Get in touch */}
					<div>
						<h3 className="font-medium mb-4 text-white">Get in touch</h3>
						<ul className="space-y-2">
							<li>
								<a
									href={`mailto:${EMAIL}`}
									className={`flex items-center gap-2 ${footerLinkClass}`}
								>
									<LuMail
										className="w-4 h-4"
										aria-hidden="true"
									/>
									<span>{EMAIL}</span>
								</a>
							</li>
							<li>
								<a
									href={GITHUB_URL}
									target="_blank"
									rel="noopener noreferrer"
									className={`flex items-center gap-2 ${footerLinkClass}`}
								>
									<FaGithub
										className="w-4 h-4"
										aria-hidden="true"
									/>
									<span>GitHub</span>
								</a>
							</li>
							<li>
								<a
									href={LINKEDIN_URL}
									target="_blank"
									rel="noopener noreferrer"
									className={`flex items-center gap-2 ${footerLinkClass}`}
								>
									<FaLinkedin
										className="w-4 h-4"
										aria-hidden="true"
									/>
									<span>LinkedIn</span>
								</a>
							</li>
							<li>
								<button
									type="button"
									onClick={() => setIsContactModalOpen(true)}
									className={`underline underline-offset-4 cursor-pointer ${footerLinkClass}`}
								>
									Start a conversation
								</button>
							</li>
						</ul>
						<p className="text-sm text-[#c8c6d1] mt-3">Also available for freelance full-stack and AI consulting work.</p>
					</div>
				</div>

				{/* Copyright Line */}
				<div className="border-t border-white/10 mt-8 pt-6 text-center">
					<p className="text-sm text-[#96939f]">Copyright © {currentYear} Abhishek Vyas. All rights reserved.</p>
				</div>
			</div>

			{/* Contact Modal */}
			<ContactModal
				isOpen={isContactModalOpen}
				onClose={() => setIsContactModalOpen(false)}
			/>
		</footer>
	);
};
