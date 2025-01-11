import { Link } from "react-router-dom";
import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";
import "./ServiceCard.css";

function ServiceCard({ service: { title, description, icon, id } }) {
	const getServiceRoute = (title) => {
		const routes = {
			"Paid Search Marketing": "/paid-search-marketing",
			"Search Engine Optimization": "/search-engine-optimization",
			"Local Lead Generation": "/local-lead-generation",
			"Google Business Profile": "/google-business-profile",
			"Web Design": "/web-design",
			"Web Development": "/web-development"
		};
		return routes[title] || "/services";
	};

	return (
		<Link to={getServiceRoute(title)} className="aximo-iconbox-wrap" style={{ cursor: 'pointer', display: 'block', textDecoration: 'none' }}>
			<div className="aximo-iconbox-icon">
				<i className={`${icon}`}></i>
			</div>
			<div className="aximo-iconbox-data">
				<h3>{title}</h3>
				<p>{description}</p>
				<span className="aximo-icon">
					<img src={ArrowRightImg} alt="arrow right" />
				</span>
			</div>
		</Link>
	);
}

export default ServiceCard;
