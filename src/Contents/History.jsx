import React from 'react';
import './History.css';

const History = () => {
  const historyContent = [
    {
      title: "Our Beginnings",
      icon: "bi bi-hourglass-split",
      description: "The foundation and early years of our church",
      items: [
        "Founded in 1886",
        "First congregation of 8 members",
        "Initial worship gatherings",
        "First church building"
      ]
    },
    {
      title: "Growth & Development",
      icon: "bi bi-graph-up",
      description: "Key milestones in our church's expansion",
      items: [
        "Community outreach programs",
        "Ministry expansions",
        "Building developments",
        "Membership growth"
      ]
    },
    {
      title: "Global Impact",
      icon: "bi bi-globe",
      description: "Our church's worldwide influence and missions",
      items: [
        "International missions",
        "Sister churches worldwide",
        "Global partnerships",
        "Mission achievements"
      ]
    },
    {
      title: "Modern Era",
      icon: "bi bi-calendar4-event",
      description: "Recent developments and future vision",
      items: [
        "Digital ministry",
        "Community programs",
        "Youth initiatives",
        "Future plans"
      ]
    }
  ];

  return (
    <div className="church-content-section history-section">
      <div className="content-header">
        <i className="bi bi-clock-history"></i>
        <h1>Our History</h1>
        <p>Celebrating our journey of faith through the years</p>
      </div>

      <div className="content-grid">
        {historyContent.map((section, index) => (
          <div key={index} className="history-card">
            <div className="card-header">
              <i className={section.icon}></i>
              <h3>{section.title}</h3>
            </div>
            <p className="card-description">{section.description}</p>
            <ul className="history-list">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <i className="bi bi-check-circle"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="scripture-quote">
        <blockquote>
          <i className="bi bi-quote"></i>
          "Remember the days of old; consider the generations long past." - Deuteronomy 32:7
        </blockquote>
      </div>
    </div>
  );
};

export default History; 