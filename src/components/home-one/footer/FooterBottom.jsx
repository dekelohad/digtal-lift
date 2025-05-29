import { Link, useNavigate } from "react-router-dom";

import "./FooterBottom.css";

const FooterLink = ({ to, children }) => {
	const navigate = useNavigate();

	const handleClick = (e) => {
		e.preventDefault();
		navigate(to);
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				behavior: 'instant'
			});
		}, 0);
	};

	return (
		<Link to={to} className="footer-bottom-link" onClick={handleClick}>
			{children}
		</Link>
	);
};

function FooterBottom() {
	const currentYear = new Date().getFullYear();
	const email = "info@digitalLift.io";

	return (
		<div className="footer-wrapper">
			<div className="row mb-5">
				<div className="col-lg-4 mb-4 mb-lg-0">
					<div className="footer-logo-section">
						<Link to="/" className="footer-brand">
							<span className="footer-brand-wrapper">
								<span className="footer-brand-text">
									Digital<span className="footer-brand-highlight">Lift</span>
								</span>
								<span className="footer-brand-emoji">🚀</span>
							</span>
						</Link>
						<p className="footer-description">
							Ready to make your phone ring non-stop? We turn websites into 24/7 client-generating machines. Our proven systems deliver a consistent flow of premium leads while you sleep. From startups to industry giants, we've helped businesses 10X their growth through digital dominance.
						</p>
					</div>
				</div>

				<div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
					<h4 className="footer-heading">Quick Links</h4>
					<ul className="footer-list">
						<li className="footer-item">
							<FooterLink to="/">Home</FooterLink>
						</li>
						<li className="footer-item">
							<FooterLink to="/about-us">About</FooterLink>
						</li>
						<li className="footer-item">
							<FooterLink to="/calculator">ROI Calculator</FooterLink>
						</li>
						<li className="footer-item">
							<FooterLink to="/testimonials">Testimonials</FooterLink>
						</li>
						<li className="footer-item">
							<FooterLink to="/contact-us">Contact</FooterLink>
						</li>
					</ul>
				</div>

				<div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
					<h4 className="footer-heading">Our Services</h4>
					<ul className="footer-list">
						<li className="footer-item">
							<FooterLink to="/local-lead-generation">Local Lead Generation</FooterLink>
						</li>
						<li className="footer-item">
							<FooterLink to="/paid-search-marketing">Paid Search Marketing</FooterLink>
						</li>
						<li className="footer-item">
							<FooterLink to="/search-engine-optimization">Search Engine Optimization</FooterLink>
						</li>
						<li className="footer-item">
							<FooterLink to="/google-business-profile">Google Business Profile</FooterLink>
						</li>
						<li className="footer-item">
							<FooterLink to="/web-design">Web Design</FooterLink>
						</li>
						<li className="footer-item">
							<FooterLink to="/web-development">Web Development</FooterLink>
						</li>
					</ul>
				</div>

				<div className="col-lg-3 col-md-6">
					<h4 className="footer-heading">Contact Info</h4>
					<ul className="footer-list">
						<li className="contact-item">
							<span className="contact-label">Phone: </span>
							<a href="tel:+17379376612" className="contact-link">
								+1 (737) 937-6612
							</a>
						</li>
						<li className="contact-item">
							<span className="contact-label">Email: </span>
							<a href={`mailto:${email}`} className="contact-link">
								{email}
							</a>
						</li>
						<li className="contact-item">
							<span className="contact-label">Address: </span>
							<span className="contact-link">
								11801 Domain Blvd, Suite W350<br />
								Austin, TX 78758
							</span>
						</li>
					</ul>
				</div>
			</div>

			<div className="copyright-section">
				<div className="col-12">
					<div className="copyright-wrapper">
						<p className="copyright-text">
							© Copyright {currentYear} Digital Lift, All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FooterBottom;
