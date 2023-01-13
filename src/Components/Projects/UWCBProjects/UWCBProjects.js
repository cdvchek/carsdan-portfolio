import './UWCBProjects.css';
import '../Project/Project.css';

function UWCBProjects() {

  return (
    <div className="UWCBProjects work">
        <div className='disclaimer'>
            <p><span id='disclaimer-bold'>Disclaimer: </span>Due to inactivity and heroku's new pricing policies, these projects are no longer hosted.</p>
        </div>
        <div className="project thirsty-thursdays">
            <h2>Thirsty Thursdays</h2>
            <img width='50%' src='../images/thirsty-thursdays-sc.png' alt='homepage of thirsty thursday website' />
            <h4>Description</h4>
            <p>Thirsty Thursdays is a web-based tool dedicated to making meal planning more efficient for the average person. By entering an ingredient, Thirsty Thursdays will help the user find the perfect recipe for a meal or drink.</p>
            <h4>Coder's Thoughts</h4>
            <p>Thirsty Thursdays was a fun small-scale project that I built with three peers. Through this project, I collaborated with others using Github and Git, and I realized my passion for logical problem solving. As my first project, there were many takeaways and learnings that improved my future growth. From a technical perspective, this was my first encounter with HTML, CSS, and JavaScript. Overall, given my level of experience at the time, I am proud of this project and the underlying code. If I were to go back and make any adjustments, they would be minor improvements to the visuals in order to give the user more feedback when using the site. For example, informing the user when there is no available recipe for a searched ingredient.</p>
            <a href='https://github.com/ChuckDvchek/thirsty-thursdays'>Github</a>
        </div>
        <div className='project lets-play-chess'>
            <h2>Lets Play Chess</h2>
            <img width='50%' src='../images/lets-play-chess-sc.png' alt='homepage of lets play chess website' />
            <h4>Description</h4>
            <p>Let's Play Chess is a website that allows individuals to play chess against their friends over the internet. A user creates a profile and invites their friends to play chess through notifications displayed on the site. Once playing, the chess board shows a user all possible moves for any given chess piece on their side of the board. Once the game ends, both users are sent to the main menu automatically.</p>
            <h4>Coder's Thoughts</h4>
            <p>This project was completed by myself and three other developers. My main responsibilities for this project were to code the game logic for chess and to implement Socket.io for real time interactions between users.</p>
            <a href='https://github.com/ChuckDvchek/chess-project-2'>Github</a>
        </div>
        <div className='project table-top'>
            <h2>Tabletop</h2>
            <img width='50%' src='../images/tabletop-sc.png' alt='homepage of tabletop website' />
            <h4>Description</h4>
            <p>TableTop is a website that allows people to play Dungeons &amp; Dragons (D&amp;D) online. While D&amp;D is usually played in-person, utilizing TableTop's campaign and character management (along with a virtual tabletop), allows D&amp;D to be played online with an unlimited amount of friends.</p>
            <h4>Coder's Thoughts</h4>
            <p>This project was very ambitious given the two-week time constraint my three other co-developers and I were given. Through this project, I gained technical knowledge of React and the practical knowledge that implementing a good user experience and user interface takes a lot of time. I gained a huge amount of appreciation for good UI/UX over the course of this project. The biggest strength of this project is the complex database with multiple relationships between the data tables that store account information, character details, campaign progress, etc.</p>
            <a href='https://github.com/POlsen-92/TableTop-FrontEnd'>Github Front-End</a>
            <a href='https://github.com/POlsen-92/TableTop-BackEnd'>Github Back-End</a>
        </div>
    </div>
  );
}

export default UWCBProjects;