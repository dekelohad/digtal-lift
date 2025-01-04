import QuestionImg from "../../assets/images/icon/question.svg";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";

const faqData = [
	{
		id: crypto.randomUUID(),
		icon: QuestionImg,
		title: "How quickly can I expect to see results?",
		description: "Most clients start seeing increased lead flow within the first 30-60 days. Our proven systems are designed for rapid implementation and quick wins, while building long-term sustainable growth. We focus on high-intent traffic that's ready to convert.",
	},
	{
		id: crypto.randomUUID(),
		icon: QuestionImg,
		title: "What makes your lead generation different?",
		description: "Unlike traditional agencies, we specialize in phone-based lead generation. Our systems are designed to make your phone ring with qualified prospects. We combine Local Lead Generation, SEO, and Paid Search to create a consistent flow of high-quality leads.",
	},
	{
		id: crypto.randomUUID(),
		icon: QuestionImg,
		title: "What services do you offer?",
		description: "We offer a complete digital growth suite: Local Lead Generation, Search Engine Optimization (SEO), Paid Search Marketing, Google Business Profile Optimization, Web Design, and Web Development. Each service is strategically designed to increase your lead flow and revenue.",
	},
	{
		id: crypto.randomUUID(),
		icon: QuestionImg,
		title: "Do you offer guarantees?",
		description: "Yes! We're so confident in our ability to deliver results that we offer performance guarantees. If we don't hit the agreed-upon KPIs within the specified timeframe, you'll receive free service until we do. We succeed when you succeed.",
	},
	{
		id: crypto.randomUUID(),
		icon: QuestionImg,
		title: "How do you measure success?",
		description: "We track specific metrics that matter: number of qualified calls, lead quality, conversion rates, and ROI. You'll receive detailed monthly reports showing exactly how many new leads and customers we've generated. We're all about transparent, measurable results.",
	},
	{
		id: crypto.randomUUID(),
		icon: QuestionImg,
		title: "What industries do you work with?",
		description: "We specialize in working with service-based businesses, professional practices, and local businesses looking to dominate their market. Our strategies are particularly effective for businesses where phone calls lead to high-value clients.",
	},
	{
		id: crypto.randomUUID(),
		icon: QuestionImg,
		title: "How do you ensure quality leads?",
		description: "We use advanced targeting and qualification systems to ensure you're getting calls from your ideal customers. Our campaigns focus on high-intent keywords and demographics that match your best clients, filtering out time-wasters and unqualified leads.",
	},
	{
		id: crypto.randomUUID(),
		icon: QuestionImg,
		title: "What makes your approach unique?",
		description: "We focus on immediate results while building long-term assets. While other agencies might take months to show results, our hybrid approach starts driving calls quickly through paid campaigns while simultaneously building your organic presence for sustained growth.",
	},
];

function TwoColumnFaq() {
	return (
		<div className="section aximo-section-padding4">
			<div className="container">
				<div className="aximo-section-title">
					<h2>
						<span className="aximo-title-animation">
							Frequently Asked Questions
						</span>
					</h2>
				</div>
				<FadeInStaggerTwo className="row">
					{faqData.map((item, index) => (
						<FadeInStaggerTwoChildren key={item.id} className="col-xl-6">
							<div className="aximo-iconbox-wrap2">
								<div className="aximo-iconbox-icon2">
									<img src={item.icon} alt="icon" />
								</div>
								<div className="aximo-iconbox-data2">
									<h4>{item.title}</h4>
									<p>{item.description}</p>
								</div>
							</div>
						</FadeInStaggerTwoChildren>
					))}
				</FadeInStaggerTwo>
			</div>
		</div>
	);
}

export default TwoColumnFaq;
