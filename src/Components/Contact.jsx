import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:manikandaprabhu3002@gmail.com">manikandaprabhu3002@gmail.com</a></p>
      <p>Phone: 9345893539</p>
      <div className="social-links">
  <a href="https://github.com/Manikandaprabhu-dev" target="_blank" rel="noreferrer">
    <i className="fab fa-github"></i> GitHub
  </a>
  <a href="https://www.linkedin.com/in/manikanda-prabhu-253437287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
    <i className="fab fa-linkedin"></i> LinkedIn
  </a>
</div>
    </section>
  );
};

export default Contact;