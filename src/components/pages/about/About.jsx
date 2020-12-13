import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about-div content-container" id="about">
        <div className="about-top-div">
          <h1>About us</h1>
        </div>
        <div className="about-main-div">
          <div className="about-description">
            <br />
            <p>
              We're a team of beginner developers looking to create software
              that improves the world.
            </p>
            <br />
            <p>
              We've created a mobile website that shows you how to keep your
              produce fresh longer, keep your food waste low, and reuse your
              not-so-fresh produce!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
