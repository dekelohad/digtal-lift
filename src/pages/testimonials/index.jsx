import { useEffect } from "react";
import Testimonials from "../../components/home-two/testimonials";
import { Helmet } from 'react-helmet-async';

function TestimonialsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ 
            backgroundColor: "var(--dark-bg)",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column"
        }}>
            <Helmet>
                <title>Client Success Stories | Real Results from Digital Lift</title>
                <meta
                    name="description"
                    content="See how businesses achieve 15x ROI with Digital Lift. Read verified success stories from clients who transformed their growth with our proven lead generation systems."
                />
            </Helmet>
            {/* Hero Section */}
            <div style={{
                padding: "120px 0 60px",
                backgroundColor: "var(--dark-bg)",
                flex: "1"
            }}>
            </div>
            {/* Featured Testimonials Section */}
            <div style={{ backgroundColor: "var(--dark-bg)" }}>
                <Testimonials />
            </div>
        </div>
    );
}

export default TestimonialsPage; 