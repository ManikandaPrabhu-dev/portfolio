import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:manikandaprabhu3002@gmail.com">manikandaprabhu3002@gmail.com</a></p>
      <p>Phone: 9345893539</p>
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub (soon!)</a>
      </div>
    </section>
  );
};

export default Contact;