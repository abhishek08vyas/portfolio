import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SkillsAndExperience } from "@/components/SkillsAndExperience";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SkillsAndExperience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;