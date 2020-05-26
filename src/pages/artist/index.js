import React, { Fragment, useState, useEffect } from "react";
import LayoutGral from "../../components/layouts/layout-gral";
import "./style.scss";
import { Link } from "react-router-dom";
import AlbumCard from "../../components/album-card";
import { useParams } from "react-router-dom";
import { IdArtistEndpoint, Header } from "../../config";
import ArtistPresentation from "./../../components/artist";

const Artist = () => {
  const { id } = useParams();
  console.log(id);

  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState();

  useEffect(() => {
    obtenerArtista();
    obtenerAlbum();
  }, []);

  const obtenerArtista = async () => {
    try {
      const res = await fetch(`${IdArtistEndpoint.url}/${id}`, {
        headers: Header,
      });
      const artist = await res.json();

      setArtist(await artist);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(artist);

  const obtenerAlbum = async () => {
    try {
      const res = await fetch(`${IdArtistEndpoint.url}/${id}/albums`, {
        headers: Header,
      });
      const data = await res.json();

      setAlbum(await data.items);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(album);

  return (
    <LayoutGral>
      <Fragment>
        <section className="artist">
          <ArtistPresentation artist={artist} />
          <nav className="artist-container__nav">
            <ul className="artist-container__nav__list">
              <li className="artist-container__nav__list--link">
                <Link to="/">
                  <p className="artist-container__nav__list--p">> Home</p>
                </Link>
              </li>

              <li>
                <Link to="/artists-list">
                  <p className="artist-container__nav__list--p">> Artists</p>
                </Link>
              </li>

              <li>
                <p className="artist-container__nav__list--p">> {artist.name}</p>
              </li>
            </ul>
          </nav>

          <div className="artist-container__cards">
            <AlbumCard album={album} />
          </div>
        </section>
      </Fragment>
    </LayoutGral>
  );
};

export default Artist;
