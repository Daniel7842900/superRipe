import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Recipe from "./components/pages/recipes/Recipe";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/recipes" component={Recipe}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
