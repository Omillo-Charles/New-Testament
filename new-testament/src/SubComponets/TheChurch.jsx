import React from 'react'
import Logo from '../assets/Logo.png'
import './TheChurch.css'

const TheChurch = () => {
  return (
    <div className='TheChurch'>
      <div className="TheChurchLeft TheChurchDiv">
        <div className="TheChurchImage">
            <img src={Logo} alt="The" width={200} height={200} />
        </div>

        <div className="TheChurchText">
            <p><span>📖 Ephesians 2:19–22 (NIV)</span> "Consequently, you are no longer foreigners and strangers, but fellow citizens with God’s people and also members of his household,
            built on the foundation of the apostles and prophets, with Christ Jesus himself as the chief cornerstone.
            In him the whole building is joined together and rises to become a holy temple in the Lord.
            And in him you too are being built together to become a dwelling in which God lives by his Spirit."
            </p>
        </div>
      </div>

      <div className="ThechurchRight TheChurchDiv">
        <form action="#" className="TheChurchForm">
            <h2>Become the church.</h2>
            <div className="names">
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name'/>
            </div>

            <div className="email">
                <input type="email" placeholder='Your Email' />
            </div>

            <div className="ChurchBranch">
                <input type="text" placeholder='Church Branch'/>
                <i class="bi bi-caret-down-fill"></i>
            </div>

            <div className="ChurchLevel">
                <input type="text" placeholder='Church Position'/>
                <i class="bi bi-caret-down-fill"></i>
            </div>

            <div className="submit">
                <input type="submit" value="Register" />
            </div>

            <div className="login">
                <p>Already have an account? <span>login.</span></p>
            </div>
        </form>
      </div>
    </div>
  )
}

export default TheChurch
