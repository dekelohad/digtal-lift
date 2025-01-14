import Story from "../components/about/story";
import BreadCrumb from "../components/common/Breadcrumb";
import About from "../components/home-one/about";
import Teams from "../components/home-one/teams";
import "./AboutUs.css";
// Teams images
import Team1Img from "../assets/images/team/team1.png";
import Team2Img from "../assets/images/team/team2.png";
import Team3Img from "../assets/images/team/team3.png";
import Team4Img from "../assets/images/team/team4.png";

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
