import { Link } from "react-router-dom";

function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link to="/">
				<span style={{
					display: "flex",
					alignItems: "center",
					gap: "12px"
				}}>
					<span style={{
						fontSize: "36px",
						fontWeight: "900",
						fontFamily: "Bricolage Grotesque, sans-serif",
						background: "linear-gradient(135deg, #fff 0%, #e0e0e0 100%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
						letterSpacing: "1px",
						textTransform: "uppercase"
					}}>
						Digital<span style={{ 
							color: "#4a90e2",
							WebkitTextFillColor: "initial",
							background: "linear-gradient(135deg, #4a90e2 0%, #357abd 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
							marginLeft: "8px"
						}}>Lift</span>
					</span>
					<span style={{ 
						fontSize: "32px",
						filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))"
					}}>🚀</span>
				</span>
			</Link>
		</div>
	);
}

export default HeaderLogo;
