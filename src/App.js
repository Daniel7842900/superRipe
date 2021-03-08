import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Recipe from "./components/pages/recipes/Recipe";
import NotFound from "./components/pages/notFound/NotFound";
import { paginate } from "./utils/paginate";

class App extends Component {
  state = {
    recipes: [],
    currentPage: 1,
    pageSize: 1,
    searchQuery: "",
    paginatedRecipes: [],
  };

  // async componentDidMount() {
  //   // const url = "/api/recipes";
  //   const url = `${process.env.REACT_APP_API_URL}/recipes`;
  //   // console.log(url);
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   // console.log(data["recipes"]);
  //   const categories = [{ name: "All" }, ...data["categories"]];
  //   this.setState({ recipes: data["recipes"], categories });
  //   // this.setState({ recipes: data["recipes"] });
  // }

  /* Handling previous button function of pagination */
  handlePreviousPage = (page) => {
    this.setState({ currentPage: page - 1 }, () => {
      const { paginatedRecipes, pageSize, totalCount } = this.getPagedData();

      this.setState({
        paginatedRecipes: paginatedRecipes,
        pageSize,
        totalCount,
      });
    });
  };

  /* Handling next button function of pagination */
  handleNextPage = (page) => {
    this.setState({ currentPage: page + 1 }, () => {
      const { paginatedRecipes, pageSize, totalCount } = this.getPagedData();

      this.setState({
        paginatedRecipes: paginatedRecipes,
        pageSize,
        totalCount,
      });
    });
  };

  handlePageChange = (page) => {
    // On page change (in pagination), we set that page as currentPage
    // and then use that for parsing new paged data.
    this.setState({ currentPage: page }, () => {
      const { paginatedRecipes, pageSize, totalCount } = this.getPagedData();

      this.setState({
        paginatedRecipes: paginatedRecipes,
        pageSize,
        totalCount,
      });
    });
  };

  handleChange = (e) => {
    // Capture and update searchQuery whenever user types something in the input field.
    this.setState({ searchQuery: e.target.value.toLowerCase() });
  };

  handleSearch = (e) => {
    // Prevents full page reload.
    e.preventDefault();

    let searchQuery = this.state.searchQuery;

    // Redirect users to the given url that contains the searchQuery.
    this.props.history.push(`/recipes?search=` + searchQuery);

    const url = `${process.env.REACT_APP_API_URL}/searchByIngredient`;

    fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ searchQuery: searchQuery }),
    })
      .then((response) => {
        // The response we get here is not JSON, but an object with a series of methods
        // that can be used depending on what you want to do with the information.
        // To convert the object returned into JSON, we use json() method.
        return response.json();
      })
      .then((json) => {
        console.log(json);
        const searchedRecipes = [...json];

        this.setState({ recipes: searchedRecipes }, () => {
          const {
            paginatedRecipes,
            pageSize,
            totalCount,
          } = this.getPagedData();

          this.setState({
            paginatedRecipes: paginatedRecipes,
            pageSize,
            totalCount,
          });
        });
      })
      .catch((error) => console.log(error));
  };

  getPagedData = () => {
    const { currentPage, pageSize, recipes: allRecipes } = this.state;

    // paginate method returns items on current page.
    const paginatedRecipes = paginate(allRecipes, currentPage, pageSize);

    return { paginatedRecipes, pageSize, totalCount: allRecipes.length };
  };

  render() {
    const { paginatedRecipes, pageSize, totalCount, currentPage } = this.state;

    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/recipes/:search?"
            exact
            render={(props) => (
              <Recipe
                value={this.state.searchQuery}
                onChange={this.handleChange}
                onSearch={this.handleSearch}
                paginatedRecipes={paginatedRecipes}
                pageSize={pageSize}
                currentPage={currentPage}
                totalCount={totalCount}
                onPageChange={this.handlePageChange}
                onPreviousPage={this.handlePreviousPage}
                onNextPage={this.handleNextPage}
                searchQuery={this.searchQuery}
                {...props}
              ></Recipe>
            )}
          ></Route>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                value={this.state.searchQuery}
                onChange={this.handleChange}
                onSearch={this.handleSearch}
                {...props}
              ></Home>
            )}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
