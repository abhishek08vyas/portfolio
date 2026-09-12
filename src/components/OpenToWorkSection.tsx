import React, { useState } from "react";
import { LuMail } from "react-icons/lu";
import { commonStyles } from "../lib/theme-utils";
import { ContactModal } from "./ContactModel";

interface OpenToWorkSectionProps {
	className?: string;
}

export const OpenToWorkSection: React.FC<OpenToWorkSectionProps> = ({ className = "" }) => {
	const [isContactModalOpen, setIsContactModalOpen] = useState(false);

	const openContactModal = () => {
		setIsContactModalOpen(true);
	};

	const closeContactModal = () => {
		setIsContactModalOpen(false);
	};

	return (
		<>
			<section
				id="open-to-work"
				className={`relative py-16 overflow-hidden ${className}`}
			>
				<div className={commonStyles.section.container}>
					<div className="max-w-4xl mx-auto">
						<div className={`${commonStyles.openToWork.container} motion-reduce:transform-none`}>
							<div className={commonStyles.openToWork.content}>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
									<div>
										{/* Status badge */}
										<div className={commonStyles.openToWork.badge}>
											<span
												className="w-2 h-2 rounded-full mr-2 animate-pulse motion-reduce:animate-none bg-[#10B981]"
												aria-hidden="true"
											></span>
											Open to Work
										</div>

										{/* Main content */}
										<h2 className={commonStyles.openToWork.title}>Building AI/RAG systems · Open to full-stack & AI roles, remote Canada-wide</h2>

										<p className={`text-sm ${commonStyles.openToWork.description}`}>Also available for freelance full-stack and AI consulting work.</p>
									</div>

									{/* Actions */}
									<div className="flex flex-col sm:flex-row gap-3 shrink-0">
										<button
											onClick={openContactModal}
											className={`${commonStyles.openToWork.button} w-full sm:w-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#382a1b] dark:focus-visible:ring-offset-[#140d07]`}
										>
											<LuMail
												className="w-5 h-5 mr-2"
												aria-hidden="true"
											/>
											Contact
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Modal component */}
			<ContactModal
				isOpen={isContactModalOpen}
				onClose={closeContactModal}
			/>
		</>
	);
};
