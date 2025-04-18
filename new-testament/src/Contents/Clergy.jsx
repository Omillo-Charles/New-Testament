import React, { useState } from 'react';
import Ministry from '../assets/Ministry.jpeg'
import Meetings from '../assets/Meetings.jpeg'
import Reports from '../assets/Reports.jpeg'
import './Clergy.css'
import Ministries from '../Ministries';
import Reportss from '../Reportss';

function Clergy() {
    const [activeContent, setActiveContent] = useState('');

    const renderContent = () => {
      switch (activeContent) {
        case 'Ministries':
          return <Ministries />;
        case 'Meetings':
          return <h1>Pastoral Meetings.</h1>;
        case 'Reports':
          return <Reportss />;
        default:
          return null;
      }
    };
  
    return (
      <div className="dual-container">
        {activeContent === '' ? (
          <>

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
