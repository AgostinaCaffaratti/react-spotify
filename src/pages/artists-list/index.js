import React from "react";
import LayoutGral from "../../components/layouts/layout-gral";
import "./style.scss";
import { Link } from "react-router-dom";
import ArtistsListCard from "./../../components/artists-card";
import {useFetch} from './../../context/fetchContext'


const ArtistsLists = () => {
  const {info, datos  }= useFetch()
  console.log(info)
  console.log(datos)
  return(
  <LayoutGral>
    <section className="artists-container">
      <h1>Artists</h1>
      <p>You are Currently searching:</p>
      <nav className="artists-container__nav">
        <ul className="artists-container__nav__list">
          <li className="artists-container__nav__list--link">
            <Link to="/"> Home</Link>
          </li>
          <li>
            <p className="artists-container__nav__list--p">> Artists</p>
          </li>
        </ul>
      </nav>
      <div className="artists-container__cards">
     
          <ArtistsListCard />
       
          <ArtistsListCard />
        
      </div>
    </section>
  </LayoutGral>)
};

export default ArtistsLists;
