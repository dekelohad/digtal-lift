import Star2Img from "../../../assets/images/v1/star2.png";
import FadeInStagger from "../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";
import { FaRocket } from 'react-icons/fa';

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
					<style jsx>{`
						@keyframes fadeInUp {
							from {
								opacity: 0;
								transform: translateY(40px);
							}
							to {
								opacity: 1;
								transform: translateY(0);
							}
						}

						@keyframes float {
							0%, 100% {
								transform: translateY(0) rotate(45deg);
							}
							50% {
								transform: translateY(-15px) rotate(45deg);
							}
						}

						.title-container {
							display: flex;
							flex-direction: column;
							align-items: center;
							text-align: center;
							padding: 0 20px;
						}

						.rocket-icon {
							animation: float 3s ease-in-out infinite;
							transform: rotate(45deg);
							transition: all 0.3s ease;
						}

						.rocket-icon:hover {
							filter: drop-shadow(0 0 25px rgba(187, 255, 0, 0.8)) !important;
							transform: scale(1.15) rotate(45deg);
						}

						/* Large devices (desktops) */
						@media (max-width: 1200px) {
							.main-title {
								font-size: 4rem !important;
							}
							.service-text {
								font-size: 3.5rem !important;
							}
						}

						/* Medium devices (tablets) */
						@media (max-width: 992px) {
							.main-title {
								font-size: 3.5rem !important;
							}
							.service-text {
								font-size: 3rem !important;
							}
							.rocket-icon {
								font-size: 35px !important;
							}
						}

						/* Small devices (landscape phones) */
						@media (max-width: 768px) {
							.main-title {
								font-size: 2.8rem !important;
								margin-bottom: 20px !important;
								white-space: normal !important;
							}
							.service-text {
								font-size: 2.5rem !important;
								white-space: normal !important;
							}
							.rocket-icon {
								font-size: 30px !important;
							}
						}

						/* Extra small devices (phones) */
						@media (max-width: 576px) {
							.main-title {
								font-size: 2.2rem !important;
								margin-bottom: 15px !important;
							}
							.service-text {
								font-size: 2rem !important;
								gap: 10px !important;
							}
							.rocket-icon {
								font-size: 25px !important;
							}
							.title-container {
								padding: 0 10px;
							}
						}
					`}</style>
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
