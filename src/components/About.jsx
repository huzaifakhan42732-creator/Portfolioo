import React, { useEffect } from 'react';
import './About.css';
import profilePic from '../assets/gcu.png';

const About = () => {

  useEffect(() => {
    const aboutSection = document.querySelector('.about');
    const aboutContent = document.querySelector('.about-content');
    const aboutTextH1 = document.querySelector('.about-text h1');
    const aboutTextH3 = document.querySelector('.about-text h3');
    const aboutTextSpans = document.querySelectorAll('.about-text p span');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          // Trigger animations
          aboutContent.classList.add('animate');
          aboutTextH1.classList.add('animate');
          aboutTextH3.classList.add('animate');

          aboutTextSpans.forEach((span, index) => {
            span.style.animationDelay = `${index * 0.15 + 0.5}s`; // stagger
            span.classList.add('animate');
          });

          // Stop observing after first trigger
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(aboutSection);

  }, []);

  return (
    <div className="about" id="about">
      <div className="about-content">
        <img src={profilePic} alt="Huzaifa Khan" className="about-pic" />
        <div className="about-text animate-text">
          <h1>About Me</h1>
          <h3>Full Stack Developer</h3>
          <p>
            <span>Hi,</span> <span>I’m</span> <span><b>Huzaifa KHAN</b></span> <span>—a</span> <span>developer</span> <span>fueled</span> <span>by</span> <span>creativity,</span> <span>precision,</span> <span>and</span> <span>innovation.</span>
            <br /><br />
            <span>I</span> <span>specialize</span> <span>in</span> <span>transforming</span> <span>complex</span> <span>ideas</span> <span>into</span> <span>elegant,</span> <span>functional,</span> <span>and</span> <span>visually</span> <span>engaging</span> <span>websites.</span>
            <br /><br />
            <span>Every</span> <span>project</span> <span>I</span> <span>take</span> <span>on</span> <span>blends</span> <span>innovation,</span> <span>clean</span> <span>code,</span> <span>and</span> <span>aesthetic</span> <span>design,</span> <span>driven</span> <span>by</span> <span>a</span> <span>relentless</span> <span>curiosity</span> <span>for</span> <span>technology</span> <span>and</span> <span>how</span> <span>things</span> <span>work.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
