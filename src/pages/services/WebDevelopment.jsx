import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { FaCode, FaBolt, FaShieldAlt, FaTools, FaDatabase, FaCloud } from "react-icons/fa";
import BreadCrumb from "../../components/common/Breadcrumb";
import ServicesSection from "../../components/services/ServicesSection";
import "./WebDevelopment.css";

const PROCESS_STEPS = [
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

const FAQS = [
	{
		question: "What technologies do you use for web development?",
		answer: "We utilize modern, industry-leading technologies including React, Node.js, Next.js, and other cutting-edge frameworks. Our tech stack is carefully chosen based on your project's specific needs, ensuring optimal performance, scalability, and maintainability."
	},
	{
		question: "How long does it take to build a website?",
		answer: "The timeline varies depending on the project's complexity. A basic website might take 4-6 weeks, while more complex web applications can take 3-6 months. We provide detailed timelines during our initial consultation based on your specific requirements and features needed."
	},
	{
		question: "Do you provide ongoing maintenance and support?",
		answer: "Yes, we offer comprehensive maintenance and support packages. This includes regular updates, security patches, performance monitoring, and technical support. We ensure your website stays secure, up-to-date, and performs optimally."
	},
	{
		question: "Will my website be mobile-friendly?",
		answer: "Absolutely! We follow a mobile-first approach in our development process. All websites we build are fully responsive and optimized for all devices - from smartphones and tablets to desktop computers. This ensures an excellent user experience across all screen sizes."
	},
	{
		question: "What about website security?",
		answer: "Security is a top priority in our development process. We implement industry-standard security measures including SSL certificates, secure authentication systems, data encryption, and protection against common vulnerabilities. Regular security audits and updates are also part of our maintenance services."
	},
	{
		question: "Can you help with hosting and domain setup?",
		answer: "Yes, we provide complete hosting and domain management services. We can help you choose the best hosting solution for your needs, handle the technical setup, and ensure your website is properly deployed and maintained. We also assist with domain registration and DNS management if needed."
	}
];

const TESTIMONIALS = [
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

function WebDevelopment() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
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

				<div className="grid-container mb-20">
					{PROCESS_STEPS.map((step, index) => (
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

				<ServicesSection 
					subtitle="What is included in our web development services?"
					steps={[
						{
							id: 1,
							title: "Full-Stack Development",
							description: "Digital Lift excels in full-stack web development, crafting robust solutions that seamlessly integrate front-end and back-end technologies. Our expert developers leverage modern frameworks and best practices to build scalable, responsive web applications that deliver exceptional user experiences while maintaining robust server-side functionality."
						},
						{
							id: 2,
							title: "API Development & Integration",
							description: "We specialize in creating and integrating powerful APIs that enhance your web application's capabilities. Whether it's developing RESTful APIs, implementing GraphQL, or integrating third-party services, our team ensures smooth data flow and seamless connectivity across your digital ecosystem."
						},
						{
							id: 3,
							title: "Performance Optimization",
							description: "Our performance optimization services focus on maximizing your web application's speed and efficiency. We implement advanced caching strategies, optimize database queries, minimize load times, and ensure your application runs smoothly across all devices and platforms."
						},
						{
							id: 4,
							title: "DevOps & Deployment",
							description: "Digital Lift provides comprehensive DevOps solutions, including automated CI/CD pipelines, containerization, and cloud deployment strategies. We ensure your web applications are deployed efficiently, maintained securely, and scaled effectively to meet growing demands."
						}
					]}
				/>

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

				<div className="testimonials-section">
					<h2 className="section-title text-center">Success Stories</h2>
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

export default WebDevelopment; 