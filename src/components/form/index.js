import React, { useState } from "react";
import { ArtistEndpoint, Header } from "./../../config";
import './style.scss'


const Form = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
     setValue(e.target.value);
    console.log(value)
    
  };

  const getData = async (e) => {
    e.preventDefault()
    console.log(value)
   window.location='/artist';
    try {
      const res = await fetch(
        `${ArtistEndpoint.url}?q=${value}&type=${ArtistEndpoint.type}`,
        { headers: Header }
        );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="container-welcome__form" onSubmit={getData}>
      <input
        type="search"
        className="container-welcome__form--input"
        placeholder="Search for another Artist"
        onChange={handleChange}
        value={value}
      >

      </input>
    
    
      <button type='submit' className="container-welcome__form--button" />
     
   
      
    </form>
  );
};

export default Form;
