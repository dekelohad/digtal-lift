import Star2Img from "../../../assets/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="aximo-section-title center title-description">
					<h2>
						<span className="aximo-title-animation">
							From Leads to Revenue
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="star" />
							</span>
						</span>
						 Your Growth Partner
					</h2>
					<p>
						Digital Lift was born from a game-changing realization: while most agencies chase vanity metrics, businesses need one thing - a constantly ringing phone with qualified buyers on the line. We've cracked the code on predictable lead generation, transforming websites into 24/7 client-acquisition machines that deliver pre-qualified customers directly to your business.
					</p>
				</div>

				<StoryPhotos />

				<div className="aximo-story-content">
					<StoryContent />
				</div>
			</div>
		</div>
	);
}

export default Story;
