import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../header/Header";
import SearchBox from "../../searchBox/SearchBox";
import Banner from "../../common/banner/Banner";
import How from "../how/How";
import Why from "../why/Why";
import About from "../about/About";
import Footer from "../../footer/Footer";

class Home extends Component {
  render() {
    const { value, onChange, onSearch } = this.props;

    const first_banner = "/resources/mainbanner-1440p.jpg";
    const second_banner = "/resources/food1.jpg";
    const thrid_banner = "/resources/smoothie-1440p.jpg";

    return (
      <div className="page-wrapper" data-test="homeComponent">
        <Header data-test="headerComponent"></Header>
        <Banner img={first_banner} data-test="first-banner"></Banner>
        <SearchBox
          value={value}
          onChange={onChange}
          onSearch={onSearch}
          data-test="searchBoxComponent"
        ></SearchBox>
        <How data-test="howComponent"></How>
        <Banner img={second_banner} data-test="second-banner"></Banner>
        <Why data-test="whyComponent"></Why>
        <Banner img={thrid_banner} data-test="third-banner"></Banner>
        <About data-test="aboutComponent"></About>
        <Footer data-test="footerComponent"></Footer>
      </div>
    );
  }
}

Home.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};

export default Home;
