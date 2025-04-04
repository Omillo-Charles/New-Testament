import React from 'react'
import './Footer.css'

const Footer = () => {
    const yr = new Date().getFullYear()
  return (
    <div className='footer'>
        <p className="quick">
            <h3>Quick Links</h3>
            <ul>
                <li>Our Church</li>
                <li>The Church</li>
                <li>Our Events</li>
            </ul>
        </p>
      <p className='copy'>&copy; {yr}. New Testament. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
