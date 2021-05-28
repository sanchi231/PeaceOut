import React from 'react';
import Exercises from '../components/Exercises';
import '../App.css';

function Homepage() {
    return(
        <div className= "main">
            <h3>Exercises to follow: </h3>
    

            <Exercises 
            const exercise={
                {exName: "Meditation"}
            }
            />

            <Exercises 
            const exercise={
                {exName: "Breathing"}
            }
            />

            <Exercises 
            const exercise={
                {exName: "Eye"}
            }
            />

            <Exercises 
            const exercise={
                {exName: "Neck"}
            }
            />
            <br/>

        </div>
    )
}
export default Homepage

