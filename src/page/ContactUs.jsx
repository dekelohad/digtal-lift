import React from 'react';
import BreadCrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../components/animation/FadeInStaggerTwo";

function ContactUs() {
	return (
		<>
			<BreadCrumb title="Contact Us" />
			
			{/* Hero Section */}
			<div className="section" style={{ padding: "80px 0", background: "var(--dark-bg)" }}>
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-lg-8">
							<h1 style={{ 
								fontSize: "48px", 
								marginBottom: "20px",
								background: "linear-gradient(135deg, #fff 0%, #BBFF00 100%)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent"
							}}>
								Let's Start a Conversation
							</h1>
							<p style={{ 
								fontSize: "18px", 
								color: "#e0e0e0", 
								marginBottom: "30px",
								lineHeight: "1.6"
							}}>
								Ready to take your business to the next level? We're here to help you achieve your digital marketing goals.
							</p>
						</div>
					</div>
				</div>
			</div>

			<ContactInfo />

			{/* Business Hours Section */}
			<div className="section" style={{ padding: "80px 0", background: "var(--dark-bg)" }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 text-center">
							<h2 style={{ marginBottom: "40px", color: "#fff" }}>Business Hours</h2>
							<div style={{ 
								background: "rgba(255, 255, 255, 0.05)", 
								padding: "30px", 
								borderRadius: "15px",
								backdropFilter: "blur(10px)"
							}}>
								<div>
									<h4 style={{ color: "#BBFF00", marginBottom: "10px" }}>Sunday - Saturday</h4>
									<p style={{ color: "#e0e0e0", margin: 0 }}>9:00 AM - 6:00 PM (CST)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Map Section */}
			<div className="section" style={{ padding: "80px 0" }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12">
							<iframe 
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.9333729446566!2d-97.7274368!3d30.402116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cc6f9d11c4f9%3A0x3ada0c49e459928c!2s11801%20Domain%20Blvd%2C%20Austin%2C%20TX%2078758!5e0!3m2!1sen!2sus!4v1234567890"
								width="100%" 
								height="450" 
								style={{ border: 0, borderRadius: "15px" }} 
								allowFullScreen="" 
								loading="lazy" 
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</div>

		 
			<TwoColumnFaq />
		</>
	);
}

export default ContactUs;
