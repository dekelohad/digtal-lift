import { motion } from "framer-motion";
import { teamsData } from "../../../data/teamsData";
import { useState, useEffect } from "react";
import "./Teams.css";

function Teams() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 992);
		};
		
		checkMobile();
		window.addEventListener('resize', checkMobile);
		
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return (
		<div className="team-section" style={{marginBottom:'4em'}}>
			<motion.div 
				className="team-title"
				initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: isMobile ? 0 : 0.5 }}
			>
				<motion.h2 
					className="main-title"
					initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: isMobile ? 0 : 0.5 }}
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
				>
					<span style={{ color: '#9FFF00', fontSize: '2.5rem',marginTop:'4em' }}>Meet Our Team of</span>
					<span style={{ letterSpacing: '0.1em' }}>DIGITAL EXPERTS</span>
				</motion.h2>
			</motion.div>
			
			<div className="team-grid">
				{teamsData.map((member, index) => (
					<motion.div 
						key={member.id} 
						className="team-member"
						initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: isMobile ? 0 : 0.5, delay: isMobile ? 0 : index * 0.1 }}
					>
						<img 
							src={member.img} 
							alt={member.name}
							loading="lazy"
							decoding="async"
							style={{ 
								opacity: 1,
								willChange: 'transform',
								transform: 'translateZ(0)'
							}}
						/>
						<h3>{member.name}</h3>
						<p>{member.designation}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
}

export default Teams;
