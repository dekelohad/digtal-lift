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
				position: "relative"
			}}>
				<img 
					src={team.img} 
					alt={team.name}
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
						objectPosition: "center top",
						transition: "transform 0.3s ease"
					}}
				/>
			</div>
			<div className="content" style={{
				textAlign: "center",
				padding: "0 10px"
			}}>
				<h4 className="title" style={{
					fontSize: "18px",
					fontWeight: "700",
					marginBottom: "8px",
					color: "#1a1d27",
					letterSpacing: "0.2px"
				}}>{team.name}</h4>
				<span className="designation" style={{
					fontSize: "15px",
					color: "#666",
					fontWeight: "500",
					letterSpacing: "0.3px"
				}}>{team.designation}</span>
			</div>
			<style jsx>{`
				@media (max-width: 768px) {
					.thumb {
						aspectRatio: "1/1.1" !important;
					}
					.title {
						fontSize: "16px" !important;
					}
					.designation {
						fontSize: "14px" !important;
					}
				}
			`}</style>
		</div>
	);
}

export default TeamCard;
