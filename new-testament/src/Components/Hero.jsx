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
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    if (charIndex < translations[currentIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + translations[currentIndex].charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setDisplayText('');
          setCharIndex(0);
          setCurrentIndex((prev) => (prev + 1) % translations.length);
          setIsFading(false);
        }, 500); // Fade out before resetting
      }, 2500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, currentIndex]);

  return (
    <div className='hero'>
      <div className="heroImg" data-aos="fade-down">
        <figure>
          <img src={Logo} alt="NT_LOGO" width={200} height={200} />
          <figcaption>
            <h1 className={`typewriter ${isFading ? 'fade-out' : 'fade-in'}`}>
              {displayText}
            </h1>
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
