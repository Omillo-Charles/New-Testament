import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const yr = new Date().getFullYear()
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-brand">
          <h2>New Testament</h2>
          <p>Join us in worship and fellowship as we grow together in faith, hope, and love.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to='/ourchurch'>Our Church</NavLink></li>
            <li><NavLink to='/thechurch'>The Church</NavLink></li>
            <li><NavLink to='/events'>Our Events</NavLink></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://x.com/Omillo_Charles" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://facebook.com/OmilloCharles" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com/Omillo.Charles" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@omillo_charles" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-tiktok"></i>
            </a>
            <a href="https://www.youtube.com/@Omillo_Charles" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {yr} New Testament. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
