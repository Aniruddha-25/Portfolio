import "./certifications.css";
import { useState } from "react";
import { certificationsList } from "./certifications_list";
import CertificationViewer from "./certification_viewer";
import BlurImage from "../blur_image/BlurImage";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SiCoursera, SiHackerrank, SiTcs, SiUdemy } from "react-icons/si";
import type { IconType } from "react-icons";

// Brand icon shown directly before each provider name. Multi-provider issuers
// (e.g. "IBM | Coursera") are split on " | " and displayed in reverse (Coursera | IBM),
// so each provider gets its own icon.
// IBM has no icon in the installed react-icons package, so it is shown as text only.
// "optical" icons carry their visual weight below the center of their SVG box
// (Udemy, TCS), so they get an extra icon-specific upward correction in CSS.
const providerIcons: Record<string, { Icon: IconType; optical?: string }> = {
  HackerRank: { Icon: SiHackerrank },
  Udemy: { Icon: SiUdemy, optical: "certification-brand-udemy" },
  Coursera: { Icon: SiCoursera },
  "TCS National Qualifier Test (TCS NQT)": { Icon: SiTcs, optical: "certification-brand-tcs" },
};

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
              <BlurImage src={cert.logo} alt={cert.title} />
            </div>

            <div className="certification-body">
              <div className="certification-header">
                <div>
                  <p className="certification-company">{cert.title}</p>
                  <p className="certification-issuer-line">
                    {cert.issuer.split(" | ").reverse().map((provider, i) => {
                      const brand = providerIcons[provider];
                      return (
                        <span className="certification-provider" key={provider}>
                          {i > 0 && (
                            <span className="certification-provider-separator" aria-hidden="true">
                              |
                            </span>
                          )}
                          {brand && (
                            <brand.Icon
                              className={`icon ${brand.optical ?? ""}`.trim()}
                              aria-hidden="true"
                            />
                          )}
                          <span>{provider}</span>
                        </span>
                      );
                    })}
                  </p>
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
                    <FaArrowUpRightFromSquare className="icon" />
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
