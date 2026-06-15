import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem', position: 'relative', overflow: 'hidden', zIndex: 1 }}>

      {/* Background glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(24,95,165,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Animated grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '800px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: 'inline-block', background: 'rgba(24,95,165,0.15)', border: '1px solid rgba(24,95,165,0.4)', borderRadius: '99px', padding: '6px 18px', fontSize: '13px', color: '#90cdf4', fontWeight: '500', marginBottom: '1.5rem' }}>
          Available for freelance work
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: '800', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-2px' }}>
          Building digital experiences that{' '}
          <span style={{ background: 'linear-gradient(135deg, #185FA5, #63b3ed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            matter
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          I'm Joseph, a freelance web developer and designer at OMTECH INNOVATORS. I build modern, responsive web applications that solve real problems.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => scrollTo('projects')}
            style={{ background: 'linear-gradient(135deg, #185FA5, #2b8dd4)', border: 'none', color: 'white', padding: '14px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>
            View my work
          </button>
          <button onClick={() => scrollTo('contact')}
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'white', padding: '14px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>
            Get in touch
          </button>
          <a href="https://github.com/CARNAGE-TECH" target="_blank" rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'white', padding: '14px 20px', borderRadius: '10px', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
            <FiGithub size={18} /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}