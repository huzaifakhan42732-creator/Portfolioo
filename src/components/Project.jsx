import React, { useState } from "react";
import "./Project.css";

const projects = [
  {
    title: "Cricket Chatbot",
    description:
      "An interactive cricket chatbot that answers match-related questions, cricket rules, player information, and historical stats based on past performances. Built to provide quick cricket knowledge and insights, the bot focuses on explaining the game, players, formats, and memorable records. It does not provide live updates or recent (2025) statistics, making it ideal for learning and general queries rather than real-time scores",
    skills: ["HTML", "CSS", "JavaScript", "API", "Chatbot Logic"],
    image: "https://tinyurl.com/ct6djbxt",
    link: "https://cosmic-biscochitos-0ffae8.netlify.app/",
  },
  {
    title: "Weather Fetcher",
    description:
      "A React-based weather application that fetches real-time weather data using a public API. Users can search any city to view accurate temperature, humidity, wind details, and dynamic weather icons. This project helped me practice working with APIs, state management, and responsive UI design in React.",
    skills: ["React", "REST API", "JavaScript", "CSS"],
    image: "https://tinyurl.com/bdde5e9s",
    link: "https://react-weather-nine-orpin.vercel.app/",
  },
 
  {
    title: "Weather Fetcher",
    description:
      " A  weather application that allows users to search for any city and view detailed real-time weather information including temperature, humidity, wind speed, and dynamic weather icons. This project helped me practice working with APIs, managing state and creating a responsive, user-friendly interface for accurate weather data display.",
    skills: ["HTML", "CSS", "JavaScript", "API"],
    image: "https://tinyurl.com/5zbxzc5d",
    link: "https://polite-frangollo-5bb162.netlify.app/",
  },
  {
    title: "Amazon Clone",
    description:
      "A static Amazon-inspired website built to replicate the layout, design, and interface of the real platform. This project focuses on recreating the look and feel of an e-commerce site using only HTML and CSS, helping me practice structuring a full website and responsive design",
    skills: ["HTML", "CSS"],
    image: "https://tinyurl.com/82yh6rnx",
    link: "https://creative-meringue-588d97.netlify.app/",
  },
  {
    title: "Blog",
    description:
      "A simple blog website template built using HTML, CSS, and JavaScript. This project focuses on creating a clean and organized layout for displaying blog posts, with features like navigation, post previews, and a responsive design. It helped me practice structuring content and styling for readability and user engagement.",
    skills: ["HTML", "CSS", "JavaScript"],
    image: "https://tse3.mm.bing.net/th/id/OIP.3REREBYG3ojZ0_gQyvM17AHaDz?pid=Api&P=0&h=220",
    link: "https://frolicking-phoenix-03ff89.netlify.app/",
  },
   {
    title: "BMI Checker",
    description:
      "A user-friendly BMI (Body Mass Index) calculator that helps users determine their health category based on weight and height. Built with HTML, CSS, and JavaScript, it provides instant results with clear messages for underweight, normal, overweight, and obese categories. This project helped me practice form handling, input validation, and real-time calculations in a clean interface ",
    skills: ["HTML", "CSS", "JavaScript"],
    image: "https://tinyurl.com/3zdkw95p",
    link: "https://stunning-tanuki-3c198f.netlify.app/",
  },
   { title: "Several Chatbots",
    description:
      "A collection of simple chatbots built using HTML, CSS, and JavaScript. These chatbots are designed to simulate basic conversations and provide predefined responses based on user inputs. This project helped me understand event handling, string manipulation, and creating interactive web elements.",
    skills: ["HTML", "CSS", "JavaScript"],
    image: "https://tse3.mm.bing.net/th/id/OIP.LUWc_u739d3Ny4YzDBNjQQHaEc?pid=Api&P=0&h=220",
    link: "https://jocular-panda-c88b3c.netlify.app/",
  },
];

const Projects = () => {
  const [visible, setVisible] = useState(4);

  const loadMore = () => {
    setVisible((prev) => prev + 2);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">🚀 My Projects</h2>
      <p className="section-subtitle">
        A glimpse into what I’ve built so far — clean, fast, and creative.
      </p>

      <div className="projects-container">
        {projects.slice(0, visible).map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* Skills Section */}
              <div className="project-skills">
                {project.skills?.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

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

      {visible < projects.length && (
        <button className="load-more-btn" onClick={loadMore}>
          Load More
        </button>
      )}
    </section>
  );
};

export default Projects;
