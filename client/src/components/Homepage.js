import React from 'react';
import Exercises from '../components/Exercises';
import '../App.css';

function Homepage() {
    return (
        <div className="main">

            <header className="App-header">
                <img src="https://static.businessworld.in/article/article_extra_large_image/1594706806_YvmZn4_meditation_zen_chan_yoga_yyMZVch_FKTpxWP.jpg"/>
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

