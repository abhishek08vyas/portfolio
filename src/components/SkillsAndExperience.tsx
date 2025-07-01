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
import { ContactModal } from './ContactModel';
import { colors, commonStyles, responsive } from '../lib/theme-utils';

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

// Skill categories with their respective icons
const skillIcons = {
  "Programming Languages": <HiCode className="w-5 h-5 text-gray-800" />,
  "Frameworks & Libraries": <SiSpringboot className="w-5 h-5 text-gray-800" />,
  "Databases": <FaDatabase className="w-5 h-5 text-gray-800" />,
  "Cloud Platforms": <HiCloud className="w-5 h-5 text-gray-800" />,
  "DevOps & Tools": <VscTools className="w-5 h-5 text-gray-800" />,
  "Applied Machine Learning": <SiTensorflow className="w-5 h-5 text-gray-800" />
};

// Specific skill icons with their original brand colors
const specificSkillIcons = {
  "Java": <FaJava className="w-4 h-4 mr-1" style={{ color: colors.tech.java }} />,
  "JavaScript": <TbBrandJavascript className="w-4 h-4 mr-1" style={{ color: colors.tech.javascript }} />,
  "TypeScript": <TbBrandTypescript className="w-4 h-4 mr-1" style={{ color: colors.tech.typescript }} />,
  "Python": <SiPython className="w-4 h-4 mr-1" style={{ color: colors.tech.python }} />,
  "Shell": <HiCode className="w-4 h-4 mr-1 text-gray-800" />,
  "Spring Boot": <SiSpringboot className="w-4 h-4 mr-1" style={{ color: colors.tech.spring }} />,
  "Spring MVC": <SiSpringboot className="w-4 h-4 mr-1" style={{ color: colors.tech.spring }} />,
  "JPA": <FaDatabase className="w-4 h-4 mr-1 text-gray-800" />,
  "NextJS": <SiNextdotjs className="w-4 h-4 mr-1" style={{ color: "#000000" }} />,
  "Tailwind CSS": <SiTailwindcss className="w-4 h-4 mr-1" style={{ color: colors.tech.tailwind }} />,
  "Apache Kafka": <SiApachekafka className="w-4 h-4 mr-1" style={{ color: colors.tech.kafka }} />,
  "MySQL": <SiMysql className="w-4 h-4 mr-1" style={{ color: colors.tech.mysql }} />,
  "MongoDB": <SiMongodb className="w-4 h-4 mr-1" style={{ color: colors.tech.mongodb }} />,
  "PostgreSQL": <SiPostgresql className="w-4 h-4 mr-1" style={{ color: colors.tech.postgresql }} />,
  "Redis": <SiRedis className="w-4 h-4 mr-1" style={{ color: colors.tech.redis }} />,
  "Azure": <HiCloud className="w-4 h-4 mr-1" style={{ color: colors.tech.azure }} />,
  "AWS": <FaAws className="w-4 h-4 mr-1" style={{ color: colors.tech.aws }} />,
  "Jenkins": <SiJenkins className="w-4 h-4 mr-1" style={{ color: colors.tech.jenkins }} />,
  "Git": <SiGit className="w-4 h-4 mr-1" style={{ color: colors.tech.git }} />,
  "Docker": <SiDocker className="w-4 h-4 mr-1" style={{ color: colors.tech.docker }} />,
  "Elastic Search": <SiElasticsearch className="w-4 h-4 mr-1" style={{ color: colors.tech.elasticsearch }} />,
  "Microservices": <BiNetworkChart className="w-4 h-4 mr-1 text-gray-800" />,
  "Serverless": <FaServer className="w-4 h-4 mr-1 text-gray-800" />,
  "Asynchronous": <BiNetworkChart className="w-4 h-4 mr-1 text-gray-800" />,
  "React": <GrReactjs className="w-4 h-4 mr-1" style={{ color: colors.tech.react }} />,
  "Linux": <FaServer className="w-4 h-4 mr-1" style={{ color: "#FCC624" }} />,
  "Splunk": <FaDatabase className="w-4 h-4 mr-1" style={{ color: colors.tech.splunk }} />,
  "DevOps": <VscTools className="w-4 h-4 mr-1 text-gray-800" />,
  "TensorFlow": <SiTensorflow className="w-4 h-4 mr-1" style={{ color: colors.tech.tensorflow }} />,
  "scikit-learn": <SiScikitlearn className="w-4 h-4 mr-1" style={{ color: colors.tech.scikitlearn }} />,
  "MediaPipe": <SiMediapipe className="w-4 h-4 mr-1" style={{ color: colors.tech.mediapipe }} />
};

