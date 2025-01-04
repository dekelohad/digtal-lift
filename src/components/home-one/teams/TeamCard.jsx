import { Link } from "react-router-dom";

function TeamCard({ team }) {
	return (
		<div className="aximo-team-card">
			<div className="thumb" style={{
				height: "350px",
				overflow: "hidden",
				borderRadius: "15px",
				marginBottom: "25px"
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
			<div className="content">
				<h4 className="title">{team.name}</h4>
				<span className="designation">{team.designation}</span>
			</div>
		</div>
	);
}

export default TeamCard;
