import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { getRecipes } from "../../services/fakeRecipes";
import "./RecipeCard.css";

class RecipeCard extends Component {
  state = {
    recipes: getRecipes(),
  };
  render() {
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
          <h2 id="recipe-name">recipe name</h2>
          <div className="recipe-main-div">
            {this.state.recipes.map((recipe) => {
              return (
                <div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
