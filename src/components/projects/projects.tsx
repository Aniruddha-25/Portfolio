import "./projects.css";
import { projectsList } from "./projects_list";

function Projects() {
  return (
    <section id="portfolio" className="section">
      <h2>Projects</h2>

      <div className="project-cards-container">
        {projectsList.map((project, index) => (
          <div className="project-card visible" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
              loading="lazy"
            />

            <div className="project-overlay">
              <div className="project-overlay-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <button
                  className="project-link"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <i className="fas fa-external-link-alt"></i>
                  <span>View Source Code</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
