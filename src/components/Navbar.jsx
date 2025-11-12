import React from 'react';
import './Navbar.css';

const Navbar = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-logo">HuzWeb💻</div>
      <ul className="nav-links">
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('skills')}>Skills</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('latest-project')}>Latest Project</li>
        <li onClick={() => scrollToSection('education')}>Education</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
