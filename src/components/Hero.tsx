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
      {/* Background Banner with Refined Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#142240] blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#797F8C] blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200 blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-white/40"></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyIC44IDIgMnY4YzAgMS4yLS44IDItMiAycy0yLS44LTItMnYtOGMwLTEuMi44LTIgMi0yem0wIDEyYzEuMiAwIDIgLjggMiAydjZjMCAxLjItLjggMi0yIDJzLTItLjgtMi0ydi02YzAtMS4yLjgtMiAyLTJ6Ii8+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      {/* Floating Tech Icons with improved animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/4 animate-bounce-slow opacity-20">
          <HiCode className="w-16 h-16 text-[#142240]" />
        </div>
        <div className="absolute top-1/3 right-1/6 animate-bounce-slow opacity-20" style={{ animationDelay: "1.5s" }}>
          <SiSpringboot className="w-16 h-16 text-green-600" />
        </div>
        <div className="absolute bottom-24 left-3/4 animate-pulse opacity-20" style={{ animationDuration: "3s" }}>
          <HiCloud className="w-12 h-12 text-[#797F8C]" />
        </div>
        <div className="absolute bottom-1/3 left-1/6 animate-pulse opacity-20" style={{ animationDuration: "4s" }}>
          <TbBrandJavascript className="w-12 h-12 text-yellow-500" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center py-8">
          {/* Profile Image with Enhanced Animated Border */}
          <div className="relative w-36 h-36 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#142240] via-[#3D5176] to-[#797F8C] animate-spin-slow"></div>
            <div className="absolute inset-1 rounded-full bg-white"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden">
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

          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#142240] to-[#3D5176] bg-clip-text text-transparent" style={{ padding: "0.5rem" }}>
            Abhishek Vyas
          </h1>

          <div className="relative mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-[#797F8C]">
              Senior Software Engineer
            </h2>
            <div className="absolute -bottom-3 left-1/2 w-32 h-1 bg-gradient-to-r from-[#142240] to-[#3D5176] transform -translate-x-1/2 rounded-full"></div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              Hello! I am a <span className="font-semibold text-[#142240]">Senior Software Engineer </span> with over 3 years of hands-on experience in building
              <span className="font-semibold text-[#142240]"> Scalable Backend Systems</span> and
              <span className="font-semibold text-[#142240]"> REST APIs</span>. My expertise lies in using Spring Boot, Java, Kafka, and cloud platforms like Azure and AWS.
              I've worked with clients to solve production issues, led teams, and integrated systems in healthcare and loyalty-based projects.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {["Java", "Spring Boot", "Kafka", "Microservices", "Azure", "AWS", "React"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gradient-to-r from-[#142240]/10 to-[#3D5176]/10 text-[#142240] rounded-full text-sm font-medium hover:bg-[#142240]/20 transition-colors duration-300 cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-6 justify-center mb-20">
            <button
              onClick={openContactModal}
              className="inline-flex group transform transition-transform hover:scale-105 duration-300"
            >
              <Button
                className="bg-gradient-to-r from-[#142240] to-[#3D5176] hover:from-[#142240] hover:to-[#142240] text-white font-medium rounded-md px-8 py-6 gap-3 flex items-center justify-center shadow-lg shadow-[#142240]/20 transition-all duration-300 hover:shadow-[#142240]/30"
              >
                <LuMail className="w-6 h-6 group-hover:animate-bounce" />
                <span className="text-lg">Contact Me</span>
              </Button>
            </button>

            <div className="flex gap-4">
              {/* GitHub Icon - Enhanced */}
              <a
                href={process.env.NEXT_PUBLIC_GITHUB_LINK ?? '#'}
                aria-label="GitHub Profile"
                className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all">
                  <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                      fill="#142240"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </svg>
                </div>
              </a>

              {/* LinkedIn Icon - Enhanced */}
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN_LINK ?? '#'}
                aria-label="LinkedIn Profile"
                className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all">
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

          {/* Scroll Indicator - Fixed positioning to avoid overlap */}
          <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce" style={{ bottom: "1rem" }}>
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
