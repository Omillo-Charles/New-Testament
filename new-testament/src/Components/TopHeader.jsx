import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './TopHeader.css';

const TopHeader = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage and system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const navItems = [
    { path: '/', icon: 'bi-house', label: 'Home' },
    { path: '/events', icon: 'bi-calendar-event', label: 'Events' },
    { path: '/ourchurch', icon: 'bi-building', label: 'Church' },
    { path: '/thechurch', icon: 'bi-people', label: 'Community' }
  ];

  useEffect(() => {
    // Update document root class and localStorage when dark mode changes
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setIsSettingsOpen(false); // Close menu after toggling
  };

  // Close settings menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSettingsOpen && !event.target.closest('.settings-container')) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isSettingsOpen]);

  return (
    <header className="top-header">
      <div className="logo">
        <i className="bi bi-church"></i>
        <span>New Testament</span>
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
      <div className="settings-container">
        <button 
          className="settings-button" 
          aria-label="Settings"
          onClick={handleSettingsClick}
        >
          <i className="bi bi-gear-fill"></i>
        </button>
        {isSettingsOpen && (
          <div className="settings-menu">
            <a href="#" className="settings-item">
              <i className="bi bi-person-circle"></i>
              Profile
            </a>
            <button onClick={toggleDarkMode} className="settings-item">
              <i className={`bi ${isDarkMode ? 'bi-sun' : 'bi-moon'}`}></i>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a href="#" className="settings-item">
              <i className="bi bi-box-arrow-right"></i>
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default TopHeader; 