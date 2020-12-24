import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Recipe from "./components/pages/recipes/Recipe";
import "./App.css";

class App extends Component {
  state = {
    searchQuery: "",
  };

  handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    this.setState({ searchQuery: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    let searchQuery = this.state.searchQuery;
    // console.log(searchQuery);

    this.props.history.push(`/recipes/search?=` + searchQuery);
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/recipes"
            render={(props) => (
              <Recipe
                searchQuery={this.state.searchQuery}
                onChange={this.handleChange}
                onSearch={this.handleSearch}
                {...props}
              ></Recipe>
            )}
          ></Route>
          <Route
            path="/"
            render={(props) => (
              <Home
                searchQuery={this.state.searchQuery}
                onChange={this.handleChange}
                onSearch={this.handleSearch}
                {...props}
              ></Home>
            )}
          ></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
