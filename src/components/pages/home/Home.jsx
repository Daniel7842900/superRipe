import React, { Component } from "react";
import Header from "../../header/Header";
import SearchBar from "../../searchBar/SearchBar";
import Banner from "../../common/Banner/Banner";
import How from "../../how/How";
import Why from "../../why/Why";
import About from "../../about/About";
import Footer from "../../footer/Footer";

class Home extends Component {
  render() {
    const first_banner = "/resources/mainbanner-1440p.jpg";
    const second_banner = "/resources/food1.jpg";
    const thrid_banner = "/resources/smoothie-1440p.jpg";
    return (
      <div className="page-wrapper">
        <Header></Header>
        <Banner img={first_banner}></Banner>
        <SearchBar></SearchBar>
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
