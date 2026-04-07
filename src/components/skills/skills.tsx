import "./skills.css";
import { skillsList } from "./skills_list";
function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <ul className="skills-list">
        {skillsList.map((category, index) => (
          <li className="skill" key={index}>
            <div className="skill-item">
              <div className="skill-name" style={{ fontWeight: "bold" }}>
                <i className={category.iconClass}></i> {category.title}
              </div>
            </div>

            <ul className="skill-details">
              {category.items.map((item, i) => (
                <li key={i}>
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="skill-icon"
                    loading="lazy"
                  />
                  {item.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
