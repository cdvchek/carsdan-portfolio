import './Header.css';

function Header(props) {
  const { setPage } = props;

  const goTo = (page) => {
    console.log(page);
    setPage(page);
  }

  return (
    <div className="Header">
      <h1 id="title">Carsdan Dvorachek</h1>
      <div className="link-buttons">
        <button className="link-button" onClick={()=>goTo('work')}><span>Work</span></button>
        <button className="link-button" onClick={()=>goTo('about')}><span>About Me</span></button>
        <button className="link-button"><span><a href='https://www.linkedin.com/in/carsdan-dvorachek-1b0a14219/'>LinkedIn</a></span></button>
        <button className="link-button"><span><a href="mailto:cdvchek@gmail.com">cdvchek@gmail.com</a></span></button>
      </div>
    </div>
  );
}

export default Header;