import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChartLine, FaDatabase, FaChartBar, FaCode, FaRocket } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodejs, SiMongodb, SiExpress, SiGit, SiDocker, SiAws } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const topSkills = [
    {
      name: "Stock Market Analysis",
      icon: <FaChartLine />,
      level: 95,
      description: "Advanced analysis of market trends, technical indicators, and investment strategies"
    },
    {
      name: "Stock Management",
      icon: <FaDatabase />,
      level: 90,
      description: "Portfolio management, risk assessment, and strategic investment planning"
    },
    {
      name: "Stock Market",
      icon: <FaChartBar />,
      level: 88,
      description: "Comprehensive understanding of market dynamics and trading methodologies"
    }
  ];

  const technicalSkills = [
    { name: "AI Engineering", level: 85, category: "Technology" },
    { name: "Machine Learning", level: 80, category: "Technology" },
    { name: "Data Analysis", level: 85, category: "Analytics" },
    { name: "Data Visualization", level: 80, category: "Analytics" },
    { name: "Business Strategy", level: 90, category: "Business" },
    { name: "Financial Modeling", level: 85, category: "Finance" },
    { name: "Investment Banking", level: 80, category: "Finance" },
    { name: "Process Automation", level: 75, category: "Technology" },
    { name: "Statistical Analysis", level: 85, category: "Analytics" },
    { name: "Project Management", level: 80, category: "Business" }
  ];

  const skillCategories = {
    Technology: technicalSkills.filter(skill => skill.category === "Technology"),
    Analytics: technicalSkills.filter(skill => skill.category === "Analytics"),
    Business: technicalSkills.filter(skill => skill.category === "Business"),
    Finance: technicalSkills.filter(skill => skill.category === "Finance")
  };

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle">
            My expertise spans across AI engineering, financial analysis, and business strategy, creating a unique blend of technical and analytical capabilities.
          </p>
        </motion.div>

        <motion.div
          className="top-skills"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="skills-subtitle">Top Skills</h3>
          <div className="top-skills-grid">
            {topSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="top-skill-card glass"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-level">
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    ></motion.div>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="technical-skills"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="skills-subtitle">Technical Expertise</h3>
          <div className="skills-categories">
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                className="skill-category glass"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + categoryIndex * 0.1 }}
              >
                <h4 className="category-title">
                  {category === "Technology" && <FaCode />}
                  {category === "Analytics" && <FaChartBar />}
                  {category === "Business" && <FaRocket />}
                  {category === "Finance" && <FaChartLine />}
                  {category}
                </h4>
                <div className="category-skills">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="skill-info">
                        <span className="skill-label">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-small">
                        <motion.div
                          className="skill-progress-small"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 0.8, delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skills-summary glass"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3>Skills Overview</h3>
          <div className="skills-overview">
            <div className="overview-item">
              <div className="overview-number">13</div>
              <div className="overview-label">Total Skills</div>
            </div>
            <div className="overview-item">
              <div className="overview-number">4</div>
              <div className="overview-label">Categories</div>
            </div>
            <div className="overview-item">
              <div className="overview-number">85%</div>
              <div className="overview-label">Average Proficiency</div>
            </div>
            <div className="overview-item">
              <div className="overview-number">3+</div>
              <div className="overview-label">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 