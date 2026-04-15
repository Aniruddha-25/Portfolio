import "./experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBolt,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faFigma,
  faGoogle,
  faHtml5,
  faJs,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

function Experience() {
  const nicoznLogo = new URL(
    "../../assets/img/internship/nicozn-technologies.webp",
    import.meta.url,
  ).href;
  const suprajitLogo = new URL(
    "../../assets/img/internship/suprajit-logo.svg",
    import.meta.url,
  ).href;
  const suprajitNameLogo = new URL(
    "../../assets/img/internship/suprajit-name.svg",
    import.meta.url,
  ).href;

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>

      <div className="experience-list">
        {/* ----------- Experience 1 ----------- */}
        <article className="experience-card">
          <div className="experience-logo">
            <img src={nicoznLogo} alt="Nicozn Technologies Logo" />
          </div>

          <div className="experience-body">
            <div className="experience-header">
              <div>
                <p className="experience-company">Nicozn Technologies</p>
                <p className="experience-project-line">
                  Project: Rockside Restaurant Webpage
                </p>
                <span className="experience-pill">
                  Front-End Developer Intern
                </span>
              </div>

              <span className="experience-duration">Oct 2023 – Nov 2023</span>
            </div>

            <ul className="experience-highlights">
              <li>
                Technologies used :
                <span className="experience-tags">
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faHtml5} /> HTML
                  </span>
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faCss3Alt} /> CSS
                  </span>
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faJs} /> JavaScript
                  </span>
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faFigma} /> Figma
                  </span>
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faBolt} /> GSAP
                  </span>
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faGoogle} /> Firebase
                  </span>
                </span>
              </li>

              <li>
                Built animated hero interactions with GSAP and deployed previews
                with Firebase Hosting for stakeholder demos.
              </li>

              <li>
                Documented responsive guidelines so future interns could extend
                components without breaking layouts.
              </li>
            </ul>

            <div className="experience-actions">
              <a
                className="btn"
                href="https://nicozn.com/"
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                <span>Visit Website</span>
              </a>
            </div>
          </div>
        </article>

        {/* ----------- Experience 2 ----------- */}
        <article className="experience-card">
          <div className="experience-logo dual">
            <img
              src={suprajitLogo}
              alt="Suprajit Engineering Limited Logo"
              className="suprajit-logo"
            />
            <img
              src={suprajitNameLogo}
              alt="Suprajit Engineering Limited wordmark"
              className="suprajit-name-logo"
            />
          </div>

          <div className="experience-body">
            <div className="experience-header">
              <div>
                <p className="experience-company">Suprajit Engineering Ltd.</p>
                <p className="experience-project-line">
                  Project: College Placement Management System
                </p>
                <span className="experience-pill">
                  Full Stack Developer Intern (PostgreSQL)
                </span>
              </div>

              <span className="experience-duration">Mar 2025 – Jun 2025</span>
            </div>

            <ul className="experience-highlights">
              <li>
                Technologies used :
                <span className="experience-tags">
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faHtml5} /> HTML
                  </span>
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faCss3Alt} /> CSS
                  </span>
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faJs} /> JavaScript
                  </span>
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faNodeJs} /> Node.js
                  </span>
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faPython} /> Flask
                  </span>
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faDatabase} /> PostgreSQL
                  </span>
                </span>
              </li>

              <li>
                Built REST endpoints and SQL views to surface production KPIs;
                introduced reusable cards and tables for varying screen sizes.
              </li>

              <li>
                Collaborated with QA to script accessibility and responsiveness
                checks before UAT releases.
              </li>
            </ul>

            <div className="experience-actions">
              <a
                className="btn"
                href="https://suprajit.com/"
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                <span>Visit Website</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
