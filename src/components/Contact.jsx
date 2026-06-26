import { useState } from 'react';

const socials = [
  { label: 'LinkedIn', handle: '@the-siddhant-jain', url: 'https://linkedin.com/in/the-siddhant-jain' },
  { label: 'GitHub', handle: '@Its-Siddhant', url: 'https://github.com/Its-Siddhant' },
  { label: 'LeetCode', handle: '@JainSiddhantOfficial', url: 'https://leetcode.com/u/JainSiddhantOfficial' },
  { label: 'YouTube', handle: '@JainSiddhantofficial', url: 'https://youtube.com/@JainSiddhantofficial' },
  { label: 'Instagram', handle: '@nazm_nectar', url: 'https://instagram.com/nazm_nectar' },
  { label: 'Chess.com', handle: '@siddhantchess12', url: 'https://chess.com/member/siddhantchess12' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${form.name}`;
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.open(`mailto:siddhu1604jain@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Let's <em>Connect</em></h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>

          {/* Left */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '15px',
              color: 'var(--parchment-dim)', lineHeight: 1.85, marginBottom: '40px',
            }}>
              Whether you have a project in mind, want to collaborate, discuss philosophy over code, or simply say hello — my inbox is always open.
            </p>

            <a href="mailto:siddhu1604jain@gmail.com" style={{
              display: 'block',
              fontFamily: 'var(--font-display)', fontSize: '1.1rem',
              color: 'var(--gold)', marginBottom: '40px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              siddhu1604jain@gmail.com ↗
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {socials.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 18px',
                  background: 'var(--card-bg)',
                  transition: 'background 0.3s, color 0.3s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--midnight)';
                  e.currentTarget.querySelector('.social-label').style.color = 'var(--gold)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--card-bg)';
                  e.currentTarget.querySelector('.social-label').style.color = 'var(--parchment)';
                }}
                >
                  <span className="social-label" style={{
                    fontFamily: 'var(--font-mono)', fontSize: '12px',
                    color: 'var(--parchment)', letterSpacing: '0.05em',
                    transition: 'color 0.3s',
                  }}>{s.label}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '12px',
                    color: 'var(--parchment-dim)',
                  }}>{s.handle} ↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Contact form */}
          <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { key: 'name', label: 'Your Name', type: 'text' },
                { key: 'email', label: 'Your Email', type: 'email' },
              ].map(f => (
                <div key={f.key}>
                  <label style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px',
                    color: 'var(--parchment-dim)', letterSpacing: '0.2em',
                    textTransform: 'uppercase', display: 'block', marginBottom: '8px',
                  }}>{f.label}</label>
                  <input
                    type={f.type}
                    required
                    value={form[f.key]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    style={{
                      width: '100%', padding: '14px 16px',
                      background: 'var(--card-bg)',
                      border: '1px solid rgba(232,224,208,0.1)',
                      color: 'var(--parchment)',
                      fontFamily: 'var(--font-body)', fontSize: '14px',
                      outline: 'none', transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(201,169,110,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(232,224,208,0.1)'}
                  />
                </div>
              ))}
              <div>
                <label style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  color: 'var(--parchment-dim)', letterSpacing: '0.2em',
                  textTransform: 'uppercase', display: 'block', marginBottom: '8px',
                }}>Message</label>
                <textarea
                  required rows={6}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%', padding: '14px 16px',
                    background: 'var(--card-bg)',
                    border: '1px solid rgba(232,224,208,0.1)',
                    color: 'var(--parchment)',
                    fontFamily: 'var(--font-body)', fontSize: '14px',
                    outline: 'none', resize: 'vertical', transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(201,169,110,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(232,224,208,0.1)'}
                />
              </div>
              <button type="submit" style={{
                padding: '14px 32px',
                background: sent ? 'rgba(74,127,165,0.2)' : 'var(--gold)',
                color: sent ? 'var(--nebula)' : 'var(--space-black)',
                border: sent ? '1px solid var(--nebula)' : 'none',
                fontFamily: 'var(--font-mono)', fontSize: '12px',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'all 0.3s',
                alignSelf: 'flex-start',
              }}>
                {sent ? '✓ Opening Mail Client' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
