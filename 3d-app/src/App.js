import React, { Component } from 'react';
import { Switch,  BrowserRouter as Router, Route } from 'react-router-dom';
import LoginCompo from './components/LoginCompo';
import FormCompo from './components/FormCompo';

import './App.css';

class App extends Component {

  render() {
    return (
        <div className="app-compo">
          <div className="app-title">
            <h1>Demo app coming soon!</h1>
          </div>
          <Router>
            <Switch>      
              <Route path="/" exact component={LoginCompo} />
              <Route path="/form" exact component={FormCompo} />
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;