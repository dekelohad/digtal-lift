import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

function TwoColumnFaq() {
	const [openIndex, setOpenIndex] = useState(null);

	const faqs = [
		{
			question: "How quickly can I expect to see results?",
			answer: "Most clients start seeing increased lead flow within the first 30-60 days. Our proven systems are designed for rapid implementation and quick wins, while building long-term sustainable growth. We focus on high-intent traffic that's ready to convert."
		},
		{
			question: "What makes your approach unique?",
			answer: "We focus on immediate results while building long-term assets. While other agencies might take months to show results, our hybrid approach starts driving calls quickly through paid campaigns while simultaneously building your organic presence for sustained growth."
		},
		{
			question: "What services do you offer?",
			answer: "We offer a complete digital growth suite: Local Lead Generation, Search Engine Optimization (SEO), Paid Search Marketing, Google Business Profile Optimization, Web Design, and Web Development. Each service is strategically designed to increase your lead flow and revenue."
		},
		{
			question: "How do you ensure quality leads?",
			answer: "We use advanced targeting and qualification systems to ensure you're getting calls from your ideal customers. Our campaigns focus on high-intent keywords and demographics that match your best clients, filtering out time-wasters and unqualified leads."
		},
		{
			question: "Do you offer guarantees?",
			answer: "Yes! We're so confident in our ability to deliver results that we offer performance guarantees. If we don't hit the agreed-upon KPIs within the specified timeframe, you'll receive free service until we do. We succeed when you succeed."
		},
		{
			question: "What industries do you work with?",
			answer: "We specialize in working with service-based businesses, professional practices, and local businesses looking to dominate their market. Our strategies are particularly effective for businesses where phone calls lead to high-value clients."
		}
	];

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
							{faqs.map((faq, index) => (
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
											background: openIndex === index ? "linear-gradient(145deg, rgba(187, 255, 0, 0.08), rgba(0, 0, 0, 0.1))" : "transparent"
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
											fontWeight: "500"
										}}>
											{faq.question}
										</h3>
										{openIndex === index ? 
											<FaMinus style={{ color: "#BBFF00", fontSize: "16px" }} /> : 
											<FaPlus style={{ color: "#BBFF00", fontSize: "16px" }} />
										}
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

export default TwoColumnFaq;
