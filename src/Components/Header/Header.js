import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
  const { setPage } = props;

  const goTo = (page) => {
    console.log(page);
    setPage(page);
  }

  return (
    <div className="Header">
      <div id="title-box">
        <h1 id="title">Carsdan Dvorachek</h1>
      </div>
      <div className="link-buttons">
        <button className="link-button">
          <Link className='link' to="/"><span>Work</span></Link>
        </button>
        <button className="link-button">
          <Link className='link' to="/about"><span>About Me</span></Link>
        </button>
        <button className="link-button"><span><a href='https://github.com/cdvchek'>Github</a></span></button>
        <button className="link-button"><span><a href='https://www.linkedin.com/in/carsdan-dvorachek-1b0a14219/'>LinkedIn</a></span></button>
        <button className="link-button"><span><a href="mailto:cdvchek@gmail.com">cdvchek@gmail.com</a></span></button>
      </div>
    </div>
  );
}

export default Header;