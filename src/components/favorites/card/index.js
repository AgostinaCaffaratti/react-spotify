import React from "react";
import "./style.scss";

const FavoriteCard = ({ tracks = [] }) => {
  console.log(tracks);
  return (
    tracks &&
    tracks.map((t) => (
      <div className="container__card" key={t.id}>
        <div className="container__card--img">
          <img
            src={
              t.album.images ? t.album.images[0].url : process.env.PUBLIC_URL + "/assets/logo.png"
            }
            alt="album"
          ></img>
        </div>
        <div className="container__card__info">
          <p className="container__card__info--song-title">{t.name}</p>
          <div className="container__card__info--content">
            <p>Artist: {t.artists[0].name}</p>
            <p>Album: {t.album.name}</p>
          </div>
        </div>
      </div>
    ))
  );
};

export default FavoriteCard;
