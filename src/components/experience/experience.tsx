import "./experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAws,
  faCss3Alt,
  faFigma,
  faGoogle,
  faHtml5,
  faJs,
  faNodeJs,
  faPostgresql,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import BlurImage from "../blur_image/BlurImage";
import { internshipExperiences, professionalExperiences } from "./experienceData";
import {
  calculateInternshipExperience,
  calculateProfessionalExperience,
  formatExperienceDateRange,
} from "../../utils/experienceCalculator";

function Experience() {
  const nicoznExperience = internshipExperiences.nicozn;
  const suprajitExperience = internshipExperiences.suprajit;
  const falkondataExperience = professionalExperiences[0];
  const nicoznDuration = calculateInternshipExperience(nicoznExperience);
  const suprajitDuration = calculateInternshipExperience(suprajitExperience);
  const falkondataDuration =
    calculateProfessionalExperience(falkondataExperience);

  const nicoznLogo = new URL(
    "../../assets/img/experience/internship/nicozn-technologies.webp",
    import.meta.url,
  ).href;
  const suprajitLogo = new URL(
    "../../assets/img/experience/internship/suprajit-logo.svg",
    import.meta.url,
  ).href;
  const suprajitNameLogo = new URL(
    "../../assets/img/experience/internship/suprajit-name.svg",
    import.meta.url,
  ).href;
  const falkondataLogo = new URL(
    "../../assets/img/experience/falkondata.webp",
    import.meta.url,
  ).href;

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>

      <div className="experience-list">
        {/* ----------- Experience 3 ----------- */}
        <article className="experience-card">
          <div className="experience-logo">
            <BlurImage src={falkondataLogo} alt="Falkondata Logo" />
          </div>

          <div className="experience-body">
            <div className="experience-header">
              <div>
                <p className="experience-company">
                  {falkondataExperience.companyName}
                </p>
                <p className="experience-project-line">
                  Project: Cloud-Based Healthcare Integration Solutions
                </p>
                <span className="experience-pill">
                  {falkondataExperience.jobTitle}
                </span>
              </div>

              <div className="experience-duration-group">
                <span className="experience-duration">
                  {formatExperienceDateRange(falkondataExperience) ??
                    "Dates unavailable"}
                </span>
                <span
                  className="experience-duration experience-tenure"
                  aria-label={`Falkondata experience: ${falkondataDuration?.label ?? "Duration unavailable"}`}
                >
                  {falkondataDuration?.label ?? "Duration unavailable"}
                </span>
              </div>
            </div>

            <ul className="experience-highlights">
              <li>
                Technologies used :
                <span className="experience-tags">
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faReact} /> React.js
                  </span>
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faNodeJs} /> Node.js
                  </span>
                  <span className="tech-badge">
                    <FontAwesomeIcon icon={faAws} /> Amazon Web Services
                  </span>
                </span>
              </li>

              <li>
                Built and enhanced <strong>React.js</strong> frontend features
                and <strong>Node.js</strong> backend services for healthcare
                workflows.
              </li>
              <li>
                Integrated healthcare systems such as{" "}
                <strong>AdvancedMD</strong> and <strong>SimpleChime</strong>,
                implementing patient data synchronization, HL7 lab-result
                processing, validation, retries, and error handling.
              </li>
              <li>
                Investigated and resolved production issues involving{" "}
                <strong>API failures, duplicate processing, timeouts,</strong>{" "}
                and <strong>rate limits</strong> across healthcare workflows.
              </li>
            </ul>

            <div className="experience-actions">
              <a
                className="btn"
                href="https://falkondata.com/"
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
            <BlurImage
              src={suprajitLogo}
              alt="Suprajit Engineering Limited Logo"
              className="suprajit-logo"
            />
            <BlurImage
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

              <div className="experience-duration-group">
                <span className="experience-duration">
                  {formatExperienceDateRange(suprajitExperience) ??
                    "Dates unavailable"}
                </span>
                <span
                  className="experience-duration experience-tenure"
                  aria-label={`Suprajit Engineering Ltd. experience: ${suprajitDuration?.label ?? "Duration unavailable"}`}
                >
                  {suprajitDuration?.label ?? "Duration unavailable"}
                </span>
              </div>
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
                    <FontAwesomeIcon icon={faPostgresql} /> PostgreSQL
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
        {/* ----------- Experience 1 ----------- */}
        <article className="experience-card">
          <div className="experience-logo">
            <BlurImage src={nicoznLogo} alt="Nicozn Technologies Logo" />
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

              <div className="experience-duration-group">
                <span className="experience-duration">
                  {formatExperienceDateRange(nicoznExperience) ??
                    "Dates unavailable"}
                </span>
                <span
                  className="experience-duration experience-tenure"
                  aria-label={`Nicozn Technologies experience: ${nicoznDuration?.label ?? "Duration unavailable"}`}
                >
                  {nicoznDuration?.label ?? "Duration unavailable"}
                </span>
              </div>
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
      </div>
    </section>
  );
}

export default Experience;
