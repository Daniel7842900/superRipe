import React, { Component, Text } from "react";
import { Card } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../../utils/capitalize";
import "./RecipeCardContent.css";

class RecipeCardContent extends Component {
  render() {
    const { paginatedRecipes } = this.props;

    if (paginatedRecipes.length !== 0) {
      return (
        <Card.Body className="recipe-main-div">
          {paginatedRecipes.map((recipe) => {
            return (
              <div>
                <Card.Title id="recipe-name">
                  <h4>{capitalizeFirstLetter(recipe.title)}</h4>
                </Card.Title>
                <Card.Text>
                  <div className="recipe-time-div">
                    <span>
                      {recipe.prep_time ? (
                        <p id="prep-time">Prep time: {recipe.prep_time} mins</p>
                      ) : (
                        <p id="prep-time">Prep time: 0 mins</p>
                      )}
                      {recipe.craft_time ? (
                        <p id="craft-time">
                          Craft time: {recipe.craft_time} mins
                        </p>
                      ) : (
                        <p id="craft-time">Craft time: 0 mins</p>
                      )}
                    </span>
                  </div>
                  <div className="recipe-ingredients-div">
                    <h4>Ingredients</h4>
                    <ul id="ingredients">
                      {recipe.ingredients.map((ingredient) => {
                        return <li key={ingredient}>{ingredient}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="recipe-directions-div">
                    <h4>Direction</h4>
                    <ol id="directions">
                      {recipe.directions.map((direction) => {
                        return <li key={direction}>{direction}</li>;
                      })}
                    </ol>
                  </div>
                </Card.Text>
              </div>
            );
          })}
        </Card.Body>
      );
    } else {
      return (
        <div className="recipe-main-div no-recipe">
          <h2>Sorry, a recipe doesn't exist!</h2>
        </div>
      );
    }
  }
}

export default RecipeCardContent;
