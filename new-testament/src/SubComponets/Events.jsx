import React from 'react'
import Logo from '../assets/Logo.png'
import './Events.css'

const Events = () => {
  return (
    <div className='Events'>
      <div className="EventsRight Eve">
        <figure>
          <img src={Logo} alt="Logo" width={200} height={200}/>
        </figure>
        <h2>EVENTS</h2>
      </div>

      <div className="EventsCenter Eve">
        <div className="levels">
          <p className="national">
            National
          </p>
          <p className="regional">
            Regional
          </p>
          <p className="local">
            Local
          </p>
        </div>

        <div className="addEvent">
          <i class="bi bi-plus-lg"></i>
        </div>
      </div>

      <div className="EventsLeft Eve">
        <div className="mainEvents">
          <h3>Just a random guy!!!</h3>
        </div>
      </div>
    </div>
  )
}

export default Events
