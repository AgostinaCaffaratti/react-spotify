import React from "react";
import LayoutHome from "../components/layout-home";
import Welcome from "./../components/welcome.js";
import Favorites from "./../components/favorites";

const Home = () => (
  <LayoutHome>
    <Welcome />
    <Favorites />
  </LayoutHome>
);

export default Home;
