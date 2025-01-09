import Shape1Img from "../../../assets/images/v1/shape1.png";

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
			<style jsx>{`
				@keyframes glow {
					0%, 33% {
						color: #BBFF00;
						text-shadow: 0 0 15px rgba(187, 255, 0, 0.5),
									0 0 30px rgba(187, 255, 0, 0.3),
									0 0 45px rgba(187, 255, 0, 0.2);
					}
					34%, 100% {
						color: #fff;
						text-shadow: none;
					}
				}

				.text-row {
					font-size: 1em;
					font-weight: 600;
					color: #fff;
					opacity: 1;
				}

				.first {
					animation: glow 3s steps(1) infinite;
				}

				.second {
					animation: glow 3s steps(1) infinite;
					animation-delay: -2s;
				}

				.third {
					animation: glow 3s steps(1) infinite;
					animation-delay: -1s;
				}
			`}</style>
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
