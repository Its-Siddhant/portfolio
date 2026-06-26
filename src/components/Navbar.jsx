import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const links = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Work' },
  { to: 'creative', label: 'Creative' },
  { to: 'achievements', label: 'Achievements' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '20px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,169,110,0.1)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <Link to="hero" smooth duration={600} style={{ cursor: 'pointer' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--white)', letterSpacing: '0.02em' }}>
          SJ<span style={{ color: 'var(--gold)' }}>.</span>
        </div>
      </Link>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="nav-links">
        {links.map(l => (
          <Link
            key={l.to} to={l.to} smooth duration={600} offset={-80}
            style={{
              fontFamily: 'var(--font-body)', fontSize: '13px',
              letterSpacing: '0.06em', color: 'var(--parchment-dim)',
              cursor: 'pointer', transition: 'color 0.2s',
              textTransform: 'uppercase',
            }}
            activeStyle={{ color: 'var(--gold)' }}
            onMouseEnter={e => e.target.style.color = 'var(--parchment)'}
            onMouseLeave={e => e.target.style.color = 'var(--parchment-dim)'}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none', background: 'none', border: 'none',
          color: 'var(--parchment)', cursor: 'pointer', fontSize: '20px',
        }}
        className="hamburger"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(10,10,15,0.98)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '36px',
          zIndex: 99,
        }}>
          <button onClick={() => setMenuOpen(false)} style={{
            position: 'absolute', top: '24px', right: '24px',
            background: 'none', border: 'none', color: 'var(--parchment)',
            fontSize: '24px', cursor: 'pointer',
          }}>✕</button>
          {links.map(l => (
            <Link
              key={l.to} to={l.to} smooth duration={600} offset={-80}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)', fontSize: '2rem',
                color: 'var(--parchment)', cursor: 'pointer',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
