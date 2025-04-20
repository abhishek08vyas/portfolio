import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gray-200 overflow-hidden">
            {/* Placeholder for profile image */}
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center text-primary/40">
              AV
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Abhishek Vyas</h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">Java Full Stack Developer</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Building scalable backend systems and REST APIs with Spring Boot, Java, and cloud technologies.
            Experienced in microservices architecture and serverless solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="default" className="gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
            <Button variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="outline" className="gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};