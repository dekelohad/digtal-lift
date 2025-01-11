import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../../components/common/Breadcrumb";
import ImageModal from "../../components/common/ImageModal";
import BeforeOptimization from "../../assets/images/portfolio/before-gmb-optimization-services-1.webp";
import AfterOptimization from "../../assets/images/portfolio/after-gmb-optimization-services-2.webp";
import "./GoogleMyBusiness.css";

const FAQS = [
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

function GoogleMyBusinessOptimization() {
	const [openIndex, setOpenIndex] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="local-lead-page">
			<BreadCrumb title="Google Business Profile Optimization" />
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
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.3, duration: 0.8 }}
							className="neon-text title-line"
						>
							Google
						</motion.div>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.8 }}
							className="neon-text title-line"
						>
							Business Profile
						</motion.div>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.5, duration: 0.8 }}
							className="neon-text title-line"
						>
							Optimization Service
						</motion.div>
					</motion.h1>

					<div className="setup-content">
						<p className="service-description">
							Our Google Business Profile optimization service is designed to maximize your business profile's visibility and performance in local search results. We implement proven strategies that have helped hundreds of businesses improve their local rankings.
						</p>
						<p className="service-description">
							Whether you're struggling to rank in your local market or want to maintain your competitive edge, our optimization service will ensure your profile is fully optimized for maximum visibility.
						</p>

						<div className="results-image-container">
							<h3 className="subsection-title">Real Results from Our Optimization Service</h3>
							<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
								<div>
									<h4 style={{ color: '#BBFF00', marginBottom: '1rem', fontSize: '1.2rem' }}>Before Optimization</h4>
									<img 
										src={BeforeOptimization}
										alt="Google Business Profile profile before optimization"
										className="results-image"
										onClick={() => setSelectedImage({
											src: BeforeOptimization,
											alt: "Google Business Profile profile before optimization"
										})}
										style={{ cursor: 'pointer' }}
									/>
								</div>
								<div>
									<h4 style={{ color: '#BBFF00', marginBottom: '1rem', fontSize: '1.2rem' }}>After Optimization</h4>
									<img 
										src={AfterOptimization}
										alt="Google Business Profile profile after optimization"
										className="results-image"
										onClick={() => setSelectedImage({
											src: AfterOptimization,
											alt: "Google Business Profile profile after optimization"
										})}
										style={{ cursor: 'pointer' }}
									/>
								</div>
							</div>
						</div>

						<ImageModal 
							isOpen={!!selectedImage}
							onClose={() => setSelectedImage(null)}
							imageSrc={selectedImage?.src}
							altText={selectedImage?.alt}
						/>

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

				{/* FAQ Section */}
				<div className="container mx-auto px-6">
					<div className="text-center max-w-4xl mx-auto mb-16">
						<h2 className="section-title">Frequently Asked Questions</h2>
					</div>
					<div className="faq-container">
						{FAQS.map((faq, index) => (
							<div key={index} className="faq-item">
								<button
									className="faq-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={`#faq-${index}`}
								>
									{faq.question}
									<span className="faq-icon">+</span>
								</button>

								<div
									id={`faq-${index}`}
									className="faq-collapse collapse"
									data-bs-parent="#web-dev-accordion"
								>
									<div className="faq-content">
										{faq.answer}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>		

						{/* Success Stories Section */}
						<div className="testimonials-section">
							<div className="text-center">
								<motion.h2 
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8 }}
									className="section-title neon-text mx-auto"
									style={{ textDecoration: 'none', borderBottom: 'none' }}
								>
									Success Stories
								</motion.h2>
							</div>
							<div className="testimonials-grid">
								<motion.div 
									className="testimonial-box"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
								>
									<div className="quote-icon">
										<span className="neon-text">"</span>
									</div>
									<p className="testimonial-quote">
										Digital Lift's optimization service transformed our Google Business Profile performance. Their team identified key optimization opportunities we were missing and implemented changes that made a real difference. The detailed monthly reports helped us understand exactly what was working.
									</p>
									<div className="testimonial-author">
										<h4 className="author-name">Thomas Anderson</h4>
										<p className="author-business">Anderson Roofing</p>
										<p className="testimonial-results neon-text">300% increase in profile views after 3 months</p>
									</div>
								</motion.div>

								<motion.div 
									className="testimonial-box"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
								>
									<div className="quote-icon">
										<span className="neon-text">"</span>
									</div>
									<p className="testimonial-quote">
										We were struggling to stand out in local search results until we started working with Digital Lift. Their optimization strategies, especially their approach to photos and posts, completely revitalized our profile. The increase in quality leads has been remarkable.
									</p>
									<div className="testimonial-author">
										<h4 className="author-name">Michael Reynolds</h4>
										<p className="author-business">Reynolds Electrical</p>
										<p className="testimonial-results neon-text">85% improvement in local search visibility</p>
									</div>
								</motion.div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default GoogleMyBusinessOptimization; 