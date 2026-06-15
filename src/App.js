import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/Particles';

const scrollStyles = `
  html { scroll-behavior: smooth; }
`;

const mobileStyles = `
  @media (max-width: 640px) {
    .about-grid { grid-template-columns: 1fr !important; }
    .projects-grid { grid-template-columns: 1fr !important; }
    .skills-grid { grid-template-columns: 1fr !important; }
    .contact-grid { grid-template-columns: 1fr !important; }
    .nav-desktop { display: none !important; }
    .hamburger { display: flex !important; }
  }
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: '#0a0a0a', color: 'white', overflowX: 'hidden', position: 'relative', margin: 0, padding: 0 }}>  <ParticleBackground />
      <style>{scrollStyles}</style>
      <style>{mobileStyles}</style>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;