import React from 'react';
import './style.scss'


function App() {
  return (
    <div className="App">
      <header className='container-header' >
        <img className='container-header__logo' 
        src= {process.env.PUBLIC_URL + "/assets/logo.png"} 
        alt='logo'>

        </img>
        <img className='container-header__loop'
        src= {process.env.PUBLIC_URL + "/assets/loop.png"} 
        alt='logo'>

        </img>
        <form className='container-header__search'>
          <input type='search' 
          className='container-header__search--input' 
          placeholder='Search for another Artist'>
          </input>
        </form>
      </header>
      <section className='container-welcome'>
        <h3 className='container-welcome__title'>Welcome to</h3>
        <h1 className='container-welcome__h1'>SpotiSearch</h1>
        <p className='container-welcome__text'>Search your favourite songs over Spotify, 
          just enter an artistist's name in the following search box and enjoy!
        </p>
        <form className='container-welcome__title'>
          <input type='search' 
          className='container-welcome__title--input' 
          placeholder='Search for another Artist'>
          </input>
        </form>

      </section>
      
     
      

     
    </div>
  );
}

export default App;
