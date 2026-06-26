const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['JavaScript (ES6+)', 'Java', 'Python', 'C++', 'C', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    icon: '◈',
    skills: ['React.js', 'Redux / Redux Toolkit', 'Tailwind CSS', 'Bootstrap', 'TypeScript'],
  },
  {
    category: 'Backend & APIs',
    icon: '⟳',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'System Design'],
  },
  {
    category: 'Databases',
    icon: '◉',
    skills: ['MongoDB', 'Mongoose', 'SQL'],
  },
  {
    category: 'Cloud & Tools',
    icon: '↑',
    skills: ['Microsoft Azure', 'Git & GitHub', 'Postman', 'Render', 'Vercel', 'Netlify'],
  },
  {
    category: 'AI / ML',
    icon: '∿',
    skills: ['Agentic AI', 'Generative AI', 'Deep Learning', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    category: 'CS Fundamentals',
    icon: '△',
    skills: ['DSA', 'OOP', 'DBMS', 'OS', 'CN', 'System Design'],
  },
  {
    category: 'Creative & Soft',
    icon: '✦',
    skills: ['Public Speaking', 'Leadership', 'Anchoring'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-label">Technical Arsenal</div>
        <h2 className="section-title">Skills & <em>Expertise</em></h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1px',
          background: 'rgba(201,169,110,0.08)',
          border: '1px solid rgba(201,169,110,0.08)',
        }}>
          {skillGroups.map((group) => (
            <div
              key={group.category}
              style={{
                background: 'var(--card-bg)',
                padding: '28px 24px',
                transition: 'background 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--midnight)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--card-bg)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '16px',
                  color: 'var(--gold)', opacity: 0.8,
                }}>{group.icon}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px',
                  color: 'var(--parchment-dim)', letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>{group.category}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map(skill => (
                  <span key={skill} style={{
                    fontFamily: 'var(--font-body)', fontSize: '13px',
                    color: 'var(--parchment)',
                    padding: '4px 10px',
                    background: 'rgba(232,224,208,0.05)',
                    border: '1px solid rgba(232,224,208,0.08)',
                    borderRadius: '2px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.target.style.borderColor = 'rgba(201,169,110,0.4)';
                    e.target.style.color = 'var(--gold)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.borderColor = 'rgba(232,224,208,0.08)';
                    e.target.style.color = 'var(--parchment)';
                  }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginTop: '60px' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px',
            letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '24px',
            opacity: 0.7,
          }}>── CERTIFICATIONS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {[
              'Microsoft Azure Fundamentals AZ-900',
              'DSA using Java — Infosys SpringBoard',
              'Certified Forensic Psychologist — IPP',
              'Astronomy: Celestial Mechanics — Udemy',
            ].map(cert => (
              <div key={cert} style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                color: 'var(--parchment-dim)',
                padding: '10px 18px',
                border: '1px solid rgba(201,169,110,0.2)',
                display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <span style={{ color: 'var(--gold)', fontSize: '10px' }}>✦</span>
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
