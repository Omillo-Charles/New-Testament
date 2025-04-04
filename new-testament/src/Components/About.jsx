import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <h2 className="about">
        <hr />
           <p className="abtText">
            About <span>Us</span>
           </p>
        <hr />
      </h2>

      <div className="text">
        <p>The New Testament Church Of God Kenya was established in 1962 by a group of Christians called the Omillos in Cleaveland, Tennesse in USA. The Church has since then spread to at least 168 countries.</p>
      </div>

      <div className="more">
        <i>Find more</i>
        <i>Read more</i>
      </div>
    </div>
  )
}

export default About
