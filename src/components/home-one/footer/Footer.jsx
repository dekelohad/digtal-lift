import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../../../assets/images/logo.png";
import "./Footer.css";

function Footer() {
	return (
		<footer className="footer-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="footer-widget">
							<div className="footer-logo">
								<Link to="/">
									<img src={Logo} alt="Logo" className="footer-logo-img" />
								</Link>
							</div>
							<p className="footer-description">
								Ready to make your phone ring non-stop? We turn websites into 24/7 client-generating machines. Our proven systems deliver a consistent flow of premium leads while you sleep. From startups to industry giants, we've helped businesses 10X their growth through digital dominance.
							</p>
						</div>
					</div>

					<div className="col-lg-2 col-md-6">
						<div className="footer-widget">
							<h3 className="footer-title">Quick Links</h3>
							<ul className="footer-links">
								<li><Link to="/" className="footer-link">Home</Link></li>
								<li><Link to="/about" className="footer-link">About</Link></li>
								<li><Link to="/testimonials" className="footer-link">Testimonials</Link></li>
								<li><Link to="/blog" className="footer-link">Blog</Link></li>
								<li><Link to="/contact" className="footer-link">Contact</Link></li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="footer-widget">
							<h3 className="footer-title">Our Services</h3>
							<ul className="footer-links">
								<li><Link to="/local-lead-generation" className="footer-link">Local Lead Generation</Link></li>
								<li><Link to="/search-engine-optimization" className="footer-link">Search Engine Optimization</Link></li>
								<li><Link to="/paid-search-marketing" className="footer-link">Paid Search Marketing</Link></li>
								<li><Link to="/google-business-profile" className="footer-link">Google Business Profile</Link></li>
								<li><Link to="/web-design" className="footer-link">Web Design</Link></li>
								<li><Link to="/web-development" className="footer-link">Web Development</Link></li>
							</ul>
						</div>
					</div>

					<div className="col-lg-3 col-md-6">
						<div className="footer-widget">
							<h3 className="footer-title">Contact Info</h3>
							<div className="contact-info">
								<div className="contact-item">
									<FaEnvelope className="contact-icon" />
									<a href="mailto:info@digitalLift.com" className="footer-link">info@digitalLift.com</a>
								</div>
								<div className="contact-item">
									<FaMapMarkerAlt className="contact-icon" />
									<span className="contact-text">
										11801 Domain Blvd, Suite W350<br />
										Austin, TX 78758
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="copyright-area">
				<div className="container">
					<p className="copyright-text">
						© Copyright {new Date().getFullYear()} Digital Lift, All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer; 