import { useEffect, useState } from "react";

import useNavigation from "./useNavigation";
import { FaAddressCard, FaBrain, FaBuildingUser, FaCertificate, FaComment, FaGitAlt, FaGraduationCap, FaHouse, FaLaptop, FaUser } from "react-icons/fa6";

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
          <FaLaptop className="icon" /> Portfolio
        </div>

        <ul>
          <li>
            <a href="#home" onClick={closeSidebar}>
              <FaHouse className="icon" /> Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeSidebar}>
              <FaUser className="icon" /> About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeSidebar}>
              <FaBuildingUser className="icon" /> Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeSidebar}>
              <FaBrain className="icon" /> Skills
            </a>
          </li>
          <li>
            <a href="#certifications" onClick={closeSidebar}>
              <FaCertificate className="icon" /> Certifications
            </a>
          </li>
          <li>
            <a href="#education" onClick={closeSidebar}>
              <FaGraduationCap className="icon" /> Education
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={closeSidebar}>
              <FaGitAlt className="icon" /> Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeSidebar}>
              <FaAddressCard className="icon" /> Contact
            </a>
          </li>
          <li>
            <a href="#feedback" onClick={closeSidebar}>
              <FaComment className="icon" /> Feedback
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
