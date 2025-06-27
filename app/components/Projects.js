const projects = [
  {
    title: 'AI Stock Market Analyzer',
    description: 'A sophisticated machine learning tool that analyzes real-time stock market data to predict trends and provide investment insights. Built with Python, TensorFlow, and advanced statistical models.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    link: '#',
    icon: '📈'
  },
  {
    title: 'Business Insights Dashboard',
    description: 'A comprehensive data visualization dashboard that transforms complex business data into actionable insights. Features interactive charts, real-time updates, and automated reporting.',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    link: '#',
    icon: '📊'
  },
  {
    title: 'CHANAKYA GPT',
    description: 'An innovative AI-powered platform for business and financial strategy. Provides intelligent recommendations, market analysis, and strategic planning tools for businesses.',
    technologies: ['AI/ML', 'Python', 'FastAPI', 'React'],
    link: '#',
    icon: '🤖'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2>Featured Projects</h2>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          Showcasing innovative solutions that combine technical expertise with business acumen.
        </p>
      </div>
      <div className="projects-3d-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {projects.map((project, index) => (
          <div key={index} className="card project-card-3d tilt-card" style={{ height: '100%', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '1.5rem' }}>
              <div style={{ fontSize: '3rem', width: '5rem', height: '5rem', borderRadius: '50%', background: 'var(--gradient-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-3d)' }}>
                {project.icon}
              </div>
              <div>
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{project.title}</h3>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem', flex: '1' }}>
              {project.description}
            </p>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag tech-tag-anim">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 'auto' }}>
              <a href={project.link} className="btn btn-shimmer" style={{ width: '100%', justifyContent: 'center' }}>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 