import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <img src={this.props.img} className="banner-img"></img>
      </div>
    );
  }
}

export default Banner;
