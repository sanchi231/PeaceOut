import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

function Exercises(props) {
    return (
        <div className="exercise-container">
            <a href="undefined">

                <li><button><Link to={'activity/' + props.exercise.exName} >{props.exercise.exName}</Link></button></li>
            </a>
        </div>
    )
}

export default Exercises