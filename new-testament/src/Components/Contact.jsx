import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_47iflrc',
      'template_tvo4vqn',
      form.current,
      'Lm9-rCpua-WHLbtvm'
    ).then((result) => {
      setMessage('✅ Message sent successfully!');
      setShowMessage(true);
    }, (error) => {
      setMessage('❌ Message failed to send.');
      setShowMessage(true);
    });

    e.target.reset();

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className='contact'>
      {showMessage && <div className="popup-message">{message}</div>}

      <h2 data-aos="fade-up"><hr />Contact <span>Us</span><hr /></h2>

      <div className="mainContact" data-aos="zoom-in">
        <form className="contactForm" ref={form} onSubmit={sendEmail} data-aos="fade-right">
          <input type="text" placeholder='Your name' name='name' required />
          <input type="email" placeholder='Your email' name='email' required />
          <textarea name="message" id="subject" placeholder='Type here...' required></textarea>
          <input type="submit" value="Message" />
        </form>

        <div className="socialIcons" data-aos="fade-left">
          <div className="location" data-aos="fade-up">
            <h3>Find Us</h3>
            <div className="geo">
              <i className="bi bi-geo-alt-fill"></i><span>00100, Nairobi, Kenya.</span>
            </div>
            <div className="tel">
              <i className="bi bi-telephone-fill"></i><span>+254 700 000 000</span>
            </div>
            <div className="em">
              <i className="bi bi-envelope-fill"></i><span>info@ntcogk.co.ke</span>
            </div>
          </div>

          <div className="social" data-aos="fade-up" data-aos-delay="200">
            <h3>Follow Us</h3>
            <div className="iconsContainer">
              <a href="https://x.com/Omillo_Charles" target='_blank'><i className="bi bi-twitter-x"></i></a>
              <a href="https://facebook.com/OmilloCharles" target='_blank'><i className="bi bi-facebook"></i></a>
              <a href="https://instagram.com/Omillo.Charles" target='_blank'><i className="bi bi-instagram"></i></a>
              <a href="https://www.tiktok.com/@omillo_charles" target='_blank'><i className="bi bi-tiktok"></i></a>
              <a href="https://www.youtube.com/@Omillo_Charles" target='_blank'><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
