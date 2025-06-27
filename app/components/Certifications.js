const certifications = [
  {
    title: 'Pre MBA Statistics',
    icon: '📚',
  },
  {
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    icon: '📊',
  },
  {
    title: 'Investment Banking Job Simulation',
    icon: '💹',
  },
  {
    title: 'Trading In the Zone',
    icon: '📈',
  },
  {
    title: 'Data Analysis and Visualization Job Simulation',
    icon: '🧮',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2>Certifications</h2>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          Recognized credentials and simulations that demonstrate my expertise in business, data, and finance.
        </p>
      </div>
      <div className="cert-timeline" style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
        {certifications.map((cert, idx) => (
          <div key={idx} className="cert-timeline-item" style={{ animation: `fadeInUp 0.8s ease-out ${0.2 + idx * 0.12}s both` }}>
            <div className="cert-dot" />
            <div className="card cert-card">
              <span className="cert-icon" style={{ fontSize: '2rem', marginBottom: '0.7rem' }}>{cert.icon}</span>
              <h3 style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>{cert.title}</h3>
            </div>
          </div>
        ))}
        <div className="cert-timeline-line" />
      </div>
    </section>
  );
} 