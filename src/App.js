import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home/Home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
