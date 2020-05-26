import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";

import "./style.scss";
import { useFetch } from "./../../context/fetchContext";

const Form = () => {
  const { value, handleChange } = useFetch();
  const [redirect, setRedirect] = useState(false);

  return (
    <Fragment>
      <form className="container-welcome__form" onSubmit={() => setRedirect(true)}>
        <input
          type="search"
          className="container-welcome__form--input"
          placeholder="Search for another Artist"
          onChange={handleChange}
          value={value}
        ></input>

        <i className="fa fa-search"> </i>
      </form>
      {redirect && <Redirect to="/artists-list" />}
    </Fragment>
  );
};

export default Form;
