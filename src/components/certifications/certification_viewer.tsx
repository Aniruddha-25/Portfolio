import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./certification-viewer.css";

type Props = {
  open: boolean;
  pdfUrl: string;
  onClose: () => void;
};

function CertificationViewer({ open, pdfUrl, onClose }: Props) {
  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="certification-viewer active">
      {/* Overlay */}
      <div className="certification-viewer-overlay" onClick={onClose}></div>

      {/* Card */}
      <div
        className="certification-viewer-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="certification-viewer-close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="certification-viewer-header">
          <FontAwesomeIcon icon={faCertificate} />
          <h3 className="certification-viewer-title">Certificate Preview</h3>
        </div>

        <div className="certification-viewer-content">
          <iframe
            src={pdfUrl}
            className="certification-viewer-iframe"
            title="Certificate Viewer"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default CertificationViewer;
