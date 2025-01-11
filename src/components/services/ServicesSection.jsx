import { useState } from 'react';
import { motion } from 'framer-motion';
import './ServicesSection.css';

function ServicesSection({ steps = [], subtitle = "What is included in our services?" }) {
    const [activeStep, setActiveStep] = useState(1);

    const serviceSteps = steps.length > 0 ? steps : [
        {
            id: 1,
            title: "Full-Stack Development",
            description: "Our full-stack development services cover both front-end and back-end development, ensuring a complete and robust web application. We utilize modern frameworks and technologies like React, Node.js, and Next.js to build scalable, high-performance applications. Our development team follows best practices for component architecture, state management, and code optimization."
        },
        {
            id: 2,
            title: "API Development & Integration",
            description: "We specialize in creating and integrating APIs that connect your web application with various services and data sources. Our team develops RESTful and GraphQL APIs that are secure, well-documented, and optimized for performance. We implement robust error handling, rate limiting, and caching strategies to ensure reliable and efficient API operations."
        },
        {
            id: 3,
            title: "Performance Optimization",
            description: "We implement advanced performance optimization techniques to ensure your web application loads quickly and runs smoothly. This includes code splitting, lazy loading, and efficient caching strategies to minimize load times and improve user experience. We also implement server-side rendering (SSR) and static site generation (SSG) where appropriate, ensuring optimal performance and SEO benefits."
        },
        {
            id: 4,
            title: "DevOps & Deployment",
            description: "Our DevOps services ensure smooth deployment and maintenance of your web application. We set up automated CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes when needed. We implement robust monitoring and logging systems to track application performance and quickly identify and resolve any issues."
        }
    ];

    return (
        <div className="success-metrics-section my-20">
            <div className="text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="section-title neon-text mx-auto"
                    style={{ 
                        textDecoration: 'none', 
                        borderBottom: 'none',
                        width: '100%',
                        margin: '0 auto',
                        textAlign: 'center'
                    }}
                >
                    what you get
                </motion.h2>
            </div>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="section-subtitle text-center mb-16 text-white"
                style={{ fontSize: '1.5rem', marginTop: '1rem' }}
            >
                {subtitle}
            </motion.h3>

            <div className="steps-container">
                <div className="steps-navigation">
                    {serviceSteps.map((step) => (
                        <motion.div
                            key={step.id}
                            className={`step-item ${activeStep === step.id ? 'active' : ''}`}
                            onClick={() => setActiveStep(step.id)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: step.id * 0.1 }}
                        >
                            <div className="step-number">{step.id}.</div>
                            <div className="step-title">{step.title}</div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="step-content"
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="step-content-title">
                        {serviceSteps[activeStep - 1].title}
                    </h3>
                    <p className="step-content-description">
                        {serviceSteps[activeStep - 1].description}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

export default ServicesSection; 