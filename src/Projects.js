import React from 'react';
import facebook from './facebook2.png';
import netflix from './netflix2.png';
import twitch from './twitch.png';



const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
        <img src={facebook} alt="Profile" className="Facebook" />
          <h3>Facebook</h3>
          <p>Facebook is a social media and social networking service owned by American technology conglomerate Meta. Created in 2004 by Mark Zuckerberg with four other Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.</p>
        </div>
        <div className="project-card">
        <img src={netflix} alt="Profile" className="Netflix" />
          <h3>Netflix</h3>
          <p>Netflix is an American subscription video on-demand over-the-top streaming service. The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages.</p>
        </div>
        <div className="project-card">
        <img src={twitch} alt="Profile" className="Twitch" />
          <h3>Twitch</h3>
          <p>Twitch is an American video live-streaming service that focuses on video game live streaming, including broadcasts of esports competitions, in addition to offering music broadcasts, creative content, and "in real life" streams. Twitch is operated by Twitch Interactive, a subsidiary of Amazon.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
