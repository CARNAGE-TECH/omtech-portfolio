import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpeg';

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['About', 'Services', 'Projects', 'Skills', 'Contact'];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          borderBottomColor: scrolled ? 'rgba(255,255,255,0.08)' : 'transparent',
          padding: '0 2rem', height: '70px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'background 0.3s, border-color 0.3s',        }}>
        <img src={logo} alt="OMTECH INNOVATORS" style={{ height: '40px', objectFit: 'contain', borderRadius: '8px' }} />
        {/* Desktop links */}
        <div className="desktop-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.75)', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: '500', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'white'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.75)'}>
              {link}
            </button>
          ))}
          <button onClick={() => scrollTo('Contact')}
            style={{ background: 'linear-gradient(135deg, #185FA5, #2b8dd4)', border: 'none', color: 'white', padding: '9px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '4px' }}
          className="hamburger">
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: '24px', height: '2px', background: 'white', borderRadius: '99px' }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{ position: 'fixed', top: '70px', left: 0, right: 0, background: 'rgba(10,10,10,0.98)', zIndex: 99, padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            {links.map(link => (
              <button key={link} onClick={() => scrollTo(link)}
                style={{ display: 'block', width: '100%', background: 'none', border: 'none', color: 'white', fontSize: '16px', padding: '14px 0', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {link}
              </button>
            ))}
            <button onClick={() => scrollTo('Contact')}
              style={{ marginTop: '1rem', width: '100%', background: 'linear-gradient(135deg, #185FA5, #2b8dd4)', border: 'none', color: 'white', padding: '12px', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .hamburger { display: flex !important; }
          .desktop-links { display: none !important; }
        }
      `}</style>
    </>
  );
}
