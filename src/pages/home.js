import React from "react";
import Layout from "./../components/layout";
import Welcome from "./../components/welcome.js";
import Favorites from "./../components/favorites";

const Home = () => (
  <Layout>
    <Welcome />
    <Favorites />
  </Layout>
);

export default Home;
