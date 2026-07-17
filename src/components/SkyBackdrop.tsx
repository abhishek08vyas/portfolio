"use client";

/**
 * Fixed dawn (light) / dusk (dark) sky behind every page.
 * Purely decorative: aria-hidden, pointer-events-none, behind all content.
 * Gradients + drift animation live in globals.css (.sky-*) so the colors
 * follow the theme tokens; no filter: blur() is used (soft-edged radial
 * gradients only) and the drift is transform-only + reduced-motion gated.
 */
export const SkyBackdrop = () => {
	return (
		<div
			aria-hidden="true"
			className="sky-base fixed inset-0 -z-10 pointer-events-none overflow-hidden"
		>
			<div className="sky-glow sky-glow--sun" />
			<div className="sky-glow sky-glow--lavender" />
			<div className="sky-glow sky-glow--peach" />
		</div>
	);
};
