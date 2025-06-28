import React from 'react';
import { motion } from 'framer-motion';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import './Dashboard.css';

const Dashboard = () => {
  const sections = [
    { id: 'home', component: Home, title: 'Home', showTitle: false },
    { id: 'about', component: About, title: 'About', showTitle: true },
    { id: 'experience', component: Experience, title: 'Experience', showTitle: true },
    { id: 'education', component: Education, title: 'Education', showTitle: true },
    { id: 'skills', component: Skills, title: 'Skills', showTitle: true },
    { id: 'contact', component: Contact, title: 'Contact', showTitle: true }
  ];

  return (
    <div className="dashboard">
      {/* Main Content */}
      <div className="dashboard-content">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            id={section.id}
            className="dashboard-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-container">
              {section.showTitle && (
                <motion.h2
                  className="section-title"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {section.title}
                </motion.h2>
              )}
              <div className="section-content">
                <section.component />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard; 