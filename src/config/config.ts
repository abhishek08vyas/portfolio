import "dotenv/config";
import { z } from "zod";

// Schema validation for environment variables - industry standard as of 2025
const envSchema = z.object({
	NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
	PORT: z.coerce.number().positive().default(3000),
	REACT_APP_EMAILJS_USER_ID: z.string().min(5).default("Ps4x85xXNJZdeJZwF"),
	REACT_APP_EMAILJS_SERVICE_ID: z.string().min(5).default("service_73hagje"),
	REACT_APP_EMAILJS_TEMPLATE_ID: z.string().min(5).default("template_azkrh9n"),
	REACT_APP_GITHUB_LINK: z.string().min(5).default("github.com"),
	REACT_APP_LINKEDIN_LINK: z.string().min(5).default("linkedin.com"),
});

// Parse and validate environment variables
const env = envSchema.parse({
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT,
	REACT_APP_EMAILJS_USER_ID: process.env.REACT_APP_EMAILJS_USER_ID,
	REACT_APP_EMAILJS_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
	REACT_APP_EMAILJS_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
	REACT_APP_GITHUB_LINK: process.env.REACT_APP_GITHUB_LINK,
	REACT_APP_LINKEDIN_LINK: process.env.REACT_APP_LINKEDIN_LINK,
});

const config = {
	app: {
		port: env.PORT,
		nodeEnv: env.NODE_ENV,
		isDevelopment: env.NODE_ENV === "development",
		isProduction: env.NODE_ENV === "production",
		isTest: env.NODE_ENV === "test",
	},
	emailjs: {
		userId: env.REACT_APP_EMAILJS_USER_ID,
		serviceId: env.REACT_APP_EMAILJS_SERVICE_ID,
		templateId: env.REACT_APP_EMAILJS_TEMPLATE_ID,
	},
	link: {
		linkedinLink: env.REACT_APP_LINKEDIN_LINK,
		githubLink: env.REACT_APP_GITHUB_LINK,
	},
};

export default config;
