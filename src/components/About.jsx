import React from 'react';
import './About.css';
import profilePic from '../assets/gcu.png'; // same image as Header

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <img src={profilePic} alt="Huzaifa Khan" className="about-pic" />
        <div className="about-text">
          <h1>About Me</h1>
          <h3>Full Stack Developer</h3>
          <p>
            Hi, I’m <b>Huzaifa KHAN</b> — a passionate developer driven by creativity and precision.  
            I love turning complex ideas into elegant, functional, and visually stunning websites.  
            My journey blends design, cybersecurity, and logic — helping me craft experiences that are not only secure but unforgettable.
            <br /><br />
            Every project I work on reflects a mix of innovation, code, and creativity — all powered by a deep curiosity for how things work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
