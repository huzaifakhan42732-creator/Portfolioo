import React, { useEffect, useState, useRef } from "react";
import "./Skill.css";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "Tailwind CSS", level: 75 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "REST APIs", level: 80 },
    { name: "JWT Auth", level: 70 },
  ];

  const tools = [
    { name: "Git / GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 85 },
    { name: "NPM", level: 80 },
    { name: "Figma", level: 75 },
  ];

  const allSkills = [...frontendSkills, ...backendSkills, ...tools];

  const [progress, setProgress] = useState({});
  const skillsRef = useRef(null);
  const animatedRef = useRef(false);

  // Cubic ease-out function
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    // Initialize all skill progress to 0
    const initialProgress = {};
    allSkills.forEach(skill => (initialProgress[skill.name] = 0));
    setProgress(initialProgress);

    const animateSkills = () => {
      const startTime = performance.now();
      const duration = 4000; // 4 seconds

      const step = (time) => {
        const elapsed = time - startTime;
        const t = Math.min(elapsed / duration, 1); // normalized time 0-1
        const easedT = easeOutCubic(t);

        const newProgress = {};
        allSkills.forEach(skill => {
          newProgress[skill.name] = Math.floor(easedT * skill.level);
        });

        setProgress(newProgress);

        if (elapsed < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animatedRef.current) {
            animateSkills();
            animatedRef.current = true;
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => observer.disconnect();
  }, []);

  const renderSkillCard = (title, skills) => (
    <div className="skill-card">
      <h3>{title}</h3>
      {skills.map((skill, idx) => (
        <div className="skill-bar" key={idx}>
          <span className="skill-name">{skill.name}</span>
          <div className="progress-container">
            <div
              className="progress-fill"
              style={{ width: `${progress[skill.name] || 0}%` }}
            >
              <span className="progress-text">{progress[skill.name] || 0}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <h2 className="section-title">⚡ My Technical Skills ⚡</h2>
      <p className="section-subtitle">
        Tools and technologies I use to turn ideas into reality.
      </p>

      <div className="skills-container">
        {renderSkillCard("Frontend Development", frontendSkills)}
        {renderSkillCard("Backend Development", backendSkills)}
        {renderSkillCard("Tools & Platforms", tools)}
      </div>
    </section>
  );
};

export default Skills;
