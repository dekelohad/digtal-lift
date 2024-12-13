import { FaPhone } from 'react-icons/fa';

function Content() {
	return (
		<div className="aximo-default-content">
			<h2>
				<span className="aximo-title-animation">
					Make Your Phone Ring Non-Stop
					<span className="aximo-title-icon phone-container" style={{ marginLeft: "-50px", marginRight: "0", position: "relative", display: "inline-flex", alignItems: "center", verticalAlign: "middle" }}>
						<FaPhone className="ringing-phone" style={{ 
							fontSize: "35px", 
							color: "#00c664",
							animation: "ringing 0.8s ease-in-out infinite",
							transformOrigin: "50% 50%",
							position: "relative",
							zIndex: 2
						}} />
						<span className="ring-animation"></span>
					</span>
				</span>
			</h2>
			<style jsx>{`
				@keyframes ringing {
					0% { transform: rotate(-15deg) scale(1); }
					25% { transform: rotate(15deg) scale(1.1); }
					50% { transform: rotate(-15deg) scale(1); }
					75% { transform: rotate(15deg) scale(1.1); }
					100% { transform: rotate(-15deg) scale(1); }
				}

				@keyframes ringWave {
					0% {
						transform: scale(1);
						opacity: 0.8;
					}
					100% {
						transform: scale(2);
						opacity: 0;
					}
				}

				@keyframes phoneEntrance {
					0% {
						opacity: 0;
						transform: scale(0.5) rotate(-45deg);
					}
					100% {
						opacity: 1;
						transform: scale(1) rotate(0);
					}
				}

				.phone-container {
					display: inline-block;
					position: relative;
					animation: phoneEntrance 0.6s ease-out forwards;
				}

				.ring-animation {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 35px;
					height: 35px;
					border-radius: 50%;
					border: 2px solid #00c664;
					animation: ringWave 1.2s infinite;
				}

				.ring-animation::after {
					content: '';
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 35px;
					height: 35px;
					border-radius: 50%;
					border: 2px solid #00c664;
					animation: ringWave 1.2s infinite 0.4s;
				}

				.ringing-phone {
					display: inline-block;
					transition: all 0.3s ease;
					filter: drop-shadow(0 0 10px rgba(0, 198, 100, 0.5));
				}

				.ringing-phone:hover {
					transform: scale(1.2);
					filter: drop-shadow(0 0 15px rgba(0, 198, 100, 0.8));
				}
			`}</style>
			<p>
				Tired of waiting for leads? We build automated systems that deliver a constant stream of 
				qualified clients to your business. No more guessing - just predictable growth and 
				a calendar full of high-value opportunities.
			</p>

			<div className="process-steps">
				<div className="step">
					<h3>01/ Dominate Local Search</h3>
					<p>
						We make your business impossible to miss. When potential clients search for your services, 
						you'll be right there at the top. Our proven systems ensure your phone rings with qualified 
						buyers who need your services now, not time-wasters.
					</p>
				</div>

				<div className="step">
					<h3>02/ Automate Client Acquisition</h3>
					<p>
						Your lead generation on autopilot. Our 24/7 systems capture, qualify, and convert prospects 
						into paying clients while you sleep. Watch your calendar fill up with high-value appointments 
						without lifting a finger.
					</p>
				</div>

				<div className="step">
					<h3>03/ Multiply Your Results</h3>
					<p>
						As your phone starts ringing more, we amplify what works. Using real data, we optimize and 
						scale your campaigns to bring even more qualified leads. Your business grows while our 
						systems do the heavy lifting.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Content;
