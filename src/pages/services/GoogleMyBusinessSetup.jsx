import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import BreadCrumb from "../../components/common/Breadcrumb";
import ImageModal from "../../components/common/ImageModal";
import PhaseIIOptimizations from "../../assets/images/portfolio/phase-ii-google-my-business-optimizations-3.webp";
import "./GoogleMyBusiness.css";
import { Helmet } from 'react-helmet-async';
import FAQ from '../../components/contact/FAQ';
import Testmionals from '../../components/common/Testimonials';
 
const FAQS = [
	{
		question: "How long does it take to set up my business profile?",
		answer: "Our Google Business Profiles setup service includes an onboarding process, which in addition to audits and action items takes 30-45 days to complete."
	},
	{
		question: "Can I just set up the profile myself?",
		answer: "Absolutely! In fact, I have a complete guide on how to setup Google Business Profile profile for those who want to take the DIY route. However, knowing exactly what is needed to generate visibility and grow your business with SEO can take some time to understand. And that's why we want to help… so you can focus on operations and high level strategy!"
	},
	{
		question: "Will setting up my profile get results?",
		answer: "Depending on your niche, you may or may not see results during the setup process. Ultimately, our goal is to get results. However, there are many limitations with our Google Business Profile setup services. For example, if you're a personal injury attorney that's just getting started in a large metro area, you're likely up against other law firms that have been around for decades. This means competitors have already gotten a significant head start on generating Google reviews, website optimizations, and likely have already created a well-known brand. If this is the case, we can still certainly help, provide recommendations on how to focus on easier keywords, and complete the setup of your business profile."
	},
	{
		question: "Who approves what gets published on my business profile?",
		answer: "We always seek to ensure client satisfaction, which means that our clients always have the final say. We're here to identify opportunities, and it's up to you if you run with them."
	},
	{
		question: "Can you help me get verified?",
		answer: "Yes, we help business owners get their Google Business Profile verified so that it can be found by potential customers. However, we strongly recommend that you follow Google's Guidelines for representing your business online."
	}
];

const TESTIMONIALS = [
	{
		quote: "Digital Lift's setup service was exactly what our new plumbing business needed. Within weeks of getting our profile properly set up and verified, we started appearing in local searches. The step-by-step guidance made the whole process seamless.",
		author: "Robert Martinez ",
		business: "Martinez Plumbing",
		results: "Started ranking in local searches within 2 weeks of setup"
	},
	{
		quote: "As a new HVAC contractor, I wasn't sure where to start with online presence. Digital Lift set up our Google Business Profile perfectly - complete with service areas, high-quality photos, and all the right categories. We got our first customer through Google Maps just days after verification.",
		author: "David Wilson",
		business: "Wilson Heating & Cooling",
		results: "Profile verified and optimized in under 48 hours"
	}
];

function GoogleMyBusinessSetup() {
	const [selectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="local-lead-page">
			<Helmet>
				<title>Google Business Profile Setup Service | Get Listed & Start Ranking</title>
				<meta
					name="description"
					content="Launch your local presence with our expert Google Business Profile setup service. We handle verification, optimization, and everything needed to get your business ranking in local searches."
				/>
			</Helmet>
			<BreadCrumb title="Google Business Profile Setup" />
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
							Setup Service
						</motion.div>
					</motion.h1>

					<div className="setup-content">
						<p className="service-description">
							Our Google Business Profile setup service offers local businesses the ability to create and optimize their Google Business Profile without having to go through the process themselves.
						</p>
						<p className="service-description">
							We've created and set up 100s of Google Business Profile listings (now called Google Business Profile) and have achieved over 10K+ local keyword rankings between clients and personal projects. Our streamlined service allows you to focus on your business while we focus on what we do best – search engine optimization.
						</p>

						<div className="results-image-container">
							<h3 className="subsection-title">Comprehensive Setup & Optimization</h3>
							<img 
								src={PhaseIIOptimizations}
								alt="Phase II Google Business Profile optimizations showing improved performance"
								className="results-image"
								onClick={() => setSelectedImage({
									src: PhaseIIOptimizations,
									alt: "Phase II Google Business Profile optimizations showing improved performance"
								})}
								style={{ cursor: 'pointer' }}
							/>
						</div>

						<ImageModal 
							isOpen={!!selectedImage}
							onClose={() => setSelectedImage(null)}
							imageSrc={selectedImage?.src}
							altText={selectedImage?.alt}
						/>

						<h3 className="subsection-title">What's included in our Google Business Profile setup service</h3>
						<p className="service-description">
							Our setup service walks through our optimization process from A-Z and includes the following:
						</p>
						<ul className="service-list">
							<li>Competitor audit</li>
							<li>Profile verification</li>
							<li>Name, address, phone number (NAP) optimization</li>
							<li>Primary & secondary business category optimization</li>
							<li>Addition of service areas (if applicable)</li>
							<li>Optimized product & service features</li>
							<li>Defined business attributes & other info</li>
							<li>Optimized business description</li>
							<li>Website URL optimization</li>
							<li>Schema markup (to feature social profiles)</li>
							<li>Logo upload</li>
							<li>Cover photo upload</li>
							<li>Interior & exterior photo uploads</li>
							<li>Team photo uploads</li>
							<li>First post / offer creation</li>
							<li>Actionable review generation strategy</li>
						</ul>
						<p className="service-description">
							Google Business Profile optimization is at the core of every Local SEO strategy. Our setup service has been used to increase local visibility, call volume, in-store visits, and revenue for 100s of local businesses.
						</p>

						<FAQ FAQS = {FAQS}/>
						<Testmionals TESTIMONIALS ={TESTIMONIALS}/>
			 
					 
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default GoogleMyBusinessSetup; 