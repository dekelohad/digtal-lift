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
					<div className={`main-logo ${isMobileMenuOpen ? 'hidden' : ''}`}>
						<HeaderLogo />
					</div>
					<div className={`menu-block-wrapper ${isMobileMenuOpen ? 'active' : ''}`}>
						<div className="mobile-menu-header">
							<div className="mobile-logo">
								<HeaderLogo />
							</div>
							<button className="mobile-menu-close" onClick={toggleMobileMenu}>
								<span>×</span>
							</button>
						</div>
						<DesktopNav>
							<NavItem url="/" setIsMobileMenuOpen={setIsMobileMenuOpen}>Home</NavItem>
							<NavItem dropdown title="Services" setIsMobileMenuOpen={setIsMobileMenuOpen}>
								<Dropdown>
									<DropdownItem url="/local-lead-generation" setIsMobileMenuOpen={setIsMobileMenuOpen}>Local Lead Generation</DropdownItem>
									<DropdownItem url="/paid-search-marketing" setIsMobileMenuOpen={setIsMobileMenuOpen}>Paid Search Marketing</DropdownItem>
									<DropdownItem url="/search-engine-optimization" setIsMobileMenuOpen={setIsMobileMenuOpen}>Search Engine Optimization</DropdownItem>
									<DropdownItem url="/google-business-profile" setIsMobileMenuOpen={setIsMobileMenuOpen}>Google Business Profile</DropdownItem>
									<DropdownItem url="/web-design" setIsMobileMenuOpen={setIsMobileMenuOpen}>Web Design</DropdownItem>
									<DropdownItem url="/web-development" setIsMobileMenuOpen={setIsMobileMenuOpen}>Web Development</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem url="about-us" setIsMobileMenuOpen={setIsMobileMenuOpen}>About</NavItem>
							{isMobileMenuOpen && (
								<NavItem url="calculator" setIsMobileMenuOpen={setIsMobileMenuOpen}>ROI Calculator</NavItem>
							)}
							<NavItem url="testimonials" setIsMobileMenuOpen={setIsMobileMenuOpen}>Testimonials</NavItem>
							<li className="nav-item">
								<Link 
									to="/contact-us"
									className="nav-link-item contact-btn"
									onClick={() => setIsMobileMenuOpen(false)}
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
