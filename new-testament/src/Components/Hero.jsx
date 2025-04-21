import React, { useEffect } from 'react';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../assets/Logo.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className='hero'>
      <div className="heroImg" data-aos="fade-down">
        <figure>
          <img src={Logo} alt="NT_LOGO" width={200} height={200} />
          <figcaption>
            <h1 className="typewriter">WELCOME TO NEW TESTAMENT CHURCH OF GOD KENYA.</h1>
          </figcaption>
        </figure>
      </div>

      <div className="mission_vision">
        <div className="mission ssion" data-aos="fade-right">
          <h2>Our Mission:</h2>
          <p>To reach the world with the gospel of Jesus Christ, and to establish them in the faith.</p>
        </div>

        <div className="vision ssion" data-aos="fade-left">
          <h2>Our Vision:</h2>
          <p>To be a church that is committed to reaching the world with the gospel of Jesus Christ.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
