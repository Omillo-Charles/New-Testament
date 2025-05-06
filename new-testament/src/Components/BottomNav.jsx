import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
  const navItems = [
    { path: '/', icon: 'bi-house', label: 'Home' },
    { path: '/events', icon: 'bi-calendar-event', label: 'Events' },
    { path: '/ourchurch', icon: 'bi-building', label: 'Church' },
    { path: '/thechurch', icon: 'bi-people', label: 'Community' }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map(({ path, icon, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          aria-label={label}
        >
          <i className={`bi ${icon}`} />
          <span className="nav-label">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav; 