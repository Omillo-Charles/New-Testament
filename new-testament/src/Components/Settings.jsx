import React, { useState, useEffect } from 'react';
import './Settings.css';

const Settings = ({ isOpen, onClose }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [fontSize, setFontSize] = useState('normal');
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(true);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Load saved preferences
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedFontSize = localStorage.getItem('fontSize') || 'normal';
    const savedAnimations = localStorage.getItem('animations') !== 'false';
    const savedLanguage = localStorage.getItem('language') || 'en';

    // Set dark mode as default if no preference is saved
    const darkModePreference = savedDarkMode === null ? true : savedDarkMode === 'true';
    setIsDarkMode(darkModePreference);
    setFontSize(savedFontSize);
    setIsAnimationsEnabled(savedAnimations);
    setLanguage(savedLanguage);

    // Apply dark mode
    document.documentElement.setAttribute('data-theme', darkModePreference ? 'dark' : 'light');
    
    // Save dark mode preference if it wasn't set before
    if (savedDarkMode === null) {
      localStorage.setItem('darkMode', 'true');
    }
  }, []);

  const handleDarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'light');
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    document.documentElement.setAttribute('data-font-size', size);
  };

  const handleAnimationsToggle = () => {
    const newAnimationsState = !isAnimationsEnabled;
    setIsAnimationsEnabled(newAnimationsState);
    localStorage.setItem('animations', newAnimationsState);
    document.documentElement.setAttribute('data-animations', newAnimationsState ? 'enabled' : 'disabled');
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    // Here you would typically trigger your translation system
  };

  if (!isOpen) return null;

  return (
    <div className="settings-overlay">
      <div className="settings-panel">
        <div className="settings-header">
          <h2>
            <i className="bi bi-gear-fill"></i>
            Settings
          </h2>
          <button className="close-button" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="settings-content">
          <div className="settings-section">
            <h3>Appearance</h3>
            
            <div className="setting-item">
              <div className="setting-label">
                <i className="bi bi-moon-stars-fill"></i>
                <span>Dark Mode</span>
              </div>
              <button 
                className={`toggle-button ${isDarkMode ? 'active' : ''}`}
                onClick={handleDarkModeToggle}
              >
                <span className="toggle-slider"></span>
              </button>
            </div>

            <div className="setting-item">
              <div className="setting-label">
                <i className="bi bi-type"></i>
                <span>Font Size</span>
              </div>
              <div className="font-size-buttons">
                <button 
                  className={fontSize === 'small' ? 'active' : ''} 
                  onClick={() => handleFontSizeChange('small')}
                >A</button>
                <button 
                  className={fontSize === 'normal' ? 'active' : ''} 
                  onClick={() => handleFontSizeChange('normal')}
                >A</button>
                <button 
                  className={fontSize === 'large' ? 'active' : ''} 
                  onClick={() => handleFontSizeChange('large')}
                >A</button>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-label">
                <i className="bi bi-magic"></i>
                <span>Animations</span>
              </div>
              <button 
                className={`toggle-button ${isAnimationsEnabled ? 'active' : ''}`}
                onClick={handleAnimationsToggle}
              >
                <span className="toggle-slider"></span>
              </button>
            </div>
          </div>

          <div className="settings-section">
            <h3>Language</h3>
            <div className="setting-item">
              <div className="setting-label">
                <i className="bi bi-translate"></i>
                <span>Select Language</span>
              </div>
              <select 
                value={language} 
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="language-select"
              >
                <option value="en">English</option>
                <option value="sw">Swahili</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 