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
import LazySection from "./components/lazy_section/LazySection";

import "./styles/base.css";
import "./styles/colour.css";
import "./styles/responsive.css";

function App() {
  return (
    <div className="container">
      <Navbar />

      <div className="main-content">
        <Home />

        <LazySection id="about" title="About Me" component={About} />
        <LazySection id="experience" title="Experience" component={Experience} />
        <LazySection id="skills" title="Skills" component={Skills} />
        <LazySection
          id="certifications"
          title="Certifications / Achievements"
          component={Certifications}
        />
        <LazySection id="education" title="Education" component={Education} />
        <LazySection id="portfolio" title="Projects" component={Projects} />
        <LazySection id="contact" title="Contact" component={Contact} />
        <LazySection id="feedback" title="Feedback" component={Feedback} />
      </div>
    </div>
  );
}

export default App;
