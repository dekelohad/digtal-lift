import { FaMagic } from 'react-icons/fa';
import './content.css';

function Content() {
	return (
		<div className="aximo-default-content" style={{ marginTop: "-80px" }}>
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
			<p>
				Tired of waiting for leads? We build automated systems that deliver a constant stream of 
				qualified clients to your business. No more guessing - just predictable growth and 
				a calendar full of high-value opportunities.
			</p>
		</div>
	);
}

export default Content;
