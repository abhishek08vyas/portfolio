"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LuSun, LuMoon } from "react-icons/lu";

const toggleClassName =
	"inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--edge)] bg-[var(--surface-card)] text-[var(--text-strong)] transition-colors hover:bg-[var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 cursor-pointer";

export const ThemeToggle = ({ className = "" }: { className?: string }) => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		// Client-mount guard: the server can't know the resolved theme, so we
		// flip to mounted once on the client. Intentional single setState.
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setMounted(true);
	}, []);

	// Static placeholder until mounted to avoid a hydration mismatch
	// (the server can't know the resolved theme).
	if (!mounted) {
		return (
			<span
				className={`${toggleClassName} ${className}`}
				aria-hidden="true"
			>
				<LuMoon
					className="w-4 h-4 opacity-50"
					aria-hidden="true"
				/>
			</span>
		);
	}

	const isDark = resolvedTheme === "dark";

	return (
		<button
			type="button"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
			className={`${toggleClassName} ${className}`}
		>
			{isDark ? (
				<LuSun
					className="w-4 h-4"
					aria-hidden="true"
				/>
			) : (
				<LuMoon
					className="w-4 h-4"
					aria-hidden="true"
				/>
			)}
		</button>
	);
};
