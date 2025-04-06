import React from 'react'
import { NavLink } from 'react-router-dom'
import Events from '../assets/Events.jpg'
import OurChurch from '../assets/OurChurch.jpg'
import TheChurch from '../assets/TheChurch.jpg'
import './Menu.css'

const Menu = () => {
  return (
    <div className='menu'>
      <NavLink to='/ourchurch'>
      <div className="ourChurch">
        <img src={OurChurch} alt="" width={450} height={200} />
        <div className="OurChurchheading">
            <h2>OUR CHURCH</h2>
        </div>
      </div>
      </NavLink>

      <NavLink to='/thechurch'>
      <div className="theChurch">
      <img src={TheChurch} alt="" width={450} height={200}/>
        <div className="TheChurchheading">
            <h2>THE CHURCH</h2>
        </div>
      </div>
      </NavLink>

      <NavLink to='/events'>
      <div className="events">
        <img src={Events} alt="" width={450} height={200} />
            <div className="Eventsheading">
                <h2>EVENTS</h2>
            </div>
      </div>
      </NavLink>
    </div>
  )
}

export default Menu
