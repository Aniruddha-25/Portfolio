import "./contact.css"
import { FaAddressBook, FaLinkedin, FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="contact-title">
        <FaAddressBook className="icon" /> Contact
      </h2>

      <div className="contact-glass-card">
        <a
          className="contact-glass-method contact-card-link"
          href="tel:+918657809766"
        >
          <span className="contact-glass-icon icon-phone">
            <FaPhone className="icon" />
          </span>
          <div>
            <div className="contact-label">Phone</div>
            <span className="contact-value">+91 8657809766</span>
          </div>
        </a>

        <a
          className="contact-glass-method contact-card-link"
          href="mailto:aniruddha.salvankar2523@gmail.com"
        >
          <span className="contact-glass-icon icon-email">
            <SiGmail className="icon" />
          </span>
          <div>
            <div className="contact-label">Email</div>
            <span className="contact-value">
              aniruddha.salvankar2523@gmail.com
            </span>
          </div>
        </a>

        <a
          className="contact-glass-method contact-card-link"
          href="https://www.linkedin.com/in/aniruddha-salvankar-193642264/"
          target="_blank"
          rel="noopener"
        >
          <span className="contact-glass-icon icon-linkedin">
            <FaLinkedin className="icon" />
          </span>
          <div>
            <div className="contact-label">LinkedIn</div>
            <span className="contact-value">Aniruddha Salvankar</span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Contact;
