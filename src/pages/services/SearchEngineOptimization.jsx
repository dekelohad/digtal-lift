import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaSearch, FaCode, FaLink, FaChartLine } from "react-icons/fa";
import BreadCrumb from "../../components/common/Breadcrumb";
import OnPageSEOCaseStudy from "../../assets/images/portfolio/on-page-seo-case-study.webp";
import "./SearchEngineOptimization.css";

function SearchEngineOptimization() {
	const [isImageModalOpen, setIsImageModalOpen] = useState(false);

	const processSteps = [
		{
			icon: <FaSearch />,
			description: "Unlock untapped markets with our AI-powered keyword research. We analyze search patterns, user intent, and competitor gaps to identify golden opportunities that your competitors are missing."
		},
		{
			icon: <FaCode />,
			description: "Transform your site into a high-performance machine. We optimize core web vitals, implement schema markup, and ensure lightning-fast loading speeds that both users and Google love."
		},
		{
			icon: <FaLink />,
			description: "Build authority with strategic content that converts. Our proven link-building strategies and viral-worthy content creation put your brand at the center of your industry's conversation."
		},
		{
			icon: <FaChartLine />,
			description: "Watch your ROI soar with real-time performance tracking. Our advanced analytics dashboard shows you exactly how we're turning clicks into customers and rankings into revenue."
		}
	];

	const testimonials = [
		{
			quote: "Before their SEO expertise, our epoxy flooring business was invisible online. Now we dominate the commercial and residential flooring searches across Greater Boston. Their strategies helped us land major warehouse contracts and high-end garage projects. The leads coming in are exactly what we wanted – serious property owners ready to invest in quality flooring!",
			author: "Mark Reynolds",
			business: "Elite Epoxy Solutions",
			results: "394% increase in commercial contracts"
		},
		{
			quote: "In a city full of dentists, standing out seemed impossible. Their SEO expertise changed everything. Now when someone in Boston searches for 'best dentist near me', we're right at the top. The quality of leads is incredible - these are patients actively looking for our services.",
			author: "Dr. Sarah Martinez",
			business: "Bright Smile Dental Care",
			results: "185% increase in high-value patients"
		},
		{
			quote: "Competing with big chain gyms was killing us. These guys turned it around completely. Their local SEO strategies helped us dominate neighborhood searches. Now we're the go-to fitness destination for three different Boston districts. The best part? Our new members are pre-sold on our premium packages!",
			author: "Chris Anderson",
			business: "Elite Fitness Studio",
			results: "312% growth in membership value"
		},
		{
			quote: "In luxury real estate, digital presence is everything. Their SEO mastery has positioned us as THE luxury property experts in Boston. We're not just getting more leads - we're getting clients ready to invest in multi-million dollar properties. The ROI has been absolutely astronomical.",
			author: "Jennifer Blake",
			business: "Prestige Properties Boston",
			results: "425% increase in luxury property inquiries"
		}
	];

	return (
		<div className="local-lead-page">
			<BreadCrumb title="SEO Services" />
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
					>
						<motion.span
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.3, duration: 0.8 }}
							className="neon-text"
						>
							Search Engine
						</motion.span>
						<motion.span
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.8 }}
							className="neon-text"
						>
							Optimization
						</motion.span>
					</motion.h1>

					<motion.p
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="hero-description mt-8 mb-20 mx-auto"
					>
						Reliable SEO services designed to scale traffic that converts.
					</motion.p>

					<motion.div
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.8 }}
						className="text-left mb-20 max-w-4xl mx-auto"
					>
						<p className="service-description mb-8">
							There are billions of searches performed by users looking for products, services, or simply needing answers to questions.
						</p>
						<p className="service-description mb-8">
							Search engine optimization (SEO) is the process of improving the quality and quantity of organic traffic from search engines to website or webpage.
						</p>
						<p className="service-description mb-8">
							Our scientific approach to SEO services means that our strategies are backed by thorough research and testing, which means accurate optimizations and faster keyword rankings.
						</p>
						<p className="service-description mb-8">
							Generate more visibility, traffic, and sales with on-page SEO services. Google uses on-page factors including keyword mentions, meta data, HTML tags, links, and site structure to rank pages in search results.
						</p>
						<p className="service-description mb-8">
							Optimizing on-page ranking factors is a key step to ranking in Google and other search engines.
						</p>
						<p className="service-description mb-8">
							Here's a recent win from a client that leveraged on-page SEO to improve organic traffic…
						</p>

						<div className="results-image-container" onClick={() => setIsImageModalOpen(true)} role="button" tabIndex={0}>
							<img 
								src={OnPageSEOCaseStudy}
								alt="On-page SEO case study showing traffic growth"
								className="results-image"
							/>
						</div>

						{isImageModalOpen && (
							<div className="image-modal" onClick={() => setIsImageModalOpen(false)}>
								<div className="modal-content">
									<img 
										src={OnPageSEOCaseStudy}
										alt="On-page SEO case study showing traffic growth"
										className="modal-image"
									/>
									<button className="close-modal" onClick={() => setIsImageModalOpen(false)}>×</button>
								</div>
							</div>
						)}

						<p className="service-description mt-12 mb-4">
							The sharp trend in clicks is a result of improving the following:
						</p>
						<ul className="service-list mb-8">
							<li>title tags & meta descriptions</li>
							<li>H1, H2s, and subheadings</li>
							<li>internal linking & site structure</li>
						</ul>
						<p className="service-description mb-12">
							This resulted in an 80% increase in website conversions over the previous year.
						</p>

						<h2 className="section-title text-left mb-8">Increase Organic Traffic With On-page SEO</h2>
						<p className="service-description mb-12">
							On-Page SEO is often a quick win for existing website content. This includes identifying target keywords, mapping them to corresponding pages, and creating content that matches the keyword intent. Ultimately, this means satisfying users, and creating unique content that is deserving of page #1 rankings in Google search.
						</p>

						<h2 className="section-title text-left mb-8">Our On-page SEO Process</h2>
						<div className="process-steps">
							<div className="process-step">
								<h3 className="step-title"><span>1.</span>Keyword Research & Mapping</h3>
								<p className="step-description">
									Our process begin with keyword research to identify target queries, analyze the existing search engine results pages (SERPs), and assign or "map" keyword to target pages that we intend to rank.
								</p>
							</div>
							<div className="process-step">
								<h3 className="step-title"><span>2.</span>Tracking Setup</h3>
								<p className="step-description">
									After identify our target keywords, wesetup tracking. This includes keyword tracking, and setting up Google Analytics and Google Tag Manager to understand how users are engaging with the website.
								</p>
							</div>
							<div className="process-step">
								<h3 className="step-title"><span>3.</span>On-page SEO Audit</h3>
								<p className="step-description">
									Once we've identified our target keywords and tracking is completed, we perform an On-page SEO audit to understand the website's HTML in addition to competitors. On-page SEO audits provide us with key insights including the quality of the website's existing content, competing pages, and other page-level ranking factors like title tags, heading structure, and internal linking.
								</p>
							</div>
							<div className="process-step">
								<h3 className="step-title"><span>4.</span>On-page Optimization</h3>
								<p className="step-description">
									We perform our on-page optimizations once we've identified opportunities and action items from our audit. Implementations often vary on a page-by-basis, but generally include updates to title tags, meta descriptions, open graph data, headings, and the overall copy of the page to create a shareable pages that aligns with keyword intent.
								</p>
							</div>
							<div className="process-step">
								<h3 className="step-title"><span>5.</span>Reporting</h3>
								<p className="step-description">
									Upon completing optimizations, we provide reporting to show the impact of our efforts, and determine next steps for the website.
								</p>
							</div>
						</div>

						<h2 className="section-title text-left mb-8">FAQs</h2>
						<div className="accordion aximo-accordion-wrap" id="seo-accordion">
							<div className="accordion-item">
								<h3 className="accordion-header">
									<button
										className="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#faq-1"
									>
										What Does On-page Optimization Include?
									</button>
								</h3>
								<div
									id="faq-1"
									className="accordion-collapse collapse show"
									data-bs-parent="#seo-accordion"
								>
									<div className="accordion-body">
										Our optimizations include tracking setup and complete page-level optimization. This includes a deliverable audit, HTML optimization, schema markup, and several other on-page techniques that we like to keep a secret. Think of it as a winning recipe, and we don't want anyone else to know it 🙂
									</div>
								</div>
							</div>

							<div className="accordion-item">
								<h3 className="accordion-header">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#faq-2"
									>
										Do You Provide Reporting?
									</button>
								</h3>
								<div
									id="faq-2"
									className="accordion-collapse collapse"
									data-bs-parent="#seo-accordion"
								>
									<div className="accordion-body">
										Our on-page services are a one-time optimization where we audit and implement our recommendations. We provide you with a dashboard that details monthly reporting (including the impact of our efforts).
									</div>
								</div>
							</div>

							<div className="accordion-item">
								<h3 className="accordion-header">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#faq-3"
									>
										How Long Does It Take To See Results?
									</button>
								</h3>
								<div
									id="faq-3"
									className="accordion-collapse collapse"
									data-bs-parent="#seo-accordion"
								>
									<div className="accordion-body">
										Results are typically seen within 30 days after our on-page optimizations are made. This is in addition to a 30-day on-boarding process and an additional 30 days of implementation.
									</div>
								</div>
							</div>

							<div className="accordion-item">
								<h3 className="accordion-header">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#faq-4"
									>
										Can You Guarantee Results?
									</button>
								</h3>
								<div
									id="faq-4"
									className="accordion-collapse collapse"
									data-bs-parent="#seo-accordion"
								>
									<div className="accordion-body">
										I cannot guarantee results because I did not engineer Google's on-page algorithms. What I do guarantee is that I use a proven process that continues to generate positive results for a large number of clients.
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>

				<div className="testimonials-section">
					<h2 className="section-title text-center">Success Stories</h2>
					<div className="testimonials-grid">
						{testimonials.map((testimonial, index) => (
							<motion.div 
								key={index}
								className="testimonial-box"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 + index * 0.1 }}
							>
								<div className="quote-icon">
									<span className="neon-text">"</span>
								</div>
								<p className="testimonial-quote">{testimonial.quote}</p>
								<div className="testimonial-author">
									<h4 className="author-name">{testimonial.author}</h4>
									<p className="author-business">{testimonial.business}</p>
									<p className="testimonial-results neon-text">{testimonial.results}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchEngineOptimization; 