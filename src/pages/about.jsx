import "./about.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <img src="/jag.jpg" alt="Andjela" className="profile-img" />
      
      <p>
      I'm a junior fullstack developer, but right now I'm mostly working with frontend development.
      I love building modern, clean, and accessible websites that don’t just look good but also feel great to use. Whether it's designing in Figma or bringing ideas to life with React, HTML, CSS, and JavaScript, I always aim for smooth, intuitive user experiences.
      </p>

      <p>
      I'm currently a web development student while also working on freelance projects.
      I've done some work with e-commerce, mainly on Shopify, and while I’m still learning, I have no problem picking up new tools and tech fast. I’m always looking for ways to improve my skills, whether it’s through new frameworks, performance optimization, or just experimenting with better UI/UX solutions. 
      </p>

      <h2>Skills</h2>
<div className="skills-grid">
  <div>
    <h3>Frontend Development</h3>
    <ul>
      <li>HTML, CSS (Flexbox, Grid), JavaScript (ES6+), React</li>
      <li>Performance Optimization & Web Accessibility (WCAG compliance)</li>
      <li>Git, GitHub, SEO Best Practices</li>
    </ul>
  </div>
  <div>
    <h3>Backend Development</h3>
    <ul>
      <li>PHP, MySQL</li>
      <li>REST APIs, Fetch/Axios</li>
      <li>Basic authentication & database management</li>
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
        <li><strong>English:</strong> C1/C2</li>
        <li><strong>Swedish:</strong> Native/Fluent</li>
        <li><strong>Serbian:</strong> Fluent</li>
        <li><strong>German:</strong> B2/C1</li>
        <li><strong>Russian:</strong> B1/B2</li>
      </ul>
    </div>
  );
}

export default About;
