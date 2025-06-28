import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEllipsisV, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          onClick={() => scrollToSection('home')}
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div>
            PK
          </div>
        </motion.div>

        <div className="nav-menu-container">
          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <button
                key={item.name}
                className="nav-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <motion.div 
            className="nav-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes /> : <FaEllipsisV />}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 