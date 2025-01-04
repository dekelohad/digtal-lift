import Star2Img from "../../../assets/images/v1/star2.png";
import CountUp from "react-countup";

function About() {
	return (
		<div className="section aximo-section-padding">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title" style={{ textAlign: "center" }}>
					<h2 style={{ 
						fontSize: "5.5rem",
						fontWeight: "800",
						lineHeight: "1.1",
						marginBottom: "40px",
						fontFamily: "'Anybody', sans-serif"
					}}>
						<div style={{ 
							marginBottom: "20px",
							whiteSpace: "nowrap"
						}}>
							We Make Your Phone
						</div>
						<div style={{ 
							color: "#BBFF00",
							position: "relative",
							display: "inline-block"
							}}>
							Ring Non-Stop
							<img 
								src={Star2Img} 
								alt="Star" 
								style={{
									width: "40px",
									height: "40px",
									position: "absolute",
									right: "-60px",
									top: "50%",
									transform: "translateY(-50%)",
									filter: "drop-shadow(0 0 10px rgba(187, 255, 0, 0.3))",
									animation: "starGlow 3s ease-in-out infinite"
								}}
							/>
						</div>
					</h2>
					<p style={{
						fontSize: "1.25rem",
						lineHeight: "1.8",
						color: "#666",
						maxWidth: "800px",
						margin: "0 auto 60px"
					}}>
						While others focus on likes and clicks, we deliver what matters:
						<span style={{ 
							color: "#333",
							fontWeight: "600"
						}}> qualified buyers calling your business</span>. 
						Our proven systems generate consistent leads that convert into paying customers.
					</p>

					<div style={{
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
							<div style={{
								fontSize: "5rem",
								fontWeight: "800",
								color: "#BBFF00",
								marginBottom: "10px",
								fontFamily: "'Anybody', sans-serif",
								lineHeight: "1"
							}}>
								<CountUp end={30} duration={3} enableScrollSpy />k+
							</div>
							<div style={{
								fontSize: "1rem",
								color: "#fff",
								textTransform: "uppercase",
								letterSpacing: "1px"
							}}>LEADS GENERATED</div>
						</div>
						<div style={{ 
							flex: 1, 
							textAlign: "center",
							borderLeft: "1px solid rgba(255,255,255,0.1)",
							borderRight: "1px solid rgba(255,255,255,0.1)",
							margin: "0 60px",
							paddingLeft: "60px",
							paddingRight: "60px"
						}}>
							<div style={{
								fontSize: "5rem",
								fontWeight: "800",
								color: "#BBFF00",
								marginBottom: "10px",
								fontFamily: "'Anybody', sans-serif",
								lineHeight: "1"
							}}>
								<CountUp end={92} duration={3} enableScrollSpy />%
							</div>
							<div style={{
								fontSize: "1rem",
								color: "#fff",
								textTransform: "uppercase",
								letterSpacing: "1px"
							}}>LEAD QUALITY RATE</div>
						</div>
						<div style={{ flex: 1, textAlign: "center" }}>
							<div style={{
								fontSize: "5rem",
								fontWeight: "800",
								color: "#BBFF00",
								marginBottom: "10px",
								fontFamily: "'Anybody', sans-serif",
								lineHeight: "1"
							}}>
								<CountUp end={15} duration={3} enableScrollSpy />x
							</div>
							<div style={{
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
				@keyframes starGlow {
					0%, 100% {
						filter: drop-shadow(0 0 10px rgba(187, 255, 0, 0.3));
						transform: scale(1) rotate(0deg);
					}
					50% {
						filter: drop-shadow(0 0 20px rgba(187, 255, 0, 0.5));
						transform: scale(1.1) rotate(5deg);
					}
				}
			`}</style>
		</div>
	);
}

export default About;
