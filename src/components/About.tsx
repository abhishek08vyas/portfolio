export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-6 leading-relaxed">
            I am a Java Full Stack Developer with over 3 years of hands-on experience in building scalable backend systems and REST APIs. My expertise lies in using Spring Boot, Java, Kafka, and cloud platforms like Azure and AWS to create robust and efficient solutions.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Throughout my career, I've worked closely with clients to solve production issues, lead modules, and integrate multiple systems in healthcare and loyalty-based projects. I have a strong understanding of microservice architecture and have developed serverless functions using Azure Functions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            My background as an SRE has given me valuable experience with Splunk, Jenkins, and scripting (Python, Shell) to support cloud infrastructure and CI/CD pipelines. I'm passionate about solving real-world problems with clean code and am always eager to learn new technologies.
          </p>
        </div>
      </div>
    </section>
  );
};