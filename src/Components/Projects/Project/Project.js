import React from 'react';
import { useParams } from 'react-router-dom';
import NLCCTimecard from '../NLCCTimecard/NLCCTimecard';
import UWCBProjects from '../UWCBProjects/UWCBProjects';
import Header from '../../Header/Header';

function Project(props) {
    const { id } = useParams();

    switch (id) {
        case "nlcctimecard":
            return(
                <>
                    <Header></Header>
                    <div className='Project'><NLCCTimecard></NLCCTimecard></div>
                </>
            );

        case "uwcbprojects":
            return(
                <>
                    <Header></Header>
                    <div className='Project'><UWCBProjects></UWCBProjects></div>
                </>
            );
    
        default:
            return(
                <>
                    <Header></Header>
                    <div className='Project'><NLCCTimecard></NLCCTimecard></div>
                </>
            )
    }
}

export default Project;