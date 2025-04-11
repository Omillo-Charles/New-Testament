import React, { useState } from 'react';
import Rotation from '../assets/Rotation.jpeg'
import Ministry from '../assets/Ministry.jpeg'
import Meetings from '../assets/Meetings.jpeg'
import Reports from '../assets/Reports.jpeg'
import './Clergy.css'

function Clergy() {
    const [activeContent, setActiveContent] = useState('');

    const renderContent = () => {
      switch (activeContent) {
        case 'Home':
          return <h1>Home</h1>;
        case 'About':
          return <h1>About</h1>;
        case 'Services':
          return <h1>Services</h1>;
        case 'Contact':
          return <h1>Contact</h1>;
        default:
          return null;
      }
    };
  
    return (
      <div className="dual-container">
        {activeContent === '' ? (
          <>
            <div onClick={() => setActiveContent('Home')}>
                <figure className="rotation">
                    <img src={Rotation} alt="" width={250} height={250}/>
                    <figcaption>
                        PASTOR'S ROTATION.
                    </figcaption>
                </figure>
            </div>

            <div onClick={() => setActiveContent('About')}>
                <figure className="ministries">
                    <img src={Ministry} alt="" width={250} height={250}/>
                    <figcaption>
                        MINISTRIES.
                    </figcaption>
                </figure>
            </div>

            <div onClick={() => setActiveContent('Services')}>
                <figure className="meetings">
                    <img src={Meetings} alt="" width={250} height={250}/>
                    <figcaption>
                       PASTORAL MEETINGS.
                    </figcaption>
                </figure>
            </div>

            <div onClick={() => setActiveContent('Contact')}>
                 <figure className="reports">
                    <img src={Reports} alt="" width={250} height={250}/>
                    <figcaption>
                        REPORTS SUBMISSION.
                    </figcaption>
                </figure>
            </div>
          </>
        ) : (
          <>
            {renderContent()}
            <button className="back-button" onClick={() => setActiveContent('')}>
              Go Back
            </button>
          </>
        )}
      </div>
    );
}

export default Clergy;
