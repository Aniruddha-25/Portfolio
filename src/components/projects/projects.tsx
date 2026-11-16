import "./projects.css";
import { projectsList } from "./projects_list";
import { getProgramMeta } from "./project_programs";
import BlurImage from "../blur_image/BlurImage";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Projects() {
  return (
    <section id="portfolio" className="section">
      <h2>Projects</h2>

      <div className="project-cards-container">
        {projectsList.map((project, index) => (
          <div className="project-card visible" key={index}>
            <BlurImage
              src={project.image}
              alt={project.title}
              className="project-img"
            />

            <div className="project-overlay">
              <div className="project-overlay-content">
                <div className="project-programs" aria-label="Programs used">
                  <div className="project-programs-list">
                    {project.programsUsed.map((program) => {
                      const programMeta = getProgramMeta(program);

                      return (
                        <span className="project-program-chip" key={program}>
                          <programMeta.icon className="icon" />
                          <span>{programMeta.label}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <button
                  className="project-link"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <FaArrowUpRightFromSquare className="icon" />
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
