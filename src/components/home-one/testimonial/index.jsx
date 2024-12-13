import Star2Img from "../../../assets/images/v1/star2.png";
import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.png";
import Thumb4Img from "../../../assets/images/v1/t_thumb4.png";
import FadeInStagger from "../../animation/FadeInStagger";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Our Phone Hasn't Stopped Ringing!",
		description:
			"Digital Lift completely transformed our lead generation game. Within weeks of implementing their strategy, our inquiry volume exploded! We went from struggling to find clients to having our phone ring non-stop with qualified leads. Their targeted approach helped us achieve a staggering 300% increase in daily inquiries. Best investment we've ever made!",
		author: "James Mitchell",
		designation: "CEO, Elite Business Solutions",
		img: Thumb1Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Revolutionary Digital Marketing Results",
		description:
			"Working with Digital Lift was the best decision for our startup. They completely revolutionized our digital marketing strategy. Their data-driven approach and creative campaigns resulted in a 200% increase in qualified leads. Their team's dedication to our success was evident in every interaction.",
		author: "Michael Rodriguez",
		designation: "Founder, InnovateX Solutions",
		img: Thumb2Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "Exceptional Web Development Expertise",
		description:
			"Digital Lift's technical prowess is unmatched. They developed our complex web application with remarkable efficiency. The final product exceeded our expectations in terms of performance, scalability, and user experience. Their team's problem-solving abilities and attention to detail are extraordinary.",
		author: "Robert Turner",
		designation: "CTO, FutureTech Systems",
		img: Thumb3Img,
	},
	{
		id: crypto.randomUUID(),
		rating: 5,
		title: "From Struggling to Market Leader",
		description:
			"Digital Lift revolutionized our entire business approach. In just 6 months, we went from barely visible to dominating our market. Their strategic digital makeover doubled our client base and increased our revenue by 400%. The most impressive part? They created a system that consistently brings in high-value clients while we sleep. Their work didn't just transform our business - it transformed our lives!",
		author: "David Anderson",
		designation: "CEO, Anderson & Partners",
		img: Thumb4Img,
	},
];

function Testimonial() {
	return (
		<div className="section aximo-section-padding3">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Real Success
						<span className="aximo-title-animation">
							Stories
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial, index) => (
						<FadeInStagger index={index} className="col-lg-6" key={testimonial.id}>
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonial;
