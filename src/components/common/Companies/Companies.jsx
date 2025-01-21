import { useState, useEffect } from 'react';
import './Companies.css';

import logo1 from '../../../assets/images/companies/1.png';
import logo2 from '../../../assets/images/companies/2.png';
import logo3 from '../../../assets/images/companies/3.png';
import logo4 from '../../../assets/images/companies/4.png';
import logo5 from '../../../assets/images/companies/5.png';
import logo6 from '../../../assets/images/companies/6.png';
import logo7 from '../../../assets/images/companies/7.png';
import logo8 from '../../../assets/images/companies/8.png';
import logo9 from '../../../assets/images/companies/9.png';

const Companies = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const companies = [
        { id: 1, logo: logo1, name: "Company 1" },
        { id: 2, logo: logo2, name: "Company 2" },
        { id: 3, logo: logo3, name: "Company 3", isSmall: true },
        { id: 4, logo: logo4, name: "Company 4" },
        { id: 5, logo: logo5, name: "Company 5" },
        { id: 6, logo: logo6, name: "Company 6" },
        { id: 7, logo: logo7, name: "Company 7", isSmall: true },
        { id: 8, logo: logo8, name: "Company 8", isSmall: true },
        { id: 9, logo: logo9, name: "Company 9", isSmall: true }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % (companies.length - (isMobile ? 1 : 2)));
        }, 3000);

        return () => clearInterval(interval);
    }, [companies.length, isMobile]);

    const visibleCompanies = isMobile ? 2 : 3;

    return (
        <section className="companies-section">
            <div className="companies-container">
                <h2 className="companies-title">OUR CUSTOMERS ARE SOME OF THE WORLD'S...</h2>
                <h3 className="companies-subtitle">Fastest growing local businesses</h3>
                
                <div className="companies-slider">
                    <div 
                        className="companies-track"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / visibleCompanies)}%)`
                        }}
                    >
                        {companies.map((company) => (
                            <div key={company.id} className="company-item">
                                <img 
                                    src={company.logo} 
                                    alt={company.name}
                                    className={`company-logo ${company.isSmall ? 'company-logo-small' : ''}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="companies-dots">
                    {Array.from({ length: companies.length - (visibleCompanies - 1) }).map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Companies; 