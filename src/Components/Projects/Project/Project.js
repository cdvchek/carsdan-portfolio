import React from 'react';
import { useParams } from 'react-router-dom';
import NLCCTimecard from '../NLCCTimecard/NLCCTimecard';
import UWCBProjects from '../UWCBProjects/UWCBProjects';

function Project(props) {
    const { id } = useParams();

    switch (id) {
        case "nlcctimecard":
            return(<div className='Project'><NLCCTimecard></NLCCTimecard></div>);

        case "uwcbprojects":
            return(<div className='Project'><UWCBProjects></UWCBProjects></div>);
    
        default:
            return(<div className='Project'><NLCCTimecard></NLCCTimecard></div>)
    }
}

export default Project;