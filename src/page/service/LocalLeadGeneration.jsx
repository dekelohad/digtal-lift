import BreadCrumb from "../../components/common/Breadcrumb";
import Testimonial from "../../components/home-one/testimonial";
import { FaRocket, FaChartLine, FaUsers, FaSearchDollar, FaUserCheck, FaCogs } from "react-icons/fa";

function LocalLeadGeneration() {
	return (
		<>
			<div style={{ background: "#000" }}>
				<BreadCrumb title="Local Lead Generation" />
			</div>

			{/* Hero Section */}
			<div style={{ 
				background: "linear-gradient(135deg, #000 0%, #111 100%)",
				padding: "80px 0",
				color: "white",
				marginTop: "-1px"
			}}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<h1 style={{
								fontSize: "3.5rem",
								fontWeight: "800",
								marginBottom: "25px",
								lineHeight: "1.2"
							}}>
								Transform Your Local Business with{" "}
								<span style={{
									background: "#c5f32c",
									padding: "0 15px",
									color: "#000",
									display: "inline-block",
									transform: "rotate(-2deg)",
									borderRadius: "4px"
								}}>
									High-Quality Leads
								</span>
							</h1>
							<p style={{
								fontSize: "1.2rem",
								lineHeight: "1.6",
								marginBottom: "30px",
								opacity: "0.9"
							}}>
								Stop wasting time with unqualified leads. Our proven system delivers pre-qualified, ready-to-buy customers directly to your business.
							</p>
							<button style={{
								background: "#c5f32c",
								color: "#000",
								border: "none",
								padding: "15px 40px",
								fontSize: "1.1rem",
								fontWeight: "600",
								borderRadius: "8px",
								cursor: "pointer",
								transition: "transform 0.3s ease",
								transform: "translateY(0)",
							}} onMouseOver={(e) => e.target.style.transform = "translateY(-3px)"}
							   onMouseOut={(e) => e.target.style.transform = "translateY(0)"}>
								Get Started Now
							</button>
						</div>
						<div className="col-lg-6">
							<img 
								src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
								alt="Lead Generation"
								style={{
									width: "100%",
									borderRadius: "12px",
									boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
								}}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div style={{ padding: "80px 0", background: "#fff" }}>
				<div className="container">
					<div className="text-center mb-5">
						<h2 style={{
							fontSize: "2.5rem",
							fontWeight: "700",
							marginBottom: "20px"
						}}>Why Choose Our Lead Generation Service?</h2>
						<p style={{
							fontSize: "1.1rem",
							color: "#666",
							maxWidth: "800px",
							margin: "0 auto"
						}}>
							We combine cutting-edge technology with proven marketing strategies to deliver exceptional results for your business.
						</p>
					</div>
					<div className="row">
						{[
							{
								icon: <FaRocket />,
								title: "Rapid Results",
								description: "See qualified leads flowing into your business within days, not months."
							},
							{
								icon: <FaChartLine />,
								title: "Proven ROI",
								description: "Our clients see an average of 300% return on their marketing investment."
							},
							{
								icon: <FaUsers />,
								title: "Targeted Reach",
								description: "Connect with customers actively searching for your services in your area."
							},
							{
								icon: <FaSearchDollar />,
								title: "Cost Effective",
								description: "Pay only for qualified leads that match your ideal customer profile."
							},
							{
								icon: <FaUserCheck />,
								title: "Pre-Qualified Leads",
								description: "Every lead is screened to ensure they're ready to make a purchase."
							},
							{
								icon: <FaCogs />,
								title: "Automated System",
								description: "Our system works 24/7 to capture and qualify leads while you focus on your business."
							}
						].map((feature, index) => (
							<div key={index} className="col-lg-4 col-md-6 mb-4">
								<div style={{
									padding: "30px",
									borderRadius: "12px",
									background: "#fff",
									boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
									height: "100%",
									transition: "transform 0.3s ease",
									cursor: "default"
								}} className="feature-card">
									<div style={{
										fontSize: "2.5rem",
										color: "#c5f32c",
										marginBottom: "20px",
										background: "#000",
										width: "60px",
										height: "60px",
										borderRadius: "12px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center"
									}}>
										{feature.icon}
									</div>
									<h3 style={{
										fontSize: "1.5rem",
										fontWeight: "600",
										marginBottom: "15px"
									}}>{feature.title}</h3>
									<p style={{
										fontSize: "1rem",
										color: "#666",
										margin: "0"
									}}>{feature.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Stats Section */}
			<div style={{ 
				padding: "80px 0",
				background: "linear-gradient(135deg, #000 0%, #111 100%)",
				color: "white"
			}}>
				<div className="container">
					<div className="row">
						{[
							{ number: "300%", label: "Average ROI" },
							{ number: "24/7", label: "Lead Generation" },
							{ number: "15-30", label: "Leads Per Week" },
							{ number: "90%", label: "Client Retention" }
						].map((stat, index) => (
							<div key={index} className="col-md-3 col-6 text-center mb-4 mb-md-0">
								<div style={{
									fontSize: "3rem",
									fontWeight: "800",
									color: "#c5f32c",
									marginBottom: "10px",
									lineHeight: "1"
								}}>{stat.number}</div>
								<div style={{
									fontSize: "1.1rem",
									opacity: "0.9"
								}}>{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Process Section */}
			<div style={{ padding: "80px 0", background: "#fff" }}>
				<div className="container">
					<div className="text-center mb-5">
						<h2 style={{
							fontSize: "2.5rem",
							fontWeight: "700",
							marginBottom: "20px"
						}}>Our Proven Process</h2>
						<p style={{
							fontSize: "1.1rem",
							color: "#666",
							maxWidth: "800px",
							margin: "0 auto"
						}}>
							A systematic approach to generating high-quality leads for your business
						</p>
					</div>
					<div className="row">
						{[
							{
								step: "01",
								title: "Strategy Development",
								description: "We analyze your business and market to create a customized lead generation strategy."
							},
							{
								step: "02",
								title: "Campaign Setup",
								description: "We set up targeted campaigns to reach your ideal customers when they're ready to buy."
							},
							{
								step: "03",
								title: "Lead Qualification",
								description: "Our system automatically screens and qualifies leads based on your criteria."
							},
							{
								step: "04",
								title: "Lead Delivery",
								description: "Qualified leads are instantly delivered to your team, ready for conversion."
							}
						].map((process, index) => (
							<div key={index} className="col-lg-3 col-md-6 mb-4">
								<div style={{
									padding: "30px",
									borderRadius: "12px",
									background: "#fff",
									boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
									height: "100%",
									position: "relative",
									overflow: "hidden"
								}}>
									<div style={{
										position: "absolute",
										top: "20px",
										right: "20px",
										fontSize: "4rem",
										fontWeight: "800",
										color: "rgba(0,0,0,0.05)",
										lineHeight: "1"
									}}>{process.step}</div>
									<h3 style={{
										fontSize: "1.5rem",
										fontWeight: "600",
										marginBottom: "15px",
										position: "relative"
									}}>{process.title}</h3>
									<p style={{
										fontSize: "1rem",
										color: "#666",
										margin: "0",
										position: "relative"
									}}>{process.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div style={{ 
				padding: "80px 0",
				background: "linear-gradient(135deg, #000 0%, #111 100%)",
				color: "white",
				textAlign: "center"
			}}>
				<div className="container">
					<h2 style={{
						fontSize: "3rem",
						fontWeight: "800",
						marginBottom: "25px"
					}}>Ready to Grow Your Business?</h2>
					<p style={{
						fontSize: "1.2rem",
						maxWidth: "800px",
						margin: "0 auto 30px",
						opacity: "0.9"
					}}>
						Join hundreds of successful businesses that trust us with their lead generation.
					</p>
					<button style={{
						background: "#c5f32c",
						color: "#000",
						border: "none",
						padding: "15px 40px",
						fontSize: "1.1rem",
						fontWeight: "600",
						borderRadius: "8px",
						cursor: "pointer",
						transition: "transform 0.3s ease",
						transform: "translateY(0)",
					}} onMouseOver={(e) => e.target.style.transform = "translateY(-3px)"}
					   onMouseOut={(e) => e.target.style.transform = "translateY(0)"}>
						Schedule a Free Consultation
					</button>
				</div>
			</div>

			{/* Testimonials */}
			<Testimonial />

			<style jsx>{`
				.feature-card:hover {
					transform: translateY(-10px);
				}
			`}</style>
		</>
	);
}

export default LocalLeadGeneration; 