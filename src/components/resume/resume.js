import React from 'react';
import './resume.css';
import { motion } from 'framer-motion';
import { FaEye, FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <motion.div
        className="resume-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="resume-badge">Resume</span><br />
        <h2 className="resume-title">My Journey</h2><br />

        <p className="resume-subtext">
          You can view my resume online or download a copy using the options below:
        </p>

        {/* View Resume */}
        <a
          href="/CV_Vishali.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn resume-download btn_bg"
        >
          <FaEye className="icon-left" /> View Online
        </a>

        {/* Download Resume */}
        <a
          href="/CV_Vishali.pdf"
          download
          className="btn resume-download"
        >
          <FaDownload className="icon-left" /> Download CV(.pdf)
        </a>
      </motion.div>
    </section>
  );
};

export default Resume;
