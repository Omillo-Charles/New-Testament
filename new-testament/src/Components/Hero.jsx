import React from 'react'
import './Hero.css'
import Logo from '../assets/Logo.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="heroImg">
        <figure>
            <img src={Logo} alt="NT_LOGO" width={200} height={200} />
            <figcaption>
                <h1>WELCOME TO NEW TESTAMENT CHURCH OF GOD KENYA.</h1>
            </figcaption>
        </figure>
      </div>

      <div className="mission_vision">
        <div className="mission ssion">
            <h2>Our Mission:</h2>
            <p>To reach the world with the gospel of Jesus Christ, and to establish them in the faith.</p>
        </div>

        <div className="vision ssion">
            <h2>Our Vision:</h2>
            <p>To be a church that is committed to reaching the world with the gospel of Jesus Christ.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
