import React from 'react';

function Header() {
    return (
        <header className="jumbotron bg-dark text-white">
            <div className="container">
                <nav>
                    <ul className="nav justify-content-between">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </nav>
                <p className="lead">I'm a passionate developer with a love for web development and programming languages.</p>
            </div>
        </header>
    );
}

export default Header;
