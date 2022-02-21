import './Project.css';

function Project(props) {
  
    const {title, description, thoughts, image, setView} = props;

    return (
        <div className="Project">
            <button id="back-btn" onClick={() => setView('overview')}>Back</button>
            <div id="content">
                <h1 id="project-title">{title}</h1>
                <img alt='website preview' src={image} id="preview-web-img"/>
                <h3 id="description-title">Description</h3>
                <p id="description">{description}</p>
                <h3 id="coders-thoughts-title">Coder's Thoughts</h3>
                <p id="coders-thoughts">{thoughts}</p>
                <button className="ext-btn" id="github-btn">Github</button>
                <button className="ext-btn" id="site-btn">View the Site</button>
            </div>
        </div>
    );
}

export default Project;