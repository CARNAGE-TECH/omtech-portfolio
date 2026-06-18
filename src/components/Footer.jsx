import logo from '../assets/logo.jpeg';
import { FiGithub } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer style={{ padding: '3rem 2rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
      <img src={logo} alt="OMTECH INNOVATORS" style={{ height: '36px', objectFit: 'contain', borderRadius: '8px' }} />
      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>
        (c) 2026 OMTECH INNOVATORS - Built by Joseph Omokwale
      </div>
      <a href="https://github.com/CARNAGE-TECH" target="_blank" rel="noreferrer"
        style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px' }}>
        <FiGithub size={18} /> CARNAGE-TECH
      </a>
    </footer>
  );
}
