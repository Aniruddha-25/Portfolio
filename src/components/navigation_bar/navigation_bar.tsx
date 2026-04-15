import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBrain,
  faBriefcase,
  faCertificate,
  faComment,
  faGraduationCap,
  faHome,
  faLaptop,
  faLayerGroup,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import useNavigation from "./useNavigation";

function Navbar() {
  const [open, setOpen] = useState(false);
  useNavigation();

  useEffect(() => {
    document.body.classList.toggle("sidebar-open", open);
    return () => document.body.classList.remove("sidebar-open");
  }, [open]);

  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button className="hamburger" onClick={() => setOpen(!open)}>
        &#9776;
      </button>

      {/* Sidebar */}
      <nav className={`sidebar ${open ? "active" : ""}`}>
        <div className="logo">
          <FontAwesomeIcon icon={faLaptop} /> Portfolio
        </div>

        <ul>
          <li>
            <a href="#home" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faUser} /> About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faBriefcase} /> Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faBrain} /> Skills
            </a>
          </li>
          <li>
            <a href="#certifications" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faCertificate} /> Certifications
            </a>
          </li>
          <li>
            <a href="#education" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faLayerGroup} /> Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faAddressCard} /> Contact
            </a>
          </li>
          <li>
            <a href="#feedback" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faComment} /> Feedback
            </a>
          </li>
        </ul>
      </nav>

      {/* Backdrop */}
      {open && (
        <div className="sidebar-backdrop" onClick={() => setOpen(false)} />
      )}
    </>
  );
}

export default Navbar;
