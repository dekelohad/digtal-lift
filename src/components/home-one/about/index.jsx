import Star2Img from "../../../assets/images/v1/star2.png";
import CountUp from "react-countup";
import './about.css';

function About() {
	return (
		<div className="section aximo-section-padding">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title" style={{ 
					textAlign: "center",
					marginTop: "100px"
				}}>
					<h2 className="main-title" style={{ 
						fontSize: "clamp(40px, 5.5vw, 88px)",
						fontWeight: "800",
						lineHeight: "1.1",
						marginBottom: "40px",
						fontFamily: "'Anybody', sans-serif",
						marginTop: "-20px",
						padding: "0 15px"
					}}>
						<div style={{ 
							marginBottom: "10px",
							whiteSpace: "normal",
							wordWrap: "break-word",
							color: "#fff"
						}}>
							We Make Your Phone
						</div>
						<div className="highlight-text" style={{ 
							color: "#BBFF00",
							position: "relative",
							display: "inline-flex",
							alignItems: "center",
							gap: "20px",
							marginTop: "10px"
						}}>
							Ring Non-Stop
							<div className="phone-animation" style={{
								position: "relative",
								width: "60px",
								height: "60px",
								flexShrink: 0
							}}>
								<div className="phone-icon"></div>
								<div className="ring-wave"></div>
								<div className="ring-wave"></div>
								<div className="ring-wave"></div>
							</div>
						</div>
					</h2>
					<p style={{
						fontSize: "clamp(18px, 2vw, 22px)",
						lineHeight: "1.8",
						color: "#fff",
						maxWidth: "900px",
						margin: "0 auto 60px",
						fontWeight: "500",
						textAlign: "center",
						padding: "0 15px"
					}}>
						Stop wasting money on meaningless clicks. We deliver what matters:
						<span style={{ 
							color: "#fff",
							fontWeight: "800",
							display: "block",
							margin: "20px 0",
							fontSize: "clamp(22px, 2.5vw, 28px)",
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
						marginBottom: "0",
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
		</div>
	);
}

export default About;

