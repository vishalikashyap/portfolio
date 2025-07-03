import React from "react";
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Brand Name */}
                <span className="brand">Vishali</span>

                {/* Navigation Links */}
                <nav className="nav-links">
                    <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-60} duration={500}>About</Link>
                    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-60} duration={500}>Skills</Link>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-60} duration={500}>Projects</Link>
                    <Link activeClass="active" to="resume" spy={true} smooth={true} offset={-60} duration={500}>Resume</Link>
                    <Link activeClass="active" to="contect" spy={true} smooth={true} offset={-60} duration={500}>Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
