import { Helmet } from 'react-helmet-async';
import About from "../../components/home-one/about";
import Hero from "../../components/home-one/hero";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";
import { ServiceIcons } from '../../components/icons/ServiceIcons';
import Companies from '../../components/common/Companies/Companies';
import JonathanImg from '../../assets/images/team/Jonathan.jpg';
import AronImg from '../../assets/images/team/Aron.jpg';

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
		designation: "CEO & Technical SEO Director",
		img: JonathanImg,
	},
	{
		id: crypto.randomUUID(),
		name: "Aron Terracina",
		designation: "Director of Sales & Client Success",
		img: AronImg,
	},
];

function HomePage() {
	return (
		<>
			<Helmet>
				<title>Digital Lift | Make Your Phone Ring Non-Stop with Qualified Leads</title>
				<meta
					name="description"
					content="Stop wasting money on meaningless clicks. We deliver qualified buyers ready to become customers through proven SEO, web design, and lead generation systems. 15x ROI."
				/>
			</Helmet>
			<Hero />
			<Services services={servicesData} />
			<About />
			<WhyChooseUs />
			<Testimonial />
			<Companies/>
			<Teams teams={teamsData} />
		</>
	);
}

export default HomePage;
