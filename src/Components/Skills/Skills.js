import './Skills.css';

function Skills() {

  return (
    <div id='Skills' className="Skills">
      <div id='teal-box'></div>
      <div className='skills-content'>
        <div className='skills-box'>
          <div id='languages' className='skill'>
            <h1 className='skill-title'>Languages</h1>
            <h2 className='skill-subtitle'>Fluent</h2>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <h2 className='skill-subtitle'>Familiar</h2>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>SQL</li>
              <li>Git</li>
              <li>GML</li>
            </ul>
          </div>
          <div id='technologies' className='skill'>
            <h1 className='skill-title'>Technologies</h1>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>React</li>
              <li>Sequelize</li>
              <li>Handlebars</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;