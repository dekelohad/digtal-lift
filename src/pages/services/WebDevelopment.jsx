import { useEffect } from "react";
import ServicePage from "../../components/services/ServicePage";

function WebDevelopment() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const features = [
		{
			title: "Custom Development",
			description: "Tailored web solutions built with modern technologies to meet your specific business needs",
			icon: "💻"
		},
		{
			title: "E-commerce Solutions",
			description: "Powerful online stores with secure payment processing and inventory management",
			icon: "🛍️"
		},
		{
			title: "CMS Integration",
			description: "User-friendly content management systems that make website updates easy",
			icon: "📝"
		},
		{
			title: "API Development",
			description: "Custom API development and third-party integrations to extend functionality",
			icon: "🔌"
		},
		{
			title: "Security & Performance",
			description: "Robust security measures and optimized performance for peace of mind",
			icon: "🔒"
		},
		{
			title: "Maintenance & Support",
			description: "Ongoing technical support and regular updates to keep your site running smoothly",
			icon: "🛠️"
		}
	];

	const benefits = [
		{
			title: "Scalable Solutions",
			description: "Future-proof development that grows with your business needs"
		},
		{
			title: "Technical Excellence",
			description: "Clean, efficient code that ensures optimal performance and reliability"
		},
		{
			title: "Custom Functionality",
			description: "Tailored features and integrations that streamline your business operations"
		},
		{
			title: "Ongoing Support",
			description: "Regular maintenance and updates to keep your website secure and up-to-date"
		}
	];

	return (
		<ServicePage
			title="Web Development"
			subtitle="Build Powerful Digital Solutions"
			description="Transform your ideas into reality with our expert web development services. We build robust, scalable web applications that power your business and deliver exceptional user experiences."
			features={features}
			benefits={benefits}
			ctaText="Start Your Development Project"
			backgroundImage="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop"
		/>
	);
}

export default WebDevelopment; 