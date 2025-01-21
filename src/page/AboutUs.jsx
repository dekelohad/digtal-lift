import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import About from "../components/home-one/about";
import Teams from "../components/home-one/teams";
import "./AboutUs.css";
import { Helmet } from 'react-helmet-async';

function AboutUs() {
	return (
		<div className="about-us-page">
			<Helmet>
				<title>About Digital Lift | Lead Generation & Digital Growth Experts</title>
				<meta
					name="description"
					content="Meet the team behind Digital Lift's 15x ROI success stories. Our elite digital marketers and lead generation specialists help businesses achieve exponential growth through proven strategies."
				/>
			</Helmet>
			<div className="breadcrumb-wrapper">
				<BreadCrumb />
			</div>
			<About />
			<Story />
			<Teams />
		</div>
	);
}

export default AboutUs;
