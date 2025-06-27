export default function Contact() {
  return (
    <section id="contact" className="container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2>Get in Touch</h2>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          I'm always open to discussing new opportunities, interesting projects, or just having a chat.
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📧</div>
          <h3>Email</h3>
          <a href="mailto:karmakarpriyanshu5@gmail.com" style={{ fontSize: '1.1rem' }}>
            karmakarpriyanshu5@gmail.com
          </a>
        </div>
        
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📱</div>
          <h3>Phone</h3>
          <a href="tel:7003123815" style={{ fontSize: '1.1rem' }}>
            +91 7003123815
          </a>
        </div>
        
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💼</div>
          <h3>LinkedIn</h3>
          <a 
            href="https://www.linkedin.com/in/priyanshu-karmakar-6465262a5" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ fontSize: '1.1rem' }}
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
} 