import { useState, useEffect, useRef } from 'react';
import { FaBuilding, FaCalendarAlt, FaLaptopCode, FaDatabase, FaServer, FaJava, FaAws, FaBriefcase, FaArrowRight } from "react-icons/fa";
import { HiCode, HiCloud, HiLightningBolt } from "react-icons/hi";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import {
  SiSpringboot, SiDocker, SiPostgresql, SiJenkins, SiGit, SiRedis, SiMongodb,
  SiMysql, SiApachekafka, SiPython, SiElasticsearch,
  SiNextdotjs, SiTailwindcss, SiTensorflow, SiScikitlearn, SiMediapipe
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { BiNetworkChart } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";
import { AiOutlineApartment } from "react-icons/ai";
import { ContactModal } from './ContactModel'; // Import the ContactModal component

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  skills: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer 2",
    company: "Apexon",
    location: "Ahmedabad, Gujarat",
    period: "Jan 2023 - August 2023",
    skills: "Java11, MongoDB, Spring Boot, Azure, Microservices, Elastic Search, Apache Kafka, Redis",
    responsibilities: [
      "Ensured client relationships by engaging with them for production issues",
      "Led a team of 8 members in a demanding module",
      "Developed asynchronous architecture for patient sync data using Apache Kafka",
      "Integrated multiple vendors including Magento, Retail Unity, Loyaltics"
    ]
  },
  {
    title: "Software Engineer 1",
    company: "Apexon",
    location: "Ahmedabad, Gujarat",
    period: "August 2021 - Jan 2023",
    skills: "Java8, MySQL, Spring Boot, Microservices, AWS, Azure, Redis, Apache Kafka",
    responsibilities: [
      "Worked on Loyalty based project developing REST APIs",
      "Developed Azure Functions for serverless architecture",
      "Participated in all stages of deployment",
      "Implemented MVC architecture with MySQL and MongoDB"
    ]
  },
  {
    title: "Devops Engineer",
    company: "Crest Data System",
    location: "Ahmedabad, Gujarat",
    period: "August 2021 - Jan 2023",
    skills: "Splunk, DevOps, Python, AWS, Linux, Jenkins, Shell Scripting",
    responsibilities: [
      "Automated development and testing of Splunk apps",
      "Troubleshot Splunk environment issues",
      "Developed Jenkins pipelines",
      "Created automation scripts in Python and Shell"
    ]
  }
];

// Skill icons mapping with original brand colors
const skillIcons = {
  "Programming Languages": <HiCode className="w-5 h-5 text-gray-800" />,
  "Frameworks & Libraries": <SiSpringboot className="w-5 h-5 text-gray-800" />,
  "Databases": <FaDatabase className="w-5 h-5 text-gray-800" />,
  "Cloud Platforms": <HiCloud className="w-5 h-5 text-gray-800" />,
  "DevOps & Tools": <VscTools className="w-5 h-5 text-gray-800" />,
  "Architecture": <AiOutlineApartment className="w-5 h-5 text-gray-800" />,
  "Web Technologies": <TbBrandJavascript className="w-5 h-5 text-gray-800" />,
  "Applied Machine Learning": <SiTensorflow className="w-5 h-5 text-gray-800" />
};

