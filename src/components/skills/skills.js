import React from "react";
import './skills.css';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaFigma, FaDocker,
  FaPooStorm
} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiAngular, SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiNextdotjs, SiPostman } from 'react-icons/si';

const Skills = () => {
 return (
    <section id="skills" className="skills-section">
      <span className="skills-badge">Technologies & Expertise</span><br />
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">

        {/* Frontend */}
        <div className="skills-card">
          <h3>Frontend Development</h3>
          <div className="skills-grid">
            <Skill icon={<FaReact color="#61DAFB" />} name="ReactJS" />
            <Skill icon={<SiAngular color="#DD0031" />} name="Angular 17" />
            <Skill icon={<SiAngular color="#C3002F" />} name="Angular 19" />
            <Skill icon={<SiNextdotjs color="#000000" />} name="Next.js" />
            <Skill icon={<SiJavascript color="#F7DF1E" />} name="JavaScript (ES6+)" />
            <Skill icon={<SiTypescript color="#3178C6" />} name="TypeScript" />
            <Skill icon={<FaHtml5 color="#E34F26" />} name="HTML5" />
            <Skill icon={<FaCss3Alt color="#1572B6" />} name="CSS3" />
            <Skill icon={<SiTailwindcss color="#38B2AC" />} name="Tailwind CSS" />
          </div>
        </div>

        {/* Backend */}
        <div className="skills-card">
          <h3>Backend & Database</h3>
          <div className="skills-grid">
            <Skill icon={<FaNodeJs color="#339933" />} name="Node.js" />
            <Skill icon={<SiExpress color="#000000" />} name="Express.js" />
            <Skill icon={<SiMongodb color="#47A248" />} name="MongoDB" />
            <Skill icon={<SiMysql color="#00758F" />} name="MySQL" />
          </div>
        </div>

        {/* Tools */}
        <div className="skills-card">
          <h3>Tools & Methodologies</h3>
          <div className="skills-grid">
            <Skill icon={<FaGitAlt color="#F05032" />} name="Git" />
            <Skill icon={<SiPostman color="#FF6C37" />} name="RESTful APIs" />
            <Skill icon={<FaFigma color="#F24E1E" />} name="Figma" />
            <Skill icon={<FaDocker color="#0db7ed" />} name="Docker" />
            <Skill icon={<FaPooStorm color="#FF6C37" />} name="Postman" />
          </div>
        </div>

      </div>
    </section>
  );
};

const Skill = ({ icon, name }) => (
  <div className="skill-item">
    <div className="skill-icon">{icon}</div>
    <span>{name}</span>
  </div>
);

export default Skills;
