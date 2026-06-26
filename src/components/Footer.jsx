export default function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid rgba(201,169,110,0.1)',
      padding: '40px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '16px',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '1rem',
        color: 'var(--parchment-dim)', fontStyle: 'italic',
      }}>
        "When S2 Hits, Life Begins"
      </div>

      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '11px',
        color: 'var(--parchment-dim)', opacity: 0.5,
        letterSpacing: '0.1em',
      }}>
        © 2026 Peace | Purpose | Progress
      </div>
    </footer>
  );
}
