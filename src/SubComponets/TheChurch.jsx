import React, { useState, useEffect } from "react";
import './TheChurch.css';
import TheDefault from "../Contents/TheDefault";
import Clergy from "../Contents/Clergy";
import Brethren from "../Contents/Brethren";
import Youth from "../Contents/Youth";
import SundaySchool from "../Contents/SundaySchool";
import Store from "../Contents/Store";

const TheChurch = () => {
  const [activeComponent, setActiveComponent] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const menuItems = [
    { 
      id: "one", 
      label: "Clergy", 
      icon: "bi bi-people-fill",
      description: "Meet our dedicated pastoral team and church leaders"
    },
    { 
      id: "two", 
      label: "Brethren", 
      icon: "bi bi-person-hearts",
      description: "Our vibrant community of believers and members"
    },
    { 
      id: "three", 
      label: "The Youth", 
      icon: "bi bi-emoji-smile-fill",
      description: "Empowering the next generation of faithful leaders"
    },
    { 
      id: "four", 
      label: "Sunday School", 
      icon: "bi bi-mortarboard-fill",
      description: "Nurturing young minds in faith and biblical knowledge"
    },
    {
      id: "five",
      label: "Store",
      icon: "bi bi-shop",
      description: "Browse and purchase Christian books, music, and more"
    }
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case "one":
        return <Clergy />;
      case "two":
        return <Brethren />;
      case "three":
        return <Youth />;
      case "four":
        return <SundaySchool />;
      case "five":
        return <Store />;
      default:
        return <TheDefault />;
    }
  };

  return (
    <div className={`the-church-container ${isVisible ? 'visible' : ''}`}>
      <div className="the-church-header">
        <h2 className="the-church-heading">
          <span className="heading-icon">
            <i className="bi bi-building-fill"></i>
          </span>
          The Church
          <div className="heading-line"></div>
        </h2>
        <p className="the-church-subtitle">
          Explore our vibrant community and various ministries
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="the-church-nav-wrapper">
        <div className="the-church-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveComponent(item.id)}
              className={`nav-card ${activeComponent === item.id ? 'active' : ''}`}
            >
              <i className={item.icon}></i>
              <div className="nav-card-content">
                <span className="nav-card-title">{item.label}</span>
                <p className="nav-card-description">{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area with Animation */}
      <div className="the-church-content">
        <div className={`content-wrapper ${activeComponent !== 'default' ? 'active' : ''}`}>
          {renderComponent()}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="decorative-shape shape-1"></div>
      <div className="decorative-shape shape-2"></div>
      <div className="decorative-dots"></div>
    </div>
  );
};

export default TheChurch; 