import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Recipe from "./components/pages/recipes/Recipe";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/recipes"
            render={(props) => <Recipe {...props}></Recipe>}
          ></Route>
          <Route path="/" render={(props) => <Home {...props}></Home>}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
