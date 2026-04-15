import "./certifications.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { certificationsList } from "./certifications_list";
import CertificationViewer from "./certification_viewer";

function Certifications() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerUrl, setViewerUrl] = useState("");

  const openCertificate = (file: string) => {
    // Prefer in-app viewer for PDF certificates, fallback to new tab otherwise
    if (file.toLowerCase().endsWith(".pdf")) {
      setViewerUrl(file);
      setViewerOpen(true);
    } else {
      window.open(file, "_blank");
    }
  };

  return (
    <section id="certifications" className="section">
      <h2>Certifications / Achievements</h2>

      <div className="certifications-list">
        {certificationsList.map((cert, index) => (
          <article className="certification-card visible" key={index}>
            <div className="certification-logo">
              <img src={cert.logo} alt={cert.title} />
            </div>

            <div className="certification-body">
              <div className="certification-header">
                <div>
                  <p className="certification-company">{cert.title}</p>
                  <p className="certification-issuer-line">{cert.issuer}</p>
                  <span className="certification-pill">{cert.type}</span>
                </div>

                <span className="certification-duration">{cert.date}</span>
              </div>

              <div className="certification-actions">
                {cert.buttons.map((btn, i) => (
                  <button
                    key={i}
                    className="btn"
                    onClick={() => openCertificate(btn.file)}
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <CertificationViewer
        open={viewerOpen}
        pdfUrl={viewerUrl}
        onClose={() => setViewerOpen(false)}
      />
    </section>
  );
}

export default Certifications;
