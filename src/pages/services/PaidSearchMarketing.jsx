import { useEffect } from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../../components/common/Breadcrumb";
import WebDesignHero from "../../assets/images/portfolio/team.jpg";
import ResponsiveDesign from "../../assets/images/portfolio/google-experts.png";
import ServicesSection from "../../components/services/ServicesSection";
import "./PaidSearchMarketing.css";
import { Helmet } from 'react-helmet-async';
import FAQ from '../../components/contact/FAQ';
import Testmionals from '../../components/common/Testimonials';
 
const FAQS = [
    {
        id: 1,
        question: "What is paid search?",
        answer: "Paid search is a digital marketing strategy that involves online ads that appear at the top of search engine results pages (SERPs). Paid search ads typically look similar to organic search listings but have a label that distinguishes them as ads."
    },
    {
        id: 2,
        question: "What are paid search management services?",
        answer: "With paid search management services, you can expect a dedicated team of experts who will meticulously review and analyze your campaigns, ensuring that they align with your business objectives. Through continuous optimization, they will fine-tune your advertisements to maximize their effectiveness, reaching the right audience at the right time."
    },
    {
        id: 3,
        question: "How does paid search work?",
        answer: "When it comes to paid search ads, Google Ads serves as a prime example of how the process works. Google Ads allows advertisers to bid on specific keywords they want their ads to appear for. When a user conducts a search on Google, the platform uses various factors such as keywords, ad settings, bids, and ad quality score to determine which ads to display."
    },
    {
        id: 4,
        question: "When should you use paid search?",
        answer: "Paid search can indeed be a valuable addition to your marketing strategy for several reasons: Audience Research, Precise Targeting, Quick Results, Bottom-of-the-Funnel Leads, Supplementing Organic Search Results. By leveraging the advantages of paid search, businesses can effectively target their audience, generate qualified leads, achieve faster results, and enhance their overall online visibility and conversion rates."
    }
];


const TESTIMONIALS = [
    {
        quote: "Digital Lift's PPC management has transformed our roofing business. Their strategic approach to Google Ads helped us target homeowners in need of roof repairs and replacements. The quality of leads and conversion rates have exceeded our expectations.",
        author: "Michael Roberts",
        business: "Roberts Roofing",
        results: "247% increase in qualified leads from Google Ads"
    },
    {
        quote: "Working with Digital Lift on our paid search campaigns has been a game-changer. Their expertise in Google Ads and attention to detail helped us reach more homeowners looking for basement renovations and optimize our ad spend effectively.",
        author: "Michael Brown",
        business: "Wilson Basement",
        results: "68% reduction in cost per acquisition"
    }
];


