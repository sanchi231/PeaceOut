import React from 'react';
import Exercises from '../components/Exercises';
import '../App.css';

function Homepage() {
    return (
        <div className="main">

            <header className="App-header">
                {/* logo */}
                <h1>Peace Out</h1><br />
                <p>Peace of mind allows positive mental health.</p><br />
                <p>So let's dive into peace!!!</p><br />

            </header>



            <h3>Exercises to follow: </h3>


            <Exercises const exercise={{ exName: "Meditation" }} />

            <Exercises const exercise={{ exName: "Breathing" }} />

            <Exercises const exercise={{ exName: "Eye" }} />

            <Exercises const exercise={{ exName: "Neck" }} />
            <br />

        </div>
    )
}
export default Homepage

