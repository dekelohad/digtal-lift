import Star2Img from "../../../assets/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section" style={{ padding: "60px 0 90px" }}>
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2 style={{
						position: "relative",
						fontFamily: "'Anybody', sans-serif",
						textAlign: "center",
						maxWidth: "1200px",
						margin: "0 auto"
					}}>
						<div style={{
							fontSize: "5.5rem",
							fontWeight: "900",
							lineHeight: "0.85",
							color: "#000",
							letterSpacing: "-3px",
							textTransform: "uppercase",
							marginBottom: "10px",
							opacity: 0,
							animation: "slideIn 0.8s ease-out forwards"
						}}>
							Quality
						</div>
						<div style={{
							fontSize: "6.5rem",
							fontWeight: "900",
							lineHeight: "0.85",
							color: "#000",
							letterSpacing: "-3px",
							textTransform: "uppercase",
							marginBottom: "10px",
								opacity: 0,
								animation: "slideIn 0.8s ease-out forwards 0.2s"
						}}>
							Calls
						</div>
						<div style={{
							fontSize: "6.5rem",
							fontWeight: "900",
							lineHeight: "0.85",
							color: "#000",
							letterSpacing: "-3px",
							textTransform: "uppercase",
							marginBottom: "0",
							opacity: 0,
							animation: "slideIn 0.8s ease-out forwards 0.4s"
						}}>
							Daily
						</div>
						<div style={{
							fontSize: "2.4rem",
							color: "#222",
							fontWeight: "600",
							letterSpacing: "4px",
							marginTop: "25px",
							textTransform: "uppercase",
							opacity: 0,
							animation: "fadeInUp 0.8s ease-out forwards 0.8s"
						}}>
							From Ready-To-Buy Customers
						</div>
					</h2>
					<p style={{
						fontSize: "1.6rem",
						lineHeight: "1.6",
						color: "#333",
						maxWidth: "900px",
						margin: "50px auto 0",
						fontWeight: "500",
						textAlign: "center",
						padding: "0 25px",
						letterSpacing: "0.2px",
						opacity: 0,
						animation: "fadeInUp 1s ease-out forwards 1s"
					}}>
						<span style={{
							display: "block",
							fontSize: "2.2rem",
							fontWeight: "700",
							color: "#000",
							margin: "0 0 25px 0",
							letterSpacing: "-0.5px",
							lineHeight: "1.3",
							opacity: 0,
							animation: "fadeInScale 0.8s ease-out forwards 1.2s"
						}}>
							Every call is a potential high-ticket job.
						</span>
						<span style={{
							display: "block",
							fontSize: "1.8rem",
							fontWeight: "600",
							color: "#222",
							marginBottom: "25px",
							lineHeight: "1.5",
							letterSpacing: "-0.3px",
							opacity: 0,
							animation: "fadeInScale 0.8s ease-out forwards 1.4s"
						}}>
							No more wasting time with tire-kickers or price shoppers. Our systems pre-qualify every lead, ensuring you only talk to serious buyers ready to move forward with your services.
						</span>
						<span style={{
							display: "block",
							fontSize: "1.7rem",
							fontWeight: "500",
							color: "#333",
							letterSpacing: "0px",
							lineHeight: "1.6",
							opacity: 0,
							animation: "fadeInScale 0.8s ease-out forwards 1.6s"
						}}>
							Experience the power of consistent, quality lead flow. While others struggle to find customers, you'll have a steady stream of pre-qualified buyers calling you every day, ready to book your premium services.
						</span>
					</p>
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

				<StoryPhotos />

				<div className="aximo-story-content" style={{ marginTop: "80px" }}>
					<StoryContent />
				</div>
			</div>
		</div>
	);
}

export default Story;
