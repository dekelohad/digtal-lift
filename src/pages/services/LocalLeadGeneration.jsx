import { motion } from "framer-motion";
import { FaBullseye, FaRocket, FaChartLine, FaClipboardCheck } from "react-icons/fa";
import "./LocalLeadGeneration.css";

function LocalLeadGeneration() {
	const processSteps = [
		{
			icon: <FaBullseye />,
			description: "In-depth analysis of your local market, competitors, and target audience to identify the best opportunities in your area."
		},
		{
			icon: <FaRocket />,
			description: "Optimize your Google Business Profile, local directories, and create location-specific landing pages for maximum visibility."
		},
		{
			icon: <FaChartLine />,
			description: "Deploy targeted local campaigns across multiple channels to attract high-quality leads from your service area."
		},
		{
			icon: <FaClipboardCheck />,
			description: "Scale your local presence and expand into new neighborhoods while maintaining high conversion rates."
		}
	];

	const leadTypes = [
		{
			title: "Phone Calls",
			description: "Direct phone inquiries from potential customers actively searching for your services. Our call tracking system ensures every lead is captured and properly attributed, while our qualification process ensures high-quality conversations."
		},
		{
			title: "Form Submissions",
			description: "Qualified leads through optimized contact forms and landing pages. We design high-converting forms and implement advanced tracking to capture detailed information while maintaining a smooth user experience."
		},
		{
			title: "Direct Messages",
			description: "Instant messages from interested prospects on various platforms. We monitor and optimize messaging across multiple channels including website chat, social media, and SMS to provide quick responses and higher conversion rates."
		},
		{
			title: "Appointment Bookings",
			description: "Direct schedule bookings from pre-qualified local customers. Our automated booking system integrates with your calendar and includes reminder sequences to reduce no-shows and maximize your closing rate."
		}
	];

	const benefits = [
		{
			title: "Hyperlocal Targeting",
			description: "Reach customers within specific neighborhoods, zip codes, or service areas. Our advanced targeting ensures your marketing budget is spent on the most relevant local audience, maximizing your ROI."
		},
		{
			title: "Intent-Based Marketing",
			description: "Connect with customers actively searching for your services right now. We target high-intent keywords and search patterns to capture customers at the exact moment they're ready to buy."
		},
		{
			title: "Multi-Channel Presence",
			description: "Dominate local search, maps, directories, and social platforms. Create a strong, consistent brand presence across all major platforms where your local customers are searching."
		},
		{
			title: "Data-Driven Optimization",
			description: "Continuously improve your campaigns with real-time data analysis and optimization. We track every interaction to refine targeting and maximize your conversion rates."
		}
	];

	const testimonials = [
		{
			quote: "Our local customer base exploded after implementing their strategies. We went from struggling to get leads to having a consistent flow of high-quality local customers.",
			author: "Sarah Johnson",
			business: "Riverside Home Services",
			results: "385% increase in local leads within 3 months"
		},
		{
			quote: "The local targeting is incredible. We're now the go-to service provider in our area, and our cost per lead has dropped dramatically.",
			author: "Michael Chen",
			business: "Elite Dental Care",
			results: "Doubled monthly revenue from local patients"
		}
	];

	return (
		<div className="local-lead-page">
			<div className="container mx-auto px-6 pt-32">
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
						Drive Quality Leads with{" "}
						<span className="neon-text">Local Marketing</span>
					</motion.h1>

					<motion.p
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="hero-description mt-8 mb-20 mx-auto"
					>
						Transform your local presence and generate high-quality leads from your target area. Our advanced local marketing strategies connect you with customers actively searching for your services in your specific location.
					</motion.p>
				</motion.div>

				<div className="grid-container">
					{processSteps.map((step, index) => (
						<motion.div
							key={index}
							initial={{ y: 30, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
							className="process-box"
						>
							<div className="neon-icon">
								{step.icon}
							</div>
							<p className="process-description">{step.description}</p>
						</motion.div>
					))}
				</div>

				<motion.div 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 0.8 }}
					className="content-section"
				>
					<h2 className="section-title text-center">Types of Leads We Generate</h2>
					<div className="lead-types-grid">
						{leadTypes.map((type, index) => (
							<motion.div 
								key={index} 
								className="info-box"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 + index * 0.1 }}
							>
								<h3 className="info-title">{type.title}</h3>
								<p className="info-description">{type.description}</p>
							</motion.div>
						))}
					</div>

					<h2 className="section-title text-center">Why Local Lead Generation?</h2>
					<div className="benefits-grid">
						{benefits.map((benefit, index) => (
							<motion.div 
								key={index} 
								className="info-box"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 + index * 0.1 }}
							>
								<h3 className="info-title">{benefit.title}</h3>
								<p className="info-description">{benefit.description}</p>
							</motion.div>
						))}
					</div>

					<div className="metrics-section">
						<h2 className="section-title text-center">Our Impact</h2>
						<div className="metrics-grid">
							<div className="metric-box">
								<span className="metric-number">247%</span>
								<span className="metric-label">Increase in Local Visibility</span>
							</div>
							<div className="metric-box">
								<span className="metric-number">5X</span>
								<span className="metric-label">More Local Leads</span>
							</div>
							<div className="metric-box">
								<span className="metric-number">89%</span>
								<span className="metric-label">Higher Conversion Rate</span>
							</div>
						</div>
					</div>

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
				</motion.div>
			</div>
		</div>
	);
}

export default LocalLeadGeneration; 