import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-subtitle">
            Have a project in mind, need guidance, or want a code review? Send
            me a message.
          </p>

          <ul className="list">
            <li>
              📧{" "}
              <a href="mailto:nishantpandey669@gmail.com" className="contact-link">
                nishantpandey669@gmail.com
              </a>
            </li>
            <li>
              🐙{" "}
              <a
                href="https://github.com/Nishant-Kumar-Pandey"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                github.com/Nishant-Kumar-Pandey
              </a>
            </li>
            <li>
              💼{" "}
              <a
                href="https://www.linkedin.com/in/nishant-pandey-ab7084381/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                linkedin.com/in/nishant-pandey
              </a>
            </li>
          </ul>
        </div>

        <form className="card contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="from_name">Name</label>
            <input
              id="from_name"
              name="from_name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reply_to">Email</label>
            <input
              id="reply_to"
              name="reply_to"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="How can I help?"
              required
            />
          </div>

          {status === "success" && (
            <p style={{ color: "var(--accent, #6366f1)", marginBottom: "1rem" }}>
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "#ef4444", marginBottom: "1rem" }}>
              ❌ Failed to send message. Please try again or email me directly.
            </p>
          )}

          <button
            className="btn primary full-width"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
