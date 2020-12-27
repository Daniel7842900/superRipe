import React, { Component } from "react";
import Header from "../../header/Header";
import Banner from "../../common/banner/Banner";
import { paginate } from "../../../utils/paginate";
import SearchBox from "../../searchBox/SearchBox";
import RecipeCard from "../../recipeCard/RecipeCard";
import Footer from "../../footer/Footer";
import { getRecipes } from "../../../services/fakeRecipes";
import { getCategories } from "../../../services/fakeCategories";

class Recipe extends Component {
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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = (category) => {
    this.setState(
      {
        selectedCategory: category,
        currentPage: 1,
      },
      () => {
        const { paginatedRecipes, pageSize, totalCount } = this.getPagedData();

        this.setState({
          // showRecipeCard: true,
          paginatedRecipes: paginatedRecipes,
          pageSize,
          totalCount,
        });
      }
    );
  };

  handleChange = (e) => {
    // Capture and update searchQuery whenever user types something in the input field.
    this.setState({ searchQuery: e.target.value });
  };

  handleSearch = (e) => {
    // Prevents full page reload.
    e.preventDefault();

    let searchQuery = this.state.searchQuery;

    // Redirect users to the given url that contains the searchQuery.
    this.props.history.push(`/recipes/search?=` + searchQuery);

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
    console.log(selectedCategory);
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
    } = this.state;
    const { match } = this.props;
    const first_banner = "/resources/mainbanner-1440p.jpg";

    return (
      <div className="page-wrapper">
        <Header></Header>
        <Banner img={first_banner}></Banner>
        <SearchBox
          value={this.state.searchQuery}
          onChange={this.handleChange}
          onSearch={this.handleSearch}
        ></SearchBox>
        <RecipeCard
          match={match}
          paginatedRecipes={paginatedRecipes}
          pageSize={pageSize}
          totalCount={totalCount}
          categories={categories}
          selectedCategory={selectedCategory}
          onPageChange={this.handlePageChange}
          onCategorySelect={this.handleCategorySelect}
        ></RecipeCard>
        <Footer></Footer>
      </div>
    );
  }
}

export default Recipe;
