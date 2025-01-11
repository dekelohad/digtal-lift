import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

function BreadCrumb({ title }) {
	const location = useLocation();
	const pathnames = location.pathname.split("/").filter((x) => x);

	return (
		<div className="breadcrumb-container">
			<nav className="breadcrumbs">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					{pathnames.map((name, index) => {
						const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
						const isLast = index === pathnames.length - 1;
						const displayName = isLast && title ? title : name.split("-").map(word => 
							word.charAt(0).toUpperCase() + word.slice(1)
						).join(" ");

						return (
							<li key={routeTo}>
								{isLast ? (
									<span>{displayName}</span>
								) : (
									<Link to={routeTo}>{displayName}</Link>
								)}
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}

export default BreadCrumb;
