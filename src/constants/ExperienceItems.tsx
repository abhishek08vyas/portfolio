export interface ExperienceItem {
	title: string;
	company: string;
	location: string;
	period: string;
	skills: string;
	responsibilities: string[];
	/** Key = label text, value = display value. e.g. { "API Performance": "<90ms", "Users Served": "8K+ Daily" } */
	metrics?: Record<string, string>;
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
	{
		title: "Software Engineer 2",
		company: "Apexon",
		location: "Ahmedabad, India",
		period: "Jan 2023 - Aug 2023",
		skills: "TypeScript, ReactJs, NextJs, Redux, Saga, Zustand, Tailwind CSS, MongoDB, Azure, Apache Kafka, Redis, Elastic Search, JavaScript, Java11, MySQL, Microservices, Spring Boot",
		responsibilities: ["Improved performance of high-traffic REST APIs by implementing asynchronous Azure functions and optimizing Java workflows, resulting in a 10% increase in system throughput.", "Built responsive frontend components using Next.js and integrated RESTful services for seamless user experiences.", "Implemented state management solutions with Redux and Zustand to handle complex data flows, reducing application errors by 40% and improving scalability.", "Implemented Azure Monitor logging and alerting to track application health and support faster troubleshooting in production.", "Contributed to release management and production deployments, supporting multiple rollout strategies including Blue-Green and Canary deployments to ensure smooth environment promotions and minimal user impact.", "Mentored and upskilled junior engineers while directing architectural decisions, resulting in a 10% reduction in technical debt and significantly improved system performance."],
		metrics: {
			"API Performance": "<90ms",
			"Users Served": "8K+ Daily",
		},
	},
	{
		title: "Software Engineer 1",
		company: "Apexon",
		location: "Ahmedabad, India",
		period: "Aug 2021 - Jan 2023",
		skills: "Java8, MySQL, Spring Boot, Microservices, AWS, Azure, Redis, Apache Kafka",
		responsibilities: [
			"Developed and deployed RESTful APIs for a loyalty-based platform using Spring Boot microservices, MVC architecture, MongoDB, and Java 11, ensuring high scalability and security.",
			"Designed AWS Lambda functions to enable serverless, asynchronous file processing, reducing processing time.",
			"Contributed across all stages of deployment, from development to production release, ensuring smooth delivery on AWS cloud.",
			"Designed and implemented an asynchronous data synchronization architecture using Apache Kafka, enabling reliable patient data exchange across systems, improving throughput by 40%, and reducing latency in healthcare workflows.",
			"Worked on the internal tool Continuous Engagement, an employee performance application, developing end-to-end components using Next.js, Java 8, Spring Boot, MongoDB, and microservices, resolving minor bugs, writing unit tests, and supporting AWS deployment, contributing to the platform’s mission of empowering employees and unlocking workforce potential.",
		],
	},
	{
		title: "Site Reliability Engineer",
		company: "Crest Data System",
		location: "Ahmedabad, India",
		period: "Aug 2021 - Jan 2023",
		skills: "Python, Azure, AWS, Docker, Elastic Search, ELK Stack, Jenkins, Shell Scripting, Linux, Splunk",
		responsibilities: [
			"Engineered end-to-end observability across production systems by deploying ELK Stack and Azure Monitor dashboards with proactive alerting, significantly reducing detection time for critical issues and minimizing service downtime.",
			"Automated operational workflows using Python scripts and CI/CD pipelines, eliminating repetitive manual tasks and ensuring consistent, reliable deployments across environment promotions and production releases.",
			"Led incident response for P0/P1/P2 incidents in collaboration with the Incident Manager, driving rapid resolution through structured troubleshooting, bottleneck fixes, and performance debugging that measurably improved system stability and recovery time.",
			"Owned system reliability and high availability by continuously monitoring infrastructure health across Azure and AWS, identifying performance gaps, and partnering with engineering teams to implement targeted improvements.",
			"Established operational standards by authoring comprehensive technical documentation for monitoring processes, CI/CD pipelines, and troubleshooting runbooks — accelerating team onboarding and improving cross-team collaboration.",
		],
	},
];
