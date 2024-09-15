import React from 'react';
import Navbar from './/Navbar';
import AboutMe from './/AboutMe';
import Projects from './Projects';
import ContactUs from './ContactUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <AboutMe />
        <Projects />
        <ContactUs />
      </main>
    </div>
  );
}

export default App;
