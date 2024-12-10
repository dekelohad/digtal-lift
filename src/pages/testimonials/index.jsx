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
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h1 style={{
                                fontSize: "48px",
                                fontWeight: "700",
                                marginBottom: "20px",
                                color: "#1a1a1a"
                            }}>
                                Client Success Stories
                            </h1>
                            <p style={{
                                fontSize: "18px",
                                lineHeight: "1.6",
                                color: "#666666"
                            }}>
                                Discover how we've helped businesses like yours achieve their digital goals. 
                                Our clients' success is our greatest achievement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Testimonials Section */}
            <Testimonials />

            {/* Call to Action Section */}
            <div style={{
                padding: "80px 0",
                backgroundColor: "#f8f9fa",
                borderTop: "1px solid rgba(0,0,0,0.05)"
            }}>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h2 style={{
                                fontSize: "36px",
                                fontWeight: "700",
                                marginBottom: "20px",
                                color: "#1a1a1a"
                            }}>
                                Ready to Transform Your Business?
                            </h2>
                            <p style={{
                                fontSize: "18px",
                                marginBottom: "30px",
                                color: "#666666"
                            }}>
                                Join our growing list of satisfied clients and take your business to the next level
                            </p>
                            <a 
                                href="/contact-us" 
                                className="aximo-default-btn"
                                style={{
                                    display: "inline-block",
                                    padding: "15px 30px",
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    background: "#4a90e2",
                                    color: "#fff",
                                    borderRadius: "30px",
                                    textDecoration: "none",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsPage; 