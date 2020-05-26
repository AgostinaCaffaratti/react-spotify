import React from "react";
import "./style.scss";

const ArtistPresentation = (artist = []) => {
  const ArtistData = artist.artist;
  console.log(ArtistData);
  return (
    <div className="artist-container">
      <img
        src={
          ArtistData.images ? ArtistData.images[0].url : process.env.PUBLIC_URL + "/assets/logo.png"
        }
        className="artist-container__img"
      ></img>
      <div className="artist-container__content">
        <h1 className="artist-container__content--title">{ArtistData.name}</h1>
        <p className="artist-container__content--genre">
          {ArtistData.genres ? ArtistData.genres[0] : ""}
        </p>
      </div>
    </div>
  );
};
export default ArtistPresentation;
