import "./education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { educationList } from "./education_list";

function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>

      <div className="education-list">
        {educationList.map((edu, index) => (
          <article className="education-card visible" key={index}>
            <div className="education-logo">
              <img src={edu.logo} alt={edu.institution} />
            </div>

            <div className="education-body">
              <div className="education-header">
                <div>
                  <p className="education-degree">{edu.degree}</p>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-university">{edu.board}</p>
                </div>

                <span className="education-duration">{edu.duration}</span>
              </div>

              <div className="education-actions">
                <a
                  className="btn"
                  href={edu.website}
                  target="_blank"
                  rel="noopener"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  <span>Visit Website</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
