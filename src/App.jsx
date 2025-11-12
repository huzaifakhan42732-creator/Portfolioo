import React from 'react';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header';
import About from './components/About.jsx';
import Skill from './components/Skill';
import Project from './components/Project';
import LatestProject from './components/Latestproject.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer';
import Contact from './components/Contact.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Project />
      <LatestProject />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

