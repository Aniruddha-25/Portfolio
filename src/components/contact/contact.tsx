import "./contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="contact-title">
        <FontAwesomeIcon icon={faAddressBook} /> Contact
      </h2>

      <div className="contact-glass-card">
        <a
          className="contact-glass-method contact-card-link"
          href="tel:+918657809766"
        >
          <span className="contact-glass-icon icon-phone">
            <FontAwesomeIcon icon={faPhone} />
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
            <FontAwesomeIcon icon={faEnvelope} />
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
            <FontAwesomeIcon icon={faLinkedin} />
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
