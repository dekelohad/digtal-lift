import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";

function Navbar() {
    const location = useLocation();
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo" style={{ maxWidth: "150px" }} />
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
                                Home
                            </Link>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <Link 
                                className={`nav-link dropdown-toggle ${location.pathname.includes("/services") ? "active" : ""}`}
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Services
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/local-lead-generation">
                                        Local Lead Generation
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/paid-search-marketing">
                                        Paid Search Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/search-engine-optimization">
                                        Search Engine Optimization
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/google-business-profile">
                                        Google Business Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/web-design">
                                        Web Design
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/web-development">
                                        Web Development
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about-us" ? "active" : ""}`} to="/about-us">
                                About
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/testimonials" ? "active" : ""}`} to="/testimonials">
                                Testimonials
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 