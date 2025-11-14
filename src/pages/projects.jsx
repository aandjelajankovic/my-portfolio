import "./projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p>
        A selection of independent and client-based projects showcasing my
        experience in full-stack development, UX, and modern web technologies.
        Each project has been designed and built from scratch, with a focus on
        functionality, scalability, and user-centered design.
      </p>

      <div className="projects-grid">
        {/* SL-APP */}
        <div className="project-card">
          <h2>SL-APP</h2>
          <p>
            A private time tracking and goods receipt system built for a logistics
            company in Germany. Developed with React, Express, and PostgreSQL.
            Includes admin dashboard, CSV export, and authentication logic.
            Due to company confidentiality, this project cannot be made public.
          </p>
          <span className="status private">Private Project</span>
        </div>

        {/* OneGift */}
        <div className="project-card">
          <h2>OneGift</h2>
          <p>
            A personal side project for a B2B gift platform. Initially built from
            scratch using HTML, CSS, and JavaScript, but later migrated to
            WordPress for easier management. Since it’s a personal concept still
            under experimentation, development has not progressed far, and the
            final tech stack is still being decided.
          </p>
          <a
            href="https://github.com/arlaspresident/onegift"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* CyprusDeals */}
        <div className="project-card">
          <h2>CyprusDeals</h2>
          <p>
            An ongoing project inspired by Prisjakt, designed for the Cypriot
            market. The goal is to create a platform that compares local product
            prices and showcases real-time deals from online retailers.
            Currently focusing on UI and data structure before implementing
            backend API integration.
          </p>
          <a
            href="https://github.com/arlaspresident/cyprusdeals"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* SL Fulfillment Website */}
        <div className="project-card">
          <h2>SL Fulfillment Website</h2>
          <p>
            The official website for SL Fulfillment GmbH, developed in WordPress.
            The site communicates the company’s logistics and fulfillment
            services with a professional layout, SEO optimization, and clear
            pricing structure.
          </p>
          <a
            href="https://www.sl-fulfillment.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>

        {/* Flora Silva Shopify Store */}
        <div className="project-card">
          <h2>Flora Silva Shopify Store</h2>
          <p>
            A Shopify-based online store for plants and botanical home decor.
            The webshop was fully developed and functional, featuring custom
            Liquid templates, product filtering, and optimized checkout.
            The store has since been closed at the owner’s request.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
