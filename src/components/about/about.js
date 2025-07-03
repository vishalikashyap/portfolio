import React from "react";
import "./about.css";
import me from '../../assets/me.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Header Section with Badge & Title */}
      <div className="about-header">
        <span className="about-badge">My Journey</span><br />
        <h2 className="about-title">About Me</h2>
      </div>

      {/* Main Container */}
      <div className="about-content-wrapper">
        {/* Left Image */}
        <div className="about-image-box">
          <img src={me} alt="Vishali" />
        </div>

        {/* Right Text */}
        <div className="about-text-box">
          <p>
            Hello! I'm <strong>Vishali Kashyap</strong>, 
             <p>
      I’m a dedicated <strong>Frontend Developer</strong> with over <strong>3 years of experience</strong> in crafting seamless, high-performance web applications. My expertise lies in building scalable frontend architectures using <strong>React.js</strong> and <strong>Angular</strong>. I thrive in creating intuitive, beautiful interfaces that offer exceptional user experiences.
    </p>

    <p>
      Currently, I'm working at <strong>Sanchiconnect</strong>, where I contribute to mission-driven projects that connect startups, investors, and ecosystem partners. I collaborate closely with designers, product managers, and backend teams to translate ideas into functional and visually appealing applications.
    </p>

    <p>
      My technical strengths include building reusable UI components, optimizing performance, managing state effectively, integrating REST APIs, and ensuring cross-browser compatibility. I’m also well-versed in <strong>SCSS, TailwindCSS, Angular Material, Bootstrap</strong>, and modern JavaScript practices.
    </p>

    <p>
      I'm originally from <strong>Kurukshetra</strong>, and I hold a <strong>B.Tech degree</strong> from Kurukshetra University. I strongly believe in continuous learning and am always exploring the latest frontend trends, tools, and frameworks to stay ahead of the curve.
    </p>

    <p>
      Beyond coding, I love sharing knowledge, collaborating with other developers, and occasionally contributing to open-source or side projects. My goal is to build impactful digital solutions that not only work flawlessly but also feel delightful to use.
    </p>

    <p>
      <strong>Fun Fact:</strong> I’m a UI perfectionist who can spend hours fine-tuning pixels — because great design is in the details!
    </p>

    <p>
      <strong>My Vision:</strong> To grow as a full-stack developer, lead impactful projects, and contribute to technologies that shape the future of web development.
    </p>
    </p>
        </div>
      </div>
    </section>
  );
};

export default About;
