import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../../utils/capitalize";
import "./RecipeCardContent.css";

class RecipeCardContent extends Component {
  render() {
    const { paginatedRecipes } = this.props;
    // console.log(paginatedRecipes);
    if (paginatedRecipes.length !== 0) {
      return (
        <Card.Body className="recipe-main-div">
          {paginatedRecipes.map((recipe) => {
            return (
              <div>
                <Card.Title id="recipe-name">
                  <h4>{capitalizeFirstLetter(recipe["title"])}</h4>
                </Card.Title>
                <Card.Img src={recipe["image"]} />
                <Card.Text>
                  <div className="recipe-time-div">
                    <span>
                      {/* {recipe["totalTime"] ? (
                        <p id="total-time">
                          Total Time: {recipe["totalTime"]} mins
                        </p>
                      ) : (
                        <p id="total-time">Total Time: 0 mins</p>
                      )} */}
                    </span>
                  </div>
                  <div className="recipe-ingredients-div">
                    <h4>Ingredients</h4>
                    <ul id="ingredients">
                      {recipe["ingredients"].map((ingredient) => {
                        return <li key={ingredient["text"]}>{ingredient}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="recipe-directions-div">
                    <h4>Direction</h4>
                    <ol id="directions">
                      {recipe["steps"].map((step) => {
                        return <li key={step["number"]}>{step["step"]}</li>;
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

RecipeCardContent.propTypes = {
  paginatedRecipes: PropTypes.array,
};

export default RecipeCardContent;
