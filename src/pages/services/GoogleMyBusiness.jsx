import { useEffect } from "react";
import ServicePage from "../../components/services/ServicePage";

function GoogleMyBusiness() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const features = [
		{
			title: "Profile Optimization",
			description: "Complete optimization of your Google Business Profile with engaging content, photos, and business information",
			icon: "⭐"
		},
		{
			title: "Review Management",
			description: "Strategic review acquisition and professional response management to build trust and credibility",
			icon: "💬"
		},
		{
			title: "Local SEO",
			description: "Local keyword optimization and citation building to improve your local search visibility",
			icon: "📍"
		},
		{
			title: "Post Management",
			description: "Regular updates with engaging posts about products, offers, and events to keep your profile active",
			icon: "📢"
		},
		{
			title: "Photo Optimization",
			description: "Professional photo management to showcase your business and improve engagement",
			icon: "📸"
		},
		{
			title: "Performance Tracking",
			description: "Detailed insights and analytics to measure profile performance and customer engagement",
			icon: "📊"
		}
	];

	const benefits = [
		{
			title: "Increased Local Visibility",
			description: "Stand out in local search results and Google Maps to attract nearby customers"
		},
		{
			title: "Better Customer Engagement",
			description: "Connect with customers through reviews, posts, and direct messaging"
		},
		{
			title: "Enhanced Credibility",
			description: "Build trust with potential customers through a professionally managed online presence"
		},
		{
			title: "More Foot Traffic",
			description: "Drive more in-store visits with accurate business information and engaging content"
		}
	];

	return (
		<ServicePage
			title="Google Business Profile Management"
			subtitle="Dominate Local Search & Attract Nearby Customers"
			description="Maximize your local presence with our expert Google Business Profile management services. We help you stand out in local search results, engage with customers, and drive more foot traffic to your business."
			features={features}
			benefits={benefits}
			ctaText="Boost Local Presence"
			backgroundImage="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?q=80&w=2670&auto=format&fit=crop"
		/>
	);
}

export default GoogleMyBusiness; 