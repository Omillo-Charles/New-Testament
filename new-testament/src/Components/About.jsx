import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className='about'>
      <h2>
        <hr />
        <p className="abtText" data-aos="zoom-in">
          About <span>Us</span>
        </p>
        <hr />
      </h2>

      <div className="text" data-aos="fade-up">
        <p>
          The Church of God began in 1886 with only 8 men and now the church is all over the world.
          Looking back where we have come from, we cannot be silent to thank God for this far as we
          celebrate 40 years since we were established in Kenya. <br /><br />
          The church is built on a very sound declaration of faith, the best doctrinal and practical
          commitment. The church administrative structure has made its growth with emphasis on unity,
          love, care and great faith in the biblical principles. This historical book is versioned by
          the current Seventy National Administrative Bishop Dr. David Gilbert Bwire...
        </p>
      </div>

      <div className="more">
        <NavLink to='/ourchurch' data-aos="fade-right">
          <i>Find more</i>
        </NavLink>
        <NavLink to='/ourchurch' data-aos="fade-left">
          <i>Read more</i>
        </NavLink>
      </div>
    </div>
  );
};

export default About;
