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
		skills: "TypeScript, ReactJs, NextJs, Redux, Saga, Zustand, Tailwind CSS, MongoDB, Azure, Apache Kafka, Redis,  Elastic Search,JavaScript, Java11, MySQL, Microservices, Spring Boot",
		responsibilities: ["Improved performance of high-traffic REST APIs by implementing asynchronous Azure functions and optimizing Java workflows, resulting in a 10% increase in system throughput.", "Built responsive frontend components using Next.js and integrated RESTful services for seamless user experiences.", "Implemented state management solutions with Redux and Zustand to handle complex data flows, reducing application errors by 40% and improving scalability.", "Implemented Azure Monitor logging and alerting to track application health and support faster troubleshooting in production.", "Contributed to release management and production deployments, supporting multiple rollout strategies including Blue-Green and Canary deployments to ensure smooth environment promotions and minimal user impact.", "Mentored Junior Engineers and guided architectural decisions, ensuring performance, maintainable code."],
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
		skills: "Splunk, DevOps, Python, AWS, Linux, Jenkins, Shell Scripting",
		responsibilities: [
			"Improved system reliability by using Azure Monitoring and ELK/Kibana dashboards, helping teams find issues faster and reduce service downtime.",
			"Automated daily operational tasks with Python scripts and CI/CD pipelines, reducing manual work and improving deployment consistency.",
			"Configured Azure Monitor dashboards, logs, and alerts to improve observability and detect issues early before impacting users.",
			"Supported environment promotions and production releases, ensuring reliable deployments and stable operations during critical changes. ",
			"Increased system performance by debugging production issues and fixing bottlenecks, leading to more stable applications.",
			"Built monitoring alerts and reports that supported quicker incident response and improved recovery time.",
			"Worked closely with the Incident Manager to handle P0/P1 and P2 incidents, ensuring quick resolution and minimal business impact.",
			"Strengthening observability by setting up ELK stack monitoring, giving better visibility into system health and performance trends.",
			"Created clear technical documentation for monitoring processes, pipelines, and troubleshooting steps, improving team collaboration.",
			"Partnered with engineering teams to maintain high availability through continuous monitoring and performance improvements.",
		],
	},
];
