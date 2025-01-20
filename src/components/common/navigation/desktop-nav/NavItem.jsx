/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";

function NavItem({ dropdown, title, children, url = "", setIsMobileMenuOpen }) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const urlFormatted = url.startsWith('/') ? url : `/${url}`;

	const handleClick = () => {
		if (setIsMobileMenuOpen) {
			setIsMobileMenuOpen(false);
		}
	};

	const handleDropdownClick = (e) => {
		e.preventDefault();
		setIsDropdownOpen(!isDropdownOpen);
	};

	return dropdown ? (
		<li className={`nav-item nav-item-has-children ${isDropdownOpen ? 'dropdown-active' : ''}`}>
			<a href="#" className="nav-link-item drop-trigger" onClick={handleDropdownClick}>
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
