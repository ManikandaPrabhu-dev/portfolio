import React from "react";
import'./Header.css';

const Header = () =>{
    return(
        <header className="header">
            <h1 className="glow-border">PRABHU</h1>
            <nav>
                <ul className="nav-link">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>

    );
};

export default Header;
