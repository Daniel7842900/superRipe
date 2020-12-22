import React, { Component } from "react";
import Header from "../../header/Header";
import Banner from "../../common/banner/Banner";
import SearchBar from "../../searchBar/SearchBar";
import RecipeCard from "../../recipeCard/RecipeCard";
import Footer from "../../footer/Footer";

class Recipe extends Component {
  render() {
    const { match } = this.props;
    const first_banner = "/resources/mainbanner-1440p.jpg";

    return (
      <div className="page-wrapper">
        <Header></Header>
        <Banner img={first_banner}></Banner>
        <SearchBar></SearchBar>
        <RecipeCard match={match}></RecipeCard>
        <Footer></Footer>
      </div>
    );
  }
}

export default Recipe;
