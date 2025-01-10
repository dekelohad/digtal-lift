import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ServicesSection.css';

const ServicesSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const serviceSteps = [
    {
      id: 1,
      title: 'Comprehensive Website Design',
      description: 'Our web design services offer a comprehensive solution to establish your online presence successfully. Beginning with in-depth consultations, we delve into your business objectives and target audience to tailor a unique strategy. Our expert designers create customized visuals that reflect your brand\'s identity, and our developers ensure your website is both beautiful and functional.\n\nWe begin by conducting thorough market research and competitor analysis to understand your industry\'s digital landscape. This insight allows us to create a website that not only stands out but also effectively addresses your target audience\'s needs and preferences.\n\nOur design process incorporates the latest trends and best practices while maintaining a timeless appeal. We focus on creating a strong visual hierarchy, ensuring your most important content receives the attention it deserves. Every element, from color schemes to typography, is carefully selected to reinforce your brand identity and create a cohesive user experience.\n\nWe also implement advanced features and functionalities that enhance your website\'s performance. This includes optimized loading times, secure payment gateways (if needed), contact forms, and integration with your preferred business tools and platforms. Our goal is to deliver a website that not only looks impressive but also serves as a powerful tool for your business growth.'
    },
    {
      id: 2,
      title: 'Strategic User Experience (UX) Design',
      description: 'We prioritize user experience in every aspect of our design process. Through careful planning and research, we create intuitive navigation structures and user flows that guide visitors effortlessly through your website. Our UX design focuses on maximizing engagement, reducing bounce rates, and converting visitors into customers.\n\nOur UX design process begins with comprehensive user research and the creation of detailed user personas. We analyze user behavior patterns, conduct usability testing, and gather feedback to ensure our design decisions are data-driven and user-centered.\n\nWe pay special attention to information architecture, ensuring your content is organized in a logical and accessible manner. This includes creating clear navigation menus, implementing effective search functionality, and designing intuitive category structures that help users find what they\'re looking for quickly and easily.\n\nOur team also focuses on micro-interactions and visual feedback, adding subtle animations and transitions that make your website feel more dynamic and engaging. We optimize form designs, call-to-action placements, and checkout processes (for e-commerce sites) to maximize conversion rates and improve overall user satisfaction.\n\nAccessibility is a key consideration in our UX design process. We ensure your website is usable by people with different abilities, following WCAG guidelines and implementing features like keyboard navigation, screen reader compatibility, and appropriate color contrast ratios.'
    },
    {
      id: 3,
      title: 'Mobile Optimization',
      description: 'In today\'s mobile-first world, we ensure your website performs flawlessly across all devices. Our responsive design approach guarantees that your site looks and functions perfectly on smartphones, tablets, and desktops. We optimize loading speeds and touch interactions to provide an exceptional mobile user experience.\n\nOur mobile optimization process starts with a mobile-first design approach, where we prioritize the mobile experience before scaling up to larger screens. This ensures that your website\'s core functionality and content are optimized for the devices most of your users are likely to use.\n\nWe implement advanced techniques like lazy loading of images and content, which significantly improves loading times on mobile devices. Our team also optimizes touch targets, ensuring buttons and interactive elements are appropriately sized and spaced for comfortable mobile navigation.\n\nResponsive images and media are carefully implemented to ensure fast loading times without sacrificing quality. We use modern image formats and compression techniques to reduce file sizes while maintaining visual clarity across all devices.\n\nWe also focus on mobile-specific features such as click-to-call buttons, mobile-friendly maps, and optimized forms that are easy to complete on smaller screens. Our mobile optimization extends to ensuring that all interactive elements, including menus, sliders, and galleries, work smoothly on touch devices.\n\nPerformance testing is conducted across a wide range of devices and network conditions to ensure your website loads quickly and functions reliably, regardless of the user\'s device or connection speed.'
    },
    {
      id: 4,
      title: 'Ongoing Maintenance and Support',
      description: 'Our commitment doesn\'t end at launch. We provide continuous maintenance and support to ensure your website remains current and performs optimally. This includes regular updates, security monitoring, content updates, and technical support whenever you need it. We\'re your long-term partner in maintaining a strong online presence.\n\nOur maintenance services include regular security audits and updates to protect your website from potential vulnerabilities. We monitor your website\'s security 24/7 and implement the latest security patches and updates as soon as they become available.\n\nWe conduct regular performance optimization checks to ensure your website maintains its speed and efficiency. This includes database optimization, caching configuration, and regular cleanup of unnecessary files and data.\n\nOur support team is always available to help with content updates, feature additions, or any technical issues that may arise. We provide detailed documentation and training to help you manage your website effectively, while always being just a call away when you need expert assistance.\n\nWe also monitor your website\'s analytics and provide regular reports on its performance, user behavior, and conversion rates. This data helps us make informed decisions about future improvements and optimizations.\n\nAs your business grows and evolves, we ensure your website grows with you. We can implement new features, redesign sections, or scale your infrastructure to meet increasing demands. Our goal is to be a reliable partner in your long-term digital success.'
    }
  ];

  return (
    <div className="services-steps-section my-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-title neon-text mx-auto text-center"
        style={{ 
          textDecoration: 'none', 
          borderBottom: 'none',
          width: 'fit-content',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <span>What is included in our</span>
        <span>web design services?</span>
      </motion.h2>

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
};

export default ServicesSection; 