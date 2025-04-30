import { useState } from "react";
import { LuMail } from "react-icons/lu";
import { HiCode, HiCloud } from "react-icons/hi";
import { TbBrandJavascript } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";
import { Button } from "./ui/button";
import Image from "next/image";
import { ContactModal } from "./ContactModel";

export const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Banner with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#142240] blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#797F8C] blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200 blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/4 animate-bounce-slow opacity-20">
          <HiCode className="w-16 h-16 text-[#142240]" />
        </div>
        <div className="absolute top-1/3 right-1/6 animate-bounce-slow opacity-20">
          <SiSpringboot className="w-16 h-16 text-green-600" />
        </div>
        <div className="absolute bottom-24 left-3/4 animate-pulse opacity-20">
          <HiCloud className="w-12 h-12 text-[#797F8C]" />
        </div>
        <div className="absolute bottom-1/3 left-1/6 animate-pulse opacity-20">
          <TbBrandJavascript className="w-12 h-12 text-yellow-500" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center py-8">
          {/* Profile Image with Animated Border */}
          <div className="relative w-36 h-36 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#142240] to-[#797F8C] animate-spin-slow"></div>
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
          
          <h1 className="text-4xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#142240] to-[#797F8C] bg-clip-text text-transparent">
            Abhishek Vyas
          </h1>
          
          <div className="relative mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
              Java Full Stack Developer
            </h2>
            <div className="absolute -bottom-2 left-1/2 w-24 h-1 bg-[#142240] transform -translate-x-1/2 rounded-full"></div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8">
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              Hello! I am a <span className="font-semibold text-[#142240]">Java Full Stack Developer </span> with over 3 years of hands-on experience in building 
              <span className="font-semibold text-[#142240]"> Scalable Backend Systems</span> and 
              <span className="font-semibold text-[#142240]"> REST APIs</span>. My expertise lies in using Spring Boot, Java, Kafka, and cloud platforms like Azure and AWS. 
              I've worked with clients to solve production issues, led team, and integrated systems in healthcare and loyalty-based projects.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              {["Java", "Spring Boot", "Kafka", "Microservices", "Azure", "AWS", "React"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#142240]/10 text-[#142240] rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button 
              onClick={openContactModal}
              className="inline-flex group transform transition-transform hover:scale-105"
            >
              <Button 
                className="bg-[#142240] hover:bg-[#142240]/90 text-white font-medium rounded-md px-8 py-6 gap-3 flex items-center justify-center shadow-lg shadow-[#142240]/30 transition-all duration-300 hover:shadow-[#142240]/40"
              >
                <LuMail className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-lg">Contact Me</span>
              </Button>
            </button>
            
            <div className="flex gap-3">
              {/* GitHub Icon - Custom SVG */}
              <a href={process.env.NEXT_PUBLIC_GITHUB_LINK ?? '#'} aria-label="GitHub Profile" className="transform transition-transform hover:scale-105">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-300 hover:bg-gray-50 transition-colors">
                  <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                      fill="#333333"
                    />
                  </svg>
                </div>
              </a>
              
              {/* LinkedIn Icon - Custom SVG */}
              <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK ?? '#'} aria-label="LinkedIn Profile" className="transform transition-transform hover:scale-105">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-300 hover:bg-gray-50 transition-colors">
                  <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      fill="#0077B5"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          {/* Scroll Indicator - Moved to bottom of container with absolute positioning */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-[#142240] flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-[#142240] rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </section>
  );
};