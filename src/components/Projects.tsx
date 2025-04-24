import { FaGithub, FaCalendarAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Button } from "./ui/button";

interface Project {
  title: string;
  period: string;
  description: string;
  responsibilities: string[];
  techStack: {
    [key: string]: string[];
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
    }
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold mb-2 md:mb-0">{project.title}</h3>
                <div className="flex items-center text-gray-500 text-sm">
                                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                                    {project.period}
                                  </div>
              </div>
              
              <p className="text-gray-600 mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {project.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Tech Stack:</h4>
                <div className="space-y-3">
                  {Object.entries(project.techStack).map(([category, technologies]) => (
                    <div key={category}>
                      <span className="text-sm text-gray-500">{category}: </span>
                      <span className="text-gray-600">{technologies.join(", ")}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <FaGithub className="w-4 h-4" />
                  View Code
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <FiExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};