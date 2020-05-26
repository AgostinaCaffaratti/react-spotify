import React, { useState } from "react";
import NavBar from "../navbar";
import Form from "../form";
import "./style.scss";

const HeaderArtistsList = () => {
  const [search, setSearch] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (search === false) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };

  return (
    <header className="container">
      <div className="container-header-artists-list">
        <img
          className="container-header-artists-list__logo"
          src={process.env.PUBLIC_URL + "/assets/logo.png"}
          alt="logo"
        ></img>
        <NavBar onClick={handleClick} />
        <div className="container-header-artists-list__search">
          <Form />
        </div>
      </div>
      {search === true && (
        <div className="container-header-artists-list__form">
          <Form />
        </div>
      )}
    </header>
  );
};

export default HeaderArtistsList;
