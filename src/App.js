import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import How from "./components/pages/how/How";
import Why from "./components/pages/why/Why";
import About from "./components/pages/about/About";
import NavBar from "./components/header/navBar/NavBar";
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
          <Route path="/how" component={How}></Route>
          <Route path="/why" component={Why}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
