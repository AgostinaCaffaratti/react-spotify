import React from "react";
import "./style.scss";

const AlbumPresentation = ({ album = [] }) => {
  console.log(album);
  return (
    <div className="album-container">
      <img
        src={album.images ? album.images[0].url : process.env.PUBLIC_URL + "/assets/logo.png"}
        className="album-container__img"
      ></img>
      <div className="album-container__content">
        <h1 className="album-container__content--title">{album.name}</h1>
        <p className="album-container__content--year">
          {album.release_date ? album.release_date.substring(0, 4) : ""}
        </p>
      </div>
    </div>
  );
};
export default AlbumPresentation;
