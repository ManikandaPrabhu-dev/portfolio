import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I’m a recent graduate in Information Technology from Annamalai University. I’m proficient in Python, HTML, CSS, JavaScript, React, MySQL, and Django. I enjoy building intuitive and accessible web applications and I’m passionate about learning and growing in the tech industry.
      </p>
      <h3>Skills</h3>
      <ul className="skills-list">
        <li><b>Frontend:</b> HTML, CSS, JavaScript, ReactJS, Bootstrap</li>
        <li><b>Backend:</b> Django, Node.js</li>
        <li><b>Database:</b> MySQL</li>
        <li><b>Tools:</b> VS Code, Vite, XAMPP</li>
        <li><b>Others:</b> API Development, Microsoft Office, Linux</li>
      </ul>
    </section>
  );
};

export default About;