import React, { useEffect } from 'react';
import BreadCrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../components/animation/FadeInStaggerTwo";

function ContactUs() {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<>
			<BreadCrumb title="Contact Us" />
			<ContactInfo />
			
			{/* Hero Section */}
			<div className="section" style={{ 
				padding: "60px 0", 
				background: "var(--dark-bg)",
				marginBottom: "20px"
			}}>
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-lg-8 col-md-10 col-11">
							<h1 style={{ 
								fontSize: "clamp(32px, 5vw, 48px)", 
								marginBottom: "20px",
								color: "#BBFF00",
								lineHeight: "1.2"
							}}>
								Book Your Strategy Call Today
							</h1>
							<p style={{ 
								fontSize: "clamp(16px, 3vw, 18px)", 
								color: "#e0e0e0", 
								marginBottom: "30px",
								lineHeight: "1.6",
								padding: "0 15px"
							}}>
								Ready to transform your digital presence? Schedule a 15-minute call with our experts and discover how we can boost your online growth with tailored marketing strategies.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Calendar Booking Section */}
			<div className="section" style={{ 
				padding: "40px 0", 
				background: "#000",
				marginBottom: "20px"
			}}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12">
							<div 
								className="tidycal-embed" 
								data-path="digitallift/15-minute-meeting"
								style={{
									background: "rgba(255, 255, 255, 0.03)",
									borderRadius: "15px",
									padding: "20px"
								}}
							></div>
						</div>
					</div>
				</div>
			</div>

			{/* Map Section */}
			<div className="section" style={{ 
				padding: "40px 0",
				margin: "20px 0",
				background: "#000"
			}}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 px-lg-0 px-3">
							<div style={{
								borderRadius: "15px",
								overflow: "hidden",
								boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
								opacity: "0.8"
							}}>
								<iframe 
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.9333729446566!2d-97.7274368!3d30.402116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cc6f9d11c4f9%3A0x3ada0c49e459928c!2s11801%20Domain%20Blvd%2C%20Austin%2C%20TX%2078758!5e0!3m2!1sen!2sus!4v1234567890"
									width="100%" 
									height="350" 
									style={{ border: 0 }} 
									allowFullScreen="" 
									loading="lazy" 
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ContactForm />
			<TwoColumnFaq />
		</>
	);
}

export default ContactUs;
