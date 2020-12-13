import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import NavBar from "./components/header/navBar/NavBar";
import Recipe from "./components/pages/recipes/Recipe";
import "./App.css";

class App extends Component {
  refHow = React.createRef();
  refWhy = React.createRef();
  refAbout = React.createRef();
  render() {
    return (
      <React.Fragment>
        {/* <NavBar ></NavBar> */}
        <Switch>
          <Route path="/recipes" component={Recipe}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
