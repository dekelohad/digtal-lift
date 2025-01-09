import Call2Img from "../../assets/images/icon/call2.svg";
import EmailImg from "../../assets/images/icon/email.svg";
import MapImg from "../../assets/images/icon/map.svg";
import { FaClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function ContactInfo() {
	const boxStyle = {
		background: "#111",
		backdropFilter: "blur(10px)",
		borderRadius: "15px",
		padding: "25px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		textAlign: "center",
		transition: "all 0.3s ease",
		width: "100%",
		height: "100%",
		border: "1px solid rgba(187, 255, 0, 0.1)",
		boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
		position: "relative"
	};

	const iconStyle = {
		width: "50px",
		height: "50px",
		color: "#BBFF00",
		marginBottom: "15px",
		fontSize: "50px"
	};

	const titleStyle = {
		color: "#BBFF00",
		fontSize: "24px",
		marginBottom: "12px"
	};

	const textStyle = {
		color: "#fff",
		textDecoration: "none",
		fontSize: "1.5rem",
		lineHeight: "1.6",
		transition: "color 0.3s ease"
	};

	const linkStyle = {
		...textStyle,
		cursor: "pointer",
		fontSize: "1.5rem"
	};

	const hoverEffect = (e) => {
		e.currentTarget.style.transform = "translateY(-5px)";
		e.currentTarget.style.boxShadow = "0 8px 30px rgba(187, 255, 0, 0.2), 0 0 20px rgba(187, 255, 0, 0.15)";
		e.currentTarget.style.border = "2px solid #BBFF00";
		e.currentTarget.style.background = "linear-gradient(145deg, rgba(187, 255, 0, 0.08), rgba(0, 0, 0, 0.1))";
	};

	const removeHoverEffect = (e) => {
		e.currentTarget.style.transform = "translateY(0)";
		e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
		e.currentTarget.style.border = "1px solid rgba(187, 255, 0, 0.1)";
		e.currentTarget.style.background = "#111";
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}
		}
	};

	const itemVariants = {
		hidden: { 
			opacity: 0,
			y: 20
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut"
			}
		}
	};

	return (
		<div className="section" style={{ 
			padding: "20px 0",
			background: "#000",
			marginBottom: "0"
		}}>
			<div className="container">
				<div className="row justify-content-center">
					<motion.div 
						className="col-12 text-center mb-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h2 style={{
							fontSize: "clamp(32px, 5vw, 48px)",
							marginBottom: "15px",
							color: "#BBFF00",
							lineHeight: "1.2"
						}}>
							Contact Information
						</h2>
						<p style={{
							fontSize: "clamp(16px, 3vw, 18px)",
							color: "#e0e0e0",
							maxWidth: "800px",
							margin: "0 auto 20px",
							lineHeight: "1.6"
						}}>
							Get in touch with us through your preferred method of communication
						</p>
					</motion.div>
					<div className="col-lg-10 col-md-10 col-11">
						<motion.div 
							variants={containerVariants}
							initial="hidden"
							animate="visible"
							style={{ 
								display: "grid",
								gridTemplateColumns: "repeat(3, 1fr)",
								gap: "20px"
							}}
						>
							<motion.div variants={itemVariants} style={boxStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
								<div style={{ marginBottom: "20px" }}>
									<img src={EmailImg} alt="Email" style={iconStyle} />
								</div>
								<h3 style={titleStyle}>Email us</h3>
								<a 
									href="mailto:info@digitalLift.com"
									style={linkStyle}
									onMouseEnter={(e) => e.currentTarget.style.color = "#BBFF00"}
									onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}
								>
									info@digitalLift.com
								</a>
							</motion.div>

							<motion.div variants={itemVariants} style={boxStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
								<div style={{ marginBottom: "20px" }}>
									<FaClock style={iconStyle} />
								</div>
								<h3 style={titleStyle}>Business Hours</h3>
								<p style={{ ...textStyle, lineHeight: "1.5", margin: 0 }}>
									Sunday - Saturday<br />
									9:00 AM - 6:00 PM (CST)
								</p>
							</motion.div>

							<motion.div variants={itemVariants} style={boxStyle} onMouseEnter={hoverEffect} onMouseLeave={removeHoverEffect}>
								<h3 style={titleStyle}>Office Address</h3>
								<div style={{ 
									display: "flex",
									alignItems: "center",
									gap: "12px",
									textAlign: "left"
								}}>
									<FaLocationDot style={{
										color: "#BBFF00",
										fontSize: "24px"
									}} />
									<p style={{ 
										...textStyle, 
										margin: 0
									}}>
										11801 Domain Blvd, Suite W350<br />
										Austin, TX 78758
									</p>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
