import { FaSearch, FaLink, FaRocket } from "react-icons/fa";
import ServicePage from "../../components/services/ServicePage";

function SearchEngineOptimization() {
	const pageData = {
		title: "Search Engine Optimization",
		subtitle: "Boost Your Online Visibility with Expert SEO Strategies",
		description: "Our comprehensive SEO services help businesses improve their search engine rankings, increase organic traffic, and establish a strong online presence through proven optimization techniques.",
		features: [
			{
				icon: <FaSearch size={20} style={{ color: '#000' }} />,
				title: "Keyword Optimization",
				description: "Strategic keyword research and implementation to target your ideal audience."
			},
			{
				icon: <FaLink size={20} style={{ color: '#000' }} />,
				title: "Technical SEO",
				description: "Comprehensive technical optimization to improve website performance and crawlability."
			},
			{
				icon: <FaRocket size={20} style={{ color: '#000' }} />,
				title: "Content Strategy",
				description: "Creation of SEO-optimized content that engages users and ranks well in search results."
			}
		],
		benefits: [
			{
				title: "Increased Organic Traffic",
				description: "Drive more qualified visitors to your website through improved search rankings."
			},
			{
				title: "Long-Term Results",
				description: "Build sustainable organic growth with lasting SEO improvements."
			},
			{
				title: "Better User Experience",
				description: "Improve website usability and engagement through technical optimization."
			},
			{
				title: "Brand Authority",
				description: "Establish your brand as an authority in your industry with high-quality content."
			}
		],
		ctaText: "Improve Your Rankings",
		backgroundImage: "/src/assets/images/services/seo-hero.jpg" // You'll need to add this image
	};

	return <ServicePage {...pageData} />;
}

export default SearchEngineOptimization; 