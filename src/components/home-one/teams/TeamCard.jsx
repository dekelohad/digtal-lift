import { Link } from "react-router-dom";

function TeamCard({ team }) {
	return (
		<div className="aximo-team-card" style={{
			marginBottom: "30px",
			maxWidth: "280px",
			margin: "0 auto 30px"
		}}>
			<div className="thumb" style={{
				height: "auto",
				aspectRatio: "4/5",
				overflow: "hidden",
				borderRadius: "12px",
				marginBottom: "20px",
				position: "relative",
				boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
			}}>
				<img 
					src={team.img} 
					alt={team.name}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						objectPosition: "center top"
					}}
				/>
			</div>
			<div className="content" style={{
				textAlign: "center",
				padding: "0 10px",
				background: "rgba(255, 255, 255, 0.95)",
				borderRadius: "8px",
				backdropFilter: "blur(5px)",
				boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
				padding: "15px",
			}}>
				<h4 className="title" style={{
					fontSize: "22px",
					fontWeight: "700",
					marginBottom: "10px",
					color: "#1a1d27",
					letterSpacing: "0.3px",
					textShadow: "0 1px 1px rgba(0,0,0,0.1)"
				}}>{team.name}</h4>
				<span className="designation" style={{
					fontSize: "16px",
					color: "#444",
					fontWeight: "600",
					letterSpacing: "0.4px",
					display: "block",
					marginTop: "5px",
					background: "linear-gradient(45deg, #BBFF00, #98CC00)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
				}}>{team.designation}</span>
			</div>
			<style jsx>{`
				@media (max-width: 768px) {
					.thumb {
						aspectRatio: "1/1.1" !important;
					}
					.title {
						fontSize: "18px" !important;
					}
					.designation {
						fontSize: "15px" !important;
					}
				}
			`}</style>
		</div>
	);
}

export default TeamCard;
