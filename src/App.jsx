import React, { useState } from 'react';
import './App.css';
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;