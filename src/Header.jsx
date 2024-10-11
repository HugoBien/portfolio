// eslint-disable-next-line no-unused-vars
import React from 'react';


function Header() {

    return (
        <header className="header">
            <div className="logo">
                <h1>Hugo BIENVENOT</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#skills">Compétences</a></li>
                    <li><a href="#experience">Expériences</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );

}
export default Header;