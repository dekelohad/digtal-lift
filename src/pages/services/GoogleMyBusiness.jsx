import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/common/Breadcrumb";
import GoogleMapsExample from "../../assets/images/portfolio/pi-attorney-tempe-3-pack.webp";
import "./GoogleMyBusiness.css";
import { Helmet } from 'react-helmet-async';

const SERVICES = [
	{
		title: "Google Business Profile Setup Service",
		description: "Our setup service helps business owners create & verify their business profile. This is designed for local business owners do not already have a Google Business Profile.",
		path: "/google-business-profile/setup"
	},
	{
		title: "Google Business Profile Optimization Service",
		description: "For business owners with an existing profile, our optimization services are designed to maximize your business's visibility by providing one-time optimizations to your profile.",
		path: "/google-business-profile/optimization"
	},
	{
		title: "Google Business Profile Management Service",
		description: "For ongoing optimizations and profile updates, our management services cover weekly updates, optimizations, and various uploads to make sure your profile is always up-to-date.",
		path: "/google-business-profile/management"
	}
];

 
function GoogleMyBusiness() {
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="local-lead-page">
			<Helmet>
				<title>Google Business Profile Services | Dominate Local Search Results</title>
				<meta
					name="description"
					content="Boost your local visibility with our expert Google Business Profile services. From setup to optimization and management, we've helped 100s of businesses achieve 10K+ local rankings."
				/>
			</Helmet>
			<BreadCrumb title="Google Business Profile" />
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
						style={{ color: "#BBFF00" }}
					>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.3, duration: 0.8 }}
							className="neon-text title-line"
						>
							Google
						</motion.div>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.8 }}
							className="neon-text title-line"
						>
							Business Profile
						</motion.div>
					</motion.h1>

					<motion.p
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="hero-description mt-8 mb-20 mx-auto"
					>
						Generate more visibility for your business with Google My Business (now called Google Business Profile). Our services focus on improving your business's rankings in Google's Local 3-Pack, Google Maps, and local organic results. Nearly all searches with local intent (such as those for products and services) display local results.
					</motion.p>

					<motion.div
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.55, duration: 0.8 }}
						className="google-maps-example mb-20"
					>
						<img 
							src={GoogleMapsExample}
							alt="Google Maps Search Results Example showing local business listings"
							className="google-maps-image"
						/>
					</motion.div>

					<motion.div
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className="text-left mb-20"
					>
						<h2 className="section-title mb-8" style={{ color: "#BBFF00", textShadow: "0 0 20px rgba(187, 255, 0, 0.3)" }}>About our Google Business Profile services</h2>
						<p className="service-description mb-6">
							We've optimized 100s of listings and have achieved over 10K+ rankings in Google for clients. Our successes have been a direct result of our services which include initial setup, optimization, and ongoing management. Our team of Local SEOs help support local business owners by improving the visibility of their business online.
						</p>
						<p className="service-description">
							Our Google Business Profile services help business owners get the most from their profile. Regardless of your type of business or budget, we can likely help you generate more visibility, traffic, and revenue.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="services-section-title">Our Services</h2>
						<p className="services-section-subtitle">
							Choose the service that best fits your business needs. Whether you're just starting out or looking to optimize your existing profile, we have a solution for you.
						</p>
					</motion.div>

					<div className="services-grid">
						{SERVICES.map((service, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="service-card"
							>
								<h3 className="service-card-title">{service.title}</h3>
								<p className="service-card-description">{service.description}</p>
								<button 
									className="learn-more-btn"
									onClick={() => navigate(service.path)}
								>
									Learn more →
								</button>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default GoogleMyBusiness; 