import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const yr = new Date().getFullYear()
  return (
    <div className='footer'>
        <p className="quick">
            <h3>Quick Links</h3>
            <ul>
                <NavLink to='/ourchurch'><li>Our Church</li></NavLink>
                <NavLink to='/thechurch'><li>The Church</li></NavLink>
                <NavLink to='events'><li>Our Events</li></NavLink>
            </ul>
        </p>
      <p className='copy'>&copy; {yr}. New Testament. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
