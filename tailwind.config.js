// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
	safelist: [
		"p-x-4",
		"p-x-6",
		"p-x-8",
		"mx-auto",
		"max-w-[1536px]",
		"p-y-16",
		"mb-12",
		"text-center",
		"text-3xl",
		"font-bold",
		"rounded-lg",
		"p-x-4", // updated here too
		"p-y-2",
		"font-medium",
		"transition-colors",
		"duration-200",
		"bg-sky-600",
		"text-white",
		"hover:bg-sky-700",
	],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				sans: ["var(--font-sans)", "Arial", "sans-serif"],
				mono: ["var(--font-mono)", "monospace"],
			},
		},
	},
	plugins: [],
};

export default config;
