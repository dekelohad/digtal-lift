import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import User1Img from "../../../assets/images/v1/user1.png";
import User2Img from "../../../assets/images/v1/user2.png";
import User3Img from "../../../assets/images/v1/user3.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
import "./HeroContent.css";

function HeroContent() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 992);
		};
		
		checkMobile();
		window.addEventListener('resize', checkMobile);
		
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return (
		<div className="aximo-hero-content">
			<FadeInStaggerTwo>
				<FadeInStaggerTwoChildren>
					<h1>
						<span className="word digital" style={{
							fontSize: "clamp(3.5rem, 8vw, 5rem)",
							display: "block",
							lineHeight: "1.1",
							marginBottom: "10px",
							fontWeight: "800",
							letterSpacing: "-1px"
						}}>
							Digital Growth
						</span>
						<span className="word agency" style={{
							fontSize: "clamp(3rem, 7vw, 4rem)",
							display: "block",
							lineHeight: "1.2",
							fontWeight: "600",
							letterSpacing: "1px"
						}}>
							Agency
						</span>
					</h1>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<p style={{
						fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
						color: "#e0e0e0",
						lineHeight: "1.6",
						maxWidth: "600px",
						margin: "25px 0 35px",
						fontWeight: "400",
						letterSpacing: "0.3px"
					}}>
						We help businesses grow through strategic digital marketing and innovative solutions.
					</p>
					<p className="dominate-text" style={{
						fontSize: isMobile ? "2.5rem !important" : "1.7rem",
						color: "#BBFF00",
						fontWeight: "600",
						marginBottom: "25px",
						letterSpacing: "0.5px",
						lineHeight: "1.2"
					}}>
						Ready to dominate your market?
					</p>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<div className="aximo-hero-user-wrap">
						<div className="aximo-hero-user-thumb">
							<div className="aximo-hero-user-thumb-item" style={{
								transition: "transform 0.3s ease",
								":hover": {
									transform: "translateY(-3px)"
								}
							}}>
								<img src={User1Img} alt="User1Img" style={{
									border: "2px solid rgba(187, 255, 0, 0.3)",
									borderRadius: "50%"
								}} />
							</div>
							<div className="aximo-hero-user-thumb-item" style={{
								transition: "transform 0.3s ease",
								":hover": {
									transform: "translateY(-3px)"
								}
							}}>
								<img src={User3Img} alt="User3Img" style={{
									border: "2px solid rgba(187, 255, 0, 0.3)",
									borderRadius: "50%"
								}} />
							</div>
							<div className="aximo-hero-user-thumb-item" style={{
								transition: "transform 0.3s ease",
								":hover": {
									transform: "translateY(-3px)"
								}
							}}>
								<img src={User2Img} alt="User2Img" style={{
									border: "2px solid rgba(187, 255, 0, 0.3)",
									borderRadius: "50%"
								}} />
							</div>
						</div>
						<div className="aximo-hero-user-data">
							<p style={{
								fontSize: "1.1rem",
								color: "#fff",
								opacity: 0.9,
								fontWeight: "500",
								letterSpacing: "0.2px"
							}}>
								Trusted by more than a thousand people
							</p>
						</div>
					</div>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ 
							type: "spring",
							stiffness: 300,
							damping: 15
						}}
						style={{ 
							marginTop: "40px",
							marginBottom: isMobile ? "40px" : "0"
						}}
					>
						<a 
							href="https://tidycal.com/digitallift/15-minute-meeting"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								fontSize: isMobile ? "18px" : "20px",
								padding: isMobile ? "18px 30px" : "20px 35px",
								background: "linear-gradient(135deg, #BBFF00 0%, #98CC00 100%)",
								color: "#000",
								fontWeight: "600",
								display: "inline-flex",
								alignItems: "center",
								gap: isMobile ? "10px" : "12px",
								boxShadow: "0 4px 15px rgba(187, 255, 0, 0.3)",
								border: "none",
								position: "relative",
								overflow: "hidden",
								borderRadius: "50px",
								textDecoration: "none"
							}}
						>
							<FaCalendarAlt size={isMobile ? 22 : 24} />
							<span>{isMobile ? "Schedule Call" : "Schedule Your Call Now"}</span>
							<motion.div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									background: "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
									zIndex: 1
								}}
								animate={{
									x: ["100%", "-100%"]
								}}
								transition={{
									repeat: Infinity,
									duration: 1.5,
									ease: "linear"
								}}
							/>
						</a>
					</motion.div>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
