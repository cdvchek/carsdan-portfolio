import './NLCCTimecards.css';
import Carousel from '../../Carousel/Carousel';

function NLCCTimecards() {

  return (
    <div className="NLCCTimecards">
      <div className='qa'>
        <h4 className='question teal white-text'>How did this project start?</h4>
        <p className='answer'>I was contacted by Northlake about inefficiency in their payroll processing and we came up with a solution that was obtainable given my skills.</p>
      </div>
      <div className='qa teal'>
        <p className='answer'>The website is a workforce tool that keeps track of employees hours via timecards. This tool also allows supervisors to approve timecards and the organization admin to quickly see all employee timecards to process payroll.</p>
        <h4 className='question white'>What is it?</h4>
      </div>
      <div className='qa'>
        <h4 className='question teal white-text'>When was it made?</h4>
        <p className='answer'>This project was started in October of 2022. The website went live in December of 2022 and I am still upkeeping and updating the website.</p>
      </div>
      <div className='qa teal'>
        <p className='answer'>Employees can log in and enter their hours and submit their timecard for approval. Supervisors have access to a second page where they can approve their employees' timecards. Administrators have full access to the website where they can manage user details, manage who is a supervisor and their employees, and view employee timecards.</p>
        <h4 className='question white'>How does it work?</h4>
      </div>
      <div className='qa'>
        <h4 className='question teal white-text'>What technologies does it use?</h4>
        <p className='answer'>This website is built on Node.js and Express, utilizes MySQL and Sequelize, and has Handlebars as a template engine.</p>
      </div>
      <Carousel imgAddresses={['./images/nlcctimecards-timecard-sc-min.png', './images/nlcctimecards-approve-sc-min.png', './images/nlcctimecards-supervisors-sc-min.png', './images/nlcctimecards-users-sc-min.png']}/>
    </div>
  );
}

export default NLCCTimecards;