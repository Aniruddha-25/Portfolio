import "./home.css";
import { useEffect, useState } from "react";
import BlurImage from "../blur_image/BlurImage";
import ContactModal from "./contact_modal/contact_modal";
import { useAutoTyping } from "./useAutoTyping";
import { professionalExperiences } from "../experience/experienceData";
import { calculateTotalProfessionalExperience } from "../../utils/experienceCalculator";
import { FaBriefcase, FaBullseye, FaDownload, FaFigma, FaHandshake, FaLocationDot } from "react-icons/fa6";
import { SiGithubcopilot } from "react-icons/si";
import { TbServerCog } from "react-icons/tb";


function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [referenceDate, setReferenceDate] = useState(() => new Date());
  const heroImage = new URL("../../assets/img/img.jpg", import.meta.url).href;
  
const animatedPhrases = [
  "What People Need",
  "What Businesses Use",
  "What Technology Enables"
];

  // Holds the line width so the centered block doesn't shift while typing
  const longestPhrase = animatedPhrases.reduce(
    (longest, phrase) => (phrase.length > longest.length ? phrase : longest),
    ""
  );

  const typingText = useAutoTyping({
    phrases: animatedPhrases,
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetweenPhrases: 2500,
  });

  useEffect(() => {
    let timeout: number;
    const scheduleNextDay = () => {
      const nextDay = new Date();
      nextDay.setHours(24, 0, 0, 0);
      timeout = window.setTimeout(() => {
        setReferenceDate(new Date());
        scheduleNextDay();
      }, nextDay.getTime() - Date.now());
    };

    scheduleNextDay();
    return () => window.clearTimeout(timeout);
  }, []);

  const currentProfessionalExperience = professionalExperiences[0];
  const totalProfessionalExperience = calculateTotalProfessionalExperience(
    professionalExperiences,
    referenceDate,
  );
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
              <span className="static-text">I Create</span>
              <span className="typing-line">
                <span className="typing-sizer" aria-hidden="true">
                  {longestPhrase}
                </span>
                <span>
                  <span className="typing-text">{typingText}</span>
                  <span className="typing-cursor" aria-hidden="true"></span>
                </span>
              </span>
            </p>

            <div className="hero-actions">
              <a
                href="./Portfolio/Resume.pdf"
                className="btn"
                download="Aniruddha_Salvankar_Resume.pdf"
              >
                <FaDownload className="icon" />
                <span>Download Resume</span>
              </a>

              <button className="btn" onClick={handleOpen}>
                <FaHandshake className="icon" />
                <span>Let's Connect</span>
              </button>
            </div>

            <div className="hero-meta">
              <article
                className="hero-meta-block hero-experience"
                aria-label="Current professional experience"
              >
                <span className="hero-label hero-experience-label">
                  <FaBriefcase className="icon" />
                  <span>PROFESSIONAL EXPERIENCE</span>
                </span>
                <span className="hero-value hero-experience-title">
                  {currentProfessionalExperience.jobTitle}
                </span>
                <div className="hero-experience-details">
                  <span className="hero-experience-company">
                    {currentProfessionalExperience.companyName}
                    <span aria-hidden="true"> · </span>
                    {currentProfessionalExperience.workArrangement}
                  </span>
                </div>
                <div className="experience-duration-group hero-experience-durations">
                  <span
                    className="experience-duration experience-tenure"
                    aria-label={`Total professional experience: ${
                      totalProfessionalExperience?.label ??
                      "Duration unavailable"
                    }`}
                  >
                   {totalProfessionalExperience?.label ??
                      "Duration unavailable"}
                  </span>
                </div>
              </article>

              <div className="hero-meta-block hero-location">
                <span className="hero-label" style={{ fontWeight: "bold" }}>
                  <FaLocationDot className="icon" />
                  Location
                </span>

                <span className="hero-value">Bangalore, India</span>
              </div>

              <div className="hero-meta-block hero-focus">
                <span className="hero-label" style={{ fontWeight: "bold" }}>
                  <FaBullseye className="icon" /> Focus
                </span>

                <ul className="hero-value hero-focus-list">
                  <li className="hero-focus-item">
                    <SiGithubcopilot className="icon" /> AI/ML Engineering
                  </li>
                  <li className="hero-focus-item">
                    <TbServerCog className="icon" /> Full-Stack Development
                  </li>
                  <li className="hero-focus-item">
                    <FaFigma className="icon" /> UI/UX Design
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-photo-frame">
              <BlurImage
                src={heroImage}
                alt="Aniruddha Salvankar"
                className="hero-photo"
                priority
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
