const skills = {
  "Programming Languages": ["Java (8 & 11)", "Python", "Shell Scripting"],
  "Frameworks & Libraries": ["Spring Boot", "Spring MVC", "JPA", "Apache Kafka"],
  "Databases": ["MySQL", "MongoDB", "Redis"],
  "Cloud Platforms": ["Azure (Functions, Blob Storage, AKS)", "AWS"],
  "DevOps & Tools": ["Jenkins", "Git", "Docker", "Elastic Search"],
  "Architecture": ["Microservices", "Serverless", "Asynchronous systems"],
  "Web Technologies": ["REST APIs", "React"]
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white rounded-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};