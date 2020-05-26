import React, { Fragment, useState, useEffect } from "react";
import LayoutGral from "../../components/layouts/layout-gral";
import "./style.scss";
import { Link, useParams } from "react-router-dom";
import Tracks from "./../../components/tracks/";
import { AlbumEndpoint, Header } from "./../../config";
import AlbumPresentation from "./../../components/album-presentation";

const Album = () => {
  const { id } = useParams();
  console.log(id);

  const [album, setAlbum] = useState("");

  useEffect(() => {
    obtenerAlbum();
  }, []);

  const obtenerAlbum = async () => {
    try {
      const res = await fetch(`${AlbumEndpoint.url}/${id}`, {
        headers: Header,
      });
      const data = await res.json();

      setAlbum(await data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(album);

  return (
    <LayoutGral>
      <Fragment>
        <section className="album">
          <AlbumPresentation album={album} />
          <nav className="album-container__nav">
            <ul className="artist-container__nav__list">
              <Link to="/">
                <li className="artist-container__nav__list--link">
                  <p className="artist-container__nav__list--p"> Home</p>
                </li>
              </Link>

              <Link to="/artists-list">
                <li>
                  <p className="artist-container__nav__list--p">> Artists</p>
                </li>
              </Link>
              <Link to="artist/:id">
                <li>
                  <p className="artist-container__nav__list--p">
                    > {album.artists && album.artists[0].name}
                  </p>
                </li>
              </Link>

              <li>
                <p className="artist-container__nav__list--p">> {album.name && album.name}</p>
              </li>
            </ul>
          </nav>

          <section className="songs-container__tables">
            <Tracks album={album} />
          </section>
        </section>
      </Fragment>
    </LayoutGral>
  );
};

export default Album;