// Specific skill icons with their original brand colors
const specificSkillIcons = {
  "Java": <FaJava className="w-4 h-4 mr-1 text-[#ED8B00]" />,
  "JavaScript": <TbBrandJavascript className="w-4 h-4 mr-1 text-[#F7DF1E]" />,
  "TypeScript": <TbBrandTypescript className="w-4 h-4 mr-1 text-[#3178C6]" />,
  "Python": <SiPython className="w-4 h-4 mr-1 text-[#3776AB]" />,
  "Shell": <HiCode className="w-4 h-4 mr-1 text-gray-800" />,
  "Spring Boot": <SiSpringboot className="w-4 h-4 mr-1 text-[#6DB33F]" />,
  "Spring MVC": <SiSpringboot className="w-4 h-4 mr-1 text-[#6DB33F]" />,
  "JPA": <FaDatabase className="w-4 h-4 mr-1 text-gray-800" />,
  "NextJS": <SiNextdotjs className="w-4 h-4 mr-1 text-[#000000]" />,
  "Tailwind CSS": <SiTailwindcss className="w-4 h-4 mr-1 text-[#38B2AC]" />,
  "Apache Kafka": <SiApachekafka className="w-4 h-4 mr-1 text-[#231F20]" />,
  "MySQL": <SiMysql className="w-4 h-4 mr-1 text-[#4479A1]" />,
  "MongoDB": <SiMongodb className="w-4 h-4 mr-1 text-[#47A248]" />,
  "PostgreSQL": <SiPostgresql className="w-4 h-4 mr-1 text-[#336791]" />,
  "Redis": <SiRedis className="w-4 h-4 mr-1 text-[#DC382D]" />,
  "Azure": <HiCloud className="w-4 h-4 mr-1 text-[#0078D4]" />,
  "AWS": <FaAws className="w-4 h-4 mr-1 text-[#FF9900]" />,
  "Jenkins": <SiJenkins className="w-4 h-4 mr-1 text-[#D24939]" />,
  "Git": <SiGit className="w-4 h-4 mr-1 text-[#F05032]" />,
  "Docker": <SiDocker className="w-4 h-4 mr-1 text-[#2496ED]" />,
  "Elastic Search": <SiElasticsearch className="w-4 h-4 mr-1 text-[#005571]" />,
  "Microservices": <BiNetworkChart className="w-4 h-4 mr-1 text-gray-800" />,
  "Serverless": <FaServer className="w-4 h-4 mr-1 text-gray-800" />,
  "Asynchronous": <BiNetworkChart className="w-4 h-4 mr-1 text-gray-800" />,
  "React": <GrReactjs className="w-4 h-4 mr-1 text-[#61DAFB]" />,
  "Linux": <FaServer className="w-4 h-4 mr-1 text-[#FCC624]" />,
  "Splunk": <FaDatabase className="w-4 h-4 mr-1 text-[#FF4500]" />,
  "DevOps": <VscTools className="w-4 h-4 mr-1 text-gray-800" />,
  "TensorFlow": <SiTensorflow className="w-4 h-4 mr-1 text-[#FF6F00]" />,
  "scikit-learn": <SiScikitlearn className="w-4 h-4 mr-1 text-[#F7931E]" />,
  "MediaPipe": <SiMediapipe className="w-4 h-4 mr-1 text-[#00A3E0]" />
};

const skills = {
  "Programming Languages": ["Java (8 & 11)", "JavaScript", "TypeScript", "Python", "Shell Scripting"],
  "Frameworks & Libraries": ["Spring Boot", "Spring MVC", "NextJS", "React", "Tailwind CSS", "JPA", "Apache Kafka"],
  "Databases": ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
  "Cloud Platforms": ["Azure (Functions, Blob Storage, AKS)", "AWS"],
  "DevOps & Tools": ["Jenkins", "Git", "Docker", "Elastic Search"],
  // "Architecture": ["Microservices", "Asynchronous systems", "Serverless"],
  "Applied Machine Learning": ["TensorFlow", "scikit-learn", "MediaPipe"]
};

