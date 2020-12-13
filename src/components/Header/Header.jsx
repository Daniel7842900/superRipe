import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-bar">
          <ul>
            <li className="nav-cat">
              <a href="#">How</a>
            </li>
            <li className="nav-cat">
              <a href="#">Why</a>
            </li>
            <li className="nav-cat">
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
