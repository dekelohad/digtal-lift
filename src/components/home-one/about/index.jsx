import Star2Img from "../../../assets/images/v1/star2.png";
import CountUp from "react-countup";

function About() {
	return (
		<div className="section aximo-section-padding">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title" style={{ textAlign: "center" }}>
					<h2 className="main-title" style={{ 
						fontSize: "5.5rem",
						fontWeight: "800",
						lineHeight: "1",
						marginBottom: "40px",
						fontFamily: "'Anybody', sans-serif",
						marginTop: "-20px"
					}}>
						<div style={{ 
							marginBottom: "10px",
							whiteSpace: "nowrap"
						}}>
							We Make Your Phone
						</div>
						<div className="highlight-text" style={{ 
							color: "#BBFF00",
							position: "relative",
							display: "inline-block",
							marginTop: "0"
						}}>
							Ring Non-Stop
							<div className="phone-animation" style={{
								position: "absolute",
								right: "-100px",
								top: "50%",
								transform: "translateY(-50%)",
								width: "60px",
								height: "60px",
								marginTop: "8px"
							}}>
								<div className="phone-icon"></div>
								<div className="ring-wave"></div>
								<div className="ring-wave"></div>
								<div className="ring-wave"></div>
							</div>
						</div>
					</h2>
					<p style={{
						fontSize: "1.4rem",
						lineHeight: "1.8",
						color: "#555",
						maxWidth: "900px",
						margin: "0 auto 60px",
						fontWeight: "500",
						textAlign: "center"
					}}>
						Stop wasting money on meaningless clicks. We deliver what matters:
						<span style={{ 
							color: "#222",
							fontWeight: "800",
							display: "block",
							margin: "20px 0",
							fontSize: "1.8rem",
							letterSpacing: "0.2px",
							lineHeight: "1.4"
						}}>qualified buyers ready to become customers</span>
						Our proven systems transform website visitors into valuable leads
					</p>

					<div className="stats-container" style={{
						background: "#111111",
						borderRadius: "30px",
						padding: "60px 80px",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						margin: "0 auto",
						maxWidth: "1200px"
					}}>
						<div style={{ flex: 1, textAlign: "center" }}>
							<div className="stat-number" style={{
								fontSize: "5rem",
								fontWeight: "800",
								color: "#BBFF00",
								marginBottom: "10px",
								fontFamily: "'Anybody', sans-serif",
								lineHeight: "1"
							}}>
								<CountUp end={30} duration={3} enableScrollSpy />k+
							</div>
							<div className="stat-label" style={{
								fontSize: "1rem",
								color: "#fff",
								textTransform: "uppercase",
								letterSpacing: "1px"
							}}>LEADS GENERATED</div>
						</div>
						<div className="stat-divider" style={{ 
							flex: 1, 
							textAlign: "center",
							borderLeft: "1px solid rgba(255,255,255,0.1)",
							borderRight: "1px solid rgba(255,255,255,0.1)",
							margin: "0 60px",
							paddingLeft: "60px",
							paddingRight: "60px"
						}}>
							<div className="stat-number" style={{
								fontSize: "5rem",
								fontWeight: "800",
								color: "#BBFF00",
								marginBottom: "10px",
								fontFamily: "'Anybody', sans-serif",
								lineHeight: "1"
							}}>
								<CountUp end={92} duration={3} enableScrollSpy />%
							</div>
							<div className="stat-label" style={{
								fontSize: "1rem",
								color: "#fff",
								textTransform: "uppercase",
								letterSpacing: "1px"
							}}>LEAD QUALITY RATE</div>
						</div>
						<div style={{ flex: 1, textAlign: "center" }}>
							<div className="stat-number" style={{
								fontSize: "5rem",
								fontWeight: "800",
								color: "#BBFF00",
								marginBottom: "10px",
								fontFamily: "'Anybody', sans-serif",
								lineHeight: "1"
							}}>
								<CountUp end={15} duration={3} enableScrollSpy />x
							</div>
							<div className="stat-label" style={{
								fontSize: "1rem",
								color: "#fff",
								textTransform: "uppercase",
								letterSpacing: "1px"
							}}>AVERAGE ROI</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				@media (max-width: 1200px) {
					.main-title {
						font-size: 4.5rem !important;
					}
					.stats-container {
						padding: 50px 40px !important;
						margin: 0 20px !important;
					}
					.stat-number {
						font-size: 4rem !important;
					}
				}

				@media (max-width: 992px) {
					.main-title {
						font-size: 4rem !important;
					}
					.stats-container {
						padding: 40px 30px !important;
					}
					.stat-divider {
						margin: 0 30px !important;
						padding-left: 30px !important;
						padding-right: 30px !important;
					}
					.stat-number {
						font-size: 3.5rem !important;
					}
				}

				@media (max-width: 768px) {
					.main-title {
						font-size: 3rem !important;
						margin-bottom: 30px !important;
						padding: 0 20px !important;
					}
					
					.highlight-text {
						display: flex !important;
						align-items: center;
							justify-content: center;
							margin-top: 10px;
							flex-wrap: wrap;
							gap: 15px;
					}

					.phone-animation {
						position: relative !important;
						right: auto !important;
						top: auto !important;
						transform: none !important;
						margin: 0 !important;
						width: 40px !important;
						height: 40px !important;
					}

					.stats-container {
						flex-direction: column !important;
						padding: 40px 20px !important;
						gap: 30px;
						margin: 0 15px !important;
					}

					.stat-divider {
						border-left: none !important;
						border-right: none !important;
						border-top: 1px solid rgba(255,255,255,0.1) !important;
						border-bottom: 1px solid rgba(255,255,255,0.1) !important;
						margin: 0 !important;
						padding: 30px 0 !important;
						width: 100% !important;
					}

					.stat-number {
						font-size: 3.5rem !important;
					}

					.stat-label {
						font-size: 0.9rem !important;
					}

					p {
						padding: 0 20px !important;
						font-size: 1.1rem !important;
					}
				}

				@media (max-width: 576px) {
					.main-title {
						font-size: 2.8rem !important;
					}
					.stats-container {
						padding: 30px 15px !important;
						margin: 0 10px !important;
					}
					.stat-number {
						font-size: 3rem !important;
					}
				}

				@media (max-width: 480px) {
					.main-title {
						font-size: 2.5rem !important;
					}
					.highlight-text {
						padding: 0 10px !important;
					}
					.stat-number {
						font-size: 2.8rem !important;
					}
					p {
						font-size: 1rem !important;
					}
				}

				@media (max-width: 360px) {
					.main-title {
						font-size: 2.2rem !important;
					}
					.stat-number {
						font-size: 2.5rem !important;
					}
					.stat-label {
						font-size: 0.8rem !important;
					}
				}

				.phone-animation {
					position: relative;
				}

				.phone-icon {
					width: 100%;
					height: 100%;
					background: #BBFF00;
					mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E");
					mask-size: contain;
					mask-repeat: no-repeat;
					mask-position: center;
					animation: phoneFloat 2s ease-in-out infinite;
					filter: drop-shadow(0 0 15px rgba(187, 255, 0, 0.5));
				}

				.ring-wave {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 100%;
					height: 100%;
					border: 2px solid #BBFF00;
					border-radius: 50%;
					opacity: 0;
					animation: ringWave 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
				}

				.ring-wave:nth-child(2) {
					animation-delay: 0.5s;
				}

				.ring-wave:nth-child(3) {
					animation-delay: 1s;
				}

				@keyframes phoneFloat {
					0%, 100% {
						transform: translateY(0) rotate(0deg);
					}
					50% {
						transform: translateY(-5px) rotate(5deg);
					}
				}

				@keyframes ringWave {
					0% {
						transform: translate(-50%, -50%) scale(0.5);
						opacity: 0.8;
					}
					100% {
						transform: translate(-50%, -50%) scale(2);
						opacity: 0;
					}
				}
			`}</style>
		</div>
	);
}

export default About;

