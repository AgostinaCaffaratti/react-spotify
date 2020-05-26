import React from "react";
import { useFetch } from "./../../context/fetchContext";
import Form from "./../../components/form";
import "./style.scss";

const ArtistSearch = () => {
  const { datos } = useFetch();

  return (
    <div className="artists-container">
      <h1>Artists</h1>
      <p className="artists-container__p"> You are Currently searching: "{datos}"</p>
      <div className="artists-container__form">
        <Form />
      </div>
    </div>
  );
};

export default ArtistSearch;
