import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

function FAQ({FAQS}) {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="section" style={{ 
			padding: "40px 0",
			background: "#000"
		}}>
			<div className="container">
				<motion.h2 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					style={{
						fontSize: "clamp(32px, 5vw, 48px)",
						marginBottom: "40px",
						color: "#BBFF00",
						textAlign: "center",
						lineHeight: "1.2"
					}}
				>
					Frequently Asked Questions
				</motion.h2>
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							{FAQS.map((faq, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									style={{
										marginBottom: "15px",
										background: "#111",
										borderRadius: "15px",
										border: "1px solid rgba(187, 255, 0, 0.1)",
										overflow: "hidden"
									}}
								>
									<div
										onClick={() => toggleAccordion(index)}
										style={{
											padding: "20px",
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
											cursor: "pointer",
											transition: "all 0.3s ease",
											background: openIndex === index ? "linear-gradient(145deg, rgba(187, 255, 0, 0.08), rgba(0, 0, 0, 0.1))" : "transparent",
											minHeight: "72px",
											width: "100%"
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.background = "linear-gradient(145deg, rgba(187, 255, 0, 0.05), rgba(0, 0, 0, 0.1))";
										}}
										onMouseLeave={(e) => {
											if (openIndex !== index) {
												e.currentTarget.style.background = "transparent";
											}
										}}
									>
										<h3 style={{
											fontSize: "18px",
											color: "#fff",
											margin: 0,
											fontWeight: "500",
											flex: 1,
											paddingRight: "20px"
										}}>
											{faq.question}
										</h3>
										<div style={{ flexShrink: 0 }}>
											{openIndex === index ? 
												<FaMinus style={{ color: "#BBFF00", fontSize: "16px" }} /> : 
												<FaPlus style={{ color: "#BBFF00", fontSize: "16px" }} />
											}
										</div>
									</div>
									<AnimatePresence>
										{openIndex === index && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3 }}
												style={{
													padding: "0 20px 20px",
													color: "#e0e0e0",
													lineHeight: "1.6"
												}}
											>
												{faq.answer}
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FAQ;
