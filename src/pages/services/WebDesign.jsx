import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {  FaChevronDown } from "react-icons/fa";
import BreadCrumb from "../../components/common/Breadcrumb";
import ServicesSection from "../../components/services/ServicesSection";
import WebDesignHero from "../../assets/images/portfolio/Professional-Website-Design.jpeg";
import ResponsiveDesign from "../../assets/images/portfolio/Responsive-web-development.jpeg";
import WebsiteRedesign from "../../assets/images/portfolio/website-redesig-and-optimization.jpeg";
import CustomDesign from "../../assets/images/portfolio/custom-website-design.jpeg";
import "./WebDesign.css";

const FAQS = [
	{
		id: 1,
		question: "How long does it take to design and launch a website with your services?",
		answer: "The timeline for website design varies based on the project's complexity and your specific requirements. Typically, we aim to complete a website within 4 to 8 weeks. However, we can provide a more accurate estimate after discussing your project in detail."
	},
	{
		id: 2,
		question: "Can you redesign our existing website to improve its performance and aesthetics?",
		answer: "Absolutely! We offer website redesign services to enhance the look, functionality, and user experience of your existing site. We'll work closely with you to understand your goals and implement improvements that align with your brand and objectives."
	},
	{
		id: 3,
		question: "Do your web design services include ongoing maintenance and updates?",
		answer: "Yes, we offer ongoing maintenance and support packages to keep your website running smoothly. We provide regular updates, security checks, and content changes as needed, ensuring your website remains up-to-date, secure, and competitive."
	},
	{
		id: 4,
		question: "Can you optimize our website for search engines (SEO)?",
		answer: "Yes, we offer SEO optimization as part of our web design services. We follow best practices to structure your website for search engines, optimize page load times, and ensure content is SEO-friendly. This helps improve your site's visibility in search engine results, driving more organic traffic to your site."
	}
];

