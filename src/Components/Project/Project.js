import './Project.css';

function Project(props) {
  
    const {title, description, thoughts, setView} = props;

    return (
        <div className="Project">
            <button onClick={() => setView('overview')}>Back</button>
            <h1>{title}</h1>
            <h3>Description</h3>
            <p>{description}</p>
            <h3>Coder's Thoughts</h3>
            <p>{thoughts}</p>
            <button>Github</button>
            <button>View the Site</button>
        </div>
    );
}

export default Project;