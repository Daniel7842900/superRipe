import React, { Component } from "react";
import Header from "../../header/Header";
import Banner from "../../common/banner/Banner";
import SearchBox from "../../searchBox/SearchBox";
import RecipeCard from "../../recipeCard/RecipeCard";
import Footer from "../../footer/Footer";

class Recipe extends Component {
  render() {
    const {
      match,
      value,
      onChange,
      onSearch,
      paginatedRecipes,
      pageSize,
      currentPage,
      totalCount,
      onPageChange,
      onPreviousPage,
      onNextPage,
    } = this.props;

    const first_banner = "/resources/mainbanner-1440p.jpg";

    return (
      <div className="page-wrapper">
        <Header></Header>
        <Banner img={first_banner}></Banner>
        <SearchBox
          value={value}
          onChange={onChange}
          onSearch={onSearch}
        ></SearchBox>
        <RecipeCard
          match={match}
          paginatedRecipes={paginatedRecipes}
          pageSize={pageSize}
          totalCount={totalCount}
          currentPage={currentPage}
          onPageChange={onPageChange}
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
        ></RecipeCard>
        <Footer></Footer>
      </div>
    );
  }
}

export default Recipe;
