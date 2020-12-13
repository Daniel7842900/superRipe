import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Banner from "./components/common/Banner/Banner";
import How from "./components/How/How";
import Why from "./components/Why/Why";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
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

export default App;
