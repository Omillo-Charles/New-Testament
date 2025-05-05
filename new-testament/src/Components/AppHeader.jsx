import React from 'react';
import { useLocation } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => {
  const location = useLocation();
  
  // Get page title based on current route
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/events':
        return 'Events';
      case '/ourchurch':
        return 'Our Church';
      case '/contact':
        return 'Contact';
      default:
        return 'NT Church';
    }
  };

  return (
    <header className="app-header">
      <div className="status-bar" />
      <div className="header-content">
        <h1>{getPageTitle()}</h1>
        <div className="header-actions">
          <button className="action-button">
            <i className="bi bi-search"></i>
          </button>
          <button className="action-button">
            <i className="bi bi-gear-fill"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader; 