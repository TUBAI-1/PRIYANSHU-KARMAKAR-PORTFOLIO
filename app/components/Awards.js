const awards = [
  {
    title: 'Pratibha Samman Award (Prabhat Khabar)',
    icon: '🏆',
  },
  {
    title: 'Best Innovative Project (BBA Team Achievement)',
    icon: '💡',
  },
  {
    title: 'Best Innovation (BBA Team Achievement)',
    icon: '🌟',
  },
  {
    title: 'Best Logo Design (BBA Team Achievement)',
    icon: '🎨',
  },
];

export default function Awards() {
  return (
    <section id="awards" className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2>Honors & Awards</h2>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          Recognition for outstanding achievements and innovative contributions in academics and projects.
        </p>
      </div>
      <div className="trophy-shelf" style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', margin: '0 auto', maxWidth: 900 }}>
        {awards.map((award, idx) => (
          <div key={idx} className="trophy-card" style={{ animation: `fadeInUp 0.8s ease-out ${0.2 + idx * 0.12}s both` }}>
            <div className="trophy-icon-wrapper">
              <span className="trophy-icon" style={{ fontSize: '2.5rem' }}>{award.icon}</span>
              <div className="trophy-spotlight" />
              <div className="trophy-confetti" />
            </div>
            <h3 style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '1.1rem', margin: '1.2rem 0 0.2rem' }}>{award.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
} 