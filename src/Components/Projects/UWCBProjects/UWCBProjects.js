import './UWCBProjects.css';
import '../Project/Project.css';

function UWCBProjects() {

  return (
    <div className="UWCBProjects work">
        <div className='page-wrapper'>
            <div className='disclaimer'>
                <p><span id='disclaimer-bold'>Disclaimer: </span>Due to inactivity and heroku's new pricing policies, these projects are no longer hosted.</p>
            </div>
            <div className="project thirsty-thursdays">
                <h1>Thirsty Thursdays</h1>
                <img width='50%' src='../images/thirsty-thursdays-sc.png' alt='homepage of thirsty thursday website' />
                <h4>Description</h4>
                <p>Thirsty Thursdays is a web-based tool dedicated to making meal planning more efficient for the average person. By entering an ingredient, Thirsty Thursdays will help the user find the perfect recipe for a meal or drink.</p>
                <h4>Coder's Thoughts</h4>
                <p>Thirsty Thursdays was a fun small-scale project that I built with three peers. Through this project, I collaborated with others using Github and Git, and I realized my passion for logical problem solving. As my first project, there were many takeaways and learnings that improved my future growth. From a technical perspective, this was my first encounter with HTML, CSS, and JavaScript. Overall, given my level of experience at the time, I am proud of this project and the underlying code. If I were to go back and make any adjustments, they would be minor improvements to the visuals in order to give the user more feedback when using the site. For example, informing the user when there is no available recipe for a searched ingredient.</p>
                <a className='to-github' href='https://github.com/ChuckDvchek/thirsty-thursdays'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    Github
                </a>
            </div>
            <div className='project lets-play-chess'>
                <h1>Lets Play Chess</h1>
                <img width='50%' src='../images/lets-play-chess-sc.png' alt='homepage of lets play chess website' />
                <h4>Description</h4>
                <p>Let's Play Chess is a website that allows individuals to play chess against their friends over the internet. A user creates a profile and invites their friends to play chess through notifications displayed on the site. Once playing, the chess board shows a user all possible moves for any given chess piece on their side of the board. Once the game ends, both users are sent to the main menu automatically.</p>
                <h4>Coder's Thoughts</h4>
                <p>This project was completed by myself and three other developers. My main responsibilities for this project were to code the game logic for chess and to implement Socket.io for real time interactions between users.</p>
                <a className='to-github' href='https://github.com/ChuckDvchek/chess-project-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    Github
                </a>
            </div>
            <div className='project table-top last'>
                <h1>Tabletop</h1>
                <img width='50%' src='../images/tabletop-sc.png' alt='homepage of tabletop website' />
                <h4>Description</h4>
                <p>TableTop is a website that allows people to play Dungeons &amp; Dragons (D&amp;D) online. While D&amp;D is usually played in-person, utilizing TableTop's campaign and character management (along with a virtual tabletop), allows D&amp;D to be played online with an unlimited amount of friends.</p>
                <h4>Coder's Thoughts</h4>
                <p>This project was very ambitious given the two-week time constraint my three other co-developers and I were given. Through this project, I gained technical knowledge of React and the practical knowledge that implementing a good user experience and user interface takes a lot of time. I gained a huge amount of appreciation for good UI/UX over the course of this project. The biggest strength of this project is the complex database with multiple relationships between the data tables that store account information, character details, campaign progress, etc.</p>
                <a className='to-github' href='https://github.com/POlsen-92/TableTop-FrontEnd'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>    
                    Github Front-End
                </a>
                <a className='to-github' href='https://github.com/POlsen-92/TableTop-BackEnd'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    Github Back-End
                </a>
            </div>
        </div>
    </div>
  );
}

export default UWCBProjects;