const TESTIMONIALS = [
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

function WebDesign() {
	const [activeFaq, setActiveFaq] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	 
 
	const toggleFaq = (id) => {
		setActiveFaq(activeFaq === id ? null : id);
	};

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
				 
					</motion.h1>

					<motion.div
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.8 }}
						className="text-left mb-20 max-w-4xl mx-auto"
					>
						<div className="content-section">
							<div className="text-content">
								<h2 className="section-title text-left mb-8">Professional Website Design</h2>
								<p className="service-description mb-8">
									Elevate your small business with Digital Lift's professional website design services. Our team of experienced designers and developers works closely with you to create a visually appealing, user-friendly, and conversion-focused website that represents your brand with precision. We believe that a well-crafted website is a powerful tool for attracting and retaining customers.
								</p>
								<p className="service-description mb-12 mt-4">
									By combining creativity with functionality, we ensure that your website not only looks great but also performs flawlessly across all devices. Whether you need a brand-new website or want to revamp your existing one, our experts are here to turn your vision into a digital reality that drives growth and engagement.
								</p>
							</div>
							<div className="image-content">
								<img src={WebDesignHero} alt="Professional Web Design Workspace" className="section-image" />
							</div>
						</div>

						<div className="content-section reverse">
							<div className="text-content">
								<h2 className="section-title text-left mb-8">Responsive Web Development</h2>
								<p className="service-description mb-8">
									In today's mobile-first world, it's essential to have a website that adapts seamlessly to various screen sizes and devices. Digital Lift specializes in responsive web development, ensuring that your website looks and functions flawlessly on desktops, tablets, and smartphones. Our skilled developers use the latest technologies and best practices to create a responsive design that enhances the user experience and helps you reach a broader audience.
								</p>
								<p className="service-description mb-12 mt-4">
									With mobile traffic on the rise, a responsive website is no longer an option but a necessity. Trust us to make your website responsive, providing your visitors with a consistent and enjoyable browsing experience across all platforms.
								</p>
							</div>
							<div className="image-content">
								<img src={ResponsiveDesign} alt="Responsive Web Design Across Devices" className="section-image" />
							</div>
						</div>

						<div className="content-section">
							<div className="text-content">
								<h2 className="section-title text-left mb-8">Website Redesign and Optimization</h2>
								<p className="service-description mb-8">
								Is your current website falling short of expectations or in need of a modern makeover? Dalton Digital’s website redesign and optimization services can breathe new life into your online presence. We analyze your existing website’s performance, identifying areas for improvement in terms of design, functionality, and user experience. Our team then meticulously redesigns and optimizes your website, focusing on aesthetics, navigation, and speed. The result is a refreshed and highly efficient website that not only looks great but also drives better engagement and conversions.
								</p>
								<p className="service-description mb-12 mt-4">
								Whether you want to enhance your site’s aesthetics, improve user experience, or boost its search engine rankings, our experts have you covered. Let us transform your website into a powerful digital asset that yields tangible results.
								</p>
							</div>
							<div className="image-content">
								<img src={WebsiteRedesign} alt="Professional Web Design Workspace" className="section-image" />
							</div>
						</div>

						<div className="content-section reverse">
							<div className="text-content">
								<h2 className="section-title text-left mb-8">Custom Website Design</h2>
								<p className="service-description mb-8">
									At Digital Lift, we recognize that every business is unique, and your website should reflect that individuality. Our custom website design services are crafted to align with your brand's identity and goals. We start by understanding your business, target audience, and objectives, allowing us to create a bespoke online presence that stands out in a crowded digital landscape.
								</p>
								<p className="service-description mb-12 mt-4">
									Our talented designers and developers work collaboratively to produce a visually stunning and highly functional website that captures the essence of your brand. With our custom solutions, you'll leave a lasting impression on your visitors and establish a strong online presence that resonates with your audience.
								</p>
							</div>
							<div className="image-content">
								<img src={CustomDesign} alt="Custom Website Design Process" className="section-image" />
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Web Design Features Grid */}
				<div className="success-metrics-section my-20">
					<div className="text-center">
						<motion.h2 
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								className="section-title neon-text mx-auto"
								style={{ textDecoration: 'none', borderBottom: 'none' }}
							>
								Web Design
							</motion.h2>
					</div>
						
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="section-subtitle text-center mb-16 text-white"
						style={{ fontSize: '1.5rem', marginTop: '1rem' }}
					>
					We provide expert web design services tailored to your brand, delivering visually stunning, user-friendly websites that captivate audiences and drive business growth.
					</motion.h3>

					<div className="grid-container">
						<motion.div 
							className="process-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
						>
							<h3 className="metric-title neon-text">Compelling Visual Designs</h3>
							<p className="process-description">
								Create engaging experiences that keep visitors interested and reflect your brand identity.
							</p>
						</motion.div>

						<motion.div 
							className="process-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<h3 className="metric-title neon-text">Enhanced User Experience</h3>
							<p className="process-description">
								Easy navigation and intuitive design that guides visitors through your website effortlessly.
							</p>
						</motion.div>

						<motion.div 
							className="process-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
						>
							<h3 className="metric-title neon-text">Built-in SEO</h3>
							<p className="process-description">
								Search engine optimization integrated from the ground up for higher visibility online.
							</p>
						</motion.div>

						<motion.div 
							className="process-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							<h3 className="metric-title neon-text">Mobile-Friendly Design</h3>
							<p className="process-description">
								Responsive layouts that adapt perfectly to all devices and screen sizes.
							</p>
						</motion.div>

						<motion.div 
							className="process-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 }}
						>
							<h3 className="metric-title neon-text">Conversion-Focused Elements</h3>
							<p className="process-description">
								Strategic placement of elements designed to turn visitors into leads and customers.
							</p>
						</motion.div>

						<motion.div 
							className="process-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8 }}
						>
							<h3 className="metric-title neon-text">Ongoing Support</h3>
							<p className="process-description">
								Continuous maintenance and updates to ensure your website stays current and secure.
							</p>
						</motion.div>
					</div>
				</div>

				<ServicesSection 
					subtitle="What is included in our web design services?"
					steps={[
						{
							id: 1,
							title: "Custom Website Design",
							description: "Digital Lift creates unique, visually stunning websites that capture your brand's essence. Our designers combine modern aesthetics with user-centric principles to craft engaging interfaces that resonate with your target audience. Each design is tailored to reflect your brand identity while ensuring optimal user experience."
						},
						{
							id: 2,
							title: "Responsive Design",
							description: "We ensure your website looks and functions flawlessly across all devices and screen sizes. Our responsive design approach guarantees that your site maintains its visual appeal and functionality whether viewed on desktop, tablet, or mobile devices, providing a consistent user experience across all platforms."
						},
						{
							id: 3,
							title: "UI/UX Design",
							description: "Our UI/UX design process focuses on creating intuitive, user-friendly interfaces that guide visitors effortlessly through your website. We conduct thorough user research and implement proven design principles to ensure your site not only looks beautiful but also delivers an exceptional user experience."
						},
						{
							id: 4,
							title: "Brand Integration",
							description: "Digital Lift seamlessly integrates your brand elements into the website design, ensuring consistency across all digital touchpoints. From color schemes and typography to imagery and messaging, we maintain your brand identity while enhancing its digital presence."
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
						What makes our web design services so effective?
					</motion.h3>

					<div className="metrics-grid">
						<motion.div 
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
						>
							<h3 className="metric-title neon-text">Strategic Approach</h3>
							<p className="metric-description">
								Our web design services are effective due to our strategic approach. We prioritize user experience, align with your business goals, and create custom solutions that drive results.
							</p>
						</motion.div>

						<motion.div 
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<h3 className="metric-title neon-text">Expert Team</h3>
							<p className="metric-description">
								Our effectiveness lies in our experienced team. With a diverse skill set and creative minds, we deliver high-quality web designs that captivate audiences and achieve business objectives.
							</p>
						</motion.div>

						<motion.div 
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
						>
							<h3 className="metric-title neon-text">Continuous Improvement</h3>
							<p className="metric-description">
								We maintain effectiveness through ongoing enhancements, staying updated with industry trends and cutting-edge technologies to ensure your website remains competitive.
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
						Why web design can bring in the numbers
					</motion.h3>

					<div className="stats-grid">
						<motion.div 
							className="stat-box"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.3 }}
						>
							<h3 className="stat-number">50%</h3>
							<p className="stat-description">
								Our web design service optimizes websites for lightning-fast performance, reducing load times by half. Delight your visitors with quicker access to your content.
							</p>
						</motion.div>

						<motion.div 
							className="stat-box"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.4 }}
						>
							<h3 className="stat-number">35%</h3>
							<p className="stat-description">
								Transform your website with our web design expertise, leading to a 35% increase in conversion rates. Drive more sales and capture your audience effectively.
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
								Our web designs prioritize mobile-friendliness, ensuring that over 80% of users have a seamless experience on smartphones and tablets. Stay ahead in the mobile-first era.
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
						{FAQS.map((faq) => (
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

export default WebDesign; 