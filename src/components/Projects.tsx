import { useState } from 'react';
import { FaGithub, FaArrowRight, FaCode, FaJava, FaAws } from "react-icons/fa";
import {
  FiExternalLink
} from "react-icons/fi";
import { HiLightningBolt, HiCode, HiCloud } from "react-icons/hi";
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
  SiNodedotjs,
  SiMongodb,
  SiReact,
  SiFirebase, SiHeroku, SiFlutter
} from "react-icons/si";
import { Button } from "./ui/button";
import { ContactModal } from "./ContactModel";
import Image from 'next/image';

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
  "Azure": <HiCloud className="w-4 h-4 mr-1 text-[#0078D4]" />,
  "Node.js": <SiNodedotjs className="w-4 h-4 mr-1 text-[#339933]" />,
  "Express JS": <SiNodedotjs className="w-4 h-4 mr-1 text-[#000000]" />,
  "SQL": <SiPostgresql className="w-4 h-4 mr-1 text-[#336791]" />,
  "MongoDB": <SiMongodb className="w-4 h-4 mr-1 text-[#47A248]" />,
  "React": <SiReact className="w-4 h-4 mr-1 text-[#61DAFB]" />,
  "Firebase": <SiFirebase className="w-4 h-4 mr-1 text-[#FFCA28]" />,
  "Flutter": <SiFlutter className="w-4 h-4 mr-1 text-[#02569B]" />,
  "Heroku": <SiHeroku className="w-4 h-4 mr-1 text-[#430098]" />
};

// Category icons for tech stack
/* const techCategoryIcons = {
  "Backend": <FaServer className="w-5 h-5 mr-2 text-[#142240]" />,
  "Frontend": <GrReactjs className="w-5 h-5 mr-2 text-[#142240]" />,
  "Deployment": <SiDocker className="w-5 h-5 mr-2 text-[#142240]" />,
  "Mobile": <SiSwift className="w-5 h-5 mr-2 text-[#142240]" />,
  "ML/AI": <SiTensorflow className="w-5 h-5 mr-2 text-[#142240]" />,
  "Cloud": <HiCloud className="w-5 h-5 mr-2 text-[#142240]" />,
  "Other": <VscTools className="w-5 h-5 mr-2 text-[#142240]" />
};*/

