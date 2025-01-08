import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaPaintBrush, FaMobile, FaRocket, FaCode } from "react-icons/fa";
import BreadCrumb from "../../components/common/Breadcrumb";
import "./WebDesign.css";

function WebDesign() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const processSteps = [
		{
			icon: <FaPaintBrush />,
			description: "Create stunning, conversion-focused designs that capture your brand's essence. Our designs blend aesthetics with psychology to drive user engagement and actions."
		},
		{
			icon: <FaMobile />,
			description: "Build responsive websites that look perfect on every device. From mobile phones to large desktops, your site will provide a seamless experience everywhere."
		},
		{
			icon: <FaCode />,
			description: "Develop with clean, optimized code that ensures fast loading speeds and smooth performance. We follow best practices for SEO and accessibility."
		},
		{
			icon: <FaRocket />,
			description: "Launch with confidence using our comprehensive testing and optimization process. Your site will be ready to convert visitors into customers from day one."
		}
	];

	const testimonials = [
		{
			quote: "The new website completely transformed our online presence. The modern design and intuitive user experience have significantly increased our conversion rates. Our customers constantly praise how easy it is to navigate and find what they need.",
			author: "Sarah Mitchell",
			business: "Luxury Realty Group",
			results: "286% increase in lead generation"
		},
		{
			quote: "Their attention to detail and focus on user experience is exceptional. The website they designed not only looks stunning but has dramatically improved our online sales. The mobile experience is particularly impressive.",
			author: "David Chen",
			business: "Artisan Electronics",
			results: "194% boost in mobile conversions"
		}
	];

	return (
		<div className="local-lead-page">
			<BreadCrumb title="Web Design" />
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
							Web Design
						</motion.span>
						<motion.span
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.8 }}
						>
							& Development
						</motion.span>
					</motion.h1>

					<motion.p
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="hero-description mt-8 mb-20 mx-auto"
					>
						Transform your online presence with a stunning, high-performance website. We create modern, conversion-focused designs that turn visitors into customers and elevate your brand above the competition.
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

export default WebDesign; 