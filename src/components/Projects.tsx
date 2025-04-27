import { useState, useEffect } from 'react';
import { FaGithub, FaArrowRight, FaCode, FaLaptopCode, FaJava, FaAws, FaServer } from "react-icons/fa";
import {
  FiExternalLink
} from "react-icons/fi";
import {
  HiLightningBolt,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiCode,
  HiCloud
} from "react-icons/hi";
import {
  SiSpringboot,
  SiDocker,
  SiPython,
  SiSwift,
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiAmazons3,
  SiPostgresql,
  SiJunit5,
  SiSwagger,
  SiTensorflow,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { VscTools } from "react-icons/vsc";
import { AiOutlineApartment } from "react-icons/ai";
import { Button } from "./ui/button";
import { ContactModal } from "./ContactModel";

// Specific tech stack icons with their original brand colors
const techStackIcons = {
  "Java 21": <FaJava className="w-4 h-4 mr-1 text-[#ED8B00]" />,
  "Java 8": <FaJava className="w-4 h-4 mr-1 text-[#ED8B00]" />,
  "Spring Boot 3.2": <SiSpringboot className="w-4 h-4 mr-1 text-[#6DB33F]" />,
  "PostgreSQL": <SiPostgresql className="w-4 h-4 mr-1 text-[#336791]" />,
  "Docker": <SiDocker className="w-4 h-4 mr-1 text-[#2496ED]" />,
  "Amazon EC2": <FaAws className="w-4 h-4 mr-1 text-[#FF9900]" />,
  "NextJS": <SiNextdotjs className="w-4 h-4 mr-1 text-[#000000]" />,
  "Tailwind CSS": <SiTailwindcss className="w-4 h-4 mr-1 text-[#38B2AC]" />,
  "Swagger API docs": <SiSwagger className="w-4 h-4 mr-1 text-[#85EA2D]" />,
  "JUnit4": <SiJunit5 className="w-4 h-4 mr-1 text-[#25A162]" />,
  "TensorFlow": <SiTensorflow className="w-4 h-4 mr-1 text-[#FF6F00]" />,
  "MediaPipe": <FaCode className="w-4 h-4 mr-1 text-gray-800" />,
  "NumPy": <SiPython className="w-4 h-4 mr-1 text-[#013243]" />,
  "scikit-learn": <SiPython className="w-4 h-4 mr-1 text-[#F7931E]" />,
  "iOS": <SiSwift className="w-4 h-4 mr-1 text-[#F05138]" />,
  "Swift": <SiSwift className="w-4 h-4 mr-1 text-[#F05138]" />,
  "Python": <SiPython className="w-4 h-4 mr-1 text-[#3776AB]" />,
  "Flask": <SiFlask className="w-4 h-4 mr-1 text-[#000000]" />,
  "AWS Lambda": <FaAws className="w-4 h-4 mr-1 text-[#FF9900]" />,
  "S3": <SiAmazons3 className="w-4 h-4 mr-1 text-[#569A31]" />,
  "AWS": <FaAws className="w-4 h-4 mr-1 text-[#FF9900]" />,
  "Azure": <HiCloud className="w-4 h-4 mr-1 text-[#0078D4]" />
};

// Category icons for tech stack
const techCategoryIcons = {
  "Backend": <FaServer className="w-5 h-5 mr-2 text-blue-600" />,
  "Frontend": <GrReactjs className="w-5 h-5 mr-2 text-blue-500" />,
  "Deployment": <SiDocker className="w-5 h-5 mr-2 text-blue-600" />,
  "Mobile": <SiSwift className="w-5 h-5 mr-2 text-blue-600" />,
  "ML/AI": <SiTensorflow className="w-5 h-5 mr-2 text-blue-600" />,
  "Cloud": <HiCloud className="w-5 h-5 mr-2 text-blue-600" />,
  "Other": <VscTools className="w-5 h-5 mr-2 text-blue-600" />
};

interface Project {
  title: string;
  period: string;
  description: string;
  responsibilities: string[];
  techStack: {
    [key: string]: string[];
  };
  image?: string; // URL for project image
  featured?: boolean;
  links?: {
    github?: string;
    demo?: string;
  };
}

const projects: Project[] = [
  {
    title: "Expense Tracker Web App",
    period: "Jan 2025 - April 2025",
    description: "A comprehensive financial management application helping users track, categorize, and analyze financial transactions.",
    responsibilities: [
      "Designed and implemented backend architecture using Spring Boot 3.2 and Java 21",
      "Established secure RESTful API endpoints with JWT authentication",
      "Containerized the application using Docker for consistent deployment",
      "Architected PostgreSQL database schema for financial tracking",
      "Collaborated with frontend team for integration using NextJS"
    ],
    techStack: {
      "Backend": ["Java 21", "Spring Boot 3.2", "PostgreSQL"],
      "Deployment": ["Docker", "Amazon EC2"],
      "Frontend": ["NextJS", "Tailwind CSS"],
      "Other": ["Swagger API docs", "JUnit4"]
    },
    image: "/images/expense_tracker.jpg",
    featured: true,
    links: {
      // github: "https://github.com/abhishek08vyas/ExpenseTracker-Backend",
      demo: "https://expense-tracker-mun.vercel.app/"
    }
  },
  {
    title: "iOS App for Real-Time Gesture Recognition",
    period: "May 2024 - Dec 2024",
    description: "A gesture detection model for iOS that offers real-time hand posture analysis using MediaPipe trained on 40 classes combining ASL and gestures.",
    responsibilities: [
      "Built preprocessing pipeline extracting hand landmarks via MediaPipe",
      "Developed neural network with Conv2D layers, MaxPooling, and Dense layers",
      "Deployed model on both server and edge devices",
      "Implemented secure video processing and privacy compliance"
    ],
    techStack: {
      "ML/AI": ["TensorFlow", "MediaPipe", "NumPy", "scikit-learn"],
      "Mobile": ["iOS", "Swift"],
      "Backend": ["Python", "Flask"],
      "Cloud": ["AWS Lambda", "S3"]
    },
    image: "/images/ios_app_gesture_recognition.png",
    links: {
      github: "https://github.com/abhishek08vyas/gesture_recognition",
    }
  }
];

// Helper function to get icon for a technology
const getTechIcon = (tech: string) => {
  if (techStackIcons[tech as keyof typeof techStackIcons]) {
    return techStackIcons[tech as keyof typeof techStackIcons];
  }
  return <HiCode className="w-4 h-4 mr-1 text-gray-800" />;
};

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const featuredProject = projects.find(p => p.featured) || projects[0];
  
  const goToNextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveProject((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const goToPrevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextProject();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[activeProject];

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Enhanced background with more vibrant gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-400 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-indigo-400 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/2 w-64 h-64 -translate-x-1/2 rounded-full bg-purple-300 blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Featured Project Spotlight */}
        <div className="mb-24">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
            <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">Featured Project</span>
            <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
          </div>
          
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            My Work
          </h2>
          
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-1 rounded-2xl shadow-xl max-w-6xl mx-auto transform hover:scale-[1.01] transition-all duration-500">
            <div className="bg-white rounded-2xl p-6 md:p-8 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full py-1 px-3 mb-4 text-sm font-medium">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {featuredProject.period}
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">{featuredProject.title}</h3>
                  
                  <p className="text-gray-700 mb-6 text-lg">{featuredProject.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                      <FaCode className="w-5 h-5 mr-2 text-blue-600" />
                      Key Technologies
                    </h4>
                    
                    {/* Updated Tech Stack Rendering for Featured Project */}
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(featuredProject.techStack).flatMap(([category, techs]) => 
                        techs.map((tech, idx) => (
                          <div
                            key={`${category}-${idx}`}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-md text-sm font-medium shadow-sm flex items-center"
                          >
                            {/* Explicitly render the icons */}
                            {tech === "Java 21" && <FaJava className="w-4 h-4 mr-1 text-white" />}
                            {tech === "Spring Boot 3.2" && <SiSpringboot className="w-4 h-4 mr-1 text-white" />}
                            {tech === "PostgreSQL" && <SiPostgresql className="w-4 h-4 mr-1 text-white" />}
                            {tech === "Docker" && <SiDocker className="w-4 h-4 mr-1 text-white" />}
                            {tech === "Amazon EC2" && <FaAws className="w-4 h-4 mr-1 text-white" />}
                            {tech === "NextJS" && <SiNextdotjs className="w-4 h-4 mr-1 text-white" />}
                            {tech === "Tailwind CSS" && <SiTailwindcss className="w-4 h-4 mr-1 text-white" />}
                            {tech === "Swagger API docs" && <SiSwagger className="w-4 h-4 mr-1 text-white" />}
                            {tech === "JUnit4" && <SiJunit5 className="w-4 h-4 mr-1 text-white" />}
                            {!["Java 21", "Spring Boot 3.2", "PostgreSQL", "Docker", "Amazon EC2", "NextJS", "Tailwind CSS", "Swagger API docs", "JUnit4"].includes(tech) && 
                              <HiCode className="w-4 h-4 mr-1 text-white" />
                            }
                            {tech}
                          </div>
                        ))
                      ).slice(0, 8)}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {featuredProject.links?.github && (
                      <Button 
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg px-6 py-3 gap-2 shadow-lg shadow-blue-500/30 transition-all hover:shadow-indigo-500/40 text-md"
                        onClick={() => window.open(featuredProject.links?.github, '_blank')}
                      >
                        <FaGithub className="w-5 h-5" />
                        View Code
                      </Button>
                    )}
                    
                    {featuredProject.links?.demo && (
                      <Button 
                        variant="outline"
                        className="bg-white hover:bg-gray-50 border-gray-200 text-gray-800 font-medium rounded-lg px-6 py-3 gap-2 shadow-sm transition-all text-md"
                        onClick={() => window.open(featuredProject.links?.demo, '_blank')}
                      >
                        <FiExternalLink className="w-5 h-5" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl blur-xl transform -translate-y-4 translate-x-4"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white">
                    <img 
                      src={featuredProject.image} 
                      alt={featuredProject.title} 
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-4">
                      <div className="inline-flex items-center bg-white/90 backdrop-blur-sm text-gray-800 rounded-full py-1 px-4 text-sm font-medium">
                        Featured Project
                        <HiLightningBolt className="w-4 h-4 ml-1 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Carousel */}
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-800">
              More Projects
            </h3>
            
            <div className="flex gap-3">
              <button
                onClick={goToPrevProject}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-blue-50 transition-all"
                disabled={isAnimating}
              >
                <HiOutlineChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNextProject}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-blue-50 transition-all"
                disabled={isAnimating}
              >
                <HiOutlineChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Slider dots */}
          <div className="flex justify-center mb-8 gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === index 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View project ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Project showcase with animation */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Project Image Side */}
              <div className="relative h-64 md:h-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 transform"
                  style={{ 
                    backgroundImage: `url(${currentProject.image})`,
                    opacity: isAnimating ? 0.5 : 1,
                    transform: isAnimating ? 'scale(1.05)' : 'scale(1)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 mix-blend-multiply"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-8 bg-blue-400 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-100">{currentProject.period}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-md">
                      {currentProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {Object.values(currentProject.techStack).flat().slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md text-xs font-medium flex items-center"
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Details Side */}
              <div className="p-6 md:p-8">
                <p className="text-gray-700 mb-6">{currentProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <FaLaptopCode className="w-5 h-5 mr-2 text-blue-600" />
                    Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {currentProject.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technology Categories Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <AiOutlineApartment className="w-5 h-5 mr-2 text-blue-600" />
                    Tech Stack
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(currentProject.techStack).map(([category, technologies]) => (
                      <div key={category} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <h5 className="text-sm font-medium mb-2 text-gray-800 flex items-center">
                          {techCategoryIcons[category as keyof typeof techCategoryIcons] || 
                           <VscTools className="w-5 h-5 mr-2 text-blue-600" />}
                          {category}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-white text-gray-800 rounded-md text-xs font-medium border border-gray-200 shadow-sm flex items-center"
                            >
                              {getTechIcon(tech)}
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Only render buttons if links exist */}
                {(currentProject.links?.github || currentProject.links?.demo) && (
                  <div className="flex gap-4">
                    {currentProject.links?.github && (
                      <Button 
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg px-5 py-2 gap-2 shadow-md transition-all"
                        onClick={() => window.open(currentProject.links?.github, '_blank')}
                      >
                        <FaGithub className="w-5 h-5" />
                        View Code
                      </Button>
                    )}
                    
                    {currentProject.links?.demo && (
                      <Button 
                        variant="outline"
                        className="bg-white hover:bg-gray-50 border-gray-200 text-gray-800 font-medium rounded-lg px-5 py-2 gap-2 shadow-sm transition-all"
                        onClick={() => window.open(currentProject.links?.demo, '_blank')}
                      >
                        <FiExternalLink className="w-5 h-5" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Animated project count indicator */}
          <div className="flex justify-center mt-8 items-center">
            <span className="text-2xl font-bold text-blue-600 mr-2">{activeProject + 1}</span>
            <span className="text-gray-500 text-lg">/</span>
            <span className="text-gray-500 text-lg ml-2">{projects.length}</span>
          </div>
        </div>
        
        {/* Enhanced Call to Action */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-0.5 shadow-2xl transform transition-all hover:scale-[1.01] hover:shadow-3xl">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-10 overflow-hidden">
              {/* Enhanced decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
              <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-indigo-400 opacity-20 animate-pulse blur-2xl"></div>
              
              <div className="relative flex flex-col items-center text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight max-w-2xl">
                  Ready to bring your vision to life?
                </h3>
                
                <p className="text-gray-300 mb-8 max-w-2xl text-lg">
                  I specialize in building scalable, high-performance applications with cutting-edge technologies. 
                  Let's collaborate on your next project and create something exceptional together.
                </p>
                
                <button 
                  onClick={openContactModal}
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-medium px-8 py-4 rounded-lg shadow-xl transition-all hover:shadow-2xl hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-lg"
                >
                  Start a Conversation
                  <FaArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute top-8 right-8 text-yellow-400 opacity-80">
                <HiLightningBolt className="w-8 h-8" />
              </div>
              <div className="absolute bottom-8 left-8 text-blue-400 opacity-80">
                <HiLightningBolt className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </section>
  );
};