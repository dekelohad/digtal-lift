import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const FooterLink = ({ to, children }) => (
	<Link 
		to={to} 
		style={{ 
			color: "#e0e0e0", 
			textDecoration: "none", 
			fontSize: "15px",
			transition: "all 0.3s ease",
			display: "inline-block",
			position: "relative",
			padding: "2px 0"
		}}
		onMouseEnter={(e) => {
			e.currentTarget.style.color = "#CCFF00";
			e.currentTarget.style.transform = "translateX(10px)";
		}}
		onMouseLeave={(e) => {
			e.currentTarget.style.color = "#e0e0e0";
			e.currentTarget.style.transform = "translateX(0)";
		}}
	>
		{children}
	</Link>
);

function FooterBottom() {
	const currentYear = new Date().getFullYear();
	const phoneNumber = "+1 (123) 456-7890";
	const email = "info@digitallift.com";

	return (
		<div className="footer-wrapper">
			{/* Main Footer Content */}
			<div className="row mb-5">
				{/* Logo and About Column */}
				<div className="col-lg-4 mb-4 mb-lg-0">
					<div className="footer-logo-section">
						<Link to="/">
							<span style={{
								display: "flex",
								alignItems: "center",
								gap: "12px",
								marginBottom: "20px"
							}}>
								<span style={{
									fontSize: "36px",
									fontWeight: "900",
									fontFamily: "Bricolage Grotesque, sans-serif",
									background: "linear-gradient(135deg, #fff 0%, #e0e0e0 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
									letterSpacing: "1px",
									textTransform: "uppercase"
								}}>
									Digital<span style={{ 
										color: "#4a90e2",
										WebkitTextFillColor: "initial",
										background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										marginLeft: "8px"
									}}>Lift</span>
								</span>
								<span style={{ 
									fontSize: "32px",
									filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))"
								}}>🚀</span>
							</span>
						</Link>
						<p style={{ color: "#e0e0e0", fontSize: "15px", lineHeight: "1.8" }}>
							Ready to make your phone ring non-stop? We turn websites into 24/7 client-generating machines. Our proven systems deliver a consistent flow of premium leads while you sleep. From startups to industry giants, we've helped businesses 10X their growth through digital dominance.
						</p>
					</div>
				</div>

				{/* Quick Links Column */}
				<div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
					<h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "25px", fontWeight: "600" }}>Quick Links</h4>
					<ul style={{ listStyle: "none", padding: 0 }}>
						<li className="mb-2">
							<FooterLink to="/">Home</FooterLink>
						</li>
						<li className="mb-2">
							<FooterLink to="/about-us">About</FooterLink>
						</li>
						<li className="mb-2">
							<FooterLink to="/testimonials">Testimonials</FooterLink>
						</li>
						<li className="mb-2">
							<FooterLink to="/blog">Blog</FooterLink>
						</li>
						<li className="mb-2">
							<FooterLink to="/contact-us">Contact</FooterLink>
						</li>
					</ul>
				</div>

				{/* Services Column */}
				<div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
					<h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "25px", fontWeight: "600" }}>Our Services</h4>
					<ul style={{ listStyle: "none", padding: 0 }}>
						<li className="mb-2">
							<FooterLink to="/local-lead-generation">Local Lead Generation</FooterLink>
						</li>
						<li className="mb-2">
							<FooterLink to="/search-engine-optimization">Search Engine Optimization</FooterLink>
						</li>
						<li className="mb-2">
							<FooterLink to="/paid-search-marketing">Paid Search Marketing</FooterLink>
						</li>
						<li className="mb-2">
							<FooterLink to="/google-business-profile">Google Business Profile</FooterLink>
						</li>
						<li className="mb-2">
							<FooterLink to="/web-design">Web Design</FooterLink>
						</li>
						<li className="mb-2">
							<FooterLink to="/web-development">Web Development</FooterLink>
						</li>
					</ul>
				</div>

				{/* Contact Info Column */}
				<div className="col-lg-3 col-md-6">
					<h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "25px", fontWeight: "600" }}>Contact Info</h4>
					<ul style={{ listStyle: "none", padding: 0 }}>
						<li className="mb-3" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
							<FaPhone style={{ color: "#CCFF00" }} />
							<a 
								href={`tel:${phoneNumber}`} 
								style={{ 
									color: "#e0e0e0", 
									textDecoration: "none", 
									fontSize: "15px",
									transition: "all 0.3s ease"
								}}
								onMouseEnter={(e) => e.currentTarget.style.color = "#CCFF00"}
								onMouseLeave={(e) => e.currentTarget.style.color = "#e0e0e0"}
							>
								{phoneNumber}
							</a>
						</li>
						<li className="mb-3" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
							<FaEnvelope style={{ color: "#CCFF00" }} />
							<a 
								href={`mailto:${email}`} 
								style={{ 
									color: "#e0e0e0", 
									textDecoration: "none", 
									fontSize: "15px",
									transition: "all 0.3s ease"
								}}
								onMouseEnter={(e) => e.currentTarget.style.color = "#CCFF00"}
								onMouseLeave={(e) => e.currentTarget.style.color = "#e0e0e0"}
							>
								{email}
							</a>
						</li>
						<li style={{ display: "flex", alignItems: "start", gap: "10px" }}>
							<FaLocationDot style={{ color: "#CCFF00", marginTop: "4px" }} />
							<span style={{ color: "#e0e0e0", fontSize: "15px", lineHeight: "1.6" }}>
								11801 Domain Blvd, Suite W350<br />
								Austin, TX 78758
							</span>
						</li>
					</ul>
				</div>
			</div>

			{/* Copyright Section */}
			<div className="row pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
				<div className="col-12">
					<div className="text-center">
						<p style={{ color: "#e0e0e0", fontSize: "14px", margin: 0 }}>
							© Copyright {currentYear} Digital Lift, All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FooterBottom;
