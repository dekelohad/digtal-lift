import Call2Img from "../../assets/images/icon/call2.svg";
import EmailImg from "../../assets/images/icon/email.svg";
import MapImg from "../../assets/images/icon/map.svg";
import Star2Img from "../../assets/images/v1/star2.png";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";
function ContactInfo() {
	return (
		<div className="aximo-contact-info-section">
			<div className="container">
				<div className="aximo-contact-info-title">
					<h2>
						<span className="aximo-title-animation">
							Contact Information
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<FadeInStaggerTwo className="row">
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<img src={Call2Img} alt="Call Img" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Call us</span>
								<p>+1 (123) 456-7890</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<img src={EmailImg} alt="Email" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Email us</span>
								<p>
									<a 
										href="mailto:info@digitallift.com"
										style={{ 
											color: 'inherit',
											textDecoration: 'none',
											transition: 'color 0.3s ease'
										}}
										target="_blank"
										rel="noopener noreferrer"
										onMouseEnter={(e) => e.currentTarget.style.color = "#BBFF00"}
										onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}
									>
										info@digitallift.com
									</a>
								</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
					<FadeInStaggerTwoChildren className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<img src={MapImg} alt="Map" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Office address</span>
								<p>11801 Domain Blvd, Suite W350<br />Austin, TX 78758</p>
							</div>
						</div>
					</FadeInStaggerTwoChildren>
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default ContactInfo;
