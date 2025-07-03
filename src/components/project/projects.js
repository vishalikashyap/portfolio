import React from 'react';
import './projects.css';
import ProjectCard from '../../components/clients/clients.js';

import ecommerceImg from '../../assets/Ecommerce.jpg';
import chatAppImg from '../../assets/chatter.jpg';
import portfolioImg from '../../assets/portfolio.jpg';
import bimCalcImg from '../../assets/bim.jpg';
import sendingLoveImg from '../../assets/sending.jpg';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <p className="projects-badge">My recent work</p><br></br>
      <h2 className="projects-title">Featured Projects</h2>

      <div className="projects-grid">
        <ProjectCard
          image={ecommerceImg}
          title="Ecommerce Full-stack Website"
          description="A modern, full-featured e-commerce app with real-time chatbot and cart."
          date="27 May 2025"
          status="In Progress"
           techStack={["Angular19","node.js", "TailwindCSS", "express.js","MySql", "Stripe"]}
          codeLink="https://github.com/vishalikashyap/angular19Project"
          liveLink="https://ecommerce-demo.vercel.app"

        />
        <ProjectCard
          image={chatAppImg}
          title="Chat Application (Full Stack)"
          description="1:1 messaging, group chat, emojis, file sharing with WebSocket & Node.js backend."
          date="1 June 2025"
          status="In Progress"
          techStack={["Angular19","node.js", "TailwindCSS", "express.js","MySql", "Stripe"]}
          codeLink="https://github.com/vishalikashyap/realTimeChat"
          liveLink="https://ecommerce-demo.vercel.app"

        />
        <ProjectCard
          image={portfolioImg}
          title="React Portfolio Website"
          description="Responsive React portfolio showcasing my skills and recent work."
          date="30 June 2025"
          status="Completed"
          techStack={["React.js","css"]}
          codeLink="https://github.com/vishalikashyap/portfolio"
          liveLink="https://ecommerce-demo.vercel.app"

        />
        <ProjectCard
          image={bimCalcImg}
          title="BIM Calculator"
          description="A calculator app for structural design calculations using BIM standards."
          date="1 July 2025"
          status="In Progress"
          techStack={["React.js","css"]}
          codeLink="https://github.com/vishalikashyap/ecommerce"
          liveLink="https://ecommerce-demo.vercel.app"

        />
        <ProjectCard
          image={sendingLoveImg}
          title="SendingLove App"
          description="A sweet React-based love app with cute animations and heart interactions."
          date="2 July 2025"
          status="Completed"
          techStack={["Angular19","node.js", "TailwindCSS", "express.js","MySql", "Stripe"]}
          codeLink="https://github.com/vishalikashyap/sendingLove"
          liveLink="https://ecommerce-demo.vercel.app"

        />
      </div>
    </section>
  );
};

export default Projects;
