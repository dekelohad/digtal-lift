import { FaTrophy } from "react-icons/fa";

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
					<h2 style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
						<div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", whiteSpace: "nowrap" }}>
							<FaTrophy
								className="animated-icon reverse-spin"
								style={{
									fontSize: "50px",
									color: "#FFA500",
									filter: "drop-shadow(0 0 20px rgba(255, 165, 0, 0.8))",
									marginBottom: "-10px"
								}}
							/>
							<span>Real Success</span>
							<FaTrophy
								className="animated-icon"
								style={{
									fontSize: "50px",
									color: "#FFA500",
									filter: "drop-shadow(0 0 20px rgba(255, 165, 0, 0.8))",
									marginBottom: "-10px"
								}}
							/>
						</div>
						<div style={{ 
							fontSize: "inherit", 
							marginTop: "-10px",
							textAlign: "center"
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
								borderRadius: "8px",
								padding: "25px",
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
									alignItems: "center",
									marginBottom: "15px"
								}}>
									<img 
										src={testimonial.image} 
										alt={testimonial.name}
										loading="lazy"
										style={{
											width: "50px",
											height: "50px",
											borderRadius: "50%",
											marginRight: "15px",
											objectFit: "cover"
										}}
									/>
									<div>
										<h4 style={{
											fontSize: "1.1rem",
											fontWeight: "600",
											marginBottom: "2px"
										}}>
											{testimonial.name}
										</h4>
										<p style={{
											fontSize: "0.9rem",
											color: "#666",
											marginBottom: "0"
										}}>
											{testimonial.role}
										</p>
									</div>
								</div>
								
								<div style={{
									display: "flex",
									alignItems: "center",
									marginBottom: "15px"
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
											height: "20px",
											marginRight: "8px"
										}}
									/>
									<span style={{
										fontSize: "0.85rem",
										color: "#666"
									}}>
										{testimonial.date}
									</span>
								</div>

								<p style={{
									fontSize: "0.95rem",
									lineHeight: "1.6",
									color: "#333",
									marginBottom: "15px"
								}}>
									{testimonial.text}
								</p>

								{testimonial.verified && (
									<div style={{
										display: "flex",
										alignItems: "center",
										fontSize: "0.85rem",
										color: "#34a853"
									}}>
										<svg 
											viewBox="0 0 24 24" 
											style={{
												width: "16px",
												height: "16px",
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
				<style jsx>{`
					@keyframes fadeIn {
						from {
							opacity: 0;
							transform: translateY(20px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					.animated-icon {
						animation: float 3s ease-in-out infinite, 
								 pulse 2s ease-in-out infinite,
								 sparkle 2s ease-in-out infinite;
						transform-origin: center center;
					}

					.reverse-spin {
						animation: float 3s ease-in-out infinite reverse, 
								 pulse 2s ease-in-out infinite,
								 sparkle 2s ease-in-out infinite;
					}

					@keyframes float {
						0% { transform: translateY(0) rotate(0deg); }
						25% { transform: translateY(-6px) rotate(5deg); }
						50% { transform: translateY(0) rotate(0deg); }
						75% { transform: translateY(6px) rotate(-5deg); }
						100% { transform: translateY(0) rotate(0deg); }
					}

					@keyframes pulse {
						0% { transform: scale(1); }
						50% { transform: scale(1.2); }
						100% { transform: scale(1); }
					}

					@keyframes sparkle {
						0% { filter: drop-shadow(0 0 20px rgba(255, 165, 0, 0.8)); }
						25% { filter: drop-shadow(0 0 25px rgba(255, 165, 0, 0.9)); }
						50% { filter: drop-shadow(0 0 30px rgba(255, 165, 0, 1)); }
						75% { filter: drop-shadow(0 0 25px rgba(255, 165, 0, 0.9)); }
						100% { filter: drop-shadow(0 0 20px rgba(255, 165, 0, 0.8)); }
					}

					.scroll-text {
						animation: scroll 30s linear infinite;
						font-size: 1.1rem;
						font-weight: 700;
						letter-spacing: 1px;
						color: white;
					}

					.scroll-item {
						padding: 0 20px;
						transition: all 0.3s ease;
					}

					.scroll-item:hover {
						color: #c5f32c;
						transform: scale(1.05);
					}

					.star {
						color: #FFA500;
						display: inline-block;
						animation: twinkle 1s ease-in-out infinite;
					}

					@keyframes twinkle {
						0%, 100% { opacity: 1; }
						50% { opacity: 0.5; }
					}

					@keyframes scroll {
						0% {
							transform: translateX(0);
						}
						100% {
							transform: translateX(-50%);
						}
					}

					@media (max-width: 768px) {
						.scroll-text {
							font-size: 0.9rem;
						}
					}

					.infinite-scroll-wrapper:hover .scroll-text {
						animation-play-state: paused;
					}
				`}</style>
			</div>
		</div>
	);
}

export default Testimonial;
