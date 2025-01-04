import { useEffect } from "react";
import ServicePage from "../../components/services/ServicePage";

function PaidSearchMarketing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Strategic Campaign Setup",
            description: "Custom-built campaigns targeting your ideal customers with precision",
            icon: "🎯"
        },
        {
            title: "Keyword Optimization",
            description: "Research and targeting of high-intent keywords that drive conversions",
            icon: "🔍"
        },
        {
            title: "Ad Copy Creation",
            description: "Compelling ad copy that captures attention and drives clicks",
            icon: "✍️"
        },
        {
            title: "Landing Page Optimization",
            description: "High-converting landing pages that turn clicks into customers",
            icon: "📱"
        },
        {
            title: "Performance Tracking",
            description: "Detailed analytics and reporting to measure ROI and campaign success",
            icon: "📊"
        },
        {
            title: "Continuous Optimization",
            description: "Regular testing and refinement to improve campaign performance",
            icon: "⚡"
        }
    ];

    const benefits = [
        {
            title: "Instant Visibility",
            description: "Get immediate exposure to customers actively searching for your services"
        },
        {
            title: "Targeted Traffic",
            description: "Reach the right customers at the right time with precise targeting"
        },
        {
            title: "Measurable Results",
            description: "Track every click, conversion, and dollar spent for complete transparency"
        },
        {
            title: "Scalable Growth",
            description: "Easily scale your campaigns as your business grows and evolves"
        }
    ];

    return (
        <ServicePage
            title="Paid Search Marketing"
            subtitle="Drive Qualified Traffic & Generate Leads"
            description="Transform your digital advertising with our expert paid search marketing services. We create and manage high-performing campaigns that drive qualified traffic, generate leads, and deliver measurable ROI for your business."
            features={features}
            benefits={benefits}
            ctaText="Start Your Campaign"
            backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
        />
    );
}

export default PaidSearchMarketing; 