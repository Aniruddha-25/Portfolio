import { useEffect } from "react";
import "./contact_modal.css";

type Props = {
  open: boolean;
  onClose: () => void;
};

function ContactModal({ open, onClose }: Props) {
  useEffect(() => {
    console.log("ContactModal render; open=", open);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className={"contact-model" + (open ? " active" : "")}>
      <div className="contact-model-overlay" onClick={onClose}></div>

      <div className="contact-model-card">
        <button className="contact-model-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <h3 className="contact-model-title">
          <i className="fas fa-handshake"></i> Let's Connect!
        </h3>

        <p className="contact-model-subtitle">
          Choose your preferred way to reach out
        </p>

        <div className="contact-model-options">
          <a
            href="mailto:aniruddha.salvankar2523@gmail.com"
            className="contact-model-option gmail"
          >
            <span className="contact-model-icon">
              <i className="fas fa-envelope"></i>
            </span>
            <div>
              <div className="contact-model-label">GMAIL</div>
              <div className="contact-model-meta">aniruddha.salvankar2523@gmail.com</div>
            </div>
          </a>

          <a
            href="https://github.com/Aniruddha-25"
            target="_blank"
            className="contact-model-option github"
          >
            <span className="contact-model-icon">
              <i className="fab fa-github"></i>
            </span>
            <div>
              <div className="contact-model-label">GITHUB</div>
              <div className="contact-model-meta">Aniruddha-25</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/aniruddha-salvankar"
            target="_blank"
            className="contact-model-option linkedin"
          >
            <span className="contact-model-icon">
              <i className="fab fa-linkedin"></i>
            </span>
            <div>
              <div className="contact-model-label">LINKEDIN</div>
              <div className="contact-model-meta">Aniruddha Salvankar</div>
            </div>
          </a>

          <a
            href="https://wa.me/918657809766"
            target="_blank"
            className="contact-model-option whatsapp"
          >
            <span className="contact-model-icon">
              <i className="fab fa-whatsapp"></i>
            </span>
            <div>
              <div className="contact-model-label">WHATSAPP</div>
              <div className="contact-model-meta">+91 8657809766</div>
            </div>
          </a>

          <a
            href="https://www.instagram.com/urstruly_aniruddha"
            target="_blank"
            className="contact-model-option instagram"
          >
            <span className="contact-model-icon">
              <i className="fab fa-instagram"></i>
            </span>
            <div>
              <div className="contact-model-label">INSTAGRAM</div>
              <div className="contact-model-meta">@urstruly_aniruddha</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
