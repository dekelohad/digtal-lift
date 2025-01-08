/* eslint-disable for-direction */
import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import Dropdown from "../../common/navigation/desktop-nav/Dropdown";
import DropdownItem from "../../common/navigation/desktop-nav/DropdownItem";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper" style={{ marginLeft: "100px" }}>
						<DesktopNav>
							<NavItem url="/">Home</NavItem>
							<NavItem dropdown title="Services">
								<Dropdown>
									<DropdownItem url="local-lead-generation">Local Lead Generation</DropdownItem>
									<DropdownItem url="paid-search-marketing">Pay-Per-Click</DropdownItem>
									<DropdownItem url="search-engine-optimization">Search Engine Optimization</DropdownItem>
									<DropdownItem url="google-my-business">Google Business</DropdownItem>
									<DropdownItem url="web-design">Web Design</DropdownItem>
									<DropdownItem url="web-development">Web Development</DropdownItem>
								</Dropdown>
							</NavItem>
							<NavItem url="about-us">About</NavItem>
							<NavItem url="testimonials">Testimonials</NavItem>
						</DesktopNav>
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="Digital Lift" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
