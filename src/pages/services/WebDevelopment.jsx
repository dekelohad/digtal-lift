import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql } from "react-icons/si";
import BreadCrumb from "../../components/common/Breadcrumb";
import ServicesSection from "../../components/services/ServicesSection";
import "./WebDevelopment.css";
import { Helmet } from 'react-helmet-async';
import FAQ from '../../components/contact/FAQ';
import Testmionals from '../../components/common/Testimonials';
 
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

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3
		}
	}
};

const item = {
	hidden: { y: 20, opacity: 0 },
	show: { 
		y: 0, 
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: "easeOut"
		}
	}
};

function WebDevelopment() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
	return (
		<div className="web-dev-page">
			<Helmet>
				<title>Web Development Services | Full-Stack Solutions That Scale</title>
				<meta
					name="description"
					content="Transform your digital presence with our expert web development services. From React to Node.js, we build high-performance applications that load in under 2 seconds and scale to millions of users."
				/>
			</Helmet>
			<BreadCrumb title="Web Development" />
			<div className="container mx-auto px-4 pt-80">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-center"
				>
					<motion.h1 
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ 
							delay: 0.2, 
							duration: 1,
							type: "spring",
							stiffness: 100 
						}}
						className="hero-title"
					>
						<motion.span 
							className="neon-text"
							whileHover={{ 
								scale: 1.05,
								textShadow: "0 0 8px rgb(255,255,255)"
							}}
						>
							Web Development
						</motion.span>
					</motion.h1>

					<motion.p
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="hero-description"
					>
						We use battle-tested technologies that power some of the world's most successful websites
					</motion.p>
				</motion.div>

				<motion.div 
					className="web-solutions-section"
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: "easeOut" }}
				>
					<div className="solutions-grid">
						<motion.div 
							className="solutions-content"
							initial={{ x: -50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2, duration: 0.8 }}
						>
							<h2 className="solutions-title">Web Solutions</h2>
							<motion.ul 
								className="feature-list"
								variants={container}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true }}
							>
								{["Load in under 2 seconds for optimal user experience",
									"Scale automatically to handle millions of users",
									"Convert visitors into customers with data-driven UX",
									"Integrate seamlessly with your existing systems",
									"Maintain 99.9% uptime with robust infrastructure"].map((feature, index) => (
									<motion.li 
										key={index}
										variants={item}
									>
										{feature}
									</motion.li>
								))}
							</motion.ul>
						</motion.div>
						<motion.div 
							initial={{ x: 50, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4, duration: 0.8 }}
						>
							<motion.div 
								className="code-window"
								whileHover={{ 
									scale: 1.02,
									boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
								}}
								transition={{ duration: 0.2 }}
							>
								<div className="code-header">
									<span className="dot red"></span>
									<span className="dot yellow"></span>
									<span className="dot green"></span>
								</div>
								<div className="code-content">
									<pre>
										<code>
											{`// High-performance React components
const App = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Optimized data fetching
    fetchData();
  }, []);

  return (
    <Layout>
      <Header />
      <Main data={data} />
    </Layout>
  );
};`}
										</code>
									</pre>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</motion.div>

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

				<motion.div 
					className="tech-stack-section"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="section-title">
						<motion.span 
							className="gradient-text"
							whileHover={{ 
								scale: 1.1,
								textShadow: "0 0 8px rgba(255,255,255,0.5)"
							}}
						>
							Our
						</motion.span> Tech Stack
					</h2>
					<div className="tech-categories">
						<motion.div 
							className="tech-category"
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, duration: 0.8 }}
						>
							<h3 className="category-title">Frontend</h3>
							<div className="tech-boxes">
								<motion.div 
									className="tech-box"
									whileHover={{ 
										scale: 1.05,
										backgroundColor: "rgba(255, 255, 255, 0.1)",
										backdropFilter: "blur(10px)",
										boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
										border: "1px solid rgba(255, 255, 255, 0.18)",
										transition: { duration: 0.3, ease: "easeOut" }
									}}
								>
									<FaReact className="tech-icon" style={{ color: '#61DAFB' }} />
									<h4 className="tech-name">React</h4>
									<p className="tech-description">Modern UI library for building interactive interfaces</p>
								</motion.div>
								<motion.div 
									className="tech-box"
									whileHover={{ 
										scale: 1.05,
										backgroundColor: "rgba(255, 255, 255, 0.1)",
										backdropFilter: "blur(10px)",
										boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
										border: "1px solid rgba(255, 255, 255, 0.18)",
										transition: { duration: 0.3, ease: "easeOut" }
									}}
								>
									<SiTailwindcss className="tech-icon" style={{ color: '#38B2AC' }} />
									<h4 className="tech-name">Tailwind CSS</h4>
									<p className="tech-description">Utility-first CSS framework for rapid UI development</p>
								</motion.div>
							</div>
						</motion.div>

						<motion.div 
							className="tech-category"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.8 }}
						>
							<h3 className="category-title">Backend</h3>
							<div className="tech-boxes">
								<motion.div 
									className="tech-box"
									whileHover={{ 
										scale: 1.05,
										backgroundColor: "rgba(255, 255, 255, 0.1)",
										backdropFilter: "blur(10px)",
										boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
										border: "1px solid rgba(255, 255, 255, 0.18)",
										transition: { duration: 0.3, ease: "easeOut" }
									}}
								>
									<FaNodeJs className="tech-icon" style={{ color: '#68A063' }} />
									<h4 className="tech-name">Node.js</h4>
									<p className="tech-description">JavaScript runtime for scalable server applications</p>
								</motion.div>
								<motion.div 
									className="tech-box"
									whileHover={{ 
										scale: 1.05,
										backgroundColor: "rgba(255, 255, 255, 0.1)",
										backdropFilter: "blur(10px)",
										boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
										border: "1px solid rgba(255, 255, 255, 0.18)",
										transition: { duration: 0.3, ease: "easeOut" }
									}}
								>
									<SiPostgresql className="tech-icon" style={{ color: '#336791' }} />
									<h4 className="tech-name">PostgreSQL</h4>
									<p className="tech-description">Advanced open-source database</p>
								</motion.div>
							</div>
						</motion.div>

						<motion.div 
							className="tech-category"
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.6, duration: 0.8 }}
						>
							<h3 className="category-title">DevOps</h3>
							<div className="tech-boxes">
								<motion.div 
									className="tech-box"
									whileHover={{ 
										scale: 1.05,
										backgroundColor: "rgba(255, 255, 255, 0.1)",
										backdropFilter: "blur(10px)",
										boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
										border: "1px solid rgba(255, 255, 255, 0.18)",
										transition: { duration: 0.3, ease: "easeOut" }
									}}
								>
									<FaAws className="tech-icon" style={{ color: '#FF9900' }} />
									<h4 className="tech-name">AWS</h4>
									<p className="tech-description">Cloud infrastructure and services</p>
								</motion.div>
								<motion.div 
									className="tech-box"
									whileHover={{ 
										scale: 1.05,
										backgroundColor: "rgba(255, 255, 255, 0.1)",
										backdropFilter: "blur(10px)",
										boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
										border: "1px solid rgba(255, 255, 255, 0.18)",
										transition: { duration: 0.3, ease: "easeOut" }
									}}
								>
									<FaDocker className="tech-icon" style={{ color: '#2496ED' }} />
									<h4 className="tech-name">Docker</h4>
									<p className="tech-description">Container platform for easy deployment</p>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</motion.div>

				<FAQ FAQS = {FAQS}/>
				<Testmionals TESTIMONIALS ={TESTIMONIALS}/>
			</div>
		</div>
	);
}

export default WebDevelopment;