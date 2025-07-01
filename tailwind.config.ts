import type { Config } from "tailwindcss";

export default {
	darkMode: ["class", ".dark"],
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				signature: ["Dancing Script", "cursive"],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
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
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"spin-slow": {
					from: { transform: "rotate(0deg)" },
					to: { transform: "rotate(360deg)" },
				},
				"bounce-slow": {
					"0%, 100%": {
						transform: "translateY(0)",
						animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
					},
					"50%": {
						transform: "translateY(-25px)",
						animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
					},
				},
				writing: {
					"0%, 90%, 100%": {
						width: "0",
						borderRight: "2px solid transparent",
					},
					"5%": {
						borderRight: "2px solid hsl(var(--primary))",
					},
					"80%": {
						width: "100%",
						borderRight: "2px solid hsl(var(--primary))",
					},
					"85%": {
						borderRight: "2px solid transparent",
					},
				},
				"delay-appear": {
					"0%, 99%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"spin-slow": "spin-slow 10s linear infinite",
				"bounce-slow": "bounce-slow 5s infinite",
				writing: "writing 6s infinite",
				"delay-appear": "delay-appear 0.1s 3s forwards",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
