import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiShoppingBag, FiZap } from 'react-icons/fi';

const services = [
  {
    icon: <FiLayers size={22} />,
    title: 'Business Websites',
    description: 'Clean, responsive websites for brands that need a strong online presence and clear calls to action.',
    deliverables: ['Landing pages', 'Portfolio sites', 'Company websites']
  },
  {
    icon: <FiCode size={22} />,
    title: 'Web Applications',
    description: 'Interactive React apps with useful flows, dashboards, forms, auth, and API-powered features.',
    deliverables: ['React interfaces', 'Firebase apps', 'API integrations']
  },
  {
    icon: <FiShoppingBag size={22} />,
    title: 'E-commerce Builds',
    description: 'Product-focused shopping experiences with catalogs, carts, wishlists, and polished storefront layouts.',
    deliverables: ['Product pages', 'Cart flows', 'Storefront UI']
  },
  {
    icon: <FiZap size={22} />,
    title: 'UI Polish & Fixes',
    description: 'Focused improvements for sites that need better mobile layouts, clearer copy, or smoother interactions.',
    deliverables: ['Responsive fixes', 'UI cleanup', 'Performance tuning']
  }
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '6rem 2rem', background: 'rgba(255,255,255,0.02)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ fontSize: '13px', color: '#90cdf4', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Services</div>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '1rem', lineHeight: 1.2 }}>
            What I can build for you
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: 1.8, maxWidth: '620px', marginBottom: '3rem' }}>
            Practical digital products for small businesses, startups, and creators who need something that looks sharp, loads fast, and is easy to use.
          </p>
        </motion.div>

        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1.5rem', display: 'flex', flexDirection: 'column', minHeight: '280px' }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(24,95,165,0.15)', border: '1px solid rgba(24,95,165,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#90cdf4', marginBottom: '1.25rem' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '0.75rem' }}>{service.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '14px', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>{service.description}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {service.deliverables.map(item => (
                  <div key={item} style={{ color: 'rgba(255,255,255,0.58)', fontSize: '13px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2b8dd4', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
