import React from 'react'
import './TheDefault.css'
import Logo from '../assets/Logo.png'

const TheDefault = () => {
  const highlights = [
    {
      icon: "bi bi-people-fill",
      title: "Our Community",
      description: "A vibrant family of believers united in faith and purpose"
    },
    {
      icon: "bi bi-heart-fill",
      title: "Our Mission",
      description: "Spreading God's love through worship, fellowship, and service"
    },
    {
      icon: "bi bi-star-fill",
      title: "Our Vision",
      description: "Building a community where faith transforms lives"
    },
    {
      icon: "bi bi-hand-thumbs-up-fill",
      title: "Our Values",
      description: "Grounded in biblical truth, led by the Holy Spirit"
    }
  ];

  return (
    <div className="default-content">
      <div className="welcome-section">
        <div className="welcome-header">
          <i className="bi bi-church-fill"></i>
          <h1>Welcome to Our Church Community</h1>
          <p>Discover the different ministries and groups that make our church a vibrant place of worship</p>
        </div>

        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="highlight-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <i className={highlight.icon}></i>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="scripture-quote">
          <blockquote>
            <i className="bi bi-quote"></i>
            "Now you are the body of Christ, and each one of you is a part of it." - 1 Corinthians 12:27
          </blockquote>
        </div>

        <div className="call-to-action">
          <p>Explore our different ministries and find your place in our church family</p>
          <div className="action-buttons">
            <button className="action-button">
              <i className="bi bi-arrow-right-circle"></i>
              Choose a Ministry Above
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheDefault
