import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiGitBranch, FiServer } from 'react-icons/fi';

const skillGroups = [
  {
    icon: <FiCode size={22} />,
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'HTML5', 'CSS3']
  },
  {
    icon: <FiLayout size={22} />,
    title: 'Frameworks & Libraries',
    skills: ['React', 'Framer Motion', 'React Icons', 'React Router']
  },
  {
    icon: <FiServer size={22} />,
    title: 'APIs & Tools',
    skills: ['REST APIs', 'USDA FoodData Central', 'OpenWeatherMap', 'localStorage']
  },
  {
    icon: <FiGitBranch size={22} />,
    title: 'Dev Tools',
    skills: ['Git & GitHub', 'Vercel', 'VSCode', 'npm']
  }
];

export default function Skills() {
  return (
<section id="skills" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div style={{ fontSize: '13px', color: '#90cdf4', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>What I know</div>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '3rem', lineHeight: 1.2 }}>
          Skills & Technologies
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        {skillGroups.map((group, i) => (
          <motion.div key={group.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{ color: '#90cdf4' }}>{group.icon}</div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: 'white' }}>{group.title}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {group.skills.map(skill => (
                <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#185FA5', flexShrink: 0 }} />
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}