import './Work.css';
import { useState } from 'react';
import NLCCTimecards from '../WorkAbout/NLCCTimecards/NLCCTimecards';
import UWCBProjects from '../WorkAbout/UWCBProjects/UWCBProjects';

function Work() {

  const [displayedWork, setDisplayedWork] = useState('none');
  const [workAbout, setWorkAbout] = useState('');

  const changeWorkState = (e) => {
    e.stopPropagation();
    const workId = e.target.getAttribute('data-id');
    if (displayedWork !== workId) {
      setDisplayedWork(workId);
      setWorkAbout('opening');
    } else {
      setDisplayedWork('none');
      setWorkAbout('closing');
    }
  }

  const displayWork = () => {
    switch(displayedWork) {
      case 'northlake-timecards':
        return(
          <NLCCTimecards />
        )
      case 'uw-bootcamp-projects':
        return(
          <UWCBProjects />
        )
      default:
        return(
          <>
          </>
        )
    }
  }

  return (
    <div id='Work' className="Working">
      <div className='work-content'>
        <div className='card-wrapper'>
          <div data-id='northlake-timecards' onClick={(e) => changeWorkState(e)} className='card-outline' id='card-outline-northlake-timecards'>
            <div data-id='northlake-timecards' className='normal-card' id='normal-card-northlake-timecards'>
              <img data-id='northlake-timecards' height='100px' width='100px' id='northlake-logo' src='./images/northlake-logo.png' alt="northlake community church's logo"/>
            </div>
          </div>
          <div data-id='uw-bootcamp-projects' onClick={(e) => changeWorkState(e)} className='card-outline' id='card-outline-uw-bootcamp-projects'>
            <div data-id='uw-bootcamp-projects' className='normal-card' id='normal-card-uw-bootcamp-projects'>
              <img data-id='uw-bootcamp-projects' height='100px' width='100px' id='uw-logo' src='./images/uw-logo.png' alt="university of washington's logo"/>
            </div>
          </div>
        </div>
        <div id='work-about' className={workAbout}>
          {displayWork()}
        </div>
      </div>
    </div>
  );
}

export default Work;