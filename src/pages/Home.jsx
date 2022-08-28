import React from "react";
import Info from "../components/Info";
import About from "../components/About";
import Interests from "../components/Interests";

import "../styles.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="background-layer">
      <div className="wrapper">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
