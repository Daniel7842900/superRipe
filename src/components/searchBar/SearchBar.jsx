import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="main-function-div content-container">
        <div className="main-top-div">
          <h1>Super Ripe</h1>
        </div>
        <div className="main-search-div">
          <div className="search-div">
            <input type="text" placeholder="Search food..." name="search" />
            <button type="submit">
              <img
                src="/resources/search-icon.png"
                alt=""
                id="search-btn-img"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
