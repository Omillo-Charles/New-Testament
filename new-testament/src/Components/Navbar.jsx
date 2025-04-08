import React from 'react'
import { NavLink } from 'react-router-dom'
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
           <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
