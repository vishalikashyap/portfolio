import React, { useState } from "react";
import './contect.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaCircle } from "react-icons/fa";
import CursorEffect from "../cursoreffect/cursoreffect";

const Contect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // loader state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch("https://getform.io/f/amddnlrb", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        // alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contect" className="contact-section ">
       {/* <CursorEffect /> */}
       <div className="section-header">
      <p className="section-subtitle">Let's work together</p> <br></br>
      <h2 className="section-title">Get In Touch</h2>
     </div>
      <div className="contact-container">
        {/* Left Info Box */}
        <div className="contact-info-box">
          <h3>Contact Information</h3>
          <div className="contact-info-item">
            <FaEnvelope /> <span>vis48171@gmail.com</span>
          </div>
          <div className="contact-info-item">
            <FaLinkedin />
            <span>
              <a href="https://www.linkedin.com/in/vishali-kashyap-a26342173/" target="_blank" rel="noreferrer" style={{ color: 'white', fontSize: '1.2rem' }}>
                linkedin.com/in/vishali-kashyap
              </a>
            </span>
          </div>
          <div className="contact-info-item">
            <FaGithub />
            <span>
              <a href="https://github.com/vishalikashyap" target="_blank" rel="noreferrer" style={{ color: 'white', fontSize: '1.2rem' }}>
                github.com/vishalikashyap
              </a>
            </span>
          </div>
          <hr />
          <div className="contact-status">
            <h4>Current Status</h4>
            <p><FaCircle className="status-dot" /> Currently working at Sanchiconnect</p>
            <p><FaCircle className="status-dot" /> Available for freelance work and full-time opportunities</p>
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="contact-form-box">
          <h3>Send Me a Message</h3>
          <label>Full Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email Address *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Subject *</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Message *</label>
          <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contect;
