/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const MobileNavbar = ({ menuItemsData }) => {
	const depthLevel = 0;
	const [showMenu, setShowMenu] = useState(false);

	function handleOpenMobileMenu() {
		setShowMenu((prev) => !prev);
	}

	const animationVariants = {
		initial: {
			x: "-100%",
		},
		animate: () => {
			if (showMenu) {
				return {
					x: 0,
				};
			}
		},
	};
	const overlayAnimationVariants = {
		initial: {
			opacity: 0,
			visibility: "hidden",
		},
		animate: () => {
			if (showMenu) {
				return {
					opacity: 1,
					visibility: "visible",
				};
			}
		},
	};

	return (
		<div className="mobile-nav-wrap">
			<div className="mobile-menu-trigger" onClick={handleOpenMobileMenu}>
				<span></span>
			</div>
			{showMenu && (
				<motion.nav className="mobile-navbar" variants={animationVariants} initial="initial" animate="animate">
					<div className="mobile-menu-head">
						<div className="mobile-menu-head--title">
							<Link to="/">
								<span style={{
									display: "flex",
									alignItems: "center",
									gap: "12px"
								}}>
									<span style={{
										fontSize: "28px",
										fontWeight: "900",
										fontFamily: "Bricolage Grotesque, sans-serif",
										background: "linear-gradient(135deg, #BBFF00 0%, #98CC00 100%)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
										letterSpacing: "1px",
										textTransform: "uppercase"
									}}>
										Digital<span style={{ 
											WebkitTextFillColor: "initial",
											background: "linear-gradient(135deg, #BBFF00 0%, #98CC00 100%)",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent",
											marginLeft: "8px"
										}}>Lift</span>
									</span>
									<span style={{ 
										fontSize: "24px",
										filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))"
									}}>🚀</span>
								</span>
							</Link>
						</div>
						<div className="mobile-menu-head--close" onClick={() => setShowMenu(false)}>
							&times;
						</div>
					</div>

					<ul>
						{menuItemsData.map((menu, index) => {
							return (
								<NavItem
									items={menu}
									key={index}
									depthLevel={depthLevel}
									showMenu={showMenu}
									setShowMenu={setShowMenu}
								/>
							);
						})}
					</ul>
				</motion.nav>
			)}

			<motion.div
				initial="initial"
				animate="animate"
				variants={overlayAnimationVariants}
				className="mobile-nav--overlay"
				onClick={handleOpenMobileMenu}
			></motion.div>
		</div>
	);
};

export default MobileNavbar;
