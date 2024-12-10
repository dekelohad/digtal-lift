import { useEffect, useState } from "react";
import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.png";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"I am impressed with their innovative ideas and forward-thinking approach. They have helped us embrace digital transformation.",
		author: "Smith Align",
		designation: "Businessman",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"Digital Lift has been a game-changer for our startup. Their team guided us through the development of a custom software solution perfectly suited us.",
		author: "Willium Joe",
		designation: "VP of Marketing",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		content:
			"Their ability to understand our unique needs and provide tailored solutions. Their team is friendly, approachable & always ready to go the extra mile.",
		author: "Adrew Maslo",
		designation: "Head of X company",
		img: Thumb3Img,
	},
];

function Testimonials() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div style={{
			background: "#1a1d27",
			padding: "100px 0",
			position: "relative",
			overflow: "hidden"
		}}>
			{/* Background Dots */}
			<div style={{
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundImage: "radial-gradient(#CCFF00 1px, transparent 1px)",
				backgroundSize: "30px 30px",
				opacity: 0.03
			}} />
			
			<div className="container" style={{ position: "relative", zIndex: 2 }}>
				<div className="row">
					<div className="col-lg-7">
						<div style={{
							position: "sticky",
							top: "100px",
							opacity: isVisible ? 1 : 0,
							transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
							transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
						}}>
							<h2 style={{
								fontSize: "56px",
								fontWeight: "800",
								marginBottom: "24px",
								fontFamily: "Bricolage Grotesque, sans-serif",
								color: "#ffffff",
								lineHeight: "1.2"
							}}>
								Appreciation from our{" "}
								<div style={{
									display: "inline-block",
									background: "#CCFF00",
									padding: "0 15px",
									marginLeft: "5px",
									borderRadius: "4px",
									color: "#1a1d27",
									position: "relative",
									transform: "rotate(-2deg)",
									boxShadow: "4px 4px 0px rgba(204, 255, 0, 0.3)"
								}}>
									loving clients
								</div>
							</h2>
							<p style={{
								fontSize: "18px",
								lineHeight: "1.8",
								color: "#a1a1aa",
								maxWidth: "500px",
								marginTop: "40px"
							}}>
								It's wonderful to hear that our clients appreciate our services! Client appreciation is
								valuable proof of the quality of our work.
							</p>
						</div>
					</div>
					<div className="col-lg-5">
						<div style={{
							display: "flex",
							flexDirection: "column",
							gap: "24px",
							marginTop: "20px"
						}}>
							{testimonialsData.map((testimonial, index) => (
								<div 
									key={testimonial.id} 
									style={{
										opacity: isVisible ? 1 : 0,
										transform: isVisible 
											? `translateY(${index * 20}px)` 
											: `translateY(${50 + index * 20}px)`,
										transition: `all ${0.5 + index * 0.2}s cubic-bezier(0.4, 0, 0.2, 1)`,
										':hover': {
											transform: 'translateY(0)'
										}
									}}
								>
									<TestimonialCard testimonial={testimonial} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
