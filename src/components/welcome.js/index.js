import React from "react";
import "./style.scss";
import Form from "./../form";

const Welcome = () => {
  return (
    <section className="container-welcome">
      <h3 className="container-welcome__title">Welcome to</h3>
      <h1 className="container-welcome__h1">SpotiSearch</h1>
      <p className="container-welcome__text">
        Search your favourite songs over Spotify, just enter an artistist's name in the following
        search box and enjoy!
      </p>
      <div>
        <Form />
      </div>
    </section>
  );
};

export default Welcome;
