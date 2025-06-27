'use client';

import React from 'react';

const navItems = [
  { label: 'Home', href: '#summary' },
  { label: 'About', href: '#contact' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
];

export default function Navbar() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav-3d">
      <div className="container">
        <div className="nav-logo" style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '0.02em' }}>
          Priyanshu Karmakar
        </div>
        <div className="nav-links">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
} 