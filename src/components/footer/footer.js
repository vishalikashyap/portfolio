// src/components/Footer/Footer.jsx
import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-col about">
          <h2 className="footer-name">Vishali</h2>
          <p>
            Passionate about creating dynamic websites and applications with modern frontend technology.
          </p>
        </div>

        <div className="footer-col">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#intro">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contect">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            {/* <li>UI/UX Design</li> */}
            <li>Freelance Projects</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li><FaEnvelope /> vis48171@gmail.com</li>
            <li><FaGithub /> github.com/vishalikashyap</li>
            <li><FaLinkedin /> linkedin.com/in/vishali-kashyap</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Vishali. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
