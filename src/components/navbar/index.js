import React from 'react'
import './style.scss'

const NavBar = ({onClick}) =>(
    <nav>
    <button className="navbar__button" onClick={onClick}>
        <img className="navbar__button--sicon" alt="search logo" src={process.env.PUBLIC_URL + '/assets/loop.png'}/>
        <img className="navbar__button--aicon"  alt='arrow-logo' src={process.env.PUBLIC_URL + '/assets/arrow.png'}/>
      </button>
    </nav>)

    

export default NavBar