import React from "react";
import './info.css';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Info = () => {
    return (
        <section id="intro" className="hero-section animated-bg">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Main Heading */}
                <motion.h1
                    className="gradient-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    Hi, I'm Vishali!<br />
                    <span className="typewriter-wrapper">
                        <Typewriter
                            options={{
                                strings: ['I Build Modern & Intuitive', 'Web Experiences.', 'Creative Web Interfaces.'],
                                autoStart: true,
                                loop: true,
                                delay: 50
                            }}
                        />
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    A passionate <strong>Software Developer</strong> with 3+ years of experience in Angular, JavaScript, and TypeScript. <br />
                    This portfolio is built using <strong>React.js</strong> for the frontend, <strong>Node.js + Express</strong> for the backend, and <strong>MongoDB</strong> as the database.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    <Link to="projects" smooth={true} duration={500}>
                        <button className="btn primary">🚀 View Projects</button>
                    </Link>
                    <Link to="contect" smooth={true} duration={500}>
                        <button className="btn outline">📬 Contact Me</button>
                    </Link>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    className="social-icons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                >
                    <a href="https://github.com/vishalikashyap" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/vishali-kashyap-a26342173/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="mailto:vis48171@gmail.com" aria-label="Email"><FaEnvelope /></a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Info;
