import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { LuMail } from "react-icons/lu";
import { Button } from "./ui/button";
import Image from "next/image";
import { ContactModal } from "./ContactModel";
import { commonStyles, responsive, heroTypography } from "@/lib/theme-utils";
import { SiPostgresql, SiDocker, SiTensorflow, SiPython, SiFlask, SiNodedotjs, SiMongodb, SiReact, SiFirebase, SiHeroku } from "react-icons/si";
import { FaCode, FaAws } from "react-icons/fa";
import { HiCloud } from "react-icons/hi";

// Custom hook for typewriter greeting animation
const useTypewriterGreeting = () => {
	const greetings = ["Namaste!", "Hola!", "Bonjour!", "Konnichiwa!", "Ciao!", "Hallo!"];
	const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
	const [displayText, setDisplayText] = useState("");
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		const currentGreeting = greetings[currentGreetingIndex];
		let timeoutId: string | number | NodeJS.Timeout | undefined;

		if (isTyping) {
			// Typing animation
			if (displayText.length < currentGreeting.length) {
				timeoutId = setTimeout(() => {
					setDisplayText(currentGreeting.slice(0, displayText.length + 1));
				}, 100); // Speed of typing (100ms per character)
			} else {
				// Finished typing, wait before erasing
				timeoutId = setTimeout(() => {
					setIsTyping(false);
				}, 2000); // Wait 2 seconds before erasing
			}
		} else {
			// Erasing animation
			if (displayText.length > 0) {
				timeoutId = setTimeout(() => {
					setDisplayText(displayText.slice(0, -1));
				}, 50); // Speed of erasing (50ms per character - faster than typing)
			} else {
				// Finished erasing, move to next greeting
				setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
				setIsTyping(true);
			}
		}

		return () => clearTimeout(timeoutId);
	}, [displayText, isTyping, currentGreetingIndex, greetings]);

	return { displayText, isTyping };
};

const techStackIcons = {
	PostgreSQL: <SiPostgresql className="w-10 h-10 mr-1 text-[#336791]" />,
	Docker: <SiDocker className="w-10 h-10 mr-1 text-[#2496ED]" />,
	TensorFlow: <SiTensorflow className="w-10 h-10 mr-1 text-[#FF6F00]" />,
	MediaPipe: <FaCode className="w-10 h-10 mr-1 text-gray-800" />,
	Python: <SiPython className="w-10 h-10 mr-1 text-[#3776AB]" />,
	Flask: <SiFlask className="w-10 h-10 mr-1 text-[#000000]" />,
	AWS: <FaAws className="w-10 h-10 mr-1 text-[#FF9900]" />,
	Azure: <HiCloud className="w-10 h-10 mr-1 text-[#0078D4]" />,
	"Node.js": <SiNodedotjs className="w-10 h-10 mr-1 text-[#339933]" />,
	MongoDB: <SiMongodb className="w-10 h-10 mr-1 text-[#47A248]" />,
	React: <SiReact className="w-10 h-10 mr-1 text-[#61DAFB]" />,
	Firebase: <SiFirebase className="w-10 h-10 mr-1 text-[#FFCA28]" />,
	Heroku: <SiHeroku className="w-10 h-10 mr-1 text-[#430098]" />,
};

