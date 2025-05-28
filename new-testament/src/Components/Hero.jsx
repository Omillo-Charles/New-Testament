import React, { useEffect, useState } from 'react';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../assets/Logo.png';

const translations = [
  "WELCOME TO BUSIA POSSIBILITY CENTER.",
  "KARIBU KATIKA KITUO CHA BUSIA POSSIBILITY.",
  "BIENVENUE AU CENTRE DE POSSIBILITÉS DE BUSIA.",
  "WILLKOMMEN IM BUSIA POSSIBILITY CENTER.",
  "BIENVENIDO AL CENTRO DE POSIBILIDADES DE BUSIA.",
  "BENVENUTO AL CENTRO POSSIBILITÀ DI BUSIA."
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });

    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % translations.length);
        setIsTransitioning(false);
      }, 1000); // Match this with the CSS transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <div className='hero'>
      <div className="heroImg" data-aos="fade-down">
        <figure>
          <img src={Logo} alt="BUSIA_POSSIBILITY_CENTER_LOGO" width={200} height={200} />
          <figcaption>
            <div className="message-container">
              <h1 className={`welcome-text ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                {translations[currentIndex]}
              </h1>
            </div>
          </figcaption>
        </figure>
      </div>

      <div className="mission_vision">
        <div className="mission ssion" data-aos="fade-right">
          <h2>
            <i className="bi bi-compass-fill"></i>
            Our Mission
          </h2>
          <p>
            To serve the Busia community with the transformative message of Jesus Christ, 
            nurturing believers through biblical teaching, compassionate service, and 
            fostering a loving community that reflects God's grace in our local context.
          </p>
        </div>

        <div className="vision ssion" data-aos="fade-left">
          <h2>
            <i className="bi bi-eye-fill"></i>
            Our Vision
          </h2>
          <p>
            To be a beacon of hope and transformation in Busia, building a thriving community 
            of believers who are equipped to share God's love, serve our neighbors with 
            compassion, and make a lasting impact in our local community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
