// Hero.tsx
import { LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiCode, HiCloud } from "react-icons/hi";
import { TbBrandJavascript } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";
import { Button } from "./ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Banner with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-300 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-indigo-300 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200 blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/4 animate-bounce-slow opacity-20">
          <HiCode className="w-16 h-16 text-blue-600" />
        </div>
        <div className="absolute top-1/3 right-1/6 animate-bounce-slow opacity-20">
          <SiSpringboot className="w-16 h-16 text-green-600" />
        </div>
        <div className="absolute bottom-24 left-3/4 animate-pulse opacity-20">
          <HiCloud className="w-12 h-12 text-sky-500" />
        </div>
        <div className="absolute bottom-1/3 left-1/6 animate-pulse opacity-20">
          <TbBrandJavascript className="w-12 h-12 text-yellow-500" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Image with Animated Border */}
          <div className="relative w-36 h-36 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-spin-slow"></div>
            <div className="absolute inset-1 rounded-full bg-white"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden">
              {/* Placeholder image using Next.js Image component */}
              <Image 
                src="/images/profile_photo.png"
                alt="Abhishek Vyas Avatar" 
                width={144} 
                height={144} 
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Abhishek Vyas
          </h1>
          
          <div className="relative mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
              Java Full Stack Developer
            </h2>
            <div className="absolute -bottom-2 left-1/2 w-24 h-1 bg-blue-500 transform -translate-x-1/2 rounded-full"></div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8">
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              Hello! I am a <span className="font-semibold text-blue-600">Java Full Stack Developer </span> with over 3 years of hands-on experience in building 
              <span className="font-semibold text-blue-600"> scalable backend systems</span> and 
              <span className="font-semibold text-blue-600"> REST APIs</span>. My expertise lies in using Spring Boot, Java, Kafka, and cloud platforms like Azure and AWS. 
              I've worked with clients to solve production issues, led modules, and integrated systems in healthcare and loyalty-based projects.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              {["Java", "Spring Boot", "Kafka", "Microservices", "Azure", "AWS", "React"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="inline-flex group transform transition-transform hover:scale-105">
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md px-8 py-6 gap-3 flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-600/40"
              >
                <LuMail className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-lg">Contact Me</span>
              </Button>
            </a>
            
            <div className="flex gap-3">
              <a href="#" aria-label="GitHub Profile" className="transform transition-transform hover:scale-105">
                <Button variant="outline" className="gap-2 bg-white/80 hover:bg-white border-gray-300 shadow-md h-14 w-14 rounded-full p-0 flex items-center justify-center">
                  <FaGithub className="w-6 h-6 text-gray-700" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              
              <a href="#" aria-label="LinkedIn Profile" className="transform transition-transform hover:scale-105">
                <Button variant="outline" className="gap-2 bg-white/80 hover:bg-white border-gray-300 shadow-md h-14 w-14 rounded-full p-0 flex items-center justify-center">
                  <FaLinkedin className="w-6 h-6 text-blue-700" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-blue-500 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-blue-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};