import { FaChartLine, FaSearchLocation, FaUsers } from "react-icons/fa";
import ServicePage from "../../components/services/ServicePage";

function LocalLeadGeneration() {
	const pageData = {
		title: "Local Lead Generation",
		subtitle: "Drive More Local Customers to Your Business with Targeted Lead Generation Strategies",
		description: "Our local lead generation service helps businesses attract and convert local customers through targeted digital marketing strategies, optimized local presence, and data-driven campaigns.",
		features: [
			{
				icon: <FaSearchLocation size={20} style={{ color: '#000' }} />,
				title: "Local SEO Optimization",
				description: "Optimize your business for local search results to increase visibility in your target market area."
			},
			{
				icon: <FaUsers size={20} style={{ color: '#000' }} />,
				title: "Targeted Audience Reach",
				description: "Connect with potential customers in your local area through precise targeting and engagement strategies."
			},
			{
				icon: <FaChartLine size={20} style={{ color: '#000' }} />,
				title: "Performance Tracking",
				description: "Monitor and analyze campaign performance with detailed analytics and reporting."
			}
		],
		benefits: [
			{
				title: "Increased Local Visibility",
				description: "Improve your business's visibility in local search results and directories."
			},
			{
				title: "Quality Lead Generation",
				description: "Generate high-quality leads from customers in your target service area."
			},
			{
				title: "Better ROI",
				description: "Maximize your marketing budget with targeted campaigns that reach the right audience."
			},
			{
				title: "Competitive Edge",
				description: "Stand out from local competitors with optimized online presence and targeted marketing."
			}
		],
		ctaText: "Boost Your Local Presence",
		backgroundImage: "/src/assets/images/services/local-lead-gen-hero.jpg" // You'll need to add this image
	};

	return <ServicePage {...pageData} />;
}

export default LocalLeadGeneration; 