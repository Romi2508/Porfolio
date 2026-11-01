import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-title">
        <p>GET IN TOUCH</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's work together.</h3>

          <p>
            Have a project idea, internship opportunity or simply
            want to connect? Feel free to send me a message.
          </p>

          <div className="contact-detail">
            <strong>Email</strong>
            <span>singhromi@gmail.com</span>
          </div>

          <div className="contact-detail">
            <strong>Location</strong>
            <span>India</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && (
            <small>{errors.name}</small>
          )}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <small>{errors.email}</small>
          )}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
          />

          {errors.message && (
            <small>{errors.message}</small>
          )}

          <button type="submit" className="btn primary">
            Send Message
          </button>

          {submitted && (
            <p className="success">
              Message submitted successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;