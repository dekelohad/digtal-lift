import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import BreadCrumb from "../../components/common/Breadcrumb";
import ServicesSection from "../../components/services/ServicesSection";
import leadsImage from "../../assets/images/portfolio/get-leads.jpeg";
import LeadGenerationImage from "../../assets/images/portfolio/lead-generation.jpeg";
import LeadMagentImage from "../../assets/images/portfolio/lead-magent.jpeg";
import TargetedLocalLeadGenerationImage from "../../assets/images/portfolio/target-local-lead.jpeg";
import "./LocalLeadGeneration.css";
import { Helmet } from 'react-helmet-async';

const FAQs = [
	{
		id: 1,
		question: "How quickly can I expect to see results from your local lead generation services?",
		answer: "Results vary based on factors such as your industry and campaign scope, but many clients see an increase in leads within the first few weeks of starting their campaign."
	},
	{
		id: 2,
		question: "What sets your local lead generation services apart from others?",
		answer: "Our services are tailored to your specific needs and market, ensuring that you get the most out of your lead generation efforts. We focus on quality leads that drive real results for your business."
	},
	{
		id: 3,
		question: "Do I need a website to benefit from your local lead generation services?",
		answer: "No, we can help you generate leads even if you don't have a website. Our strategies are designed to reach your target audience through various channels, including social media and local directories."
	},
	{
		id: 4,
		question: "How do you measure the success of your local lead generation campaigns?",
		answer: "We use a variety of metrics, such as lead volume, conversion rates, and return on investment, to measure the success of our campaigns. We provide regular reports to keep you informed of your campaign's performance."
	}
];

const TESTIMONIALS = [
	{
		quote: "Our local customer base exploded after implementing their strategies. We went from struggling to get leads to having a consistent flow of high-quality local customers.",
		author: "Sarah Johnson",
		business: "Riverside Home Services",
		results: "385% increase in local leads within 3 months"
	},
	{
		quote: "The lead generation strategies transformed our business. We're now booking more concrete projects than ever before, and our service area has expanded significantly.",
		author: "Mike Anderson",
		business: "Anderson Concrete Solutions",
		results: "Tripled project bookings in 6 months"
	}
];

