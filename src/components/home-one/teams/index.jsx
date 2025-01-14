import { motion } from "framer-motion";
import { teamsData } from "../../../data/teamsData";
import "./Teams.css";

function Teams() {
	return (
		<div className="team-section">
			<motion.div 
				className="team-title"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<motion.h2 
					className="main-title"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
				>
					<span style={{ color: '#9FFF00', fontSize: '2.5rem' }}>Meet Our Team of</span>
					<span style={{ letterSpacing: '0.1em' }}>DIGITAL EXPERTS</span>
				</motion.h2>
			</motion.div>
			
			<div className="team-grid">
				{teamsData.map((member, index) => (
					<motion.div 
						key={member.id} 
						className="team-member"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<img src={member.img} alt={member.name} />
						<h3>{member.name}</h3>
						<p>{member.designation}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
}

export default Teams;
