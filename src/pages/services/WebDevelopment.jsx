import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaBolt, FaShieldAlt, FaTools, FaDatabase, FaCloud } from "react-icons/fa";
import BreadCrumb from "../../components/common/Breadcrumb";
import "./WebDevelopment.css";

function WebDevelopment() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const processSteps = [
		{
			icon: <FaCode />,
			description: "Build scalable applications using cutting-edge technologies like React, Node.js, and Next.js. Our code is clean, maintainable, and future-proof."
		},
		{
			icon: <FaBolt />,
			description: "Optimize performance with advanced caching, lazy loading, and server-side rendering. Your application will load blazingly fast on any device."
		},
		{
			icon: <FaDatabase />,
			description: "Design efficient database architectures and APIs that handle complex data with ease. We ensure your data is secure, organized, and easily accessible."
		},
		{
			icon: <FaShieldAlt />,
			description: "Implement robust security measures and best practices to protect your application from vulnerabilities. Your users' data stays safe and private."
		},
		{
			icon: <FaTools />,
			description: "Provide continuous maintenance, updates, and support to keep your application running smoothly. We're here to help you grow and scale."
		},
		{
			icon: <FaCloud />,
			description: "Deploy your application to the cloud with automated CI/CD pipelines. Ensure high availability and seamless scaling across multiple regions."
		}
	];

	const testimonials = [
		{
			quote: "They transformed our legacy system into a modern, high-performance application. The new platform has dramatically improved our operational efficiency and user satisfaction. Their technical expertise and attention to detail were outstanding.",
			author: "Michael Zhang",
			business: "TechFlow Solutions",
			results: "432% increase in processing speed"
		},
		{
			quote: "The custom e-commerce platform they built has revolutionized our business. The integration with our existing systems was seamless, and the performance improvements have directly impacted our bottom line.",
			author: "Emma Rodriguez",
			business: "Global Commerce Inc",
			results: "317% boost in transaction volume"
		}
	];

	return (
		<div className="web-dev-page">
			<BreadCrumb title="Web Development" />
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
							Web Development
						</motion.span>
						<motion.span
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.8 }}
						>
							& Engineering
						</motion.span>
					</motion.h1>

					<motion.p
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="hero-description mt-8 mb-20 mx-auto"
					>
						Build powerful, scalable web applications that drive your business forward. Our expert developers combine cutting-edge technology with battle-tested practices to create solutions that perform and scale.
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

export default WebDevelopment; 