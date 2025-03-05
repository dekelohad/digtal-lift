import { FaClock, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function ContactInfo() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 992);
		};
		
		checkMobile();
		window.addEventListener('resize', checkMobile);
		
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const boxStyle = {
		background: "#111",
		backdropFilter: "blur(10px)",
		borderRadius: "12px",
		padding: isMobile ? "15px" : "25px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		textAlign: "center",
		transition: "all 0.3s ease",
		width: "100%",
		height: "100%",
		border: "1px solid #BBFF00",
		boxShadow: "0 0 20px rgba(187, 255, 0, 0.15)",
		position: "relative"
	};

	const iconStyle = {
		width: isMobile ? "40px" : "50px",
		height: isMobile ? "40px" : "50px",
		color: "#BBFF00",
		marginBottom: isMobile ? "10px" : "15px",
		fontSize: isMobile ? "40px" : "50px"
	};

	const titleStyle = {
		color: "#BBFF00",
		fontSize: isMobile ? "20px" : "24px",
		marginBottom: isMobile ? "8px" : "12px"
	};

	const textStyle = {
		color: "#fff",
		textDecoration: "none",
		fontSize: isMobile ? "1.2rem" : "1.5rem",
		lineHeight: "1.6",
		transition: "color 0.3s ease"
	};

	const linkStyle = {
		...textStyle,
		cursor: "pointer",
		fontSize: isMobile ? "1.2rem" : "1.5rem"
	};

	const hoverEffect = (e) => {
		e.currentTarget.style.transform = "translateY(-2px)";
		e.currentTarget.style.border = "1px solid #BBFF00";
		e.currentTarget.style.boxShadow = "0 0 25px rgba(187, 255, 0, 0.2)";
		e.currentTarget.style.background = "#111";
	};

	const removeHoverEffect = (e) => {
		e.currentTarget.style.transform = "translateY(0)";
		e.currentTarget.style.border = "1px solid #BBFF00";
		e.currentTarget.style.boxShadow = "0 0 20px rgba(187, 255, 0, 0.15)";
		e.currentTarget.style.background = "#111";
	};

	const containerVariants = {
		hidden: { opacity: isMobile ? 1 : 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: isMobile ? 0 : 0.3,
				staggerChildren: isMobile ? 0 : 0.2
			}
		}
	};

	const itemVariants = {
		hidden: { 
			opacity: 1,
			y: 0
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0
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
						initial={{ opacity: 1, y: 0 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0 }}
					>
						<h2 style={{
							fontSize: "clamp(32px, 5vw, 48px)",
							marginBottom: "15px",
							color: "#BBFF00",
							lineHeight: "1.2",
							padding: "0 20px",
							marginTop:'3em',
						}}>
							Contact Information
						</h2>
						<p style={{
							fontSize: "clamp(16px, 3vw, 18px)",
							color: "#e0e0e0",
							maxWidth: "800px",
							margin: "0 auto 20px",
							lineHeight: "1.6",
							padding: "0 20px"
						}}>
							Get in touch with us through your preferred method of communication
						</p>
					</motion.div>
					<div className="col-lg-10 col-md-10 col-11">
						<motion.div 
							variants={containerVariants}
							initial="hidden"
							animate="visible"
							className="contact-grid"
							style={{ 
								display: "grid",
								gap: isMobile ? "15px" : "20px",
								padding: "0 10px"
							}}
						>
							<motion.div variants={itemVariants} style={{
								...boxStyle,
								
							}} onMouseEnter={!isMobile ? hoverEffect : undefined} onMouseLeave={!isMobile ? removeHoverEffect : undefined}>
								<div style={{ marginBottom: isMobile ? "15px" : "20px" }}>
									<FaEnvelope style={iconStyle} />
								</div>
								<h3 style={titleStyle}>Email us</h3>
								<a 
									href="mailto:info@digitalLift.io"
									style={{
										...linkStyle,
										wordBreak: "break-word",
										padding: "0 10px"
									}}
									onMouseEnter={(e) => e.currentTarget.style.color = "#BBFF00"}
									onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}
								>
									info@digitalLift.io
								</a>
							</motion.div>

							<motion.div variants={itemVariants} style={{
								...boxStyle,
								minHeight: isMobile ? "200px" : "250px",
								padding: isMobile ? "15px" : "25px"
							}} onMouseEnter={!isMobile ? hoverEffect : undefined} onMouseLeave={!isMobile ? removeHoverEffect : undefined}>
								<div style={{ marginBottom: isMobile ? "15px" : "20px" }}>
									<FaClock style={iconStyle} />
								</div>
								<h3 style={titleStyle}>Business Hours</h3>
								<p style={{ 
									...textStyle, 
									lineHeight: "1.5", 
									margin: 0,
									padding: "0 10px"
								}}>
									Sunday - Saturday<br />
									9:00 AM - 6:00 PM (CST)
								</p>
							</motion.div>

							<motion.div variants={itemVariants} style={{
								...boxStyle,
								minHeight: isMobile ? "200px" : "250px",
								padding: isMobile ? "15px" : "25px"
							}} onMouseEnter={!isMobile ? hoverEffect : undefined} onMouseLeave={!isMobile ? removeHoverEffect : undefined}>
								<div style={{ marginBottom: isMobile ? "15px" : "20px" }}>
									<FaLocationDot style={iconStyle} />
								</div>
								<h3 style={titleStyle}>Office Address</h3>
								<p style={{ 
									...textStyle, 
									margin: 0,
									padding: "0 10px"
								}}>
									11801 Domain Blvd, Suite W350<br />
									Austin, TX 78758
								</p>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
