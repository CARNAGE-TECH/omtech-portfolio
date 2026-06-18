import { motion } from 'framer-motion';

export default function About() {
  return (
<section id="about" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div style={{ fontSize: '13px', color: '#90cdf4', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>About me</div>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '2rem', lineHeight: 1.2 }}>
          The developer behind<br />
          <span style={{ background: 'linear-gradient(135deg, #185FA5, #63b3ed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            OMTECH INNOVATORS
          </span>
        </h2>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              I'm Joseph Omokwale, a freelance web developer and designer based in Edo, Nigeria. I build modern, responsive web applications using React and JavaScript.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.8, marginBottom: '2rem' }}>
              Under my brand OMTECH INNOVATORS, I focus on delivering clean, functional, and visually impressive digital products. My goal is simple: build things that work, look great, and solve real problems.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['React', 'JavaScript', 'HTML/CSS', 'Git', 'Vercel', 'REST APIs'].map(tech => (
                <span key={tech} style={{ background: 'rgba(24,95,165,0.15)', border: '1px solid rgba(24,95,165,0.35)', borderRadius: '6px', padding: '6px 14px', fontSize: '13px', color: '#90cdf4', fontWeight: '500' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              ['3+', 'Years coding'],
              ['Full-Stack', 'React developer'],
              ['100%', 'Passion driven'],
              ['Edo', 'Based in Nigeria']
            ].map(([val, label]) => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: '800', background: 'linear-gradient(135deg, #185FA5, #63b3ed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{val}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
