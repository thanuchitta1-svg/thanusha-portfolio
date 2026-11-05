
import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my skills, projects and achievements.",
      tech: "HTML • CSS • React",
    },
    {
      title: "Python Guessing Game",
      description:
        "An interactive number guessing game built using Python.",
      tech: "Python",
    },
    {
      title: "Web Development Project",
      description:
        "A responsive web project designed with a clean and user-friendly interface.",
      tech: "HTML • CSS • JavaScript",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "C Programming",
    "UI Design",
    "Problem Solving",
  ];

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="navbar">
        <a href="#home" className="logo">
          Thanusha<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">HELLO, WELCOME TO MY PORTFOLIO</p>
            <h1>
              Hi, I'm <span>Thanusha</span>
            </h1>
            <h2>Aspiring Web Developer</h2>
            <p className="hero-description">
              I enjoy creating beautiful, responsive and user-friendly
              websites. I am passionate about learning new technologies
              and building creative projects.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work
              </a>
              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-circle">
              <div className="art-card">
                <span className="art-icon">{"</>"}</span>
                <h3>Creative</h3>
                <p>Curious mind. Creative ideas.</p>
              </div>
              <span className="floating-dot dot-one"></span>
              <span className="floating-dot dot-two"></span>
              <span className="floating-star">✦</span>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="about-card">
            <p>
              I am an enthusiastic learner interested in web development
              and programming. I enjoy exploring new technologies,
              solving problems and turning ideas into useful digital
              experiences.
            </p>
            <p>
              My goal is to improve my technical skills and develop
              projects that combine creativity with technology.
            </p>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <p className="eyebrow">WHAT I WORK WITH</p>
          <h2 className="section-title">My <span>Skills</span></h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span>✦</span> {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <p className="eyebrow">SOME OF MY WORK</p>
          <h2 className="section-title">My <span>Projects</span></h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">
                  0{index + 1}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">{project.tech}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
          <p className="contact-description">
            Have an idea or opportunity? I'd love to hear from you.
          </p>
          <a
            className="primary-button"
            href="mailto:your.email@example.com"
          >
            Send Me an Email
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Thanusha. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
