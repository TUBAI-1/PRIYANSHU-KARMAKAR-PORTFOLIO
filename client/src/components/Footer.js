import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/priyanshu-karmakar-6465262a5",
      color: "#0077b5"
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      url: "mailto:karmakarpriyanshu5@gmail.com",
      color: "#ea4335"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      url: "tel:+917003123815",
      color: "#25d366"
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-logo">Priyanshu Karmakar</h3>
            <p className="footer-description">
              AI Engineering Expert | Pratibha Samman Honoree | Creative Strategist & Problem Solver
            </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--hover-color': link.color }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.icon}
                  <span className="social-label">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4>Expertise</h4>
            <ul className="footer-expertise">
              <li>AI Engineering</li>
              <li>Stock Market Analysis</li>
              <li>Data Analytics</li>
              <li>Business Strategy</li>
              <li>Investment Banking</li>
              <li>Process Automation</li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Contact Info</h4>
            <div className="footer-contact">
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
                <span>LinkedIn Profile</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © {currentYear} Priyanshu Karmakar. All rights reserved. Made with{' '}
              <FaHeart className="heart-icon" /> in India
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 