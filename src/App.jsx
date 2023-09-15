import React, { useState } from 'react';
import Header from './components/Header';
import TypingEffect from './components/TypingEffect';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <div>
                <TypingEffect />
            </div>

            <section id="home">
                {/* Home content */}
                <h2>Home</h2>
                <p>Welcome to my portfolio's home section.</p>
            </section>

            <section id="about">
                {/* About content */}
                <h2>About</h2>
                <p>I'm a passionate developer with a love for web development and programming languages.</p>
            </section>

            <section id="portfolio">
                {/* Portfolio content */}
                <h2>Portfolio</h2>
                {/* Portfolio items go here */}
            </section>

            <section id="contact">
                {/* Contact content */}
                <h2>Contact</h2>
                <p>Feel free to contact me.</p>
            </section>
            <main className="container">
            </main>

            {/* The rest of your content */}
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src="/react.svg" className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
