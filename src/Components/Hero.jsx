import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img className='hero-img' src="./public/myimage.jpg" alt="MY IMAGE" />
        <h1>Hello, I'm Manikandaprabhu</h1>
        <p>Recent IT graduate passionate about building responsive and dynamic web applications.</p>
        <a href="#contact" className="hero-button">Let's Connect</a>
        <a
  href="/Prabhu_Resume.pdf"
  download
  className="resume-button"
>
  Download Resume
</a>
      </div>
    </section>
  );
};

export default Hero;