import React, { Component } from "react";
import "./How.css";

class How extends Component {
  render() {
    return (
      <div className="how-div content-container" id="how">
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
          </div>
        </div>
      </div>
    );
  }
}

export default How;
