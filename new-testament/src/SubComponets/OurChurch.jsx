import React, { useState, useEffect, useRef } from "react";
import History from "../Contents/History";
import Default from "../Contents/Default";
import Store from "../Contents/Store";
import "./OurChurch.css";

const OurChurch = () => {
  const [activeComponent, setActiveComponent] = useState("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    // Initial scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleComponentChange = (componentId) => {
    setIsTransitioning(true);
    
    // Smooth scroll to content area
    const targetOffset = contentRef.current?.offsetTop || 0;
    window.scrollTo({
      top: Math.max(0, targetOffset - 50),
      behavior: 'smooth'
    });

    // Animate component change
    setTimeout(() => {
      setActiveComponent(componentId);
      setIsTransitioning(false);
    }, 300);
  };

  const menuItems = [
    { 
      id: "one", 
      label: "History", 
      icon: "bi bi-clock-history",
      description: "Explore our church's rich heritage and journey of faith"
    },
    { 
      id: "two", 
      label: "Administration", 
      icon: "bi bi-building",
      description: "Learn about our church leadership and organizational structure"
    },
    { 
      id: "three", 
      label: "Constitution", 
      icon: "bi bi-journal-text",
      description: "Understand our church's governing principles and regulations"
    },
    { 
      id: "four", 
      label: "Articles Of Faith", 
      icon: "bi bi-book",
      description: "Discover our fundamental beliefs and doctrinal foundations"
    },
    { 
      id: "five", 
      label: "Store", 
      icon: "bi bi-shop",
      description: "Browse our collection of Christian resources and materials"
    }
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
        return <Default />;
    }
  };

  return (
    <div className={`the-church-container ${isVisible ? 'visible' : ''}`}>
      <div className="the-church-header">
        <h2 className="the-church-heading">
          <span className="heading-icon">
            <i className="bi bi-church"></i>
          </span>
          <span className="heading-text">Our Church</span>
        </h2>
        <div className="heading-line"></div>
        <p className="the-church-subtitle">
          Discover our rich history, leadership, and foundational beliefs
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="the-church-nav-wrapper">
        <div className="the-church-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleComponentChange(item.id)}
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
      <div className="the-church-content" ref={contentRef}>
        <div 
          className={`content-wrapper ${activeComponent !== 'default' ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
          style={{
            minHeight: '400px',
            width: '100%',
            position: 'relative'
          }}
        >
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

export default OurChurch;
