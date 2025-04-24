import { FaBuilding, FaCalendarAlt } from "react-icons/fa";

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
    title: "Engineer 2",
    company: "Apexon",
    location: "Ahmedabad, Gujarat",
    period: "Jan 2023 - August 2023",
    skills: "Java8, MySQL, SpringBoot Framework, microservice architecture, AWS",
    responsibilities: [
      "Ensured client relationships by engaging with them for production issues",
      "Led a team of 8 members in a demanding module",
      "Developed asynchronous architecture for patient sync data using Apache Kafka",
      "Integrated multiple vendors including Magento, Retail Unity, Loyaltics"
    ]
  },
  {
    title: "Engineer 1",
    company: "Apexon",
    location: "Ahmedabad, Gujarat",
    period: "August 2021 - Jan 2023",
    skills: "Java8, MySQL, SpringBoot Framework, microservice architecture, AWS, Azure",
    responsibilities: [
      "Worked on Loyalty based project developing REST APIs",
      "Developed Azure Functions for serverless architecture",
      "Participated in all stages of deployment",
      "Implemented MVC architecture with MySQL and MongoDB"
    ]
  },
  {
    title: "Splunk CloudOps",
    company: "Crest Data System",
    location: "Ahmedabad, Gujarat",
    period: "August 2021 - Jan 2023",
    skills: "Splunk, DevOps, Python, AWS, Linux",
    responsibilities: [
      "Automated development and testing of Splunk apps",
      "Troubleshot Splunk environment issues",
      "Developed Jenkins pipelines",
      "Created automation scripts in Python and Shell"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold mb-2 md:mb-0">{exp.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaBuilding className="w-4 h-4 mr-2" />
                  {exp.company}, {exp.location}
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Skills:</h4>
                  <p className="text-gray-600">{exp.skills}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};