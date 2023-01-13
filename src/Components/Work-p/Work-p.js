import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Work-p.css';

function Work() {
  const navigate = useNavigate();

  return (
    <div className="Work">
      <div id='card-holder'>
        <div className='big-card' id='big-card-northlake-timecards' onClick={() => navigate("/projects/nlcctimecard")}>
          <div className='card' id='card-northlake-timecards'>
            <img height='100px' width='100px' id='northlake-logo' src='./images/northlake-logo.png' alt="northlake community church's logo"/>
            <h2>EMPLOYEE</h2><h2>TIMECARD</h2><h2>SYSTEM</h2>
          </div>
          <div className='card-buttons' id='card-buttons-northlake-timecards'>
            <button className='card-button' id='card-button-github-northlake-timecard' onClick={(e) => {
              e.stopPropagation();
              window.location = 'https://github.com/cdvchek/northlake-time-cards';
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className='big-card' id='big-card-uw-bootcamp-projects' onClick={() => navigate("/projects/uwcbprojects")}>
          <div className='card' id='card-uw-bootcamp-projects'>
            <img height='100px' width='100px' id='uw-logo' src='./images/uw-logo.png' alt="university of washington's logo"/>
            <h1>CODING</h1><h1>BOOTCAMP</h1><h1>PROJECTS</h1>
          </div>
        </div>
      </div>
      <button id='portfolio-github' onClick={() => window.location = 'https://github.com/ChuckDvchek/carsdan-portfolio'}>Portfolio Github</button>
    </div>
  );
}

export default Work;