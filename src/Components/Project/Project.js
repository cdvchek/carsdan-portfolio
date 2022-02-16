import './Project.css';

function Project(props) {
  
    const {title, description, thoughts, setView} = props;

    return (
        <div className="Project">
            <button id="back-btn" onClick={() => setView('overview')}>Back</button>
            <div id="content">
                <h1>{title}</h1>
                <h3>Description</h3>
                <p>{description}</p>
                <h3>Coder's Thoughts</h3>
                <p>{thoughts}</p>
                <button>Github</button>
                <button>View the Site</button>
            </div>
        </div>
    );
}

export default Project;