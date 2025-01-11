import { motion } from "framer-motion";
import { useState } from "react";
import BreadCrumb from "../../components/common/Breadcrumb";
import ServicesSection from "../../components/services/ServicesSection";
import OnPageSEOCaseStudy from "../../assets/images/portfolio/on-page-seo-case-study.webp";
import "./SearchEngineOptimization.css";

const Testimonials = [
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

function SearchEngineOptimization() {
	const [isImageModalOpen, setIsImageModalOpen] = useState(false);

 

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

						<ServicesSection 
							title="What is included in our search engine optimization services?"
							steps={[
								{
									id: 1,
									title: "Competition Analysis",
									description: "We begin with a thorough analysis of your market position and competitors. Our team conducts comprehensive research to identify your competitors' strengths and weaknesses, uncovering opportunities for your business to stand out. We examine their keyword strategies, content quality, backlink profiles, and overall online presence.\n\nThis analysis helps us understand what strategies are working in your industry and where there are gaps that we can exploit. We look at both direct and indirect competitors, analyzing their website structure, content strategy, and social media presence to build a complete picture of the competitive landscape.\n\nThe insights gained from this analysis form the foundation of our SEO strategy, ensuring that our recommendations are data-driven and tailored to your specific market conditions."
								},
								{
									id: 2,
									title: "Technical SEO Audit",
									description: "Our technical SEO audit is a deep dive into your website's infrastructure and performance. We examine every aspect that could impact your search engine rankings, from site speed and mobile responsiveness to crawlability and indexation issues.\n\nWe analyze your website's technical structure, including URL architecture, XML sitemaps, robots.txt configuration, and internal linking structure. Our team identifies and prioritizes technical issues that could be holding back your search performance.\n\nThe audit also includes a detailed analysis of your site's loading speed, mobile usability, and Core Web Vitals - factors that directly impact both search rankings and user experience. We provide clear recommendations for improvements, prioritized by their potential impact on your search visibility."
								},
								{
									id: 3,
									title: "Content Strategy & Optimization",
									description: "Content is the cornerstone of successful SEO. We develop a comprehensive content strategy that aligns with your business goals and target audience's search intent. Our approach combines data-driven keyword research with engaging, valuable content that converts.\n\nWe analyze your existing content, identifying gaps and opportunities for improvement. Our team conducts extensive keyword research to understand what your target audience is searching for and how they're searching for it. This research informs our content recommendations, ensuring that every piece of content serves a strategic purpose.\n\nOur optimization process includes improving existing content and creating new content that targets valuable keywords while maintaining natural, engaging writing that resonates with your audience. We focus on creating content that not only ranks well but also drives conversions."
								},
								{
									id: 4,
									title: "Link Building & Authority Building",
									description: "Building your website's authority is crucial for long-term SEO success. Our link building strategy focuses on acquiring high-quality backlinks from relevant, authoritative websites in your industry. We use white-hat techniques that ensure sustainable growth in your site's authority.\n\nOur approach includes digital PR, content outreach, and relationship building with industry influencers and publications. We identify opportunities for guest posting, resource link building, and broken link building that can drive valuable referral traffic while boosting your search rankings.\n\nWe also focus on local SEO strategies, including citation building and local link acquisition, to improve your visibility in local search results. Our team monitors your backlink profile and competitors' links to identify new opportunities and ensure your link building efforts stay ahead of the competition."
								}
							]}
						/>

			{/* Success Metrics Section */}
			<div className="success-metrics-section my-20">
					<div className="text-center">
						<motion.h2 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="section-title neon-text mx-auto"
							style={{ textDecoration: 'none', borderBottom: 'none' }}
						>
							Creating Success
						</motion.h2>
					</div>
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="section-subtitle text-center mb-16"
					>
						What makes our search engine optimization services so effective?
					</motion.h3>

					<div className="metrics-grid">
						<motion.div 
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
						>
							<h3 className="metric-title neon-text">Deep Understanding of Your Business Goals</h3>
							<p className="metric-description">
							At Digital Lift, we prioritize a deep understanding of our clients' business goals, because it's the compass that guides our strategies, ensuring their journey to success is purposeful and effective.
							</p>
						</motion.div>

						<motion.div 
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<h3 className="metric-title neon-text">Tailored Strategies for Targeted Results</h3>
							<p className="metric-description">
							We tailor digital marketing strategies to achieve targeted results. By precision and customization, we ensure every effort aligns with our clients' objectives, driving success where it matters most.
							</p>
						</motion.div>

						<motion.div 
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
						>
							<h3 className="metric-title neon-text">Relentless Application of the Fundamentals</h3>
							<p className="metric-description">
							The relentless application of SEO fundamentals forms the foundation for sustained revenue growth. Consistency in these principles ensures long-term success by consistently attracting and converting customers.
							</p>
						</motion.div>
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
						{Testimonials.map((testimonial, index) => (
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