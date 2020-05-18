import React from "react";

import "./style.scss";

const HeaderHome = () => (
  <header className="container-header">
    <img
      className="container-header__logo"
      src={process.env.PUBLIC_URL + "/assets/logo.png"}
      alt="logo"
    ></img>
    
  </header>
);

export default HeaderHome;
