import { motion } from "framer-motion";
import { FaPhoneVolume, FaUserCheck, FaChartLine, FaClock } from "react-icons/fa";
import "./Story.css";

function Story() {
	return (
		<div className="story-section">
			<div className="container">
				<div className="story-content">
					<motion.div 
						className="title-container"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6 }}
					>
						<motion.h2 
							className="main-title"
							initial={{ y: 30 }}
							whileInView={{ y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							style={{
								display: 'flex',
								justifyContent: 'center',
								gap: '20px',
								alignItems: 'center'
							}}
						>
							<motion.span 
								className="highlight-word"
								initial={{ x: -30 }}
								whileInView={{ x: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								style={{ marginBottom: 0, color: "#BBFF00" }}
							>
								QUALITY
							</motion.span>
							<motion.span 
								className="highlight-word"
								initial={{ x: -30 }}
								whileInView={{ x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								style={{ marginBottom: 0, color: "#BBFF00" }}
							>
								CALLS
							</motion.span>
							<motion.span 
								className="highlight-word"
								initial={{ x: -30 }}
								whileInView={{ x: 0 }}
								transition={{ duration: 0.6, delay: 0.5 }}
								style={{ marginBottom: 0, color: "#BBFF00" }}
							>
								DAILY
							</motion.span>
						</motion.h2>

						<motion.h3 
							className="subtitle"
									initial={{ y: 20, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.6, delay: 0.6 }}
						>
							FROM READY-TO-BUY CUSTOMERS
						</motion.h3>

						<motion.div 
							className="highlight-box"
							initial={{ scale: 0.9, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.7 }}
						>
							<FaPhoneVolume className="highlight-icon" />
							<h4>Every call is a potential high-ticket job.</h4>
						</motion.div>
					</motion.div>

					<div className="features-grid">
						<motion.div 
							className="feature-box"
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.8 }}
							whileHover={{ scale: 1.02 }}
						>
							<FaUserCheck className="feature-icon" />
							<div className="feature-content">
								<h5>Pre-Qualified Leads</h5>
								<p>No more wasting time with tire-kickers or price shoppers. Our systems pre-qualify every lead, ensuring you only talk to serious buyers ready to move forward with your services.</p>
							</div>
						</motion.div>

						<motion.div 
							className="feature-box"
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.9 }}
							whileHover={{ scale: 1.02 }}
						>
							<FaChartLine className="feature-icon" />
							<div className="feature-content">
								<h5>Consistent Growth</h5>
								<p>Experience the power of consistent, quality lead flow. While others struggle to find customers, you'll have a steady stream of pre-qualified buyers calling you every day.</p>
							</div>
						</motion.div>

						<motion.div 
							className="feature-box"
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 1.0 }}
							whileHover={{ scale: 1.02 }}
						>
							<FaClock className="feature-icon" />
							<div className="feature-content">
								<h5>24/7 Lead Generation</h5>
								<p>Your website becomes a 24/7 lead generation machine, bringing you qualified prospects while you sleep. Ready to become long-term clients.</p>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Story;
