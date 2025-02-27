import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import BreadCrumb from "../../components/common/Breadcrumb";
import ImageModal from "../../components/common/ImageModal";
import InsightsSearches from "../../assets/images/portfolio/gmb-insightssearches-2.webp";
import InsightsViews from "../../assets/images/portfolio/gmb-insightsviews.webp";
import "./GoogleMyBusiness.css";
import { Helmet } from 'react-helmet-async';
import FAQ from '../../components/contact/FAQ';
import Testmionals from '../../components/common/Testimonials';
 
const FAQS = [
	{
		question: "What's included in the monthly management service?",
		answer: "Our monthly management service includes regular posts, photo updates, review monitoring and responses, Q&A management, performance tracking, competitor monitoring, and ongoing optimization adjustments. We also provide monthly reports detailing your profile's performance and improvements."
	},
	{
		question: "How often do you update my profile?",
		answer: "We make weekly updates to your profile, including new posts, photo updates, and responding to reviews. We also perform monthly audits to identify new optimization opportunities and track performance metrics."
	},
	{
		question: "Can I cancel the management service anytime?",
		answer: "Yes, our management service is month-to-month with no long-term contracts required. We believe in earning your business each month through results and excellent service."
	},
	{
		question: "Do you handle review responses?",
		answer: "Yes, we provide professional review response services for both positive and negative reviews. We can either draft responses for your approval or handle them directly based on your preference."
	},
	{
		question: "What kind of reporting do you provide?",
		answer: "We provide detailed monthly reports that include metrics such as profile views, customer actions (calls, direction requests, website visits), photo views, review statistics, and ranking improvements. We also include recommendations for further improvements."
	}
];

const TESTIMONIALS = [
	{
		quote: "Digital Lift has been managing our Google Business Profile for over a year now, and the results speak for themselves. Their consistent posting, photo updates, and review management have kept us at the top of local search results. The monthly performance reports are incredibly detailed, showing us exactly how our visibility has improved.",
		author: "James Sullivan",
		business: "Sullivan Remodeling",
		results: "Maintained top 3 position for 12+ months"
	},
	{
		quote: "Having Digital Lift manage our Google Business Profile has been a game-changer. They respond to reviews promptly, keep our photos fresh, and their weekly posts keep our profile engaging. Their proactive approach to profile management has significantly increased our customer engagement and lead quality.",
		author: "Richard Parker",
		business: "Parker's Custom Carpentry",
		results: "110% increase in customer calls year-over-year"
	}
];


function GoogleMyBusinessManagement() {
	const [selectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="local-lead-page">
			<Helmet>
				<title>Google Business Profile Management Service | Stay Ahead of Competition</title>
				<meta
					name="description"
					content="Keep your Google Business Profile optimized with our ongoing management service. Weekly updates, review monitoring, and continuous optimization to maintain top local rankings."
				/>
			</Helmet>
			<BreadCrumb title="Google Business Profile Management" />
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
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.5, duration: 0.8 }}
							className="neon-text title-line"
						>
							Management Service
						</motion.div>
					</motion.h1>

					<div className="setup-content">
						<p className="service-description">
							Our Google Business Profile management service provides ongoing optimization and maintenance of your business profile. We handle all aspects of your profile's upkeep while continuously implementing strategies to improve your local visibility.
						</p>
						<p className="service-description">
							Let us handle the day-to-day management of your profile while you focus on running your business. Our team ensures your profile stays fresh, engaging, and optimized for maximum local visibility.
						</p>

						<div className="results-image-container">
							<h3 className="subsection-title">Track Your Success with Detailed Insights</h3>
							<div style={{ 
								display: 'grid', 
								gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
								gap: '2rem', 
								marginBottom: '2rem' 
							}}>
								<div>
									<h4 style={{ color: '#BBFF00', marginBottom: '1rem', fontSize: '1.5rem' }}>Profile Views Growth</h4>
									<img 
										src={InsightsViews}
										alt="Google Business Profile profile views insights showing growth"
										className="results-image"
										onClick={() => setSelectedImage({
											src: InsightsViews,
											alt: "Google Business Profile profile views insights showing growth"
										})}
										style={{ cursor: 'pointer' }}
									/>
								</div>
								<div>
									<h4 style={{ color: '#BBFF00', marginBottom: '1rem', fontSize: '1.5rem' }}>Search Performance</h4>
									<img 
										src={InsightsSearches}
										alt="Google Business Profile search performance insights"
										className="results-image"
										onClick={() => setSelectedImage({
											src: InsightsSearches,
											alt: "Google Business Profile search performance insights"
										})}
										style={{ cursor: 'pointer' }}
									/>
								</div>
							</div>
						</div>

						<ImageModal 
							isOpen={!!selectedImage}
							onClose={() => setSelectedImage(null)}
							imageSrc={selectedImage?.src}
							altText={selectedImage?.alt}
						/>

						<h3 className="subsection-title">What's included in our management service</h3>
						<p className="service-description">
							Our comprehensive management service includes:
						</p>
						<ul className="service-list">
							<li>Weekly content updates</li>
							<li>Regular photo uploads</li>
							<li>Review monitoring and responses</li>
							<li>Q&A management</li>
							<li>Competitor tracking</li>
							<li>Performance monitoring</li>
							<li>Monthly optimization adjustments</li>
							<li>Product and service updates</li>
							<li>Special offer creation</li>
							<li>Event promotion</li>
							<li>Local citation management</li>
							<li>Monthly performance reports</li>
							<li>Strategy recommendations</li>
							<li>Review generation campaigns</li>
							<li>Crisis management support</li>
							<li>Seasonal optimization</li>
						</ul>
						<p className="service-description">
							Our management service ensures your profile remains active, engaging, and optimized for maximum visibility in local search results. We continuously monitor performance and make adjustments to improve your local rankings.
						</p>

						{/* FAQ Section */}
						<FAQ FAQS ={FAQS}/>
						<Testmionals TESTIMONIALS ={TESTIMONIALS}/>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default GoogleMyBusinessManagement; 