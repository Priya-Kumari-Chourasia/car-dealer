import React from "react";
import "./App.scss";
import Auction from "./Components/Auction/Auction";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Trending from "./Components/Trending/Trending";
import Sellers from "./Components/Sellers/Sellers";
import Review from "./Components/Review/Review";
const App = () => {
  return (<div>
  <Navbar/>
  <Home/>
  <Search/>
  <Trending/>
  <Sellers/>
  <Auction/>
  <Review/>
  <Footer/>
  </div>
  );
};
export default App;
