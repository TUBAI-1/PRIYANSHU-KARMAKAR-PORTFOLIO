import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAward, FaGraduationCap, FaLightbulb, FaChartLine } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { number: "3+", label: "Years Experience", icon: <FaChartLine /> },
    { number: "10+", label: "Projects Completed", icon: <FaLightbulb /> },
    { number: "5+", label: "Awards Won", icon: <FaAward /> },
    { number: "3", label: "Certifications", icon: <FaGraduationCap /> }
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">
            My passion lies in the intersection of AI technology and business strategy, creating innovative solutions that drive organizational success.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-section">
              <h3>Education & Academic Excellence</h3>
              <p>
                I am a results-driven individual with a proven track record of academic and professional success. 
                I completed my Secondary and Higher Secondary education from Oriental Public School, achieving 
                the honor of being a school topper. Currently, I am pursuing a Bachelor of Business Administration 
                (BBA) at JIS College of Engineering, where I am honing my skills in business strategy, management, 
                and innovation.
              </p>
            </div>

            <div className="about-section">
              <h3>Awards & Recognition</h3>
              <ul>
                <li>
                  <strong>Pratibha Samman Award:</strong> Honored with the prestigious award by Prabhat Khabar 
                  for my exceptional achievements.
                </li>
                <li>
                  <strong>BBA Team Achievements:</strong> As part of my BBA journey, my team has won three 
                  consecutive awards, including:
                  <ul>
                    <li>Best Innovative Project</li>
                    <li>Best Innovation</li>
                    <li>Best Logo Design</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="about-section">
              <h3>AI Engineering Expertise</h3>
              <p>
                I have professionally mastered AI Engineering using advanced AI tools, enabling me to design 
                and implement innovative, data-driven solutions. This expertise combines seamlessly with my 
                business education to create impactful strategies and drive organizational success.
              </p>
            </div>

            <div className="about-section">
              <h3>Passion & Career Aspirations</h3>
              <p>
                I am passionate about leveraging my business knowledge and AI expertise to contribute to 
                transformative projects and innovative solutions. My goal is to work with dynamic organizations 
                where I can apply my skills, adapt to challenges, and deliver measurable results.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card glass"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="why-connect glass">
              <h3>Why Connect With Me?</h3>
              <ul>
                <li>Academic excellence as a school topper and award recipient</li>
                <li>Unique expertise at the intersection of business and AI</li>
                <li>Proven leadership and innovative thinking through award-winning projects</li>
                <li>A commitment to excellence and growth in every endeavor</li>
              </ul>
              <p className="connect-cta">
                Let's connect and collaborate to shape a better future with innovation and dedication!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 