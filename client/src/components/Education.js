import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaSchool, FaUniversity, FaTrophy } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const education = [
    {
      institution: "JIS College of Engineering",
      degree: "Bachelor of Business Administration - BBA",
      field: "Business Administration and Management, General",
      duration: "August 2023 - December 2027",
      icon: <FaUniversity />,
      achievements: [
        "Currently pursuing BBA with focus on business strategy and innovation",
        "Team has won three consecutive awards",
        "Active participation in innovative projects"
      ]
    },
    {
      institution: "Barasat-1 Govt ITI College",
      degree: "Electronics Mechanic",
      field: "Electronics and Communication",
      duration: "August 2021 - August 2023",
      icon: <FaGraduationCap />,
      achievements: [
        "Completed technical training in electronics",
        "Gained practical skills in electronics mechanics",
        "Developed problem-solving abilities"
      ]
    },
    {
      institution: "Oriental Public School - India",
      degree: "Higher Secondary",
      field: "Business/Commerce, General",
      duration: "August 2021 - May 2023",
      icon: <FaSchool />,
      achievements: [
        "School topper in Higher Secondary",
        "Outstanding academic performance",
        "Strong foundation in business and commerce"
      ]
    },
    {
      institution: "Oriental Public School - India",
      degree: "Secondary Education",
      field: "General Studies",
      duration: "August 2021",
      icon: <FaSchool />,
      achievements: [
        "Completed secondary education with distinction",
        "Excellent academic record",
        "Strong foundation in core subjects"
      ]
    }
  ];

  const certifications = [
    {
      name: "Pre MBA Statistics",
      issuer: "Professional Certification",
      year: "2024"
    },
    {
      name: "Data Visualisation: Empowering Business with Effective Insights",
      issuer: "Data Analytics Certification",
      year: "2024"
    },
    {
      name: "Investment Banking Job Simulation",
      issuer: "Finance Certification",
      year: "2024"
    },
    {
      name: "Trading In the Zone",
      issuer: "Trading Certification",
      year: "2024"
    },
    {
      name: "Data Analysis and Visualization Job Simulation",
      issuer: "Data Science Certification",
      year: "2024"
    }
  ];

  return (
    <section className="education section" id="education">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">
            My academic journey from school topper to pursuing higher education in business administration.
          </p>
        </motion.div>

        <div className="education-content">
          <motion.div
            className="education-timeline"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-item glass"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="education-header">
                  <div className="institution-icon">
                    {edu.icon}
                  </div>
                  <div className="institution-info">
                    <h3 className="institution-name">{edu.institution}</h3>
                    <h4 className="degree">{edu.degree}</h4>
                    <p className="field">{edu.field}</p>
                    <span className="duration">{edu.duration}</span>
                  </div>
                </div>
                
                <div className="education-body">
                  <h5>Achievements:</h5>
                  <ul>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="certifications-section"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="certifications-title">
              <FaTrophy /> Certifications
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-card glass"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-year">{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="education-summary glass"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3>Academic Highlights</h3>
          <div className="academic-highlights">
            <div className="highlight">
              <div className="highlight-icon">🏆</div>
              <div className="highlight-text">
                <h4>School Topper</h4>
                <p>Achieved top position in Higher Secondary education</p>
              </div>
            </div>
            <div className="highlight">
              <div className="highlight-icon">🎓</div>
              <div className="highlight-text">
                <h4>BBA Pursuit</h4>
                <p>Currently pursuing Bachelor of Business Administration</p>
              </div>
            </div>
            <div className="highlight">
              <div className="highlight-icon">🏅</div>
              <div className="highlight-text">
                <h4>Multiple Awards</h4>
                <p>Team won three consecutive BBA awards</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 