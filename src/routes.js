import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import User from "./containers/single";
import Home from "./containers/index";
import logo from "./logo.svg";

export default function Routes() {
  return (
    <Router>
      <div className="container">
        <nav className="App-header">
          <ul className="App-header">
            <li className="App-link">
              <img src={logo} alt="agro_mall" />
            </li>
            <li className="App-link">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/:userid">
            <User />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
