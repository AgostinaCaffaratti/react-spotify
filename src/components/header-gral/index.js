import React, { useState } from "react";
import NavBar from "../navbar";
import Form from "../form";
import "./style.scss";

const HeaderGral = () => {
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
      <div className="container-header-gral">
        <img
          className="container-header-gral__logo"
          src={process.env.PUBLIC_URL + "/assets/logo.png"}
          alt="logo"
        ></img>
        <NavBar onClick={handleClick} />
        <div className="container-header-gral__search">
          <Form />
        </div>
      </div>
      {search === true && (
        <div className="container-header-gral__form">
          <Form />
        </div>
      )}
    </header>
  );
};

export default HeaderGral;
