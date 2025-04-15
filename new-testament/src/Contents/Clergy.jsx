import React, { useState } from 'react';
import Rotations from '../assets/Rotations.jpeg'
import Ministry from '../assets/Ministry.jpeg'
import Meetings from '../assets/Meetings.jpeg'
import Reports from '../assets/Reports.jpeg'
import './Clergy.css'
import Ministries from '../Ministries';

function Clergy() {
    const [activeContent, setActiveContent] = useState('');

    const renderContent = () => {
      switch (activeContent) {
        case 'Rotation':
          return <h1>Pastors' Rotation.</h1>;
        case 'Ministries':
          return <Ministries />;
        case 'Meetings':
          return <h1>Pastoral Meetings.</h1>;
        case 'Reports':
          return <h1>Reports Submission.</h1>;
        default:
          return null;
      }
    };
  
    return (
      <div className="dual-container">
        {activeContent === '' ? (
          <>
            <div onClick={() => setActiveContent('Rotation')}>
                <figure className="rotation">
                    <img src={Rotations} alt="" width={250} height={250}/>
                    <figcaption>
                        PASTOR'S ROTATION.
                    </figcaption>
                </figure>
            </div>

            <div onClick={() => setActiveContent('Ministries')}>
                <figure className="ministries">
                    <img src={Ministry} alt="" width={250} height={250}/>
                    <figcaption>
                        MINISTRIES.
                    </figcaption>
                </figure>
            </div>

            <div onClick={() => setActiveContent('Meetings')}>
                <figure className="meetings">
                    <img src={Meetings} alt="" width={250} height={250}/>
                    <figcaption>
                       PASTORAL MEETINGS.
                    </figcaption>
                </figure>
            </div>

            <div onClick={() => setActiveContent('Reports')}>
                 <figure className="reports">
                    <img src={Reports} alt="" width={250} height={250}/>
                    <figcaption>
                        REPORTS SUBMISSION.
                    </figcaption>
                </figure>
            </div>
          </>
        ) : (
          <div className='back'>
            {renderContent()}
           
          </div>
        )}
      </div>
    );
}

export default Clergy;
