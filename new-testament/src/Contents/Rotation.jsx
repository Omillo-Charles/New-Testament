import React from 'react'
import './Rotation.css'

const Rotation = () => {
  return (
    <div className='rotation'>
      <div className="h2">
        <h2>Download the Pastors' rotation schedule as per your region below.</h2>
      </div>

      <div className="buttons">
        <div className="western">
            <a href="">
                Western Region
            </a>
        </div>

        <div className="nyanza">
            <a href="">
                Nyanza Region
            </a>
        </div>

        <div className="nairobi">
            <a href="">
                Nairobi Region.
            </a>
        </div>

        <div className="riftvalley">
            <a href="">
                Rift Valley.
            </a>
        </div>
      </div>
    </div>
  )
}

export default Rotation
