// Centralized theme utilities for the portfolio website

// Color constants
export const colors = {
	brand: {
		/** Primary brand color – navy. Use for accents, icons, badges, and key UI. */
		primary: "#142240",
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
		redux: "#764ABC",
		saga: "#999999",
		zustand: "#443E38",
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
		typescript: "#3178C6",
		mysql: "#4479A1",
		redis: "#DC382D",
		jenkins: "#D24939",
		git: "#F05032",
		elasticsearch: "#005571",
		splunk: "#FF4500",
		scikitlearn: "#F7931E",
		mediapipe: "#00A3E0",
		kafka: "#231F20",
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

// Common style combinations — warm theme, token-based (light + dark aware)
export const commonStyles = {
	// Card styles
	card: {
		base: "bg-[var(--surface-card)] backdrop-blur-sm rounded-3xl shadow-[var(--shadow-soft)] border border-[var(--edge)]",
		hover: "hover:shadow-[var(--shadow-hover)] transition-shadow duration-300",
	},

	// Button styles
	button: {
		primary:
			"cursor-pointer rounded-full bg-gradient-to-r from-[#f26d78] to-[#e04f5f] hover:from-[#e04f5f] hover:to-[#e04f5f] text-white font-semibold shadow-lg shadow-[#e04f5f]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#e04f5f]/40 motion-reduce:transform-none",
		secondary: "cursor-pointer rounded-full bg-[var(--surface-raised)] text-[var(--text-strong)] border border-[var(--edge)] hover:bg-[var(--surface-card)] hover:text-[var(--text-strong)] transition-all duration-300",
	},

	// Section styles — transparent so the fixed SkyBackdrop shows through
	section: {
		background: "bg-transparent",
		container: "container mx-auto px-6 relative z-10",
	},

	// Header styles — serif display type carries the style now
	header: {
		title: "font-display text-3xl md:text-4xl font-semibold tracking-tight mb-2 text-[var(--text-strong)]",
		divider: "h-0.5 w-12 bg-[var(--accent)] rounded-full",
	},

	// Skill tag styles
	skillTag: "px-4 py-2 bg-[var(--accent-soft)] text-[var(--text-strong)] border border-[var(--edge)] rounded-full text-sm font-medium hover:-translate-y-0.5 hover:shadow-sm motion-reduce:transform-none transition-all duration-300 cursor-default",

	// Tab styles
	tab: {
		container: "inline-flex rounded-full shadow-md bg-[var(--surface-card)] border border-[var(--edge)] p-1",
		button: "px-6 py-2 rounded-full transition-all flex items-center",
		active: "bg-[var(--surface-raised)] shadow-sm text-[var(--text-strong)] font-medium",
		inactive: "text-[var(--text-dim)] hover:text-[var(--text-strong)]",
	},

	// Experience card styles
	experienceCard: {
		base: "bg-[var(--surface-card)] rounded-2xl p-6 border border-[var(--edge)] shadow-sm",
		header: "flex flex-col md:flex-row md:items-center justify-between mb-4",
		title: "text-xl font-semibold mb-2 md:mb-0 text-[var(--text-strong)]",
		period: "flex items-center text-[var(--text-dim)] text-sm bg-[var(--surface-raised)] px-3 py-1 rounded-full shadow-sm border border-[var(--edge)]",
		company: "flex items-center text-[var(--text-body)] mb-4",
		skillsSection: "mb-5 p-3 bg-[var(--surface-raised)] rounded-lg border border-[var(--edge)]",
		responsibilitiesSection: "bg-[var(--surface-raised)] p-3 rounded-lg border border-[var(--edge)]",
	},

	// Open to work section — dusk-purple gradient panel (reads well in BOTH themes)
	openToWork: {
		container: "bg-gradient-to-br from-[#3b3161] via-[#6b5aa8] to-[#b8779b] rounded-[34px] shadow-[0_34px_80px_-30px_rgba(59,49,97,0.6)] transform transition-all hover:scale-[1.01] hover:shadow-xl",
		content: "relative rounded-[34px] p-6 md:p-8 overflow-hidden",
		badge: "inline-flex items-center bg-emerald-500/20 text-emerald-200 rounded-full py-1 px-3 mb-4 text-xs font-medium",
		title: "font-display text-xl md:text-2xl font-semibold tracking-tight text-white mb-3",
		description: "text-white/80",
		button: "inline-flex items-center justify-center bg-white text-[#2a2440] font-semibold px-6 py-3 rounded-full shadow-lg transition-all hover:bg-white/90 hover:shadow-xl group whitespace-nowrap",
	},
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

// Hero-specific typography — serif display face for the name, Inter for the role line
export const heroTypography = {
	name: "font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight",
	title: "text-lg md:text-xl lg:text-2xl font-semibold tracking-wide",
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
		TypeScript: colors.tech.typescript,
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
		MySQL: colors.tech.mysql,
		Redis: colors.tech.redis,
		Jenkins: colors.tech.jenkins,
		Git: colors.tech.git,
		Elasticsearch: colors.tech.elasticsearch,
		Splunk: colors.tech.splunk,
		"scikit-learn": colors.tech.scikitlearn,
		MediaPipe: colors.tech.mediapipe,
		"Apache Kafka": colors.tech.kafka,
		Firebase: colors.tech.firebase,
		Flutter: colors.tech.flutter,
		Heroku: colors.tech.heroku,
	};

	return techColors[tech] || colors.brand.dark;
};
