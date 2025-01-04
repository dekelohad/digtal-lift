import Star2Img from "../../../assets/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section" style={{ padding: "60px 0 90px" }}>
			<div className="container">
				<div className="aximo-section-title center title-description">
					<div style={{ marginBottom: "80px" }}>
						<h2 style={{
							fontSize: "5rem",
							fontWeight: "800",
							lineHeight: "1.2",
							textAlign: "center",
							marginBottom: "20px"
						}}>
							QUALITY<br />
							CALLS<br />
							DAILY
						</h2>
						<h3 style={{
							fontSize: "2rem",
							fontWeight: "600",
							color: "#333",
							textAlign: "center",
							marginBottom: "40px",
							letterSpacing: "1px"
						}}>
							FROM READY-TO-BUY CUSTOMERS
						</h3>
						<h4 style={{
							fontSize: "2.2rem",
							fontWeight: "700",
							color: "#000",
							textAlign: "center",
							marginBottom: "30px"
						}}>
							Every call is a potential high-ticket job.
						</h4>
						<p style={{
							fontSize: "1.2rem",
							lineHeight: "1.8",
							textAlign: "center",
							maxWidth: "900px",
							margin: "0 auto 30px"
						}}>
							No more wasting time with tire-kickers or price shoppers.
							Our systems pre-qualify every lead, ensuring you only talk
							to serious buyers ready to move forward with your
							services.
						</p>
						<p style={{
							fontSize: "1.2rem",
							lineHeight: "1.8",
							textAlign: "center",
							maxWidth: "900px",
							margin: "0 auto 60px"
						}}>
							Experience the power of consistent, quality lead flow. While
							others struggle to find customers, you'll have a steady
							stream of pre-qualified buyers calling you every day, ready to
							become long-term clients.
						</p>
					</div>
				</div>

				<StoryPhotos />

				<div className="aximo-story-content" style={{ marginTop: "80px" }}>
					<div className="aximo-section-title center">
						<h2 className="title" style={{ 
							fontSize: "3.5rem", 
							fontWeight: "700",
							marginBottom: "2rem",
							background: "linear-gradient(135deg, #000 0%, #333 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent"
						}}>Our Core Vision</h2>

						<p className="text" style={{ fontSize: "1.2rem", lineHeight: "1.8", marginBottom: "3rem" }}>
							Transforming businesses through innovative lead generation and digital dominance. We envision a world where every ambitious business can achieve exponential growth through strategic digital presence and consistent high-quality lead flow.
						</p>

						<p className="text" style={{ fontSize: "1.2rem", lineHeight: "1.8", marginBottom: "4rem" }}>
							Our team consists of elite digital marketers, lead generation specialists, and growth strategists. We've mastered the art and science of making phones ring with qualified prospects, helping businesses scale predictably and profitably.
						</p>

						<h2 className="title" style={{ 
							fontSize: "3.5rem", 
							fontWeight: "700",
							marginBottom: "2rem",
							background: "linear-gradient(135deg, #000 0%, #333 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent"
						}}>Our Mission</h2>

						<p className="text" style={{ fontSize: "1.2rem", lineHeight: "1.8", marginBottom: "3rem" }}>
							To revolutionize how businesses acquire customers by creating automated lead generation systems that deliver consistent results. We're committed to helping businesses escape the feast-and-famine cycle and achieve predictable growth.
						</p>

						<p className="text" style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
							We specialize in turning websites into 24/7 lead generation machines. Our focus is on quality over quantity - delivering pre-qualified prospects who are ready to become high-value clients. Every strategy we implement is measured by one metric: how many new customers it brings to your business.
						</p>
					</div>
				</div>

				<style jsx>{`
					@keyframes slideIn {
						from {
							opacity: 0;
							transform: translateX(-30px);
						}
						to {
							opacity: 1;
							transform: translateX(0);
						}
					}
					
					@keyframes fadeInUp {
						from {
							opacity: 0;
							transform: translateY(20px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes fadeInScale {
						from {
							opacity: 0;
							transform: scale(0.95);
						}
						to {
							opacity: 1;
							transform: scale(1);
						}
					}
				`}</style>
			</div>
		</div>
	);
}

export default Story;
