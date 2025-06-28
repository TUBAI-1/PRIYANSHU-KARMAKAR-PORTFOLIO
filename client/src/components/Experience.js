import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGoogle, FaRocket, FaGraduationCap, FaChartBar } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      company: "Google",
      position: "AI/ML Virtual Internship",
      duration: "May 2025 - Present",
      period: "1 month",
      icon: <FaGoogle />,
      description: "Working on cutting-edge AI and machine learning projects, gaining hands-on experience with Google's advanced technologies and methodologies.",
      achievements: [
        "Learning advanced AI/ML techniques",
        "Working with Google's AI tools and platforms",
        "Collaborating with global teams"
      ]
    },
    {
      company: "CHANAKYA GPT",
      position: "Founder",
      duration: "February 2025 - Present",
      period: "4 months",
      icon: <FaRocket />,
      description: "Founded and leading an innovative AI startup focused on creating intelligent solutions and GPT-powered applications.",
      achievements: [
        "Established company vision and strategy",
        "Developed AI-powered solutions",
        "Built a team of talented professionals"
      ]
    },
    {
      company: "Internshala",
      position: "Internship Trainee",
      duration: "January 2025 - April 2025",
      period: "4 months",
      icon: <FaGraduationCap />,
      description: "Gained practical experience in various domains through structured internship programs and real-world projects.",
      achievements: [
        "Completed multiple skill-based projects",
        "Enhanced professional development",
        "Gained industry insights"
      ]
    },
    {
      company: "Alteryx",
      position: "ALTERYX DATA ANALYTICS PROCESS AUTOMATION",
      duration: "January 2025 - March 2025",
      period: "3 months",
      icon: <FaChartBar />,
      description: "Specialized in data analytics and process automation using Alteryx platform, creating efficient data workflows and analytical solutions.",
      achievements: [
        "Mastered Alteryx data analytics platform",
        "Automated complex data processes",
        "Created efficient analytical workflows"
      ]
    }
  ];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">
            My professional journey showcasing diverse experience in AI, entrepreneurship, and data analytics.
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="timeline-content glass">
                <div className="timeline-header">
                  <div className="company-icon">
                    {exp.icon}
                  </div>
                  <div className="company-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <h4 className="position">{exp.position}</h4>
                    <div className="duration">
                      <span className="period">{exp.duration}</span>
                      <span className="time-period">({exp.period})</span>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-body">
                  <p className="description">{exp.description}</p>
                  
                  <div className="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-summary glass"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3>Career Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-number">4</div>
              <div className="highlight-label">Diverse Roles</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">12+</div>
              <div className="highlight-label">Months Experience</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">3</div>
              <div className="highlight-label">Industries</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">1</div>
              <div className="highlight-label">Startup Founded</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 