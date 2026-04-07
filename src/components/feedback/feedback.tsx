import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./feedback.css";
import "./feedback_notification.css";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        "service_iopqhqc",
        "template_zw0i4e7",
        formData,
        "TT-vlIY187_yLNCqQ",
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        const el = document.getElementById("success-message");
        if (el) {
          el.classList.add("show");
          setTimeout(() => el.classList.remove("show"), 5000);
        }
      })
      .catch(() => {
        setStatus("error");
        const el = document.getElementById("error-message");
        if (el) {
          el.classList.add("show");
          setTimeout(() => el.classList.remove("show"), 5000);
        }
      });
  };

  return (
    <section id="feedback" className="section">
      <h2>Feedback</h2>

      <form id="feedback-form" className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            rows={5}
            placeholder="Your Feedback"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn">
          Submit Feedback
        </button>
      </form>
      <div className="form-messages">
        <div id="success-message" className="notification success" aria-hidden={status !== "success"}>
          Feedback sent successfully!
        </div>

        <div id="error-message" className="notification error" aria-hidden={status !== "error"}>
          Failed to send feedback. Please try again.
        </div>
      </div>
    </section>
  );
}

export default Feedback;
