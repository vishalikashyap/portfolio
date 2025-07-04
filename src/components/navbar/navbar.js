import React, { useState } from "react";
import './navbar.css';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <span className="brand">Vishali</span>

                {/* Hamburger Icon */}
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Navigation Links */}
                <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <Link onClick={closeMenu} to="intro" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                    <Link onClick={closeMenu} to="about" spy={true} smooth={true} offset={-60} duration={500}>About</Link>
                    <Link onClick={closeMenu} to="skills" spy={true} smooth={true} offset={-60} duration={500}>Skills</Link>
                    <Link onClick={closeMenu} to="projects" spy={true} smooth={true} offset={-60} duration={500}>Projects</Link>
                    <Link onClick={closeMenu} to="resume" spy={true} smooth={true} offset={-60} duration={500}>Resume</Link>
                    <Link onClick={closeMenu} to="contect" spy={true} smooth={true} offset={-60} duration={500}>Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
