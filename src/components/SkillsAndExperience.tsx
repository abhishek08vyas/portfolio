// components/SkillsAndExperience.tsx
import { useState } from "react";
import { ContactModal } from "./ContactModel";
import { colors, commonStyles, responsive } from "../lib/theme-utils";
import { Skills } from "./Skills"; // Import the Skills component
import { Experience } from "./Experience"; // Import the Experience component

export const SkillsAndExperience = () => {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);

	// Open and close modal functions
	const openContactModal = () => {
		setIsContactModalOpen(true);
	};

	const closeContactModal = () => {
		setIsContactModalOpen(false);
	};

	return (
		<section
			id="skills-experience"
			className="relative py-16 overflow-hidden"
			style={{ background: "#f8fafc" }}
		>
			{/* Background with gradient */}
			<div
				className="absolute inset-0"
				style={{ background: `linear-gradient(to bottom right, #f1f5f9, #ffffff, #f8fafc)` }}
			>
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl"
						style={{ backgroundColor: colors.brand.dark }}
					></div>
					<div
						className="absolute bottom-10 right-10 w-64 h-64 rounded-full blur-3xl"
						style={{ backgroundColor: colors.brand.light }}
					></div>
				</div>
				<div
					className="absolute inset-0"
					style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
				></div>
			</div>

			<div className={responsive.container + " relative z-10"}>
				{/* No overall heading for "Skills & Experience" here, as each section has its own */}
				{/* No Tab Navigation needed */}

				<div className="max-w-5xl mx-auto">
					{/* Render Skills Component */}
					<Skills commonStyles={commonStyles} />

					{/* Render Experience Component */}
					<Experience
						commonStyles={commonStyles}
						openContactModal={openContactModal}
					/>
				</div>
			</div>

			{/* Contact Modal component */}
			<ContactModal
				isOpen={isContactModalOpen}
				onClose={closeContactModal}
			/>
		</section>
	);
};
