const experiences = [
  {
    company: 'Google',
    role: 'AI/ML Virtual Internship',
    period: 'May 2025 - Present',
    duration: '1 month',
    description: 'Working on cutting-edge AI and machine learning projects, gaining hands-on experience with Google\'s technology stack.',
    icon: '🔍'
  },
  {
    company: 'CHANAKYA GPT',
    role: 'Founder',
    period: 'February 2025 - Present',
    duration: '4 months',
    description: 'Leading an AI-powered platform for business and financial strategy, driving innovation in the fintech space.',
    icon: '🚀'
  },
  {
    company: 'Internshala',
    role: 'Internship Trainee',
    period: 'January 2025 - April 2025',
    duration: '4 months',
    description: 'Gained practical experience in professional environments, developing essential workplace skills and industry knowledge.',
    icon: '💼'
  },
  {
    company: 'Alteryx',
    role: 'Data Analytics Process Automation',
    period: 'January 2025 - March 2025',
    duration: '3 months',
    description: 'Specialized in automating data analytics processes, improving efficiency and accuracy in data-driven decision making.',
    icon: '⚙️'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2>Work Experience</h2>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          A journey of continuous learning and professional growth across diverse roles and industries.
        </p>
      </div>
      
      <div className="experience-timeline" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              {exp.icon}
            </div>
            
            <div className="card" style={{ marginBottom: '0' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent)' }}>{exp.company}</h3>
                <h4 style={{ marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>{exp.role}</h4>
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  alignItems: 'center',
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <span className="tech-tag">
                    {exp.period}
                  </span>
                  <span style={{ 
                    background: 'var(--gradient-gold)', 
                    color: 'var(--bg-primary)', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '2rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    boxShadow: 'var(--shadow)'
                  }}>
                    {exp.duration}
                  </span>
                </div>
              </div>
              
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 