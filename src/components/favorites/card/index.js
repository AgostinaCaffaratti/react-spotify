import React from "react";
import "./style.scss";

const FavoriteCard = () => (
  <div className="container__card">
    <div className="container__card--img">
      <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="album"></img>
    </div>
    <div className="container__card__info">
      <p className="container__card__info--title">Artist</p>
      <p className="container__card__info--song-title">Song</p>
      <div className="container__card__info--content">
        <p>Artist: artist</p>
        <p>Album: album</p>
      </div>
    </div>
  </div>
);

export default FavoriteCard;
