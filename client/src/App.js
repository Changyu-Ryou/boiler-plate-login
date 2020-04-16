import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'

function App() {
  return (
    <Router>
      <div>
     

        <hr />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/LoginPage" component={LoginPage} />
          <Route path="/RegisterPage" component={RegisterPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
