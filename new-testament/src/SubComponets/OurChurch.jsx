import React from 'react'
import './OurChurch.css'

const OurChurch = () => {
  return (
    <div className='OurChurch'>
      <div className="left scrollable">
        <div className="history">
            <h3>History Of The Church.</h3>
            <p>The New Testament Church Of God Kenya was established in 1966 by a group on missionaries called the Omillos in Cleaveland Tennssse in the USA. The church has since been on its growth...</p>
        </div>

        <div className="constitution">
            <h3>The Constitution</h3>
            <p>As an institution we have a set of rules and guidelines which govern our day to day activities. The rules were set up by a community of experts. It is reviewed...</p>
        </div>

        <div className="administration">
            <h3>The Administration.</h3>
            <p>Leadership comes from God, the Bible says. Therefore we are priviledged to have a team of committed leaders to take us to the next level. The administration is quite...</p>
        </div>

        <div className="declaration">
            <h3>Articles Of Faith.</h3>
            <p>Every denomination has its own beliefs and perceptions about christianity and God. We believe in quite a number of things which are Bibilically oriented...</p>
        </div>
      </div>

      <div className="right scrollable">
            <div className="mainCont">
                <h2>Kijana ambaye Mungu alihurumia.</h2>
            </div>
      </div>
    </div>
  )
}

export default OurChurch
