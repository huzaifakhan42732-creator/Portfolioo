import React from "react";
import "./Header.css";
// import profilePic from "../assets/fourth.jpg"; // uncomment when image is ready

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Profile Image */}
        {/* <img src={profilePic} alt="Huzaifa Khan" className="profile-pic" /> */}

        <div className="header-text">
          <h1>Welcome! 👋</h1>
          <h3>Creative Developer | Full Stack Developer | Visionary Thinker</h3>
          <p>
            Hi, I’m <b>Huzaifa KHAN</b>  a creative Full Stack Developer turning ideas into elegant, functional, and visually stunning websites. I craft engaging digital experiences that leave a lasting impression.
          </p>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="scroll-down">
        <a href="#about">
          <span className="arrow">⌄</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
