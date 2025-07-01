// Centralized theme configuration for the portfolio website
export const theme = {
	// Color Palette - Light Theme
	colors: {
		// Primary brand colors
		primary: {
			50: "#f0f4f8",
			100: "#d9e2ec",
			200: "#bcccdc",
			300: "#9fb3c8",
			400: "#829ab1",
			500: "#627d98",
			600: "#486581",
			700: "#334e68",
			800: "#2d3748",
			900: "#1a202c",
			// Your current brand colors
			brand: {
				dark: "#142240",
				medium: "#3D5176",
				light: "#797F8C",
			},
		},

		// Secondary colors
		secondary: {
			50: "#f7fafc",
			100: "#edf2f7",
			200: "#e2e8f0",
			300: "#cbd5e0",
			400: "#a0aec0",
			500: "#718096",
			600: "#4a5568",
			700: "#2d3748",
			800: "#1a202c",
			900: "#171923",
		},

		// Accent colors
		accent: {
			blue: "#0078D4", // Azure
			green: "#6DB33F", // Spring Boot
			orange: "#ED8B00", // Java
			yellow: "#F7931E", // JavaScript
			purple: "#430098", // Heroku
			teal: "#38B2AC", // Tailwind
		},

		// Semantic colors
		semantic: {
			success: "#10B981",
			warning: "#F59E0B",
			error: "#EF4444",
			info: "#3B82F6",
		},

		// Background colors
		background: {
			primary: "#ffffff",
			secondary: "#f8fafc",
			tertiary: "#f1f5f9",
			overlay: "rgba(255, 255, 255, 0.7)",
		},

		// Text colors
		text: {
			primary: "#1e293b",
			secondary: "#64748b",
			tertiary: "#94a3b8",
			inverse: "#ffffff",
			muted: "#6b7280",
		},

		// Border colors
		border: {
			light: "#e2e8f0",
			medium: "#cbd5e0",
			dark: "#94a3b8",
		},

		// Shadow colors
		shadow: {
			light: "rgba(20, 34, 64, 0.1)",
			medium: "rgba(20, 34, 64, 0.2)",
			dark: "rgba(20, 34, 64, 0.3)",
		},
	},

	// Typography
	typography: {
		fontFamily: {
			sans: ["Inter", "system-ui", "sans-serif"],
			signature: ["Dancing Script", "cursive"],
			mono: ["monospace"],
		},

		fontSize: {
			xs: "0.75rem", // 12px
			sm: "0.875rem", // 14px
			base: "1rem", // 16px
			lg: "1.125rem", // 18px
			xl: "1.25rem", // 20px
			"2xl": "1.5rem", // 24px
			"3xl": "1.875rem", // 30px
			"4xl": "2.25rem", // 36px
			"5xl": "3rem", // 48px
			"6xl": "3.75rem", // 60px
		},

		fontWeight: {
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
		},

		lineHeight: {
			tight: 1.25,
			normal: 1.5,
			relaxed: 1.75,
		},
	},

	// Spacing and Layout
	spacing: {
		xs: "0.25rem", // 4px
		sm: "0.5rem", // 8px
		md: "1rem", // 16px
		lg: "1.5rem", // 24px
		xl: "2rem", // 32px
		"2xl": "3rem", // 48px
		"3xl": "4rem", // 64px
		"4xl": "6rem", // 96px
		"5xl": "8rem", // 128px
	},

	// Grid System
	grid: {
		container: {
			maxWidth: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			padding: {
				mobile: "1rem",
				tablet: "1.5rem",
				desktop: "2rem",
			},
		},

		columns: {
			mobile: 4,
			tablet: 8,
			desktop: 12,
		},

		gap: {
			xs: "0.5rem",
			sm: "1rem",
			md: "1.5rem",
			lg: "2rem",
			xl: "3rem",
		},
	},

	// Border Radius
	borderRadius: {
		none: "0",
		sm: "0.125rem", // 2px
		md: "0.375rem", // 6px
		lg: "0.5rem", // 8px
		xl: "0.75rem", // 12px
		"2xl": "1rem", // 16px
		full: "9999px",
	},

	// Shadows
	shadows: {
		sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
		md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
		lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
		xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
		"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
	},

	// Transitions
	transitions: {
		fast: "150ms ease-in-out",
		normal: "300ms ease-in-out",
		slow: "500ms ease-in-out",
	},

	// Z-index scale
	zIndex: {
		hide: -1,
		auto: "auto",
		base: 0,
		docked: 10,
		dropdown: 1000,
		sticky: 1100,
		banner: 1200,
		overlay: 1300,
		modal: 1400,
		popover: 1500,
		skipLink: 1600,
		toast: 1700,
		tooltip: 1800,
	},
} as const;

// Type definitions for better TypeScript support
export type Theme = typeof theme;
export type ThemeColors = typeof theme.colors;
export type ThemeTypography = typeof theme.typography;
export type ThemeSpacing = typeof theme.spacing;
export type ThemeGrid = typeof theme.grid;

// Utility functions for theme access
export const getColor = (path: string) => {
	const keys = path.split(".");
	let value: any = theme.colors;

	for (const key of keys) {
		value = value?.[key];
	}

	return value;
};

export const getSpacing = (size: keyof ThemeSpacing) => theme.spacing[size];
export const getFontSize = (size: keyof ThemeTypography["fontSize"]) => theme.typography.fontSize[size];
export const getFontWeight = (weight: keyof ThemeTypography["fontWeight"]) => theme.typography.fontWeight[weight];
