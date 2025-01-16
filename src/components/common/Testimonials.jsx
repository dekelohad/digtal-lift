import React from 'react';
import { motion } from "framer-motion"

const Testmionals = ({TESTIMONIALS}) =>{
    return(
        <motion.div 
        className="success-stories-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
        <h2 className="section-title">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                    key={index}
                    className="success-story-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                    <p className="success-quote">{testimonial.quote}</p>
                    <h4 className="success-author">{testimonial.author}</h4>
                    <p className="success-company">{testimonial.business}</p>
                    <span className="success-metric">{testimonial.results}</span>
                </motion.div>
            ))}
        </div>
    </motion.div>


    )
}

export default Testmionals;