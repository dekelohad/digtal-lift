/* eslint-disable for-direction */
import { useState } from "react";
import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import Dropdown from "../../common/navigation/desktop-nav/Dropdown";
import DropdownItem from "../../common/navigation/desktop-nav/DropdownItem";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import HeaderLogo from "./HeaderLogo";
import { Link } from "react-router-dom";

function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className={`menu-block-wrapper ${isMobileMenuOpen ? 'active' : ''}`}>
						<DesktopNav>
							<NavItem url="/">Home</NavItem>
							<NavItem dropdown title="Services">
								<Dropdown>
									<DropdownItem url="local-lead-generation">Local Lead Generation</DropdownItem>
									<DropdownItem url="paid-search-marketing">Paid Search Marketing</DropdownItem>
									<DropdownItem url="search-engine-optimization">Search Engine Optimization</DropdownItem>
									<DropdownItem url="google-business-profile">Google Business Profile</DropdownItem>
									<DropdownItem url="web-design">Web Design</DropdownItem>
									<DropdownItem url="web-development">Web Development</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem url="about-us">About</NavItem>
							<NavItem url="testimonials">Testimonials</NavItem>
							<li className="nav-item">
								<Link 
									to="/contact-us"
									className="nav-link-item contact-btn"
									style={{
										background: "#BBFF00",
										color: "#000",
										padding: "8px 24px",
										borderRadius: "50px",
										fontWeight: "600",
										transition: "all 0.3s ease",
									}}
									onMouseOver={(e) => {
										e.currentTarget.style.transform = "translateY(-2px)";
										e.currentTarget.style.boxShadow = "0 4px 15px rgba(187, 255, 0, 0.3)";
									}}
									onMouseOut={(e) => {
										e.currentTarget.style.transform = "translateY(0)";
										e.currentTarget.style.boxShadow = "none";
									}}
								>
									Contact Us
								</Link>
							</li>
						</DesktopNav>
					</div>
					<div className="mobile-menu-trigger" onClick={toggleMobileMenu}>
						<span></span>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Header;
