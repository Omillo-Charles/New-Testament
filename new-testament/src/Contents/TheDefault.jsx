import React from 'react'
import './TheDefault.css'
import Logo from '../assets/Logo.png'

const TheDefault = () => {
  return (
    <div className='tdf'>
      <div className="timg">
        <img src={Logo} alt="" width={200} height={200}/>
      </div>

      <div className="dtext">
        <p><span>Ephesians 2;19-22(NIV):</span> Consequently, you are no longer foreigners and strangers, but fellow citizens with God's people and also members of his household built on the foundations of the Apostles and prophets, with Christ Jesus himself as the chief cornerstone. In him the whole building is joined together and rises to become a holy temple in the Lord. And in him you too are built together to become a dwelling in which God lives by his spirit.</p>
      </div>
    </div>
  )
}

export default TheDefault
