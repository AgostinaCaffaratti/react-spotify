import React from "react";
import NavBar from './../navbar'
import NavBarSearch from  './../navBarSearch'

import "./style.scss";
import NavBarSearch from "../navBarSearch";

const Header = () => (
  <header className="container-header">
    <img
      className="container-header__logo"
      src={process.env.PUBLIC_URL + "/assets/logo.png"}
      alt="logo"
    ></img>
    <NavBar/>
    <NavBarSearch/>
    
  </header>
);

export default Header;