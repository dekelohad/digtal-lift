import { motion } from "framer-motion";
import { FaSearch, FaCode, FaLink, FaChartLine } from "react-icons/fa";
import BreadCrumb from "../../components/common/Breadcrumb";
import "./SearchEngineOptimization.css";

function SearchEngineOptimization() {
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
						Stop losing customers to your competitors. Our battle-tested SEO strategies don't just boost rankings – they transform your website into a 24/7 lead generation machine. We combine cutting-edge AI with proven tactics to deliver traffic that converts into paying customers.
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