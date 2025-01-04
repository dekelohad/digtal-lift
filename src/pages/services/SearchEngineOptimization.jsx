import { useEffect } from "react";
import ServicePage from "../../components/services/ServicePage";

function SearchEngineOptimization() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const features = [
		{
			title: "Technical SEO Optimization",
			description: "Comprehensive site audits and optimization of technical elements to improve search engine crawlability and indexing",
			icon: "⚡"
		},
		{
			title: "Content Strategy",
			description: "Data-driven content planning and creation that targets high-value keywords and meets user intent",
			icon: "📝"
		},
		{
			title: "Link Building",
			description: "Strategic acquisition of high-quality backlinks from authoritative websites in your industry",
			icon: "🔗"
		},
		{
			title: "Local SEO",
			description: "Optimization for local search results to help your business dominate in your geographic area",
			icon: "📍"
		},
		{
			title: "Performance Tracking",
			description: "Detailed analytics and ranking reports to measure progress and ROI of your SEO campaign",
			icon: "📊"
		},
		{
			title: "Competitor Analysis",
			description: "In-depth analysis of competitor strategies to identify opportunities and stay ahead in search results",
			icon: "🔍"
		}
	];

	const benefits = [
		{
			title: "Sustainable Traffic Growth",
			description: "Build a steady stream of qualified organic traffic that continues to grow over time"
		},
		{
			title: "Higher Quality Leads",
			description: "Attract visitors actively searching for your products or services, resulting in better conversion rates"
		},
		{
			title: "Brand Authority",
			description: "Establish your brand as an industry leader through high search engine rankings and quality content"
		},
		{
			title: "Long-Term ROI",
			description: "Enjoy lasting results and continued traffic long after the initial optimization work"
		}
	];

	return (
		<ServicePage
			title="Search Engine Optimization"
			subtitle="Dominate Search Results & Drive Organic Growth"
			description="Elevate your online visibility with our comprehensive SEO services. We combine technical expertise, content strategy, and proven methodologies to help your business rank higher in search results and attract qualified organic traffic."
			features={features}
			benefits={benefits}
			ctaText="Boost Your Rankings"
			backgroundImage="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2662&auto=format&fit=crop"
		/>
	);
}

export default SearchEngineOptimization; 