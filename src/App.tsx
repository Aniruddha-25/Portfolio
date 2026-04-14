import Navbar from "./components/navigation_bar/navigation_bar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Skills from "./components/skills/skills";
import Certifications from "./components/certifications/certifications";
import Education from "./components/education/education";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Feedback from "./components/feedback/feedback";

import "./styles/base.css";
import "./styles/colour.css";
import "./styles/responsive.css";

function App() {
  return (
    <div className="container">
      <Navbar />

      <div className="main-content">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Projects />
        <Contact />
        <Feedback />
      </div>
    </div>
  );
}

export default App;
