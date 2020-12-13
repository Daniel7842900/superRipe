import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-bar">
          <ul>
            <li className="nav-cat">
              <NavLink to="/how">How</NavLink>
            </li>
            <li className="nav-cat">
              <NavLink to="/why">Why</NavLink>
            </li>
            <li className="nav-cat">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
