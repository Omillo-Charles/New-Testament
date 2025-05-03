import React from 'react';
import './SundaySchool.css';

const SundaySchool = () => {
  const sundaySchoolContent = [
    {
      title: "Bible Education",
      icon: "bi bi-book",
      description: "Age-appropriate Bible teaching and spiritual education",
      items: [
        "Bible Stories",
        "Memory Verses",
        "Interactive Lessons",
        "Faith Foundations"
      ]
    },
    {
      title: "Creative Learning",
      icon: "bi bi-palette-fill",
      description: "Fun and engaging activities that reinforce biblical teachings",
      items: [
        "Arts & Crafts",
        "Music & Dance",
        "Drama & Skits",
        "Games & Activities"
      ]
    },
    {
      title: "Worship & Praise",
      icon: "bi bi-music-note",
      description: "Teaching children to worship God through music and performance",
      items: [
        "Children's Choir",
        "Action Songs",
        "Musical Training",
        "Special Programs"
      ]
    },
    {
      title: "Growth & Recognition",
      icon: "bi bi-trophy-fill",
      description: "Celebrating spiritual growth and learning achievements",
      items: [
        "Achievement Awards",
        "Progress Tracking",
        "Special Events",
        "Graduation Ceremony"
      ]
    }
  ];

  return (
    <div className="church-content-section sunday-school-section">
      <div className="content-header">
        <i className="bi bi-mortarboard-fill"></i>
        <h1>Sunday School</h1>
        <p>Building a strong foundation in faith for our children</p>
      </div>

      <div className="content-grid">
        {sundaySchoolContent.map((section, index) => (
          <div 
            key={index} 
            className="content-card sunday-school-card"
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

      <div className="sunday-school-quote">
        <blockquote>
          <i className="bi bi-quote"></i>
          "Train up a child in the way he should go, and when he is old he will not depart from it." - Proverbs 22:6
        </blockquote>
      </div>
    </div>
  );
};

export default SundaySchool; 