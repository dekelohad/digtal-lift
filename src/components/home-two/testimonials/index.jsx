import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.png";
import TestimonialCard from "./TestimonialCard";
import BreadCrumb from "../../common/Breadcrumb";

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
	const testimonials = [
		{
			id: 1,
			name: "Mike Johnson",
			role: "Owner, Johnson Roofing LLC",
			image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 weeks ago",
			text: "Digital Lift transformed our business. Within the first month, we got 47 qualified leads and closed 18 high-ticket roofing jobs. Their lead qualification system is incredible - no more time wasted on tire kickers. Now we're getting 3-4 quality calls daily from homeowners ready to move forward. Best marketing investment we've made.",
			verified: true
		},
		{
			id: 2,
			name: "Sarah Williams",
			role: "Director, Williams Plumbing Services",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "1 month ago",
			text: "Finally found an agency that delivers real results. We were spending thousands on ads with another company but barely getting any calls. Digital Lift completely turned this around. Now we're getting 15-20 qualified leads per week, and their pre-qualification system means these are serious customers ready to book. Our revenue has increased by 140% in just 3 months.",
			verified: true
		},
		{
			id: 3,
			name: "David Martinez",
			role: "CEO, Elite HVAC Solutions",
			image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 months ago",
			text: "The ROI with Digital Lift has been incredible. They've helped us generate over $380K in new business in just 4 months. What sets them apart is the quality of leads - these are pre-qualified customers actively looking for our services. Their system ensures we only get calls from people ready to move forward. Highly recommend if you want quality leads that actually convert.",
			verified: true
		},
		{
			id: 4,
			name: "Amanda Liu",
			role: "Owner, Pristine Cleaning Services",
			image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "3 months ago",
			text: "Digital Lift's marketing strategy completely transformed our cleaning business. We went from struggling to find clients to having a waitlist! Their targeted approach and automated lead qualification system saves us so much time. We've seen a 200% increase in high-value commercial contracts since working with them.",
			verified: true
		},
		{
			id: 5,
			name: "Robert Taylor",
			role: "Director, Taylor Electric Co.",
			image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "1 month ago",
			text: "After trying multiple marketing agencies, Digital Lift was the first to deliver consistent results. Their approach to lead generation is phenomenal - we're now booking 25-30 service calls weekly, all from qualified leads. The best part is their system pre-qualifies customers, so we're not wasting time on price shoppers.",
			verified: true
		},
		{
			id: 6,
			name: "Lisa Anderson",
			role: "Owner, Anderson Landscaping",
			image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 months ago",
			text: "Digital Lift helped us scale our landscaping business beyond what we thought possible. Their marketing strategy brought us high-value clients interested in full property makeovers, not just basic maintenance. We've had to hire three new crews to keep up with demand!",
			verified: true
		},
		{
			id: 7,
			name: "Carlos Rodriguez",
			role: "CEO, Premium Painters Pro",
			image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "3 weeks ago",
			text: "Working with Digital Lift was a game-changer for our painting business. Their lead generation system consistently brings us customers looking for whole-house painting projects. We've doubled our revenue in just 6 months and expanded our team from 5 to 12 painters.",
			verified: true
		},
		{
			id: 8,
			name: "Emily Watson",
			role: "Owner, Watson Window Solutions",
			image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "1 week ago",
			text: "The team at Digital Lift knows exactly how to target the right customers. Since working with them, our average project value has increased by 85%. Their lead qualification process ensures we only talk to serious buyers, saving us countless hours in consultations.",
			verified: true
		},
		{
			id: 9,
			name: "James Wilson",
			role: "Director, Wilson Pest Control",
			image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 weeks ago",
			text: "Digital Lift's marketing expertise helped us expand from residential to commercial pest control services. Their targeted campaigns brought us multiple large-scale contracts with property management companies. Our monthly revenue has increased by 175% since partnering with them.",
			verified: true
		},
		{
			id: 10,
			name: "Michelle Park",
			role: "Owner, Park Home Services",
			image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "1 month ago",
			text: "I was skeptical about digital marketing after bad experiences with other agencies, but Digital Lift proved me wrong. Their approach is systematic and results-driven. We're now booking 3x more appointments than before, and their pre-qualification system means these are all serious customers.",
			verified: true
		},
		{
			id: 11,
			name: "Thomas Wright",
			role: "Owner, Wright Pool Services",
			image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 weeks ago",
			text: "Digital Lift's marketing strategies revolutionized our pool service business. Their targeted campaigns helped us secure 85 new monthly maintenance contracts in just 3 months. We've expanded from 2 service trucks to 6 to handle the increased demand.",
			verified: true
		},
		{
			id: 12,
			name: "Rachel Kim",
			role: "Director, Bloom Dental Group",
			image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "3 weeks ago",
			text: "We were struggling to attract new patients until we partnered with Digital Lift. Their marketing approach helped us book 127 new patient consultations in the first quarter. The quality of leads is exceptional - these are patients looking for comprehensive dental work.",
			verified: true
		},
		{
			id: 13,
			name: "Marcus Bennett",
			role: "Owner, Elite Auto Detailing",
			image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "1 month ago",
			text: "Digital Lift's marketing expertise helped us transition from a mobile detailing service to opening our first physical location. Their campaigns consistently bring us high-value clients looking for premium detailing packages. Revenue is up 230% year over year.",
			verified: true
		},
		{
			id: 14,
			name: "Isabella Ramirez",
			role: "CEO, Fresh Meal Prep Co.",
			image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 weeks ago",
			text: "Digital Lift helped us scale our meal prep business from 50 to 500 weekly subscribers in just 6 months. Their targeted marketing and automated lead qualification system brought us exactly the right type of long-term customers we were looking for.",
			verified: true
		},
		{
			id: 15,
			name: "Alan Foster",
			role: "Owner, Foster's Garage Doors",
			image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "1 month ago",
			text: "Before Digital Lift, we were getting maybe 5-6 calls a week. Now we're averaging 4-5 qualified leads daily. Their marketing strategy helped us focus on higher-value installations rather than just repairs. Our average ticket size has doubled.",
			verified: true
		},
		{
			id: 16,
			name: "Diana Chen",
			role: "Director, Luxe Real Estate Group",
			image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "3 weeks ago",
			text: "Digital Lift's expertise in luxury real estate marketing is unmatched. They helped us secure 12 high-end listings in our first month working together. Their targeting is precise - we're reaching exactly the right demographic for our luxury properties.",
			verified: true
		},
		{
			id: 17,
			name: "Kevin O'Brien",
			role: "Owner, Green Thumb Landscaping",
			image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 months ago",
			text: "Digital Lift's marketing campaigns helped us break into the commercial landscaping sector. We've secured 8 major commercial contracts worth over $600K annually. Their lead generation system consistently brings us qualified commercial property managers.",
			verified: true
		},
		{
			id: 18,
			name: "Patricia Mendoza",
			role: "Owner, Clean & Bright Maid Services",
			image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "1 month ago",
			text: "Working with Digital Lift transformed our cleaning business. Their marketing brought us 35 new recurring clients in just two months. We've grown from a team of 3 to 12 cleaners and expanded our service area to cover the entire metro region.",
			verified: true
		},
		{
			id: 19,
			name: "Brandon Lee",
			role: "Director, Secure Lock Solutions",
			image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 weeks ago",
			text: "Digital Lift helped us transition from residential to commercial locksmith services. Their targeted campaigns brought us contracts with 15 property management companies. We've had to hire 4 new technicians to handle the increased demand.",
			verified: true
		},
		{
			id: 20,
			name: "Laura Martinez",
			role: "Owner, Fit Life Gym",
			image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "3 weeks ago",
			text: "Digital Lift's marketing strategy helped us add 250 new members in our first quarter together. Their lead qualification system ensures we're attracting serious, long-term members, not just New Year's resolution sign-ups. Our retention rate has improved significantly.",
			verified: true
		},
		{
			id: 21,
			name: "Richard Thompson",
			role: "Owner, Thompson Tree Service",
			image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "1 month ago",
			text: "Digital Lift's marketing transformed our tree service business. We're now booking 2-3 months in advance and had to purchase additional equipment to keep up with demand. Their campaigns helped us focus on larger, more profitable jobs.",
			verified: true
		},
		{
			id: 22,
			name: "Nina Patel",
			role: "Director, Bright Tutoring Center",
			image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 weeks ago",
			text: "Since partnering with Digital Lift, our student enrollment has increased by 180%. Their marketing campaigns specifically target parents looking for long-term academic support, not just test prep. We've expanded to three locations to meet demand.",
			verified: true
		},
		{
			id: 23,
			name: "Chris Morgan",
			role: "Owner, Morgan Moving Solutions",
			image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "1 month ago",
			text: "Digital Lift helped us break into the commercial moving market. Their campaigns brought us contracts with 7 major corporations for their office relocations. We've grown from 2 trucks to a fleet of 8 in just 9 months.",
			verified: true
		},
		{
			id: 24,
			name: "Sandra Wilson",
			role: "Owner, Paw Perfect Pet Spa",
			image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "3 weeks ago",
			text: "Digital Lift's marketing strategy helped us transition from basic grooming to premium pet spa services. Our average ticket value has increased by 95%, and we're now fully booked 3 weeks in advance. Their campaigns attract pet owners who value quality care.",
			verified: true
		},
		{
			id: 25,
			name: "Eric Zhang",
			role: "Director, Smart Home Solutions",
			image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 months ago",
			text: "Working with Digital Lift helped us establish ourselves in the luxury smart home market. Their campaigns brought us 15 whole-home automation projects averaging $50K each. We've expanded our team from 3 to 10 technicians.",
			verified: true
		},
		{
			id: 26,
			name: "Maria Rodriguez",
			role: "Owner, Sunset Photography",
			image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "1 month ago",
			text: "Digital Lift helped us pivot from wedding photography to high-end commercial work. Their marketing brought us contracts with 12 major brands for product photography. Our revenue has increased by 250% year over year.",
			verified: true
		},
		{
			id: 27,
			name: "Andrew Kim",
			role: "Owner, Premier Kitchen & Bath",
			image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 weeks ago",
			text: "Digital Lift's marketing campaigns helped us secure 28 full kitchen remodels in just 6 months. Their lead qualification system ensures we only talk to serious buyers with realistic budgets. Our average project value has increased by 75%.",
			verified: true
		},
		{
			id: 28,
			name: "Jessica Brown",
			role: "Director, Elite Dance Academy",
			image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "3 weeks ago",
			text: "Since partnering with Digital Lift, our student enrollment has grown from 85 to 340 students. Their marketing targets families looking for long-term dance education, not just short-term classes. We've had to open a second location.",
			verified: true
		},
		{
			id: 29,
			name: "Michael Chang",
			role: "Owner, Chang's Auto Repair",
			image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "1 month ago",
			text: "Digital Lift transformed our auto repair business. Their marketing helped us focus on European luxury vehicles, increasing our average repair ticket by 180%. We've expanded from 3 bays to 8 and hired 4 new certified technicians.",
			verified: true
		},
		{
			id: 30,
			name: "Rebecca Foster",
			role: "Owner, Foster Financial Planning",
			image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 weeks ago",
			text: "Digital Lift's marketing expertise helped us attract high-net-worth clients. We've added 45 new clients with investable assets over $1M each. Their campaigns perfectly target our ideal demographic of pre-retirees and business owners.",
			verified: true
		},
		{
			id: 31,
			name: "Daniel Murphy",
			role: "Owner, Murphy's Solar Solutions",
			image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "3 weeks ago",
			text: "Digital Lift's marketing campaigns helped us close 65 residential solar installations in just 4 months. Their lead qualification system pre-screens for homeowners who are serious about solar investment. Our close rate has improved from 20% to 45%.",
			verified: true
		},
		{
			id: 32,
			name: "Victoria Wong",
			role: "Director, Wellness Center",
			image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "1 month ago",
			text: "Working with Digital Lift helped us transition from a small yoga studio to a full-service wellness center. Their marketing brought us 180 new members in the first quarter. We've expanded our service offerings and hired 6 new wellness practitioners.",
			verified: true
		},
		{
			id: 33,
			name: "Robert Wilson",
			role: "Owner, Wilson Security Systems",
			image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 months ago",
			text: "Digital Lift helped us secure contracts with 25 commercial properties for security system installations. Their marketing strategy focused on property managers and building owners, bringing us larger, more profitable projects.",
			verified: true
		},
		{
			id: 34,
			name: "Linda Martinez",
			role: "Owner, Fresh Catering Co.",
			image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 weeks ago",
			text: "Digital Lift's marketing transformed our catering business. We've secured contracts with 8 major corporations for regular event catering. Their campaigns helped us transition from small parties to large corporate events.",
			verified: true
		},
		{
			id: 35,
			name: "Paul Thompson",
			role: "Owner, Thompson Fencing",
			image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "3 weeks ago",
			text: "Since partnering with Digital Lift, we've installed over 200,000 linear feet of fencing. Their marketing brings us clients looking for high-end materials and custom designs. We've grown from 2 crews to 7 to handle the increased demand.",
			verified: true
		},
		{
			id: 36,
			name: "Karen Lee",
			role: "Director, Kids Learning Center",
			image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "1 month ago",
			text: "Digital Lift's marketing strategy helped us fill all our programs with a waitlist for the first time ever. We've expanded from 45 to 120 students and opened a second location. Their campaigns target parents looking for quality early education.",
			verified: true
		},
		{
			id: 37,
			name: "Jason Brooks",
			role: "Owner, Brooks Concrete Solutions",
			image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "2 weeks ago",
			text: "Digital Lift transformed our concrete business. Their marketing helped us secure 35 large commercial projects. We've grown from a small residential contractor to a major commercial concrete company with multiple crews.",
			verified: true
		},
		{
			id: 38,
			name: "Emma Watson",
			role: "Owner, Pet Paradise Boarding",
			image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "3 weeks ago",
			text: "Digital Lift's marketing helped us maintain 90% occupancy in our pet boarding facility. Their campaigns target pet owners looking for premium care, not just basic boarding. We've expanded our facility to handle the increased demand.",
			verified: true
		},
		{
			id: 39,
			name: "David Clark",
			role: "Owner, Clark's Custom Cabinets",
			image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=500&auto=format&fit=crop",
			rating: 5,
			platform: "Google Review",
			date: "1 month ago",
			text: "Working with Digital Lift helped us transition from stock cabinets to high-end custom work. Their marketing brings us clients with $50K+ kitchen budgets. We've had to double our workshop space to handle the increased orders.",
			verified: true
		}
	];

	const [visibleCount, setVisibleCount] = useState(9);
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: false
	});

	useEffect(() => {
		if (inView && visibleCount < testimonials.length) {
			setTimeout(() => {
				setVisibleCount(prev => Math.min(prev + 6, testimonials.length));
			}, 200);
		}
	}, [inView]);

	return (
		<div style={{ marginTop: "-100px" }}>
			<div style={{ 
				background: "#000"
			}}>
				<BreadCrumb title="Client Success Stories" />
			</div>

			<div className="section testimonial-section" style={{ 
				padding: "80px 0",
				background: "#111",
				color: "white",
				marginTop: "-1px"
			}}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8 text-center mb-5">
							<div style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "1rem",
								marginBottom: "2rem"
							}}>
								<h2 style={{
									fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
									fontWeight: "800",
									lineHeight: "1.1",
									margin: 0,
									textAlign: "center",
									fontFamily: "Space Grotesk, sans-serif",
									letterSpacing: "-0.02em",
									color: "white"
								}}>
									<div>Appreciation from</div>
									<div style={{ 
										display: "flex", 
										alignItems: "center", 
										justifyContent: "center",
										flexWrap: "wrap",
										gap: "10px"
									}}>
										<span>our</span>
										<span style={{
											background: "#c5f32c",
											padding: "0 20px",
											color: "#000",
											display: "inline-block",
											transform: "rotate(-2deg)",
											borderRadius: "4px",
											fontWeight: "900",
											fontSize: "clamp(2rem, 4.5vw, 4rem)"
										}}>
											loving clients
										</span>
									</div>
								</h2>
								<p style={{
									fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
									color: "white",
									maxWidth: "600px",
									margin: "1rem auto 0",
									lineHeight: "1.6",
									fontWeight: "400",
									opacity: 0.9,
									padding: "0 15px"
								}}>
									It's wonderful to hear that our clients appreciate our services! Client appreciation is valuable proof of the quality of our work.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						{testimonials.slice(0, visibleCount).map((testimonial) => (
							<div key={testimonial.id} className="col-lg-4 mb-4">
								<div style={{
									background: "#fff",
									borderRadius: "8px",
									padding: "25px",
									height: "100%",
									boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
									transition: "transform 0.3s ease, opacity 0.3s ease",
									cursor: "default",
									position: "relative",
									opacity: 0,
									animation: "fadeIn 0.5s forwards"
								}}>
									<div style={{
										display: "flex",
										alignItems: "center",
										marginBottom: "15px"
									}}>
										<img 
											src={testimonial.image} 
											alt={testimonial.name}
											loading="lazy"
											style={{
												width: "50px",
												height: "50px",
												borderRadius: "50%",
												marginRight: "15px",
												objectFit: "cover"
											}}
										/>
										<div>
											<h4 style={{
												fontSize: "1.1rem",
												fontWeight: "600",
												marginBottom: "2px"
											}}>
												{testimonial.name}
											</h4>
											<p style={{
												fontSize: "0.9rem",
												color: "#666",
												marginBottom: "0"
											}}>
												{testimonial.role}
											</p>
										</div>
									</div>
									
									<div style={{
										display: "flex",
										alignItems: "center",
										marginBottom: "15px"
									}}>
										<div style={{
											display: "flex",
											marginRight: "10px"
										}}>
											{"★".repeat(testimonial.rating).split("").map((star, index) => (
												<span key={index} style={{ color: "#fbbc05" }}>
													{star}
												</span>
											))}
										</div>
										<img 
											src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
											alt="Google"
											loading="lazy"
											style={{
												height: "20px",
												marginRight: "8px"
											}}
										/>
										<span style={{
											fontSize: "0.85rem",
											color: "#666"
										}}>
											{testimonial.date}
										</span>
									</div>

									<p style={{
										fontSize: "0.95rem",
										lineHeight: "1.6",
										color: "#333",
										marginBottom: "15px"
									}}>
										{testimonial.text}
									</p>

									{testimonial.verified && (
										<div style={{
											display: "flex",
											alignItems: "center",
											fontSize: "0.85rem",
											color: "#34a853"
										}}>
											<svg 
												viewBox="0 0 24 24" 
												style={{
													width: "16px",
													height: "16px",
													marginRight: "4px",
													fill: "currentColor"
												}}
											>
												<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
											</svg>
											Verified Review
										</div>
									)}
								</div>
							</div>
						))}
					</div>
					{visibleCount < testimonials.length && (
						<div ref={ref} style={{ 
							height: "20px", 
							margin: "20px 0",
							display: "flex",
							justifyContent: "center"
						}}>
							<div className="loading-spinner"></div>
						</div>
					)}
				</div>
			</div>

			<style>
				{`
					@keyframes fadeIn {
						from {
							opacity: 0;
							transform: translateY(20px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					.loading-spinner {
						width: 40px;
						height: 40px;
						border: 3px solid #f3f3f3;
						border-top: 3px solid #3498db;
						border-radius: 50%;
						animation: spin 1s linear infinite;
					}

					@keyframes spin {
						0% { transform: rotate(0deg); }
						100% { transform: rotate(360deg); }
					}
				`}
			</style>
		</div>
	);
}

export default Testimonials;
