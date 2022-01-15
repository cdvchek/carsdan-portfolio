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
        <button className="link-button" onClick={()=>goTo('home')}>Home</button>
        <button className="link-button" onClick={()=>goTo('work')}>Work</button>
        <button className="link-button" onClick={()=>goTo('about')}>About Me</button>
      </div>
    </div>
  );
}

export default Header;