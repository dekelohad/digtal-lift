import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearchDollar, FaChartLine, FaBullseye, FaRocket } from "react-icons/fa";
import BreadCrumb from "../../components/common/Breadcrumb";
import "./PaidSearchMarketing.css";

function PaidSearchMarketing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const processSteps = [
        {
            icon: <FaBullseye />,
            description: "Strategic campaign setup with custom-built campaigns targeting your ideal customers with precision. We research and target high-intent keywords that drive conversions."
        },
        {
            icon: <FaSearchDollar />,
            description: "Create compelling ad copy and high-converting landing pages that capture attention and turn clicks into customers. Every element is optimized for maximum ROI."
        },
        {
            icon: <FaChartLine />,
            description: "Track performance with detailed analytics and reporting to measure ROI and campaign success. We provide complete transparency on every click and conversion."
        },
        {
            icon: <FaRocket />,
            description: "Continuous optimization through regular testing and refinement. We constantly improve your campaigns to maximize performance and reduce cost per acquisition."
        }
    ];

    const testimonials = [
        {
            quote: "Their PPC expertise transformed our online presence. The targeting precision and conversion rates exceeded our expectations. We're now generating more qualified leads than ever before.",
            author: "Robert Chen",
            business: "TechPro Solutions",
            results: "312% increase in qualified leads"
        },
        {
            quote: "The ROI from our Google Ads campaigns has been incredible. They've helped us reduce cost per acquisition while scaling our ad spend profitably. The results speak for themselves.",
            author: "Lisa Martinez",
            business: "Growth Marketing Co",
            results: "245% boost in ROAS"
        }
    ];

    return (
        <div className="local-lead-page">
            <BreadCrumb />
            <div className="container mx-auto px-6 pt-80">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <motion.h1 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="hero-title mx-auto"
                    >
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="neon-text"
                        >
                            Pay-Per-Click
                        </motion.span>
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Marketing
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="hero-description mt-8 mb-20 mx-auto"
                    >
                        Transform your digital advertising with our expert paid search marketing services. We create and manage high-performing campaigns that drive qualified traffic, generate leads, and deliver measurable ROI for your business.
                    </motion.p>
                </motion.div>

                <div className="grid-container">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                            className="process-box"
                        >
                            <div className="neon-icon">
                                {step.icon}
                            </div>
                            <p className="process-description">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="testimonials-section">
                    <h2 className="section-title text-center">Success Stories</h2>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <motion.div 
                                key={index}
                                className="testimonial-box"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                <div className="quote-icon">
                                    <span className="neon-text">"</span>
                                </div>
                                <p className="testimonial-quote">{testimonial.quote}</p>
                                <div className="testimonial-author">
                                    <h4 className="author-name">{testimonial.author}</h4>
                                    <p className="author-business">{testimonial.business}</p>
                                    <p className="testimonial-results neon-text">{testimonial.results}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaidSearchMarketing; 