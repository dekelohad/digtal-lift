import CountUp from "react-countup";

function AboutCounter() {
	return (
		<div className="aximo-counter-wrap" style={{
			background: "linear-gradient(145deg, #1a1a1a 0%, #000000 100%)",
			borderRadius: "20px",
			padding: "40px 30px",
			boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
		}}>
			<div className="aximo-counter-data" style={{
				textAlign: "center",
				marginBottom: "30px"
			}}>
				<h2 style={{
					fontSize: "3.5rem",
					fontWeight: "800",
					background: "linear-gradient(135deg, #BBFF00 0%, #85b900 100%)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					marginBottom: "10px"
				}}>
					<span className="aximo-counter">
						<CountUp end={500} duration={3} enableScrollSpy />
					</span>
					k+
				</h2>
				<p style={{
					fontSize: "1.1rem",
					color: "#fff",
					fontWeight: "500",
					textTransform: "uppercase",
					letterSpacing: "1px"
				}}>Leads Generated</p>
			</div>
			<div className="aximo-counter-data" style={{
				textAlign: "center",
				marginBottom: "30px"
			}}>
				<h2 style={{
					fontSize: "3.5rem",
					fontWeight: "800",
					background: "linear-gradient(135deg, #BBFF00 0%, #85b900 100%)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					marginBottom: "10px"
				}}>
					<span className="aximo-counter">
						<CountUp end={75} duration={3} enableScrollSpy />
					</span>
					%
				</h2>
				<p style={{
					fontSize: "1.1rem",
					color: "#fff",
					fontWeight: "500",
					textTransform: "uppercase",
					letterSpacing: "1px"
				}}>Lead Quality Rate</p>
			</div>
			<div className="aximo-counter-data" style={{
				textAlign: "center"
			}}>
				<h2 style={{
					fontSize: "3.5rem",
					fontWeight: "800",
					background: "linear-gradient(135deg, #BBFF00 0%, #85b900 100%)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					marginBottom: "10px"
				}}>
					<span className="aximo-counter">
						<CountUp end={3} duration={3} enableScrollSpy />
					</span>
					x
				</h2>
				<p style={{
					fontSize: "1.1rem",
					color: "#fff",
					fontWeight: "500",
					textTransform: "uppercase",
					letterSpacing: "1px"
				}}>Average ROI</p>
			</div>
		</div>
	);
}

export default AboutCounter;
