import React from "react";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Full stack engineer with a passion for clean code, clear
          explanations, and practical learning.
        </p>

        <div className="about-grid">
          <div className="about-card primary">
            <div className="card-icon">🚀</div>
            <h3>Who I Am</h3>
            <p>
             I’m a full-stack developer specializing in the MERN stack and modern JavaScript. My journey began with Python in 2021, which built my foundation in logical thinking and problem solving.
            </p>
            <p>
              I enjoy turning complex problems into clean, efficient, and user-friendly solutions. I focus on writing structured code and building systems that are scalable and practical.
            </p>
          </div>

          <div className="about-card secondary">
            <div className="card-icon">⚡</div>
            <h3>What I Do</h3>
            <ul className="feature-list">
              <li>
                <span className="bullet">▹</span> 
                Design & build full-stack web apps (MERN / Next.js)
              </li>
              <li>
                <span className="bullet">▹</span>
                Develop AI-powered applications with API integration and automation
              </li>
              <li>
                <span className="bullet">▹</span>
                Design RESTful APIs and connect frontend with backend systems
              </li>
              <li>
                <span className="bullet">▹</span>
                Continuously improve through competitive coding and hackathons
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