function LocalLeadGeneration() {
	const [activeFaq, setActiveFaq] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const toggleFaq = (id) => {
		setActiveFaq(activeFaq === id ? null : id);
	};

	return (
		<div className="local-lead-page">
			<Helmet>
				<title>Local Lead Generation | Dominate Your Service Area with Qualified Leads</title>
				<meta
					name="description"
					content="Transform your local presence into a lead-generating machine. Our proven strategies target and capture high-intent customers in your service area, delivering 15x ROI for local businesses."
				/>
			</Helmet>
			<BreadCrumb title="Local Lead Generation" />
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
					Local Lead Generation
						</motion.span>
				 
					</motion.h1>

					<motion.div
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.8 }}
						className="text-left mb-20 max-w-4xl mx-auto"
					>
						<div className="content-section">
							<div className="text-content">
								<h2 className="section-title text-left mb-8">Lead Generation Solutions for Contractors</h2>
								<p className="service-description mb-8">
								Digital Lift specializes in lead generation for contractors, offering comprehensive solutions to connect businesses with potential customers in their local area. Even if you don’t have a website or marketing materials, our team can help you from the ground up, driving real leads that translate into revenue. 
								</p>
								<p className="service-description mb-12 mt-4">
								We understand the unique challenges that contractors face in finding quality leads, which is why our approach is tailored to your specific market and needs. With our expertise, you can focus on delivering your services while we take care of bringing the right customers to you.
								</p>
							</div>
							<div className="image-content">
								<img src={leadsImage} alt="Lead Generation Solutions" className="section-image" />
							</div>
						</div>

						<div className="content-section reverse">
							<div className="text-content">
								<h2 className="section-title text-left mb-8">Targeted Local Lead Generation Services</h2>
								<p className="service-description mb-8">
								Digital Lift provides targeted local lead generation services for contractors, designed to help you reach your ideal customers in your area. Whether you're just starting out or looking to expand your business, our team can assist you in getting the leads you need to grow. We specialize in driving leads for contractors who may not have their own website or marketing materials, ensuring that you can still reach your target market effectively. 
								</p>
								<p className="service-description mb-12 mt-4">
								Our proven strategies and techniques have helped numerous contractors boost their revenue and expand their businesses. Partner with Dalton Digital and start generating quality leads for your contracting business today.	
								</p>
							</div>
							<div className="image-content">
								<img src={LeadMagentImage} alt="Targeted Local Lead Generation" className="section-image" />
							</div>
						</div>

						<div className="content-section">
							<div className="text-content">
								<h2 className="section-title text-left mb-8">Efficient Lead Generation Strategies for Contractors</h2>
								<p className="service-description mb-8">
								Digital Lift offers efficient lead generation strategies for contractors, focusing on driving in leads that result in revenue. Our team understands that not every contractor has a website or marketing materials, which is why we specialize in helping you from the ground up. By leveraging our expertise in local lead generation, you can attract the right customers to your business, even without a strong online presence. 
								</p>
								<p className="service-description mb-12 mt-4">
								Our goal is to make lead generation easy and effective for contractors, allowing you to focus on what you do best. With Digital Lift, you can count on getting the leads you need to succeed in your market.
								</p>
							</div>
							<div className="image-content">
								<img src={LeadGenerationImage} alt="Lead Generation Solutions" className="section-image" />
							</div>
						</div>


						<div className="content-section reverse">
							<div className="text-content">
								<h2 className="section-title text-left mb-8">Comprehensive Lead Generation Solutions</h2>
								<p className="service-description mb-8">
								Digital Lift offers comprehensive lead generation services for contractors, providing everything you need to connect with potential customers in your area. Whether you're a new contractor looking to establish your business or an experienced professional seeking to expand your reach, our team can help. We specialize in driving leads for contractors who may not have their own website or marketing materials, ensuring that you can still compete in today's market. 
								</p>
								<p className="service-description mb-12 mt-4">
								With our proven strategies and dedicated support, you can attract high-quality leads that turn into revenue. Partner with Digital Lift and take your contracting business to the next level with our lead generation services.
								</p>
							</div>
							<div className="image-content">
								<img src={TargetedLocalLeadGenerationImage} alt="Targeted Local Lead Generation" className="section-image" />
							</div>
						</div>

					</motion.div>
				</motion.div>

				<ServicesSection 
					subtitle="What is included in our local lead generation services?"
					steps={[
						{
							id: 1,
							title: "Targeted Lead Generation",
							description: "Our local lead generation services employ sophisticated targeting techniques to pinpoint and engage with your most promising local prospects. By focusing on specific demographics, interests, and geographic locations, we ensure that your message reaches those most likely to convert, maximizing your return on investment and minimizing wasted resources.Our data-driven approach allows us to continually refine and optimize your campaigns for optimal performance, delivering a steady stream of high-quality leads to your business."
						},
						{
							id: 2,
							title: "Customized Strategies",
							description: "We recognize that each business has its own unique goals, challenges, and target audience. That's why our local lead generation services are fully tailored to meet your specific needs. Whether you're a small local business looking to increase foot traffic or a regional service provider aiming to expand your customer base, we'll develop a personalized strategy that aligns with your objectives. Our team of experts will work closely with you to understand your business inside and out, ensuring that our strategies are perfectly aligned with your brand identity and marketing goals."
						},
						{
							id: 3,
							title: "Comprehensive Campaign Management",
							description: "Our local lead generation services encompass every aspect of campaign management, from initial strategy development to ongoing monitoring and optimization. We handle all the heavy lifting, including ad creation, audience targeting, budget management, and performance tracking, so you can focus on running your business. Our team of experienced professionals is dedicated to ensuring that your campaigns run smoothly and efficiently, making adjustments on the fly to maximize results. With our comprehensive campaign management services, you can rest easy knowing that your lead generation efforts are in good hands."
						},
						{
							id: 4,
							title: "Ongoing Support and Reporting",
							description: "We believe in full transparency and accountability, which is why we provide ongoing support and detailed reporting throughout your campaign. Our team is always available to answer any questions you may have and provide guidance on how to optimize your campaigns for better results. We also provide regular reports that give you a clear view of your campaign's performance, including key metrics such as lead volume, conversion rates, and return on investment. With our support and reporting services, you’ll always be in the loop and able to make informed decisions about your lead generation strategy."
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
						What makes our local lead generation services so effective?
					</motion.h3>

					<div className="metrics-grid">
						<motion.div 
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
						>
							<h3 className="metric-title neon-text">Targeted Approach</h3>
							<p className="metric-description">
							Our services focus on reaching potential customers in your specific local area, increasing the chances of conversions by delivering your message to those most likely to be interested.
							</p>
						</motion.div>

						<motion.div 
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<h3 className="metric-title neon-text">Customized Strategies</h3>
							<p className="metric-description">
							We tailor our lead generation strategies to align with your business goals and target audience, ensuring that our efforts are aligned with your unique needs.
							</p>
						</motion.div>

						<motion.div 
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
						>
							<h3 className="metric-title neon-text">Data-Driven Decisions</h3>
							<p className="metric-description">
							We analyze data and metrics to continually optimize your campaigns, making adjustments based on real-time insights to maximize performance and ROI.
							</p>
						</motion.div>
					</div>
				</div>



				{/* Stats Section */}
				<div className="stats-section my-20">
					<div className="text-center">
						<motion.h2 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="section-title neon-text mx-auto"
							style={{ textDecoration: 'none', borderBottom: 'none' }}
						>
							The proof is in the numbers
						</motion.h2>
					</div>
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="section-subtitle text-center mb-16"
					>
						Why local lead generation can bring in the numbers
					</motion.h3>

					<div className="stats-grid">
						<motion.div 
							className="stat-box"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.3 }}
						>
							<h3 className="stat-number">67%</h3>
							<p className="stat-description">
								Blogging has proven to be a highly effective tool for lead generation. Businesses that actively maintain a blog experience a 67% increase in lead generation compared to those that do not. Additionally, the presence of a blog can amplify website traffic by up to 500%
								<br />
								(Source: MarketSplash)
							</p>
						</motion.div>

						<motion.div 
							className="stat-box"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.4 }}
						>
							<h3 className="stat-number">21%</h3>
							<p className="stat-description">
								Moz's 2023 Local Search Ranking Factors report found that local search results with a high number of local citations see a 21% increase in local search visibility and conversion rates.
								<br />
								(Source: Moz)
							</p>
						</motion.div>

						<motion.div 
							className="stat-box"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.5 }}
						>
							<h3 className="stat-number">80%</h3>
							<p className="stat-description">
								Around 80% of marketers who use marketing automation tools see an increase in leads, and 77% convert more leads using automation than those who do not. This highlights the importance of integrating automation tools to streamline lead generation and nurturing processes.
								<br />
								(Source: WebFX)
							</p>
							</motion.div>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="faq-section my-20">
					<div className="text-center">
						<motion.h2 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="section-title neon-text mx-auto"
							style={{ textDecoration: 'none', borderBottom: 'none' }}
						>
							Frequently Asked Questions
						</motion.h2>
					</div>

					<div className="faq-container">
						{FAQs.map((faq) => (
							<motion.div 
								key={faq.id}
								className="faq-item"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: faq.id * 0.1 }}
							>
								<div 
									className={`faq-question ${activeFaq === faq.id ? 'active' : ''}`}
									onClick={() => toggleFaq(faq.id)}
								>
									<h3>{faq.question}</h3>
									<FaChevronDown className="faq-icon" />
								</div>
								<motion.div 
									className="faq-answer"
									initial={false}
									animate={{ 
										height: activeFaq === faq.id ? 'auto' : 0,
										opacity: activeFaq === faq.id ? 1 : 0
									}}
									transition={{ duration: 0.3 }}
								>
									<p>{faq.answer}</p>
								</motion.div>
							</motion.div>
						))}
					</div>
							</div>

				{/* Success Stories Section - Now as the final section */}
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
							{TESTIMONIALS.map((testimonial, index) => (
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

export default LocalLeadGeneration; 