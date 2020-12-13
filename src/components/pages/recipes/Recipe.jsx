import React, { Component } from "react";
import Header from "../../header/Header";
import Banner from "../../common/Banner/Banner";
import SearchBar from "../../searchBar/SearchBar";
import RecipeCard from "../../recipeCard/RecipeCard";
import Footer from "../../footer/Footer";

class Recipe extends Component {
  render() {
    const first_banner = "/resources/mainbanner-1440p.jpg";

    return (
      <div className="page-wrapper">
        <Header></Header>
        <Banner img={first_banner}></Banner>
        <SearchBar></SearchBar>
        <RecipeCard></RecipeCard>
        <Footer></Footer>
      </div>
    );
  }
}

export default Recipe;
