import StarImg from "../../../assets/images/v2/star.svg";
import { useState } from 'react';

function TestimonialCard({ testimonial: { rating, content, author, designation, img } }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div 
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{
				background: "#ffffff",
				borderRadius: "16px",
				padding: "32px",
				transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
				boxShadow: isHovered 
					? "0 20px 40px rgba(204, 255, 0, 0.15), 0 15px 20px rgba(0, 0, 0, 0.1)"
					: "0 4px 20px rgba(0, 0, 0, 0.1)",
				cursor: "pointer",
				border: `1px solid ${isHovered ? '#CCFF00' : 'transparent'}`,
				transform: isHovered ? 'translateY(-8px)' : 'none',
				position: 'relative',
				overflow: 'hidden'
			}}
		>
			{/* Glow Effect */}
			<div style={{
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(204, 255, 0, 0.1) 0%, transparent 50%)',
				opacity: isHovered ? 1 : 0,
				transition: 'opacity 0.3s ease',
				pointerEvents: 'none'
			}} />

			{/* Rating Stars */}
			<div style={{
				display: "flex",
				gap: "4px",
				marginBottom: "16px",
				transform: isHovered ? 'scale(1.05)' : 'scale(1)',
				transition: 'transform 0.3s ease'
			}}>
				{[...Array(rating)].map((_, index) => (
					<img 
						key={index}
						src={StarImg} 
						alt="Star" 
						style={{
							width: "20px",
							height: "20px",
							filter: "invert(88%) sepia(41%) saturate(1241%) hue-rotate(24deg) brightness(104%) contrast(104%)",
							transform: isHovered ? `translateY(${Math.sin(index * 1.5) * 5}px)` : 'none',
							transition: 'transform 0.5s ease'
						}}
					/>
				))}
			</div>

			{/* Testimonial Content */}
			<p style={{
				fontSize: "16px",
				lineHeight: "1.8",
				color: "#1a1d27",
				marginBottom: "24px",
				fontStyle: "italic",
				transform: isHovered ? 'scale(1.02)' : 'scale(1)',
				transition: 'all 0.3s ease'
			}}>
				"{content}"
			</p>

			{/* Author Info */}
			<div style={{
				display: "flex",
				alignItems: "center",
				gap: "16px",
				transform: isHovered ? 'translateX(8px)' : 'none',
				transition: 'transform 0.3s ease'
			}}>
				<div style={{
					width: "48px",
					height: "48px",
					borderRadius: "50%",
					overflow: "hidden",
					border: `2px solid ${isHovered ? '#CCFF00' : 'rgba(204, 255, 0, 0.5)'}`,
					transition: 'all 0.3s ease',
					transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
				}}>
					<img 
						src={img} 
						alt={author}
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							transform: isHovered ? 'scale(1.1)' : 'scale(1)',
							transition: 'transform 0.3s ease'
						}}
					/>
				</div>
				<div>
					<h4 style={{
						fontSize: "18px",
						fontWeight: "600",
						color: isHovered ? '#CCFF00' : '#1a1d27',
						marginBottom: "4px",
						transition: 'all 0.3s ease',
						textShadow: isHovered ? '0 0 15px rgba(204, 255, 0, 0.3)' : 'none'
					}}>
						{author}
					</h4>
					<p style={{
						fontSize: "14px",
						color: isHovered ? '#1a1d27' : '#CCFF00',
						margin: 0,
						fontWeight: "500",
						transition: 'all 0.3s ease',
						transform: isHovered ? 'translateX(5px)' : 'none'
					}}>
						{designation}
					</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
