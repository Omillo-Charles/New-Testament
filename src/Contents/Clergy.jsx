import React from 'react';
import './Clergy.css';

const Clergy = () => {
  const clergyContent = [
    {
      title: "Pastoral Leadership",
      icon: "bi bi-person-badge-fill",
      description: "Our dedicated team of pastors and spiritual leaders",
      items: [
        "Senior Pastor & First Lady",
        "Associate Pastors",
        "Ministry Leaders",
        "Pastoral Care Team"
      ]
    },
    {
      title: "Ministry Departments",
      icon: "bi bi-diagram-3-fill",
      description: "Specialized ministries serving our congregation",
      items: [
        "Worship Ministry",
        "Children's Ministry",
        "Youth Ministry",
        "Outreach Programs"
      ]
    },
    {
      title: "Pastoral Meetings",
      icon: "bi bi-calendar-event-fill",
      description: "Regular gatherings for spiritual growth and planning",
      items: [
        "Weekly Staff Meetings",
        "Monthly Leadership Forum",
        "Quarterly Planning Sessions",
        "Annual Pastoral Retreat"
      ]
    },
    {
      title: "Reports & Documentation",
      icon: "bi bi-file-earmark-text-fill",
      description: "Maintaining transparency and accountability",
      items: [
        "Ministry Reports",
        "Financial Statements",
        "Growth Metrics",
        "Community Impact"
      ]
    }
  ];

  return (
    <div className="church-content-section clergy-section">
      <div className="content-header">
        <i className="bi bi-people-fill"></i>
        <h1>Our Clergy</h1>
        <p>Dedicated to serving God and our community</p>
      </div>

      <div className="content-grid">
        {clergyContent.map((section, index) => (
          <div 
            key={index} 
            className="content-card clergy-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <i className={section.icon}></i>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <ul className="clergy-list">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <i className="bi bi-check-circle-fill"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="clergy-quote">
        <blockquote>
          <i className="bi bi-quote"></i>
          "Serving the Lord with gladness, and leading His people with love and wisdom."
        </blockquote>
      </div>
    </div>
  );
};

export default Clergy; 