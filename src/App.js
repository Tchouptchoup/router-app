import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';

import Home from "./Home"
import Histoire from "./History"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink exact to="/" activeStyle={{color: "red"}}>Accueil </NavLink>
          <NavLink to="/notre-histoire" activeStyle={{color: "red"}}> Histoire</NavLink>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={Histoire} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
