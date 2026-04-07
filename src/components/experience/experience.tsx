import "./experience.css";

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>

      <div className="experience-list">
        {/* ----------- Experience 1 ----------- */}
        <article className="experience-card">
          <div className="experience-logo">
            <img
              src="/img/internship/nicozn-technologies.webp"
              alt="Nicozn Technologies Logo"
            />
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
                    <i className="fab fa-html5"></i> HTML
                  </span>
                  <span className="tech-badge">
                    <i className="fab fa-css3-alt"></i> CSS
                  </span>
                  <span className="tech-badge">
                    <i className="fab fa-js"></i> JavaScript
                  </span>
                  <span className="tech-badge">
                    <i className="fab fa-figma"></i> Figma
                  </span>
                  <span className="tech-badge">
                    <i className="fas fa-bolt"></i> GSAP
                  </span>
                  <span className="tech-badge">
                    <i className="fab fa-google"></i> Firebase
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
                <i className="fas fa-external-link-alt"></i>
                <span>Visit Website</span>
              </a>
            </div>
          </div>
        </article>

        {/* ----------- Experience 2 ----------- */}
        <article className="experience-card">
          <div className="experience-logo dual">
            <img
              src="/img/internship/suprajit-logo.svg"
              alt="Suprajit Engineering Limited Logo"
              className="suprajit-logo"
            />
            <img
              src="/img/internship/suprajit-name.svg"
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
                    <i className="fab fa-html5"></i> HTML
                  </span>
                  <span className="tech-badge">
                    <i className="fab fa-css3-alt"></i> CSS
                  </span>
                  <span className="tech-badge">
                    <i className="fab fa-js"></i> JavaScript
                  </span>
                  <span className="tech-badge">
                    <i className="fab fa-node-js"></i> Node.js
                  </span>
                  <span className="tech-badge">
                    <i className="fa-brands fa-python"></i> Flask
                  </span>
                  <span className="tech-badge">
                    <i className="fas fa-database"></i> PostgreSQL
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
                <i className="fas fa-external-link-alt"></i>
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
