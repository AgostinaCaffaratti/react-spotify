import React, { useState } from "react";
import NavBar from "./../navbar";
import Form from "./../form";
import "./style.scss";

const Header = () => {
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
      <div className="container-header">
        <img
          className="container-header__logo"
          src={process.env.PUBLIC_URL + "/assets/logo.png"}
          alt="logo"
        ></img>
        <NavBar onClick={handleClick} />
      </div>
      { search === true && <div className="container-header__form">
         <Form />
      </div>}
    </header>
  );
};

export default Header;
