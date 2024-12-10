import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function FooterBottom() {
	const currentYear = new Date().getFullYear();

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
							Empowering businesses with cutting-edge digital solutions. We help you grow your online presence and reach your target audience effectively.
						</p>
					</div>
				</div>

				{/* Quick Links Column */}
				<div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
					<h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "25px", fontWeight: "600" }}>Quick Links</h4>
					<ul style={{ listStyle: "none", padding: 0 }}>
						<li className="mb-2">
							<Link to="/" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "15px" }}>Home</Link>
						</li>
						<li className="mb-2">
							<Link to="/about-us" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "15px" }}>About</Link>
						</li>
						<li className="mb-2">
							<Link to="/testimonials" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "15px" }}>Testimonials</Link>
						</li>
						<li className="mb-2">
							<Link to="/blog" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "15px" }}>Blog</Link>
						</li>
						<li className="mb-2">
							<Link to="/contact-us" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "15px" }}>Contact</Link>
						</li>
					</ul>
				</div>

				{/* Services Column */}
				<div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
					<h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "25px", fontWeight: "600" }}>Our Services</h4>
					<ul style={{ listStyle: "none", padding: 0 }}>
						<li className="mb-2">
							<Link to="/local-lead-generation" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "15px" }}>Local Lead Generation</Link>
						</li>
						<li className="mb-2">
							<Link to="/paid-search-marketing" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "15px" }}>Paid Search Marketing</Link>
						</li>
						<li className="mb-2">
							<Link to="/search-engine-optimization" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "15px" }}>SEO</Link>
						</li>
						<li className="mb-2">
							<Link to="/google-my-business" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "15px" }}>Google My Business</Link>
						</li>
						<li className="mb-2">
							<Link to="/web-design" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "15px" }}>Web Design</Link>
						</li>
						<li className="mb-2">
							<Link to="/web-development" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "15px" }}>Web Development</Link>
						</li>
					</ul>
				</div>

				{/* Contact Info Column */}
				<div className="col-lg-3 col-md-6">
					<h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "25px", fontWeight: "600" }}>Contact Info</h4>
					<ul style={{ listStyle: "none", padding: 0 }}>
						<li className="mb-3" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
							<FaPhone style={{ color: "#CCFF00" }} />
							<a href="tel:+1234567890" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "15px" }}>+1 (234) 567-890</a>
						</li>
						<li className="mb-3" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
							<FaEnvelope style={{ color: "#CCFF00" }} />
							<a href="mailto:info@digitallift.com" style={{ color: "#e0e0e0", textDecoration: "none", fontSize: "15px" }}>info@digitallift.com</a>
						</li>
						<li style={{ display: "flex", alignItems: "start", gap: "10px" }}>
							<FaLocationDot style={{ color: "#CCFF00", marginTop: "4px" }} />
							<span style={{ color: "#e0e0e0", fontSize: "15px", lineHeight: "1.6" }}>
								123 Business Street,<br />
								Suite 100,<br />
								San Francisco, CA 94111
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
							&copy; Copyright {currentYear}, All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FooterBottom;
