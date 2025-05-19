import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Busia Possibility Center</h3>
          <p>Join us in our mission to spread hope and transform lives in Busia through faith, community, and service.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>
              <i className="bi bi-geo-alt"></i>
              <span>Busia Town, Kenya</span>
            </li>
            <li>
              <i className="bi bi-telephone"></i>
              <span>+254 7XX XXX XXX</span>
            </li>
            <li>
              <i className="bi bi-envelope"></i>
              <span>info@busiapossibilitycenter.org</span>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com/busiapossibilitycenter" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com/busiapossibilitycenter" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://youtube.com/@busiapossibilitycenter" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Busia Possibility Center. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
