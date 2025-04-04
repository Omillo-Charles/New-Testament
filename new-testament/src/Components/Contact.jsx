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
            <input type="text" placeholder='Your level' name='level' />
            <textarea name="subject" id="subject" placeholder='Type here...'></textarea>
            <input type="submit" value="Message" />
         </form>

         <div className="socialIcons">
            <div className="location">
                <h3>Find Us</h3>
                 <i class="bi bi-geo-alt-fill"></i><span>00100,Nairobi, Kenya.</span>
                    <i class="bi bi-telephone-fill"></i><span>+254 700 000 000</span>
                    <i class="bi bi-envelope-fill"></i><span>info@ntcogk.co.ke</span>
            </div>

            <div className="social">
                <h3>Follow Us</h3>
                <div className="iconsContainer">
                <i class="bi bi-twitter-x"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-tiktok"></i>
                <i class="bi bi-youtube"></i>
            </div>
        </div>
         </div>

        </div>
    </div>
  )
}

export default Contact
