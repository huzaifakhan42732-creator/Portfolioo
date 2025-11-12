import React from "react";
import "./Project.css";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-featured online store with product listings, cart, and checkout system using React, Node.js, and MongoDB.",
    image: "ecom.png",
    link: "https://your-ecommerce-demo-link.com",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app built with React, Express, and Socket.io featuring authentication and custom chat rooms.",
    image: "chatapp.png",
    link: "https://your-chatapp-demo-link.com",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing skills, education, and projects — built from scratch with creative animations.",
    image: "portfolio.png",
    link: "https://huzportfolio.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">🚀 My Projects</h2>
      <p className="section-subtitle">
        A glimpse into what I’ve built so far — clean, fast, and creative.
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
