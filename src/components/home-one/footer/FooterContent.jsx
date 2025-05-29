import { useState, useEffect } from 'react';
import './footer-content.css';

function FooterContent() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 480);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="aximo-default-content light position-relative">
			<h2>
				<div className="text-rows-container">
					<div className="text-row first">Transform Your</div>
					<div className="text-row second">Vision Into</div>
					<div className="text-row third">Digital Reality</div>
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
						<li style={{ fontWeight: 700, color: "#BBFF00", marginBottom: 0 }}>Call us:</li>
						<li style={{ marginBottom: "10px" }}>
							<a
								href="tel:+17379376612"
								style={{
									color: "#fff",
									textDecoration: "none",
									transition: "color 0.2s, transform 0.2s"
								}}
								onMouseEnter={e => {
									e.currentTarget.style.color = "#BBFF00";
									e.currentTarget.style.transform = "scale(1.05)";
								}}
								onMouseLeave={e => {
									e.currentTarget.style.color = "#fff";
									e.currentTarget.style.transform = "scale(1)";
								}}
							>
								+1 (737) 937-6612
							</a>
						</li>
						<li style={{ fontWeight: 700, color: "#BBFF00", margin: "20px 0 0 0" }}>Send us an email:</li>
						<li>
							<a
								href="mailto:info@digitalLift.io"
								style={{
									color: "#fff",
									textDecoration: "none",
									transition: "color 0.2s, transform 0.2s"
								}}
								onMouseEnter={e => {
									e.currentTarget.style.color = "#BBFF00";
									e.currentTarget.style.transform = "scale(1.05)";
								}}
								onMouseLeave={e => {
									e.currentTarget.style.color = "#fff";
									e.currentTarget.style.transform = "scale(1)";
								}}
							>
								info@digitalLift.io
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default FooterContent;
