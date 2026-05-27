import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faXmark } from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./certification-viewer.css";

type Props = {
  open: boolean;
  pdfUrl: string;
  onClose: () => void;
};

function CertificationViewer({ open, pdfUrl, onClose }: Props) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (!open) {
      setProgress(0);
      setLoaded(false);
      return;
    }

    setProgress(0);
    setLoaded(false);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(intervalRef.current!);
          return 90;
        }
        const increment = prev < 30 ? 8 : prev < 60 ? 4 : prev < 80 ? 2 : 0.5;
        return Math.min(prev + increment, 90);
      });
    }, 150);

    // Fallback: force complete after 3.5 s if onLoad never fires
    const fallback = setTimeout(() => forceComplete(), 3500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearTimeout(fallback);
    };
  }, [open, pdfUrl]);

  function forceComplete() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(100);
    setTimeout(() => setLoaded(true), 400);
  }

  function handleIframeLoad() {
    forceComplete();
  }

  if (!open) return null;

  return (
    <div className="certification-viewer active">
      <div className="certification-viewer-overlay" onClick={onClose} />

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
          {!loaded && (
            <div className="cv-progress-overlay">
              <div className="cv-progress-ring">
                <CircularProgressbar
                  value={progress}
                  text={`${Math.round(progress)}%`}
                  styles={buildStyles({
                    textSize: "18px",
                    pathColor: "#c5441c",
                    textColor: "#ffffff",
                    trailColor: "rgba(255,255,255,0.1)",
                    pathTransitionDuration: 0.3,
                  })}
                />
              </div>
              <p className="cv-progress-label">Loading document…</p>
            </div>
          )}

          <embed
            key={pdfUrl}
            src={pdfUrl}
            type="application/pdf"
            className="certification-viewer-iframe"
            style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
            onLoad={handleIframeLoad}
          />
        </div>
      </div>
    </div>
  );
}

export default CertificationViewer;
