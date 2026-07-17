"use client";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Skills } from "@/components/Skills";
import { FeaturedWork } from "@/components/FeaturedWork";
import { NowAndRecent } from "@/components/NowAndRecent";
import { OpenToWorkSection } from "@/components/OpenToWorkSection";
const queryClient = new QueryClient();

export default function Home() {
	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<Toaster />
				<Sonner />
				<div className="min-h-screen bg-white">
					<main>
						<Hero />
						<FeaturedWork />
						<NowAndRecent />
						<Skills />
						<Projects />
						<OpenToWorkSection />
					</main>
					<Footer />
				</div>
			</TooltipProvider>
		</QueryClientProvider>
	);
}
