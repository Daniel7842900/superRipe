import React, { Component } from "react";
import { NavHashLink } from "react-router-hash-link";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-bar">
          <ul>
            <li className="nav-cat">
              <NavHashLink to="/#how">How</NavHashLink>
            </li>
            <li className="nav-cat">
              <NavHashLink to="/#why">Why</NavHashLink>
            </li>
            <li className="nav-cat">
              <NavHashLink to="/#about">About</NavHashLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
