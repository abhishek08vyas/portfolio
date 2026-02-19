import { HiCode, HiCloud } from "react-icons/hi";
import { FaDatabase, FaLaptopCode, FaJava, FaAws } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import { SiSpringboot, SiDocker, SiPostgresql, SiJenkins, SiGit, SiRedis, SiMongodb, SiMysql, SiApachekafka, SiPython, SiElasticsearch, SiElasticstack, SiNextdotjs, SiTailwindcss, SiTensorflow, SiScikitlearn, SiMediapipe, SiRedux, SiReduxsaga, SiSwagger, SiJunit5, SiSwift, SiFlask, SiAmazons3, SiNodedotjs, SiFirebase, SiFlutter, SiHeroku } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { BiNetworkChart } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";
import { colors } from "@/lib/theme-utils";

export const SKILL_ICONS: Record<string, React.ReactNode> = {
	JavaScript: (
		<TbBrandJavascript
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.javascript }}
		/>
	),
	Redux: (
		<SiRedux
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.redux }}
		/>
	),
	Saga: (
		<SiReduxsaga
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.saga }}
		/>
	),
	Zustand: (
		<SiRedux
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.zustand }}
		/>
	),
	Java: (
		<FaJava
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.java }}
		/>
	),

	TypeScript: (
		<TbBrandTypescript
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.typescript }}
		/>
	),
	Python: (
		<SiPython
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.python }}
		/>
	),
	"Shell Scripting": <HiCode className="w-4 h-4 mr-1 text-gray-800" />,
	"Spring Boot": (
		<SiSpringboot
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.spring }}
		/>
	),
	"Spring MVC": (
		<SiSpringboot
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.spring }}
		/>
	),
	JPA: <FaDatabase className="w-4 h-4 mr-1 text-gray-800" />,
	NextJS: (
		<SiNextdotjs
			className="w-4 h-4 mr-1"
			style={{ color: "#000000" }}
		/>
	),
	"Tailwind CSS": (
		<SiTailwindcss
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.tailwind }}
		/>
	),
	"Apache Kafka": (
		<SiApachekafka
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.kafka }}
		/>
	),
	MySQL: (
		<SiMysql
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.mysql }}
		/>
	),
	MongoDB: (
		<SiMongodb
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.mongodb }}
		/>
	),
	PostgreSQL: (
		<SiPostgresql
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.postgresql }}
		/>
	),
	Redis: (
		<SiRedis
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.redis }}
		/>
	),
	Azure: (
		<HiCloud
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.azure }}
		/>
	),
	AWS: (
		<FaAws
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.aws }}
		/>
	),
	Jenkins: (
		<SiJenkins
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.jenkins }}
		/>
	),
	Git: (
		<SiGit
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.git }}
		/>
	),
	Docker: (
		<SiDocker
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.docker }}
		/>
	),
	"Elastic Search": (
		<SiElasticsearch
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.elasticsearch }}
		/>
	),
	"ELK Stack": (
		<SiElasticstack
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.elasticsearch }}
		/>
	),
	Microservices: <BiNetworkChart className="w-4 h-4 mr-1 text-gray-800" />,
	Serverless: <FaLaptopCode className="w-4 h-4 mr-1 text-gray-800" />,
	Asynchronous: <BiNetworkChart className="w-4 h-4 mr-1 text-gray-800" />,
	React: (
		<GrReactjs
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.react }}
		/>
	),
	Linux: (
		<FaLaptopCode
			className="w-4 h-4 mr-1"
			style={{ color: "#FCC624" }}
		/>
	),
	Splunk: (
		<FaDatabase
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.splunk }}
		/>
	),
	DevOps: <VscTools className="w-4 h-4 mr-1 text-gray-800" />,
	TensorFlow: (
		<SiTensorflow
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.tensorflow }}
		/>
	),
	"scikit-learn": (
		<SiScikitlearn
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.scikitlearn }}
		/>
	),
	MediaPipe: (
		<SiMediapipe
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.mediapipe }}
		/>
	),
	// Project-specific / variant keys (used in Projects.tsx and projects data)
	"Java 21": (
		<FaJava
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.java }}
		/>
	),
	"Java 8": (
		<FaJava
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.java }}
		/>
	),
	"Spring Boot 3.2": (
		<SiSpringboot
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.spring }}
		/>
	),
	"Amazon EC2": (
		<FaAws
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.aws }}
		/>
	),
	"Swagger API docs": (
		<SiSwagger
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.swagger }}
		/>
	),
	JUnit4: (
		<SiJunit5
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.junit }}
		/>
	),
	NumPy: (
		<SiPython
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.python }}
		/>
	),
	iOS: (
		<SiSwift
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.swift }}
		/>
	),
	Swift: (
		<SiSwift
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.swift }}
		/>
	),
	Flask: (
		<SiFlask
			className="w-4 h-4 mr-1"
			style={{ color: "#000000" }}
		/>
	),
	"AWS Lambda": (
		<FaAws
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.aws }}
		/>
	),
	S3: (
		<SiAmazons3
			className="w-4 h-4 mr-1"
			style={{ color: "#569A31" }}
		/>
	),
	"Node.js": (
		<SiNodedotjs
			className="w-4 h-4 mr-1"
			style={{ color: "#339933" }}
		/>
	),
	"Express JS": (
		<SiNodedotjs
			className="w-4 h-4 mr-1"
			style={{ color: "#000000" }}
		/>
	),
	SQL: (
		<SiPostgresql
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.postgresql }}
		/>
	),
	Firebase: (
		<SiFirebase
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.firebase }}
		/>
	),
	Flutter: (
		<SiFlutter
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.flutter }}
		/>
	),
	Heroku: (
		<SiHeroku
			className="w-4 h-4 mr-1"
			style={{ color: colors.tech.heroku }}
		/>
	),
} as const;

/** Ordered list of all skill names for the marquee – single source of truth */
export const ALL_SKILLS: string[] = Object.keys(SKILL_ICONS);
