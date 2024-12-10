import { FaCode, FaShieldAlt, FaTools } from "react-icons/fa";
import ServicePage from "../../components/services/ServicePage";

function WebDevelopment() {
	const pageData = {
		title: "Web Development",
		subtitle: "Build Powerful, Scalable Websites That Drive Business Growth",
		description: "Our expert web development services deliver custom, high-performance websites that combine cutting-edge technology with seamless functionality. We create scalable solutions that help your business grow and succeed online.",
		features: [
			{
				icon: <FaCode size={20} style={{ color: '#000' }} />,
				title: "Custom Development",
				description: "Tailored web solutions built with modern technologies and best practices to meet your specific business needs."
			},
			{
				icon: <FaShieldAlt size={20} style={{ color: '#000' }} />,
				title: "Security & Performance",
				description: "Robust security measures and optimized performance to ensure your website runs smoothly and safely."
			},
			{
				icon: <FaTools size={20} style={{ color: '#000' }} />,
				title: "Maintenance & Support",
				description: "Ongoing maintenance, updates, and technical support to keep your website running at its best."
			}
		],
		benefits: [
			{
				title: "Customized Solutions",
				description: "Get a website that's perfectly tailored to your business requirements and goals."
			},
			{
				title: "Scalable Architecture",
				description: "Future-proof development that grows with your business and handles increased traffic."
			},
			{
				title: "Technical Excellence",
				description: "Clean, efficient code that ensures fast loading times and smooth functionality."
			},
			{
				title: "Easy Management",
				description: "User-friendly content management systems that make updates simple and straightforward."
			}
		],
		ctaText: "Start Your Development Project",
		backgroundImage: "/src/assets/images/services/web-dev-hero.jpg"
	};

	return <ServicePage {...pageData} />;
}

export default WebDevelopment; 