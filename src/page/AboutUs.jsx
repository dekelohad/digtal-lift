import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import About from "../components/home-one/about";
import Teams from "../components/home-one/teams";
import "./AboutUs.css";

function AboutUs() {
	return (
		<div className="about-us-page">
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
