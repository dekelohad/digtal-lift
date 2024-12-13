import FadeInStagger from "../../animation/FadeInStagger";
import TeamCard from "./TeamCard";

function Teams({ teams }) {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						<div className="title-wrapper">
							<div className="meet-text">Meet Our Team of</div>
							<div className="main-title">DIGITAL EXPERTS</div>
							<div className="tagline-wrapper">
								<div className="tagline">Driving Growth & Innovation</div>
								<div className="tagline-underline"></div>
							</div>
						</div>
					</h2>
					<style jsx>{`
						.title-wrapper {
							display: flex;
							flex-direction: column;
							align-items: center;
							gap: 15px;
						}

						.meet-text {
							font-size: 2.2rem;
							color: #1a1d27;
							font-weight: 500;
						}

						.main-title {
							font-size: 4.5rem;
							font-weight: 800;
							color: #1a1d27;
							letter-spacing: 3px;
							margin: 10px 0;
						}

						.tagline-wrapper {
							position: relative;
							padding-bottom: 15px;
						}

						.tagline {
							font-size: 1.8rem;
							color: #BBFF00;
							font-weight: 600;
							letter-spacing: 1.5px;
							opacity: 0;
							animation: fadeInSlide 0.8s ease forwards;
						}

						.tagline-underline {
							position: absolute;
							bottom: 0;
							left: 50%;
							transform: translateX(-50%);
							height: 3px;
							background: #BBFF00;
							opacity: 0.8;
							animation: expandLine 1.2s ease-in-out forwards;
						}

						@keyframes fadeInSlide {
							from {
								opacity: 0;
								transform: translateY(10px);
							}
							to {
								opacity: 1;
								transform: translateY(0);
							}
						}

						@keyframes expandLine {
							0% {
								width: 0;
							}
							100% {
								width: 100px;
							}
						}

						.tagline-wrapper:hover .tagline-underline {
							animation: glowPulse 2s ease-in-out infinite;
						}

						@keyframes glowPulse {
							0%, 100% {
								box-shadow: 0 0 10px rgba(187, 255, 0, 0.3);
								width: 100px;
							}
							50% {
								box-shadow: 0 0 20px rgba(187, 255, 0, 0.6);
								width: 120px;
							}
						}

						@media (max-width: 768px) {
							.meet-text {
								font-size: 1.8rem;
							}
							.main-title {
								font-size: 3.2rem;
							}
							.tagline {
								font-size: 1.4rem;
							}
						}
					`}</style>
				</div>
				<div className="row">
					{teams.map((team, index) => (
						<FadeInStagger key={team.id} index={index} className="col-xl-3 col-md-6">
							<TeamCard team={team} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Teams;
