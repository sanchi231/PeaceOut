<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './compents/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
=======
import React from 'react'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}

export default App
>>>>>>> main
