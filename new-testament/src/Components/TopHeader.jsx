import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './TopHeader.css';

const TopHeader = () => {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const navItems = [
    { path: '/', icon: 'bi-house', label: 'Home' },
    { path: '/about', icon: 'bi-info-circle', label: 'About Us' },
    { path: '/contact', icon: 'bi-telephone', label: 'Contact' }
  ];

  const handleThemeClick = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    setIsThemeMenuOpen(false);
  };

  // Apply theme on initial load
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, []);

  // Close theme menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isThemeMenuOpen && !event.target.closest('.theme-container')) {
        setIsThemeMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isThemeMenuOpen]);

  return (
    <header className="top-header">
      <div className="logo">
        <i className="bi bi-church"></i>
        <span>Busia Possibility Center</span>
      </div>
      <nav className="desktop-nav">
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="theme-container">
        <button 
          className="theme-button" 
          aria-label="Theme Toggle"
          onClick={handleThemeClick}
        >
          <i className="bi bi-list"></i>
        </button>
        {isThemeMenuOpen && (
          <div className="theme-menu">
            <button 
              className="theme-item"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <i className={`bi ${isDarkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default TopHeader; 