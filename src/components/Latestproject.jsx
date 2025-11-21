import React from "react";
import "./Latestpro.css";

const LatestProject = () => {
  const otherProjects = [
    { 
      title: "Tiny UrlShortener", 
      img: "https://tse1.mm.bing.net/th/id/OIP.KLHIr7vmm5HoS58ZV5L5AAHaEO?pid=Api&P=0&h=220", 
      link: "https://tiny-frontend-two.vercel.app/" ,
          desc: "A simple and efficient URL shortener that converts long links into easy-to-share, compact URLs. Perfect for sharing links quickly and keeping them neat."

    },
    { 
      title: "E-commerce Store", 
      img: "https://tse3.mm.bing.net/th/id/OIP.wWxUzblO0g8V9cphc9s2cQHaEJ?pid=Api&P=0&h=220", 
      link: "https://ecommerce-tfi1.vercel.app/" ,
          desc: "A modern online shopping platform featuring a login system, AI-powered assistant, product catalog, and seamless checkout. Designed for smooth navigation, smart recommendations, and an interactive shopping experience."
    },
  ];

  return (
    <section className="latest-project" id="latest-project">
      {/* Header */}
      <header className="latest-header">
        <h1>🔥 Latest Project</h1>
        <p>My most recent work — stay tuned for updates and upcoming releases.</p>
      </header>

      {/* Main Latest Project */}
      <div className="latest-project-card">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.v7rQXehNx9A4kdP7a9DZIwHaFX?pid=Api&P=0&h=220"
          alt="Latest Project"
        />
        <div className="project-info">
          <h3>Nexachat App</h3>
<p>
  Real-time group chat where users can join or create any group by entering a group name and username. ,<br></br>Instant messaging, smooth interface, and seamless collaboration—all in one app
</p>
          <a
            href="https://chatapp-client-7ak1.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            View Project
          </a>
        </div>
      </div>

      {/* Other Projects - 2 in a row */}
      <div className="projects-grid">
        {otherProjects.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.img} alt={proj.title} />
            <h3>{proj.title}</h3>
             <p className="project-desc">{proj.desc}</p> 
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        ))}
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
