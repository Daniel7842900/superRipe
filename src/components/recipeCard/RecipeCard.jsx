import React, { Component } from "react";
import "./RecipeCard.css";

class RecipeCard extends Component {
  render() {
    return (
      <div className="recipe-div content-container">
        <div className="recipe-display-div">
          <div className="recipe-cat">
            <a href="">
              <button>Food</button>
            </a>
            <a href="">
              <button>Life Hack</button>
            </a>
          </div>
          <h2 id="recipe-name">recipe name</h2>
          <div className="recipe-main-div">
            <p1 id="prep-time"></p1>
            <br />
            <p1 id="craft-time"></p1>
            <h4>Ingredients</h4>
            <ul id="ingredients"></ul>
            <h4>Direction</h4>
            <ul id="directions"></ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
