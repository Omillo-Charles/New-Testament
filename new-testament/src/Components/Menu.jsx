import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Events from '../assets/Events.jpg';
import OurChurch from '../assets/OurChurch.jpg';
import TheChurch from '../assets/TheChurch.jpg';
import './Menu.css';

const Menu = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='menu'>
      <NavLink to='/ourchurch'>
        <div className="ourChurch" data-aos="fade-right">
          <img src={OurChurch} alt="Our Church" width={450} height={200} />
          <div className="OurChurchheading">
            <h2>OUR CHURCH</h2>
          </div>
        </div>
      </NavLink>

      <NavLink to='/thechurch'>
        <div className="theChurch" data-aos="fade-left">
          <img src={TheChurch} alt="The Church" width={450} height={200} />
          <div className="TheChurchheading">
            <h2>THE CHURCH</h2>
          </div>
        </div>
      </NavLink>

      <NavLink to='/events'>
        <div className="events" data-aos="fade-right">
          <img src={Events} alt="Events" width={450} height={200} />
          <div className="Eventsheading">
            <h2>EVENTS</h2>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Menu;
