import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'FitTrack',
    description: 'A full-featured fitness tracking app for logging workouts across 4 splits, tracking macros with the USDA FoodData Central API, and monitoring progress over time.',
    tags: ['React', 'USDA API', 'localStorage', 'CSS'],
    live: 'https://fittrack-nine-gamma.vercel.app/',
    github: 'https://github.com/CARNAGE-TECH/fittrack',
    color: '#185FA5'
  },
  {
    title: 'WeatherNow',
    description: 'A real-time weather app with animated backgrounds for each weather condition, city search with autocomplete, air quality index, 5-day forecast, and favourites.',
    tags: ['React', 'OpenWeatherMap API', 'Framer Motion', 'React Icons'],
    live: 'https://weatherapp-5got.vercel.app/',
    github: 'https://github.com/CARNAGE-TECH/weatherapp',
    color: '#0d6ebd'
  },
  {
    title: 'Phoenix — Solar System',
    description: 'A group capstone project — an interactive solar system data app with planet cards, a NASA data table, video section, and contact form.',
    tags: ['React', 'CSS', 'Vercel', 'Team Project'],
    live: 'https://capstone-project-group-14.vercel.app/',
    github: 'https://github.com/CARNAGE-TECH',
    color: '#6D28D9'
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 2rem', background: 'rgba(255,255,255,0.02)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ fontSize: '13px', color: '#90cdf4', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Portfolio</div>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '3rem', lineHeight: 1.2 }}>
            Projects I've built
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

              {/* Color bar */}
              <div style={{ height: '4px', background: `linear-gradient(90deg, ${p.color}, transparent)` }} />

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '0.75rem', color: 'white' }}>{p.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>{p.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '4px 10px', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <a href={p.live} target="_blank" rel="noreferrer"
                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', background: `linear-gradient(135deg, ${p.color}, #2b8dd4)`, color: 'white', padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                    <FiExternalLink size={14} /> Live demo
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'white', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                    <FiGithub size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}