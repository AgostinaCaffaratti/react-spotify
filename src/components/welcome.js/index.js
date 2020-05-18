import React from "react";
import "./style.scss";
import Form from "./../form";

const Welcome = () => (
  <section className="container-welcome">
    <p className="container-welcome__title">Welcome to</p>
    <h1 className="container-welcome__h1">SpotiSearch</h1>
    <p className="container-welcome__text">
      Search your favourite songs over Spotify, just enter an artistist's name
      in the following search box and enjoy!
    </p>
    <Form />
  </section>
);

export default Welcome;
