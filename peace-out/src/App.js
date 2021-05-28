import logo from './logo.svg';
import './App.css';
import Exercises from './Exercises.js';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header className="App-header">
        <img src={logo} alt="logo"/>
        <h1>Peace Out</h1><br/>
        <p>Peace of mind allows positive mental health.</p><br/>
        <p>So let's dive into peace!!!</p><br/>
      </header>

      <main className="main">
        <h3>Exercises to follow: </h3>
      

        <Exercises 
          exercise={
            {exName: "Meditation"}
          }
        />

        <Exercises 
          exercise={
            {exName: "Breathing"}
          }
        />

        <Exercises 
          exercise={
            {exName: "Eye"}
          }
        />

        <Exercises 
          exercise={
            {exName: "Neck"}
          }
        />
        <br/>
      </main>

      <footer className = "footer"> 
        Made with Love 2021
      </footer>
    </div>
  );
}

export default App;
