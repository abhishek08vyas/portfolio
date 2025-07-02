"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";

const queryClient = new QueryClient();

export default function Home() {
	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<Toaster />
				<Sonner />
				<div className="min-h-screen bg-white">
					<Header />
					<main>
						<Hero />
						<Skills />
						<Projects />
						<Experience />
					</main>
					<Footer />
				</div>
			</TooltipProvider>
		</QueryClientProvider>
	);
}
