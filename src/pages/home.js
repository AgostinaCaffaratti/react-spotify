import React from "react";
import LayoutHome from "./../components/layouts/layout-home";
import Welcome from "./../components/welcome.js";
import "./style.scss";

const Home = () => (
  <LayoutHome>
    <div className="home-container">
      <Welcome />
      {/* <Favorites /> */}
    </div>
  </LayoutHome>
);

export default Home;
