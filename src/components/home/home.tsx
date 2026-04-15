import "./home.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faBullseye,
  faDownload,
  faHandshake,
  faLocationDot,
  faServer,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import ContactModal from "./contact_modal/contact_modal";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const heroImage = new URL("../../assets/img/img.jpg", import.meta.url).href;

  function handleOpen() {
    console.log("Let's Connect button clicked");
    setModalOpen(true);
  }

  return (
    <>
      <section id="home">
        <div className="hero-grid">
          <div className="hero-text">
            <p
              className="hero-pill"
              style={{ fontSize: "1.3em", fontWeight: "bold" }}
            >
              AI & ML Engineer
            </p>

            <h1>Hi, I'm Aniruddha Salvankar</h1>

            <p className="hero-lead">
              I build intelligent, ML-powered Web Applications that turn
              Complexity into Clarity—Simple, Intuitive, and Crafted for an
              Exceptional User Experience.
            </p>

            <div className="hero-actions">
              <a
                href="./Portfolio/Resume.pdf"
                className="btn"
                download="Aniruddha_Salvankar_Resume.pdf"
              >
                <FontAwesomeIcon icon={faDownload} />
                <span>Download Resume</span>
              </a>

              <button className="btn" onClick={handleOpen}>
                <FontAwesomeIcon icon={faHandshake} />
                <span>Let's Connect</span>
              </button>
            </div>

            <div className="hero-meta">
              <div className="hero-meta-block">
                <span className="hero-label" style={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  Location
                </span>

                <span className="hero-value">Bangalore, India</span>
              </div>

              <div className="hero-meta-block">
                <span className="hero-label" style={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faBullseye} /> Focus
                </span>

                <ul className="hero-value hero-focus-list">
                  <li className="hero-focus-item">
                    <FontAwesomeIcon icon={faBrain} /> AI/ML Engineering
                  </li>
                  <li className="hero-focus-item">
                    <FontAwesomeIcon icon={faServer} /> Full-Stack Development
                  </li>
                  <li className="hero-focus-item">
                    <FontAwesomeIcon icon={faWandMagicSparkles} /> UI/UX Design
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-photo-frame">
              <img
                src={heroImage}
                alt="Aniruddha Salvankar"
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal OUTSIDE section but inside fragment */}
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default Home;
