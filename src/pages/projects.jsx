import "./projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p>
        Since I'm currently studying web development, this portfolio showcases some of the projects 
        I’ve built during my education. Everything was created from scratch, using only pure HTML, 
        CSS, and JavaScript – no frameworks, no templates, just raw code.  
      </p>
      <p>
        I'm also working on a **Shopify e-commerce website**, which will be displayed here once it's live.
      </p>

      <div className="projects-grid">
        {/* Shopify Webshop (Not online yet) */}
        <div className="project-card upcoming">
          <h2>Shopify E-Commerce Website</h2>
          <p>
            Currently working on a Shopify webshop. As soon as it's live, I will showcase it here!
          </p>
          <span className="status">Coming Soon</span>
        </div>

        {/* School Projects */}
        <div className="project-card">
          <h2>Twelve Rentals</h2>
          <p>
          A fully responsive website for an apartment rental business in Cyprus.
          Built entirely with pure HTML, CSS, and JavaScript, without any frameworks. The main rental platform is fully functional (only viewing of the apartments), but an additional feature allowing guests to pre-order items for their arrival is still under development.
          </p>
          <a href="http://studenter.miun.se/~anja2401/dt200g/projekt/index.html" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        <div className="project-card">
          <h2>Web Project focusing on Accesibility</h2>
          <p>
          A web project focusing on accessibility and WCAG compliance, designed for a transportation service
            This project focused on improving contrast, keyboard navigation, and screen reader support.
          </p>
          <a href="http://studenter.miun.se/~anja2401/dt068g/moment3/index.html">View Website</a>
        </div>

        <div className="project-card">
          <h2>To-Do List App</h2>
          <p>
            A simple task management app using vanilla JavaScript and local storage. 
            No libraries, no frameworks – just clean, efficient code.
          </p>
          <a href="http://studenter.miun.se/~anja2401/dt084g/todo-list/">View Website</a>
        </div>
        <div className="project-card">
          <h2>Sveriges Radio API App</h2>
          <p>
            A web application that fetches radio programs from the Sveriges Radio API 
            and dynamically displays them based on user selection. Users can choose how many 
            programs to load, and previously fetched data is cleared before new results are displayed.
          </p>
          <a href="http://studenter.miun.se/~anja2401/dt084g/sr%20api/">View Website</a> 
        </div>
      </div>
    </div>
  );
}

export default Projects;
