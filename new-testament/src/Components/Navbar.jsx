import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="heading">
        <h2 className='PC'>NEW-TESTAMENT</h2>
        <h2 className="mobile">NT</h2>
      </div>

      <div className="navLinks">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><i class="bi bi-list"></i></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
