import React, { useEffect } from 'react';
import BreadCrumb from "../components/common/Breadcrumb";
import ContactInfo from "../components/contact/ContactInfo";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
import { Helmet } from 'react-helmet-async';

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
		<div className="contact-us-page">
			<Helmet>
				<title>Contact Digital Lift | Book Your Free Strategy Call Today</title>
				<meta
					name="description"
					content="Transform your business growth with Digital Lift. Schedule a free 15-minute strategy call and discover how our proven lead generation systems can help you dominate your market."
				/>
			</Helmet>
			<div className="breadcrumb-wrapper">
				<BreadCrumb title="Contact Us" />
			</div>
			<ContactInfo />
			
			{/* Hero Section */}
			<div className="section" style={{ 
				padding: "30px 0", 
				background: "var(--dark-bg)",
				marginBottom: "0"
			}}>
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-lg-8 col-md-10 col-11">
							<h1 style={{ 
								fontSize: "clamp(32px, 5vw, 48px)", 
								marginBottom: "15px",
								color: "#BBFF00",
								lineHeight: "1.2"
							}}>
								Book Your Strategy Call Today
							</h1>
							<p style={{ 
								fontSize: "clamp(16px, 3vw, 18px)", 
								color: "#e0e0e0", 
								marginBottom: "20px",
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
				padding: "20px 0", 
				background: "#000",
				marginBottom: "0"
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

			<TwoColumnFaq />
		</div>
	);
}

export default ContactUs;
