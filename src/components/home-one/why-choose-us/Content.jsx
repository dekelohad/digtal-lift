import { FaMagic } from 'react-icons/fa';

function Content() {
	return (
		<div className="aximo-default-content">
			<h2>
				<span className="aximo-title-animation" style={{ color: "#BBFF00" }}>
					Transform Clicks Into Clients
					<span className="magic-container" style={{ 
						marginLeft: "30px",
						position: "relative",
						display: "inline-flex",
						alignItems: "center",
						verticalAlign: "middle"
					}}>
						<FaMagic className="magic-wand" style={{ 
							fontSize: "40px", 
							color: "#BBFF00",
							animation: "magicWave 2s ease-in-out infinite",
							transformOrigin: "bottom right",
							position: "relative",
							zIndex: 2,
							filter: "drop-shadow(0 0 10px rgba(187, 255, 0, 0.5))"
						}} />
						<div className="sparkle-container"></div>
					</span>
				</span>
			</h2>
			<style jsx>{`
				@keyframes magicWave {
					0% { transform: rotate(0deg) scale(1); }
					25% { transform: rotate(-15deg) scale(1.1); }
					50% { transform: rotate(0deg) scale(1); }
					75% { transform: rotate(15deg) scale(1.1); }
					100% { transform: rotate(0deg) scale(1); }
				}

				@keyframes sparkle {
					0%, 100% { transform: scale(0); opacity: 0; }
					50% { transform: scale(1); opacity: 1; }
				}

				@keyframes float {
					0%, 100% { transform: translateY(0); }
					50% { transform: translateY(-10px); }
				}

				.magic-container {
					animation: float 3s ease-in-out infinite;
				}

				.sparkle-container {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
				}

				.sparkle-container::before,
				.sparkle-container::after {
					content: '✨';
					position: absolute;
					font-size: 20px;
					color: #BBFF00;
					text-shadow: 0 0 10px rgba(187, 255, 0, 0.8);
					animation: sparkle 2s ease-in-out infinite;
				}

				.sparkle-container::before {
					top: -10px;
					left: -10px;
					animation-delay: 0.3s;
				}

				.sparkle-container::after {
					bottom: -10px;
					right: -10px;
					animation-delay: 0.6s;
				}

				.magic-wand {
					display: inline-block;
					transition: all 0.3s ease;
				}

				.magic-wand:hover {
					transform: scale(1.2) rotate(-15deg);
					filter: drop-shadow(0 0 20px rgba(187, 255, 0, 0.8));
				}
			`}</style>
			<p>
				Tired of waiting for leads? We build automated systems that deliver a constant stream of 
				qualified clients to your business. No more guessing - just predictable growth and 
				a calendar full of high-value opportunities.
			</p>
		</div>
	);
}

export default Content;
