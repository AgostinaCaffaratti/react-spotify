import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const AlbumCard = ({ album = [] }) => {
  return album.map((a) => (
    <Link to={`/album/${a.id}`} key={a.id} className="container-album">
      <div className="container-album__card">
        <div className="container-album__card--img">
          <img
            src={a.images ? a.images[0].url : process.env.PUBLIC_URL + "/assets/logo.png"}
            alt="album"
          ></img>
        </div>
        <div className="container-album__card__info">
          <p className="container-album__card__info--title">{a.name}</p>
          <p className="container-album__card__info--year">{a.release_date.substring(0, 4)}</p>
        </div>
      </div>
    </Link>
  ));
};

export default AlbumCard;
