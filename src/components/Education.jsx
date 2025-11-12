import React, { useEffect } from 'react';
import './Education.css';
import garisonImg from '../assets/garison.png';
import gcuImg from '../assets/gcu.png';
import arfaImg from '../assets/arfa.png';
import stanfordImg from '../assets/stanford.png';
import mitImg from '../assets/mit.png';

const Education = () => {
  // Scroll animation for cards
  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const handleScroll = () => {
      const trigger = window.innerHeight * 0.85;
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < trigger) card.classList.add('visible');
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // in case some cards are already visible on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="education-container" id="education">
      <header>
        <h1>My Education Journey</h1>
        <p>From discipline to dreams — a path leading towards global excellence.</p>
      </header>

      <section className="timeline">
        <div className="card">
          <h2>(GCCK) Garison Cadet College Kohat (2022-25)</h2>
          <h3>Grades 8 – 10</h3>
          <p>Learned discipline, leadership, and teamwork — foundations that shaped both character and ambition.</p>
        </div>
        <div className="card">
          <h2>Government College University (GCU) (2025-27)</h2>
          <h3>Grades 11 – 12</h3>
          <p>Studying in GCU, 11th grade, building analytical and creative skills through coding and scientific thinking.</p>
        </div>
        <div className="card">
          <h2>NexSkill Arfa Tower</h2>
          <h3>Professional Course — Web Development</h3>
          <p>Hands-on learning in HTML, CSS, JavaScript, React, MongoDB, Express, and Node.js. Built live projects and developed full-stack confidence.</p>
        </div>
        <div className="card">
          <h2>Stanford University (Inshallah)</h2>
          <h3>Future Vision</h3>
          <p>Aiming to pursue Computer Science at Stanford — to learn innovation from the heart of Silicon Valley.</p>
        </div>
        <div className="card">
          <h2>Massachusetts Institute of Technology (MIT) (Inshallah)</h2>
          <h3>Future Dream</h3>
          <p>MIT — the temple of technology. My ultimate dream: to contribute in AI, cybersecurity, and futuristic tech from MIT labs.</p>
        </div>
      </section>

      <section className="gallery">
        <img src={garisonImg} alt="Cadet College" />
        <img src={gcuImg} alt="GCU Lahore" />
        <img src={arfaImg} alt="Arfa Tower" />
        <img src={stanfordImg} alt="Stanford University" />
        <img src={mitImg} alt="MIT Campus" />
      </section>

      <section className="future">
        <h2>Future Vision 🌍</h2>
        <p>Inshallah, my journey will continue beyond borders — learning from global leaders, collaborating with innovators, and building technologies that make life smarter, safer, and more meaningful.</p>
      </section>
    </div>
  );
};

export default Education;
