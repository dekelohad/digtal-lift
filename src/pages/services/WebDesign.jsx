import { useEffect } from "react";
import ServicePage from "../../components/services/ServicePage";

function WebDesign() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const features = [
		{
			title: "Custom Design",
			description: "Unique, brand-aligned designs that capture your vision and engage your target audience",
			icon: "🎨"
		},
		{
			title: "Responsive Design",
			description: "Seamless experiences across all devices with mobile-first, responsive layouts",
			icon: "📱"
		},
		{
			title: "UI/UX Design",
			description: "Intuitive user interfaces and engaging user experiences that drive conversions",
			icon: "✨"
		},
		{
			title: "Brand Integration",
			description: "Cohesive visual design that perfectly aligns with your brand identity",
			icon: "🎯"
		},
		{
			title: "Performance Optimization",
			description: "Fast-loading, optimized designs that provide excellent user experience",
			icon: "⚡"
		},
		{
			title: "Conversion Focus",
			description: "Strategic design elements that guide visitors toward desired actions",
			icon: "🎯"
		}
	];

	const benefits = [
		{
			title: "Stand Out Online",
			description: "Make a lasting first impression with a stunning, professional website design"
		},
		{
			title: "Increase Conversions",
			description: "Turn more visitors into customers with conversion-optimized designs"
		},
		{
			title: "Build Trust",
			description: "Establish credibility with a professional, modern web presence"
		},
		{
			title: "Future-Proof Design",
			description: "Stay ahead with cutting-edge design that scales with your business"
		}
	];

	return (
		<ServicePage
			title="Web Design"
			subtitle="Create Stunning Digital Experiences"
			description="Transform your online presence with our professional web design services. We create beautiful, functional websites that engage your audience, reflect your brand, and drive business results."
			features={features}
			benefits={benefits}
			ctaText="Start Your Design Project"
			backgroundImage="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2655&auto=format&fit=crop"
		/>
	);
}

export default WebDesign; 