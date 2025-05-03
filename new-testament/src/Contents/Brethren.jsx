import React from 'react';
import './Brethren.css';

const Brethren = () => {
  const brethrenContent = [
    {
      title: "Fellowship Groups",
      icon: "bi bi-people-fill",
      description: "Join our weekly fellowship groups for spiritual growth and community bonding",
      items: [
        "Men's Fellowship",
        "Women's Fellowship",
        "Couples Ministry",
        "Home Cell Groups"
      ]
    },
    {
      title: "Worship Team",
      icon: "bi bi-music-note-beamed",
      description: "Experience the power of worship with our dedicated praise and worship team",
      items: [
        "Choir",
        "Instruments",
        "Worship Leaders",
        "Technical Team"
      ]
    },
    {
      title: "Care Ministry",
      icon: "bi bi-heart-fill",
      description: "Supporting and caring for our church family through prayer and assistance",
      items: [
        "Prayer Warriors",
        "Visitation Team",
        "Counseling Services",
        "Support Groups"
      ]
    },
    {
      title: "Bible Study",
      icon: "bi bi-book-half",
      description: "Deepen your understanding of God's word through our Bible study programs",
      items: [
        "Weekly Bible Study",
        "Discipleship Classes",
        "Leadership Training",
        "Theological Studies"
      ]
    }
  ];

  return (
    <div className="church-content-section brethren-section">
      <div className="content-header">
        <i className="bi bi-person-hearts"></i>
        <h1>Our Brethren</h1>
        <p>United in faith, growing together in Christ</p>
      </div>

      <div className="content-grid">
        {brethrenContent.map((section, index) => (
          <div 
            key={index} 
            className="content-card brethren-card"
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

      <div className="brethren-quote">
        <blockquote>
          <i className="bi bi-quote"></i>
          "For where two or three gather in my name, there am I with them." - Matthew 18:20
        </blockquote>
      </div>
    </div>
  );
};

export default Brethren; 