"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/** Client boundary for next-themes — layout.tsx stays a server component. */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="light"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</NextThemesProvider>
	);
}
