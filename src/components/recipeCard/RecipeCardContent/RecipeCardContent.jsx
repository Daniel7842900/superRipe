import React, { Component } from "react";
import { Card } from "react-bootstrap";

class RecipeCardContent extends Component {
  render() {
    const { paginatedRecipes } = this.props;
    // console.log(paginatedRecipes);
    // console.log("RecipeCardContent is getting rendered...");

    if (paginatedRecipes.length !== 0) {
      return (
        <Card.Body className="recipe-main-div">
          {paginatedRecipes.map((recipe) => {
            return (
              <div>
                <Card.Title id="recipe-name">
                  <h4>{recipe.title}</h4>
                </Card.Title>
                <Card.Text>
                  <p id="prep-time">Prep time: {recipe.prep_time}</p>
                  <br />
                  <p id="craft-time">Craft time: {recipe.craft_time}</p>
                  <h4>Ingredients</h4>
                  <ul id="ingredients"></ul>
                  {recipe.ingredients.map((ingredient) => {
                    return <li key={ingredient}>{ingredient}</li>;
                  })}
                  <h4>Direction</h4>
                  <ul id="directions"></ul>
                  {recipe.directions.map((direction) => {
                    return <li key={direction}>{direction}</li>;
                  })}
                </Card.Text>
              </div>
            );
          })}
        </Card.Body>
      );
    } else {
      return (
        <div className="recipe-main-div">
          <h2>Sorry, a recipe doesn't exist!</h2>
        </div>
      );
    }
  }
}

export default RecipeCardContent;