// Simplified skill lists for a cleaner presentation
const skills = {
  "Programming Languages": ["Java (8 & 11)", "JavaScript", "TypeScript", "Python", "Shell Scripting"],
  "Frameworks & Libraries": ["Spring Boot", "Spring MVC", "NextJS", "React", "Tailwind CSS", "JPA", "Apache Kafka"],
  "Databases": ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
  "Cloud Platforms": ["Azure (Functions, Blob Storage, AKS)", "AWS"],
  "DevOps & Tools": ["Jenkins", "Git", "Docker", "Elastic Search"],
  "Applied Machine Learning": ["TensorFlow", "scikit-learn", "MediaPipe"]
};

export const SkillsAndExperience = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [activeExp, setActiveExp] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Open and close modal functions
  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  // Automatic slider for experiences
  useEffect(() => {
    if (activeTab === 'experience') {
      const interval = setInterval(() => {
        setActiveExp((prev) => (prev + 1) % experiences.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [activeTab]);

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
            className="px-2 py-1 bg-white rounded-md text-xs font-medium border shadow-sm flex items-center hover:shadow-md transition-shadow"
            style={{
              color: "#1e293b",
              borderColor: "#e2e8f0",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            }}
          >
            {getSkillIcon(skill)}
            {skill}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="skills-experience" className="relative py-16 overflow-hidden" style={{ background: "#f8fafc" }}>
      {/* Background with gradient */}
      <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom right, #f1f5f9, #ffffff, #f8fafc)` }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: colors.brand.dark }}></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: colors.brand.light }}></div>
        </div>
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}></div>
      </div>

      <div className={responsive.container + " relative z-10"}>
        <h2 className="text-4xl font-bold text-center mb-8" style={{
          background: `linear-gradient(to right, ${colors.brand.dark}, ${colors.brand.light})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Skills & Experience
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className={commonStyles.tab.container}>
            <button
              onClick={() => setActiveTab('skills')}
              className={`${commonStyles.tab.button} ${
                activeTab === 'skills'
                  ? commonStyles.tab.active
                  : commonStyles.tab.inactive
              }`}
            >
              <FaLaptopCode className="w-5 h-5 mr-2" />
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`${commonStyles.tab.button} ${
                activeTab === 'experience'
                  ? commonStyles.tab.active
                  : commonStyles.tab.inactive
              }`}
            >
              <FaBuilding className="w-5 h-5 mr-2" />
              Work Experience
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Skills Content */}
          <div className={`${activeTab === 'skills' ? 'block' : 'hidden'} ${commonStyles.card.base} ${commonStyles.card.hover} p-8`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="rounded-lg p-4 border transition-all hover:shadow-md"
                  style={{
                    backgroundColor: "#f1f5f9",
                    borderColor: "#e2e8f0"
                  }}
                >
                  <h4 className="text-lg font-medium mb-3 flex items-center" style={{ color: "#1e293b" }}>
                    <span className="mr-2">
                      {skillIcons[category as keyof typeof skillIcons]}
                    </span>
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 rounded-lg text-sm font-medium border shadow-sm flex items-center hover:shadow-md transition-all"
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#1e293b",
                          borderColor: "#e2e8f0",
                          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
                        }}
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

          {/* Experience Content */}
          <div className={`${activeTab === 'experience' ? 'block' : 'hidden'} ${commonStyles.card.base} ${commonStyles.card.hover} p-8`}>
            {/* Slider controls */}
            <div className="flex justify-center mb-6 gap-3">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExp(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    activeExp === index
                      ? 'scale-125'
                      : 'hover:bg-gray-400'
                  }`}
                  style={{
                    backgroundColor: activeExp === index ? colors.brand.dark : "#cbd5e0"
                  }}
                  aria-label={`View experience ${index + 1}`}
                />
              ))}
            </div>

            {/* Slider container */}
            <div
              ref={sliderRef}
              className="transition-all duration-500 ease-in-out overflow-hidden"
            >
              <div
                className="flex"
                style={{ transform: `translateX(-${activeExp * 100}%)` }}
              >
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="min-w-full px-2"
                  >
                    <div className={commonStyles.experienceCard.base}>
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <div className={commonStyles.experienceCard.header}>
                            <h3 className={commonStyles.experienceCard.title}>{exp.title}</h3>
                            <div className={commonStyles.experienceCard.period}>
                              <FaCalendarAlt className="w-4 h-4 mr-2" style={{ color: "#64748b" }} />
                              {exp.period}
                            </div>
                          </div>
                          <div className={commonStyles.experienceCard.company}>
                            <FaBuilding className="w-4 h-4 mr-2" style={{ color: "#64748b" }} />
                            <span className="font-medium" style={{ color: "#1e293b" }}>{exp.company}</span>, {exp.location}
                          </div>
                          <div className={commonStyles.experienceCard.skillsSection}>
                            <h4 className="text-sm font-semibold mb-2 flex items-center" style={{ color: "#1e293b" }}>
                              <FaLaptopCode className="w-4 h-4 mr-2" />
                              Skills:
                            </h4>
                            {renderSkillsWithIcons(exp.skills)}
                          </div>
                        </div>
                        <div className={commonStyles.experienceCard.responsibilitiesSection}>
                          <h4 className="text-sm font-semibold mb-2" style={{ color: "#1e293b" }}>Key Responsibilities:</h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="mr-2 mt-1" style={{ color: "#64748b" }}>•</span>
                                <span style={{ color: "#1e293b" }}>{resp}</span>
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
          </div>

          {/* Open to Work & Hire Me Section - Always visible */}
          <div className="mt-8">
            <div className={commonStyles.openToWork.container}>
              <div className={commonStyles.openToWork.content}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full blur-xl" style={{ backgroundColor: colors.brand.dark, opacity: 0.2 }}></div>
                <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 rounded-full blur-xl" style={{ backgroundColor: colors.brand.light, opacity: 0.2 }}></div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-6 md:mb-0 md:mr-6">
                    {/* Status badge */}
                    <div className={commonStyles.openToWork.badge}>
                      <span className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{ backgroundColor: colors.semantic.success }}></span>
                      Open to Work
                    </div>

                    {/* Main content */}
                    <h4 className={commonStyles.openToWork.title}>
                      Transforming complex challenges into elegant solutions
                    </h4>

                    <p className={commonStyles.openToWork.description}>
                      With expertise in Java & cloud technologies, I build scalable systems that deliver business value.
                    </p>
                  </div>

                  {/* Hire Me button - Modified to open contact modal */}
                  <button
                    onClick={openContactModal}
                    className={commonStyles.openToWork.button}
                  >
                    <FaBriefcase className="w-5 h-5 mr-2" />
                    Hire Me
                    <FaArrowRight className="w-4 h-4 ml-2 opacity-70 transform transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Lightning bolt decorative element */}
                <div className="absolute top-6 right-6 opacity-80" style={{ color: colors.semantic.warning }}>
                  <HiLightningBolt className="w-6 h-6" />
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
