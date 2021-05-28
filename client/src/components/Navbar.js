
import React from 'react';
import Signup from './Signup';
import '../App.css';

function Navbar() {
    return(
        <div class="navbar">
            <header className="App-header">
                {/* logo */}
                <h1>Peace Out</h1><br/>
                <p>Peace of mind allows positive mental health.</p><br/>
                <p>So let's dive into peace!!!</p><br/>

            </header>
            {/* Signup */}
            <Signup />
        </div>
    )
}
export default Navbar

