
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">DJT</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#resume">Resume</a>
          <a href="#contact" className="contact-btn">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <h1>
          I'm a <br /> <span>FULL STACK</span> <br /> DEVELOPER.
        </h1>
        <div className="hero-buttons">
          <button>Preview</button>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-container">
          <img src="/assets/outlined_portrait.jpg" alt="Damien Tober" className="about-image" />
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I'm a full-stack developer with a passion for building intuitive user
              interfaces and scalable backend services.
            </p>
            <div className="about-buttons">
              <button>Hire Me</button>
              <button>Resume</button>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h2>Services</h2>
        <div className="service-grid">
          {[
            { name: "HTML", img: "/assets/html-5.jpg" },
            { name: "CSS", img: "/assets/css-3.jpg" },
            { name: "JavaScript", img: "/assets/javascript.jpg" },
            { name: "GitHub", img: "/assets/react.jpg" },
            { name: "Adobe XD", img: "/assets/adobexd.jpg" },
            { name: "Yoast SEO", img: "/assets/yoastseo.jpg" },
          ].map((service, i) => (
            <div className="service-card" key={i}>
              <img src={service.img} alt={service.name} />
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="experience">
        <h2>Skills</h2>
        <div className="tech-icons">
          {["CSS3", "React.JS", "HTML", "JavaScript"].map((tech, i) => (
            <div className="tech-icon" key={i}>{tech}</div>
          ))}
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2>Portfolio</h2>
        <div className="project-card">
          <div className="project-text">
            <h3>
              <a href="https://tasktracker-woad.vercel.app/" target="_blank" rel="noopener noreferrer">
                To-Do List Web App
              </a>
            </h3>
            <p>
              A responsive to-do list application that allows users to add, complete, and delete tasks.
              Includes dark mode toggle and visual feedback.
            </p>
            <h4>Skills Used:</h4>
            <div className="skill-icons">
              <img src="/assets/html-5.jpg" alt="HTML5" />
              <img src="/assets/css-3.jpg" alt="CSS3" />
              <img src="/assets/javascript.jpg" alt="JavaScript" />
              <img src="/assets/react.jpg" alt="React" />
            </div>
          </div>
          <a href="https://tasktracker-woad.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/todolist.jpg" alt="To-Do List Screenshot" className="project-image" />
          </a>
        </div>

        <div className="project-card reverse">
          <div className="project-text">
            <h3>Fragrance UI Design</h3>
            <p>
              Designed in Adobe XD to demonstrate product layout and storytelling for a fragrance brand.
              This was built to visualize a mobile-focused user interface.
            </p>
            <h4>Skills Used:</h4>
            <div className="skill-icons">
              <img src="/assets/adobexd.jpg" alt="ADOBE" />
              <img src="/assets/yoastseo.jpg" alt="YOAST" />
            </div>
          </div>
          <img src="/assets/adobexdex.jpg" alt="Adobe XD Fragrance Project" className="project-image" />
        </div>
      </section>

      <div className="project-card">
  <div className="project-text">
    <h3>
      <a href="https://dtober5.github.io/2351final/" target="_blank" rel="noopener noreferrer">
        Blackjack Game (JavaScript)
      </a>
    </h3>
    <p>
      A web-based Blackjack card game built using JavaScript logic, HTML structure, and styled with CSS.
      The game implements player-dealer interaction, card shuffling, point totals, and win/loss tracking.
    </p>
    <h4>Skills Used:</h4>
    <div className="skill-icons">
      <img src="/assets/html-5.jpg" alt="HTML" />
      <img src="/assets/css-3.jpg" alt="CSS" />
      <img src="/assets/javascript.jpg" alt="JavaScript" />
    </div>
  </div>
  <a href="https://dtober5.github.io/2351final/" target="_blank" rel="noopener noreferrer">
    <img src="/assets/blackjack.jpg" alt="Blackjack Game Screenshot" className="project-image" />
  </a>
</div>


      <section className="resume" id="resume">
        <h2>Resume</h2>
        <p>Click below to download my resume:</p>
        <a href="/assets/resume.pdf" className="btn-download" download>
          📄 Download Resume (PDF)
        </a>
        <iframe src="/assets/resume1.pdf" width="100%" height="600px" title="Resume PDF" />
      </section>

      <section className="contact" id="contact">
        <h2>Drop Me a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
        <div className="contact-info">
          <p>📞 210-992-0328</p>
          <p>📧 damientober@gmail.com</p>
        </div>
      </section>

      <footer>
        <p>2025 – Damien Tober. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
