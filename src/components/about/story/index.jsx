import Star2Img from "../../../assets/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section" style={{ padding: "60px 0 90px" }}>
			<div className="container">
				<div className="aximo-section-title center title-description">
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
