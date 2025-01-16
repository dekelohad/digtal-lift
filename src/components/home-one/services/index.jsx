import Star2Img from "../../../assets/images/v1/star2.png";
import FadeInStagger from "../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";
import { FaRocket } from 'react-icons/fa';
import './services.css';

function Services({ services }) {
	return (
		<div className="section aximo-section-padding4">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						<div className="title-container">
							<div className="main-title" style={{ 
								color: '#fff',
								opacity: 0,
								animation: 'fadeInUp 0.8s ease forwards',
								textShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
								fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
								fontWeight: '800',
								lineHeight: '1.2',
								marginBottom: '30px',
								whiteSpace: 'normal',
								textAlign: 'center'
							}}>
								Elevate Your Business With
							</div>
							<div className="service-text" style={{ 
								color: '#BBFF00',
								display: 'inline-flex',
								alignItems: 'center',
								gap: '20px',
								opacity: 0,
								animation: 'fadeInUp 0.8s ease forwards 0.4s',
								textShadow: '0 0 30px rgba(187, 255, 0, 0.3)',
								fontSize: 'clamp(2rem, 4.5vw, 4rem)',
								fontWeight: '800',
								whiteSpace: 'normal',
								textAlign: 'center',
								flexWrap: 'wrap',
								justifyContent: 'center'
							}}>
								Our Services
								<FaRocket className="rocket-icon" style={{
									fontSize: 'clamp(25px, 3vw, 45px)',
									color: '#BBFF00',
									filter: 'drop-shadow(0 0 15px rgba(187, 255, 0, 0.5))'
								}}/>
							</div>
						</div>
					</h2>
				</div>
				<div className="aximo-service-wrap">
					<div className="row">
						{services.map((item, index) => (
							<FadeInStagger key={item.id} index={index} className="col-lg-6">
								<ServiceCard service={item} />
							</FadeInStagger>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Services;
