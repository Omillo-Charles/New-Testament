import React from 'react'
import { useState } from 'react'
import './OurChurch.css'
import History from '../Contents/history';

const OurChurch = () => {

  const [selected, setSelected] = useState(""); // Holds the clicked button value

  const renderContent = () => {
    switch (selected) {
      case "history":
        return <History />;
      case "administration":
        return <h2>Church Administration.</h2>;
      case "constitution":
        return <h2>The Constitution.</h2>;
      case "articles":
        return <h2> The Articles Of Faith.</h2>
      default:
        return <History />;
    }
  };

  return (
    <div className='OurChurch'>
      <div className="left scrollable">
        <div className="history" onClick={() => setSelected("history")}>
            <h3>History Of The Church.</h3>
            <p>The Church of God began in 1886 with only 8 men and now the church is all over the world. Looking back where we have come from, we cannot be silent to thank God for this far as we celebrate 40 years since we were established in Kenya...</p>
        </div>

        <div className="constitution" onClick={() => setSelected("constitution")}>
            <h3>The Constitution</h3>
            <p>As an institution we have a set of rules and guidelines which govern our day to day activities. The rules were set up by a community of experts. It is reviewed...</p>
        </div>

        <div className="administration" onClick={() => setSelected("administration")}>
            <h3>The Administration.</h3>
            <p>Leadership comes from God, the Bible says. Therefore we are priviledged to have a team of committed leaders to take us to the next level. The administration is quite...</p>
        </div>

        <div className="declaration" onClick={() => setSelected("articles")}>
            <h3>Articles Of Faith.</h3>
            <p>Every denomination has its own beliefs and perceptions about christianity and God. We believe in quite a number of things which are Bibilically oriented...</p>
        </div>
      </div>

      <div className="right scrollable">
            <div className="mainCont">
               <h2>
               {renderContent()}
               </h2>
            </div>
      </div>
    </div>
  )
}

export default OurChurch
