import React, { useEffect, useState } from "react";
import FavoriteCard from "./../favorites/card";
import "./style.scss";
import { SongsEndpoint, Header } from "./../../config";

const Favorites = () => {
  let songIDS = localStorage.getItem("songsIDs");
  if (SongsIDS) {
    console.log(typeof songIDS);
    let ids = JSON.parse(songIDS);

    console.log(ids);
    let Trackstring = ids && ids.toString();
    // console.log(Trackstring);
  }
  const [tracks, setTracks] = useState();

  useEffect(() => {
    obtenerSongs();
  }, []);

  const obtenerSongs = async () => {
    try {
      const res = await fetch(`${SongsEndpoint.url}${Trackstring}`, {
        headers: Header,
      });
      const data = await res.json();

      setTracks(await data.tracks);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(tracks);

  return (
    <section className="container-favourite">
      <h3 className="container-favourite__title">Favorites</h3>
      <h3 className="container-favourite__song-title">Favorites Song</h3>
      <div className="container__cards">
        <FavoriteCard tracks={tracks} />
      </div>
    </section>
  );
};

export default Favorites;
