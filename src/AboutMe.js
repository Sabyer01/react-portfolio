import React from 'react';
import id from './schoolid.jpg';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-card">
          <img src= {id} alt="Profile" className="Profile" />
        </div>
        <div className="about-card-test1 about-info">
          <h2>About Me</h2>
          <p>Hi! My name is Xavier Gelligan and I am a 3rd Year College Student at De La Salle Lipa. My course is Computer Science and I want to be a professional web developer.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
