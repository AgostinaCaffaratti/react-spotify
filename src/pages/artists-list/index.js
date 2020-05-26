import React, { Fragment, useEffect, useState } from "react";
import HeaderArtistsList from "./../../components/header-artists-list";
import Footer from "./../../components/footer";
import "./style.scss";
import { Link } from "react-router-dom";
import ArtistsListCard from "./../../components/artists-card";
import ArtistSearch from "./../../components/artist-search/artist-search";
import { useFetch } from "./../../context/fetchContext";
import { ArtistEndpoint, Header } from "./../../config/";

const ArtistsLists = () => {
  const { datos } = useFetch();

  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    try {
      const res = await fetch(`${ArtistEndpoint.url}?q=${datos}&type=${ArtistEndpoint.type}`, {
        headers: Header,
      });
      const artists = await res.json();

      setArtists(await artists.artists.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <HeaderArtistsList />
      <section className="artists">
        <ArtistSearch />
        <nav className="artists-container__nav">
          <ul className="artists-container__nav__list">
            <li>
              <Link className="artists-container__nav__list--p" to="/">
                <p className="artists-container__nav__list--p">Home</p>
              </Link>
            </li>
            <li>
              <p className="artists-container__nav__list--p">> Artists</p>
            </li>
          </ul>
        </nav>
        <div className="artists-container__cards">
          <ArtistsListCard artists={artists} />
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default ArtistsLists;
