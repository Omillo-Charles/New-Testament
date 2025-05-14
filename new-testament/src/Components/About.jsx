import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const aboutContent = [
    {
      icon: "bi bi-clock-history",
      title: "Our History",
      description: "Founded in 1886 with just 8 men, our church has grown into a global community of believers, celebrating 40 years of ministry in Kenya."
    },
    {
      icon: "bi bi-book-fill",
      title: "Our Faith",
      description: "Built on sound biblical doctrine and practical commitment, we maintain a strong foundation of faith and unity in Christ."
    },
    {
      icon: "bi bi-people-fill",
      title: "Our Community",
      description: "A diverse family of believers united in love, care, and faith, supporting one another in our spiritual journey."
    }
  ];

  return (
    <div className='about'>
      <div className="about-header" data-aos="fade-up">
        <h2>
          <hr />
          <span className="about-title">About <span className="highlight">Us</span></span>
          <hr />
        </h2>
        <p className="about-subtitle">Discover our story, our faith, and our mission</p>
      </div>

      <div className="about-content">
        <div className="about-grid">
          {aboutContent.map((item, index) => (
            <div 
              key={index} 
              className="about-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="about-text" data-aos="fade-up">
          <p>
            The Church of God began in 1886 with only 8 men and now the church is all over the world.
            Looking back where we have come from, we cannot be silent to thank God for this far as we
            celebrate 40 years since we were established in Kenya.
          </p>
          <p>
            The church is built on a very sound declaration of faith, the best doctrinal and practical
            commitment. The church administrative structure has made its growth with emphasis on unity,
            love, care and great faith in the biblical principles. This historical book is versioned by
            the current Seventy National Administrative Bishop Dr. David Gilbert Bwire.
          </p>
        </div>

        <div className="about-actions" data-aos="fade-up">
          <NavLink to='/ourchurch' className="about-button">
            <i className="bi bi-book"></i>
            <span>Learn More</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
