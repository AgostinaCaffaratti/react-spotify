import React from "react";
import './style.scss'

const ArtistsListCard = () => (
  
  <div className="container-artists__card">
    <div className="container-artists__card--img">
      <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="album"></img>
    </div>
    <div className="container-artists__card__info">
      <p className="container-artists__card__info--title">Artist</p>
      
    </div>
  </div>
);

export default ArtistsListCard;