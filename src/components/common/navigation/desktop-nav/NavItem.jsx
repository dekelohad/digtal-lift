/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function NavItem({ dropdown, title, children, url = "", setIsMobileMenuOpen }) {
	const urlFormatted = url.startsWith('/') ? url : `/${url}`;

	const handleClick = () => {
		if (setIsMobileMenuOpen) {
			setIsMobileMenuOpen(false);
		}
	};

	return dropdown ? (
		<li className="nav-item nav-item-has-children">
			<a href="#" className="nav-link-item drop-trigger" onClick={handleClick}>
				{title}
				<i className="fas fa-angle-down"></i>
			</a>
			{children}
		</li>
	) : (
		<li className="nav-item">
			<Link to={urlFormatted} className="nav-link-item" onClick={handleClick}>
				{children}
			</Link>
		</li>
	);
}

export default NavItem;
