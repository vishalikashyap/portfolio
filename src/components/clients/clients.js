import React from 'react';
import './clients.css';
import { FaCode, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

const ProjectCard = ({
  image,
  title,
  description,
  date,
  status,
  techStack = [],
  liveLink,
  codeLink,
}) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "status completed";
      case "in progress":
        return "status in-progress";
      default:
        return "status";
    }
  };

  return (
    <div className="project-card-ui">
      <img src={image} alt={title} className="project-thumbnail" />
      <div className="project-details">
        <h3 className="project-title-ui">{title}</h3>
        <p className="project-desc-ui">{description}</p>

        <div className="project-meta-ui">
          <div className="meta-item"><FaCalendarAlt /> Start: {date}</div>
          <div className={getStatusClass(status)}>Status: {status}</div>
        </div>

        <div className="project-tags">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          <a href={codeLink} target="_blank" rel="noreferrer" className="btn-dark">
            <FaCode /> View Code
          </a>
          <a href={liveLink} target="_blank" rel="noreferrer" className="btn-gradient">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
