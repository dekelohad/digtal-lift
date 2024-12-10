import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/home-one/header";
import LocalLeadGeneration from "./pages/services/LocalLeadGeneration";
import PaidSearchMarketing from "./pages/services/PaidSearchMarketing";
import SearchEngineOptimization from "./pages/services/SearchEngineOptimization";
import GoogleMyBusiness from "./pages/services/GoogleMyBusiness";
import WebDesign from "./pages/services/WebDesign";
import WebDevelopment from "./pages/services/WebDevelopment";

// Temporary components until we create the full pages
const Home = () => <div style={{ paddingTop: "100px" }}>Home Page</div>;
const About = () => <div style={{ paddingTop: "100px" }}>About Page</div>;
const Testimonials = () => <div style={{ paddingTop: "100px" }}>Testimonials Page</div>;
const Blog = () => <div style={{ paddingTop: "100px" }}>Blog Page</div>;
const Contact = () => <div style={{ paddingTop: "100px" }}>Contact Page</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/local-lead-generation" element={<LocalLeadGeneration />} />
            <Route path="/paid-search-marketing" element={<PaidSearchMarketing />} />
            <Route path="/search-engine-optimization" element={<SearchEngineOptimization />} />
            <Route path="/google-my-business" element={<GoogleMyBusiness />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 