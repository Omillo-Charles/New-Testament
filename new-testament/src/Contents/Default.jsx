import React from 'react'
import Logo from '../assets/Logo.png'
import './Default.css'

const Default = () => {
  return (
    <div className='defaut'>
      <div className="img">
        <img src={Logo} alt="" width={200} height={200}/>
      </div>

      <div className="text">
        <p><span>Hebrews 10:24-25 (NIV): </span>
        "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching."
        </p>
      </div>
    </div>
  )
}

export default Default
