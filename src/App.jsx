import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
                
      <footer className="footer">
        <p>
          <span className="footer-icon">👩‍💻</span> Designed & built by Andjela |  
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </footer>
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
  ↑ Back to Top
</button>


    </Router>
  );
}

export default App;
