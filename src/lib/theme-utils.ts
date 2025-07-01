// Centralized theme utilities for the portfolio website

// Color constants
export const colors = {
	brand: {
		dark: "#142240",
		medium: "#3D5176",
		light: "#797F8C",
	},
	tech: {
		java: "#ED8B00",
		spring: "#6DB33F",
		azure: "#0078D4",
		aws: "#FF9900",
		javascript: "#F7931E",
		react: "#61DAFB",
		tailwind: "#38B2AC",
		swagger: "#85EA2D",
		junit: "#25A162",
		tensorflow: "#FF6F00",
		swift: "#F05138",
		python: "#3776AB",
		docker: "#2496ED",
		postgresql: "#336791",
		mongodb: "#47A248",
		firebase: "#FFCA28",
		flutter: "#02569B",
		heroku: "#430098",
	},
	semantic: {
		success: "#10B981",
		warning: "#F59E0B",
		error: "#EF4444",
		info: "#3B82F6",
	},
};

// Typography constants
export const typography = {
	fontFamily: {
		sans: ["Inter", "system-ui", "sans-serif"],
		signature: ["Dancing Script", "cursive"],
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
};

// Spacing constants
export const spacing = {
	xs: "0.25rem", // 4px
	sm: "0.5rem", // 8px
	md: "1rem", // 16px
	lg: "1.5rem", // 24px
	xl: "2rem", // 32px
	"2xl": "3rem", // 48px
	"3xl": "4rem", // 64px
	"4xl": "6rem", // 96px
	"5xl": "8rem", // 128px
};

// Common style combinations using hex values directly
export const commonStyles = {
	// Card styles
	card: {
		base: "bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100",
		hover: "hover:shadow-xl transition-shadow duration-300",
	},

	// Button styles
	button: {
		primary: "bg-gradient-to-r from-[#142240] to-[#3D5176] hover:from-[#142240] hover:to-[#142240] text-white font-medium rounded-md shadow-lg shadow-[#142240]/20 transition-all duration-300 hover:shadow-[#142240]/30",
		secondary: "bg-white text-[#142240] border border-gray-200 hover:bg-gray-50 transition-all duration-300",
	},

	// Section styles
	section: {
		background: "bg-gradient-to-br from-gray-50 via-white to-gray-50",
		container: "container mx-auto px-6 relative z-10",
	},

	// Header styles
	header: {
		title: "text-3xl font-bold mb-2 bg-gradient-to-r from-[#142240] via-[#142240] to-[#797F8C] bg-clip-text text-transparent",
		divider: "h-0.5 w-12 bg-gradient-to-r from-[#142240] to-[#797F8C] rounded-full",
	},

	// Skill tag styles
	skillTag: "px-4 py-2 bg-gradient-to-r from-[#142240]/10 to-[#3D5176]/10 text-[#142240] rounded-full text-sm font-medium hover:bg-[#142240]/20 transition-colors duration-300 cursor-default",
};

// Responsive utilities
export const responsive = {
	container: "container mx-auto px-4 md:px-6 lg:px-8",
	text: {
		h1: "text-4xl md:text-5xl lg:text-6xl",
		h2: "text-3xl md:text-4xl lg:text-5xl",
		h3: "text-2xl md:text-3xl lg:text-4xl",
		body: "text-base md:text-lg",
	},
	spacing: {
		section: "py-16 md:py-20 lg:py-24",
		container: "px-4 md:px-6 lg:px-8",
	},
};

// Hero-specific typography for more attractive and smaller sizes
export const heroTypography = {
	name: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
	title: "text-lg md:text-xl lg:text-2xl font-medium tracking-wide",
	subtitle: "text-base md:text-lg font-normal tracking-normal",
};

// CSS class generators
export const createGradient = (from: string, to: string, direction: "to-r" | "to-br" | "to-b" = "to-r") => {
	return `bg-gradient-${direction} from-[${from}] to-[${to}]`;
};

export const createTextGradient = (from: string, to: string, direction: "to-r" | "to-br" | "to-b" = "to-r") => {
	return `bg-gradient-${direction} from-[${from}] to-[${to}] bg-clip-text text-transparent`;
};

// Utility functions
export const getTechColor = (tech: string): string => {
	const techColors: Record<string, string> = {
		Java: colors.tech.java,
		"Spring Boot": colors.tech.spring,
		Azure: colors.tech.azure,
		AWS: colors.tech.aws,
		JavaScript: colors.tech.javascript,
		React: colors.tech.react,
		"Tailwind CSS": colors.tech.tailwind,
		Swagger: colors.tech.swagger,
		JUnit: colors.tech.junit,
		TensorFlow: colors.tech.tensorflow,
		Swift: colors.tech.swift,
		Python: colors.tech.python,
		Docker: colors.tech.docker,
		PostgreSQL: colors.tech.postgresql,
		MongoDB: colors.tech.mongodb,
		Firebase: colors.tech.firebase,
		Flutter: colors.tech.flutter,
		Heroku: colors.tech.heroku,
	};

	return techColors[tech] || colors.brand.dark;
};
