import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { getRecipes } from "../../services/fakeRecipes";
import { getCategories } from "../../services/fakeCategories";
import { paginate } from "../../utils/paginate";
import Paginate from "../common/pagination/Paginate";
import RecipeCardContent from "./RecipeCardContent/RecipeCardContent";
import "./RecipeCard.css";

class RecipeCard extends Component {
  state = {
    recipes: getRecipes(),
    categories: getCategories(),
    currentPage: 1,
    pageSize: 1,
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage, pageSize, recipes: allRecipes } = this.state;
    const { match } = this.props;

    // paginate method returns items on current page.
    const paginatedRecipes = paginate(allRecipes, currentPage, pageSize);
    console.log(paginatedRecipes);

    return (
      <div className="recipe-div content-container">
        <div className="recipe-display-div">
          <div className="recipe-cat">
            <Link
              to={`${match.url}/food`}
              className="btn btn-info btn-recipe-cat"
            >
              Food
            </Link>
            <Link
              to={`${match.url}/lifeHack`}
              className="btn btn-info btn-recipe-cat"
            >
              Life Hack
            </Link>
          </div>
          <RecipeCardContent
            paginatedRecipes={paginatedRecipes}
          ></RecipeCardContent>
          <Paginate
            itemsCount={this.state.recipes.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          ></Paginate>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
