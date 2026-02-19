import React, { useState } from "react";
import { FaBriefcase, FaArrowRight } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { colors, commonStyles } from "../lib/theme-utils";
import { ContactModal } from "./ContactModel";

interface OpenToWorkSectionProps {
	className?: string;
}

export const OpenToWorkSection: React.FC<OpenToWorkSectionProps> = ({ className = "" }) => {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);

	// Open and close modal functions
	const openContactModal = () => {
		setIsContactModalOpen(true);
	};

	const closeContactModal = () => {
		setIsContactModalOpen(false);
	};

	return (
		<>
			<div className={`${className}`}>
				<div className={commonStyles.openToWork.container}>
					<div className={commonStyles.openToWork.content}>
						{/* Decorative elements */}
						<div
							className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full blur-xl"
							style={{ backgroundColor: "#142240", opacity: 0.2 }}
						></div>
						<div
							className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 rounded-full blur-xl"
							style={{ backgroundColor: colors.brand.light, opacity: 0.2 }}
						></div>

						<div className="flex flex-col md:flex-row md:items-center md:justify-between">
							<div className="mb-6 md:mb-0 md:mr-6">
								{/* Status badge */}
								<div className={commonStyles.openToWork.badge}>
									<span
										className="w-2 h-2 rounded-full mr-2 animate-pulse"
										style={{ backgroundColor: colors.semantic.success }}
									></span>
									Open to Work
								</div>

								{/* Main content */}
								<h4 className={commonStyles.openToWork.title}>Transforming complex challenges into elegant solutions</h4>

								<p className={commonStyles.openToWork.description}>With expertise in delivering high quality software, I build scalable systems that deliver business value.</p>
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
						<div
							className="absolute top-6 right-6 opacity-80"
							style={{ color: colors.semantic.warning }}
						>
							<HiLightningBolt className="w-6 h-6" />
						</div>
					</div>
				</div>
			</div>

			{/* Contact Modal component */}
			<ContactModal
				isOpen={isContactModalOpen}
				onClose={closeContactModal}
			/>
		</>
	);
};
