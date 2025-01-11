import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";
import ClientsSection from "../../components/home-one/clients";
import { ServiceIcons } from '../../components/icons/ServiceIcons';

// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Local Lead Generation",
		description:
			"Transform your local presence into a lead-generating machine. Our proven strategies target and capture your ideal customers in your service area.",
		icon: ServiceIcons.target,
	},
	{
		id: crypto.randomUUID(),
		title: "Paid Search Marketing",
		description:
			"Turn search traffic into revenue with smart PPC campaigns. Our data-driven approach ensures every ad dollar works to capture high-intent buyers.",
		icon: ServiceIcons.search,
	},
	{
		id: crypto.randomUUID(),
		title: "Search Engine Optimization",
		description:
			"Dominate organic search results with powerful SEO strategies. We optimize every aspect of your online presence to attract ready-to-buy customers.",
		icon: ServiceIcons.seo,
	},
	{
		id: crypto.randomUUID(),
		title: "Google Business Profile",
		description:
			"Own your local market with an optimized Google presence. We enhance your visibility to ensure nearby customers find and choose your business first.",
		icon: ServiceIcons.location,
	},
	{
		id: crypto.randomUUID(),
		title: "Web Design",
		description:
			"Transform your online presence with stunning, conversion-focused designs. We create beautiful websites that engage visitors and drive results.",
		icon: ServiceIcons.webDesign,
	},
	{
		id: crypto.randomUUID(),
		title: "Web Development",
		description:
			"Build powerful, scalable websites that perform. Our expert developers create custom solutions that elevate your brand and drive growth.",
		icon: ServiceIcons.webDev,
	},
];

const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Jonathan Dekel",
		designation: "Chief Executive Officer",
		img: "https://ohaddekel.dev/profileImage.jpg",
	},
	{
		id: crypto.randomUUID(),
		name: "David Mitchell",
		designation: "Chief Technology Officer",
		img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop",
	},
	{
		id: crypto.randomUUID(),
		name: "James Wilson",
		designation: "Head of Client Success",
		img: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=500&auto=format&fit=crop",
	},
	{
		id: crypto.randomUUID(),
		name: "Mark Anderson",
		designation: "Lead Generation Strategist",
		img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
	},
];

function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<WhyChooseUs />
			{/* <ClientsSection /> */}
			<Testimonial />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default HomeOne;
