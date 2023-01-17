import './Introduction.css';

function Introduction() {

  return (
    <div className="Introduction">
      <div className='white-div'>
        <div className='intro-content'>
          <h1 id='title-position'>Full-Stack Developer</h1>
          <p id='sub-title'>Something really quirky and cute about myself.</p>
          <img id='panda-img' src='../images/panda-compressed.png'/>
        </div>
      </div>
      <div className='teal-div'>
        <div className='intro-content'>
          <p id='about-me'><span id='about-me-title'>Hi, my name is Carsdan!</span><br/><br/>
             I'm a web developer located in Orlando, Florida. I have found a serious passion for logical problem solving throughout my math and physics classes in both high school and university. <br/><br/>
             Like many people in their early twenties, I thoroughly enjoy playing video games with friends in my free time. For me, this interest comes with a love and appreciation for intuitive user experiences. <br/><br/>
             Having grown up in the Pacific Northwest, I love snowboarding, mountain biking and hiking. 
             Living in Florida, I have discovered an interest in theme parks, kayaking, and long bike rides. Currently, I have a part time job with Walt Disney World as a Park Greeter at Hollywood Studios.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;