interface Project {
  title: string;
  period: string;
  description: string;
  responsibilities: string[];
  techStack: {
    [key: string]: string[];
  };
  image: string; // URL for project image
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
      github: "https://github.com/abhishek08vyas/ExpenseTracker-Backend",
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
      "ML/AI": ["TensorFlow", "MediaPipe", "NumPy", "scikit-learn", "PostgreSQL"],
      "Mobile": ["iOS", "Swift"],
      "Backend": ["Python", "Flask"],
      "Cloud": ["AWS Lambda", "S3"]
    },
    image: "/images/ios_app_gesture_recognition.png",
    links: {
      github: "https://github.com/abhishek08vyas/gesture_recognition",
    }
  },
  {
    title: "Ehalo",
    period: "Jun 2021 - Aug 2023",
    description: "Ehalo is a free trip planner app. It allows you to create trips, events and checklists. You can also attach the checklist with your trips.",
    responsibilities: [
      "Led the Backend Team and Developed Rest APIs using ExpressJS, MVC architecture and MySQL.",
      "The features are available online and offline anywhere.",
      "Share your trips with family and friends to collaborate and have fun.",
    ],
    techStack: {
      "Backend": ["Node.js", "Express JS", "SQL"],
      "Frontend": ["Flutter"],
      "Cloud": ["Heroku"],
    },
    image: "/images/ehalo.jpeg",
    links: {
      // github: "https://github.com/abhishek08vyas/social-network",
      demo: "https://apps.apple.com/ca/app/ehalo/id1588979357"
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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Subtle background with light gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#142240]/10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#797F8C]/10 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Minimalist section header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#142240] via-[#142240] to-[#797F8C] bg-clip-text text-transparent">
            My Work
          </h2>
          <div className="flex items-center justify-center">
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#142240] to-[#797F8C] rounded-full"></div>
          </div>
        </div>

        {/* Featured Project - More minimal design */}
        <div className="mb-16 max-w-6xl mx-auto">
          {projects.filter(p => p.featured).map((project, index) => (
            <div key={`featured-${index}`} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left side - Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                    src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 hover:scale-102"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/80 backdrop-blur-sm text-[#142240] text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                      <HiLightningBolt className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500 text-sm">{project.period}</span>
                    <div className="flex space-x-3">
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white flex items-center justify-center text-gray-700 transition-colors"
                          aria-label="GitHub"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      )}
                      {project.links?.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-[#142240] w-9 h-9 rounded-full bg-gray-100 hover:bg-[#142240] hover:text-white flex items-center justify-center text-gray-700 transition-colors"
                          aria-label="Live Demo"
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                        
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {Object.entries(project.techStack).flatMap(([category, techs]) =>
                      techs.map((tech, idx) => (
                        <div
                          key={`${category}-${idx}`}
                          className="px-2.5 py-1 bg-gray-50 rounded-md text-xs font-medium border border-gray-100 flex items-center">
                          {getTechIcon(tech)}
                          {tech}
                        </div>
                      ))
                    ).slice(0, 6)}
                  </div>

                  <div className="space-y-1 mb-4">
                    {project.responsibilities.slice(0, 2).map((resp, idx) => (
                      <div key={idx} className="flex items-start text-gray-600 text-sm">
                        <div className="mr-2 mt-1 text-[#142240] text-xs">•</div>
                        <div>{resp}</div>
                      </div>
                    ))}
                  </div>

                  {project.links?.demo && (
                    <Button
                      variant="outline"
                      className="border-[#142240] text-[#142240] hover:bg-[#142240]/5 font-medium px-5 py-2 rounded-md transition-all text-sm">
                      Live Demo
                      <FaArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular Projects - Grid Layout with more minimal design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div key={`other-${index}`} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
              {/* Project Header */}
              <div className="relative h-48 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#142240]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-white/90 backdrop-blur-sm text-[#142240] text-xs font-medium px-2.5 py-1 rounded-md mb-2">
                    {project.period}
                  </span>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4">
                <p className="text-gray-600 mb-3 text-sm">{project.description}</p>

                {/* Updated tech stack section to show all techs */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {Object.entries(project.techStack).flatMap(([category, techs]) =>
                    techs.map((tech, idx) => (
                      <div
                        key={`${category}-${idx}`}
                        className="px-2 py-0.5 bg-gray-50 rounded-md text-xs font-medium border border-gray-100 flex items-center">
                        {getTechIcon(tech)}
                        {tech}
                      </div>
                    ))
                  ).slice(0, 5)}
                </div>

                <div className="flex justify-between items-center mt-2">
                  <div className="flex space-x-1">
                    {/* Smart display for remaining tech count with proper singular/plural */}
                    {Object.values(project.techStack).flat().length > 6 && (
                      <span className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
                        And {Object.values(project.techStack).flat().length - 5} More {Object.values(project.techStack).flat().length - 6 === 1 ? 'Technology' : 'Technologies'}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white flex items-center justify-center text-gray-700 transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub className="w-4.5 h-4.5" />
                      </a>
                    )}
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#142240] hover:text-white flex items-center justify-center text-gray-700 transition-colors"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink className="w-4.5 h-4.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button - Minimalist design */}
        <div className="flex justify-center mt-10">
          <a 
            href={`${process.env.NEXT_PUBLIC_GITHUB_LINK}?tab=repositories`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-[#142240] text-[#142240] hover:bg-[#142240]/5 font-medium px-5 py-2 rounded-md transition-all text-sm"
            >
              View All Projects
              <FaArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </a>
        </div>

        {/* Simplified Call to Action */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="bg-[#142240] rounded-lg p-6 shadow-md text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to bring your vision to life?
            </h3>

            <p className="text-gray-300 mb-4 max-w-lg mx-auto text-sm">
              I specialize in building scalable, high-performance applications with cutting-edge technologies.
              Let&apos;s collaborate on your next project.
            </p>

            <button
              onClick={openContactModal}
              className="group inline-flex items-center justify-center bg-white text-[#142240] font-medium px-5 py-2 rounded-md text-sm transition-all hover:bg-gray-50"
            >
              Start a Conversation
              <FaArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </section>
  );
};