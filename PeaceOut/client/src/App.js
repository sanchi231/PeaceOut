import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';


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
