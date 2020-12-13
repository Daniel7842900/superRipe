import React, { Component } from "react";
import "./How.css";

class How extends Component {
  render() {
    return (
      <div className="how-div content-container">
        <div className="how-top-div">
          <h1>How do you use this?</h1>
        </div>
        <div className="how-main-div">
          <div className="how-description">
            <br />
            <p>
              We streamlined our website to make it as easy as possible to
              reduce food waste.
            </p>
            <br />
            <p>
              Simply type in what type of food you have that is going bad and
              search. We provide hundreds of recipes, tips, and ideas for using
              up this food instead of throwing it in the bin.
            </p>
            <br />
            <p>
              Unlike other websites, we give you everything - from food recipes,
              to health product recipes, to tips and facts. Feel free to filter
              your search results to see only what you want to see.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default How;
