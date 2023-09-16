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
                <h2>About Me</h2>
                <p>My journey through my career has been an exciting and diverse one. I began my professional life in the field of mental health counseling, where I had the privilege of helping individuals navigate their emotional well-being. This experience taught me the importance of empathy, communication, and problem-solving.
                    <br />
                    As my career evolved, I found myself drawn to more analytical roles. I transitioned into performing audits, where attention to detail, critical thinking, and the ability to dissect complex data became my forte. This phase of my journey honed my analytical skills and provided me with a deep understanding of processes and systems.
                    <br />
                    Now, I'm embarking on a new adventure as a software developer. This transition represents a convergence of my passion for problem-solving, my analytical mindset, and my eagerness to embrace new challenges. I'm excited to apply my diverse skill set to the world of technology and contribute to innovative solutions that make a meaningful impact.
                    <br />
                    Throughout my career, one thing has remained constant - my commitment to continuous learning and growth. I believe that each phase of my journey has equipped me with valuable insights and skills that I can leverage in my new role as a software developer. I look forward to the opportunities and challenges that lie ahead, knowing that they will further shape my career trajectory.</p>
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
