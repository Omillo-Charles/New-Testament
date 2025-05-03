import React from 'react';
import './Youth.css';

const Youth = () => {
  const youthContent = [
    {
      title: "Youth Events",
      icon: "bi bi-calendar-event",
      description: "Regular events and activities designed specifically for our youth",
      items: [
        "Youth Conferences",
        "Worship Nights",
        "Social Gatherings",
        "Outreach Programs"
      ]
    },
    {
      title: "Youth Ministry",
      icon: "bi bi-mic-fill",
      description: "Leadership development and spiritual growth opportunities",
      items: [
        "Leadership Training",
        "Mentorship Program",
        "Bible Study Groups",
        "Service Projects"
      ]
    },
    {
      title: "Talent Development",
      icon: "bi bi-stars",
      description: "Showcasing and developing God-given talents and abilities",
      items: [
        "Music & Arts",
        "Drama & Theatre",
        "Sports & Games",
        "Creative Writing"
      ]
    },
    {
      title: "Community",
      icon: "bi bi-people",
      description: "Building strong relationships and supporting one another",
      items: [
        "Small Groups",
        "Prayer Partners",
        "Social Activities",
        "Support Network"
      ]
    }
  ];

  return (
    <div className="church-content-section youth-section">
      <div className="content-header">
        <i className="bi bi-emoji-smile-fill"></i>
        <h1>The Youth</h1>
        <p>Empowering young people to live boldly for Christ</p>
      </div>

      <div className="content-grid">
        {youthContent.map((section, index) => (
          <div 
            key={index} 
            className="content-card youth-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <i className={section.icon}></i>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <ul className="content-list">
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

      <div className="youth-quote">
        <blockquote>
          <i className="bi bi-quote"></i>
          "Don't let anyone look down on you because you are young, but set an example for the believers." - 1 Timothy 4:12
        </blockquote>
      </div>
    </div>
  );
};

export default Youth; 