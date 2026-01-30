import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "All Projects | Abhishek Vyas",
	description: "Browse all projects with filter by technology — Java, React, Python, AWS, and more.",
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
