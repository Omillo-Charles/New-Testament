import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: 'bi-house-fill', label: 'Home' },
    { path: '/events', icon: 'bi-calendar-event-fill', label: 'Events' },
    { path: '/ourchurch', icon: 'bi-building-fill', label: 'Church' },
    { path: '/contact', icon: 'bi-person-lines-fill', label: 'Contact' }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map(({ path, icon, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <i className={`bi ${icon}`} />
          <span>{label}</span>
          <div className="nav-indicator" />
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav; 