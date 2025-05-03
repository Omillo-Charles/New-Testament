import React, { useState, useEffect } from "react";
import History from "../Contents/History";
import TheDefault from "../Contents/TheDefault";
import Store from "../Contents/Store";
import "./OurChurch.css";

const OurChurch = () => {
  const [activeComponent, setActiveComponent] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const menuItems = [
    { id: "one", label: "History", icon: "bi bi-clock-history" },
    { id: "two", label: "Administration", icon: "bi bi-building" },
    { id: "three", label: "Constitution", icon: "bi bi-journal-text" },
    { id: "four", label: "Articles Of Faith", icon: "bi bi-book" },
    { id: "five", label: "Store", icon: "bi bi-shop" }
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case "one":
        return <History />;
      case "two":
        return (
          <div className="placeholder-content">
            <i className="bi bi-building-fill"></i>
            <h1>Church Administration</h1>
            <p>Information about church leadership and organizational structure.</p>
          </div>
        );
      case "three":
        return (
          <div className="placeholder-content">
            <i className="bi bi-journal-text"></i>
            <h1>Church Constitution</h1>
            <p>Our church's governing principles and regulations.</p>
          </div>
        );
      case "four":
        return (
          <div className="placeholder-content">
            <i className="bi bi-book-fill"></i>
            <h1>Articles Of Faith</h1>
            <p>The fundamental beliefs and doctrines of our church.</p>
          </div>
        );
      case "five":
        return <Store />;
      default:
        return <TheDefault />;
    }
  };

  return (
    <div className={`our-church-container ${isVisible ? 'visible' : ''}`}>
      <div className="our-church-header">
        <h2 className="our-church-heading">
          <span className="heading-icon">
            <i className="bi bi-church"></i>
          </span>
          Our Church
          <div className="heading-line"></div>
        </h2>
        <p className="our-church-subtitle">
          Discover our rich history, leadership, and foundational beliefs
        </p>
      </div>

      {/* Modern Navigation Menu */}
      <div className="our-church-nav-wrapper">
        <div className="our-church-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveComponent(item.id)}
              className={activeComponent === item.id ? 'active' : ''}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area with Animation */}
      <div className="our-church-content">
        <div className={`content-wrapper ${activeComponent !== 'default' ? 'active' : ''}`}>
          {renderComponent()}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
    </div>
  );
};

export default OurChurch; 