import React from 'react';
import { FaSearch, FaChartLine, FaUsers, FaPhoneVolume, FaCog, FaBullseye, FaRocket, FaClipboardCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './PaidSearchMarketing.css';

const PaidSearchMarketing = () => {
    return (
        <div className="paid-search-marketing">
            {/* Hero Section */}
            <section className="ppc-hero-section">
                <div className="hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>
                            Drive Quality
                            Leads with
                            <span className="highlight">Google Ads</span>
                        </h1>
                        <p>Transform your business with high-intent leads through strategic paid search campaigns. We specialize in creating Google Ads campaigns that generate consistent phone calls and quality leads for your business.</p>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="ppc-features-section">
                <div className="container">
                    <motion.h2
                        className="section-title text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Why Choose Our PPC Services?
                    </motion.h2>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <motion.div
                                className="feature-box"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <FaSearch className="feature-icon" />
                                <h3>Targeted Campaigns</h3>
                                <p>Reach your ideal customers with precision targeting and strategic keyword selection.</p>
                            </motion.div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <motion.div
                                className="feature-box"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <FaChartLine className="feature-icon" />
                                <h3>Data-Driven Results</h3>
                                <p>Make informed decisions with comprehensive analytics and performance tracking.</p>
                            </motion.div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <motion.div
                                className="feature-box"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <FaPhoneVolume className="feature-icon" />
                                <h3>Call Tracking</h3>
                                <p>Monitor and record calls to measure campaign effectiveness and lead quality.</p>
                            </motion.div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <motion.div
                                className="feature-box"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <FaCog className="feature-icon" />
                                <h3>Continuous Optimization</h3>
                                <p>Regular campaign refinements to maximize ROI and lead quality.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="case-studies-section">
                <div className="container">
                    <motion.h2
                        className="section-title text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Client Success Stories
                    </motion.h2>
                    <div className="row">
                        <div className="col-lg-6">
                            <motion.div
                                className="case-study-box"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="case-study-header">
                                    <h3>Elite Roofing Solutions</h3>
                                    <span className="industry-tag">Roofing</span>
                                </div>
                                <div className="results-grid">
                                    <div className="result-item">
                                        <h4>147%</h4>
                                        <p>Increase in Calls</p>
                                    </div>
                                    <div className="result-item">
                                        <h4>85%</h4>
                                        <p>ROI</p>
                                    </div>
                                    <div className="result-item">
                                        <h4>$480K</h4>
                                        <p>Revenue Generated</p>
                                    </div>
                                </div>
                                <p className="case-study-description">
                                    "Since working with them, our phone rings consistently with quality leads. The Google Ads campaigns have helped us secure multiple large roofing projects each month."
                                </p>
                                <p className="testimonial-author">- Robert Martinez, Owner</p>
                            </motion.div>
                        </div>
                        <div className="col-lg-6">
                            <motion.div
                                className="case-study-box"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="case-study-header">
                                    <h3>Premier Concrete Works</h3>
                                    <span className="industry-tag">Construction</span>
                                </div>
                                <div className="results-grid">
                                    <div className="result-item">
                                        <h4>112%</h4>
                                        <p>Lead Increase</p>
                                    </div>
                                    <div className="result-item">
                                        <h4>95%</h4>
                                        <p>ROI</p>
                                    </div>
                                    <div className="result-item">
                                        <h4>$320K</h4>
                                        <p>Revenue Generated</p>
                                    </div>
                                </div>
                                <p className="case-study-description">
                                    "Their Google Ads expertise has transformed our business. We're now getting steady leads for both residential and commercial concrete projects, with a great return on investment."
                                </p>
                                <p className="testimonial-author">- Mike Thompson, Owner</p>
                            </motion.div>
                        </div>
                        <div className="col-lg-6">
                            <motion.div
                                className="case-study-box"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="case-study-header">
                                    <h3>Premier Plumbing Services</h3>
                                    <span className="industry-tag">Home Services</span>
                                </div>
                                <div className="results-grid">
                                    <div className="result-item">
                                        <h4>125%</h4>
                                        <p>Booking Increase</p>
                                    </div>
                                    <div className="result-item">
                                        <h4>115%</h4>
                                        <p>ROI</p>
                                    </div>
                                    <div className="result-item">
                                        <h4>$280K</h4>
                                        <p>Revenue Generated</p>
                                    </div>
                                </div>
                                <p className="case-study-description">
                                    "The quality of leads we get through Google Ads is exceptional. These are customers actively looking for plumbing services, and the campaign consistently delivers."
                                </p>
                                <p className="testimonial-author">- John Smith, Owner</p>
                            </motion.div>
                        </div>
                        <div className="col-lg-6">
                            <motion.div
                                className="case-study-box"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <div className="case-study-header">
                                    <h3>Elite Dental Care</h3>
                                    <span className="industry-tag">Healthcare</span>
                                </div>
                                <div className="results-grid">
                                    <div className="result-item">
                                        <h4>135%</h4>
                                        <p>Lead Quality</p>
                                    </div>
                                    <div className="result-item">
                                        <h4>105%</h4>
                                        <p>ROI</p>
                                    </div>
                                    <div className="result-item">
                                        <h4>$220K</h4>
                                        <p>Revenue Generated</p>
                                    </div>
                                </div>
                                <p className="case-study-description">
                                    "Our Google Ads campaigns have been a game-changer. We're connecting with patients who are actively searching for our services, and our practice has grown steadily."
                                </p>
                                <p className="testimonial-author">- Dr. Sarah Johnson</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section">
                <div className="container">
                    <motion.h2
                        className="section-title text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Proven Process
                    </motion.h2>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <motion.div
                                className="process-box"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="process-number">01</div>
                                <FaBullseye className="process-icon" />
                                <div className="process-content">
                                    <h3>Research & Strategy</h3>
                                    <p>Deep market analysis and competitor research to develop winning strategies.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <motion.div
                                className="process-box"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="process-number">02</div>
                                <FaRocket className="process-icon" />
                                <div className="process-content">
                                    <h3>Campaign Launch</h3>
                                    <p>Strategic implementation with optimized ad copy and landing pages.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <motion.div
                                className="process-box"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="process-number">03</div>
                                <FaChartLine className="process-icon" />
                                <div className="process-content">
                                    <h3>Optimization</h3>
                                    <p>Continuous monitoring and refinement for maximum performance.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <motion.div
                                className="process-box"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <div className="process-number">04</div>
                                <FaClipboardCheck className="process-icon" />
                                <div className="process-content">
                                    <h3>Reporting</h3>
                                    <p>Detailed analytics and insights for informed decision-making.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaidSearchMarketing; 