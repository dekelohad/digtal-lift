import { FaPalette, FaMobileAlt, FaBolt } from "react-icons/fa";
import ServicePage from "../../components/services/ServicePage";

function WebDesign() {
	const pageData = {
		title: "Web Design",
		subtitle: "Create a Stunning Online Presence with Modern Web Design",
		description: "Transform your digital presence with our cutting-edge web design services. We create beautiful, functional, and user-friendly websites that not only look amazing but also drive results and deliver exceptional user experiences.",
		features: [
			{
				icon: <FaPalette size={20} style={{ color: '#000' }} />,
				title: "Custom Design Creation",
				description: "Unique, branded designs tailored to your business identity and goals, setting you apart from the competition."
			},
			{
				icon: <FaMobileAlt size={20} style={{ color: '#000' }} />,
				title: "Responsive Design",
				description: "Mobile-first designs that provide a seamless experience across all devices and screen sizes."
			},
			{
				icon: <FaBolt size={20} style={{ color: '#000' }} />,
				title: "Performance Optimization",
				description: "Lightning-fast loading speeds and optimized performance for better user experience and SEO."
			}
		],
		benefits: [
			{
				title: "Stand Out From Competition",
				description: "Make a lasting impression with a unique, professional design that reflects your brand identity."
			},
			{
				title: "Improved User Experience",
				description: "Intuitive navigation and user-friendly interfaces that keep visitors engaged and convert better."
			},
			{
				title: "Mobile-Ready Design",
				description: "Reach more customers with responsive designs that work perfectly on all devices."
			},
			{
				title: "Future-Proof Solution",
				description: "Modern, scalable designs built with the latest technologies and best practices."
			}
		],
		ctaText: "Start Your Design Project",
		backgroundImage: "/src/assets/images/services/web-design-hero.jpg"
	};

	return <ServicePage {...pageData} />;
}

export default WebDesign; 