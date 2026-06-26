const creativeWorks = [
  {
    title: 'PRATIBIMB',
    subtitle: '100-Day Research Article Series',
    platform: 'Reddit',
    year: '2026',
    description: '100 research-backed biographical articles published in 100 consecutive days — each drawing lessons from the lives of remarkable individuals. A testament to consistency, depth, and the art of learning from others.',
    icon: '◈',
    url: 'https://www.reddit.com/user/Due_Stuff_103/',
    color: 'var(--gold)',
  },
  {
    title: 'SAMVAD with Siddhant',
    subtitle: 'Podcast Series — 7 Episodes',
    platform: 'YouTube',
    year: '2026',
    description: 'A multi-domain podcast inviting remarkable guests from technology, arts, and society to share their journeys — a space where conversations become chronicles.',
    icon: '◎',
    url: 'https://youtube.com/@JainSiddhantofficial',
    color: 'var(--nebula)',
  },
  {
    title: 'RAHASYA',
    subtitle: '15-Day Research Series',
    platform: 'LinkedIn',
    year: '2025',
    description: '15 deep-dive research articles on the world\'s greatest mysteries spanning art, science, literature, philosophy, and geography — published both digitally and in print.',
    icon: '◉',
    url: 'https://linkedin.com/in/the-siddhant-jain',
    color: 'var(--gold)',
  },
  {
    title: 'DARPAN',
    subtitle: '10 Original Ghazals — On Camera',
    platform: 'Instagram & LinkedIn',
    year: '2025',
    description: '10 self-authored ghazals delivered live on camera — each a mirror held to emotion, philosophy, and the human condition. Poetry as performance, vulnerability as strength.',
    icon: '✦',
    url: 'https://instagram.com/nazm_nectar',
    color: '#B8A9C9',
  },
  {
    title: 'Indian Iconic Poet — Season 7',
    subtitle: 'National Level Winner',
    platform: 'National Competition',
    year: 'Dec 2025',
    description: 'Ranked 1st among 600+ poets and writers across all age groups at the national level. A recognition not just of craft, but of voice — the belief that words can move mountains.',
    icon: '🏆',
    url: 'https://drive.google.com/file/d/1pChBu3tdohkhdOcTSqjKtC1lLoK8LxxN/view?usp=sharing',
    color: '#B8A9C9',
  },
  {
    title: '11 Published Articles',
    subtitle: 'Newspapers & College Newsletter',
    platform: 'Print & Digital',
    year: '2025–26',
    description: 'Long-form analytical writing published in local newspapers and GLA University\'s monthly newsletter — from socio-political commentary to philosophy and culture.',
    icon: '◫',
    url: 'https://drive.google.com/file/d/1XjPFa6oJkhbDLd8zbcveL4qnRmM-i2_k/view?usp=sharing',
    color: 'var(--parchment-dim)',
  },
];

export default function Creative() {
  return (
    <section id="creative" className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-label">Creative Universe</div>
        <h2 className="section-title">Beyond the <em>Code</em></h2>

        <p style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic',
          fontSize: '1.1rem', color: 'var(--parchment-dim)',
          maxWidth: '560px', lineHeight: 1.7, marginBottom: '56px',
        }}>
          "Technology is what I build. Poetry is what I am. Philosophy is how I see. These works live at the intersection of all three."
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1px',
          background: 'rgba(201,169,110,0.06)',
        }}>
          {creativeWorks.map((work) => (
            <a
              key={work.title}
              href={work.url}
              target="_blank"
              rel="noreferrer"
              style={{
                background: work.featured ? 'rgba(201,169,110,0.05)' : 'var(--card-bg)',
                padding: '32px 28px',
                display: 'block',
                textDecoration: 'none',
                transition: 'background 0.3s',
                position: 'relative',
                borderTop: work.featured ? '1px solid rgba(201,169,110,0.3)' : 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--midnight)'}
              onMouseLeave={e => e.currentTarget.style.background = work.featured ? 'rgba(201,169,110,0.05)' : 'var(--card-bg)'}
            >
              {work.featured && (
                <div style={{
                  position: 'absolute', top: '16px', right: '16px',
                  fontFamily: 'var(--font-mono)', fontSize: '9px',
                  padding: '3px 8px', background: 'rgba(201,169,110,0.15)',
                  color: 'var(--gold)', letterSpacing: '0.15em',
                }}>FEATURED</div>
              )}

              <div style={{ fontSize: '20px', marginBottom: '16px' }}>{work.icon}</div>

              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                color: 'var(--parchment-dim)', letterSpacing: '0.15em',
                marginBottom: '8px', textTransform: 'uppercase',
              }}>
                {work.platform} · {work.year}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '1.4rem',
                fontWeight: 500, color: 'var(--white)', marginBottom: '6px',
              }}>{work.title}</h3>

              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                color: work.color, marginBottom: '16px', opacity: 0.85,
              }}>{work.subtitle}</div>

              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                color: 'var(--parchment-dim)', lineHeight: 1.75,
              }}>{work.description}</p>

              <div style={{
                marginTop: '20px',
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                color: work.color, opacity: 0.7,
              }}>View ↗</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
