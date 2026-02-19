"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const linkClassName = "text-sm text-gray-600 hover:text-primary font-bold py-0.5 pb-1 px-2 inline-block leading-normal transition-colors";

const NAV_ITEMS = [
	{
		title: "Home",
		href: "/",
		subItems: [
			{ title: "Recent Role", href: "/#recent-experience" },
			{ title: "Project Spotlight", href: "/#projects" },
		],
	},
	{ title: "Projects", href: "/projects" },
	{ title: "Experience", href: "/experience" },
];

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
			<nav className="container mx-auto px-4 py-4 flex items-center justify-between">
				{/* Brand */}
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
							<span className="font-signature text-2xl text-primary signature-static pointer-events-auto">Abhishek Vyas</span>
							<span className="font-signature text-2xl text-primary signature-animated">Abhishek Vyas</span>
						</div>
					</Link>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center gap-3">
					<NavigationMenu>
						<NavigationMenuList className="gap-3 space-x-0">
							{NAV_ITEMS.map((item) => (
								<NavigationMenuItem key={item.title}>
									{item.subItems && item.title !== "Home" ? (
										<>
											{/* We wrap the trigger in a Link so the title itself is clickable */}
											<NavigationMenuTrigger asChild className="bg-transparent hover:bg-transparent text-gray-600 hover:text-primary font-bold px-2 h-10 text-sm">
												<Link href={item.href}>{item.title}</Link>
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<ul className="grid gap-1 p-2 min-w-40">
													{item.subItems.map((sub) => (
														<li key={sub.href}>
															<NavigationMenuLink asChild>
																<Link
																	href={sub.href}
																	className="cursor-pointer w-full block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-accent hover:text-primary transition-colors"
																>
																	{sub.title}
																</Link>
															</NavigationMenuLink>
														</li>
													))}
												</ul>
											</NavigationMenuContent>
										</>
									) : (
										<NavigationMenuLink asChild>
											<Link
												href={item.href}
												className={linkClassName}
											>
												{item.title}
											</Link>
										</NavigationMenuLink>
									)}
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				{/* Mobile Toggle */}
				<Button
					variant="ghost"
					size="icon"
					className="md:hidden"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
				</Button>
			</nav>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl animate-in slide-in-from-top-2 duration-200">
					<div className="container mx-auto px-6 py-6 flex flex-col gap-6">
						{NAV_ITEMS.map((item) => (
							<div
								key={item.title}
								className="flex flex-col gap-3"
							>
								{/* Clicking this parent link closes menu and navigates */}
								<Link
									href={item.href}
									className="text-lg font-bold text-gray-900 hover:text-primary"
									onClick={() => setMenuOpen(false)}
								>
									{item.title}
								</Link>

								{/* Sub-items are indented and styled as secondary links */}
								{item.subItems && (
									<div className="flex flex-col gap-3 ml-4 border-l-2 border-gray-100 pl-4">
										{item.subItems.map((sub) => (
											<Link
												key={sub.href}
												href={sub.href}
												className="text-base text-gray-500 hover:text-primary transition-colors"
												onClick={() => setMenuOpen(false)}
											>
												{sub.title}
											</Link>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</header>
	);
};
