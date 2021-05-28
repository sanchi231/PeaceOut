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
