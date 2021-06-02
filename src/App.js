import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import { Index } from "./components/Index";
import { About } from "./components/About";

export class App extends React.Component {
  routes = [
    {
      path: "/home",
      component: Index
    },
    {
      path: "/about",
      component: About
    }
  ];

  render() {
    return (
      <div>
        <Router>
          <div className="NavigationBar">
            <ul>
              <li>
                <Link to="/home">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>Contact me</li>
            </ul>
          </div>
          {/* This literally took me about a day to make this work... Oh well now I will probably never put div tags into a switch element */}
          <Switch>
            {this.routes.map((route, i) => (
              <Route key={i} component={route.component} path={route.path} />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}
