import React from "react";
import './skills.css';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaGitAlt, FaFigma, FaDocker,
  FaPooStorm
} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiAngular, SiTailwindcss, SiMongodb, SiMysql, SiMariadb, SiPrisma, SiExpress, SiPython, SiNextdotjs, SiBootstrap, SiPostman } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <span className="skills-badge">Technologies & Expertise</span><br></br>
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {/* Frontend */}
        <div className="skills-card">
          <h3>Frontend Development</h3>
          <div className="skills-grid">
            <Skill icon={<FaReact />} name="ReactJS" />
             <Skill icon={<SiAngular />} name="Angular 17" />
            <Skill icon={<SiAngular />} name="Angular 19" />
            <Skill icon={<SiNextdotjs />} name="Next.js" />
            <Skill icon={<SiJavascript />} name="JavaScript (ES6+)" />
            <Skill icon={<SiTypescript />} name="TypeScript" />
            <Skill icon={<FaHtml5 />} name="HTML5" />
            <Skill icon={<FaCss3Alt />} name="CSS3" />
            <Skill icon={<SiTailwindcss />} name="Tailwind CSS" />
           
          </div>
        </div>

        {/* Backend */}
        <div className="skills-card">
          <h3>Backend & Database</h3>
          <div className="skills-grid">
            <Skill icon={<FaNodeJs />} name="Node.js" />
            <Skill icon={<SiExpress />} name="Express.js" />
            {/* <Skill icon={<SiPython />} name="Python" /> */}
            {/* <Skill icon={<FaJava />} name="Java" /> */}
            <Skill icon={<SiMongodb />} name="MongoDB" />
            {/* <Skill icon={<SiPrisma />} name="Prisma" /> */}
            {/* <Skill icon={<SiMariadb />} name="MariaDB" /> */}
            <Skill icon={<SiMysql />} name="MySQL" />
          </div>
        </div>

        {/* Tools */}
        <div className="skills-card">
          <h3>Tools & Methodologies</h3>
          <div className="skills-grid">
            <Skill icon={<FaGitAlt />} name="Git" />
            <Skill icon={<SiPostman />} name="RESTful APIs" />
            <Skill icon={<FaFigma />} name="Figma" />
            <Skill icon={<FaDocker />} name="Docker" />
             <Skill icon={<FaPooStorm />} name="Postman" />
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
