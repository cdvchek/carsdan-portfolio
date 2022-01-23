import './Intro.css';

function Intro() {

  const startIntro = () => {
    const introEl = document.querySelector('#title-name');
    introEl.setAttribute('class','starting');
    const clickAnywhereEl = document.querySelector('#click-anywhere');
    clickAnywhereEl.setAttribute('class','starting');
    const needsAfterEl = document.querySelectorAll('.needs-after');
    needsAfterEl.forEach((element) => element.classList.add('after'));
    const bobbingEl = document.querySelector('#bobbing');
    bobbingEl.setAttribute('class','fade');
  }

  return (
    <div className="Intro" onClick={() => startIntro()}>
      <h1 id="title-name"><span id='one'>C</span><span id='two'>arsdan</span><span id='three'>D</span><span id='four'>vorachek</span></h1>
      <div id='click-anywhere'>
        <p id='bobbing'>( Click Anywhere )</p>
      </div>
      <div className='card needs-after'>
        <img src="./images/carsdan-dvorachek.jpeg"/>
        <div className='inner-card'>
          <h2>About Me</h2>
          <p>I am a software developer who blah blah blah fdslakfjdskl;fjasd;lkfsjf; aslkfjdaslkfj dslkfjadslkf jdsa ;lkfjdskla fj;ldskjflkasd jflk jadslkfl dj;lkf jadslf jkadslk fjlkdjasfl;kjd slkfj lkdsj flkjd ;alkfjdlkfjjd ;lkafjl kdsajf lkdsj flkkjdsj fa;lksdj flkjdasj fjd;l jflkajdsljf ;lksdjf dsfajklds;</p>
        </div>
      </div>
      <div className='needs-after'>
        <h2>Work</h2>
      </div>
    </div>
  );
}

export default Intro;