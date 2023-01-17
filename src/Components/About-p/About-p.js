import './About-p.css';
import Header from '../Header/Header';

function About() {
  return (
    <>
      <Header></Header>
      <div className="About">
          <div id='personal'>
            <h1 id='about-me-title' className="about-me">About Me</h1>
            <p id='about-me-content' className="about-me">
              I'm a web developer located in Orlando, Florida. 
              I have found a serious passion for logical problem solving throughout my math and physics classes in both high school and university. <br/><br/>
              Like many people in their early twenties, I thoroughly enjoy playing video games with friends in my free time. For me, this interest comes with a love and appreciation for intuitive user experiences. <br/><br/>
              Having grown up in the Pacific Northwest, I love snowboarding, mountain biking and hiking. 
              Living in Florida, I have discovered an interest in theme parks, kayaking, and long bike rides. Currently, I have a part time job with Walt Disney World as a Park Greeter at Hollywood Studios.
            </p>
          </div>
          <img id='mepic' alt='headshot of Carsdan Dvorachek' src='./images/carsdan-dvorachek.jpeg'/>
      </div>
    </>
  );
}

export default About;