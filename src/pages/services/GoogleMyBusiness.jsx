import { FaGoogle, FaMapMarkedAlt, FaStar } from "react-icons/fa";
import ServicePage from "../../components/services/ServicePage";

function GoogleMyBusiness() {
	const pageData = {
		title: "Google My Business Optimization",
		subtitle: "Dominate Local Search and Attract More Local Customers",
		description: "Transform your Google Business Profile into a powerful marketing tool. Our optimization services help you stand out in local searches, attract more customers, and build a strong local presence that drives real business results.",
		features: [
			{
				icon: <FaGoogle size={20} style={{ color: '#000' }} />,
				title: "Complete Profile Optimization",
				description: "Expert optimization of your business profile with compelling descriptions, accurate information, and strategic keywords to maximize visibility."
			},
			{
				icon: <FaMapMarkedAlt size={20} style={{ color: '#000' }} />,
				title: "Local Search Dominance",
				description: "Strategic optimization to appear in the 'Local Pack' and Maps results for relevant searches in your service area."
			},
			{
				icon: <FaStar size={20} style={{ color: '#000' }} />,
				title: "Review Management",
				description: "Proactive review management strategy to build trust, improve ratings, and engage with customer feedback effectively."
			}
		],
		benefits: [
			{
				title: "Enhanced Local Visibility",
				description: "Stand out in local search results and attract more nearby customers actively looking for your services."
			},
			{
				title: "Improved Customer Trust",
				description: "Build credibility with a complete, verified business profile and positive customer reviews."
			},
			{
				title: "Better Customer Engagement",
				description: "Connect with customers through Q&A, posts, and direct messaging to drive more conversions."
			},
			{
				title: "Competitive Advantage",
				description: "Stay ahead of local competitors with an optimized and actively managed business profile."
			}
		],
		ctaText: "Boost Your Local Presence",
		backgroundImage: "/src/assets/images/services/gmb-hero.jpg"
	};

	return <ServicePage {...pageData} />;
}

export default GoogleMyBusiness; 