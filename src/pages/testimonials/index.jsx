import { useEffect } from "react";
import Testimonials from "../../components/home-two/testimonials";

function TestimonialsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div style={{
                padding: "120px 0 60px",
                backgroundColor: "#f8f9fa",
                borderBottom: "1px solid rgba(0,0,0,0.05)"
            }}>
            </div>
            {/* Featured Testimonials Section */}
            <Testimonials />
        </div>
    );
}

export default TestimonialsPage; 