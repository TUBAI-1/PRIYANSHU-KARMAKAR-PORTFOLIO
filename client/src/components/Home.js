import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home-content">
          <motion.div
            className="home-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="home-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              CRAFTING DIGITAL SOLUTIONS SINCE — Y:2021
            </motion.p>
            
            <motion.h1
              className="home-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              PRIYANSHU
              <br />
              KARMAKAR
            </motion.h1>
            
            <motion.p
              className="home-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I'm Priyanshu Karmakar — an AI Engineering Expert passionately creating innovative solutions and digital experiences for over 3 years
            </motion.p>

            <motion.div
              className="home-tags"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="tag">AI Engineering Expert</span>
              <span className="tag">Pratibha Samman Honoree</span>
              <span className="tag">Creative Strategist</span>
              <span className="tag">Problem Solver</span>
            </motion.div>

            <motion.div
              className="home-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
                Get In Touch
              </button>
              <button onClick={() => scrollToSection('about')} className="btn btn-secondary">
                Learn More
              </button>
            </motion.div>

            <motion.div
              className="home-contact-info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="contact-item">
                <FaPhone />
                <span>+91 7003123815</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>karmakarpriyanshu5@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaLinkedin />
                <a 
                  href="https://www.linkedin.com/in/priyanshu-karmakar-6465262a5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="home-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="hero-image">
              <div className="gradient-circle"></div>
              <div className="floating-elements">
                <div className="element element-1">AI</div>
                <div className="element element-2">ML</div>
                <div className="element element-3">Data</div>
                <div className="element element-4">Analytics</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={() => scrollToSection('about')}
        >
          <FaArrowDown />
          <span>Scroll</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 