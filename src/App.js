import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Recipe from "./components/pages/recipes/Recipe";
import NotFound from "./components/pages/notFound/NotFound";
import { getCategories } from "./services/fakeCategories";
import { getRecipes } from "./services/fakeRecipes";
import { paginate } from "./utils/paginate";

class App extends Component {
  state = {
    recipes: [],
    categories: [],
    selectedCategory: "",
    currentPage: 1,
    pageSize: 1,
    searchQuery: "",
    paginatedRecipes: [],
  };

  componentDidMount() {
    const categories = [{ name: "All" }, ...getCategories()];

    this.setState({ recipes: getRecipes(), categories });
  }

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

  handleCategorySelect = (category) => {
    // On category change (in pagination), we set that category as selectedCategory
    // and then use that for parsing new paged data.
    this.setState(
      {
        selectedCategory: category,
        currentPage: 1,
      },
      () => {
        const { paginatedRecipes, pageSize, totalCount } = this.getPagedData();

        this.setState({
          paginatedRecipes: paginatedRecipes,
          pageSize,
          totalCount,
        });
      }
    );
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
    this.props.history.push(`/recipes/?search=` + searchQuery);

    const { paginatedRecipes, pageSize, totalCount } = this.getPagedData();

    this.setState({
      paginatedRecipes: paginatedRecipes,
      pageSize,
      totalCount,
    });
  };

  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      recipes: allRecipes,
      selectedCategory,
      searchQuery,
    } = this.state;

    const searched = allRecipes.filter(
      (r) => r.ingredients.includes(searchQuery) === true
    );

    // filter method returns filtered recipes by categories.
    // If selectedCategory is truthy, we return recipes that have same category id with selected category id.
    // Otherwise, we simply return all recipes.
    // selectedCategory.id is for "all" category. ("all" category doesn't have id)
    const filtered =
      selectedCategory && selectedCategory.id
        ? searched.filter((r) => r.category.id === selectedCategory.id)
        : searched;

    // paginate method returns items on current page.
    const paginatedRecipes = paginate(filtered, currentPage, pageSize);

    return { paginatedRecipes, pageSize, totalCount: filtered.length };
  };

  render() {
    const {
      categories,
      paginatedRecipes,
      pageSize,
      totalCount,
      selectedCategory,
      currentPage,
    } = this.state;

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
                categories={categories}
                paginatedRecipes={paginatedRecipes}
                pageSize={pageSize}
                currentPage={currentPage}
                totalCount={totalCount}
                selectedCategory={selectedCategory}
                onPageChange={this.handlePageChange}
                onPreviousPage={this.handlePreviousPage}
                onNextPage={this.handleNextPage}
                onCategorySelect={this.handleCategorySelect}
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
