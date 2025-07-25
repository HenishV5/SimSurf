import './App.css';
import logo from './assets/icon.png';
import { useState, useEffect } from 'react';

function TypewriterEffect() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const messages = ['SimSurf', 'Coming Soon...'];
  const currentMessage = messages[currentIndex];
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 150;
    const deleteSpeed = 50;
    const pauseTime = 2000;
    
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentMessage) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % messages.length);
      } else if (isDeleting) {
        setText(currentMessage.substring(0, text.length - 1));
      } else {
        setText(currentMessage.substring(0, text.length + 1));
      }
    }, isDeleting ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentIndex, currentMessage, messages]);
  
  return (
    <div className="typewriter-container">
      <span className="typewriter-text">{text}</span>
      <span className="cursor">|</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <img src={logo} alt="SimSurf Logo" className="logo" />
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#how" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#forwhom" onClick={() => setMenuOpen(false)}>For Whom</a>
            <a href="#subscribe" onClick={() => setMenuOpen(false)}>Subscribe</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <img src={logo} alt="SimSurf Logo" className="hero-logo" />
          <div className="hero-text">
            <TypewriterEffect />
          </div>
        </div>
        <h1>Upskill. Simulate. Succeed.</h1>
        <p className="hero-tagline">Practice DSA and software skills in real company environments, with AI teammates.</p>
        <div>
          <a href="#subscribe" className="cta-btn">Join the Mailing List</a>
        </div>
      </section>

      <div className="divider" />

      {/* How It Works Section */}
      <section className="section" id="how">
        <div className="section-content">
          <div className="section-title">How It Works</div>
          <div className="grid">
            <div className="card"><span className="icon-circle">1</span>Choose your company simulation</div>
            <div className="card"><span className="icon-circle">2</span>Solve DSA in company scenarios</div>
            <div className="card"><span className="icon-circle">3</span>Collaborate with AI teammates</div>
            <div className="card"><span className="icon-circle">4</span>Get feedback & upskill</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Features Section */}
      <section className="section alt" id="features">
        <div className="section-content">
          <div className="section-title">Features</div>
          <div className="grid">
            <div className="card">
              <span role="img" aria-label="DSA" className="feature-icon">📚</span>
              <div className="card-title">DSA Practice</div>
              <div>Sharpen your Data Structures & Algorithms skills with company-specific problems.</div>
            </div>
            <div className="card">
              <span role="img" aria-label="simulation" className="feature-icon">🏢</span>
              <div className="card-title">Company Simulation</div>
              <div>Experience real-world workflows and coding rounds in simulated company environments.</div>
            </div>
            <div className="card">
              <span role="img" aria-label="team" className="feature-icon">🤖</span>
              <div className="card-title">AI Teammates</div>
              <div>Work in interactive teams with AI agents—get hints, feedback, and collaboration.</div>
            </div>
            <div className="card">
              <span role="img" aria-label="progress" className="feature-icon">📈</span>
              <div className="card-title">Progress Tracking</div>
              <div>Monitor your growth, receive personalized feedback, and unlock achievements.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* For Whom Section */}
      <section className="section" id="forwhom">
        <div className="section-content">
          <div className="section-title">Who Is This For?</div>
          <div className="grid">
            <div className="card">🎓 Students</div>
            <div className="card">💼 Job Seekers</div>
            <div className="card">👩‍💻 Developers</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Subscribe Section */}
      <section className="section" id="subscribe">
        <div className="section-content">
          <div className="section-title">Subscribe to Our Mailing List</div>
          <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>Be the first to know when we launch and get exclusive updates!</div>
          <a href="https://groups.google.com/g/simsurf-updates" target="_blank" rel="noopener noreferrer" className="cta-btn">Subscribe Now</a>
        </div>
      </section>

      <footer className="footer">
        &copy; 2024 SimSurf. All rights reserved. | Upskill. Simulate. Succeed.
      </footer>
    </div>
  );
}

export default App;
