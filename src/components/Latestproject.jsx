import React from "react";
import "./Latestpro.css";
import latestProjectImg from "../assets/gcu.png"; // latest project
import project2Img from "../assets/arfa.png";       // example
import project3Img from "../assets/mit.png";       // example

const LatestProject = () => {
  const otherProjects = [
    { title: "Project Two", img: project2Img, link: "#" },
    { title: "Project Three", img: project3Img, link: "#" },
  ];

  return (
    <section className="latest-project" id="latest-project">
      <header className="latest-header">
        <h1>🔥 Latest Project</h1>
        <p>My most recent work — stay tuned for updates and upcoming releases.</p>
      </header>

      {/* Main Latest Project */}
      <div className="latest-project-card">
        <img src={latestProjectImg} alt="Latest Project" />
        <div className="project-info">
          <h3>Awesome Project</h3>
          <p>
            This project demonstrates cutting-edge features and modern design.
            <br />Currently live and under continuous improvement.
          </p>
          <a href="#" target="_blank" rel="noreferrer" className="project-btn">
            View Project
          </a>
        </div>
      </div>

      {/* Other Projects */}
      <div className="other-projects">
        <h2>🛠 Other Projects</h2>
        <div className="projects-grid">
          {otherProjects.map((proj, index) => (
            <div className="project-card" key={index}>
              <img src={proj.img} alt={proj.title} />
              <h3>{proj.title}</h3>
              <a href={proj.link} target="_blank" rel="noreferrer" className="project-btn">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="coming-soon">
        <h2>✨ Coming Soon</h2>
        <p>Stay tuned for my next exciting project updates!</p>
      </div>
    </section>
  );
};

export default LatestProject;
