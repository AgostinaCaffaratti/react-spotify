import React from "react";

import "./style.scss";

const Header = () => (
  <header className="container-header">
    <img
      className="container-header__logo"
      src={process.env.PUBLIC_URL + "/assets/logo.png"}
      alt="logo"
    ></img>
    <img
      className="container-header__loop"
      src={process.env.PUBLIC_URL + "/assets/loop.png"}
      alt="logo"
    ></img>
    <form className="container-header__search">
      <input
        type="search"
        className="container-header__search--input"
        placeholder="Search for another Artist"
      ></input>
    </form>
  </header>
);

export default Header;
