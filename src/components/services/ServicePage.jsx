import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaArrowRight, FaCheck } from "react-icons/fa";

function ServicePage({ 
	title, 
	subtitle, 
	description, 
	features, 
	benefits,
	ctaText = "Get Started",
	backgroundImage
}) {
	return (
		<div className="service-page">
			{/* Hero Section */}
			<div 
				className="hero-section" 
				style={{
					backgroundImage: \`url(\${backgroundImage})\`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					minHeight: '80vh',
					position: 'relative',
					display: 'flex',
					alignItems: 'center',
					color: '#fff'
				}}
			>
				<div 
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: 'linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)'
					}}
				/>
				<div className="container position-relative">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="row"
					>
						<div className="col-lg-8">
							<h1 className="display-3 fw-bold mb-4">{title}</h1>
							<p className="lead mb-5" style={{ fontSize: "1.5rem" }}>{subtitle}</p>
							<button 
								className="btn btn-primary btn-lg"
								style={{
									background: '#CCFF00',
									color: '#000',
									border: 'none',
									padding: '15px 40px',
									borderRadius: '30px',
									fontSize: '1.2rem',
									fontWeight: 'bold',
									display: 'inline-flex',
									alignItems: 'center',
									gap: '10px'
								}}
							>
								{ctaText} <FaArrowRight />
							</button>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Main Content */}
			<div className="py-5">
				<div className="container">
					{/* Description Section */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8 }}
						className="row mb-5"
					>
						<div className="col-lg-8 mx-auto text-center">
							<h2 className="h1 mb-4">What We Offer</h2>
							<p className="lead">{description}</p>
						</div>
					</motion.div>

					{/* Features Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="row mb-5"
					>
						<div className="col-12">
							<div className="row g-4">
								{features.map((feature, index) => (
									<div key={index} className="col-md-4">
										<div 
											className="p-4 h-100" 
											style={{
												background: '#f8f9fa',
												borderRadius: '20px',
												transition: 'transform 0.3s ease',
												cursor: 'pointer',
												'&:hover': {
													transform: 'translateY(-10px)'
												}
											}}
										>
											<div className="d-flex align-items-center mb-3">
												<div 
													className="me-3" 
													style={{
														width: '40px',
														height: '40px',
														borderRadius: '50%',
														background: '#CCFF00',
														display: 'flex',
														alignItems: 'center',
														justifyContent: 'center'
													}}
												>
													{feature.icon}
												</div>
												<h3 className="h5 mb-0">{feature.title}</h3>
											</div>
											<p className="mb-0">{feature.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</motion.div>

					{/* Benefits Section */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="row"
					>
						<div className="col-lg-6">
							<h2 className="h1 mb-4">Why Choose Our Service</h2>
							<div className="d-flex flex-column gap-4">
								{benefits.map((benefit, index) => (
									<div key={index} className="d-flex align-items-start">
										<div 
											className="me-3" 
											style={{
												width: '24px',
												height: '24px',
												borderRadius: '50%',
												background: '#CCFF00',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												flexShrink: 0
											}}
										>
											<FaCheck style={{ color: '#000' }} />
										</div>
										<div>
											<h4 className="h5 mb-2">{benefit.title}</h4>
											<p className="mb-0">{benefit.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="col-lg-6">
							{/* Add an appropriate image or illustration here */}
						</div>
					</motion.div>
				</div>
			</div>

			{/* CTA Section */}
			<div 
				className="py-5" 
				style={{
					background: '#000',
					color: '#fff'
				}}
			>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mx-auto text-center">
							<h2 className="h1 mb-4">Ready to Get Started?</h2>
							<p className="lead mb-4">Take your business to the next level with our professional services.</p>
							<button 
								className="btn btn-primary btn-lg"
								style={{
									background: '#CCFF00',
									color: '#000',
									border: 'none',
									padding: '15px 40px',
									borderRadius: '30px',
									fontSize: '1.2rem',
									fontWeight: 'bold',
									display: 'inline-flex',
									alignItems: 'center',
									gap: '10px'
								}}
							>
								Contact Us Now <FaArrowRight />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

ServicePage.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	features: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.node.isRequired,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		})
	).isRequired,
	benefits: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		})
	).isRequired,
	ctaText: PropTypes.string,
	backgroundImage: PropTypes.string.isRequired,
};

export default ServicePage; 