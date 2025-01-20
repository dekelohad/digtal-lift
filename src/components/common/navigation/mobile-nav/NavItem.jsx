/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const NavItem = ({ items, depthLevel, showMenu, setShowMenu }) => {
	const [dropdown, setDropdown] = useState(false);

	const closeDropdown = () => {
		dropdown && setDropdown(false);
		showMenu && setShowMenu(false);
	};

	const toggleDropdown = (e) => {
		e.stopPropagation();
		setDropdown((prev) => !prev);
	};

	const animationVariants = {
		initial: {
			rotate: 0,
		},
		animate: () => {
			if (dropdown) {
				return {
					rotate: -180,
					transition: {
						duration: 0.25,
					},
				};
			}
		},
	};

	if (items.submenu) {
		return (
			<li className="nav-item nav-item-has-children" onClick={closeDropdown}>
				<button type="button" aria-expanded={dropdown ? "true" : "false"} onClick={(e) => toggleDropdown(e)}>
					{items.title}
					<motion.i
						variants={animationVariants}
						initial="initial"
						animate="animate"
						className="fas fa-angle-down"
					></motion.i>
				</button>
				{dropdown && <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />}
			</li>
		);
	}

	const urlFormatted = items.url.startsWith('/') ? items.url : `/${items.url}`;

	return (
		<li className="nav-item" onClick={closeDropdown}>
			<Link to={urlFormatted} onClick={closeDropdown}>
				{/* {items.title} */}
			</Link>
		</li>
	);
};

export default NavItem;
