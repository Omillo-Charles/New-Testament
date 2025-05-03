import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Favicon from '../assets/Favicon.png'
import Settings from './Settings'

const Navbar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <>
      <div className='navbar'>
        <div className="heading">
          <h2 className='PC'>NEW-TESTAMENT</h2>
          <h2 className="mobile">
            <img src={Favicon} alt="Favicon" />
          </h2>
        </div>

        <div className="navLinks">
          <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
          </ul>
        </div>

        <button 
          className="settings-button"
          onClick={() => setIsSettingsOpen(true)}
        >
          <i className="bi bi-gear-fill"></i>
        </button>
      </div>

      <Settings 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </>
  )
}

export default Navbar
