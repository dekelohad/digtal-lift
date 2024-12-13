import Shape1Img from "../../../assets/images/v1/shape1.png";
import Star2Img from "../../../assets/images/v1/star2.png";
function FooterContent() {
	return (
		<div className="aximo-default-content light position-relative">
			<h2>
				<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
					<div style={{ display: "flex", alignItems: "center" }}>
						<span className="aximo-title-animation">
							TransformYour
							<span className="aximo-title-icon" style={{ marginLeft: "10px" }}>
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</div>
					<div>Vision Into Digital</div>
					<div>Reality</div>
				</div>
			</h2>
			<p>
			Ready to dominate your market? We turn ambitious goals into extraordinary results. Our expert team combines 
				cutting-edge technology with creative innovation to deliver solutions that exceed expectations. Your success story 
				starts with a conversation.
			</p>
			<div className="aximo-info-wrap">
				<div className="aximo-info">
					<ul>
						<li>Give us a call:</li>
						<li>
							<a href="tel:(123) 456-7890">(123) 456-7890</a>
						</li>
					</ul>
				</div>
				<div className="aximo-info">
					<ul>
						<li>Send us an email:</li>
						<li>
						<a href="mailto:info@digitalLift.com" target="_blank" rel="noopener noreferrer">info@digitalLift.com</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="aximo-hero-shape aximo-footer-shape">
				<img src={Shape1Img} alt="Shape1Img" />
			</div>
		</div>
	);
}

export default FooterContent;
