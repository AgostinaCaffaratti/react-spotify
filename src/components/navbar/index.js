import React from 'react'

const NavBar = () =>{ 
    <nav>
    <button className="navbar__button" >
        <img className="navbar__search--icon" alt="search logo" src={process.env.PUBLIC_URL + '/assets/loop.png'}/>
        <img className="navbar__arrow--icon" />
      </button>
    </nav>

    
}
export default NavBar