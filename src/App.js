import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Recipe from "./components/pages/recipes/Recipe";
import NotFound from "./components/pages/notFound/NotFound";
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

  async componentDidMount() {
    // const url = "/api/recipes";
    const url = `${process.env.REACT_APP_API_URL}/recipes`;
    // console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data["recipes"]);
    const categories = [{ name: "All" }, ...data["categories"]];
    this.setState({ recipes: data["recipes"], categories });
  }

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

  handleCategorySelect = (category) => {
    // On category change, we set that category as selectedCategory
    // and then use that for parsing new paged data.
    console.log(category);
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
    this.props.history.push(`/recipes?search=` + searchQuery);

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

    const searched = [];

    for (let i = 0; i < allRecipes.length; i++) {
      let recipe = allRecipes[i];
      for (let j = 0; j < recipe.ingredients.length; j++) {
        if (recipe.ingredients[j].includes(searchQuery) === true) {
          searched.push(recipe);
        }
      }
    }

    // filter method returns filtered recipes by categories.
    // If selectedCategory is truthy, we return recipes that have same category id with selected category id.
    // Otherwise, we simply return all recipes.
    // selectedCategory.id is for "all" category. ("all" category doesn't have id)
    const filtered =
      selectedCategory && selectedCategory.id
        ? searched.filter((r) => r.category_id === selectedCategory.id)
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
