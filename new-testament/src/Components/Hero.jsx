import React, { useEffect, useState } from 'react';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../assets/Logo.png';

const translations = [
  "WELCOME TO NEW TESTAMENT CHURCH OF GOD KENYA.",
  "KARIBU KANISA LA MUNGU AGANO JIPYA KENYA.",
  "BIENVENUE À L'ÉGLISE DE DIEU DU NOUVEAU TESTAMENT KENYA.",
  "WILLKOMMEN IN DER NEUTESTAMENTLICHEN KIRCHE GOTTES KENIA.",
  "BIENVENIDO A LA IGLESIA DEL NUEVO TESTAMENTO DE DIOS KENIA.",
  "BENVENUTO NELLA CHIESA DI DIO DEL NUOVO TESTAMENTO KENYA."
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
          <img src={Logo} alt="NT_LOGO" width={200} height={200} />
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
            To reach the world with the transformative message of Jesus Christ, establishing 
            believers in faith through biblical teaching, compassionate service, and fostering 
            a loving community that reflects God's grace.
          </p>
        </div>

        <div className="vision ssion" data-aos="fade-left">
          <h2>
            <i className="bi bi-eye-fill"></i>
            Our Vision
          </h2>
          <p>
            To be a beacon of hope and transformation, nurturing a thriving community of 
            believers who are equipped to share God's love, serve others with compassion, 
            and make a lasting impact in our world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
