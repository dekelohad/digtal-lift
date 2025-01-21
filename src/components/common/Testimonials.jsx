import React from 'react';
import { motion } from "framer-motion"

const Testmionals = ({TESTIMONIALS}) =>{
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <motion.div 
            className="success-stories-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
                padding: windowWidth <= 480 ? '1rem' : '2rem',
                margin: windowWidth <= 480 ? '2rem 0' : '4rem 0'
            }}
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
                        style={{
                            padding: windowWidth <= 480 ? '1rem' : windowWidth <= 768 ? '1.5rem' : '2rem',
                            background: 'rgba(18, 18, 18, 0.5)',
                            borderRadius: '20px',
                            border: '1px solid #BBFF00',
                            backdropFilter: 'blur(10px)'
                        }}
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