function PaidSearchMarketing() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
	return (
		<div className="local-lead-page">
			<Helmet>
				<title>PPC & Paid Search Marketing | Convert Clicks into Customers</title>
				<meta
					name="description"
					content="Turn your ad spend into revenue with our data-driven PPC management. Our proven paid search strategies deliver qualified leads and measurable ROI. Get more customers, not just clicks."
				/>
			</Helmet>
			<BreadCrumb title="Paid Search Marketing" />
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
					Paid Search Marketing
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
								<h2 className="section-title section-title-mobile text-left mb-8">Marketing + Conversion Optimization</h2>
								<p className="service-description mb-8">
								At Digital Lift, we understand that successful paid search campaigns require more than just driving traffic to your website. While other agencies focus solely on getting your ads to appear on Google, we take a comprehensive approach that combines strategic ad placement with conversion rate optimization.
								</p>
								<p className="service-description mb-12 mt-4">
								Our dual-focused strategy ensures that not only do we get qualified visitors to your website, but we also optimize your landing pages to convert those visitors into leads and customers. By continuously testing and improving both your ads and landing pages, we help you achieve higher conversion rates and better ROI from your ad spend.
								</p>
							</div>
							<div className="image-content">
								<img src={WebDesignHero} alt="Lead Generation Solutions" className="section-image" />
							</div>
						</div>

						<div className="content-section reverse">
							<div className="text-content">
								<h2 className="section-title section-title-mobile text-left mb-8">Real Google Ads professionals</h2>
								<p className="service-description mb-8">
								At Digital Lift, our team consists of certified Google Ads specialists who bring years of expertise in creating and managing successful paid search campaigns. We don't just manage campaigns; we architect comprehensive strategies that align with your business objectives and maximize your advertising investment.
								</p>
								<p className="service-description mb-12 mt-4">
								Our data-driven approach combines advanced targeting capabilities with continuous optimization to ensure your campaigns perform at their peak. Whether you're looking to increase leads, boost sales, or expand your market reach, our team has the expertise to help you achieve measurable results through strategic paid search advertising.
								</p>
							</div>
							<div className="image-content">
								<img src={ResponsiveDesign} alt="Targeted Local Lead Generation" className="section-image" />
							</div>
						</div>
  
					</motion.div>
				</motion.div>

				{/* ROI Section */}
				<div className="success-metrics-section my-20">
					<div className="text-center">
						<motion.h2 
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="section-title section-title-mobile neon-text mx-auto"
							style={{ textDecoration: 'none', borderBottom: 'none' }}
						>
							ROI-Driven paid search optimization
						</motion.h2>
					</div>
				 

                    <motion.h3
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="section-subtitle text-center mb-16 text-white"
						style={{ fontSize: '1.5rem', marginTop: '1rem' }}
					>
						Our relationship with you relies on getting results, and paid search marketing results are measured in ROI. Each and every day, our primary focus is building ROI by interpreting real data and creating campaigns that convert.
					</motion.h3>

					<div className="grid-container" style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
						gap: '2rem',
						width: '100%',
						maxWidth: '1200px',
						margin: '3rem auto 0',
						marginTop: '4rem'
					}}>
						<motion.div 
							className="process-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
						>
							<h3 className="metric-title neon-text">Keyword and competitor research</h3>
							<p className="process-description">
								Deep analysis of high-performing keywords and competitor strategies to position your campaigns for success.
							</p>
						</motion.div>

						<motion.div 
							className="process-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<h3 className="metric-title neon-text">Ads optimized for keywords</h3>
							<p className="process-description">
								Strategic ad creation focused on your highest-performing keywords to maximize campaign effectiveness.
							</p>
						</motion.div>

						<motion.div 
							className="process-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
						>
							<h3 className="metric-title neon-text">Negative keyword pruning</h3>
							<p className="process-description">
								Continuous refinement of negative keywords to eliminate wasteful spending and improve campaign efficiency.
							</p>
						</motion.div>

						<motion.div 
							className="process-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							<h3 className="metric-title neon-text">Ad copy optimization</h3>
							<p className="process-description">
								Data-driven refinement of ad copy to improve click-through rates and conversion performance.
							</p>
						</motion.div>

						<motion.div 
							className="process-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 }}
						>
							<h3 className="metric-title neon-text">Landing page optimization</h3>
							<p className="process-description">
								Continuous testing and improvement of landing pages to maximize conversion rates from ad traffic.
							</p>
						</motion.div>

						<motion.div 
							className="process-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8 }}
						>
							<h3 className="metric-title neon-text">Performance monitoring</h3>
							<p className="process-description">
								Comprehensive tracking and analysis of key metrics to ensure optimal campaign performance and ROI.
							</p>
						</motion.div>
					</div>
				</div>

				{/* Services Steps Section */}
				<ServicesSection 
					subtitle="What is included in our paid search marketing services?"
					steps={[
						{
							id: 1,
							title: "PPC audit services",
							description: "Digital Lift stands as a trusted partner in the realm of PPC advertising, offering comprehensive PPC audit services that are instrumental in elevating your digital marketing strategy. Our seasoned experts delve deep into your existing PPC campaigns, meticulously assessing factors like ad performance, budget allocation, keyword relevancy, and audience targeting."
						},
						{
							id: 2,
							title: "Remarketing services",
							description: "At Digital Lift, we specialize in helping you harness the full potential of remarketing, particularly through platforms like Google Ads. With Google Ads, you gain the ability to track the traffic to specific pages on your website and deliver targeted ads to those users who have visited those pages."
						},
						{
							id: 3,
							title: "Geofencing ad services",
							description: "Digital Lift is here to provide you with comprehensive support in harnessing the potential of geofencing, ensuring that your ad campaigns are optimized for maximum impact. Our team of experts will assist you in identifying the ideal outer limits for your geofences and seamlessly integrate them into your Google Ads strategy."
						},
						{
							id: 4,
							title: "Ad performance monitoring",
							description: "Digital Lift offers robust Google Ads performance monitoring to help businesses achieve peak revenue. We understand that effective campaign management goes beyond setup; it's about continuous optimization. Our team meticulously tracks key metrics, adjusts bidding strategies, and refines ad copy to ensure your campaigns are finely tuned for maximum impact."
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
						What makes our paid search management services so effective?
					</motion.h3>

					<div className="metrics-grid">
						<motion.div 
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
						>
							<h3 className="metric-title neon-text">Match search intent at every touchpoint</h3>
							<p className="metric-description">
								Picking the right keywords will only get you so far. We understand how to match the search intent of your target keywords with ad copy, CTAs, and landing pages that turn clicks into ROI.
							</p>
						</motion.div>

						<motion.div 
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<h3 className="metric-title neon-text">Experienced PPC management</h3>
							<p className="metric-description">
								How do you know what works if you've never gotten results before? Our paid search managers have years of experience managing successful campaigns in a variety of industries. And we have the happy clients to back it up.
							</p>
						</motion.div>

						<motion.div 
							className="metric-box"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
						>
							<h3 className="metric-title neon-text">Google Ads Experts</h3>
							<p className="metric-description">
								Digital Lift excels in Google Ads, boasting expertise that drives results. Our certified team harnesses the full potential of Google's advertising platform to elevate your campaigns.
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
						Why paid search ads can bring in the numbers
					</motion.h3>

					<div className="stats-grid">
						<motion.div 
							className="stat-box"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.3 }}
						>
							<h3 className="stat-number">49%</h3>
							<p className="stat-description">
								Paid search ads account for approximately 49% of all clicks on search engine results pages.
								<br />
								(Source: WordStream)
							</p>
						</motion.div>

						<motion.div 
							className="stat-box"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.4 }}
						>
							<h3 className="stat-number">100%</h3>
							<p className="stat-description">
								On average, businesses make $2 in revenue for every $1 spent on Google Ads.
								<br />
								(Source: Google Economic Impact Report)
							</p>
						</motion.div>

						<motion.div 
							className="stat-box"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.5 }}
						>
							<h3 className="stat-number">52%</h3>
							<p className="stat-description">
								Mobile devices contribute to 52% of paid search ad clicks.
								<br />
								(Source: Statista)
							</p>
						</motion.div>
					</div>
				</div>

				<FAQ FAQS ={FAQS}/>
				<Testmionals TESTIMONIALS ={TESTIMONIALS}/>
			</div>
		</div>
	);
}

export default PaidSearchMarketing; 