import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './ServicesSection.css';

const ServicesSection = ({ title, steps }) => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="services-steps-section my-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-title neon-text mx-auto text-center mb-16"
      >
        {title}
      </motion.h2>

      <div className="steps-container">
        <div className="steps-navigation">
          {steps.map((step) => (
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
            {steps[activeStep - 1].title}
          </h3>
          <p className="step-content-description">
            {steps[activeStep - 1].description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

ServicesSection.propTypes = {
  title: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServicesSection; 