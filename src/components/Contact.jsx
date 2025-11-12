import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("movyvqzo"); // Replace with your Formspree ID

  if (state.succeeded) {
    return (
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">📬 Get in Touch</h2>
          <p className="contact-subtitle">Thanks for your message! I’ll get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">📬 Get in Touch</h2>
        <p className="contact-subtitle">
          I’d love to hear from you! Whether it's collaboration, questions, or just a hello.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" className="submit-btn" disabled={state.submitting}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
