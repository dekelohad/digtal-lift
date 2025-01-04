import BreadCrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";

function ContactUs() {
	return (
		<>
			<BreadCrumb title="Contact Us" />
			<ContactForm />
			<ContactInfo />
			<TwoColumnFaq />
		</>
	);
}

export default ContactUs;
