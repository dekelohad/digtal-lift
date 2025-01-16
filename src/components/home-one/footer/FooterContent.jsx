import Shape1Img from "../../../assets/images/v1/shape1.png";
import './footer-content.css';

function FooterContent() {
	return (
		<div className="aximo-default-content light position-relative">
			<h2>
				<div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
					<div className="text-row first">Transform Your</div>
					<div className="text-row second">Vision Into Digital</div>
					<div className="text-row third">Reality</div>
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
