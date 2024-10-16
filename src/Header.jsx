
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom"
import './Header.css'


function Header() {

    return (
        <header className="header">
            <div className="name">
                <h1>Hugo BIENVENOT</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">À propos</Link></li>
                    <li><Link to="/skills">Compétences</Link> </li>
                    <li><Link to="/experiences">Expériences</Link></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
            </nav>
        </header>
    );

}
export default Header;