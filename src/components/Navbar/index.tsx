"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ContactModal } from "@/components/ContactModel";
import { RESUME_PATH } from "@/constants/links";

const linkClassName = "text-sm text-gray-600 hover:text-primary font-bold py-0.5 pb-1 px-2 inline-block leading-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2 rounded-sm";

const NAV_ITEMS: { title: string; href: string }[] = [
	{ title: "Experience", href: "/experience" },
	{ title: "Projects", href: "/projects" },
];

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);

	const openContactModal = () => {
		setMenuOpen(false);
		setIsContactModalOpen(true);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
			<nav className="container mx-auto px-4 py-4 flex items-center justify-between">
				{/* Brand */}
				<div className="flex items-center relative z-10">
					<Link
						href="/"
						aria-label="Abhishek Vyas — home"
						className="flex items-center hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2 rounded-md"
					>
						<Image
							src="/images/av2.png"
							alt=""
							width={32}
							height={32}
							priority
						/>
						<div className="ml-3 signature-container pointer-events-none">
							<span className="font-signature text-2xl text-primary signature-static pointer-events-auto">Abhishek Vyas</span>
							<span className="font-signature text-2xl text-primary signature-animated" aria-hidden="true">Abhishek Vyas</span>
						</div>
					</Link>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center gap-3">
					<ul className="flex items-center gap-3">
						{NAV_ITEMS.map((item) => (
							<li key={item.title}>
								<Link
									href={item.href}
									className={linkClassName}
								>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
					{/* TODO(ABHISHEK): export resume PDF to public/resume.pdf */}
					<Button
						asChild
						variant="outline"
						className="border-[#142240] text-[#142240] hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
					>
						<a
							href={RESUME_PATH}
							download
						>
							Download Resume
						</a>
					</Button>
					<Button
						onClick={openContactModal}
						className="cursor-pointer bg-gradient-to-r from-[#142240] to-[#3D5176] hover:from-[#142240] hover:to-[#142240] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
					>
						Contact
					</Button>
				</div>

				{/* Mobile Toggle */}
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label={menuOpen ? "Close menu" : "Open menu"}
					aria-expanded={menuOpen}
					aria-controls="mobile-menu"
				>
					{menuOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
				</Button>
			</nav>

			{/* Mobile Menu */}
			{menuOpen && (
				<div
					id="mobile-menu"
					className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl animate-in slide-in-from-top-2 duration-200 motion-reduce:animate-none"
				>
					<div className="container mx-auto px-6 py-6 flex flex-col gap-4">
						<ul className="flex flex-col gap-4">
							{NAV_ITEMS.map((item) => (
								<li key={item.title}>
									<Link
										href={item.href}
										className="text-lg font-bold text-gray-900 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2 rounded-sm"
										onClick={() => setMenuOpen(false)}
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
						{/* TODO(ABHISHEK): export resume PDF to public/resume.pdf */}
						<Button
							asChild
							variant="outline"
							className="w-full border-[#142240] text-[#142240] hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
						>
							<a
								href={RESUME_PATH}
								download
							>
								Download Resume
							</a>
						</Button>
						<Button
							onClick={openContactModal}
							className="w-full cursor-pointer bg-gradient-to-r from-[#142240] to-[#3D5176] hover:from-[#142240] hover:to-[#142240] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
						>
							Contact
						</Button>
					</div>
				</div>
			)}

			{/* Contact Modal */}
			<ContactModal
				isOpen={isContactModalOpen}
				onClose={() => setIsContactModalOpen(false)}
			/>
		</header>
	);
};
