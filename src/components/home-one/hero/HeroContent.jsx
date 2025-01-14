import { Link } from "react-router-dom";
import { HiPhone } from "react-icons/hi";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import StarImg from "../../../assets/images/v1/star.png";
import User1Img from "../../../assets/images/v1/user1.png";
import User2Img from "../../../assets/images/v1/user2.png";
import User3Img from "../../../assets/images/v1/user3.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
import "./HeroContent.css";

function HeroContent() {
	return (
		<div className="aximo-hero-content">
			<FadeInStaggerTwo>
				<FadeInStaggerTwoChildren>
					<h1>
						<span className="aximo-title-animation" style={{
							fontSize: "clamp(3.5rem, 8vw, 5rem)",
							color: "#BBFF00",
							textShadow: "0 0 20px rgba(187, 255, 0, 0.4), 0 0 40px rgba(187, 255, 0, 0.2)",
							display: "block",
							lineHeight: "1.1",
							marginBottom: "10px",
							fontWeight: "800",
							letterSpacing: "-1px",
							animation: "glow 2s ease-in-out infinite alternate",
							"@keyframes glow": {
								"from": {
									textShadow: "0 0 20px rgba(187, 255, 0, 0.4), 0 0 40px rgba(187, 255, 0, 0.2)"
								},
								"to": {
									textShadow: "0 0 25px rgba(187, 255, 0, 0.5), 0 0 50px rgba(187, 255, 0, 0.3)"
								}
							}
						}}>
							Digital Growth
						</span>
						<span style={{
							fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
							color: "#fff",
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
					<p style={{
						fontSize: "clamp(1.5rem, 3vw, 1.7rem)",
						color: "#BBFF00",
						fontWeight: "600",
						marginBottom: "25px",
						letterSpacing: "0.5px"
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
					<Link className="aximo-call-btn" to="/contact-us">
						<span>Book a free consultation</span> <HiPhone className="icon-call" />
					</Link>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
