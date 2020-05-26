import React from "react";
import FavoriteCard from "./../favorites/card";
import "./style.scss";

const Favorites = () => (
  <section className="container-favourite">
    <h3 className="container-favourite__title">Favorites</h3>
    <h3 className="container-favourite__song-title">Favorites Song</h3>
    <div className="container__cards">
      <FavoriteCard />
      <FavoriteCard />
    </div>
  </section>
);

export default Favorites;
