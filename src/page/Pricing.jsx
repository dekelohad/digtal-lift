import BreadCrumb from "../components/common/Breadcrumb";
import Testimonial from "../components/home-one/testimonial";
import PricingFaq from "../components/pricing/PricingFaq";
import PricingPlan from "../components/pricing/PricingPlan";
function Pricing() {
	return (
		<>
			<BreadCrumb title="Pricing" />
			<PricingPlan />
			<Testimonial />
 
			<PricingFaq />
		</>
	);
}

export default Pricing;
