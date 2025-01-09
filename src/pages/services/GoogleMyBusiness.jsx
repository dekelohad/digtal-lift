import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaChartLine, FaStar, FaComments } from "react-icons/fa";
import BreadCrumb from "../../components/common/Breadcrumb";
import "./GoogleMyBusiness.css";

function GoogleMyBusiness() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const processSteps = [
		{
			icon: <FaMapMarkedAlt />,
			description: "Dominate local search with an optimized Google Business Profile. We enhance your visibility to capture high-intent local customers actively searching for your services."
		},
		{
			icon: <FaStar />,
			description: "Build trust with review management and response strategies. Turn happy customers into powerful advocates and handle feedback professionally to showcase your excellence."
		},
		{
			icon: <FaComments />,
			description: "Engage customers with strategic post updates and Q&A management. Keep your profile active and informative with content that drives engagement and conversions."
		},
		{
			icon: <FaChartLine />,
			description: "Track performance with advanced analytics. Monitor customer actions, search queries, and engagement metrics to continuously optimize your local presence."
		}
	];

	const testimonials = [
		{
			quote: "Our local visibility exploded after they optimized our Google Business Profile. We went from barely showing up in local searches to dominating the map pack. The increase in customer calls and direction requests has been incredible.",
			author: "Michael Rodriguez",
			business: "Premier Auto Service",
			results: "312% increase in local visibility"
		},
		{
			quote: "They transformed our Google presence completely. Their review management strategy helped us build incredible social proof, and their posting strategy keeps our profile fresh and engaging. We're now the go-to choice in our area.",
			author: "Jennifer Chen",
			business: "Lotus Wellness Spa",
			results: "275% more customer interactions"
		}
	];

	return (
		<div className="local-lead-page">
			<BreadCrumb title="Google My Business" />
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
							Google My Business
						</motion.span>
						<motion.span
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.8 }}
						>
							Profile Management
						</motion.span>
					</motion.h1>

					<motion.p
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="hero-description mt-8 mb-20 mx-auto"
					>
						Transform your local presence with a perfectly optimized Google Business Profile. We help you stand out in local search results, engage with customers effectively, and turn online visibility into real business growth.
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

				<div className="metrics-section">
					<h2 className="section-title text-center">Key Benefits</h2>
					<div className="metrics-grid">
						<motion.div
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
						>
							<span className="metric-number">78%</span>
							<span className="metric-label">of Local Searches Result in Store Visits</span>
						</motion.div>
						<motion.div
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
						>
							<span className="metric-number">2.7x</span>
							<span className="metric-label">More Likely to Be Considered Reputable</span>
						</motion.div>
						<motion.div
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<span className="metric-number">70%</span>
							<span className="metric-label">Higher Conversion Rate for Local Searches</span>
						</motion.div>
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
			</div>
		</div>
	);
}

export default GoogleMyBusiness; 