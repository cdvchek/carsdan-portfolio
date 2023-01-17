import './Heading.css';

function Heading() {

  return (
    <div className='Heading'>
        <div className='heading-content'>
          <img className='cd-logo' src='../images/cd-logo-compressed.png'/>
          <nav>
            <a href='#Skills' className='nav-btn'>Skills</a>
            <a href='#Work' className='nav-btn'>Work</a>
            <a href='#Footing' id='nav-contact' className='nav-btn'>Contact</a>
          </nav>
        </div>
    </div>
  );
}

export default Heading;