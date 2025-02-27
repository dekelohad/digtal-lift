import { FaTrophy } from "react-icons/fa";
import './testimonial.css';

const testimonialsData = [
	{
		id: 1,
		name: "Mike Johnson",
		role: "Owner, Johnson Roofing LLC",
		image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=500&auto=format&fit=crop",
		rating: 5,
		date: "2 weeks ago",
		text: "Digital Lift transformed our business. Within the first month, we got 47 qualified leads and closed 18 high-ticket roofing jobs. Their lead qualification system is incredible - no more time wasted on tire kickers. Now we're getting 3-4 quality calls daily from homeowners ready to move forward. Best marketing investment we've made.",
		verified: true
	},
	{
		id: 2,
		name: "Sarah Williams",
		role: "Director, Williams Plumbing Services",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
		rating: 5,
		date: "1 month ago",
		text: "Finally found an agency that delivers real results. We were spending thousands on ads with another company but barely getting any calls. Digital Lift completely turned this around. Now we're getting 15-20 qualified leads per week, and their pre-qualification system means these are serious customers ready to book. Our revenue has increased by 140% in just 3 months.",
		verified: true
	},
	{
		id: 3,
		name: "David Martinez",
		role: "CEO, Elite HVAC Solutions",
		image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop",
		rating: 5,
		date: "2 months ago",
		text: "The ROI with Digital Lift has been incredible. They've helped us generate over $380K in new business in just 4 months. What sets them apart is the quality of leads - these are pre-qualified customers actively looking for our services. Their system ensures we only get calls from people ready to move forward. Highly recommend if you want quality leads that actually convert.",
		verified: true
	}
];

function Testimonial() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2 className="success-stories-title" style={{ 
						display: "flex", 
						flexDirection: "column", 
						alignItems: "center", 
						gap: "20px"
					}}>
						<div className="success-stories-header" style={{ 
							display: "flex", 
							alignItems: "center", 
							justifyContent: "center", 
							gap: "20px", 
							whiteSpace: "nowrap",
							padding: "0 15px"
						}}>
							<FaTrophy
								className="animated-icon reverse-spin trophy-icon"
								style={{
									fontSize: "50px",
									color: "#FFA500",
									filter: "drop-shadow(0 0 20px rgba(255, 165, 0, 0.8))",
									marginBottom: "-10px"
								}}
							/>
							<span className="success-text" style={{ 
								color: '#fff',
								fontSize: "36px",
								fontWeight: "700"
							}}>
								Real Success
							</span>
							<FaTrophy
								className="animated-icon trophy-icon"
								style={{
									fontSize: "50px",
									color: "#FFA500",
									filter: "drop-shadow(0 0 20px rgba(255, 165, 0, 0.8))",
									marginBottom: "-10px"
								}}
							/>
						</div>
						<div className="stories-text" style={{ 
							fontSize: "36px",
							marginTop: "-10px",
							textAlign: "center",
							color: '#fff',
							fontWeight: "700",
							padding: "0 15px"
						}}>
							Stories
						</div>
					</h2>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial) => (
						<div className="col-lg-4 mb-4" key={testimonial.id}>
							<div style={{
								background: "#fff",
								borderRadius: "12px",
								padding: "clamp(15px, 4vw, 25px)",
								height: "100%",
								boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
								transition: "transform 0.3s ease, opacity 0.3s ease",
								cursor: "default",
								position: "relative",
								opacity: 0,
								animation: "fadeIn 0.5s forwards"
							}}>
								<div style={{
									display: "flex",
									marginBottom: "clamp(12px, 3vw, 15px)",
									gap: "clamp(10px, 3vw, 15px)"
								}}>
									<img 
										src={testimonial.image} 
										alt={testimonial.name}
										loading="lazy"
										style={{
											width: "clamp(40px, 10vw, 50px)",
											height: "clamp(40px, 10vw, 50px)",
											borderRadius: "50%",
											objectFit: "cover",
											flexShrink: 0
										}}
									/>
									<div style={{
										display: "grid",
										gridTemplateColumns: "auto 1fr"
									}}>
										<div style={{
											gridColumn: "1 / -1"
										}}>
											<h4 style={{
												fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
												fontWeight: "600",
												lineHeight: "1.2",
												margin: 0,
												color: "#333",
												marginBottom: "2px"
											}}>
												{testimonial.name}
											</h4>
											<p className="testimonial-role" style={{
												fontSize: "clamp(0.8rem, 2vw, 0.85rem)",
												color: "#666",
												margin: 0,
												lineHeight: "1.3",
												fontWeight: "400",
											}}>
												{testimonial.role}
											</p>
										</div>
									</div>
								</div>

								<div style={{
									display: "flex",
									alignItems: "center",
									marginBottom: "clamp(12px, 3vw, 15px)",
									flexWrap: "wrap",
									gap: "8px"
								}}>
									<div style={{
										display: "flex",
										marginRight: "10px"
									}}>
										{"★".repeat(testimonial.rating).split("").map((star, index) => (
											<span key={index} style={{ color: "#fbbc05" }}>
												{star}
											</span>
										))}
									</div>
									<img 
										src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
										alt="Google"
										loading="lazy"
										style={{
											height: "clamp(16px, 4vw, 20px)",
											marginRight: "8px"
										}}
									/>
									<span style={{
										fontSize: "clamp(0.8rem, 2vw, 0.85rem)",
										color: "#666"
									}}>
										{testimonial.date}
									</span>
								</div>

								<p style={{
									fontSize: "clamp(0.9rem, 2.2vw, 0.95rem)",
									lineHeight: "1.6",
									color: "#333",
									marginBottom: "clamp(12px, 3vw, 15px)"
								}}>
									{testimonial.text}
								</p>

								{testimonial.verified && (
									<div style={{
										display: "flex",
										alignItems: "center",
										fontSize: "clamp(0.8rem, 2vw, 0.85rem)",
										color: "#34a853",
										marginTop: "auto"
									}}>
										<svg 
											viewBox="0 0 24 24" 
											style={{
												width: "clamp(14px, 3.5vw, 16px)",
												height: "clamp(14px, 3.5vw, 16px)",
												marginRight: "4px",
												fill: "currentColor"
											}}
										>
											<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
										</svg>
										Verified Review
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
