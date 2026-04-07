import { useEffect } from "react";
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
          <i className="fas fa-times"></i>
        </button>

        <div className="certification-viewer-header">
          <i className="fas fa-certificate"></i>
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
