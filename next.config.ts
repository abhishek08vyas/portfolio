import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/coming-soon",
				destination: "/",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
