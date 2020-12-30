import React, { Component } from "react";
import Header from "../../header/Header";
import SearchBox from "../../searchBox/SearchBox";
import Banner from "../../common/banner/Banner";
import How from "../how/How";
import Why from "../why/Why";
import About from "../about/About";
import Footer from "../../footer/Footer";

class Home extends Component {
  render() {
    const {
      match,
      value,
      onChange,
      onSearch,
      categories,
      paginatedRecipes,
      pageSize,
      totalCount,
      selectedCategory,
      onPageChange,
      onCategorySelect,
    } = this.props;

    const first_banner = "/resources/mainbanner-1440p.jpg";
    const second_banner = "/resources/food1.jpg";
    const thrid_banner = "/resources/smoothie-1440p.jpg";
    console.log("Home is getting rendered...");

    return (
      <div className="page-wrapper">
        <Header></Header>
        <Banner img={first_banner}></Banner>
        <SearchBox
          value={value}
          onChange={onChange}
          onSearch={onSearch}
        ></SearchBox>
        <How></How>
        <Banner img={second_banner}></Banner>
        <Why></Why>
        <Banner img={thrid_banner}></Banner>
        <About></About>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
