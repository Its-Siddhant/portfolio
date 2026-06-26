const projects = [
{
    id: '01',
    name: 'Recruitly',
    tagline: 'AI-Powered Placement Preparation Platform',
    description: 'Built an end-to-end placement prep platform with JWT-auth backend, AI Mentor via Groq API (LLaMA 3.3 70B), a Company Question Bank with topic/difficulty filters (6 companies), and a Daily Quiz Engine with streak & scoring. Frontend in React + Redux + Tailwind with a full dashboard, chat UI, and quiz system.',
    tech: ['React.js', 'Redux', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Groq API', 'LLaMA 3.3 70B', 'JWT Auth'],
    type: 'Full Stack + AI',
    status: 'IN PROGRESS',
    github: 'https://github.com/Its-Siddhant/Recruitly',
    live: null,
  },
  {
    id: '02',
    name: 'Wanderlust',
    tagline: 'Full-Stack Rental Booking Platform',
    description: 'Architected a production-grade rental platform with session-based authentication, RESTful CRUD APIs for property listings, and server-side validation using Express middleware. Interactive location-based property search via Mapbox, optimized image delivery through Cloudinary, deployed on Render with environment-based configuration.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mapbox API', 'Cloudinary', 'Render'],
    type: 'Full Stack',
    status: 'LIVE',
    github: 'https://github.com/Its-Siddhant/Wanderlust',
    live: 'https://wanderlust-fedr.onrender.com/listings',
  },
  {
    id: '03',
    name: 'Suraksha',
    tagline: 'Anonymous Crime Reporting Platform',
    description: 'Type-safe, anonymous crime reporting system built with React + TypeScript and Redux for centralized state management across geolocation alerts and multilingual support. Integrated zero-shot ML classification pipeline for real-time incident auto-categorization, feeding a live analytics dashboard for police personnel built with Recharts.',
    tech: ['React 18', 'TypeScript', 'Redux', 'Vite', 'Tailwind CSS', 'Recharts', 'ML Pipeline'],
    type: 'Frontend + ML',
    status: 'LIVE',
    github: 'https://github.com/Its-Siddhant/Suraksha',
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-label">Technical Work</div>
        <h2 className="section-title">Selected <em>Projects</em></h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {projects.map((p) => (
            <div
              key={p.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '72px 1fr 120px',
                gap: '32px',
                alignItems: 'start',
                padding: '40px 32px',
                background: 'var(--card-bg)',
                border: '1px solid rgba(201,169,110,0.06)',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)';
                e.currentTarget.style.background = 'var(--midnight)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.06)';
                e.currentTarget.style.background = 'var(--card-bg)';
              }}
            >
              {/* Number */}
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '3.2rem',
                color: 'rgba(201,169,110,0.1)', fontWeight: 300,
                lineHeight: 1, userSelect: 'none', paddingTop: '4px',
              }}>{p.id}</div>

              {/* Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 500, color: 'var(--white)' }}>{p.name}</h3>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '9px',
                    padding: '3px 8px', background: 'rgba(74,127,165,0.12)',
                    color: 'var(--nebula)', border: '1px solid rgba(74,127,165,0.25)',
                    letterSpacing: '0.1em',
                  }}>{p.status}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '9px',
                    padding: '3px 8px', background: 'rgba(201,169,110,0.08)',
                    color: 'var(--gold)', border: '1px solid rgba(201,169,110,0.2)',
                    letterSpacing: '0.1em',
                  }}>{p.type}</span>
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--gold)', marginBottom: '14px', opacity: 0.75 }}>{p.tagline}</div>

                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--parchment-dim)', lineHeight: 1.8, maxWidth: '560px', marginBottom: '20px' }}>{p.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '11px',
                      color: 'var(--parchment-dim)', padding: '3px 8px',
                      border: '1px solid rgba(232,224,208,0.08)',
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '6px' }}>
                <a href={p.github} target="_blank" rel="noreferrer" style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px',
                  color: 'var(--parchment-dim)', letterSpacing: '0.08em',
                  display: 'flex', alignItems: 'center', gap: '6px',
                  transition: 'color 0.2s', textDecoration: 'none',
                  padding: '8px 12px', border: '1px solid rgba(232,224,208,0.08)',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--parchment-dim)'; e.currentTarget.style.borderColor = 'rgba(232,224,208,0.08)'; }}
                >
                  ↗ Code
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--nebula)', letterSpacing: '0.08em',
                    display: 'flex', alignItems: 'center', gap: '6px',
                    transition: 'color 0.2s', textDecoration: 'none',
                    padding: '8px 12px', background: 'rgba(74,127,165,0.08)',
                    border: '1px solid rgba(74,127,165,0.2)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(74,127,165,0.15)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(74,127,165,0.08)'}
                  >
                    ⬡ Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '36px', textAlign: 'center' }}>
          <a href="https://github.com/Its-Siddhant" target="_blank" rel="noreferrer" style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            color: 'var(--parchment-dim)', letterSpacing: '0.2em',
            textTransform: 'uppercase', padding: '14px 40px',
            border: '1px solid rgba(232,224,208,0.1)',
            display: 'inline-block', transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(232,224,208,0.1)'; e.currentTarget.style.color = 'var(--parchment-dim)'; }}
          >
            View All Projects on GitHub ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects .container > div > div {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            padding: 28px 20px !important;
          }
          #projects .container > div > div > div:first-child { display: none; }
          #projects .container > div > div > div:last-child { flex-direction: row !important; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
}
