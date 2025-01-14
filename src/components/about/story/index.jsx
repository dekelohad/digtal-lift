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
						transition={{ duration: 0.3 }}
					>
						<motion.h2 
							className="main-title quality-title"
							initial={{ y: 30 }}
							whileInView={{ y: 0 }}
							transition={{ duration: 0.3, delay: 0.1 }}
							style={{ color: '#9FFF00' }}
						>
							QUALITY CALLS DAILY
						</motion.h2>

						<motion.h3 
							className="subtitle"
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.5 }}
						>
							FROM READY-TO-BUY CUSTOMERS
						</motion.h3>

						<motion.div 
							className="highlight-box"
							initial={{ scale: 0.9, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.6 }}
						>
							<FaPhoneVolume className="highlight-icon" />
							<h4>Every call is a potential high-ticket job.</h4>
						</motion.div>
					</motion.div>

					<div className="features-grid">
						<motion.div 
							className="feature-box"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.7 }}
						>
							<FaUserCheck className="feature-icon" />
							<div className="feature-content">
								<h5>Pre-Qualified Leads</h5>
								<p>No more wasting time with tire-kickers or price shoppers. Our systems pre-qualify every lead, ensuring you only talk to serious buyers ready to move forward with your services.</p>
							</div>
						</motion.div>

						<motion.div 
							className="feature-box"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 1.3 }}
						>
							<FaChartLine className="feature-icon" />
							<div className="feature-content">
								<h5>Consistent Growth</h5>
								<p>Experience the power of consistent, quality lead flow. While others struggle to find customers, you'll have a steady stream of pre-qualified buyers calling you every day.</p>
							</div>
						</motion.div>

						<motion.div 
							className="feature-box"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 1.9 }}
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
