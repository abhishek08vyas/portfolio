import React from "react";

interface SectionHeadingProps {
	/** Small decorative section number, e.g. "01" (omitted on page-level h1 headers) */
	num?: string;
	title: string;
	sub?: string;
	align?: "left" | "center";
}

/** Numbered serif section heading for the warm theme (recruiter structure). */
export const SectionHeading = ({ num, title, sub, align = "center" }: SectionHeadingProps) => {
	const centered = align === "center";

	return (
		<div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
			{num && (
				<p
					aria-hidden="true"
					className="font-mono text-sm font-bold tracking-[0.22em] text-[var(--accent-strong)] mb-2"
				>
					{num}
				</p>
			)}
			<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-strong)]">{title}</h2>
			{sub && <p className={`mt-3 text-[var(--text-dim)] text-base md:text-lg max-w-2xl ${centered ? "mx-auto" : ""}`}>{sub}</p>}
			<div className={`flex mt-4 ${centered ? "justify-center" : "justify-start"}`}>
				<div
					className="h-0.5 w-12 bg-[var(--accent)] rounded-full"
					aria-hidden="true"
				/>
			</div>
		</div>
	);
};
