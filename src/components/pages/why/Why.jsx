import React, { Component } from "react";
import "./Why.css";

class Why extends Component {
  render() {
    return (
      <div className="why-div content-container" id="why">
        <div className="why-top-div">
          <h1>Why did we make this?</h1>
        </div>
        <div className="why-main-div">
          <div className="why-description">
            <br />
            <p>
              Food waste has become a huge problem in every household. Although
              composting your food scraps is helpful, it's still just above a
              landfill!
            </p>
            <br />
            <p>
              There are many ways you can improve your habits to reduce food
              waste, reuse older vegetables and fruits, and keep your produce
              fresh longer.
            </p>
            <br />
            <p>
              Look up recipes to use up older fruits or ways to make health
              products out of them. - so nothing gets thrown out.
            </p>
            <br />
            <p>
              Give us a try! Search for a food item you have that's a little
              over ripe, and see all you can do with it.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Why;
