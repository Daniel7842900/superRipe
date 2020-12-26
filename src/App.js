import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Recipe from "./components/pages/recipes/Recipe";
import "./App.css";

class App extends Component {
  // state = {
  //   searchQuery: "",
  //   searchResults: [],
  // };

  // componentDidMount() {

  // }

  // handleChange = (e) => {
  //   // Capture and update searchQuery whenever user types something in the input field.
  //   this.setState({ searchQuery: e.target.value });
  // };

  // handleSearch = (e) => {
  //   // Prevents full page reload.
  //   e.preventDefault();

  //   let searchQuery = this.state.searchQuery;

  //   // Redirect users to the given url that contains the searchQuery.
  //   this.props.history.push(`/recipes/search?=` + searchQuery);
  // };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/recipes"
            render={(props) => (
              <Recipe
                // searchQuery={this.state.searchQuery}
                // onChange={this.handleChange}
                // onSearch={this.handleSearch}
                {...props}
              ></Recipe>
            )}
          ></Route>
          <Route
            path="/"
            render={(props) => (
              <Home
                // searchQuery={this.state.searchQuery}
                // onChange={this.handleChange}
                // onSearch={this.handleSearch}
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
