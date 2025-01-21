import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
import "./Accordion.css";

function Accordion() {
	return (
		<FadeInStaggerTwo className="accordion aximo-accordion-wrap" id="aximo-accordion">
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header">
					<button
						className="accordion-button custom-accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
					>
						01/ Dominate Local Search
					</button>
				</h3>
				<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					We make your business impossible to miss. When potential clients search for your services, 
						you'll be right there at the top. Our proven systems ensure your phone rings with qualified 
						buyers who need your services now, not time-wasters.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header" id="headingOne">
					<button
						className="accordion-button custom-accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseTwo"
					>
						02/ Automate Client Acquisition
					</button>
				</h3>
				<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Your lead generation on autopilot. Our 24/7 systems capture, qualify, and convert prospects 
						into paying clients while you sleep. Watch your calendar fill up with high-value appointments 
						without lifting a finger.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren className="accordion-item">
				<h3 className="accordion-header">
					<button
						className="accordion-button collapsed custom-accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseThree"
					>
						03/ Multiply Your Results
					</button>
				</h3>
				<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					As your phone starts ringing more, we amplify what works. Using real data, we optimize and 
						scale your campaigns to bring even more qualified leads. Your business grows while our 
						systems do the heavy lifting.
					</div>
				</div>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default Accordion;
