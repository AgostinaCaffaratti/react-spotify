import {useState } from 'react'
import FetchContext from './../context/fetchContext'
import { ArtistEndpoint, Header } from "./../config";

export default function useFetch(){
  const [value, setValue] = useState('');

  const handleChange = (e) => {
     setValue(e.target.value);
    console.log(value)
    
  };

  const getData = async (e) => {
    e.preventDefault()
    console.log(value)
  //  window.location='/artists-list';
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
  return {value, handleChange, getData}
}
