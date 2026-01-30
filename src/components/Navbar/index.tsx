"use client";

import { useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const HOVER_CLOSE_DELAY_MS = 200; // Increased slightly for stability

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const handleMouseEnter = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setHomeDropdownOpen(true);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setHomeDropdownOpen(false);
		}, HOVER_CLOSE_DELAY_MS);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
			<nav className="container mx-auto px-4 py-4 flex items-center justify-between">
				{/* Left Side: Brand (Higher Z-index but isolated) */}
				<div className="flex items-center relative z-10">
					<Link
						href="/"
						className="flex items-center hover:opacity-80 transition-opacity"
					>
						<Image
							src="/images/av2.png"
							alt="Logo"
							width={32}
							height={32}
							priority
						/>
						<div className="ml-3 signature-container pointer-events-none">
							{/* pointer-events-none prevents the animation box from stealing hover */}
							<span className="font-signature text-2xl text-primary signature-static pointer-events-auto">Abhishek Vyas</span>
							<span className="font-signature text-2xl text-primary signature-animated">Abhishek Vyas</span>
						</div>
					</Link>
				</div>

				{/* Right Side: Desktop Menu */}
				<div className="hidden md:flex items-center gap-6">
					<div
						className="relative"
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						<DropdownMenu
							open={homeDropdownOpen}
							onOpenChange={(open) => {
								// This prevents Radix from closing the menu on its own
								if (!open) handleMouseLeave();
							}}
						>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									className="text-sm text-gray-600 hover:text-primary font-bold gap-1 px-4 h-10"
									asChild
								>
									{/* Link is inside asChild; Navigates on click */}
									<Link href="/">
										Home
										<FiChevronDown className={`transition-transform duration-200 ${homeDropdownOpen ? "rotate-180" : ""}`} />
									</Link>
								</Button>
							</DropdownMenuTrigger>

							<DropdownMenuContent
								align="start"
								sideOffset={5} // Matches the visual gap
								className="min-w-40 animate-in fade-in zoom-in-95 duration-200"
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								<DropdownMenuItem asChild>
									<Link
										href="/#recent-experience"
										className="cursor-pointer w-full"
									>
										Recent Role
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link
										href="/#projects"
										className="cursor-pointer w-full"
									>
										My Work
									</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					<Link
						href="/projects"
						className="text-sm text-gray-600 hover:text-primary font-bold"
					>
						Projects Archive
					</Link>
					<Link
						href="/experience"
						className="text-sm text-gray-600 hover:text-primary font-bold"
					>
						Experience
					</Link>
				</div>

				{/* Mobile Toggle */}
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? <IoClose /> : <GiHamburgerMenu />}
				</Button>
			</nav>
		</header>
	);
};
