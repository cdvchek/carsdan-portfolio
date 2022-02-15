import React, { useState } from 'react';
import './Work-p.css';
import Project from '../Project/Project';

function Work() {

  const { p1Title, p1Desc , p1Thoughts } = {
    p1Title: "Thirsty Thursdays",
    p1Desc: "Thirsty Thursdays is a tool dedicated to helping people save time. Whether you don't know what to make for dinner, or you are in the mood for a drink, Thirsty Thursdays will help you find that perfect meal.",
    p1Thoughts: "Thirsty Thursdays was a fun introductory project that I worked on with 3 other peers."
  }

  const { p2Title, p2Desc, p2Thoughts } = {
    p2Title: "TableTop",
    p2Desc: "blah blah blah",
    p2Thoughts: "blah blah blah"
  }
  
  const { p3Title, p3Desc, p3Thoughts } = {
    p3Title: "Let's Play Chess",
    p3Desc: "blah blah blah",
    p3Thoughts: "blah blah blah"
  }

  const [view,setView] = useState('overview');

  const changeToWork = (work) => {
    switch (work) {
      case 'thirsty-thursdays':
        setView('thirsty-thursdays');
      break;

      case 'tabletop':
        setView('tabletop');
      break;

      case 'lets-play-chess':
        setView('lets-play-chess');
      break;

      default:
        setView('overview');
      break;
    }
  }
  if (view == 'overview') {
    return (
      <div className="Work">
        <div className='big-card' id='big-card1'>
          <div className='card' id='card1'>
            <h1>Thirsty</h1><h1>Thursdays</h1>
            <img height='100px' width='100px' id='cocktail-icon' src='./images/cocktailcute.png'/>
            <img height='100px' width='100px' id='food-icon' src='./images/foodicon.png'/>
          </div>
          <div className='card-buttons' id='card1-buttons'>
            <button className='card-button' id='card-button-site1' onClick={() => window.location = 'https://chuckdvchek.github.io/thirsty-thursdays/'}>Site</button>
            <button className='card-button' id='card-button-github1' onClick={() => window.location = 'https://github.com/ChuckDvchek/thirsty-thursdays'}>Github</button>
            <button className='card-button' id='card-button-github1' onClick={() => changeToWork('thirsty-thursdays')}>About this Project</button>
          </div>
        </div>
        <div className='big-card' id='big-card3'>
          <div className='card' id='card3'><h1>TableTop</h1></div>
          <div className='card-buttons' id='card1-buttons'>
            <button className='card-button' id='card-button-site1' onClick={() => window.location = 'https://chuckdvchek.github.io/thirsty-thursdays/'}>Site</button>
            <button className='card-button' id='card-button-github1' onClick={() => window.location = 'https://github.com/ChuckDvchek/thirsty-thursdays'}>Github</button>
            <button className='card-button' id='card-button-github1' onClick={() => changeToWork('tabletop')}>About this Project</button>
          </div>
        </div>
        <div className='big-card' id='big-card2'>
          <div className='card' id='card2'>
            <img id='lets-play-chess' height='15%' width='90%' src='./images/letsplaychess.png'/>
            <img width='100px' height='100px' src='./images/chessicon.png'/>
            <img width='100px' height='100px' src='./images/chessicon2.png'/>
          </div>
          <div className='card-buttons' id='card1-buttons'>
            <button className='card-button' id='card-button-site1' onClick={() => window.location = 'https://chuckdvchek.github.io/thirsty-thursdays/'}>Site</button>
            <button className='card-button' id='card-button-github1' onClick={() => window.location = 'https://github.com/ChuckDvchek/thirsty-thursdays'}>Github</button>
            <button className='card-button' id='card-button-github1' onClick={() => changeToWork('lets-play-chess')}>About this Project</button>
          </div>
        </div>
      </div>
    );
  } else if (view == 'thirsty-thursdays') {
    return (
      <Project setView={setView} title={p1Title} description={p1Desc} thoughts={p1Thoughts}></Project>
    )
  } else if (view == 'tabletop') {
    return (
      <Project setView={setView} title={p2Title} description={p2Desc} thoughts={p2Thoughts}></Project>
    )
  } else if (view == 'lets-play-chess') {
    return (
      <Project setView={setView} title={p3Title} description={p3Desc} thoughts={p3Thoughts}></Project>
    )
  }
}

export default Work;