export const SkillsAndExperience = () => {
  const [activeExp, setActiveExp] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Add state for ContactModal

  // Open and close modal functions
  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExp((prev) => (prev + 1) % experiences.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Find matching icon for a skill
  const getSkillIcon = (skillName: string) => {
    // Check for direct matches first
    for (const [key, icon] of Object.entries(specificSkillIcons)) {
      if (skillName.includes(key)) {
        return icon;
      }
    }
    // Return default icon if no matching icon
    return <HiCode className="w-4 h-4 mr-1 text-gray-800" />;
  };

  // Format skills string into an array of skill tags with icons
  const renderSkillsWithIcons = (skillsString: string) => {
    const skillsArray = skillsString.split(', ').map(skill => skill.trim());
    
    return (
      <div className="flex flex-wrap gap-2">
        {skillsArray.map((skill, idx) => (
          <span 
            key={idx} 
            className="px-2 py-1 bg-white text-gray-800 rounded-md text-xs font-medium border border-gray-200 shadow-sm flex items-center"
          >
            {getSkillIcon(skill)}
            {skill}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="skills-experience" className="relative py-16 overflow-hidden">
      {/* Background with gradient similar to hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#142240] blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#797F8C] blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#142240] to-[#797F8C] bg-clip-text text-transparent">
          Skills & Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Skills Section - Left Side */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 flex items-center justify-center">
              <FaLaptopCode className="w-6 h-6 mr-3 text-[#142240]" />
              <span>Technical Skills</span>
            </h3>
            
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="rounded-lg bg-gray-50 p-4 border border-gray-200">
                  <h4 className="text-lg font-medium mb-3 text-gray-800 flex items-center">
                    <span className="mr-2">
                      {skillIcons[category as keyof typeof skillIcons]}
                    </span>
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 bg-white text-gray-800 rounded-lg text-sm font-medium border border-gray-200 shadow-sm flex items-center"
                      >
                        {getSkillIcon(skill)}
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section - Right Side with Infinite Slider */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-gray-200 overflow-hidden">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 flex items-center justify-center">
              <FaBuilding className="w-6 h-6 mr-3 text-[#142240]" />
              <span>Work Experience</span>
            </h3>
            
            {/* Slider controls */}
            <div className="flex justify-center mb-6 gap-3">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExp(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeExp === index 
                      ? 'bg-[#142240] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View experience ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Slider container */}
            <div 
              ref={sliderRef}
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeExp * 100}%)` }}
            >
              <div className="flex">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="min-w-full px-2" // Added horizontal padding
                  >
                    {/* Added mb-6 for vertical spacing between cards */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 h-full shadow-sm mb-6">
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold mb-2 md:mb-0 text-gray-800">{exp.title}</h3>
                            <div className="flex items-center text-gray-600 text-sm bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200">
                              <FaCalendarAlt className="w-4 h-4 mr-2 text-gray-500" />
                              {exp.period}
                            </div>
                          </div>
                          <div className="flex items-center text-gray-700 mb-4">
                            <FaBuilding className="w-4 h-4 mr-2 text-gray-500" />
                            <span className="font-medium">{exp.company}</span>, {exp.location}
                          </div>
                          <div className="mb-5 p-3 bg-white rounded-lg border border-gray-200">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                              <FaLaptopCode className="w-4 h-4 mr-2" />
                              Skills:
                            </h4>
                            {renderSkillsWithIcons(exp.skills)}
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-200">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-gray-500 mr-2 mt-1">•</span>
                                <span className="text-gray-700">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Open to Work & Hire Me Section */}
            <div className="mt-8">
              <div className="bg-gradient-to-r from-[#142240] to-[#797F8C] rounded-lg p-0.5 shadow-lg transform transition-all hover:scale-[1.02] hover:shadow-xl">
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-[#142240] opacity-20 blur-xl"></div>
                  <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 rounded-full bg-[#797F8C] opacity-20 blur-xl"></div>
                  
                  {/* Status badge */}
                  <div className="inline-flex items-center bg-green-500/20 text-green-400 rounded-full py-1 px-3 mb-4 text-xs font-medium">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Open to Work
                  </div>
                  
                  {/* Main content */}
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-3">
                    Transforming complex challenges into elegant solutions.
                  </h4>
                  
                  <p className="text-gray-300 mb-5">
                    With expertise in Java & cloud technologies, I build scalable systems that deliver business value.
                  </p>
                  
                  {/* Hire Me button - Modified to open contact modal */}
                  <button 
                    onClick={openContactModal}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-[#142240] to-[#797F8C] text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all hover:from-[#142240] hover:to-[#797F8C] hover:shadow-xl group"
                  >
                    <FaBriefcase className="w-5 h-5 mr-2" />
                    Hire Me
                    <FaArrowRight className="w-4 h-4 ml-2 opacity-70 transform transition-transform group-hover:translate-x-1" />
                  </button>
                  
                  {/* Lightning bolt decorative element */}
                  <div className="absolute top-6 right-6 text-yellow-400 opacity-80">
                    <HiLightningBolt className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal component */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </section>
  );
};