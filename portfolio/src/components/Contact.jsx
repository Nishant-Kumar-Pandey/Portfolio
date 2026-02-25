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
      })
      .catch(() => {
        setStatus("error");
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

        <form className="card contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="How can I help?"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button className="btn primary full-width" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
