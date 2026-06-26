export default function About() {
const stats = [
  { value: '2,100+', label: 'Students Mentored' },
  { value: '1,400+', label: 'DSA Problems Solved' },
  { value: '110+', label: 'Literary Compositions' },
  { value: '28th', label: 'Global Rank — BTU' },
];

  return (
    <section id="about" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          {/* Left — Identity */}
          <div>
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Where <em>code</em> meets<br />cosmos
            </h2>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--parchment-dim)', lineHeight: 1.85, marginBottom: '20px' }}>
              I'm a Computer Science student at <span style={{ color: 'var(--parchment)' }}>GLA University, Mathura</span> — building full-stack platforms, solving hard problems, and shipping code that matters.
            </p>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--parchment-dim)', lineHeight: 1.85, marginBottom: '20px' }}>
              I spent a semester at <span style={{ color: 'var(--parchment)' }}>IIT Gandhinagar</span> as an Academic Intern — deepening my foundations in DSA and Philosophy, two disciplines that quietly shape how I think about both software and life.
            </p>

            <p style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: '1.15rem', color: 'var(--gold)',
              lineHeight: 1.65, borderLeft: '2px solid rgba(201,169,110,0.4)',
              paddingLeft: '20px', marginBottom: '32px',
            }}>
              "I'm a developer who also happens to write poetry, build communities, and ask too many questions about life. I think the best engineers are those who carry both <strong style={{ fontStyle: 'normal' }}>logic and soul</strong> — and I'm quietly trying to become one of them."
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
              {['MERN Stack', 'Full Stack', 'AI/ML', 'System Design', 'Poetry', 'Philosophy', 'Leadership'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {/* Timeline mini */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { year: '2023', event: 'Started B.Tech CSE at GLA University' },
                { year: '2023', event: 'Full Stack Dev Intern — Bharat Interns (Govt. of India)' },
                { year: '2024', event: 'Represented India — BTU Germany Hackathon · Ranked 28th globally' },
                { year: '2024–25', event: 'Academic Intern — IIT Gandhinagar' },
                { year: '2025', event: 'Took ownership of TechVepra · 1,500+ members' },
                { year: 'Dec 2025', event: 'National Winner — Indian Iconic Poet Season 7' },
                { year: 'May 2026', event: 'DARSHAN Series on LinkedIn — Philosophical reflections series' },
                { year: '2026', event: 'PRATIBIMB · SAMVAD Podcast · 3 Communities · 2,100+ mentored' },
                { year: 'Upcoming', event: 'Recruitly (launching) · Doom Stack — AI 3D Print Collab · Zen AI — AI that builds AI' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '12px 0', borderBottom: '1px solid rgba(232,224,208,0.05)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)', opacity: 0.7, minWidth: '52px', paddingTop: '2px' }}>{item.year}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--parchment-dim)', lineHeight: 1.5 }}>{item.event}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo + Stats */}
          <div>
            {/* Professional photo */}
            <div style={{ position: 'relative', marginBottom: '32px' }}>
              {/* Offset border accent */}
              <div style={{
                position: 'absolute', top: '12px', left: '12px',
                right: '-12px', bottom: '-12px',
                border: '1px solid rgba(201,169,110,0.2)',
                zIndex: 0,
              }} />
              <img
              className="profile-photo"
                src="/siddhant-event.png"
                alt="Siddhant Jain"
                style={{
                  width: '100%',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                  position: 'relative', zIndex: 1,
                  filter: 'brightness(0.9) contrast(1.05) saturate(0.85)',
                }}
              />
              {/* Gold overlay tint */}
              <div style={{
                position: 'absolute', inset: 0, zIndex: 2,
                background: 'linear-gradient(to bottom, transparent 60%, rgba(10,10,15,0.6) 100%)',
              }} />
              {/* Name label */}
              <div style={{
                position: 'absolute', bottom: '20px', left: '20px', zIndex: 3,
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--white)', fontWeight: 500 }}>Siddhant Jain</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.1em', fontWeight: 600 }}>Developer · Poet · Philosopher</div>
              </div>
            </div>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(201,169,110,0.08)' }}>
              {stats.map(s => (
                <div key={s.label} style={{
                  background: 'var(--card-bg)', padding: '22px 18px', textAlign: 'center',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--midnight)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--gold)', lineHeight: 1, marginBottom: '6px', letterSpacing: '0.02em' }}>{s.value}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--parchment-dim)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          #about .container > div > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}
