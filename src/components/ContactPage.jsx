import { useState } from "react";
import UserCard from "./UserCard";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const supportTeam = [
    { name: "Emma Thompson", email: "emma.support@company.com" },
    { name: "James Wilson", email: "james.support@company.com" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Contact form submitted:", formData);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      subject: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="contact-page">
        <div className="contact-success">
          <div className="success-icon">✓</div>
          <h2>Message Sent Successfully!</h2>
          <p>
            Thank you for reaching out to us. We'll get back to you within 24
            hours.
          </p>
          <button onClick={resetForm} className="btn-secondary">
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-form-section same-height-box">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info-section same-height-box">
          <h2>Other Ways to Reach Us</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">📧</div>
              <h3>Email</h3>
              <p>info@simplertechnologies.in</p>
              <p>We typically respond within 24 hours</p>
            </div>

            <div className="contact-method">
              <div className="method-icon">📞</div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
              <p>Monday - Friday, 9 AM - 6 PM EST</p>
            </div>

            <div className="contact-method">
              <div className="method-icon">📍</div>
              <h3>Office</h3>
              <p>508 Ragvendra Nagar</p>
              <p>Madhya Pradesh, 474001</p>
            </div>
          </div>
        </div>
      </div>

      <div className="support-team-section">
        <h2>Meet Our Support Team</h2>
        <p>
          Our dedicated support team is here to help you with any questions or
          concerns
        </p>
        <div className="support-team-grid">
          {supportTeam.map((member, index) => (
            <UserCard key={index} name={member.name} email={member.email} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