export const Hero = () => {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const { displayText, isTyping } = useTypewriterGreeting();

	const openContactModal = () => {
		setIsContactModalOpen(true);
	};

	const closeContactModal = () => {
		setIsContactModalOpen(false);
	};

	// Memoized Circular text component to prevent unnecessary re-renders
	const CircularText = useMemo(() => {
		const text = "• OPEN TO WORK • HIRE ME ";
		const chars = text.split("");
		const radius = 75; // Radius from center of image

		return (
			<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
				<motion.div
					className="relative"
					animate={{
						rotate: 360,
					}}
					transition={{
						duration: isHovered ? 5 : 15,
						ease: "linear",
						repeat: Infinity,
					}}
					// Add will-change for better performance
					style={{ willChange: "transform" }}
				>
					{chars.map((char, index) => {
						const angle = (index / chars.length) * 360;
						const radian = (angle * Math.PI) / 180;
						const x = Math.cos(radian) * radius;
						const y = Math.sin(radian) * radius;

						return (
							<motion.span
								key={`${char}-${index}`} // More stable key
								className="absolute text-sm font-bold text-[#142240] select-none"
								style={{
									left: x,
									top: y,
									transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
									willChange: "opacity", // Optimize for opacity changes
								}}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{
									delay: index * 0.05,
									duration: 0.3, // Shorter duration for smoother animation
								}}
							>
								{char}
							</motion.span>
						);
					})}
				</motion.div>
			</div>
		);
	}, [isHovered]); // Only re-create when isHovered changes

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center pt-16 overflow-hidden"
		>
			{/* Background Banner with Refined Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200">
				<div className="absolute inset-0 opacity-20">
					<div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#142240] blur-3xl"></div>
					<div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#797F8C] blur-3xl"></div>
					<div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200 blur-3xl"></div>
				</div>
				<div className="absolute inset-0 bg-white/40"></div>

				{/* Subtle grid pattern overlay */}
				<div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyIC44IDIgMnY4YzAgMS4yLS44IDItMiAycy0yLS44LTItMnYtOGMwLTEuMi44LTIgMi0yem0wIDEyYzEuMiAwIDIgLjggMiAydjZjMCAxLjItLjggMi0yIDJzLTItLjgtMi0ydi02YzAtMS4yLjgtMiAyLTJ6Ii8+PC9nPjwvc3ZnPg==')]"></div>
			</div>

			{/* Floating Tech Icons with ML/AI and MLOps focus */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Top Row */}

				{/* Upper Middle Row */}
				<div
					className="absolute top-1/3 left-4/5 animate-bounce-slow opacity-15"
					style={{ animationDelay: "2.5s" }}
				>
					{techStackIcons.AWS}
				</div>

				{/* Middle Row */}
				<div
					className="absolute top-1/2 left-1/12 animate-bounce-slow opacity-15"
					style={{ animationDelay: "0.5s" }}
				>
					{techStackIcons.Python}
				</div>
				<div
					className="absolute top-1/2 left-1/3 animate-pulse opacity-15"
					style={{ animationDuration: "3s" }}
				>
					{techStackIcons.Flask}
				</div>
				<div
					className="absolute top-1/2 left-2/3 animate-bounce-slow opacity-15"
					style={{ animationDelay: "3.5s" }}
				>
					{techStackIcons.Azure}
				</div>
				<div
					className="absolute top-1/2 left-11/12 animate-pulse opacity-15"
					style={{ animationDuration: "4s" }}
				>
					{techStackIcons.Docker}
				</div>

				{/* Lower Middle Row */}
				<div
					className="absolute bottom-1/3 left-1/2 animate-bounce-slow opacity-15"
					style={{ animationDelay: "4s" }}
				>
					{techStackIcons.MediaPipe}
				</div>

				{/* Bottom Row */}
				<div
					className="absolute bottom-20 left-1/8 animate-bounce-slow opacity-15"
					style={{ animationDelay: "4.5s" }}
				>
					{techStackIcons.Firebase}
				</div>
				<div
					className="absolute bottom-16 left-1/4 animate-pulse opacity-15"
					style={{ animationDuration: "4s" }}
				>
					{techStackIcons.React}
				</div>
				<div
					className="absolute bottom-20 left-1/2 animate-bounce-slow opacity-15"
					style={{ animationDelay: "5s" }}
				>
					{techStackIcons.Heroku}
				</div>
				<div
					className="absolute bottom-16 left-3/4 animate-pulse opacity-15"
					style={{ animationDuration: "3s" }}
				>
					{techStackIcons.AWS}
				</div>
				<div
					className="absolute bottom-20 left-5/6 animate-bounce-slow opacity-15"
					style={{ animationDelay: "5.5s" }}
				>
					{techStackIcons["Node.js"]}
				</div>

				{/* Additional scattered icons for more coverage */}
				<div
					className="absolute top-1/4 left-1/12 animate-pulse opacity-10"
					style={{ animationDuration: "6s" }}
				>
					{techStackIcons.MongoDB}
				</div>
				<div
					className="absolute top-3/4 left-1/6 animate-bounce-slow opacity-10"
					style={{ animationDelay: "6s" }}
				>
					{techStackIcons.TensorFlow}
				</div>
				<div
					className="absolute top-1/6 left-4/5 animate-pulse opacity-10"
					style={{ animationDuration: "5.5s" }}
				>
					{techStackIcons.PostgreSQL}
				</div>
				<div
					className="absolute top-5/6 left-1/3 animate-bounce-slow opacity-10"
					style={{ animationDelay: "6.5s" }}
				>
					{techStackIcons.Flask}
				</div>
			</div>

			{/* Main Content */}
			<div className={responsive.container + " relative z-10"}>
				<div className="max-w-3xl mx-auto text-center py-8">
					{/* Profile Image with Enhanced Animated Border and Circular Text */}
					<div
						className="relative w-40 h-40 mx-auto mb-8"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						{/* Circular Text - Now memoized */}
						{CircularText}

						{/* Profile Image Container */}
						<div className="absolute inset-4">
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#142240] via-[#3D5176] to-[#797F8C] animate-spin-slow"></div>
							<div className="absolute inset-1 rounded-full bg-white"></div>
							<div className="absolute inset-2 rounded-full overflow-hidden">
								<Image
									src="/images/profile_photo.png"
									alt="Abhishek Vyas Avatar"
									width={144}
									height={144}
									className="w-full h-full object-cover"
									priority
								/>
							</div>
						</div>
					</div>

					{/* Updated Name with smaller, more attractive typography */}
					<h1
						className={`${heroTypography.name} mb-2 bg-gradient-to-r from-[#142240] to-[#3D5176] bg-clip-text text-transparent`}
						style={{ padding: "0.5rem" }}
					>
						Abhishek Vyas
					</h1>

					{/* Updated Title with smaller, more attractive typography */}
					<div className="relative mb-8">
						<h2 className={`${heroTypography.title} `}>AI Engineering Professional | MLOps Practitioner | Full-Stack Developer</h2>
						<div className="absolute -bottom-3 left-1/2 w-32 h-1 bg-gradient-to-r from-[#142240] to-[#3D5176] transform -translate-x-1/2 rounded-full"></div>
					</div>

					<div className={`${commonStyles.card.base} ${commonStyles.card.hover} p-6 mb-10`}>
						<p className="text-gray-700 leading-relaxed mb-6 text-justify">
							<span className="inline-block">
								<span className="font-semibold text-[#142240]">{displayText}</span>
							</span>{" "}
							I am <span className="font-semibold text-[#142240]">Abhishek Vyas</span>, a passionate Machine Learning Engineer and MLOps Practitioner with over 3 years of experience in developing
							<span className="font-semibold text-[#142240]"> end-to-end ML solutions</span>,<span className="font-semibold text-[#142240]"> scalable data pipelines</span>, and
							<span className="font-semibold text-[#142240]"> production-ready applications</span>. My expertise spans from building and deploying ML models to designing robust backend systems and full-stack applications. I specialize in Python, TensorFlow/PyTorch, cloud platforms (AWS/Azure), and modern web technologies.
						</p>

						<div className="flex flex-wrap justify-center gap-2 mb-4">
							{["Python", "TensorFlow", "PyTorch", "MLOps", "AWS", "Azure", "React", "Node.js", "Docker", "Kubernetes", "FastAPI", "PostgreSQL"].map((skill) => (
								<span
									key={skill}
									className={commonStyles.skillTag}
								>
									{skill}
								</span>
							))}
						</div>
					</div>

					{/* Call to Action Buttons */}
					<div className="flex flex-wrap gap-6 justify-center mb-20">
						<button
							onClick={openContactModal}
							className="inline-flex group transform transition-transform hover:scale-105 duration-300"
						>
							<Button className={`${commonStyles.button.primary} px-8 py-6 gap-3 flex items-center justify-center`}>
								<LuMail className="w-6 h-6 group-hover:animate-bounce" />
								<span className="text-lg">Contact Me</span>
							</Button>
						</button>

						<div className="flex gap-4">
							{/* GitHub Icon - Enhanced */}
							<a
								href={process.env.NEXT_PUBLIC_GITHUB_LINK ?? "#"}
								aria-label="GitHub Profile"
								className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
							>
								<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all">
									<svg
										viewBox="0 0 24 24"
										width="28"
										height="28"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
											fill="#142240"
											className="opacity-80 hover:opacity-100 transition-opacity"
										/>
									</svg>
								</div>
							</a>

							{/* LinkedIn Icon - Enhanced */}
							<a
								href={process.env.NEXT_PUBLIC_LINKEDIN_LINK ?? "#"}
								aria-label="LinkedIn Profile"
								className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
							>
								<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all">
									<svg
										viewBox="0 0 24 24"
										width="28"
										height="28"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
											fill="#0077B5"
										/>
									</svg>
								</div>
							</a>
						</div>
					</div>

					{/* Scroll Indicator - Fixed positioning to avoid overlap */}
					<div
						className="absolute left-1/2 transform -translate-x-1/2 animate-bounce"
						style={{ bottom: "1rem" }}
					>
						<div className="w-8 h-12 rounded-full border-2 border-[#142240] flex items-start justify-center p-2">
							<div className="w-1 h-3 bg-[#142240] rounded-full animate-ping"></div>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Modal */}
			<ContactModal
				isOpen={isContactModalOpen}
				onClose={closeContactModal}
			/>
		</section>
	);
};
