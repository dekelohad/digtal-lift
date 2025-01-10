import { useEffect } from "react";
import Testimonials from "../../components/home-two/testimonials";

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