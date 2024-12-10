import { useState, useEffect } from 'react';

const clientLogos = [
    {
        name: "Nexatech",
        logo: "NEXATECH",
        description: "Digital Solutions"
    },
    {
        name: "Syntrix",
        logo: "SYNTRIX",
        description: "AI Systems"
    },
    {
        name: "Omnify",
        logo: "OMNIFY",
        description: "Cloud Services"
    },
    {
        name: "Zenith",
        logo: "ZENITH",
        description: "Tech Solutions"
    },
    {
        name: "Vertex",
        logo: "VERTEX",
        description: "Data Systems"
    }
];

function ClientsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const element = document.getElementById('clients-section');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
        <div id="clients-section" style={{
            padding: "80px 0",
            background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
            overflow: "hidden",
            position: "relative"
        }}>
            {/* Background Pattern */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: "radial-gradient(circle at 50% 50%, #f0f0f0 1px, transparent 1px)",
                backgroundSize: "50px 50px",
                opacity: 0.5,
                zIndex: 1
            }} />

            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                {/* Section Title */}
                <div style={{
                    textAlign: "center",
                    marginBottom: "60px",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                    <h3 style={{
                        fontSize: "16px",
                        color: "#4a90e2",
                        fontWeight: "600",
                        letterSpacing: "3px",
                        marginBottom: "15px",
                        textTransform: "uppercase"
                    }}>
                        Trusted By Industry Leaders
                    </h3>
                    <div style={{
                        width: "60px",
                        height: "2px",
                        background: "linear-gradient(90deg, #4a90e2, #CCFF00)",
                        margin: "0 auto",
                        marginBottom: "15px"
                    }} />
                </div>

                {/* Logos Row */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    margin: "0 -20px"
                }}>
                    {clientLogos.map((client, index) => (
                        <div 
                            key={client.name}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                flex: "1",
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: `all ${0.5 + index * 0.1}s cubic-bezier(0.4, 0, 0.2, 1)`,
                                textAlign: "center",
                                padding: "0 20px"
                            }}
                        >
                            <div style={{
                                position: "relative",
                                padding: "20px",
                                cursor: "pointer",
                                transition: "all 0.4s ease"
                            }}>
                                <div style={{
                                    fontSize: hoveredIndex === index ? "24px" : "20px",
                                    fontWeight: "800",
                                    color: hoveredIndex === index ? "#4a90e2" : "#8B8B8B",
                                    fontFamily: "'Bricolage Grotesque', sans-serif",
                                    transition: "all 0.4s ease",
                                    transform: hoveredIndex === index ? 'translateY(-5px)' : 'none',
                                    letterSpacing: "1px",
                                    whiteSpace: "nowrap"
                                }}>
                                    {client.logo}
                                </div>
                                <div style={{
                                    fontSize: "12px",
                                    color: "#a1a1aa",
                                    marginTop: "8px",
                                    opacity: hoveredIndex === index ? 1 : 0,
                                    transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(-10px)',
                                    transition: "all 0.3s ease",
                                    letterSpacing: "1px"
                                }}>
                                    {client.description}
                                </div>
                                {hoveredIndex === index && (
                                    <div style={{
                                        position: "absolute",
                                        bottom: "-10px",
                                        left: "50%",
                                        width: "30px",
                                        height: "2px",
                                        background: "#CCFF00",
                                        transform: "translateX(-50%)",
                                        transition: "all 0.3s ease"
                                    }} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Gradient Line */}
            <div style={{
                height: "1px",
                background: "linear-gradient(90deg, transparent 0%, #CCFF00 50%, transparent 100%)",
                marginTop: "60px",
                opacity: 0.5,
                maxWidth: "600px",
                margin: "60px auto 0"
            }} />
        </div>
    );
}

export default ClientsSection; 