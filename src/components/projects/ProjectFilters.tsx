"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SKILL_ICONS } from "@/constants/SkillIcons";
import { HiCode, HiSearch, HiX, HiFilter, HiChevronDown } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { colors } from "@/lib/theme-utils";

interface ProjectFiltersProps {
	skills: string[];
	/** Total number of projects, for the "All Projects" chip count */
	totalProjects: number;
	selectedSkill: string | null;
	onSelectSkill: (skill: string | null) => void;
	searchQuery: string;
	onSearchChange: (val: string) => void;
}

export function ProjectFilters({ skills, totalProjects, selectedSkill, onSelectSkill, searchQuery, onSearchChange }: ProjectFiltersProps) {
	const [isFilterExpanded, setIsFilterExpanded] = useState(true);
	const [showMobileFilterModal, setShowMobileFilterModal] = useState(false);
	const reduce = useReducedMotion();
	const mobileCloseButtonRef = useRef<HTMLButtonElement>(null);
	const mobileTriggerRef = useRef<HTMLButtonElement>(null);

	const activeFilterCount = (selectedSkill ? 1 : 0) + (searchQuery ? 1 : 0);

	const handleClearAll = () => {
		onSelectSkill(null);
		onSearchChange("");
	};

	// Move focus into the mobile filter sheet on open; restore it on close
	const wasSheetOpen = useRef(false);
	useEffect(() => {
		if (showMobileFilterModal) {
			wasSheetOpen.current = true;
			mobileCloseButtonRef.current?.focus();
		} else if (wasSheetOpen.current) {
			wasSheetOpen.current = false;
			mobileTriggerRef.current?.focus({ preventScroll: true });
		}
	}, [showMobileFilterModal]);

	return (
		<div className="space-y-6">
			{/* Search Bar - Smaller for desktop */}
			<motion.div
				initial={reduce ? false : { opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				className="relative max-w-xl mx-auto"
			>
				<div className="relative group">
					<HiSearch
						className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-[#142240] transition-colors duration-300"
						aria-hidden="true"
					/>
					<input
						type="text"
						placeholder="Search projects..."
						aria-label="Search projects"
						value={searchQuery}
						onChange={(e) => onSearchChange(e.target.value)}
						className="w-full pl-11 pr-11 py-3 bg-white rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#3D5176] focus:border-[#142240] outline-none transition-all text-[#142240] placeholder:text-gray-500 font-medium text-sm shadow-sm"
					/>
					{searchQuery && (
						<motion.button
							initial={reduce ? false : { scale: 0 }}
							animate={{ scale: 1 }}
							onClick={() => onSearchChange("")}
							aria-label="Clear search"
							className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
						>
							<HiX
								className="w-3.5 h-3.5 text-gray-600"
								aria-hidden="true"
							/>
						</motion.button>
					)}
				</div>
			</motion.div>

			{/* OPTION 1: Mobile - Bottom Sheet Style Filter (Recommended) */}
			<motion.div
				initial={reduce ? false : { opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: reduce ? 0 : 0.1 }}
				className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-100 shadow-lg overflow-hidden"
			>
				{/* Filter Header */}
				<div className="px-4 md:px-6 py-3.5 md:py-4 border-b border-gray-100">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2.5 md:gap-3">
							<div
								className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center shadow-md"
								style={{
									background: `linear-gradient(135deg, ${colors.brand.primary} 0%, ${colors.brand.medium} 100%)`,
								}}
							>
								<HiFilter
									className="w-4 h-4 md:w-5 md:h-5 text-white"
									aria-hidden="true"
								/>
							</div>
							<div>
								<h3 className="text-xs md:text-base font-bold text-[#142240]">Filter by Technology</h3>
								<p className="text-[10px] md:text-xs text-gray-600">
									{skills.length} technologies
									{activeFilterCount > 0 && <span className="ml-1.5 md:ml-2 inline-flex items-center px-1.5 md:px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium bg-[#142240]/10 text-[#142240]">{activeFilterCount}</span>}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							{activeFilterCount > 0 && (
								<motion.button
									initial={reduce ? false : { opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									onClick={handleClearAll}
									className="hidden md:block text-sm font-medium text-gray-600 hover:text-[#142240] px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
								>
									Clear all
								</motion.button>
							)}
							{/* Mobile: Show Modal Button */}
							<button
								ref={mobileTriggerRef}
								onClick={() => setShowMobileFilterModal(true)}
								aria-haspopup="dialog"
								aria-expanded={showMobileFilterModal}
								className="md:hidden px-3 py-1.5 rounded-lg bg-[#142240] text-white text-xs font-semibold flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
							>
								<HiFilter
									className="w-3.5 h-3.5"
									aria-hidden="true"
								/>
								<span>Select</span>
							</button>
							{/* Desktop: Toggle Button */}
							<button
								onClick={() => setIsFilterExpanded(!isFilterExpanded)}
								aria-expanded={isFilterExpanded}
								aria-controls="technology-filter-panel"
								aria-label="Technology filter options"
								className="hidden md:block p-2 rounded-lg hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
							>
								<motion.div
									animate={{ rotate: isFilterExpanded ? 180 : 0 }}
									transition={{ duration: reduce ? 0 : 0.3 }}
								>
									<HiChevronDown
										className="w-5 h-5 text-gray-600"
										aria-hidden="true"
									/>
								</motion.div>
							</button>
						</div>
					</div>
				</div>

				{/* Desktop Filter Content */}
				<AnimatePresence initial={false}>
					{isFilterExpanded && (
						<motion.div
							id="technology-filter-panel"
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: reduce ? 0 : 0.3 }}
							className="overflow-hidden hidden md:block"
						>
							<div className="p-6">
								<div className="flex flex-wrap gap-2">
									<FilterChip
										label="All Projects"
										isActive={selectedSkill === null}
										onClick={() => onSelectSkill(null)}
										count={totalProjects}
									/>
									{skills.map((skill) => (
										<FilterChip
											key={skill}
											label={skill}
											icon={getSkillIcon(skill)}
											isActive={selectedSkill === skill}
											onClick={() => onSelectSkill(selectedSkill === skill ? null : skill)}
										/>
									))}
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Mobile: Current Selection Display */}
				<div className="md:hidden px-4 py-3 bg-gray-50/50 border-t border-gray-100">
					{selectedSkill ? (
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<span className="text-xs text-gray-600">Selected:</span>
								<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#142240]/20 bg-gradient-to-r from-[#142240]/5 to-[#3D5176]/5">
									<span aria-hidden="true">{getSkillIcon(selectedSkill)}</span>
									<span className="text-xs font-semibold text-[#142240]">{selectedSkill}</span>
								</div>
							</div>
							<button
								onClick={() => onSelectSkill(null)}
								className="text-xs font-medium text-gray-600 hover:text-[#142240] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
							>
								Clear
							</button>
						</div>
					) : (
						<p className="text-xs text-gray-600 text-center">No technology filter applied</p>
					)}
				</div>
			</motion.div>

			{/* Mobile Modal - Bottom Sheet Style */}
			<AnimatePresence>
				{showMobileFilterModal && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: reduce ? 0 : 0.2 }}
							onClick={() => setShowMobileFilterModal(false)}
							aria-hidden="true"
							className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
						/>

						{/* Bottom Sheet */}
						<motion.div
							initial={{ y: "100%" }}
							animate={{ y: 0 }}
							exit={{ y: "100%" }}
							transition={reduce ? { duration: 0 } : { type: "spring", damping: 30, stiffness: 300 }}
							role="dialog"
							aria-modal="true"
							aria-label="Select technology filter"
							onKeyDown={(e) => {
								if (e.key === "Escape") {
									setShowMobileFilterModal(false);
									return;
								}
								// aria-modal dialog: trap Tab inside the sheet
								if (e.key !== "Tab") return;
								const sheet = e.currentTarget;
								const focusables = sheet.querySelectorAll<HTMLElement>('button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])');
								if (focusables.length === 0) return;
								const first = focusables[0];
								const last = focusables[focusables.length - 1];
								const active = document.activeElement;
								if (e.shiftKey) {
									if (active === first || active === sheet) {
										e.preventDefault();
										last.focus();
									}
								} else if (active === last) {
									e.preventDefault();
									first.focus();
								}
							}}
							className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 max-h-[70vh] overflow-hidden md:hidden"
						>
							{/* Handle Bar */}
							<div
								className="flex justify-center pt-2 pb-1"
								aria-hidden="true"
							>
								<div className="w-10 h-1 bg-gray-300 rounded-full" />
							</div>

							{/* Header */}
							<div className="px-4 py-3 border-b border-gray-100">
								<div className="flex items-center justify-between mb-2">
									<h3 className="text-base font-bold text-[#142240]">Select Technology</h3>
									<button
										ref={mobileCloseButtonRef}
										onClick={() => setShowMobileFilterModal(false)}
										aria-label="Close filter options"
										className="p-1.5 hover:bg-gray-100 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
									>
										<HiX
											className="w-4 h-4 text-gray-600"
											aria-hidden="true"
										/>
									</button>
								</div>
								{activeFilterCount > 0 && (
									<button
										onClick={handleClearAll}
										className="text-xs font-medium text-gray-600 hover:text-[#142240] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2"
									>
										Clear all filters
									</button>
								)}
							</div>

							{/* Scrollable Content */}
							<div className="overflow-y-auto max-h-[calc(70vh-100px)] px-4 py-3">
								<div className="grid grid-cols-3 gap-2">
									<MobileFilterOption
										label="All Projects"
										count={totalProjects}
										isActive={selectedSkill === null}
										onClick={() => {
											onSelectSkill(null);
											setShowMobileFilterModal(false);
										}}
									/>
									{skills.map((skill) => (
										<MobileFilterOption
											key={skill}
											label={skill}
											icon={getSkillIcon(skill)}
											isActive={selectedSkill === skill}
											onClick={() => {
												onSelectSkill(selectedSkill === skill ? null : skill);
												setShowMobileFilterModal(false);
											}}
										/>
									))}
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}

interface FilterOptionProps {
	label: string;
	isActive: boolean;
	onClick: () => void;
	icon?: React.ReactNode;
	count?: number;
}

// Desktop Filter Chip
function FilterChip({ label, isActive, onClick, icon, count }: FilterOptionProps) {
	const reduce = useReducedMotion();

	return (
		<motion.button
			whileHover={reduce ? undefined : { scale: 1.05 }}
			whileTap={reduce ? undefined : { scale: 0.95 }}
			onClick={onClick}
			aria-pressed={isActive}
			className={`
				relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium
				transition-all duration-300 border whitespace-nowrap
				focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2
				${isActive ? "border-[#142240] bg-gradient-to-r from-[#142240]/5 to-[#3D5176]/5 text-[#142240] shadow-md" : "border-gray-200 bg-white text-gray-600 hover:border-[#142240]/30 hover:bg-gray-50 hover:text-[#142240]"}
			`}
		>
			<span className="relative z-10 flex items-center gap-2">
				{icon && (
					<span
						aria-hidden="true"
						className={isActive ? "text-[#142240]" : "text-gray-600"}
					>
						{icon}
					</span>
				)}
				{label}
				{count !== undefined && (
					<span
						className={`
						ml-1 px-1.5 py-0.5 rounded-md text-xs font-bold
						${isActive ? "bg-[#142240] text-white" : "bg-gray-100 text-gray-600"}
					`}
					>
						{count}
					</span>
				)}
			</span>

			{isActive && (
				<motion.div
					layoutId="activeFilterBubble"
					className="absolute inset-0 bg-gradient-to-r from-[#142240]/5 to-[#3D5176]/5 rounded-lg"
					initial={false}
					transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 30 }}
				/>
			)}
		</motion.button>
	);
}

// Mobile Filter Option (for bottom sheet)
function MobileFilterOption({ label, isActive, onClick, icon, count }: FilterOptionProps) {
	return (
		<button
			onClick={onClick}
			aria-pressed={isActive}
			className={`
				relative flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg text-sm font-semibold
				transition-all duration-300 border-2 min-h-[70px]
				focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5176] focus-visible:ring-offset-2
				${isActive ? "border-[#142240] bg-gradient-to-br from-[#142240]/5 to-[#3D5176]/5 text-[#142240] shadow-lg" : "border-gray-200 bg-white text-gray-600 active:scale-95 motion-reduce:transform-none"}
			`}
		>
			{icon && (
				<span
					aria-hidden="true"
					className={`text-lg ${isActive ? "text-[#142240]" : "text-gray-600"}`}
				>
					{icon}
				</span>
			)}
			<span className="text-center text-[11px] leading-tight font-semibold">{label}</span>
			{count !== undefined && (
				<span
					className={`
					absolute top-1.5 right-1.5 px-1 py-0.5 rounded text-[9px] font-bold
					${isActive ? "bg-[#142240] text-white" : "bg-gray-100 text-gray-600"}
				`}
				>
					{count}
				</span>
			)}
			{isActive && <div className="absolute inset-0 border-2 border-[#142240] rounded-lg pointer-events-none" />}
		</button>
	);
}

function getSkillIcon(skill: string) {
	const Icon = SKILL_ICONS[skill as keyof typeof SKILL_ICONS];
	return Icon ? (Icon as React.ReactNode) : <HiCode className="w-4 h-4" />;
}
