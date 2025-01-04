
function AutoSlider() {
	return (
	<div className="infinite-scroll-wrapper" style={{ 
		overflow: "hidden", 
		marginBottom: "40px",
		background: "linear-gradient(90deg, #000 0%, #111 100%)",
		padding: "15px 0",
		borderRadius: "8px",
		cursor: "default"
	}}>
		<div className="scroll-text" style={{ 
			whiteSpace: "nowrap", 
			display: "flex"
		}}>
			<div className="scroll-item">INNOVATE FEARLESSLY <span className="star">★</span> TRANSFORM DIGITALLY <span className="star">★</span> DOMINATE MARKETS <span className="star">★</span>&nbsp;</div>
			<div className="scroll-item">INNOVATE FEARLESSLY <span className="star">★</span> TRANSFORM DIGITALLY <span className="star">★</span> DOMINATE MARKETS <span className="star">★</span>&nbsp;</div>
			<div className="scroll-item">INNOVATE FEARLESSLY <span className="star">★</span> TRANSFORM DIGITALLY <span className="star">★</span> DOMINATE MARKETS <span className="star">★</span>&nbsp;</div>
			<div className="scroll-item">INNOVATE FEARLESSLY <span className="star">★</span> TRANSFORM DIGITALLY <span className="star">★</span> DOMINATE MARKETS <span className="star">★</span>&nbsp;</div>
		</div>
		</div>
	);
}

export default AutoSlider;