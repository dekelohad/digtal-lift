import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from 'react-icons/fa';
import BreadCrumb from "../../components/common/Breadcrumb";
import "./GoogleMyBusiness.css";

function GoogleMyBusinessOptimization() {
	const [openIndex, setOpenIndex] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const optimizationFaqs = [
		{
			question: "How long does it take to see results from optimization?",
			answer: "Results can vary depending on your market and competition. Generally, businesses start seeing improvements in visibility within 1-3 months after optimization, but significant results may take 3-6 months."
		},
		{
			question: "What makes your optimization service different?",
			answer: "Our optimization service is data-driven and comprehensive. We analyze your competitors, identify gaps in your current profile, and implement proven strategies that have worked for hundreds of our clients. We also provide detailed reports and recommendations for ongoing improvements."
		},
		{
			question: "Do you guarantee rankings?",
			answer: "While we can't guarantee specific rankings (as Google's algorithms are constantly changing), we guarantee that we'll implement all optimization best practices and provide detailed recommendations for maintaining and improving your profile's performance."
		},
		{
			question: "What happens after the optimization is complete?",
			answer: "After the initial optimization, we provide a detailed report of all changes made and recommendations for maintaining your profile's performance. We also offer ongoing management services if you'd like continuous support and optimization."
		},
		{
			question: "Will optimization help if I'm in a competitive market?",
			answer: "Yes! Optimization is especially important in competitive markets. While it may take longer to see results, proper optimization ensures you're competing on an even playing field and maximizing your profile's potential."
		}
	];

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="local-lead-page">
			<BreadCrumb title="Google My Business Optimization" />
			<div className="container mx-auto px-6 pt-80">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="text-center"
				>
					<motion.h1 
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className="hero-title mx-auto"
						style={{ color: "#BBFF00" }}
					>
						<motion.span
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.3, duration: 0.8 }}
							className="neon-text"
						>
							Google My Business
						</motion.span>
						<motion.span
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.8 }}
							className="neon-text"
						>
							Optimization Service
						</motion.span>
					</motion.h1>

					<div className="setup-content">
						<p className="service-description">
							Our Google My Business optimization service is designed to maximize your business profile's visibility and performance in local search results. We implement proven strategies that have helped hundreds of businesses improve their local rankings.
						</p>
						<p className="service-description">
							Whether you're struggling to rank in your local market or want to maintain your competitive edge, our optimization service will ensure your profile is fully optimized for maximum visibility.
						</p>

						<h3 className="subsection-title">What's included in our optimization service</h3>
						<p className="service-description">
							Our comprehensive optimization service includes:
						</p>
						<ul className="service-list">
							<li>Comprehensive competitor analysis</li>
							<li>Keyword research and implementation</li>
							<li>Category optimization</li>
							<li>Business description optimization</li>
							<li>Photo optimization and geotagging</li>
							<li>Review response strategy</li>
							<li>Q&A optimization</li>
							<li>Service and product catalog optimization</li>
							<li>Local citation audit</li>
							<li>Website optimization recommendations</li>
							<li>Mobile optimization</li>
							<li>Performance tracking setup</li>
							<li>Custom reporting dashboard</li>
							<li>Local SEO strategy recommendations</li>
							<li>Content calendar for posts</li>
							<li>Review generation strategy</li>
						</ul>
						<p className="service-description">
							Each optimization is tailored to your specific business needs and market conditions. We focus on implementing strategies that will have the biggest impact on your local visibility and customer engagement.
						</p>

						<h3 className="subsection-title">Frequently asked questions</h3>
						<div className="setup-faq-container">
							{optimizationFaqs.map((faq, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="faq-item"
								>
									<div
										onClick={() => toggleAccordion(index)}
										className="faq-header"
									>
										<h3 className="faq-question">{faq.question}</h3>
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
												className="faq-answer"
											>
												{faq.answer}
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default GoogleMyBusinessOptimization; 