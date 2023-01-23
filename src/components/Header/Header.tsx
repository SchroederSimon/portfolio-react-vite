import { useState } from 'react'
import '../../components/Header/Header.css'

function Header() {

    return (
        <div>
            <nav className="navBar">
                <div className="logo">
                    <h2>S<span>S</span></h2>
                </div>
                <ul className="list-menu-nav">
                    <li><a>Home</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Skills</a></li>
                    <li><a>About Me</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Resume</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
