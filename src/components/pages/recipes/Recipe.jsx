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
  };

  componentDidMount() {
    const categories = [{ name: "All" }, ...getCategories()];

    this.setState({ recipes: getRecipes(), categories });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category, currentPage: 1 });
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
  };

  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      recipes: allRecipes,
      selectedCategory,
      searchQuery,
    } = this.state;

    console.log("paged data fired");
    // const { searchQuery } = this.props;
    console.log(searchQuery);

    const searched = allRecipes.filter(
      (r) => r.ingredients.includes(searchQuery) === true
    );

    // console.log(searched);

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
    const { categories } = this.state;
    const { match, onSearch, onChange } = this.props;
    const { paginatedRecipes, pageSize, totalCount } = this.getPagedData();
    const first_banner = "/resources/mainbanner-1440p.jpg";
    console.log("Recipe is getting rendered...");

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
          onPageChange={this.handlePageChange}
          onCategorySelect={this.handleCategorySelect}
        ></RecipeCard>
        <Footer></Footer>
      </div>
    );
  }
}

export default Recipe;
