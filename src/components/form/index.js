import React from "react";
import {Redirect} from 'react-router-dom'

import './style.scss'
import {useFetch} from './../../context/fetchContext'

const Form = () => {
  
  const {value, handleChange, getData, redirect} = useFetch()
  

  

  return (
    <div>
    <form className="container-welcome__form" onSubmit={getData}>
      <input
        type="search"
        className="container-welcome__form--input"
        placeholder="Search for another Artist"
        onChange={handleChange}
        value={value}
      ></input>
      <button type='submit' className="container-welcome__form--button"/>
     
    </form>
    {redirect && <Redirect to='/artists-list'/>}
    </div>
  );
};

export default Form;
