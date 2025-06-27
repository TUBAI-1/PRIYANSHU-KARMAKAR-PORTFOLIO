export default function ContactMe() {
  return (
    <section id="contactme" className="container" style={{ marginTop: '6rem', marginBottom: '2rem' }}>
      <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto', marginBottom: '3rem' }}>
        <h2>Get in Touch</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
          I'm always open to discussing new opportunities, interesting projects, or just having a chat.
        </p>
      </div>
      <div className="contactme-cards" style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', maxWidth: 900, margin: '0 auto' }}>
        <div className="contactme-card" tabIndex={0}>
          <div className="contactme-icon">📧</div>
          <h3>Email</h3>
          <a href="mailto:karmakarpriyanshu5@gmail.com" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.1rem', textDecoration: 'underline' }}>karmakarpriyanshu5@gmail.com</a>
        </div>
        <div className="contactme-card" tabIndex={0}>
          <div className="contactme-icon">📱</div>
          <h3>Phone</h3>
          <a href="tel:7003123815" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.1rem', textDecoration: 'underline' }}>+91 7003123815</a>
        </div>
        <div className="contactme-card" tabIndex={0}>
          <div className="contactme-icon">💼</div>
          <h3>LinkedIn</h3>
          <a href="https://www.linkedin.com/in/priyanshu-karmakar-6465262a5" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.1rem', textDecoration: 'underline' }}>Connect on LinkedIn</a>
        </div>
      </div>
    </section>
  );
} 