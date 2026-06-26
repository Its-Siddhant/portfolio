const achievements = [
  {
    title: 'National Level Winner',
    detail: 'Indian Iconic Poet Season 7 — Ranked 1st among 600+ poets across all age groups',
    year: 'Dec 2025',
    category: 'Creative',
  },
  {
    title: '28th Best Developer Globally',
    detail: 'Represented India at BTU Germany International Hackathon',
    year: '2024',
    category: 'Tech',
  },
  {
    title: '1,050+ DSA Problems Solved',
    detail: '300+ day LeetCode streak · Diamond Badge on CodeChef (100-day streak)',
    year: 'Ongoing',
    category: 'Tech',
  },
  {
    title: 'IIT Gandhinagar Academic Intern',
    detail: 'Semester exchange — DSA, Philosophy, and interdisciplinary research',
    year: '2024–25',
    category: 'Academic',
  },
  {
    title: 'GLA Got Talent Winner',
    detail: 'Campus-wide talent competition',
    year: '2023',
    category: 'Creative',
  },
  {
    title: '30+ Competition Wins',
    detail: 'Poetry, singing, and debate at school, college, and inter-collegiate levels',
    year: 'Ongoing',
    category: 'Creative',
  },
  {
    title: 'Microsoft Azure AZ-900',
    detail: 'Certified in Cloud Computing fundamentals',
    year: '2025',
    category: 'Tech',
  },
  {
    title: 'Bharat Interns — Full Stack Dev Intern',
    detail: 'Government of India initiative — MERN Stack development',
    year: '2023',
    category: 'Experience',
  },
  {
  category: 'Experience',
  year: 'Ongoing',
  title: 'Event Organiser',
  detail: 'Organised 10+ university-level events and competitions — bridging tech, culture, and community one stage at a time.',
},
];

const communities = [
  {
    name: 'TechVepra',
    role: 'Owner',
    members: '1,500+',
    desc: 'Led flagship "Vepra Verse Tech Diaries" — industry-expert speaker series for student mentorship',
    year: '2025',
  },
  {
    name: 'Code Sprinters',
    role: 'Founder',
    members: 'Growing',
    desc: 'Developer community targeting early-stage coders — in active growthc phase',
    year: '2024',
  },
    {
   name: 'Coding Bungees',
   role: 'Founder',
   members: 'In Production',
   desc: 'A developer community currently being built — actively working on structure, content, and launch.',
   year: '2026',
  },
];

const categoryColors = {
  Tech: 'var(--nebula)',
  Creative: 'var(--gold)',
  Academic: '#8BA888',
  Experience: 'var(--parchment-dim)',
};

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-label">Recognition & Impact</div>
        <h2 className="section-title">Achievements & <em>Communities</em></h2>

        {/* Achievements grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: 'rgba(201,169,110,0.06)',
          marginBottom: '80px',
        }}>
          {achievements.map((a) => (
            <div key={a.title} style={{
              background: 'var(--card-bg)',
              padding: '28px 24px',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--midnight)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px',
                  padding: '3px 8px',
                  color: categoryColors[a.category],
                  border: `1px solid ${categoryColors[a.category]}40`,
                  letterSpacing: '0.1em',
                }}>{a.category.toUpperCase()}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  color: 'var(--parchment-dim)', opacity: 0.6,
                }}>{a.year}</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '1.15rem',
                fontWeight: 500, color: 'var(--white)', marginBottom: '8px',
                lineHeight: 1.3,
              }}>{a.title}</div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                color: 'var(--parchment-dim)', lineHeight: 1.6,
              }}>{a.detail}</div>
            </div>
          ))}
        </div>

        {/* Communities */}
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            letterSpacing: '0.2em', color: 'var(--gold)',
            marginBottom: '32px', opacity: 0.7,
          }}>── COMMUNITIES BUILT</div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(201,169,110,0.06)' }}>
            {communities.map((c) => (
              <div key={c.name} style={{
                background: 'var(--card-bg)', padding: '32px 28px',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--midnight)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
              >
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '2.4rem',
                  color: 'var(--gold)', fontWeight: 300, marginBottom: '4px',
                }}>{c.members}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  color: 'var(--parchment-dim)', letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}>MEMBERS</div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.3rem',
                  color: 'var(--white)', marginBottom: '4px', fontWeight: 500,
                }}>{c.name}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px',
                  color: 'var(--nebula)', marginBottom: '12px',
                }}>{c.role} · {c.year}</div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px',
                  color: 'var(--parchment-dim)', lineHeight: 1.6,
                }}>{c.desc}</div>
              </div>
            ))}
          </div>

          {/* Total impact */}
          <div style={{
            marginTop: '1px', background: 'rgba(201,169,110,0.04)',
            padding: '24px 28px', textAlign: 'center',
            border: '1px solid rgba(201,169,110,0.1)',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: '1.1rem', color: 'var(--parchment-dim)',
            }}>
              Across 3 communities — <span style={{ color: 'var(--gold)' }}>2,100+ students</span> mentored in programming and career development
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #achievements .container > div:last-child > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
