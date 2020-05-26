import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const ArtistsListCard = ({ artists = [] }) => {
  console.log(artists);

  return artists.map((artists) => (
    <Link to={`/artist/${artists.id}`} className="container-artists">
      <div key={artists.id} className="container-artists__card">
        <img
          src={
            artists.images[0] ? artists.images[0].url : process.env.PUBLIC_URL + "/assets/logo.png"
          }
          alt={artists.name}
        ></img>

        <div className="container-artists__card__info">
          <p className="container-artists__card__info--title">{artists.name}</p>
        </div>
      </div>
    </Link>
  ));
};
export default ArtistsListCard;
