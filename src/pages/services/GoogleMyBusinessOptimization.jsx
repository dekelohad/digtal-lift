import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import BreadCrumb from "../../components/common/Breadcrumb";
import ImageModal from "../../components/common/ImageModal";
import BeforeOptimization from "../../assets/images/portfolio/before-gmb-optimization-services-1.webp";
import AfterOptimization from "../../assets/images/portfolio/after-gmb-optimization-services-2.webp";
import "./GoogleMyBusiness.css";
import { Helmet } from 'react-helmet-async';
import FAQ from '../../components/contact/FAQ';
import Testmionals from '../../components/common/Testimonials';
 
const FAQS = [
	{
		question: "How long does it take to see results from optimization?",
		answer: "Results can vary depending on your market and competition. Generally, businesses start seeing improvements in visibility within 1-3 months after optimization, but significant results may take 3-6 months."
	},
	{
		question: "What makes your optimization service different?",
		answer: "Our optimization service is data-driven and comprehensive. We analyze your competitors, identify gaps in your current profile, and implement proven strategies that have worked for hundreds of our clients. We also provide detailed reports and recommendations for ongoing improvements."
	},
	{
		question: "Do you guarantee rankings?",
		answer: "While we can't guarantee specific rankings (as Google's algorithms are constantly changing), we guarantee that we'll implement all optimization best practices and provide detailed recommendations for maintaining and improving your profile's performance."
	},
	{
		question: "What happens after the optimization is complete?",
		answer: "After the initial optimization, we provide a detailed report of all changes made and recommendations for maintaining your profile's performance. We also offer ongoing management services if you'd like continuous support and optimization."
	},
	{
		question: "Will optimization help if I'm in a competitive market?",
		answer: "Yes! Optimization is especially important in competitive markets. While it may take longer to see results, proper optimization ensures you're competing on an even playing field and maximizing your profile's potential."
	}
];

const TESTIMONIALS = [
	{
		quote: "Digital Lift's optimization service transformed our Google Business Profile performance. Their team identified key optimization opportunities we were missing and implemented changes that made a real difference. The detailed monthly reports helped us understand exactly what was working.",
		author: "Thomas Anderson",
		business: "Anderson Roofing",
		results: "300% increase in profile views after 2 months"
	},
	{
		quote: "We were struggling to stand out in local search results until we started working with Digital Lift. Their optimization strategies, especially their approach to photos and posts, completely revitalized our profile. The increase in quality leads has been remarkable.",
		author: "Michael Reynolds",
		business: "Reynolds Electrical",
		results: "85% improvement in local search visibility"
	}
];


function GoogleMyBusinessOptimization() {
	const [selectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="local-lead-page">
			<Helmet>
				<title>Google Business Profile Optimization Service | Maximize Local Rankings</title>
				<meta
					name="description"
					content="Supercharge your existing Google Business Profile with our expert optimization service. We implement proven strategies that have helped hundreds of businesses improve their local rankings and visibility."
				/>
			</Helmet>
			<BreadCrumb title="Google Business Profile Optimization" />
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
							Optimization Service
						</motion.div>
					</motion.h1>

					<div className="setup-content">
						<p className="service-description">
							Our Google Business Profile optimization service is designed to maximize your business profile's visibility and performance in local search results. We implement proven strategies that have helped hundreds of businesses improve their local rankings.
						</p>
						<p className="service-description">
							Whether you're struggling to rank in your local market or want to maintain your competitive edge, our optimization service will ensure your profile is fully optimized for maximum visibility.
						</p>

						<div className="results-image-container">
							<h3 className="subsection-title">Real Results from Our Optimization Service</h3>
							<div className="optimization-grid">
								<div className="optimization-item">
									<h4 className="optimization-title">Before Optimization</h4>
									<img 
										src={BeforeOptimization}
										alt="Google Business Profile profile before optimization"
										className="results-image"
										onClick={() => setSelectedImage({
											src: BeforeOptimization,
											alt: "Google Business Profile profile before optimization"
										})}
									/>
								</div>
								<div className="optimization-item">
									<h4 className="optimization-title">After Optimization</h4>
									<img 
										src={AfterOptimization}
										alt="Google Business Profile profile after optimization"
										className="results-image"
										onClick={() => setSelectedImage({
											src: AfterOptimization,
											alt: "Google Business Profile profile after optimization"
										})}
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

						<h3 className="subsection-title">What's included in our optimization service</h3>
						<p className="service-description">
							Our comprehensive optimization service includes:
						</p>
						<ul className="service-list">
							<li>Comprehensive competitor analysis</li>
							<li>Keyword research and implementation</li>
							<li>Category optimization</li>
							<li>Business description optimization</li>
							<li>Photo optimization and geotagging</li>
							<li>Review response strategy</li>
							<li>Q&A optimization</li>
							<li>Service and product catalog optimization</li>
							<li>Local citation audit</li>
							<li>Website optimization recommendations</li>
							<li>Mobile optimization</li>
							<li>Performance tracking setup</li>
							<li>Custom reporting dashboard</li>
							<li>Local SEO strategy recommendations</li>
							<li>Content calendar for posts</li>
							<li>Review generation strategy</li>
						</ul>
						<p className="service-description">
							Each optimization is tailored to your specific business needs and market conditions. We focus on implementing strategies that will have the biggest impact on your local visibility and customer engagement.
						</p>

				<FAQ FAQS ={FAQS}/>
				<Testmionals TESTIMONIALS ={TESTIMONIALS}/>
			 
				</div>
				</motion.div>
			</div>
		</div>
	);
}

export default GoogleMyBusinessOptimization; 