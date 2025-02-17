import "./Home.css";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div className="home-container">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="home-content">
        <h1>Hi, I'm Andjela</h1>
        <h2>
          <Typewriter
            words={["Fullstack Developer", "Frontend Specialist", "Web Designer"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p>
          I create fast, responsive, and visually appealing websites with a focus on user experience and accessibility.  
          Currently working mostly with frontend, but I also have backend experience with various languages.
        </p>
        <div className="buttons">
          <a href="/projects">
            <button>View My Work</button>
          </a>
          <a href="/contact">
            <button className="secondary-btn">Get in Touch</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
