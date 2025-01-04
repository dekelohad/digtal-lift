import Call2Img from "../../assets/images/icon/call2.svg";
import EmailImg from "../../assets/images/icon/email.svg";
import MapImg from "../../assets/images/icon/map.svg";
import { FaClock } from 'react-icons/fa';

function ContactInfo() {
	const boxStyle = {
		background: "rgba(255, 255, 255, 0.03)",
		backdropFilter: "blur(10px)",
		borderRadius: "15px",
		padding: "30px",
		display: "flex",
			flexDirection: "column",
			alignItems: "center",
			textAlign: "center",
			transition: "transform 0.3s ease, box-shadow 0.3s ease",
			width: "100%",
			height: "100%"
	};

	const iconStyle = {
		width: "40px",
		height: "40px",
		color: "#BBFF00"
	};

	const titleStyle = {
		color: "#BBFF00",
		fontSize: "24px",
		marginBottom: "15px"
	};

	const textStyle = {
		color: "#fff",
		textDecoration: "none",
		fontSize: "18px",
		transition: "color 0.3s ease"
	};

	const linkStyle = {
		...textStyle,
		cursor: "pointer"
	};

	const hoverEffect = (e) => {
		e.currentTarget.style.transform = "translateY(-5px)";
		e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
	};

	const removeHoverEffect = (e) => {
		e.currentTarget.style.transform = "translateY(0)";
		e.currentTarget.style.boxShadow = "none";
	};

	return (
		<div className="section" style={{ 
			padding: "20px 0",
			background: "#000",
			marginBottom: "0"
		}}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 text-center mb-4">
						<h2 style={{
							fontSize: "clamp(32px, 5vw, 48px)",
							marginBottom: "15px",
							color: "#BBFF00",
							lineHeight: "1.2"
						}}>
							Schedule Your Digital Marketing Strategy Session
						</h2>
						<p style={{
							fontSize: "clamp(16px, 3vw, 18px)",
							color: "#e0e0e0",
							maxWidth: "800px",
							margin: "0 auto 20px",
							lineHeight: "1.6"
						}}>
							Choose your preferred way to connect with us and take the first step towards your digital success
						</p>
					</div>
					<div className="col-lg-10 col-md-10 col-11">
						<div style={{ 
							display: "grid",
							gridTemplateColumns: "repeat(1, 1fr)",
							gap: "20px",
							"@media (min-width: 768px)": {
								gridTemplateColumns: "repeat(2, 1fr)"
							}
						}}>
							<div style={boxStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
								<div style={{ marginBottom: "20px" }}>
									<img src={Call2Img} alt="Call" style={iconStyle} />
								</div>
								<h3 style={titleStyle}>Call us</h3>
								<a 
									href="tel:+1 (123) 456-7890"
									style={linkStyle}
									onMouseEnter={(e) => e.currentTarget.style.color = "#BBFF00"}
									onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}
								>
									+1 (123) 456-7890
								</a>
							</div>

							<div style={boxStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
								<div style={{ marginBottom: "20px" }}>
									<img src={EmailImg} alt="Email" style={iconStyle} />
								</div>
								<h3 style={titleStyle}>Email us</h3>
								<a 
									href="mailto:info@digitallift.com"
									style={linkStyle}
									onMouseEnter={(e) => e.currentTarget.style.color = "#BBFF00"}
									onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}
								>
									info@digitallift.com
								</a>
							</div>

							<div style={boxStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
								<div style={{ marginBottom: "20px" }}>
									<img src={MapImg} alt="Location" style={iconStyle} />
								</div>
								<h3 style={titleStyle}>Office address</h3>
								<p style={{ ...textStyle, lineHeight: "1.5", margin: 0 }}>
									11801 Domain Blvd,<br />
									Suite W350<br />
									Austin, TX 78758
								</p>
							</div>

							<div style={boxStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
								<div style={{ marginBottom: "20px" }}>
									<FaClock style={iconStyle} />
								</div>
								<h3 style={titleStyle}>Business Hours</h3>
								<p style={{ ...textStyle, lineHeight: "1.5", margin: 0 }}>
									Sunday - Saturday<br />
									9:00 AM - 6:00 PM (CST)
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style>
				{`
					@media (min-width: 768px) {
						.container .row > div > div {
							grid-template-columns: repeat(2, 1fr) !important;
						}
					}
				`}
			</style>
		</div>
	);
}

export default ContactInfo;
