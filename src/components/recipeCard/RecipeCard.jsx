import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { getRecipes } from "../../services/fakeRecipes";
import { paginate } from "../../utils/paginate";
import "./RecipeCard.css";
import Paginate from "../common/pagination/Paginate";

class RecipeCard extends Component {
  state = {
    recipes: getRecipes(),
    currentPage: 1,
    pageSize: 1,
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage, pageSize, recipes: allRecipes } = this.state;

    // paginate method returns items on current page.
    const recipes = paginate(allRecipes, currentPage, pageSize);
    console.log(recipes);

    return (
      <div className="recipe-div content-container">
        <div className="recipe-display-div">
          <div className="recipe-cat">
            <a href="">
              <Button variant="info" className="btn-recipe-cat">
                Food
              </Button>
            </a>
            <a href="">
              <Button variant="info" className="btn-recipe-cat">
                Life Hack
              </Button>
            </a>
          </div>
          <div className="recipe-main-div">
            {recipes.map((recipe) => {
              return (
                <div>
                  <h2 id="recipe-name">recipe name</h2>
                  <h4>{recipe.title}</h4>
                  <p id="prep-time">Prep time: {recipe.prep_time}</p>
                  <br />
                  <p id="craft-time">Craft time: {recipe.craft_time}</p>
                  <h4>Ingredients</h4>
                  <ul id="ingredients"></ul>
                  {recipe.ingredients.map((ingredient) => {
                    return <li>{ingredient}</li>;
                  })}
                  <h4>Direction</h4>
                  <ul id="directions"></ul>
                  {recipe.directions.map((direction) => {
                    return <li>{direction}</li>;
                  })}
                </div>
              );
            })}
            <Paginate
              recipes={this.state.recipes}
              itemsCount={this.state.recipes.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            ></Paginate>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
