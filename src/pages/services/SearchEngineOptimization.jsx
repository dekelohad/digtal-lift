import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaSearch, FaCode, FaLink, FaChartLine, FaBullseye, FaLightbulb, FaCogs } from "react-icons/fa";
import BreadCrumb from "../../components/common/Breadcrumb";
import OnPageSEOCaseStudy from "../../assets/images/portfolio/on-page-seo-case-study.webp";
import "./SearchEngineOptimization.css";

function SearchEngineOptimization() {
	const [isImageModalOpen, setIsImageModalOpen] = useState(false);
	const [activeStep, setActiveStep] = useState(1);

	const serviceSteps = [
		{
			id: 1,
			title: "Competition analysis",
			description: "One of the first things we'll do for your business is provide you with a full competition audit. In the audit, we'll evaluate every significant element of your positioning in your market and compile a report of what's working and what isn't. We'll analyze the competitive landscape for where your web presence is positioned compared to businesses in your area and make recommendations for how you can outrank them in search."
		},
		{
			id: 2,
			title: "Full SEO audit",
			description: "Digital Lift takes a comprehensive approach to helping our clients succeed in the digital landscape. Our process begins with a thorough SEO audit, encompassing both on-page and off-page aspects, aimed at assessing the current state of our client's web presence. This audit is the cornerstone of our strategy, as it provides us with valuable insights into their online ecosystem. We meticulously examine their website's technical structure, content quality, user experience, and keyword optimization to identify areas for improvement."
		},
		{
			id: 3,
			title: "Custom strategy creation and deployment",
			description: "Our approach to consulting with new clients is driven by a commitment to delivering tailored solutions for optimizing their web presence through search. We understand that each business is unique, with distinct goals, target audiences, and market dynamics. That's why, during our initial consultations, we invest time in getting to know our clients' specific needs and objectives. We believe that an effective SEO strategy should align closely with a company's core mission and values."
		},
		{
			id: 4,
			title: "Revenue generation",
			description: "The deployment of a meticulously crafted SEO strategy for our clients is more than just a digital optimization endeavor; it's a direct path to revenue generation. By securing high rankings in search results, our clients benefit from increased online visibility and exposure to a wider audience actively seeking their products or services. This heightened visibility not only attracts more organic traffic to their website but also translates into a greater number of calls and leads."
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

						<div className="services-steps-section my-20">
							<motion.h2 
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								className="section-title text-center mb-16 neon-text"
							>
								What is included in our search engine optimization services?
							</motion.h2>

							<div className="steps-container">
								<div className="steps-navigation">
									{serviceSteps.map((step) => (
										<motion.div
											key={step.id}
											className={`step-item ${activeStep === step.id ? 'active' : ''}`}
											onClick={() => setActiveStep(step.id)}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: step.id * 0.1 }}
										>
											<div className="step-number">{step.id}.</div>
											<div className="step-title">{step.title}</div>
										</motion.div>
									))}
								</div>

								<motion.div 
									className="step-content"
									key={activeStep}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
								>
									<h3 className="step-content-title">
										{serviceSteps[activeStep - 1].title}
									</h3>
									<p className="step-content-description">
										{serviceSteps[activeStep - 1].description}
									</p>
								</motion.div>
							</div>
						</div>

						<h2 className="section-title text-center mb-12 neon-text">Creating Success</h2>
						<h3 className="text-3xl text-white opacity-90 text-center mb-24">What makes our search engine optimization services so effective?</h3>
						
						<div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto px-4">
							<div className="stat-item bg-[#0c0c0c] p-8">
								<div className="icon-wrapper mb-8">
									<svg className="w-24 h-24 mx-auto" viewBox="0 0 24 24">
										<path
											d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
											className="fill-[#CCFF00]"
										/>
									</svg>
								</div>
								<div className="text-center">
									<h4 className="text-xl font-bold mb-4 text-white">Deep Understanding of Your Business Goals</h4>
									<p className="text-gray-300">
										At Digital Lift, we prioritize a deep understanding of our clients' business goals, because it's the compass that guides our strategies, ensuring their journey to success is purposeful and effective.
									</p>
								</div>
							</div>
							
							<div className="stat-item bg-[#0c0c0c] p-8">
								<div className="icon-wrapper mb-8">
									<svg className="w-24 h-24 mx-auto" viewBox="0 0 24 24">
										<path
											d="M7 2v11h3v9l7-12h-4l4-8H7zm4 4h3l-2 4h2l-3 5v-5H9V4h2v2z"
											className="fill-[#CCFF00]"
										/>
									</svg>
								</div>
								<div className="text-center">
									<h4 className="text-xl font-bold mb-4 text-white">Tailored Strategies for Targeted Results</h4>
									<p className="text-gray-300">
										We tailor digital marketing strategies to achieve targeted results. By precision and customization, we ensure every effort aligns with our clients' objectives, driving success where it matters most.
									</p>
								</div>
							</div>
							
							<div className="stat-item bg-[#0c0c0c] p-8">
								<div className="icon-wrapper mb-8">
									<svg className="w-24 h-24 mx-auto" viewBox="0 0 24 24">
										<path
											d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
											className="fill-[#CCFF00]"
										/>
									</svg>
								</div>
								<div className="text-center">
									<h4 className="text-xl font-bold mb-4 text-white">Relentless Application of the Fundamentals</h4>
									<p className="text-gray-300">
										The relentless application of SEO fundamentals forms the foundation for sustained revenue growth. Consistency in these principles ensures long-term success by consistently attracting and converting customers.
									</p>
								</div>
							</div>
						</div>

						<h2 className="section-title text-center mb-12 neon-text">The proof is in the numbers</h2>
						<h3 className="text-3xl text-white opacity-90 text-center mb-16">Why powerful SEO can bring in the numbers</h3>
						
						<div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto px-4">
							<div className="stat-item">
								<div className="stat-number">60%</div>
								<p className="service-description text-center">
									Small businesses that invest in SEO witness an average of a 60% increase in organic website traffic, which is essential for attracting potential customers (Source: Search Engine Journal).
								</p>
							</div>
							
							<div className="stat-item">
								<div className="stat-number">31%</div>
								<p className="service-description text-center">
									The top search result on Google's organic listings receives approximately 31.7% of clicks, emphasizing the importance of ranking high in search results for small businesses (Source: Advanced Web Ranking).
								</p>
							</div>
							
							<div className="stat-item">
								<div className="stat-number">72%</div>
								<p className="service-description text-center">
									72% of consumers who performed a local search visited a store within 5 miles, demonstrating the influence of local SEO strategies on driving foot traffic to small businesses (Source: HubSpot).
								</p>
							</div>
						</div>

						<h2 className="section-title text-center mb-16 neon-text">Frequently Asked Questions</h2>
						<div className="faq-container">
							<div className="faq-item">
								<button
									className="faq-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#faq-1"
								>
									What is SEO?
									<span className="faq-icon">+</span>
								</button>

								<div
									id="faq-1"
									className="faq-collapse collapse show"
									data-bs-parent="#seo-accordion"
								>
									<div className="faq-content">
										SEO, or Search Engine Optimization, is a set of strategies and practices aimed at improving a website's visibility and ranking on search engine results pages (SERPs). The primary goal of SEO is to increase organic (non-paid) traffic to a website. This is achieved by optimizing various aspects of a website, including its content, structure, and technical elements, to make it more attractive to search engines like Google, Bing, and others.
									</div>
								</div>
							</div>

							<div className="faq-item">
								<button
									className="faq-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#faq-2"
								>
									What are SEO services?
									<span className="faq-icon">+</span>
								</button>

								<div
									id="faq-2"
									className="faq-collapse collapse"
									data-bs-parent="#seo-accordion"
								>
									<div className="faq-content">
										Effective SEO involves keyword research, on-page optimization, off-page optimization (such as building high-quality backlinks), technical SEO (improving site speed and mobile-friendliness), and providing valuable content that meets user intent. SEO helps businesses and websites reach a wider audience, attract more visitors, and ultimately increase their online presence and revenue.
									</div>
								</div>
							</div>

							<div className="faq-item">
								<button
									className="faq-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#faq-3"
								>
									How does SEO generate revenue for small businesses?
									<span className="faq-icon">+</span>
								</button>

								<div
									id="faq-3"
									className="faq-collapse collapse"
									data-bs-parent="#seo-accordion"
								>
									<div className="faq-content">
										SEO generates revenue for small businesses by enhancing online visibility, attracting targeted organic traffic, and optimizing user experience. It fosters trust and credibility through high search engine rankings, resulting in higher conversion rates. Local SEO can drive foot traffic to physical stores, while cost-effective strategies offer a long-term growth approach. Small businesses benefit from SEO's ability to connect them with potential customers actively seeking their products or services, translating into increased revenue and sustained growth.
									</div>
								</div>
							</div>

							<div className="faq-item">
								<button
									className="faq-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#faq-4"
								>
									What should I expect for my business?
									<span className="faq-icon">+</span>
								</button>

								<div
									id="faq-4"
									className="faq-collapse collapse"
									data-bs-parent="#seo-accordion"
								>
									<div className="faq-content">
										Every business's SEO strategy is inherently unique, and success hinges on the careful tailoring of these strategies to align with specific revenue goals. While the timeline for achieving desired results may vary, business owners can anticipate tangible outcomes within the first 3 to 6 months of consistent SEO implementation. This period is typically marked by noticeable improvements in search engine rankings, increased organic traffic, and enhanced online visibility. By diligently adhering to SEO best practices over time, businesses can ensure their strategies evolve and adapt to changing market dynamics, ultimately driving sustainable growth and revenue generation in a manner that is both customized and effective.
									</div>
								</div>
							</div>

							<div className="faq-item">
								<button
									className="faq-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#faq-5"
								>
									What Does On-page Optimization Include?
									<span className="faq-icon">+</span>
								</button>

								<div
									id="faq-5"
									className="faq-collapse collapse"
									data-bs-parent="#seo-accordion"
								>
									<div className="faq-content">
										Our optimizations include tracking setup and complete page-level optimization. This includes a deliverable audit, HTML optimization, schema markup, and several other on-page techniques that we like to keep a secret. Think of it as a winning recipe, and we don't want anyone else to know it 🙂
									</div>
								</div>
							</div>

							<div className="faq-item">
								<button
									className="faq-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#faq-6"
								>
									Do You Provide Reporting?
									<span className="faq-icon">+</span>
								</button>

								<div
									id="faq-6"
									className="faq-collapse collapse"
									data-bs-parent="#seo-accordion"
								>
									<div className="faq-content">
										Our on-page services are a one-time optimization where we audit and implement our recommendations. We provide you with a dashboard that details monthly reporting (including the impact of our efforts).
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>

				<div className="testimonials-section mx-auto">
					<h2 className="section-title text-center mb-16 neon-text mx-auto">Success Stories</h2>
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