import { useEffect, useState } from "react";
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
          <i className="fa-solid fa-laptop"></i> Portfolio
        </div>

        <ul>
          <li>
            <a href="#home" onClick={closeSidebar}>
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeSidebar}>
              <i className="fas fa-user"></i> About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeSidebar}>
              <i className="fas fa-briefcase"></i> Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeSidebar}>
              <i className="fa-solid fa-brain"></i> Skills
            </a>
          </li>
          <li>
            <a href="#certifications" onClick={closeSidebar}>
              <i className="fa-solid fa-certificate"></i> Certifications
            </a>
          </li>
          <li>
            <a href="#education" onClick={closeSidebar}>
              <i className="fa-solid fa-graduation-cap"></i> Education
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={closeSidebar}>
              <i className="fa-solid fa-layer-group"></i> Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeSidebar}>
              <i className="fa-solid fa-address-card"></i> Contact
            </a>
          </li>
          <li>
            <a href="#feedback" onClick={closeSidebar}>
              <i className="fas fa-comment"></i> Feedback
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
