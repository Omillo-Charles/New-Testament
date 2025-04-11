import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <h2><hr />Contact <span>Us</span><hr /></h2>
        <div className="mainContact">

         <form action="#" className="contactForm">
            <input type="text" placeholder='Your name' name='name' />
            <input type="email" placeholder='Your email' name='email' />
            <textarea name="subject" id="subject" placeholder='Type here...'></textarea>
            <input type="submit" value="Message" />
         </form>

         <div className="socialIcons">
            <div className="location">
                <h3>Find Us</h3>
                  <div className="geo">
                  <i class="bi bi-geo-alt-fill"></i><span>00100,Nairobi, Kenya.</span>
                  </div>

                   <div className="tel">
                   <i class="bi bi-telephone-fill"></i><span>+254 700 000 000</span>
                   </div>

                   <div className="em">
                   <i class="bi bi-envelope-fill"></i><span>info@ntcogk.co.ke</span>
                   </div>
            </div>

            <div className="social">
                <h3>Follow Us</h3>
                <div className="iconsContainer">
                <a href="https://x.com/Omillo_Charles" target='_blank'><i class="bi bi-twitter-x"></i></a>
                <a href="https://facebook.com/OmilloCharles" target='_blank'><i class="bi bi-facebook"></i></a>
                <a href="https://instagram.com/Omillo.Charles" target='_blank'><i class="bi bi-instagram"></i></a>
                <a href="https://www.tiktok.com/@omillo_charles" target='_blank'><i class="bi bi-tiktok"></i></a>
                <a href="https://www.youtube.com/@Omillo_Charles" target='_blank'><i class="bi bi-youtube"></i></a>
            </div>
        </div>
         </div>

        </div>
    </div>
  )
}

export default Contact
