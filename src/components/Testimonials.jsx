import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const outcomes = [
  {
    title: 'Built for real use',
    quote: 'Every featured project includes a live demo, responsive layout, and practical user flow instead of just static screens.',
    detail: 'Good for clients who need usable products, not only mockups.'
  },
  {
    title: 'Fast project handoff',
    quote: 'Projects are deployed with clear GitHub repositories, readable component structure, and maintainable React patterns.',
    detail: 'Useful when a site needs future updates or collaboration.'
  },
  {
    title: 'Client-first communication',
    quote: 'Direct contact through email, WhatsApp, and Instagram makes it simple for clients to start a project conversation.',
    detail: 'Less friction from first visit to first message.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ fontSize: '13px', color: '#90cdf4', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Proof</div>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '1rem', lineHeight: 1.2 }}>
            Why clients can trust the work
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: 1.8, maxWidth: '620px', marginBottom: '3rem' }}>
            A simple snapshot of the standards behind each build: real demos, clean delivery, and easy communication.
          </p>
        </motion.div>

        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {outcomes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.5rem', minHeight: '230px' }}
            >
              <div style={{ color: '#68d391', marginBottom: '1rem' }}><FiCheckCircle size={22} /></div>
              <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '0.75rem' }}>{item.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: '14px', lineHeight: 1.7, marginBottom: '1rem' }}>{item.quote}</p>
              <p style={{ color: 'rgba(144,205,244,0.78)', fontSize: '13px', lineHeight: 1.6 }}>{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
