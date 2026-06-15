import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_4k5itbm';
const TEMPLATE_ID = 'template_rgh9xek';
const PUBLIC_KEY = 'LEYnxJ6tgDY5Mt-kU';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) { setError('Please fill in all fields.'); return; }
    setError('');
    setSending(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message
      }, PUBLIC_KEY);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError('Failed to send. Please try WhatsApp or email directly.');
    }
    setSending(false);
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px',
    color: 'white', fontSize: '15px', outline: 'none', fontFamily: 'inherit',
    boxSizing: 'border-box', transition: 'border-color 0.2s'
  };

  return (
<section id="contact" style={{ padding: '6rem 2rem', background: 'rgba(255,255,255,0.02)', position: 'relative', zIndex: 1 }}>      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ fontSize: '13px', color: '#90cdf4', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Get in touch</div>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '800', letterSpacing: '-1px', marginBottom: '3rem', lineHeight: 1.2 }}>
            Let's work together
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', lineHeight: 1.8, marginBottom: '2rem' }}>
              I'm currently available for freelance projects. Whether you need a website, web app, or UI design — let's talk.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.65)', fontSize: '15px' }}>
                <div style={{ background: 'rgba(24,95,165,0.15)', border: '1px solid rgba(24,95,165,0.3)', borderRadius: '10px', padding: '10px', color: '#90cdf4' }}><FiMail size={18} /></div>
                omtechinnovators@gmail.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.65)', fontSize: '15px' }}>
                <div style={{ background: 'rgba(24,95,165,0.15)', border: '1px solid rgba(24,95,165,0.3)', borderRadius: '10px', padding: '10px', color: '#90cdf4' }}><FiMapPin size={18} /></div>
                Edo State, Nigeria
              </div>
              <a href="https://wa.me/2348076384453" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.65)', fontSize: '15px', textDecoration: 'none' }}>
                <div style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: '10px', padding: '10px', color: '#68d391' }}><FaWhatsapp size={18} /></div>
                +234 807 638 4453
              </a>
              <a href="https://instagram.com/omtechinnovators" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.65)', fontSize: '15px', textDecoration: 'none' }}>
                <div style={{ background: 'rgba(225,48,108,0.15)', border: '1px solid rgba(225,48,108,0.3)', borderRadius: '10px', padding: '10px', color: '#fc8181' }}><FaInstagram size={18} /></div>
                @omtechinnovators
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>Your name</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Joseph" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(24,95,165,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>Email address</label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(24,95,165,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>
              <div>
                <label style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>Message</label>
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, height: '130px', resize: 'none' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(24,95,165,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>

              {error && <div style={{ color: '#fc8181', fontSize: '13px' }}>{error}</div>}
              {sent && (
                <div style={{ background: 'rgba(22,163,74,0.15)', border: '1px solid rgba(22,163,74,0.3)', borderRadius: '8px', padding: '12px', color: '#86efac', fontSize: '14px', textAlign: 'center' }}>
                  Message sent! I'll get back to you soon.
                </div>
              )}

              <button onClick={handleSubmit} disabled={sending}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'linear-gradient(135deg, #185FA5, #2b8dd4)', border: 'none', color: 'white', padding: '14px', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: sending ? 'not-allowed' : 'pointer', fontFamily: 'inherit', opacity: sending ? 0.7 : 1 }}>
                <FiSend size={16} /> {sending ? 'Sending...' : 'Send message'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #contact > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}