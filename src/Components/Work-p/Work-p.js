import React, { useState } from 'react';
import './Work-p.css';
import Project from '../Project/Project';

function Work() {

  const { p1Title, p1Desc , p1Thoughts, p1Image, p1Github, p1Site } = {
    p1Title: "Thirsty Thursdays",
    p1Desc: "Thirsty Thursdays is a web-based tool dedicated to making meal planning more efficient for the average person. By entering an ingredient, Thirsty Thursdays will help the user find the perfect recipe for a meal or drink.",
    p1Thoughts: "Thirsty Thursdays was a fun small-scale project that I built with three peers. Through this project, I collaborated with others using Github and Git, and I realized my passion for logical problem solving. As my first project, there were many takeaways and learnings that improved my future growth. From a technical perspective, this was my first encounter with HTML, CSS, and JavaScript. Overall, given my level of experience at the time, I am proud of this project and the underlying code. If I were to go back and make any adjustments, they would be minor improvements to the visuals in order to give the user more feedback when using the site. For example, informing the user when there is no available recipe for a searched ingredient.",
    p1Image: "./images/thirsty-thursdays-sc.png",
    p1Github: "https://github.com/ChuckDvchek/thirsty-thursdays",
    p1Site: "https://chuckdvchek.github.io/thirsty-thursdays/"
  }

  const { p2Title, p2Desc, p2Thoughts, p2Image, p2Github, p2Github2, p2Site } = {
    p2Title: "TableTop",
    p2Desc: "TableTop is a website that allows people to play Dungeons & Dragons (D&D) online. While D&D is usually played in-person, utilizing TableTop's campaign and character management (along with a virtual tabletop), allows D&D to be played online with an unlimited amount of friends.",
    p2Thoughts: "This project was very ambitious given the two-week time constraint my three other co-developers and I were given. Through this project, I gained technical knowledge of React and the practical knowledge that implementing a good user experience and user interface takes a lot of time. I gained a huge amount of appreciation for good UI/UX over the course of this project. The biggest strength of this project is the complex database with multiple relationships between the data tables that store account information, character details, campaign progress, etc.",
    p2Image: "./images/tabletop-sc.png",
    p2Github: "https://github.com/POlsen-92/TableTop-FrontEnd",
    p2Github2: "https://github.com/POlsen-92/TableTop-BackEnd",
    p2Site: "https://table-top-fe.herokuapp.com/"
  }
  
  const { p3Title, p3Desc, p3Thoughts, p3Image, p3Github, p3Site } = {
    p3Title: "Let's Play Chess",
    p3Desc: "Let's Play Chess is a website that allows individuals to play chess against their friends over the internet. A user creates a profile and invites their friends to play chess through notifications displayed on the site. Once playing, the chess board shows a user all possible moves for any given chess piece on their side of the board. Once the game ends, both users are sent to the main menu automatically.",
    p3Thoughts: "This project was completed by myself and three other developers. My main responsibilities for this project were to code the game logic for chess and to implement Socket.io for real time interactions between users.",
    p3Image: "./images/lets-play-chess-sc.png",
    p2Github: "https://github.com/ChuckDvchek/chess-project-2",
    p2Site: "https://letsplaychessproj2.herokuapp.com/"
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
        <div className='big-card' id='big-card1' onClick={() => changeToWork('thirsty-thursdays')}>
          <div className='card' id='card1'>
            <h1>Thirsty</h1><h1>Thursdays</h1>
            <img height='100px' width='100px' id='cocktail-icon' src='./images/cocktailcute.png'/>
            <img height='100px' width='100px' id='food-icon' src='./images/foodicon.png'/>
          </div>
          <div className='card-buttons' id='card1-buttons'>
            <button className='card-button' id='card-button-site1' onClick={(e) => {
              e.stopPropagation();
              window.location = 'https://chuckdvchek.github.io/thirsty-thursdays/';
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
              </svg>
            </button>
            <button className='card-button' id='card-button-github1' onClick={(e) => {
              e.stopPropagation();
              window.location = 'https://github.com/ChuckDvchek/thirsty-thursdays';
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className='big-card' id='big-card3' onClick={() => changeToWork('tabletop')}>
          <div className='card' id='card3'><h1>TableTop</h1></div>
          <div className='card-buttons' id='card1-buttons'>
            <button className='card-button' id='card-button-site1' onClick={(e) => {
              e.stopPropagation();
              window.location = 'https://table-top-fe.herokuapp.com/';
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
              </svg>
            </button>
            <button className='card-button' id='card-button-github1' onClick={(e) => {
              e.stopPropagation();
              window.location = 'https://github.com/POlsen-92/TableTop-FrontEnd';
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </button>
          </div>
        </div>
        <div className='big-card' id='big-card2' onClick={() => changeToWork('lets-play-chess')}>
          <div className='card' id='card2'>
            <img id='lets-play-chess' height='15%' width='90%' src='./images/letsplaychess.png'/>
            <img width='100px' height='100px' src='./images/chessicon.png'/>
            <img width='100px' height='100px' src='./images/chessicon2.png'/>
          </div>
          <div className='card-buttons' id='card1-buttons'>
            <button className='card-button' id='card-button-site1' onClick={(e) => {
              e.stopPropagation();
              window.location = 'https://letsplaychessproj2.herokuapp.com/';
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
              </svg>
            </button>
            <button className='card-button' id='card-button-github1' onClick={(e) => {
              e.stopPropagation();
              window.location = 'https://github.com/ChuckDvchek/chess-project-2';
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </button>
          </div>
        </div>
        <button id='portfolio-github' onClick={() => window.location = 'https://github.com/ChuckDvchek/carsdan-portfolio'}>Portfolio Github</button>
      </div>
    );
  } else if (view == 'thirsty-thursdays') {
    return (
      <Project 
        setView={setView} 
        title={p1Title} 
        description={p1Desc} 
        thoughts={p1Thoughts} 
        image={p1Image}
        github={p1Github}
        site={p1Site}>
      </Project>
    )
  } else if (view == 'tabletop') {
    return (
      <Project
        setView={setView}
        title={p2Title}
        description={p2Desc}
        thoughts={p2Thoughts}
        image={p2Image}
        github={p2Github}
        github2={p2Github2}
        site={p2Site}>
      </Project>
    )
  } else if (view == 'lets-play-chess') {
    return (
      <Project
        setView={setView}
        title={p3Title}
        description={p3Desc}
        thoughts={p3Thoughts}
        image={p3Image}
        github={p3Github}
        site={p3Site}>
      </Project>
    )
  }
}

export default Work;