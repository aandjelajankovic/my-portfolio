import "./about.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <img src="/DSCN1350.JPG" alt="Andjela" className="profile-img" />

      <p>
        I'm a junior full-stack developer with a strong focus on frontend
        development and user experience. I enjoy building modern, clean, and
        accessible websites that combine aesthetics with functionality.
        Whether designing in Figma or developing with React, HTML, CSS, and
        JavaScript, I aim to create interfaces that feel intuitive and
        purposeful.
      </p>

      <p>
        Alongside my web development studies, I work on freelance and
        independent projects — from e-commerce solutions in Shopify to full-stack
        applications with React, Express, and PostgreSQL. I’m curious,
        adaptable, and constantly improving my skills through new frameworks,
        performance optimization, and UX-driven design thinking.
      </p>

      <h2>Skills</h2>
      <div className="skills-grid">
        <div>
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML, CSS (Flexbox, Grid), JavaScript (ES6+), React</li>
            <li>Performance Optimization & Web Accessibility (WCAG 2.1)</li>
            <li>Git, GitHub, SEO Best Practices</li>
          </ul>
        </div>
        <div>
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js/Express, PHP, MySQL, PostgreSQL</li>
            <li>REST APIs, Fetch/Axios</li>
            <li>Authentication & Database Design</li>
          </ul>
        </div>
        <div>
          <h3>UI/UX & Design</h3>
          <ul>
            <li>Figma (UI/UX, Wireframing, Prototyping)</li>
            <li>Adobe Photoshop, Illustrator, Premiere Pro</li>
          </ul>
        </div>
      </div>

      <h2>Languages</h2>
      <ul>
        <li><strong>English:</strong> Fluent (C1/C2)</li>
        <li><strong>Swedish:</strong> Native</li>
        <li><strong>Serbian:</strong> Fluent</li>
        <li><strong>German:</strong> Intermediate (B1/B2)</li>
        <li><strong>Russian:</strong> Basic (A1/A2)</li>
      </ul>
    </div>
  );
}

export default About;
