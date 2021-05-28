import React from 'react';
import './index.css';

function Exercises(props) {
    return (
        <div className="exercise-container">
            <a href="#">
                <li><button>{props.exercise.exName}</button></li>
            </a>
        </div>
    )
}

export default Exercises