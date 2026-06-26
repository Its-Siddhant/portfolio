import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';

const ROLES = [
  'Software Developer',
  'Poet',
  'Philosopher',
  'Community Builder',
  'Full Stack Engineer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef();

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
      } else {
        setRoleIndex((roleIndex + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      position: 'relative', zIndex: 1,
      maxWidth: '1100px', margin: '0 auto',
      padding: '80px 40px 0',
      gap: '60px',
    }}>

      {/* LEFT — Text Content */}
      <div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '12px',
          letterSpacing: '0.3em', color: 'var(--gold)', marginBottom: '28px',
          opacity: 0.85,
          animation: 'fadeUp 0.8s ease forwards',
        }}>
          ✦ WELCOME TO MY UNIVERSE
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 7vw, 6rem)',
          fontWeight: 300,
          lineHeight: 0.95,
          color: 'var(--white)',
          letterSpacing: '-0.01em',
          marginBottom: '6px',
          animation: 'fadeUp 0.9s ease 0.1s both',
        }}>
          Siddhant
        </h1>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 7vw, 6rem)',
          fontWeight: 300,
          lineHeight: 0.95,
          color: '#C9A96E',
          WebkitTextStroke: 'none',
          letterSpacing: '-0.01em',
          marginBottom: '36px',
          animation: 'fadeUp 0.9s ease 0.2s both',
        }}>
          Jain
        </h1>

        {/* Typewriter */}
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 'clamp(13px, 1.6vw, 16px)',
          color: 'var(--nebula)', marginBottom: '24px',
          minHeight: '26px',
          animation: 'fadeUp 0.9s ease 0.3s both',
        }}>
          <span style={{ color: 'var(--gold)', marginRight: '8px' }}>//</span>
          {displayed}
          <span style={{
            display: 'inline-block', width: '2px', height: '1em',
            background: 'var(--gold)', marginLeft: '3px',
            verticalAlign: 'text-bottom',
            animation: 'blink 1s step-end infinite',
          }} />
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
          color: 'var(--parchment-dim)',
          maxWidth: '460px',
          lineHeight: 1.6,
          marginBottom: '44px',
          fontWeight: 300,
          animation: 'fadeUp 0.9s ease 0.4s both',
        }}>
          "A Software Developer by Profession, Poet by Passion and Philosopher by Heart."
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', animation: 'fadeUp 0.9s ease 0.5s both' }}>
          <Link to="projects" smooth duration={700} offset={-80}>
            <button style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '13px 28px',
              background: 'var(--gold)',
              color: 'var(--space-black)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--white)'}
            onMouseLeave={e => e.target.style.background = 'var(--gold)'}
            >
              View My Work
            </button>
          </Link>
          <Link to="contact" smooth duration={700} offset={-80}>
            <button style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '13px 28px',
              background: 'transparent',
              color: 'var(--parchment)',
              border: '1px solid rgba(232,224,208,0.2)', cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--gold)';
              e.currentTarget.style.color = 'var(--gold)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(232,224,208,0.2)';
              e.currentTarget.style.color = 'var(--parchment)';
            }}
            >
              Get In Touch
            </button>
          </Link>
        </div>

        {/* Social strip */}
        <div style={{
          display: 'flex', gap: '20px', marginTop: '48px',
          animation: 'fadeUp 0.9s ease 0.6s both',
        }}>
          {[
            { label: 'GitHub', url: 'https://github.com/Its-Siddhant' },
            { label: 'LinkedIn', url: 'https://linkedin.com/in/the-siddhant-jain' },
            { label: 'LeetCode', url: 'https://leetcode.com/u/JainSiddhantOfficial' },
            { label: 'YouTube', url: 'https://youtube.com/@JainSiddhantofficial' },
          ].map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px',
              color: 'var(--parchment-dim)', letterSpacing: '0.1em',
              transition: 'color 0.2s', textTransform: 'uppercase',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'var(--parchment-dim)'}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

   {/* RIGHT — Hero Photo (The Philosopher Shot) */}
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'fadeUp 1s ease 0.3s both',
    position: 'relative',
    transform: 'translateX(80px)',
  }}
>
  <div style={{ position: 'relative' }}>

    {/* Corner frame accents */}
    {[
      { top: '-8px', left: '-8px', borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)' },
      { top: '-8px', right: '-8px', borderTop: '2px solid var(--gold)', borderRight: '2px solid var(--gold)' },
      { bottom: '-8px', left: '-8px', borderBottom: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)' },
      { bottom: '-8px', right: '-8px', borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)' },
    ].map((style, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          width: '28px',
          height: '28px',
          opacity: 0.6,
          ...style,
        }}
      />
    ))}

    <img
      src="/hero-photo.png"
      alt="Siddhant Jain — Developer, Poet, Philosopher"
      style={{
        width: '340px',
        height: '340px',
        borderRadius: '50%',
        objectFit: 'cover',
        objectPosition: 'top center',
        filter: 'brightness(0.92) contrast(1.05) saturate(0.9)',
        display: 'block',
        position: 'relative',
        zIndex: 1,
      }}
    />

  </div>
</div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'fadeUp 1s ease 1.2s both',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--parchment-dim)', opacity: 0.5 }}>SCROLL</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; } 50% { opacity: 1; }
        }
        @media (max-width: 900px) {
          #hero {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding-top: 120px !important;
          }
          #hero > div:last-of-type { order: -1; }
          #hero > div:last-of-type img { max-width: 260px !important; margin: 0 auto; }
          #hero > div:first-child > div:last-of-type { justify-content: center; }
          #hero p { margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </section>
  );
}
