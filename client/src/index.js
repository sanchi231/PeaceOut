import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';


import App from './App';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import Activity from './components/Activity';



const routing = (
  <Router>
    <Switch>
      <App>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/activity/:id" component={Activity} />
        <Route exact path="/notfound" component={NotFound} />
      </App>
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
